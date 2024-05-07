import style from "./App.module.css";
import Product from "../Components/Product/Product";
import Footer from "../Components/Footer/Footer";
import { useEffect, useState } from "react";
import Pagination from "../Components/Pagintation/Pagination";
import useFavorites from "../Hooks/useFavorite";
import useDeviceDetect from "../Hooks/useDeviceDetected";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const { isMobile } = useDeviceDetect();

  const itemsPerPage = isMobile ? 2 : 4;

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
      <h3 className={style.intro}>{products.length} продуктов</h3>
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
      <div className={style.pagination}>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
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
