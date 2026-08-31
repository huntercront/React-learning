import Modal from "../Components/Modal/Modal";
import Button from "../Components/Button/Button";
import StockStatus from "../StockStatus/StockStatus";
import CloseIcon from "../Components/svg-Icons/CloseIcon";
import HeartIcon from "../Components/svg-Icons/HeartIcon";
import IconButton from "../Components/IconButton/IconButton";
import "./ProductModal.scss";
function ProductModal({ product, onClose }) {
  console.log(product);
  const {
    title,
    images,
    tags = "",
    price,
    description = "",
    stock,
    discountPercentage,
  } = product;

  const getOldPrice = (price, discount) => {
    return ((price / (100 - discount)) * 100).toFixed(2);
  };

  if (!product) return null;
  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      modalSize="lg"
      noPadding={true}
      modalHeader={false}
    >
      <div className="productmodal">
        <div className="productmodal-img">
          <img src={images[0]} alt={title} />
        </div>
        <div className="productmodal-product">
          <div className="productmodal-header">
            {tags && <div className="productmodal-tags">{tags}</div>}
            <div className="productmodal-header-actions">
              <IconButton
                icon={HeartIcon}
                buttonSize="md"
                buttonType="ghost"
                onClick={onClose}
              />
              <IconButton
                icon={CloseIcon}
                buttonSize="md"
                buttonType="ghost"
                onClick={onClose}
              />
            </div>
          </div>
          <div className="productmodal-info">
            <h2 className="productmodal-name">{title}</h2>
            <p className="productmodal-descr">{description}</p>
          </div>
          <div className="productmodal-price-info">
            <StockStatus inStoke={stock} />
            <div className="productmodal-price">
              <div className="productmodal-price-current">{price}</div>
              <div className="productmodal-price-old">
                {getOldPrice(price, discountPercentage)}
              </div>
            </div>
          </div>
          <div className="productmodal-actions">
            <Button buttonLabel="В корзину" />
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default ProductModal;
