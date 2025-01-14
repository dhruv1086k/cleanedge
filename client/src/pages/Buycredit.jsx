import { creditPlans } from "../assets/assets";

export default function BuyCredit() {
  return (
    <>
      <div className="min-h-[70vh] max-w-6xl mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 pt-[10vh]">
          Choose Your Plan
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {creditPlans.map((plan) => (
            <div
              key={plan.id}
              className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              {/* Badge */}
              {plan.id === "Elite" && (
                <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {plan.id}
              </h3>
              <p className="text-gray-600 mb-6">{plan.desc}</p>
              <div className="text-4xl font-bold text-gray-900 mb-4">
                ${plan.price}
                <span className="text-lg font-medium text-gray-500">
                  /month
                </span>
              </div>
              <p className="text-gray-700 mb-8">
                Includes <span className="font-semibold">{plan.credits}</span>{" "}
                credits.
              </p>
              <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:from-blue-600 hover:to-indigo-700 transition duration-300">
                Choose {plan.id}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
