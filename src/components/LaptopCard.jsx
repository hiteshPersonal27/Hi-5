import { getLaptopEnquiryLink, formatPrice } from '../utils/whatsapp';

/**
 * LaptopCard Component
 * Displays individual laptop with specs and WhatsApp button
 */
function LaptopCard({ laptop }) {
    // Get condition badge color
    const getConditionClass = (condition) => {
        switch (condition.toLowerCase()) {
            case 'new': return 'badge-new';
            case 'imported': return 'badge-imported';
            case 'used': return 'badge-used';
            default: return '';
        }
    };

    return (
        <div className="laptop-card">
            {/* Laptop Image */}
            <div className="laptop-image-container">
                <img
                    src={laptop.images[0]}
                    alt={laptop.name}
                    className="laptop-image"
                    loading="lazy"
                />
                <span className={`condition-badge ${getConditionClass(laptop.condition)}`}>
                    {laptop.condition}
                </span>
            </div>

            {/* Laptop Details */}
            <div className="laptop-details">
                <h3 className="laptop-name">{laptop.name}</h3>

                <div className="laptop-specs">
                    <div className="spec-row">
                        <span className="spec-icon">⚡</span>
                        <span className="spec-text">{laptop.processor}</span>
                    </div>
                    <div className="spec-row">
                        <span className="spec-icon">🧠</span>
                        <span className="spec-text">{laptop.ram}</span>
                    </div>
                    <div className="spec-row">
                        <span className="spec-icon">💽</span>
                        <span className="spec-text">{laptop.storage}</span>
                    </div>
                    <div className="spec-row">
                        <span className="spec-icon">🎮</span>
                        <span className="spec-text">{laptop.graphics}</span>
                    </div>
                    <div className="spec-row">
                        <span className="spec-icon">🖥️</span>
                        <span className="spec-text">{laptop.display}</span>
                    </div>
                    <div className="spec-row">
                        <span className="spec-icon">🛡️</span>
                        <span className="spec-text">{laptop.warranty}</span>
                    </div>
                </div>

                <div className="laptop-footer">
                    <span className="laptop-price">{formatPrice(laptop.price)}</span>
                    <a
                        href={getLaptopEnquiryLink(laptop)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp"
                    >
                        <span className="whatsapp-icon">📱</span>
                        Send on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LaptopCard;
