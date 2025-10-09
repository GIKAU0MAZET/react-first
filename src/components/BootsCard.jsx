import { useState } from "react";
import "./BootsCard.scss";

const BootsCard = ({ image, title, price, onClick }) => {
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    setIsInCart(true);
  };

  return (
    <div>
      <h2>2 Laba</h2>
      <div className="item-card">
        <img src={image} alt={title} className="img-card" />
        <div className="item-info">
          <h3 className="item=price">{price}</h3>
          <h4 className="item-title">{title}</h4>
        </div>
        <button className="btn-buy" onClick={handleAddToCart}>
          {isInCart ? "Добавлено в корзину" : "В корзину"}
        </button>
      </div>
    </div>
  );
};

export default BootsCard;
