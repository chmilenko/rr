import style from "./App.module.css";
import Product from "../Components/Product/Product";
import Footer from "../Components/Footer/Footer";
import { useEffect, useState } from "react";
import Pagination from "../Components/Pagintation/Pagination";
import useFavorites from "../Hooks/useFavorite";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const {
    favorites,
    addToFavorites,
    removeFromFavorites,
    totalPrice,
    removeAllFavorites,
    addAllFavorites,
    removeItem,
    removeAll,
    products,
  } = useFavorites();

  useEffect(() => {}, [favorites, totalPrice, products]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className={style.container}>
      <h3></h3>
      <div className={style.products}>
        {currentItems.map((product) => (
          <Product
            product={product}
            key={product.id}
            favorites={favorites}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            removeItem={removeItem}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
      <div className={style.footer}>
        <Footer
          count={favorites.length}
          price={totalPrice}
          removeAllFavorites={removeAllFavorites}
          addAllFavorites={addAllFavorites}
          removeAll={removeAll}
          products={products}
        />
      </div>
    </div>
  );
}

export default App;
