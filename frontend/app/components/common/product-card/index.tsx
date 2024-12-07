import { Link } from "@remix-run/react";

type ProductProps = {
  title: string;
  stock: string;
  price: string;
  image: string;
  discount?: string;
  productId: string;
};

export const ProductCards = ({
  title,
  stock,
  price,
  image,
  discount,
  productId,
}: ProductProps) => {
  return (
    <>
      <Link to={`/product/${productId}`}>
        <img src={image} alt={title} className="mb-5 w-[300px] h-[320px]" />
        <p className="italic text-2xl text-center max-w-[300px]">
          {title}({stock})
        </p>
        <div className="flex gap-2 items-center justify-center">
          <p>${price}</p>
          <p>-{discount ? discount : "0"}%</p>
        </div>
      </Link>
    </>
  );
};
