const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="btn-buy">
      {children} <img src="/images/group.svg" alt="" />
    </button>
  );
};

export default Button;
