import { useState } from "react";
import { assets } from "../../assets/assets";

export default function Slider() {
  const [sliderPosition, setSliderPosition] = useState(60);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <>
      <div className="w-full h-auto mt-16">
        <h1 className="text-4xl font-bold uppercase text-center">
          Remove Background Without <br />{" "}
          <span
            className="before:content-[''] before:w-full before:h-full"
            style={{
              backgroundImage: `url(${assets.leaf})`,
              backgroundSize: "contain",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
            }}
          >
            Loosing
          </span>{" "}
          Quality
        </h1>
        <div
          className="flex relative w-[800px] h-auto min-h-[450px] mx-auto rounded-3xl overflow-hidden
        my-10"
        >
          {/* background image */}
          <img
            src={assets.image_w_bg}
            style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
            // 100.2 me se isliye minus kiya hai taaki right side se clipping ho
            alt=""
            className="absolute"
          />
          {/* foreground image */}
          <img
            src={assets.image_wo_bg}
            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            // 100.2 me se isliye minus kiya hai taaki right side se clipping ho
            alt=""
            className="absolute"
          />
          <input
            type="range"
            name="slider"
            value={sliderPosition}
            onChange={handleSliderChange}
            className="slider w-full my-auto z-30"
            min={0}
            max={100}
          />
        </div>
      </div>
    </>
  );
}
