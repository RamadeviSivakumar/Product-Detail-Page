export default function FooterSection(){
    return(
         <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <h2>BOAT ROCKERZ 440 PLUS</h2>

          <p>
            Engineered for powerful, immersive sound, the Rockerz Plus 440
             combines advanced audio drivers with a carefully tuned acoustic chamber
              for deep bass and clear, detailed highs. Built for extended listening, 
              it delivers dynamic sound with the comfort and freedom you need throughout the day.
          </p>

          <div className="newsletter">
            <label>SUBSCRIBE TO OUR EMAIL ALERTS</label>

            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address..."
              />

              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>

        {/* Customer Care */}
        <div className="footer-column">
          <h3>HELP</h3>

          <a href="">Product Support</a>
          <a href="#">Order Tracking</a>
          <a href="#">Returns & Exchanges</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Support</a>
        </div>

        {/* Technical Support */}
        <div className="footer-column">
          <h3>TECHNICAL SUPPORT</h3>

          <a href="#">Warranty Registration</a>
          <a href="#">User Manual</a>
          <a href="#">Bluetooth Support</a>
          <a href="#">Battery & Charging</a>
          <a href="#">Service Centers</a>
        </div>

        {/* Acoustic Standards */}
        <div className="footer-column standards">
          <h3>ACOUSTIC STANDARDS</h3>

          <a href="#" className="certified">
            ⚡ <span>Bluetooth 6.0</span>
          </a>

          <a href="#" className="certified">
            〽 <span>Beast Mode</span>
          </a>

          <a href="#" className="certified">
            🔊<span>High Quality Audio</span>
          </a>
          <a href="#" className="certified">
           🎵 <span>Wireless Connectivity</span>
          </a>

          <a href="#" className="warranty">
            ♢ <span>1-Year Master Warranty</span>
          </a>
        </div>

      </div>

      {/* Bottom border */}
      <div className="footer-bottom"></div>
    </footer>
    )
}