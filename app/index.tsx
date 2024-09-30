import { useAuth } from "@/context/authContext";
import { Redirect } from "expo-router";

const Home = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Redirect href="/(auth)/login" />;
  }
  return <Redirect href="/(root)/home" />;
};

export default Home;
