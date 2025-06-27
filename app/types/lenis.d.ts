import type Lenis from "@studio-freight/lenis";

declare module "#app" {
  interface NuxtApp {
    $lenis: Lenis;
  }
}
