import React from "react";
import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const SkillsPage = lazy(() => import("./pages/SkillsPage"));
const EventsPage = lazy(() => import("./pages/EventsPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/skills",
    element: <SkillsPage />,
  },
  {
    path: "/events",
    element: <EventsPage />,
  },
]);

const MemoizedRouterProvider = React.memo(() => (
  <RouterProvider router={router} />
));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <MemoizedRouterProvider />
    </Suspense>
  </StrictMode>
);

export default router;
