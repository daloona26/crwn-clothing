import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

{
  /* <Fragment key={title}>
<h2>{title}</h2>
<div className="products-container">
  {categoriesMap[title].map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
</Fragment> */
}

export default Shop;
