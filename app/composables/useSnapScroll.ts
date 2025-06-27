import { onBeforeUnmount, onMounted } from "vue";

export const useSnapScroll = (selector: string, offset = -40) => {
  const { $lenis } = useNuxtApp();

  let timeout: ReturnType<typeof setTimeout> | null = null;

  const snapToSection = () => {
    const sections = Array.from(
      document.querySelectorAll(selector)
    ) as HTMLElement[];
    if (sections.length === 0) return;

    const scrollY = window.scrollY;

    // 一番近いセクションを探す
    const nearest = sections.reduce((prev, curr) => {
      const prevDist = Math.abs(prev.offsetTop - scrollY);
      const currDist = Math.abs(curr.offsetTop - scrollY);
      return currDist < prevDist ? curr : prev;
    });

    // すでに十分近い場合は何もしない（ガタつき防止）
    const nearestTop = nearest.offsetTop + offset;
    if (Math.abs(scrollY - nearestTop) < offset) return;

    $lenis.scrollTo(nearest, {
      offset,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  const onScrollEnd = () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      snapToSection();
    }, 120);
  };

  onMounted(() => {
    window.addEventListener("scroll", onScrollEnd);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScrollEnd);
  });
};
