const Button = ({ children, onClick, isInCart }) => {
  return (
    <button onClick={onClick} className={`btn-buy ${isInCart ? "added" : ""}`}>
      {children}
      {!isInCart && <img src="/images/group.svg" alt="shop-cart" width={16} height={16}/>}
    </button>
  );
};

export default Button;
