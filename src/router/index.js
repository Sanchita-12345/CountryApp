import { createRouter, createWebHistory } from "vue-router";
import Admin from "../Pages/admin/Admin.vue";
import Countries from "../Pages/admin/Countries.vue";
import CreateCountry from "../Pages/admin/CreateCountry.vue";
import Main from "../Pages/Main.vue";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/admin",
    component: Admin,
    name: "Admin",
    children: [
      {
        path: "countries",
        component: Countries,
        name: "Countries",
      },
      {
        path: "countries/create",
        component: CreateCountry,
        name: "CreateCountry",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
