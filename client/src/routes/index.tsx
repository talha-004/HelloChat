import BaseLayout from "@/layouts/base-layout";
import { Route, Routes } from "react-router-dom";
import { authRoutesPaths, proctedRoutesPaths } from "./routes";
import AppLayout from "@/layouts/app-layout";
import RouterGuard from "./route-guard";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth / Public Routes */}
      <Route path="/" element={<RouterGuard requireAuth={false} />}>
        <Route element={<BaseLayout />}>
          {authRoutesPaths?.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Route>

      {/* protected routes */}
      <Route path="/" element={<RouterGuard requireAuth />}>
        <Route element={<AppLayout />}>
          {proctedRoutesPaths?.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
