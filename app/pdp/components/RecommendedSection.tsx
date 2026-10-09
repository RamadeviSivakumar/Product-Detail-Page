import Image from "next/image";
export default function RecommendedSection() {
  const image1 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReusdI9Yfo-Z1jFnTV14BRw8KiLZHL_sHgiRcFOguySg&s=10";

  return (
    <section className="recommended-section">

      <div className="recommended-container">

        <div className="recommended-header">

          <span>
            CURATED HEADPHONE ESSENTIALS
          </span>

          <h2>
            Frequently Paired Headphone Setup
          </h2>

        </div>

        <div className="recommended-content">

          <div className="recommended-product">

            <div className="recommended-image">

              <Image
                src={image1}
                alt="boAt Rockerz Plus 440"
                width={500}
                height={500}
              />

            </div>

            <h3>
              boAt Rockerz Plus 440
            </h3>

            <strong>
              ₹2,199
            </strong>

            <span>
              PRIMARY HEADPHONES
            </span>

          </div>

          <div className="recommended-plus">
            +
          </div>

          <div className="recommended-product">

            <div className="recommended-image">

              <Image
                src="https://images.price.tools/images/sounce-headphone-case-boat-rockerz-550-m-JxAnKQdn1.jpg"
                alt="Hard Shell Headphone Case"
                width={500}
                height={500}
              />

            </div>

            <h3>
              Hard Shell Headphone Case
            </h3>

            <strong>
              ₹699
            </strong>

            <span>
              PROTECTIVE STORAGE
            </span>

          </div>

          <div className="recommended-plus">
            +
          </div>

          <div className="recommended-product">

            <div className="recommended-image">

              <Image
                src="https://m.media-amazon.com/images/I/718dUr5np4L._AC_UF1000,1000_QL80_.jpg"
                alt="Replacement Ear Cushions"
                width={500}
                height={500}
              />

            </div>

            <h3>
              Replacement Ear Cushions
            </h3>

            <strong>
              ₹499
            </strong>

            <span>
              COMFORT & REPLACEMENT
            </span>

          </div>

          <div className="bundle-card">

            <span className="bundle-label">
              ★ COMPLETE HEADPHONE PACKAGE
            </span>

            <div className="bundle-price">
              ₹3,397
            </div>

            <div className="bundle-original-price">
              <del>
                ₹4,197
              </del>
            </div>

            <p className="bundle-saving">
              Instant Bundle Savings: ₹800
            </p>

            <button className="bundle-button">
              🛒 ADD COMPLETE BUNDLE
            </button>

            <p className="bundle-note">
              Includes headphone, protective case &
              replacement ear cushions
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}