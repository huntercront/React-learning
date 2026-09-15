import Button from "../Button/Button";
import "./EmptyContent.scss";
import emptyImg from "../../assets/empty-rectangle.svg";
function EmptyContent(props) {
  const {
    emptyTitle = "Товаров пока нет",
    emptyDescr = "Попробуйте изменить категорию",
    imgSize = "md",
    buttonLabel = "Сбросить фильтры",
    onAction,
  } = props;
  const sizeClasses = {
    sm: "img-sm",
    md: "img-md",
  };
  const sizeClass = sizeClasses[imgSize] || "img-md";

  return (
    <div className="empty">
      <div className="empty-block">
        <div className={`empty-img ${sizeClass}`}>
          <img src={emptyImg} alt="Пустая коробка" />
        </div>
        <h2 className="empty-title">{emptyTitle}</h2>
        <p className="empty-text">{emptyDescr}</p>
        {onAction && (
          <div className="empty-actions">
            <Button buttonLabel={buttonLabel} />
          </div>
        )}
      </div>
    </div>
  );
}
export default EmptyContent;
