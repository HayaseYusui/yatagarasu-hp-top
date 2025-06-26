<template>
  <div>
    <div class="loading-overlay1" v-if="loading">
      <div class="loader1"></div>
    </div>
    <div style="display: none">
      <img
        v-for="(item, i) in imageitems"
        :key="i"
        :src="item.src"
        eager
        @load="onImageLoad()"
        @error="onImageLoad()"
      />
    </div>
    <v-container>
      <v-responsive class="mx-auto text-center" max-width="600">
        <p class="font-weight-bold text-sm-h2 text-h4 mt-2'">ギャラリー</p>
        <p class="mt-4 text-body-1 text-medium-emphasis">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
      </v-responsive>
      <v-tabs v-model="selectedTab" grow center-active>
        <v-tab v-for="(date, index) in dates" :key="'tab-' + index">{{
          date
        }}</v-tab>
      </v-tabs>

      <v-tabs-window v-model="selectedTab" class="mt-6">
        <v-tabs-window-item
          v-for="(date, index) in dates"
          :key="'tab-item-' + index"
        >
          <v-row dense>
            <v-col
              v-for="card in groupedImages[date]"
              :key="card.title"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card class="my-4">
                <v-img
                  :src="card.src"
                  class="align-end cursor-pointer"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                  cover
                  @click="openDialog(card)"
                >
                  <template v-slot:placeholder>
                    <v-row
                      align="center"
                      class="fill-height ma-0"
                      justify="center"
                    >
                      <v-progress-circular
                        color="grey-lighten-5"
                        indeterminate
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <v-card-title
                    v-if="card.title"
                    class="text-white"
                    v-text="card.title"
                  ></v-card-title>
                </v-img>
                <!-- <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    color="medium-emphasis"
                    icon="mdi-heart"
                    size="small"
                  ></v-btn>

                  <v-btn
                    color="medium-emphasis"
                    icon="mdi-bookmark"
                    size="small"
                  ></v-btn>

                  <v-btn
                    color="medium-emphasis"
                    icon="mdi-share-variant"
                    size="small"
                  ></v-btn>
                </v-card-actions> -->
              </v-card>
            </v-col>
          </v-row>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-container>
    <v-dialog v-model="dialog" fullscreen persistent>
      <v-card class="pa-0" style="background-color: black">
        <div class="zoom-wrapper">
          <div ref="panzoomEl">
            <img
              :src="selectedImage?.src"
              class="zoom-image"
              draggable="false"
            />
          </div>
        </div>

        <v-btn icon class="close-btn" @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "empty" });
import panzoom, { type PanZoom } from "panzoom";
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

const { loading, setLoading } = useLoading();

type ImageData = {
  src: string;
  title?: string;
  date: string;
};

// 画像モック
const imageitems = ref<ImageData[]>([]);

const dates = computed(() => Object.keys(groupedImages.value).sort());

// dateごとにグループ化
const groupedImages = computed(() => {
  const groups: Record<string, ImageData[]> = {};
  for (const item of imageitems.value) {
    const ym = item.date.slice(0, 7); // "YYYY-MM"
    if (!groups[ym]) {
      groups[ym] = [];
    }
    groups[ym].push(item);
  }
  return groups;
});

// ローディング処理
const comp = ref(0);
watch(comp, (val) => {
  if (val === imageitems.value.length) {
    setLoading(false);
  }
});
function onImageLoad() {
  comp.value += 1;
}

const now = new Date();
const currentMonth = `${now.getFullYear()}-${String(
  now.getMonth() + 1
).padStart(2, "0")}`;

const selectedTab = ref(0);

onMounted(async () => {
  setLoading(true);
  const index = dates.value.findIndex((d) => d === currentMonth);
  selectedTab.value = index !== -1 ? index : 0;
  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbwPftyERFNn-asTDCMRREesFNQedglwoFO58mT8VIvbh2Pj5-Npo-XktqHRLYBZtjFKlw/exec"
    );
    const images = await res.json();
    imageitems.value = images.map((img: any) => ({
      src: img.url,
      title: img.name && !isImageExtension(img.name) ? img.name : "",
      date: img.updatedDate || "",
    }));
  } catch (e) {}
});

function isImageExtension(name: string) {
  const imageExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".bmp",
    ".webp",
    ".svg",
  ];
  const lower = name.toLowerCase();
  return imageExtensions.some((ext) => lower.endsWith(ext));
}
const dialog = ref(false);
const selectedImage = ref<ImageData | null>(null);

function openDialog(image: ImageData) {
  selectedImage.value = image;
  dialog.value = true;
}

const panzoomEl = ref<HTMLElement | null>(null);
let panZoomInstance: PanZoom | null = null;

watch(dialog, async (val) => {
  if (val) {
    await nextTick();
    panZoomInstance = panzoom(panzoomEl.value!, {
      bounds: true,
      boundsPadding: 0.2,
      // now all zoom operations will happen based on the center of the screen
      transformOrigin: { x: 0.5, y: 0.5 },
    });
  } else {
    panZoomInstance?.dispose();
    panZoomInstance = null;
  }
});

onBeforeUnmount(() => {
  panZoomInstance?.dispose();
});
</script>

<style scoped>
.loading-overlay1 {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 1);
  z-index: 9999;
}

.loader1 {
  width: 40px;
  height: 40px;
  color: #f03355;
  background: conic-gradient(
      from -45deg at top 20px left 50%,
      #0000,
      currentColor 1deg 90deg,
      #0000 91deg
    ),
    conic-gradient(
      from 45deg at right 20px top 50%,
      #0000,
      currentColor 1deg 90deg,
      #0000 91deg
    ),
    conic-gradient(
      from 135deg at bottom 20px left 50%,
      #0000,
      currentColor 1deg 90deg,
      #0000 91deg
    ),
    conic-gradient(
      from -135deg at left 20px top 50%,
      #0000,
      currentColor 1deg 90deg,
      #0000 91deg
    );
  animation: l4 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
}

@keyframes l4 {
  50% {
    width: 60px;
    height: 60px;
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.zoom-wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  /* display: flex;
  justify-content: center;
  align-items: center;  */
}

/* .zoom-image {
  max-width: none;
  max-height: none;
  user-select: none;
  pointer-events: none;
} */

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
}
</style>
