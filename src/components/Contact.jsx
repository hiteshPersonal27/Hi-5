import config from '../config';
import { getGeneralWhatsAppLink } from '../utils/whatsapp';

/**
 * Contact Component
 * Displays contact information and business hours
 */
function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="section-header">
                <h2 className="section-title">Contact Us</h2>
                <p className="section-subtitle">Get in touch for enquiries and support</p>
            </div>

            <div className="contact-grid">
                {/* Contact Info */}
                <div className="contact-info">
                    <div className="contact-item">
                        <span className="contact-icon">📞</span>
                        <div>
                            <h4>Phone</h4>
                            <a href={`tel:${config.phoneNumber.replace(/\s/g, '')}`}>
                                {config.phoneNumber}
                            </a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span className="contact-icon">💬</span>
                        <div>
                            <h4>WhatsApp</h4>
                            <a
                                href={getGeneralWhatsAppLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Chat with us
                            </a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span className="contact-icon">✉️</span>
                        <div>
                            <h4>Email</h4>
                            <a href={`mailto:${config.email}`}>
                                {config.email}
                            </a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span className="contact-icon">📍</span>
                        <div>
                            <h4>Address</h4>
                            <p>{config.address}</p>
                        </div>
                    </div>
                </div>

                {/* Business Hours */}
                <div className="business-hours">
                    <h3>Business Hours</h3>
                    <div className="hours-list">
                        <div className="hours-row">
                            <span>Monday - Friday</span>
                            <span>{config.businessHours.weekdays}</span>
                        </div>
                        <div className="hours-row">
                            <span>Saturday</span>
                            <span>{config.businessHours.saturday}</span>
                        </div>
                        <div className="hours-row">
                            <span>Sunday</span>
                            <span className="closed">{config.businessHours.sunday}</span>
                        </div>
                    </div>

                    {config.googleMapsLink && (
                        <a
                            href={config.googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline maps-btn"
                        >
                            📍 View on Google Maps
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Contact;
