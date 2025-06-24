// import { ref } from "vue";
// import type { BreadcrumbItem } from "vuetify/lib/components/VBreadcrumbs/VBreadcrumbs.mjs";
// export const breadcrumbsItems: Ref<BreadcrumbItem[]> = ref([
//   { title: "Home", href: "/" },
// ]);

export async function copyToClipboard(text: string): Promise<void> {
  try {
    return await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy: ", err);
    throw err; // Re-throw the error so the caller can handle it if needed
  }
}
