import laptopsData from '../data/laptops';
import LaptopCard from './LaptopCard';

/**
 * Laptops Component
 * Displays all laptops in a grid layout
 * Handles empty state gracefully
 */
function Laptops() {
    return (
        <section className="laptops" id="laptops">
            <div className="section-header">
                <h2 className="section-title">Laptops for Sale</h2>
                <p className="section-subtitle">Quality laptops at the best prices - New, Imported & Pre-owned</p>
            </div>

            {laptopsData.length === 0 ? (
                /* Empty State */
                <div className="empty-state">
                    <span className="empty-icon">📦</span>
                    <h3>No Laptops Available</h3>
                    <p>Check back soon or contact us on WhatsApp for latest arrivals!</p>
                </div>
            ) : (
                /* Laptop Grid */
                <div className="laptops-grid">
                    {laptopsData.map((laptop) => (
                        <LaptopCard key={laptop.id} laptop={laptop} />
                    ))}
                </div>
            )}
        </section>
    );
}

export default Laptops;
