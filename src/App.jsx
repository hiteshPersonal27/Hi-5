import Hero from './components/Hero';
import Services from './components/Services';
import Laptops from './components/Laptops';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import config from './config';

/**
 * Main App Component
 * Assembles all sections of the website
 */
function App() {
    return (
        <div className="app">
            {/* Navigation */}
            <nav className="navbar">
                <div className="nav-brand">{config.shopName}</div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#laptops">Laptops</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button className="mobile-menu-btn" aria-label="Toggle menu">
                    ☰
                </button>
            </nav>

            {/* Main Content */}
            <main>
                <Hero />
                <Services />
                <Laptops />
                <Contact />
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2026 {config.shopName}. All rights reserved.</p>
                    <p>Crafted with ❤️ for quality tech solutions</p>
                </div>
            </footer>

            {/* Floating WhatsApp Button */}
            <WhatsAppButton />
        </div>
    );
}

export default App;
