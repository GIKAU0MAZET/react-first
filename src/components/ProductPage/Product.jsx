import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const response = await axios.get(
        `https://localhost:7128/api/product/One?id=${id}`
      );
      setProduct(response.data);
    };
    loadProduct();
  }, [id]);

  if (product == null) return <div>Загрузка товара</div>;

  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <div className="card" style={{ width: "20rem" }}>
          <img
            src={product.imageUrl}
            className="card-img-top"
            alt={product.name}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <div className="card-text">
              <div className="card-description">{product.description}</div>
              <div className="card-price">Цена: {product.price}₽</div>
            </div>
            <a href="" class="btn btn-primary mt-3">
              Купить
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
