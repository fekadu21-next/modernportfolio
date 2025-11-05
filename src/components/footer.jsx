// import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#eeedeb] text-center py-6 border-t border-gray-200 mt-12">
      <p className="text-gray-700 text-sm mb-4">
        © Copyright <span className="font-bold">Fekadu</span> All Rights
        Reserved
      </p>

      <div className="flex justify-center gap-4 mb-3">
        {[
          {
            icon: <FaTelegramPlane />,
            link: "https://t.me/fikea19",
          },
          {
            icon: <FaFacebookF />,
            link: "#",
          },
          {
            icon: <FaLinkedinIn />,
            link: "#",
          },
          {
            icon: <FaWhatsapp />,
            link: "#",
          },
        ].map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 text-gray-700 hover:bg-teal-500 hover:text-white transition"
          >
            {item.icon}
          </a>
        ))}
      </div>

      <p className="text-gray-700 text-sm font-medium">
        Designed by <span className="text-gray-900 font-semibold">Fekadu</span>
      </p>
    </footer>
  );
}
