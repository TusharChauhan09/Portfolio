"use client";

import { useState } from "react";

const certificates = [
  "https://res.cloudinary.com/du8ekvenq/image/upload/v1774339901/Screenshot_2026-03-24_134054_xqstyd.png",
  "https://res.cloudinary.com/du8ekvenq/image/upload/v1774339900/Screenshot_2026-03-24_134032_d4ymwp.png",
  "https://res.cloudinary.com/du8ekvenq/image/upload/v1774339896/Screenshot_2026-03-24_134016_g9vyy6.png",
  "https://res.cloudinary.com/du8ekvenq/image/upload/v1774339803/UC-9e3ea959-a1d3-4466-950b-3b54141ce868_radclj.jpg",
  "https://res.cloudinary.com/du8ekvenq/image/upload/v1774339798/inforses_python_kukodg.png",
  "https://res.cloudinary.com/du8ekvenq/image/upload/v1774339795/freecodecame_frontend_snc9ap.png",
  "https://res.cloudinary.com/du8ekvenq/image/upload/v1774339769/corsera_software_testing_klryf0.png",
  "https://res.cloudinary.com/du8ekvenq/image/upload/v1774339767/CodewithRandomJavascript_jxoxqd.png",
  "https://res.cloudinary.com/du8ekvenq/image/upload/v1774339765/codewise_Hackathone_nns9qj.png",
];

export default function CertificatesPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-[70vh]">
      <h1 className="jap text-4xl mb-8">Certificates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((url, i) => (
          <div
            key={i}
            className="group rounded-xl overflow-hidden border border-border bg-card cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            onClick={() => setSelected(i)}
          >
            <img
              src={url}
              alt={`Certificate ${i + 1}`}
              className="w-full h-56 object-cover grayscale transition-[filter] duration-300 group-hover:grayscale-0"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-10 right-0 text-white text-2xl cursor-pointer hover:opacity-70 transition-opacity"
            >
              &times;
            </button>
            <img
              src={certificates[selected]}
              alt={`Certificate ${selected + 1}`}
              className="w-full rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
