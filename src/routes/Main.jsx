import React, { useMemo, useState, useCallback, useEffect } from "react";
import "./Main.scss";
import "../components/BootsCard.scss";
import HelloCard from "../components/HelloCard";
import ViewedCard from "../components/ViewedCard";
import { useCart } from "../context/CartContext";

const MainPage = () => {
  const texts = useMemo(() => ["Первая лаба", "Ежов Максим 1223", "<3"], []);

  const [textHello, setTextHello] = useState(texts[0]);
  const [isLoad, setIsLoad] = useState(true);

  const { cartItems, resetCart } = useCart();

  const bootsData = useMemo(
    () => [
      {
        image: "/images/adiki.jpg",
        title: "Кроссовки Adidas",
        price: "112 000",
      },
      {
        image: "/images/boots.png",
        title: "Кроссовки Nike Pegasus",
        price: "113 000",
      },
      {
        image: "/images/nike-air-jordan-1-low-1-1.jpg",
        title: "Кроссовки Nike",
        price: "113 000",
      },
      {
        image: "/images/riki.jpg",
        title: "Rick Owens",
        price: "113 000",
      },
    ],
    []
  );

  useEffect(() => {
    setIsLoad(true);
    setTimeout(() => {
      setIsLoad(false);
    }, 3000);
  }, []);

  const handleNext = useCallback(() => {
    setTextHello((prev) => {
      const i = texts.indexOf(prev);
      const next = texts[(i + 1) % texts.length];
      return next;
    });
  }, [texts]);

  return (
    <div className="main">
      <button
        type="button"
        className="btn btn-dark cart-button"
        data-bs-toggle="button"
        autocomplete="off"
        onClick={resetCart}
      >
        <img src="/images/group.svg" />
        Товаров в корзине: {cartItems}
      </button>
      <div className="main__container">
        <HelloCard text={textHello} onNext={handleNext} />
        <ViewedCard bootsData={bootsData} isLoad={isLoad} />
      </div>
    </div>
  );
};

export default MainPage;
