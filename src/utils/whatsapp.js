/**
 * WhatsApp Utility Functions
 * 
 * These functions generate wa.me links for WhatsApp integration.
 * All messages are URL-encoded for proper delivery.
 */

import config from '../config';

/**
 * Generate a general WhatsApp link for the floating button
 * @returns {string} WhatsApp deep link
 */
export function getGeneralWhatsAppLink() {
    const message = `Hi! I'm interested in your laptop and repair services. Can you please help me?`;
    return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a WhatsApp link for service enquiry
 * @param {string} serviceName - Name of the service
 * @returns {string} WhatsApp deep link with pre-filled message
 */
export function getServiceEnquiryLink(serviceName) {
    const message = `Hi! I need help with: *${serviceName}*

Could you please provide more details about this service, including pricing and availability?

Thank you!`;
    return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a WhatsApp link for laptop enquiry
 * @param {object} laptop - Laptop object with specs
 * @returns {string} WhatsApp deep link with pre-filled message
 */
export function getLaptopEnquiryLink(laptop) {
    const message = `Hi! I'm interested in this laptop:

*${laptop.name}*

📋 *Specifications:*
• Processor: ${laptop.processor}
• RAM: ${laptop.ram}
• Storage: ${laptop.storage}
• Graphics: ${laptop.graphics}
• Display: ${laptop.display}
• Condition: ${laptop.condition}
• Warranty: ${laptop.warranty}

💰 *Price:* ₹${laptop.price.toLocaleString('en-IN')}

Is this available? Please share more details.`;
    return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Format price in Indian Rupees
 * @param {number} price - Price in INR
 * @returns {string} Formatted price
 */
export function formatPrice(price) {
    return `₹${price.toLocaleString('en-IN')}`;
}
