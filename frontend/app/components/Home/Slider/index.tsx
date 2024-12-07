import useEmblaCarousel from "embla-carousel-react";
import "embla-carousel/embla.css";

const MySlider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, direction: "rtl" });

  return (
    <div className="w-full h-64 bg-gray-100 overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="w-full h-64 bg-red-500 flex items-center justify-center text-white text-2xl">
          Item 1
        </div>
        <div className="w-full h-64 bg-blue-500 flex items-center justify-center text-white text-2xl">
          Item 2
        </div>
        <div className="w-full h-64 bg-green-500 flex items-center justify-center text-white text-2xl">
          Item 3
        </div>
        <div className="w-full h-64 bg-yellow-500 flex items-center justify-center text-white text-2xl">
          Item 4
        </div>
        <div className="w-full h-64 bg-purple-500 flex items-center justify-center text-white text-2xl">
          Item 5
        </div>
      </div>
    </div>
  );
};

export default MySlider;
