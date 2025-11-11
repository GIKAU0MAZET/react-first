import React, { useState } from "react";

const HelloCard = ({ text, onNext }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = () => {
    const newInfo = `Логин: ${login}. Пароль: ${password}`;
    setInfo(newInfo);
  };
  return (
    <div className="hello-card">
      <h2 className="hello-card__title">{text}</h2>
      <button className="btn-outline" onClick={onNext}>
        Сменить текст
      </button>

      <div className="hello-card">
        <input
          type="text"
          value={login}
          placeholder="Введи Логин!"
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Введи Пароль!"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit} className="btn-outline">
          Отправить
        </button>
        <div className="hello-card">
          <h2>{info}</h2>
        </div>
      </div>
    </div>
  );
};

export default HelloCard;
