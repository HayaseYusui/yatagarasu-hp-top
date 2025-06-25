<template>
  <div class="event-list-scroll">
    <div v-if="props.events.length == 0" class="event-loading">
      <v-skeleton-loader
        type="list-item-two-line"
        class="mb-3"
        v-for="i in 4"
        :key="i"
        height="56"
      />
      <div class="d-flex justify-center">
        <v-progress-circular indeterminate />
      </div>
    </div>
    <div v-else>
      <div
        v-for="event in events"
        :key="new Date(event.timestamp).toLocaleString()"
        class="event-item"
      >
        <div class="event-header">
          <v-chip
            :color="event.category == 'お知らせ' ? 'secondary' : '#FFA726'"
            text-color="white"
            size="small"
            label
            :prepend-icon="
              event.category == 'お知らせ'
                ? 'mdi-information'
                : event.category == 'イベント'
                ? 'mdi-tag'
                : 'mdi-tag'
            "
          >
            {{ event.category }}
          </v-chip>
          <span class="event-date">{{
            event.date
              ? new Date(event.date).toLocaleDateString()
              : new Date(event.timestamp).toLocaleDateString()
          }}</span>
        </div>
        <div class="event-description" v-html="event.content"></div>
        <div v-if="event.url" class="event-link mt-2">
          <a
            :href="event.url"
            target="_blank"
            rel="noopener noreferrer"
            class="event-link-btn"
          >
            詳細を見る
            <v-icon size="18" class="ml-1">mdi-open-in-new</v-icon>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type EventType = {
  timestamp: string;
  category: string;
  content: string;
  date: string;
  url: string;
};

const props = defineProps<{
  events: EventType[];
}>();
</script>

<style scoped>
.event-link-btn {
  display: inline-flex;
  align-items: center;
  color: #42a5f5;
  text-decoration: underline;
  font-size: 0.97em;
  transition: color 0.2s;
}
.event-link-btn:hover {
  color: #1976d2;
  text-decoration: underline;
}

.event-list-scroll {
  max-height: 400px;
  overflow-y: auto;
  padding: 8px;
  background: rgba(20, 24, 32, 0.8);
  border-radius: 10px;
}
.event-loading {
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
