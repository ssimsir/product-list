import { products } from "../../helper/data";
import ProductCard from "./ProductCard";
import "./Products.scss";

function ProductList({ category }) {
	const filteredProducts =
	category === "all"
			? products
			: products.filter((product) => product.category === category);
	return (
		<div className="productList">
			{filteredProducts.map(filteredProduct => <ProductCard key={filteredProduct.id} {...filteredProduct}/>)}
		</div>
	);
}

export default ProductList;
