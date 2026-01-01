import { Outlet } from "react-router-dom";

interface Props {
  requireAuth?: boolean;
}

const RouterGuard = ({ requireAuth }: Props) => {
  console.log(requireAuth);
  return <Outlet />;
};

export default RouterGuard;
