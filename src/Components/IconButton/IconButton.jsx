import PlaceholderIcon from "../svg-Icons/PlaceholderIcon";
import "./IconButton.scss";
function IconButton(props) {
  const {
    icon: IconComponent,
    buttonClass = "",
    buttonSize = "md",
    buttonType = "primary",
    onClick,
  } = props;
  const buttonClasses =
    buttonClass +
    `icon-btn icon-btn-${buttonSize} icon-btn-${buttonType} ${buttonClass}`;
  const IconToRender = IconComponent || PlaceholderIcon;
  return (
    <button className={buttonClasses} onClick={onClick}>
      <span className={`svg-icon`}>
        <IconToRender />
      </span>
    </button>
  );
}
export default IconButton;
