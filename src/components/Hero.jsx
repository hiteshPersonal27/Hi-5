import config from '../config';
import { getGeneralWhatsAppLink } from '../utils/whatsapp';

/**
 * Hero Component
 * Displays the main landing section with shop name, tagline, and CTA
 */
function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h1 className="hero-title">{config.shopName}</h1>
                <p className="hero-tagline">{config.tagline}</p>
                <p className="hero-description">{config.description}</p>

                <div className="hero-buttons">
                    <a
                        href="#laptops"
                        className="btn btn-primary"
                    >
                        Browse Laptops
                    </a>
                    <a
                        href="#services"
                        className="btn btn-secondary"
                    >
                        Our Services
                    </a>
                </div>
            </div>

            <div className="hero-stats">
                <div className="stat">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Happy Customers</span>
                </div>
                <div className="stat">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                    <span className="stat-number">24hr</span>
                    <span className="stat-label">Quick Service</span>
                </div>
            </div>
        </section>
    );
}

export default Hero;
