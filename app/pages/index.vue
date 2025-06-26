<template>
  <div>
    <!-- Hero Section with Video Background -->
    <section ref="hero" class="hero-section">
      <div class="video-bg">
        <iframe
          src="https://www.youtube.com/embed/pMzBmwQZfUM?si=3Njwzxvbp8Ua9yAZ&autoplay=1&mute=1&playsinline=1&loop=1&controls=0&playlist=pMzBmwQZfUM"
          title="YouTube video player"
          frameborder="0"
          allow="autoplay; fullscreen"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div class="hero-content">
        <v-img class="logo-image" src="/image/Yatagarasu_Logo.webp"></v-img>
      </div>
      <div class="scroll-down-indicator-fixed">
        <span class="arrow">&#x25BC;</span>
      </div>
    </section>

    <div style="display: none">
      <img
        v-for="(item, i) in backgrounds"
        :key="i"
        :src="item"
        @load="onImageLoad()"
        @error="onImageLoad()"
      />
    </div>
    <!-- Background Images -->
    <div class="backgrounds">
      <div
        v-for="(bg, i) in backgrounds"
        :key="i"
        :style="{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(image/poster/${bg})`,
        }"
        :ref="el => bgRefs[i] = el as HTMLElement"
        class="background-image"
      ></div>
    </div>

    <!-- Content Section (セクション数=画像数) -->
    <v-container>
      <section ref="section1" class="pinned-section">
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="header-content text-h4 text-md-h2 font-weight-bold mt-6">
              イントロダクション
            </h2>
            <v-divider class="child-content mt-2 mb-6" />
            <div class="child-content mb-4">
              <v-row align="center">
                <v-col class="text-center text-lg-left" cols="12" lg="6">
                  <v-responsive class="mx-auto" max-width="500">
                    <h1 class="text-h6 text-md-h5 font-weight-bold mb-4">
                      守り抜け、この世界の理を
                    </h1>
                    <p
                      class="child-content text-body-1 text-medium-emphasis mb-4"
                    >
                      当サイトは、架空の警察「八咫烏」をテーマにVRChat上で活動するコミュニティ、
                    </p>
                    <p
                      class="child-content text-body-1 text-medium-emphasis mb-4"
                    >
                      「神祇省公安対魔特務六課八咫烏」の公式HPです。
                    </p>
                  </v-responsive>
                </v-col>

                <v-col cols="12" lg="6">
                  <div style="display: none">
                    <img
                      v-for="(item, i) in carouselImages"
                      :key="i"
                      :src="item"
                      @load="onImageLoad()"
                      @error="onImageLoad()"
                    />
                  </div>
                  <v-carousel
                    cycle
                    hide-delimiters
                    height="auto"
                    class="side-carousel"
                  >
                    <v-carousel-item
                      v-for="(item, i) in carouselImages"
                      :key="i"
                      :src="item"
                      height="auto"
                    ></v-carousel-item>
                  </v-carousel>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </section>

      <section ref="section2" class="pinned-section">
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="header-content text-h4 text-md-h2 font-weight-bold mt-6">
              世界観
            </h2>
            <v-divider class="child-content mt-2 mb-6" />
            <div class="child-content text-body-1 text-medium-emphasis mb-10">
              ──西暦2044年、東京
            </div>
            <div class="child-content text-body-1 text-medium-emphasis mb-4">
              目に見えぬ恐怖、理を超えた存在──「怪異」
            </div>
            <div class="child-content text-body-1 text-medium-emphasis mb-10">
              その脅威は、日常の隙間から静かに世界を蝕んでいた。
            </div>
            <div class="child-content text-body-1 text-medium-emphasis mb-10">
              人々が知らぬその裏側で、ある機関が動いていた。
            </div>
            <div class="child-content text-h6 font-weight-bold mb-4">
              「神祇省（じんぎしょう）」
            </div>
            <div class="child-content text-body-1 text-medium-emphasis mb-4">
              祭祀と祓いを統べる、国家直属の超常対策行政機関。
            </div>
            <div class="child-content text-body-1 text-medium-emphasis mb-10">
              そこには、平安より続く秘術と、現代の科学を融合させた者たちがいる。
            </div>
            <div class="child-content text-body-1 text-medium-emphasis mb-4">
              弾丸を筆頭に現代化された個人装備、
            </div>
            <div class="child-content text-body-1 text-medium-emphasis mb-4">
              時には科学技術さえも取り込んだ「最新の陰陽師」たち。
            </div>
            <div class="child-content text-body-1 text-medium-emphasis mb-10">
              その名は──
            </div>
            <div class="child-content text-h6 font-weight-bold mb-4">
              特務六課《八咫烏》
            </div>
          </v-col>
        </v-row>
      </section>

      <section ref="section3" class="pinned-section">
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="header-content text-h4 text-md-h2 font-weight-bold mt-6">
              活動内容
            </h2>
            <v-divider class="child-content mt-2 mb-6" />
            <div class="child-content mb-4">
              <v-responsive class="text-center mx-auto" max-width="700">
                <p class="mt-4 text-body-1 text-medium-emphasis">
                  映像・音楽・３Ｄモデルの制作・脚本製作などを通した創作活動を行っています。
                </p>
              </v-responsive>
              <v-row class="mt-8">
                <v-col
                  v-for="(item, i) in features"
                  :key="i"
                  class="d-flex"
                  cols="12"
                  md="4"
                >
                  <v-responsive class="mx-auto" max-width="500" width="100%">
                    <v-list-item
                      class="px-0"
                      rounded="lg"
                      :subtitle="item.subtitle"
                    >
                      <template #title>
                        <p class="text-body-2 font-weight-bold pb-2">
                          <v-icon class="mr-2" :icon="item.icon" size="small" />
                          {{ item.title }}
                        </p>
                      </template>
                      <v-chip
                        append-icon="mdi-arrow-right"
                        class="mt-6"
                        link
                        text="Learn more"
                        @click="openWindow(item.link)"
                      >
                        サイトへ移動
                      </v-chip>
                    </v-list-item>
                  </v-responsive>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </section>

      <section ref="section4" class="pinned-section">
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="header-content text-h4 text-md-h2 font-weight-bold mt-6">
              NEWS
            </h2>
            <v-divider class="child-content mt-2 mb-6" />
            <div class="child-content mb-4">
              <v-row dense>
                <v-col cols="12" lg="6">
                  <v-card class="mx-auto" max-width="400">
                    <v-img
                      class="align-end text-white"
                      position="top"
                      height="200"
                      src="/image/poster/photocon.webp"
                      cover
                    >
                      <v-card-title class="text-shadow-lg bg-black/50">
                        フォトコンテスト終了！
                      </v-card-title>
                    </v-img>
                    <v-card-subtitle class="pt-4">
                      2025年5月度フォトコンテスト
                    </v-card-subtitle>
                    <v-card-text class="min-h-[6rem]">
                      <div>詳細は公式Xアカウントのツリーをご確認ください。</div>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        color="orange"
                        text="詳細"
                        @click="
                          openWindow(
                            `https://x.com/m_yata_official/status/1934174601128595876`
                          )
                        "
                      ></v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-card class="mx-auto" max-width="400">
                    <v-img
                      class="align-end text-white"
                      position="top"
                      height="200"
                      src="https://i.gyazo.com/303b15b3ef996d1a5183b495d014eb03.webp"
                      cover
                    >
                      <v-card-title class="text-shadow-lg bg-black/50">
                        「舞台八咫烏 過去編」再公演！
                      </v-card-title>
                    </v-img>
                    <v-card-subtitle class="pt-4">
                      7月5日 22:00 開演！
                    </v-card-subtitle>
                    <v-card-text class="min-h-[6rem]">
                      <div>魔特六課八咫烏 Group+にて開催します。</div>
                      <div>miyabi_12にJoin！</div>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        color="orange"
                        text="詳細"
                        @click="
                          openWindow(
                            `https://x.com/m_yata_official/status/1936257778177524118`
                          )
                        "
                      ></v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </section>

      <section ref="section5" class="pinned-section">
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="header-content text-h4 text-md-h2 font-weight-bold my-6">
              新着情報
            </h2>
            <div class="child-content">
              <EventList :events="events" />
            </div>
          </v-col>
        </v-row>
      </section>

      <section ref="section6" class="pinned-section mb-20 sm:mb-4">
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="header-content text-h4 text-md-h2 font-weight-bold mt-6">
              メンバー（一部）
            </h2>
            <v-divider class="child-content mt-2 mb-6" />
            <div class="child-content mb-4">
              <v-row justify="center">
                <v-col v-for="(item, i) in members" :key="i" cols="12" sm="4">
                  <v-list-item
                    class="px-0"
                    :subtitle="item.subtitle"
                    :title="item.title"
                  >
                    <template #prepend>
                      <v-avatar
                        color="surface-light"
                        :image="item.avatar"
                        :size="48"
                      />
                    </template>
                  </v-list-item>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </section>
    </v-container>

    <!-- Footer Section -->
    <v-footer class="text-center d-flex flex-column ga-2 py-4 z-10">
      <div class="d-flex ga-3">
        <v-btn
          icon="mdi-twitter"
          density="comfortable"
          variant="text"
          @click="openWindow(`https://x.com/m_yata_official`)"
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
import { useProgress } from "~/composables/useProgress";
import { features, members } from "~/utils";

const { setLoading } = useLoading();
const { initProgress, incrementProgress, forceFinish } = useProgress();

const backgrounds = [
  "shibuya.webp",
  "encount.webp",
  "motor.webp",
  "iori.webp",
  "kurame.webp",
  "tuihou.webp",
];

const section1 = ref<HTMLElement | null>(null);
const section2 = ref<HTMLElement | null>(null);
const section3 = ref<HTMLElement | null>(null);
const section4 = ref<HTMLElement | null>(null);
const section5 = ref<HTMLElement | null>(null);
const section6 = ref<HTMLElement | null>(null);

const sectionRefs = [
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
];
const bgRefs = ref<HTMLElement[]>([]);

gsap.registerPlugin(ScrollTrigger);

type EventType = {
  timestamp: string;
  category: string;
  content: string;
  date: string;
  url: string;
};

const carouselImages = ref([] as string[]);
const events = ref([] as EventType[]);

onMounted(async () => {
  initProgress(20); // 読み込み要素の総数。なるべくキリの良い数字で...(現在：写真6枚,写真13枚,fetch1箇所)
  setLoading(true);

  try {
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      gsap.to(
        [
          heroSection.querySelector(".video-bg"),
          heroSection.querySelector(".hero-content"),
          heroSection.querySelector(".scroll-down-indicator-fixed"),
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
    incrementProgress();
    if (data) {
      events.value = (data.events || []).reverse();
      const shuffled = (data.images || [])
        .slice()
        .sort(() => Math.random() - 0.5);
      carouselImages.value = shuffled.slice(0, 13).map(convertUrl);
    }
  } catch (error) {
    forceFinish();
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

function openWindow(url: string) {
  window.open(url, "_blank", "noreferrer");
}

function onImageLoad() {
  incrementProgress();
}
</script>

<style scoped>
body {
  background-color: #080f13;
}

.hero-section {
  position: relative;
  height: 120vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  opacity: 0;
  transition: opacity 0.5s ease;
}

.pinned-section {
  height: 120vh;
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

.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  pointer-events: none;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-bg iframe {
  height: 100vh;
  width: auto;
  max-width: 177.78vh; /* 16:9比率で最大幅を制限 */
  aspect-ratio: 16 / 9;
  pointer-events: none;
  display: block;
}

.side-carousel {
  width: auto;
  height: auto;
}

.scroll-down-indicator-fixed {
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInOut 2s infinite;
  user-select: none;
  z-index: 10;
}
.arrow {
  font-size: 2.2rem;
  color: #fff;
  animation: arrowBounce 1.2s infinite;
  text-shadow: 0 2px 8px #000a;
}

@keyframes fadeInOut {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}
@keyframes arrowBounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(12px);
  }
}
</style>
