import "./Icon.scss";

function Icon(props) {
  const {
    icon: IconComponent,
    iconName = "placeholder",
    IconSize = 24,
    IconColor = "inherit",
    IconClass = "",
  } = props;

  const SvgIconName = Icons[`${iconName}Icon`];

  if (!SvgIconName) {
    return null;
  }

  return (
    <div className={`c-c icon-svg ${IconColor} ${IconClass}`}>
      <Icon width={IconSize} height={IconSize} />
    </div>
  );
}

export default Icon;
