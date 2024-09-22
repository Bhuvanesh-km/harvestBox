import { Redirect } from "expo-router";

const Home = () => {
  return <Redirect href="/(auth)/validateOtp" />;
};

export default Home;
