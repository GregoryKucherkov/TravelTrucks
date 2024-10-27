import css from "./Button.module.css";

const Button = ({
  text = "View Now",
  addClass = "",
  type = "button",
  onClick,
}) => {
  return (
    <button
      className={`${css.link} ${css[addClass]}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
