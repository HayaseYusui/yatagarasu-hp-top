import gsap from "gsap";
import { computed, ref, watch } from "vue";

const count = ref(0);
const total = ref(1);
const rawProgress = computed(() =>
  Math.min(1, Math.max(0, count.value / total.value))
);

const animatedProgress = ref(0);

let updateTween: (value: number) => void;

// 初期化関数
function initProgress(totalSteps: number) {
  total.value = totalSteps;
  count.value = 0;

  // GSAPのquickToで滑らかに animatedProgress を更新
  updateTween = gsap.quickTo(animatedProgress, "value", {
    duration: 0.5,
    ease: "power2.out",
  });
}

// 増加関数
function incrementProgress() {
  if (count.value < total.value) {
    count.value++;
  }
}

// 進捗が変わるたびに滑らかに反映
watch(rawProgress, (newVal) => {
  if (updateTween) {
    updateTween(newVal);
  } else {
    animatedProgress.value = newVal;
  }
});

function forceFinish() {
  count.value = total.value;
}
export function useProgress() {
  return {
    count,
    total,
    progress: animatedProgress, // ✅ これを外部に使う
    initProgress,
    incrementProgress,
    forceFinish,
  };
}
