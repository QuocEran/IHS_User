import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "@/configs/firebase";

// Require Auth function
const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;
  if (!user)
    next({
      name: "Login",
      params: {},
    });
  else next();
};

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      layout: "default",
      isHome: true,
      isShowHeader: true,
      isShowFooter: true,
    },
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/appointments",
    name: "Appointments",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      layout: "default",
      isShowHeader: true,
      isShowFooter: true,
      name: "Lịch hẹn",
      icon: "calendar",
    },
    component: () =>
      import(
        /* webpackChunkName: "appointments" */ "../views/Appointments.vue"
      ),
    beforeEnter: requireAuth,
  },
  {
    path: "/device",
    name: "Device",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      layout: "default",
      isShowHeader: true,
      isShowFooter: true,
      name: "Thiết bị",
      icon: "file-medical",
    },
    component: () =>
      import(/* webpackChunkName: "device" */ "../views/Device.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/profile",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      layout: "default",
      isShowHeader: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
    beforeEnter: requireAuth,
  },
  // auth layer
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/logout",
    name: "Logout",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/Logout.vue"),
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  //sub layer
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    meta: {
      layout: "sub",
    },
    component: () =>
      import(/* webpackChunkName: "not-found" */ "../views/404.vue"),
  },
  {
    path: "/stats",
    name: "stats",
    meta: {
      layout: "sub",
    },
    component: () =>
      import(/* webpackChunkName: "stats" */ "../views/Stats.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
