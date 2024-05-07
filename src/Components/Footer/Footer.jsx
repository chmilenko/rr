/* eslint-disable react/prop-types */
import minus from "../../assets/minus.jpg";
import plus from "../../assets/plus.png";
import "./footer.css";
import img from "../../assets/корзина.jpg";

function Footer({
  count,
  price,
  removeAllFavorites,
  addAllFavorites,
  removeAll,
  products,
}) {
  return (
    <div className="footer">
      <div className="count">
        {count === 0 ? (
          <img
            alt="delete"
            src={plus}
            className="icon"  
            onClick={() => products.length !== 0 && addAllFavorites()}
          />
        ) : (
          <img
            alt="delete"
            src={minus}
            className="icon"
            onClick={removeAllFavorites}
          />
        )}
        <div className="num">{count}</div>
        <span>товаров выбрано на сумму:{price}</span>
      </div>
      <img alt="delete" src={img} className="basket" onClick={removeAll} />
      <p>Для отмены нажмите ESC</p>
    </div>
  );
}

export default Footer;
