import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import axios from "axios";
import { Product } from "~/types/product.type";

export async function loader({ params }: { params: { productId: string } }) {
  const { productId } = params;
  console.log("productId", productId);

  try {
    const res = await axios.get(`http://localhost:3000/products/${productId}`);
    if (!res.data) {
      throw new Response("Product not found", { status: 404 });
    }
    return json(res.data);
  } catch (error) {
    throw new Response("Failed to load product details", { status: 500 });
  }
}

const ProductDetails = () => {
  const product: Product = useLoaderData();

  return (
    <div className="product-details">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img src={product.images[0]} alt={product.title} className="mb-4" />
      <p className="text-lg mb-4">{product.description}</p>
      <div className="text-2xl font-semibold">Price: ${product.price}</div>
    </div>
  );
};

export default ProductDetails;
