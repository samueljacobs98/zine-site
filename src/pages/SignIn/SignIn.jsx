import Layout from "../../components/Layout/Layout";
import SignInNavBar from "../../components/SignInNavBar/SignInNavBar";
import ZineCardContainer from "../../components/ZineCardContainer/ZineCardContainer";

const SignIn = () => {
  return (
    <Layout>
      <SignInNavBar zineName="ZINESTORE" />
      <ZineCardContainer />
    </Layout>
  );
};

export default SignIn;
