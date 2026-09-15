import Modal from "../../../Components/Modal/Modal";
import Button from "../../../Components/Button/Button";
import StockStatus from "../../../Components/StockStatus/StockStatus";
import CloseIcon from "../../../Components/svg-Icons/CloseIcon";
import HeartIcon from "../../../Components/svg-Icons/HeartIcon";
import IconButton from "../../../Components/IconButton/IconButton";
import Tag from "../../../Components/Tag/Tag";
import SimpleSlider from "../../../Components/SimpleSlider/SimpleSlider";
import "./ProductModal.scss";

function ProductModal({ product, onClose }) {
  const {
    title,
    images,
    tags,
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
        <div className="productmodal-imges">
          <SimpleSlider slides={images} imgAlt={title} />
        </div>
        <div className="productmodal-product">
          <div className="productmodal-header">
            {tags && (
              <div className="productmodal-tags">
                {tags.map((tag, index) => (
                  <Tag key={index} tagLabel={tag} tagColor="gray" />
                ))}
              </div>
            )}
            <div className="productmodal-header-actions">
              <IconButton icon={HeartIcon} buttonSize="md" buttonType="ghost" />
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
            <Button buttonSize="lg" buttonLabel="В корзину" />
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default ProductModal;
