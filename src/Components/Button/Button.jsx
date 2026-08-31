import "./style.scss";
function Button(props) {
  const {
    buttonClass = "",
    buttonLabel = "button",
    buttonColor = "main",
    ...rest
  } = props;
  return (
    <>
      <button className={`btn btn-${buttonColor} ${buttonClass}`} {...rest}>
        {buttonLabel}
      </button>
    </>
  );
}
export default Button;
