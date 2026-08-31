import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";
import CloseIcon from "../svg-Icons/CloseIcon";
import "./style.scss";
function Modal(props) {
  const {
    modalSize = "md",
    modalFooter = false,
    modalHeader = true,
    noPadding = false,
    children,
    isOpen,
    onClose,
  } = props;

  const paddingClass = noPadding ? "no-space" : "space-sm";

  const sizeClasses = {
    sm: "modal-sm",
    md: "modal-md",
    lg: "modal-lg",
    xl: "modal-xl",
    full: "modal-full",
  };

  const sizeClass = sizeClasses[modalSize] || "modal-md";

  const onClickModalHandler = (event) => {
    event.stopPropagation();
    console.log("Клик мне модального окна");
  };
  if (!isOpen) return null;

  return (
    <div className={`modal ${sizeClass} ${paddingClass}`} onClick={onClose}>
      <div className="modal-dialog">
        <div className="modal-content" onClick={onClickModalHandler}>
          {modalHeader && (
            <div className="modal-header">
              <IconButton
                icon={CloseIcon}
                buttonSize="md"
                buttonType="ghost"
                onClick={onClose}
              />
            </div>
          )}
          {children && <div className="modal-body">{children}</div>}
          {modalFooter && (
            <div className="modal-footer">
              <Button buttonLabel="Закрыть" onClick={onClose} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Modal;
