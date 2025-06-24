<template>
  <div class="event-list-scroll">
    <div v-if="loading">取得中...</div>
    <div v-else>
      <div v-for="event in events" :key="event.id" class="event-item">
        <div class="event-header">
          <span class="event-summary">{{ event.summary }}</span>
          <span class="event-date">{{
            event.start.date || event.start.dateTime
          }}</span>
        </div>
        <div class="event-description" v-html="event.description"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps<{
  googleApiKey: string;
  historyCalendarId: string;
}>();

const events = ref([]);
const loading = ref(true);

async function loadData() {
  const url = `https://www.googleapis.com/calendar/v3/calendars/${props.historyCalendarId}/events?key=${props.googleApiKey}&maxResults=1000&orderBy=startTime&singleEvents=true`;
  const res = await fetch(url);
  const data = await res.json();
  events.value = data.items.reverse() || [];
  loading.value = false;
}

watch(
  () => props.historyCalendarId,
  async () => {
    if (props.historyCalendarId && props.googleApiKey) {
      loadData();
    }
  }
);

watch(
  () => props.googleApiKey,
  async () => {
    if (props.historyCalendarId && props.googleApiKey) {
      loadData();
    }
  }
);
</script>

<style scoped>
.event-list-scroll {
  max-height: 400px;
  overflow-y: auto;
  padding: 8px;
  background: rgba(20, 24, 32, 0.8);
  border-radius: 10px;
}
.event-item {
  margin-bottom: 18px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  transition: background 0.2s;
}
.event-item:hover {
  background: rgba(255, 255, 255, 0.1);
}
.event-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.05em;
  margin-bottom: 4px;
}
.event-summary {
  color: #fff;
  letter-spacing: 0.02em;
}
.event-date {
  color: #b0b8c9;
  font-size: 0.95em;
  margin-left: 12px;
  white-space: nowrap;
}
.event-description {
  color: #e0e6f0;
  font-size: 0.98em;
  margin-top: 4px;
  word-break: break-all;
}
</style>
