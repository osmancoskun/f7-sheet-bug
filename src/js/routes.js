import HomePage from "../pages/home.svelte";

import FormPage from "../pages/form.svelte";

var routes = [
  {
    path: "/",
    component: HomePage,
  },

  {
    path: "/form/",
    component: FormPage,
  },
];

export default routes;
