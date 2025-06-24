<template>
  <div>
    <!-- Hero Section with Video Background -->
    <section ref="hero" class="hero-section">
      <!-- <video autoplay muted loop playsinline class="video-bg">
        <source src="/video/space.mp4" type="video/mp4" />
      </video> -->
      <div class="video-bg youtube-bg">
        <iframe
          src="https://www.youtube.com/embed/pMzBmwQZfUM?si=3Njwzxvbp8Ua9yAZ&autoplay=1&mute=1&playsinline=1&loop=1&controls=0&playlist=pMzBmwQZfUM"
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
        <p class="text-subtitle-1 white--text">公安対魔特務六課</div> -->
        <v-img class="logo-image" src="/image/Yatagarasu_Logo.webp"></v-img>
      </div>
    </section>

    <!-- Background Images (positioned absolutely behind content) -->
    <div class="backgrounds">
      <div
        v-for="(bg, i) in backgrounds"
        :key="i"
        :style="{
          backgroundImage: `url(/image/${bg})`,
        }"
        :ref="el => bgRefs[i] = el as HTMLElement"
        class="background-image"
      ></div>
    </div>
    <section ref="section0" class="pinned-section">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="header-content text-h4 font-weight-bold my-6">
              守り抜け、この世界の理を
            </h2>
            <div class="child-content text-body-1 text-medium-emphasis mb-4">
              当サイトは、VRChat上で活動するクリエイティブプロジェクト、「公安対魔特務六課八咫烏」の公式HPです
            </div>
            <div class="child-content text-body-1 text-medium-emphasis mb-4">
              　架空の警察「八咫烏」をテーマに映像・音楽・３Ｄモデルの制作・脚本製作などを通した創作活動を行っています
            </div>
            <div class="child-content">
              <v-carousel
                hide-delimiters
                height="320"
                cycle
                show-arrows="hover"
                class="my-8"
              >
                <v-carousel-item
                  v-for="(img, i) in carouselImages"
                  :key="i"
                  :src="img"
                />
              </v-carousel>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section ref="section1" class="pinned-section">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="header-content text-h4 font-weight-bold my-6">
              「八咫烏」とは
            </h2>
            <div class="child-content text-body-1 text-medium-emphasis mb-10">
              ──西暦2044年、東京
            </div>
            <div class="child-content text-body-1 text-medium-emphasis mb-4">
              目に見えぬ恐怖、理を超えた存在——「怪異」
            </div>
            <div class="child-content text-body-1 text-medium-emphasis mb-10">
              その脅威は、日常の隙間から静かに世界を蝕んでいた
            </div>
            <div class="child-content text-body-1 text-medium-emphasis mb-10">
              人々が知らぬその裏側で、ある機関が動いていた
            </div>
            <div class="child-content text-h6 font-weight-bold mb-4">
              「神祇省（じんぎしょう）」
            </div>
            <div class="child-content text-body-1 text-medium-emphasis mb-4">
              祭祀と祓いを統べる、国家直属の超常対策行政機関。
            </div>
            <div class="child-content text-body-1 text-medium-emphasis mb-10">
              そこには、平安より続く秘術と、現代の科学を融合させた者たちがいる
            </div>
            <div class="child-content text-body-1 text-medium-emphasis mb-4">
              弾丸を筆頭に現代化された個人装備
            </div>
            <div class="child-content text-body-1 text-medium-emphasis mb-4">
              時には科学技術さえも取り込んだ「最新の陰陽師」たち
            </div>
            <div class="child-content text-body-1 text-medium-emphasis mb-10">
              その名は──
            </div>
            <div class="child-content text-h6 font-weight-bold mb-4">
              公安対魔特務六課《八咫烏》
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section ref="section2" class="pinned-section">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="header-content text-h4 font-weight-bold my-6">
              お知らせ
            </h2>
            <div class="child-content">
              <EventList
                :googleApiKey="googleApiKey"
                :historyCalendarId="historyCalendarId"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section ref="section3" class="pinned-section">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="header-content text-h4 font-weight-bold my-6">NEWS</h2>
            <h5 class="child-content text-h5 font-weight-bold mb-10">
              「舞台八咫烏 過去編」再公演決定！
            </h5>
            <div class="child-content text-body-1 text-medium-emphasis mb-4">
              7月5日 22:00 開演！
            </div>
            <div class="child-content text-body-1 text-medium-emphasis mb-10">
              魔特六課八咫烏 Group+にて開催します。miyabi_12にJoin！
            </div>
            <div class="child-content mb-10">
              <v-img
                class="section-image"
                src="https://i.gyazo.com/303b15b3ef996d1a5183b495d014eb03.webp"
                @click="
                  openX(
                    `https://x.com/m_yata_official/status/1936257778177524118`
                  )
                "
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <v-footer class="text-center d-flex flex-column ga-2 py-4 z-10">
      <div class="d-flex ga-3">
        <v-btn
          icon="mdi-twitter"
          density="comfortable"
          variant="text"
          @click="openX(`https://x.com/m_yata_official`)"
        ></v-btn>
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
const eventCalendarId = ref("");
const historyCalendarId = ref("");
const googleApiKey = ref("");
const carouselImages: string[] = ref([]);
onMounted(async () => {
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
      el.querySelector(".header-content"),
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
      el.querySelectorAll(".child-content"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        stagger: 0.4,
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbwNxpIkWmwe4Th9dpVEOY3foF4FVQVZQx93zJZNE0-SF_nnQS2Nka9qYfJk85FJ2vxK/exec"
  );
  const data = await response.json();
  if (data) {
    googleApiKey.value = data.googleApiKey;
    eventCalendarId.value = data.eventCalendarId;
    historyCalendarId.value = data.historyCalendarId;
    carouselImages.value = (data.images || []).map(convertUrl);
  }
});

// GoogleドライブURLを変換する関数
function convertUrl(driveUrl: string): string {
  const match = driveUrl.match(/file\/d\/([\w-]+)\/view\?/);
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }
  return driveUrl;
}

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

.background-image::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* ここで暗さを調整 */
  pointer-events: none;
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

.section-image {
  height: 70vw;
  max-height: 600px;
  min-height: 370px;
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
