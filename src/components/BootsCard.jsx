import { useState } from "react";
import "./BootsCard.scss";
import Button from "./Button";

const BootsCard = ({ image, title, price, onClick }) => {
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    setIsInCart(true);
  };

  return (
    <div>
      <div className="item-card">
        <img src={image} alt={title} className="img-card" />
        <div className="item-info">
          <p className="item-price">{price} ₽</p>
          <p className="item-title">{title}</p>
        </div>
        <Button
          onClick={handleAddToCart}
          children={isInCart ? "Добавлено в корзину" : "В корзину"}
        />
      </div>
    </div>
  );
};

export default BootsCard;
