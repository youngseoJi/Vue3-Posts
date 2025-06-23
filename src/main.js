import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";

createApp(App).use(router).mount("#app");

// Vite의 환경 변수와 모드

// console.log("Mode", import.meta.env.MODE); // 현재 모드 (development, production 등)
// console.log("Base URL", import.meta.env.BASE_URL); // 기본 URL
// console.log("Prod", import.meta.env.PROD); // 운영 모드 여부
// console.log("Dev", import.meta.env.DEV); // 개발 모드 여부
// console.log("VITE_APP_API_URL", import.meta.env.VITE_APP_API_URL); // 사용자 정의 환경 변수
