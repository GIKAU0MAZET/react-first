import React, { useMemo, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Main.scss";
import HelloCard from "../components/HelloCard";
import InstructionCard from "../components/InstructionCard";
import BootsCard from "../components/BootsCard";

const MainPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const texts = useMemo(() => ["Первая лаба", "Ежов Максим 1223", "<3"], []);

  const [textHello, setTextHello] = useState(texts[0]);

  const handleNext = useCallback(() => {
    setTextHello((prev) => {
      const i = texts.indexOf(prev);
      const next = texts[(i + 1) % texts.length];
      return next;
    });
  }, [texts]);

  const shoesImage = "public/images/kai.png";

  return (
    <>
      <div className="main">
        <div className="main__container">
          <HelloCard text={textHello} onNext={handleNext} />
          <InstructionCard />
          <BootsCard
            image={"/images/boots.png"}
            title={"Кроссовки Adidas"}
            price={"112 000"}
          />
        </div>
      </div>
    </>
  );

  const handleAuth = useState;
};

export default MainPage;
