import { createRouter, createWebHistory } from "vue-router";
import Exercise1 from "../views/Exercise1.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "exercise1",
      component: Exercise1,
    },
    {
      path: "/exercise2",
      name: "exercise2",
      component: () => import("../views/Exercise2.vue"),
    },
  ],
});

export default router;
