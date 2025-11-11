import { useState, useEffect } from "react";
import "./BootsCard.scss";
import Button from "../Button";
import { useCart } from "../../context/CartContext";

const BootsCard = ({ image, title, price }) => {
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    if (cartItems === 0) {
      setIsInCart(false);
    }
  }, [cartItems]);

  const handleAddToCart = () => {
    if (!isInCart) {
      setIsInCart(true);
      addToCart();
    }
  };

  return (
    <div className="boots-card-wrapper">
      <div className="item-card">
        <img src={image} alt={title} className="img-card" />
        <div className="item-info">
          <p className="item-price">{price} ₽</p>
          <p className="item-title">{title}</p>
        </div>
        <Button onClick={handleAddToCart} isInCart={isInCart}>
          {isInCart ? "Добавлено в корзину" : "В корзину"}
        </Button>
      </div>
    </div>
  );
};

export default BootsCard;
