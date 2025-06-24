<template>
  <v-app id="inspire">
    <div class="loading-overlay6" v-if="loading">
      <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
      <svg
        id="fingerprint-svg"
        width="200"
        height="200"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="fingerprint"
      >
        <!-- スキャンライン -->
        <!-- <circle
          class="scan-circle"
          cx="24"
          cy="24"
          r="24"
          stroke="#00ffff"
          stroke-width="1"
          fill="none"
        /> -->
        <!-- 指紋パス -->
        <path
          id="fingerprint-path"
          fill="#ffffff"
          d="M10.0208 21V31C10.0208 31.5523 9.57305 32 9.02077 32C8.46848 32 8.02077 31.5523 8.02077 31V21C8.02077 12.7157 14.7365 6 23.0208 6H25.0208C28.1211 6 31.0832 6.94415 33.5756 8.67693C34.0291 8.99219 34.1411 9.61537 33.8258 10.0688C33.5106 10.5223 32.8874 10.6343 32.4339 10.3191C30.274 8.81739 27.7095 8 25.0208 8H23.0208C15.8411 8 10.0208 13.8203 10.0208 21ZM35.6728 13.5448C36.4702 14.6817 37.0805 15.9383 37.4793 17.2746C37.6373 17.8038 38.1944 18.1048 38.7236 17.9468C39.2528 17.7889 39.5538 17.2318 39.3958 16.7026C38.9352 15.1596 38.2305 13.7085 37.3103 12.3964C36.9932 11.9442 36.3695 11.8348 35.9174 12.1519C35.4652 12.469 35.3557 13.0926 35.6728 13.5448ZM39.0208 20C38.4685 20 38.0208 20.4477 38.0208 21V41C38.0208 41.5523 38.4685 42 39.0208 42C39.573 42 40.0208 41.5523 40.0208 41V21C40.0208 20.4477 39.573 20 39.0208 20ZM23.0208 14H25.0208C28.8865 14 32.0208 17.1343 32.0208 21V33C32.0208 37.5152 30.3941 40 27.0208 40C23.4947 40 22.0208 38.0184 22.0208 34V22C22.0208 20.8955 22.9158 20 24.0208 20C25.1257 20 26.0208 20.8955 26.0208 22V26.958C26.0208 27.5103 26.4685 27.958 27.0208 27.958C27.5731 27.958 28.0208 27.5103 28.0208 26.958V22C28.0208 19.7911 26.2305 18 24.0208 18C21.8111 18 20.0208 19.7911 20.0208 22V34C20.0208 39.0162 22.2401 42 27.0208 42C31.7205 42 34.0208 38.4862 34.0208 33V21C34.0208 16.0297 29.9911 12 25.0208 12H23.0208C22.4685 12 22.0208 12.4477 22.0208 13C22.0208 13.5523 22.4685 14 23.0208 14ZM19.4655 14.9671C17.6133 16.0635 16.3532 17.952 16.0781 20.1016C16.008 20.6494 15.507 21.0366 14.9592 20.9665C14.4114 20.8964 14.0241 20.3955 14.0943 19.8476C14.4483 17.0815 16.068 14.6541 18.4468 13.2461C18.9221 12.9647 19.5354 13.122 19.8167 13.5972C20.098 14.0725 19.9408 14.6858 19.4655 14.9671ZM16.0208 41V23.992C16.0208 23.4397 15.5731 22.992 15.0208 22.992C14.4685 22.992 14.0208 23.4397 14.0208 23.992V41C14.0208 41.5523 14.4685 42 15.0208 42C15.5731 42 16.0208 41.5523 16.0208 41ZM25.9524 31.0254V34.9794C25.9524 35.5317 26.4001 35.9794 26.9524 35.9794C27.5047 35.9794 27.9524 35.5317 27.9524 34.9794V31.0254C27.9524 30.4731 27.5047 30.0254 26.9524 30.0254C26.4001 30.0254 25.9524 30.4731 25.9524 31.0254ZM10.0004 36.995V41.043C10.0004 41.5953 9.55265 42.043 9.00037 42.043C8.44808 42.043 8.00037 41.5953 8.00037 41.043V36.995C8.00037 36.4427 8.44808 35.995 9.00037 35.995C9.55265 35.995 10.0004 36.4427 10.0004 36.995Z"
        />
      </svg>

      <!-- ✔ マーク -->
      <div class="auth-check" ref="checkMark">✔</div>

      <!-- ACCESS GRANTED テキスト -->
      <div class="auth-text" ref="authText">ACCESS GRANTED</div>
    </div>
    <slot />
  </v-app>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { useLoading } from "~/composables/useLoading";
const { loading, setLoading } = useLoading();

const checkMark = ref<HTMLElement | null>(null);
const authText = ref<HTMLElement | null>(null);

watch(loading, async (newVal) => {
  if (newVal) {
    await nextTick();

    const path = document.querySelector("#fingerprint-path") as SVGPathElement;
    const scanCircle = document.querySelector(
      ".scan-circle"
    ) as SVGCircleElement;
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    path.style.stroke = "#ffffff";
    path.style.fill = "none";

    const tl = gsap.timeline();

    tl.to(path, {
      strokeDashoffset: 0,
      duration: 0.8,
      ease: "power2.out",
    })
      .to(
        path,
        {
          stroke: "#4caf50",
          duration: 0.8,
          ease: "power1.inOut",
        },
        "-=0.5"
      )
      .to(checkMark.value, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        ease: "back.out(1.7)",
      })
      .to(
        authText.value,
        {
          opacity: 1,
          y: -20,
          duration: 0.2,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .to(".loading-overlay6", {
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
        onComplete: () => setLoading(false),
      });

    // 円形スキャンライン回転（ループ演出）
    gsap.to(scanCircle, {
      rotate: 360,
      transformOrigin: "center",
      repeat: -1,
      duration: 3,
      ease: "linear",
    });
  }
});
</script>
<style>
.fingerprint {
  stroke-width: 1.5;
}

.scan-circle {
  opacity: 0.3;
  stroke-dasharray: 2, 3;
  transform-origin: center;
  transform-box: fill-box;
}

.loading-overlay6 {
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: opacity 0.3s ease;
}

.auth-check {
  font-size: 3rem;
  color: #4caf50;
  font-weight: bold;
  opacity: 0;
  margin-top: 20px;
  transform: scale(0.5);
}

.auth-text {
  font-size: 1.2rem;
  color: #4caf50;
  font-weight: bold;
  opacity: 0;
  margin-top: 10px;
  transform: translateY(10px);
  letter-spacing: 2px;
  text-transform: uppercase;
}
</style>
