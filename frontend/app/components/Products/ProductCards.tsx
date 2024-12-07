import { Product } from "../../types/product.type";
import { ProductCards } from "../common/product-card";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div>
      <ProductCards
        title={product.title}
        stock="1000"
        price="100"
        image={product.images[0]}
        discount="10"
        productId={product._id}
      />
    </div>
  );
}
