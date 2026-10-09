"use client";

import { useState } from "react";

import ProductMedia from "./ProductMedia";
import ProductInfo from "./ProductInfo";

type ProductInteractiveProps = {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
};

export default function ProductInteractive({
  image1,
  image2,
  image3,
  image4,
}: ProductInteractiveProps) {

  const [selectedImage, setSelectedImage] =
    useState(image1);

  const [selectedColor, setSelectedColor] =
    useState("Midnight Black");

  return (
    <div className="product-section">

      <ProductMedia
        image1={image1}
        image2={image2}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />

      <ProductInfo
        image1={image1}
        image3={image3}
        image4={image4}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        setSelectedImage={setSelectedImage}
      />

    </div>
  );
}