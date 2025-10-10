import React, { useMemo, useState, useCallback, useEffect } from "react";
import "./Main.scss";
import "../components/BootsCard.scss";
import HelloCard from "../components/HelloCard";
import BootsCard from "../components/BootsCard";

const MainPage = () => {
  const texts = useMemo(() => ["Первая лаба", "Ежов Максим 1223", "<3"], []);

  const [textHello, setTextHello] = useState(texts[0]);
  const [isLoad, setIsLoad] = useState(true);

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
    <>
      <div className="main">
        <div className="main__container">
          <HelloCard text={textHello} onNext={handleNext} />
          {isLoad === true ? (
            <div>Загрузка</div>
          ) : (
            <div className="viewed-card">
              <h2 className="viewed-title">Просмотренные</h2>
              <div className="group-card">
                <BootsCard
                  image={"/images/boots.png"}
                  title={"Кроссовки Adidas"}
                  price={"112 000"}
                />
                <BootsCard
                  image={"/images/boots.png"}
                  title={"Кроссовки Nike Pegasus"}
                  price={"113 000"}
                />
                <BootsCard
                  image={"/images/boots.png"}
                  title={"Кроссовки Nike"}
                  price={"113 000"}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainPage;
