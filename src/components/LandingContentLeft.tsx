import brand from "../assets/ethereum-brand.png";
import useAnimateImage from "./ImageAnimation";

function LandingContentLeft() {
  const imageRef1 = useAnimateImage();

  return (
    <div className="justify-items-center lg:flex-1 lg:min-h-screen sm:h-10 lg:border-r-2 lg:border-gray-200 lg:pr-5">
      <img
        ref={imageRef1}
        src={brand}
        className="max-h-screen lg:max-h-full lg:h-3/4 md:max-h-10 md:h-10"
      />
    </div>
  );
}

export default LandingContentLeft;
