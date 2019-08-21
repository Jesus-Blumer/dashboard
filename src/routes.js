import User from "views/User.jsx";
import Interaction from "views/Interaction.jsx";
import Posts from "views/Posts.jsx";

const dashboardRoutes = [
  {
    path: "/user",
    name: "Usuarios",
    icon: "pe-7s-users",
    component: User,
    layout: "/admin"
  },
  {
    path: "/interaciones",
    name: "Interaciones",
    icon: "pe-7s-graph",
    component: Interaction,
    layout: "/admin"
  },
  {
    path: "/posts",
    name: "Posts",
    icon: "pe-7s-note2",
    component: Posts,
    layout: "/admin"
  },
];

export default dashboardRoutes;
