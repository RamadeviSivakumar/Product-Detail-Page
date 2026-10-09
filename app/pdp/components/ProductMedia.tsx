"use client";
import Image from "next/image";
type ProductMediaProps = {
  image1: string;
  image2: string;
  selectedImage: string;
  setSelectedImage: (image: string) => void;
};

export default function ProductMedia({
  image1,
  image2,
  selectedImage,
  setSelectedImage,
}: ProductMediaProps) {
  return (
    <div className="left-section">

      <div className="product-media">

        <div className="media-thumbnails">

          <button
            className="thumbnail active-thumbnail"
            onClick={() => setSelectedImage(image1)}
            onMouseEnter={() => setSelectedImage(image1)}
          >
            <Image
              src={image1}
              alt="Product front view"
              width={500}
  height={500}
            />
          </button>

          <button
            className="thumbnail"
            onClick={() => setSelectedImage(image2)}
            onMouseEnter={() => setSelectedImage(image2)}
          >
            <Image
              src={image2}
              alt="Product second view"
              width={500}
              height={500}
            />
          </button>

          <button
            className="special-thumbnail"
            onClick={() => setSelectedImage(image1)}
            onMouseEnter={() => setSelectedImage(image1)}
          >
            <span className="special-icon">⟳</span>
            <small>Spin</small>
          </button>

          <button
            className="special-thumbnail"
            onClick={() => setSelectedImage(image2)}
            onMouseEnter={() => setSelectedImage(image2)}
          >
            <span className="special-icon">🧊</span>
            <small>Spatial 3D</small>
          </button>

          <button
            className="special-thumbnail"
            onClick={() => setSelectedImage(image1)}
            onMouseEnter={() => setSelectedImage(image1)}
          >
            <span className="special-icon">🎬</span>
            <small>Video</small>
          </button>

        </div>

        <div className="main-image">

          <Image
            src={selectedImage}
            alt="Boat Rockerz Plus 440"
            width={500}
            height={500}
          />

          <div className="image-badge">
            BOAT ROCKERZ
          </div>

          <div className="image-quality">
            48 kHz DAC
          </div>

        </div>

      </div>

      <div className="feature-cards">

        <div className="feature-card">
          <div className="feature-icon">🎙️</div>

          <div>
            <strong>
              Instant Voice Assistant Support
            </strong>

            <p>Google & Siri</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎮</div>

          <div>
            <strong>Beast Mode</strong>

            <p>
              Tuned for quicker In-Game Response
            </p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🔋</div>

          <div>
            <strong>
              650 mAh / Playtime 60hrs
            </strong>

            <p>
              Charging upto 2.5 Hrs
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}