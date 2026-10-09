const ratings = [
  { star: 5, percentage: 88 },
  { star: 4, percentage: 9 },
  { star: 3, percentage: 2 },
  { star: 2, percentage: 1 },
];

const reviews = [
  {
    initials: "RK",
    name: "Rahul Kumar",
    role: "Verified Customer",
    title: "Powerful sound and really good bass.",
    text: "The Rockerz Plus 440 delivers clear audio with strong bass. The dual driver setup makes music enjoyable and the headphones are comfortable for long listening sessions.",
  },
  {
    initials: "AP",
    name: "Ananya Priya",
    role: "Verified Customer",
    title: "Excellent battery life for everyday use.",
    text: "The 60-hour playback is very useful for daily listening. Bluetooth 6.0 connects quickly and BEAST Mode is useful when playing games.",
  },
];

export default function ReviewSection() {
  return (
    <section className="reviews-section">

      <div className="reviews-container">

        <div className="reviews-summary">

          <span className="reviews-label">
            CUSTOMER REVIEWS
          </span>

          <h2>
            Customer
            <br />
            Reviews
          </h2>

          <div className="rating-summary">

            <span className="overall-rating">
              4.8
            </span>

            <div>

              <div className="rating-stars">
                ★★★★★
              </div>

              <p className="rating-count">
                Based on 2,486 verified reviews
              </p>

            </div>

          </div>

          <div className="rating-bars">

            {ratings.map((rating) => (
              <div
                className="rating-row"
                key={rating.star}
              >

                <span>
                  {rating.star}★
                </span>

                <div className="rating-track">

                  <div
                    className="rating-fill"
                    style={{
                      width: `${rating.percentage}%`,
                    }}
                  />

                </div>

                <strong>
                  {rating.percentage}%
                </strong>

              </div>
            ))}

          </div>

        </div>

        <div className="reviews-list">

          {reviews.map((review) => (

            <article
              className="review-card"
              key={review.name}
            >

              <div className="review-top">

                <div className="review-stars">
                  ★★★★★
                </div>

                <span className="verified-badge">
                  ✓ Verified Buyer
                </span>

              </div>

              <h3>
                "{review.title}"
              </h3>

              <p>
                {review.text}
              </p>

              <div className="review-user">

                <div className="user-avatar">
                  {review.initials}
                </div>

                <div>

                  <strong>
                    {review.name}
                  </strong>

                  <span>
                    {review.role}
                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}