import "./SignInNavBar.scss";
import Button from "../../components/Button/Button";

const SignInNavBar = ({ zineName }) => {
  return (
    <div className="signInNavBar">
      <h2 className="signInNavBar__title">{zineName}</h2>
      <div className="signInNavBar__bottom">
        <Button buttonText="lOG IN" />
        <Button buttonText="SIGN UP" />
      </div>
    </div>
  );
};

export default SignInNavBar;
