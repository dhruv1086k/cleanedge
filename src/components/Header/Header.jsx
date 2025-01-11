import { assets } from "../../assets/assets";

export default function Header() {
  return (
    <>
      <div className="w-full h-screen p-32">
        <div className="flex relative w-full h-full bg-[#f5f8f6] rounded-[5rem]">
          <img
            src={assets.star}
            alt=""
            className="absolute w-10 h-10 left-1/2 top-10"
          />
          <img
            src={assets.star}
            alt=""
            className="absolute w-10 h-10 left-1/3 bottom-44"
          />
          <img
            src={assets.star}
            alt=""
            className="absolute w-10 h-10 right-24 bottom-3"
          />
          <div className="w-1/2 h-full flex flex-col items-start justify-center pl-16">
            <h1 className="text-7xl font-extrabold relative z-30">
              <span className="headerBackdrop before:bg-white">Remove</span>{" "}
              Backgrounds{" "}
            </h1>
            <h1 className="text-7xl font-extrabold relative z-10 mt-2">
              <span className="headerBackdrop before:bg-[#ebd96b]">
                Instantly
              </span>{" "}
              & Easily!
            </h1>
            <h5 className="my-5">
              Upload your images and let our tool handle the rest
            </h5>
            <a href="#">
              <button className="px-4 py-2 rounded-lg bg-black text-lg text-white font-semibold">
                Upload Image Now
              </button>
            </a>
          </div>
          <div className="w-1/2 h-full flex justify-center items-center p-16">
            <img
              src={assets.header_img}
              alt="header image"
              className="w-auto h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
