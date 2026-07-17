import FavoritesProvider from "./context/FavoritesContext";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

import App from "./App";

import { SearchProvider } from "./context/SearchContext";
import { CategoryProvider } from "./context/CategoryContext";

ReactDOM.createRoot(document.getElementById("root")).render(
 <SearchProvider>
  <CategoryProvider>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </CategoryProvider>
</SearchProvider>
);