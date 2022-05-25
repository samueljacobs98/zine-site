import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
// import ZineCardContainer from "../../components/ZineCardContainer/ZineCardContainer";

const Home = () => {
  return (
    <Layout>
      <NavBar />
      <Button buttonText="lOG iN" />
      <Button buttonText="sign up" />
    </Layout>
  );
};

export default Home;
