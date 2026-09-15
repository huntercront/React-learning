import "./Tag.scss";
function Tag(props) {
  const {
    tagLabel = "label",
    tagClass = "",
    tagSize = "md",
    tagColor = "gray",
    ...rest
  } = props;
  const sizeClasses = {
    sm: "tag-sm",
    md: "tag-md",
    lg: "tag-lg",
    xl: "tag-xl",
  };
  const sizeClass = sizeClasses[tagSize] || "modal-md";

  const upFirst = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  };

  return (
    <div className={`tag ${sizeClass} ${tagClass} ${tagColor}`} {...rest}>
      <span>{upFirst(tagLabel)}</span>
    </div>
  );
}
export default Tag;
