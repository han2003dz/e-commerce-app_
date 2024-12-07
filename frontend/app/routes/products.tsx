import axios from "axios";
import { useLoaderData } from "@remix-run/react";
import ProductCard from "../components/Products/ProductCards";
export type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
};

export async function loader() {
  const res = await axios.get("http://localhost:3000/products/list");
  console.log("res", res.data);
  return res.data.data as Product[];
}

export default function Products() {
  const products = useLoaderData<Product[]>();
  return (
    <div className="mt-[50px] grid grid-cols-1 md:grid md:grid-cols-3 gap-y-6 place-items-center">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
