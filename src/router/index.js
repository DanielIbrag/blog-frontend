import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestView from "../views/TestView.vue";
import Signup from "../views/SignupView.vue";
import Login from "../views/LoginView.vue";
import Logout from "../views/LogoutView.vue";
import PostsIndex from "../views/PostsIndex.vue";
import PostsNew from "../views/PostsNew.vue";
import PostsShow from "../views/PostsShow.vue";
import PostsEdit from "../views/PostsEdit.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: TestView,
  },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/posts", name: "posts", component: PostsIndex },
  { path: "/posts/new", name: "posts-new", component: PostsNew },
  { path: "/posts/:id", name: "posts-show", component: PostsShow },
  { path: "/posts/:id/edit", name: "poests-edit", component: PostsEdit },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
