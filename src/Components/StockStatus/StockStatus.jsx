import "./StockStatus.scss";
function StockStatus({ inStoke }) {
  const isInStock = inStoke > 0;
  return (
    <div
      className={`quantity ${isInStock ? "quantity-in-stock" : "quantity-out-stock"}`}
    >
      <span className="quantity-mark"></span>
      <span className="quantity-count">
        {isInStock ? `В наличии ${inStoke} шт.` : `Нет в наличии`}
      </span>
    </div>
  );
}
export default StockStatus;
