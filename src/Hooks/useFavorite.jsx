import { useState, useEffect } from "react";
import { data } from "../Core/mock";

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState(data);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites);
      setFavorites(parsedFavorites);
      const totalPrice = parsedFavorites.reduce(
        (acc, item) => acc + item.price,
        0
      );
      setTotalPrice(totalPrice);
    }
  }, []);

  const addToFavorites = (product) => {
    const productExists = products.some((item) => item.id === product.id);
    if (productExists) {
      const updatedFavorites = [...favorites, product];
      setFavorites(updatedFavorites);
      const totalPrice = updatedFavorites.reduce(
        (acc, item) => acc + item.price,
        0
      );
      setTotalPrice(totalPrice);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const removeFromFavorites = (productId) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.id !== productId
    );
    setFavorites(updatedFavorites);
    const totalPrice = updatedFavorites.reduce(
      (acc, item) => acc + item.price,
      0
    );
    setTotalPrice(totalPrice);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeAllFavorites = () => {
    setFavorites([]);
    setTotalPrice(0);
    localStorage.removeItem("favorites");
  };

  const addAllFavorites = () => {
    setFavorites(products);
    const totalPrice = data.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(totalPrice);
    localStorage.setItem("favorites", JSON.stringify(data));
  };

  const removeItem = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
    removeFromFavorites(id);
  };

  const removeAll = () => {
    setProducts([]);
    removeAllFavorites();
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    totalPrice,
    removeAllFavorites,
    addAllFavorites,
    removeItem,
    removeAll,
    products,
  };
};

export default useFavorites;
