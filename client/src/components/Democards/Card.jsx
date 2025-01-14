import { assets } from "../../assets/assets";

export default function Card() {
  return (
    <>
      <div className="w-full h-auto px-32">
        <h1 className="text-4xl font-bold">
          SEE THE{" "}
          <span
            className="before:content-[''] before:w-full before:h-full"
            style={{
              backgroundImage: `url(${assets.leaf})`,
              backgroundSize: "contain",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat"
            }}
          >
            MAGIC
          </span>{" "}
          IN ACTION
        </h1>
        <div className="flex justify-between items-center gap-10 py-10">
          {/* Card 1 */}
          <div className="group relative h-[450px] w-auto overflow-hidden">
            <img
              src={assets.card1}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="cardTextBackdrop">
              <p className="cardText text-white text-4xl font-bold">Logo's</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative h-[450px] w-auto overflow-hidden">
            <img
              src={assets.card2}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="cardTextBackdrop">
              <p className="cardText text-white text-4xl font-bold">Cars</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative h-[450px] w-auto overflow-hidden">
            <img
              src={assets.card3}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="cardTextBackdrop">
              <p className="cardText text-4xl text-white font-bold">People</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
