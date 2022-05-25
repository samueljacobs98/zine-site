import "./Button.scss";

const Button = ({ buttonText, buttonFunction }) => {
  return (
    <button className="button" onClick={buttonFunction}>
      {buttonText}
    </button>
  );
};

export default Button;
