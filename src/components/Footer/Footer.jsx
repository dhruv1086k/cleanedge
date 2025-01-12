import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white uppercase">
            Clear Edge
          </h2>
          <p className="mt-4 text-sm">Aim to simplify background removal</p>
          <div className="flex space-x-4 mt-4">
            <span className="bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500 transition"></span>
            <span className="bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500 transition"></span>
            <span className="bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500 transition"></span>
            <span className="bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500 transition"></span>
          </div>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold">Company</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold">Quick Link</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Share Location
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Orders Tracking
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Size Guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold">Legal</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
