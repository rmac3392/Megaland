import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/properties/:page",
    name: "Properties",
    component: () => import("../pages/Properties.vue"),
  },
  {
    path: "/propertyNews",
    name: "Property News",
    component: () => import("../pages/PropertyNews.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../pages/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../pages/Contact.vue"),
  },
  {
    path: "/listProperty/",
    name: "List Property",
    component: () => import("../pages/ListProperty.vue"),
  },
  {
    path: "/Details/:id",
    name: "Details",
    component: () => import("../pages/Details.vue"),
  },
  {
    path: "/Admin",
    name: "Admin",
    component: () => import("../pages/Admin.vue"),
    meta: { hideNavAndFooter: true },
  },
  {
    path: "/AdminTest",
    name: "AdminTest",
    component: () => import("../pages/AdminTest.vue"),
    meta: { hideNavAndFooter: true },
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../pages/Search.vue"),
    meta: { hideNavAndFooter: false },
  },

 

];

const router = createRouter({
  history: createWebHistory("./"),
  routes,
});

export default router;
