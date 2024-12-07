import { ButtonStyle } from "~/components/common/button";

const Discover = () => {
  return (
    <>
      <div className="md:flex mt-[50px] items-center justify-center">
        <div className="info">
          <div className="title-h1 max-w-[757px]">Discover Our Product</div>
          <div className="desc-1 max-w-[550px]">
            We have skincare, body, wellbeing products and amazing frangrance
            range. All made with love in India
          </div>
          <ButtonStyle title={"Explore Categories"} />
        </div>

        <div className="images md:flex gap-3">
          <div className="image-left mt-20">
            <img className="img-radius" src="/imgs/images.jpg" alt="category" />
            <img
              className="img-half-circle rotate-180 mt-5"
              src="/imgs/img-2.jpg"
              alt="category"
            />
          </div>

          <div className="image-right">
            <img
              className="img-half-circle"
              src="/imgs/img-3.jpg"
              alt="category"
            />
            <img
              className="img-radius  mt-5"
              src="/imgs/img-4.jpg"
              alt="category"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
