import { useEffect } from "react";
import { StyledDashboard } from "./style";
import { useUser } from "../../hooks/useUser";

export const Dashboard = () => {

  const {userProfile} = useUser()

  useEffect(() => {
    userProfile();
  }, []);
  
  return (
    <StyledDashboard>
      <h1>Dashboard</h1>
    </StyledDashboard>
  );
};
