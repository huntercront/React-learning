import Button from "../../../Components/Button/Button";
import Tag from "../../../Components/Tag/Tag";
import "./Product.scss";
function Product({ productData, onProcductClick }) {
  const { id, title, images, category, tags, price } = productData;

  const onProductClickHandler = () => {
    onProcductClick(productData);
  };

  return (
    <div id={id} className="product" data-cat={category}>
      <div className="product-top">
        {tags && (
          <div className="product-tags">
            {tags.map((tag, index) => (
              <Tag key={index} tagLabel={tag} tagSize="sm" tagColor="white" />
            ))}
          </div>
        )}
        <div className="product-img">
          <img src={images[0]} alt={title} />
        </div>
        <div className="product-fastview">
          <Button
            buttonLabel="Быстрый просмотр"
            buttonColor="alphalight"
            onClick={onProductClickHandler}
          />
        </div>
      </div>
      <div className="product-info">
        <h2 className="product-name">{title}</h2>
        <span className="product-price">{price}</span>
        {/* {description && <p className="product-descr">{description}</p>} */}
      </div>
      {/* <Button buttonClass="product-to-card" buttonLabel="В корзину" /> */}
    </div>
  );
}
export default Product;
