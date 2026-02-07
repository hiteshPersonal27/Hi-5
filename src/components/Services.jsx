import { getServiceEnquiryLink } from '../utils/whatsapp';

/**
 * Services data - All repair services offered
 * To add a new service, add an object with icon, title, and description
 */
const services = [
    {
        icon: "💻",
        title: "Laptop Repair",
        description: "Expert diagnosis and repair for all laptop brands. Screen replacement, keyboard repair, and more."
    },
    {
        icon: "🖥️",
        title: "PC Repair",
        description: "Desktop computer repairs, upgrades, and custom builds. Fast turnaround guaranteed."
    },
    {
        icon: "💿",
        title: "OS Installation",
        description: "Windows, Linux, and macOS installation with drivers and essential software setup."
    },
    {
        icon: "🔧",
        title: "Hardware Replacement",
        description: "RAM upgrades, SSD installation, battery replacement, and component repairs."
    },
    {
        icon: "💾",
        title: "Data Recovery",
        description: "Recover lost files from damaged drives, corrupted storage, and formatted devices."
    },
    {
        icon: "🛠️",
        title: "General Troubleshooting",
        description: "Virus removal, slow performance fixes, network issues, and software problems."
    }
];

/**
 * Services Component
 * Displays all repair services with enquiry buttons
 */
function Services() {
    return (
        <section className="services" id="services">
            <div className="section-header">
                <h2 className="section-title">Our Services</h2>
                <p className="section-subtitle">Professional repair services for all your tech needs</p>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <span className="service-icon">{service.icon}</span>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                        <a
                            href={getServiceEnquiryLink(service.title)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                        >
                            Enquire on WhatsApp
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
