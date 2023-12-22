import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import CategoriesPreview from '../Categories-Preview/CategoriesPreview';
import Category from '../Category/Category';
import { getCategoriesAndDocuments } from '../../utils /firebase/firebase';
import { useDispatch } from 'react-redux';
import { setCategories } from '../../store/categories/category.reducer';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, []);


  return (
   <Routes>
    <Route index element={<CategoriesPreview/>}/>
    <Route path=':category' element={<Category/>}/>
   </Routes>
  );
};

export default Shop;
 