import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";
import CloseIcon from "../svg-Icons/CloseIcon";
import { motion } from "motion/react";
import "./style.scss";
function Modal(props) {
  const {
    modalSize = "md",
    modalFooter = false,
    modalHeader = true,
    noPadding = false,
    children,
    isOpen = false,
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
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className={`modal ${sizeClass} ${paddingClass}`}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <motion.div
        className="modal-dialog"
        initial={{ y: 50, scale: 0.9, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 50, scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
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
      </motion.div>
    </motion.div>
  );
}
export default Modal;
