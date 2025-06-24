<template>
  <div>
    <!-- Hero Section with Video Background -->
    <section ref="hero" class="hero-section">
      <!-- <video autoplay muted loop playsinline class="video-bg">
        <source src="/video/space.mp4" type="video/mp4" />
      </video> -->
      <div class="video-bg youtube-bg">
        <iframe
          src="https://www.youtube.com/embed/pMzBmwQZfUM?si=3Njwzxvbp8Ua9yAZ&autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="autoplay; fullscreen"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          style="width: 100%; height: 100%; position: absolute; top: 0; left: 0"
        ></iframe>
      </div>
      <div class="hero-content">
        <!-- <h1 class="text-h2 white--text font-weight-bold">八咫烏</h1>
        <p class="text-subtitle-1 white--text">公安対魔特務六課</p> -->
        <v-img class="logo-image" src="/image/Yatagarasu_Logo.webp"></v-img>
      </div>
    </section>

    <!-- Background Images (positioned absolutely behind content) -->
    <div class="backgrounds">
      <div
        v-for="(bg, i) in backgrounds"
        :key="i"
        :style="{ backgroundImage: `url(/image/${bg})` }"
        :ref="el => bgRefs[i] = el as HTMLElement"
        class="background-image"
      ></div>
    </div>
    <section ref="section0" class="pinned-section">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="text-h4 font-weight-bold">守り抜け、この世界の理を</h2>
            <p>
              当サイトは、VRChat上で活動するクリエイティブプロジェクト、「公安対魔特務六課八咫烏」の公式HPです。
            </p>
            <p>
              　架空の警察「八咫烏」をテーマに映像・音楽・３Ｄモデルの制作・脚本製作などを通した創作活動を行っています。
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section ref="section1" class="pinned-section">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="text-h4 font-weight-bold">「八咫烏」とは</h2>
            <p>
              西暦2044年、東京。<br />
              魔特六課「八咫烏」は神祇省に設置される法執行機関。一般の警察などの法執行機関が対処しきれない存在「怪異」が事件・事故を起こす時、その処理に八咫烏が派遣される。<br />
              公安と名が付いているが、職務の便宜上公安と名乗っているに過ぎない。揮系統は警察庁、そして国家公安委員会から完全に独立し、直接の命令は神祇省祭祀課が執り行う。<br />
              八咫烏の装備は、平安時代から受け継がれる陰陽師の技術を現代風にアレンジし、ジャケットやライフルに怪異に対する効果を付与している。<br />
              部隊を構成する隊員のほとんどを10～20代の少女が大半を占めている。大人と比較して霊的な存在との結びつきが強い少女たちは、怪異に干渉する能力が高い。さらに隊員の一部は妖や怪異の結びつきが強くなりすぎて、妖怪と一つになった存在、所謂「半妖」となった個体もいる。<br />
              半妖となった個体は現行の法律では定義が難しく、祭祀課は彼女らを保護する役割も担っている。
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section ref="section2" class="pinned-section">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="text-h4 font-weight-bold">
              「舞台八咫烏 過去編」再公演決定！
            </h2>
            <p>7月5日 22:00 開演！</p>
            <p>魔特六課八咫烏 Group+にて開催します。miyabi_12にJoin！</p>
            <v-img
              src="https://i.gyazo.com/303b15b3ef996d1a5183b495d014eb03.webp"
              @click="
                openX(
                  `https://x.com/m_yata_official/status/1936257778177524118`
                )
              "
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section ref="section3" class="pinned-section">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="text-h4 font-weight-bold">お知らせ</h2>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <v-footer class="text-center d-flex flex-column ga-2 py-4 z-10">
      <div class="d-flex ga-3">
        <v-btn icon="mdi-twitter" density="comfortable" variant="text"></v-btn>
      </div>
      <v-divider class="my-2" thickness="2" width="50"></v-divider>
      <div class="text-caption font-weight-regular opacity-60">
        「公安対魔特務六課
        八咫烏」の物語はフィクションです。実在の人物、団体とは一切関係ございません。
      </div>
      <v-divider></v-divider>
      <div>
        <strong>© 2023 miyabi All Rights Reserved.</strong>
      </div>
    </v-footer>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
import { useLoading } from "~/composables/useLoading";

const { setLoading } = useLoading();

const sections = [
  { title: "Our Mission", text: "To boldly go where few have gone before." },
  { title: "The Experience", text: "Zero gravity, infinite views." },
  {
    title: "Safety First",
    text: "Redundant systems and elite pilots ensure safety.",
  },
  { title: "Join Us", text: "Book your seat for the edge of space." },
];

const backgrounds = ["1.webp", "2.webp", "3.webp", "4.webp"];

const section0 = ref<HTMLElement | null>(null);
const section1 = ref<HTMLElement | null>(null);
const section2 = ref<HTMLElement | null>(null);
const section3 = ref<HTMLElement | null>(null);

const sectionRefs = [section0, section1, section2, section3];
const bgRefs = ref<HTMLElement[]>([]);
const particlesSection = ref<HTMLElement | null>(null);

gsap.registerPlugin(ScrollTrigger);

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

onMounted(() => {
  setLoading(true);

  const heroSection = document.querySelector(".hero-section");
  if (heroSection) {
    gsap.to(
      [
        heroSection.querySelector(".video-bg"),
        heroSection.querySelector(".hero-content"),
      ],
      {
        opacity: 0,
        scrollTrigger: {
          trigger: heroSection,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }

  sectionRefs.forEach((sectionRef, index) => {
    const el = sectionRef.value;
    if (!el) return;

    // 背景切替（同じ）
    ScrollTrigger.create({
      trigger: el,
      start: "top center",
      onEnter: () => {
        bgRefs.value.forEach((bgEl, i) => {
          if (!bgEl) return;
          gsap.to(bgEl, { opacity: i === index ? 1 : 0, duration: 1 });
        });
      },
      onEnterBack: () => {
        bgRefs.value.forEach((bgEl, i) => {
          if (!bgEl) return;
          gsap.to(bgEl, { opacity: i === index ? 1 : 0, duration: 1 });
        });
      },
    });
    if (!gsap) return;
    // テキストふわっと
    gsap.fromTo(
      el.querySelector("h2"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      el.querySelector("p"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });
});

function openX(url) {
  window.open(url, "_blank", "noreferrer");
}
</script>

<style scoped>
body {
  background-color: #080f13;
}

.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
}
.hero-content {
  z-index: 3;
}
.backgrounds {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: blur(1px);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.pinned-section {
  height: 100vh;
  display: flex;
  align-items: center;
  color: white;
  text-align: center;
  background-color: transparent;
  position: relative;
  z-index: 2;
}

.logo-image {
  width: 50vw;
  max-width: 800px;
  min-width: 370px;
}

.video-bg.youtube-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  overflow: hidden;
}
.video-bg.youtube-bg iframe {
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
