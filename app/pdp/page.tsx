import ProductInteractive from "./components/ProductInteractive";
import DescriptionSection from "./components/DescriptionSection";
import SpecificationSection from "./components/SpecificationSection";
import RecommendedSection from "./components/RecommendedSection";
import ReviewSection from "./components/ReviewSection";
import FooterSection from "./components/FooterSection";

export default function Home() {

  const image1 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReusdI9Yfo-Z1jFnTV14BRw8KiLZHL_sHgiRcFOguySg&s=10";

  const image2 =
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/5_7ee14e2c-ba34-45be-81b7-2acdd11d649b_2500x.jpg?v=1783069321";

  const image3 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGyYSALUTg6RyFomXa2Gv31ZPBsLu4s3DenydGdNRE6Q&s=10";

  const image4 =
    "https://rukminim3.flixcart.com/image/480/640/xif0q/headphone/m/x/e/-original-imahzv2es2exbgvd.jpeg?q=20";

  return (
    <main>

      <section className="page-container">

        <nav className="breadcrumb">
          Home &gt; Electronics &gt; Audio &gt; Wireless Headphones &gt;
          <strong>
            {" "}Boat Rockerz Plus 440
          </strong>
        </nav>

        <div className="media-box">

          <span className="media-active">
            📷 Photos
          </span>

          <span>
            ⟳ 360° View
          </span>

          <span>
            🧊 3D Interactive
          </span>

          <span>
            🎬 Cinema Reel
          </span>

          <span className="hi-res">
            • Hi-Res 192kHz/24-bit Ready
          </span>

        </div>

        <ProductInteractive
          image1={image1}
          image2={image2}
          image3={image3}
          image4={image4}
        />

      </section>

      <DescriptionSection />

      <SpecificationSection />

      <RecommendedSection />

      <ReviewSection />

      <FooterSection />

    </main>
  );
}