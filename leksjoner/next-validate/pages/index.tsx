import type { NextPage } from "next";
import CreateUser from "../components/CreateUser";

const Home: NextPage = () => {
  return (
    <>
      <h1>Forsiden</h1>
      <CreateUser />
    </>
  );
};

export default Home;
