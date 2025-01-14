import { assets } from "../assets/assets";
import { quantum } from "ldrs";

quantum.register();

export default function Result() {
  return (
    <>
      <div className="min-h-[90vh] bg-[#ebebeb]">
        <div className="px-32 pt-32 pb-6">
          {/* image container */}
          <div className="flex gap-5">
            {/* original image */}
            <div className="p-10 rounded-lg bg-white w-1/2">
              <p className="text-center font-medium text-xl">Original</p>
              <img
                src={assets.image_w_bg}
                alt=""
                className="mt-2 rounded-md border shadow-md"
              />
            </div>
            {/* result image */}
            <div className="p-10 rounded-lg bg-white w-1/2 flex flex-col">
              <p className="text-center font-medium text-xl">Result</p>
              <div className="relative shadow-md rounded-lg bg-layer h-full mt-2 overflow-hidden">
                {/* <img
                src={assets.image_wo_bg}
                alt=""
                className="rounded-sm border shadow-md"
              /> */}
                <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                  <div>
                    <l-quantum size="45" speed="1.75" color="black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center gap-5 items-center my-14">
          <a
            href="/"
            className="px-6 py-2 rounded-lg bg-tranparent border border-[#d9a70f] text-black font-medium hover:text-white hover:bg-[#d9a70f] transition duration-300"
          >
            Try Another Image
          </a>
          <a
            href="#"
            className="px-6 py-2 rounded-lg bg-[#d9a70f] text-white font-medium hover:bg-[#bb9522] hover:shadow-lg transition duration-300"
          >
            Download Image
          </a>
        </div>
      </div>
    </>
  );
}
