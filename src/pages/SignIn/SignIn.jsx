import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import ZineCardContainer from "../../components/ZineCardContainer/ZineCardContainer";

const SignIn = () => {
  return (
    <Layout>
      <Button buttonText="lOG IN" />
      <Button buttonText="SIGN UP" />
      <ZineCardContainer />
    </Layout>
  );
};

export default SignIn;
