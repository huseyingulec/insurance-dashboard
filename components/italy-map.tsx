"use client";

type ItalyMapProps = {
  imageUrl: string; // URL of the Italy map image
};

export default function ItalyMap({ imageUrl }: any) {
  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      <img
        src={imageUrl}
        alt="Italy Map"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
