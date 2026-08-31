import Button from "../Components/Button/Button";
import "./style.scss";
function Product({ productData, onProcductClick }) {
  const {
    id,
    title,
    images,
    category,
    tags = "",
    price,
    description = "",
  } = productData;

  const onProductClickHandler = () => {
    onProcductClick(productData);
  };

  return (
    <div
      id={id}
      className="product"
      data-cat={category}
      onClick={onProductClickHandler}
    >
      <div className="product-top">
        {tags && <div className="product-tags">{tags}</div>}
        <div className="product-img">
          <img src={images[0]} alt={title} />
        </div>
      </div>
      <div className="product-info">
        <h2 className="product-name">{title}</h2>
        <span className="product-price">{price}</span>
        {description && <p className="product-descr">{description}</p>}
      </div>
      <Button buttonClass="product-to-card" buttonLabel="В корзину" />
    </div>
  );
}
export default Product;
