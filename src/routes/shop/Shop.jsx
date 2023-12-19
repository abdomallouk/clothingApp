import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../Categories-Preview/CategoriesPreview";
import Category from "../Category/Category";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
