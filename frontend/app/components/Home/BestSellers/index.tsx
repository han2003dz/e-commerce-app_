import { ButtonViewAll } from "~/components/common/buttonViewAll";
import { Card } from "~/components/common/card";

const Bestsellers = () => {
  return (
    <>
      <div className="mt-[246px] border-t-4">
        <h1 className="title-h1 text-center mt-[100px] mb-[50px]">
          Our Bestsellers
        </h1>
        <div className="cards md:flex md:gap-5 justify-center">
          <Card
            title="𝗢𝘂𝗱 𝗧𝗲𝗮𝗸𝘄𝗼𝗼𝗱"
            price="10"
            discount="20"
            image={"/imgs/img-2.jpg"}
          />
          <Card
            title="Rain Forest"
            price="10"
            discount="20"
            image={"/imgs/img-3.jpg"}
          />
          <Card
            title="Roseca Peony"
            price="10"
            discount="20"
            image={"/imgs/img-4.jpg"}
          />
        </div>
        <div className="justify-center flex mt-[30px]">
          <ButtonViewAll />
        </div>
      </div>
    </>
  );
};
export default Bestsellers;
