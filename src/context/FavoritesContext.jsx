import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const toggleFavorite = (property) => {
    const exists = favorites.find((item) => item.id === property.id);

    if (exists) {
      setFavorites(favorites.filter((item) => item.id !== property.id));
    } else {
      setFavorites([...favorites, property]);
    }
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;