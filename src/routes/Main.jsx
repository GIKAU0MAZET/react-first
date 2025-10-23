import React, { useMemo, useState, useCallback, useEffect } from "react";
import "./Main.scss";
import "../components/BootsCard.scss";
import HelloCard from "../components/HelloCard";
import BootsCard from "../components/BootsCard";
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
      <button className="cart-button" onClick={resetCart}>
        🛒 Товаров в корзине: {cartItems}
      </button>
      <div className="main__container">
        <HelloCard text={textHello} onNext={handleNext} />
        <div className="viewed-card">
          <h2 className="viewed-title">Просмотренные</h2>
          {isLoad ? (
            <div className="loading-title">Загрузка</div>
          ) : (
            <div className="group-card">
              {bootsData.map((boots, index) => ( // ✅ Добавил index для key
                <BootsCard
                  key={index} // ✅ Добавил обязательный key
                  image={boots.image}
                  title={boots.title}
                  price={boots.price}
                  // ❌ Убрал onAddToCart - BootsCard сам использует useCart
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;