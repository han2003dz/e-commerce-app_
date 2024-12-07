import { Link } from "@remix-run/react";
import { CartIcon, LikeIcon } from "../icons";

type CardProps = {
  title: string;
  price: string;
  discount: string;
  image?: string;
};

export const Card = ({ title, price, discount, image }: CardProps) => {
  return (
    <Link
      to="/"
      className="w-[340px] h-[513px] p-[23px] border border-primary rounded-3xl bg-[#F0EADC]"
    >
      <img className="img-card" alt={title} src={image} />
      <h3 className="title-h3 mt-[30px]">{title}</h3>
      <div className="flex justify-between mt-[20px]">
        <div className="flex">
          <span className="text-2xl">Price: ${price}</span>
          <span className="line-through">${discount}</span>
        </div>
        <div className="flex">
          <LikeIcon />
          <CartIcon />
        </div>
      </div>
    </Link>
  );
};
