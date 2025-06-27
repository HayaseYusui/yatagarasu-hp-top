// plugins/lenis.client.ts

import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineNuxtPlugin((nuxtApp) => {
  const lenis = new Lenis({
    lerp: 0.1,
    duration: 1.2,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Lenis のスクロールを ScrollTrigger に同期させる
  lenis.on("scroll", ScrollTrigger.update);

  // ScrollTrigger にカスタムスクロールを教える
  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      if (value !== undefined) {
        lenis.scrollTo(value);
      }
      return lenis.scroll;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // ピン留め要素に transform を使うかどうか
    pinType: document.body.style.transform ? "transform" : "fixed",
  });

  // レイアウト変更時に ScrollTrigger を更新
  ScrollTrigger.addEventListener("refresh", () => lenis.raf(performance.now()));
  ScrollTrigger.refresh();

  nuxtApp.provide("lenis", lenis);
});
