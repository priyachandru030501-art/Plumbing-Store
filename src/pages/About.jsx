
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <main className="about-page">
      <section className="about-banner">
        <p>GET TO KNOW US</p>
        <h1>About PIPEPRO</h1>
        <p>Reliable plumbing supplies for homes and professionals.</p>
      </section>

      <section className="about-main">
        <div className="about-visual">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewK_Mmwc3wTAqykU-DBXVlbEqLTCD42skYg_MPFvwNcQh39zdGEL1WvA&s=10" alt="Plumbing Supplies" />
          <span className="about-badge">Built on Trust</span>
        </div>

        <div className="about-text">
          <p className="about-label">WHO WE ARE</p>
          <h2>Your Trusted Partner for Plumbing Supplies</h2>
          <p>
            PIPEPRO is a plumbing supply shop offering essential
            pipes, fittings, plumbing tools, and bathroom products.
            Our goal is to make finding everyday plumbing supplies
            simple and convenient.
          </p>
          <p>
            Whether you are maintaining your home or working on a
            plumbing project, we aim to offer useful products,
            dependable quality, and friendly service.
          </p>

          <div className="about-points">
            <div><span>✓</span> Essential plumbing supplies</div>
            <div><span>✓</span> Products for home projects</div>
            <div><span>✓</span> Friendly customer service</div>
          </div>

          <Link to="/products" className="about-button">
            Explore Our Products →
          </Link>
        </div>
      </section>

      <section className="about-values">
        <div className="about-value-card">
          <span>🎯</span>
          <h3>Our Mission</h3>
          <p>Make essential plumbing products easy to find and buy.</p>
        </div>
        <div className="about-value-card">
          <span>💎</span>
          <h3>Our Values</h3>
          <p>Focus on quality, fair pricing, and dependable service.</p>
        </div>
        <div className="about-value-card">
          <span>🤝</span>
          <h3>Our Promise</h3>
          <p>Help customers find the right supplies for their needs.</p>
        </div>
      </section>
    </main>
  );
}

export default About;
