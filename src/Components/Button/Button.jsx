import "./Button.scss";
function Button(props) {
  const {
    buttonClass = "",
    buttonLabel = "button",
    buttonColor = "main",
    buttonSize = "md",
    ...rest
  } = props;
  const buttonClasses = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  };
  const buttonSizeClass = buttonClasses[buttonSize];
  return (
    <>
      <button
        className={`btn btn-${buttonColor} ${buttonSizeClass} ${buttonClass}`}
        {...rest}
      >
        {buttonLabel}
      </button>
    </>
  );
}
export default Button;
