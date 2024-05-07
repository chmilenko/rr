// eslint-disable-next-line react/prop-types
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./product.css";
import img from "../../assets/корзина.jpg";

function Product({
  product,
  favorites,
  addToFavorites,
  removeFromFavorites,
  removeItem,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const isProductFavorite = favorites.some(
      (favorite) => favorite.id === product.id
    );
    setIsChecked(isProductFavorite);
  }, [favorites, product.id]);

  const handleFavoriteToggle = () => {
    if (isChecked) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
    setIsChecked(!isChecked);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isChecked) {
      setIsHovered(false);
    }
  };

  return (
    <div className="product">
      <div
        className="image-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={product?.sample_url}
          alt="product-image"
          style={{ width: product.width, height: product.height }}
          className={isChecked ? "blurred" : ""}
        />
        {(isHovered || isChecked) && (
          <label className="custom-checkbox-label">
            <input
              type="checkbox"
              className="custom-checkbox"
              checked={isChecked}
              onChange={handleFavoriteToggle}
            />
            <span
              className={`custom-checkbox-icon ${isChecked ? "checked" : ""}`}
            ></span>
          </label>
        )}
      </div>
      {isChecked && (
        <img
          alt="delete"
          src={img}
          className="delete_icon"
          onClick={() => removeItem(product.id)}
        />
      )}
      <h3 className="name">{product?.name}</h3>
    </div>
  );
}

export default Product;
