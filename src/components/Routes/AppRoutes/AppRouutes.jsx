import { Suspense } from "react";
import { Route, Routes } from "react-router";
import LoadingShimmer from "../../UI/LoadingShimmer/LoadingShimmer";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
import { useQuery } from "@tanstack/react-query";
import { getRoutes } from "../../services/routesApi";
import { componentMap } from "../ComponentMap/ComponentMap";

const AppRoutes = ({ debouncedSearch }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["routes"],
    queryFn: getRoutes,
  });

  if (isLoading) {
    return <LoadingShimmer />;
  }

  return (
    <Suspense fallback={<LoadingShimmer />}>
      <Routes>
        {data?.routes?.map((route) => {
          const Component = componentMap[route?.component];

          if (!Component) return null;

          if (route?.isProtected) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  route?.path === "/shop" ? (
                    <ProtectedRoutes allowedRoles={route.roles}>
                      <Component debouncedSearch={debouncedSearch} />
                    </ProtectedRoutes>
                  ) : (
                    <ProtectedRoutes allowedRoles={route.roles}>
                      <Component />
                    </ProtectedRoutes>
                  )
                }
              />
            );
          }
          return (
            <Route 
            key={route.path} 
            path={route.path} 
            element={<Component />} />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
