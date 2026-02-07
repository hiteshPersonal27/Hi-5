/**
 * ============================================
 * SHOP CONFIGURATION
 * ============================================
 * 
 * HOW TO CHANGE THE WHATSAPP NUMBER:
 * Simply update the 'whatsappNumber' field below with your number.
 * Include the country code without '+' or spaces.
 * Example: For India +91 9876543210, use "919876543210"
 * 
 * HOW TO CHANGE SHOP DETAILS:
 * Update the corresponding fields below.
 */

const config = {
    // ========== WHATSAPP NUMBER ==========
    // Change this to your WhatsApp business number (with country code, no + or spaces)
    whatsappNumber: "9003196001",

    // ========== SHOP DETAILS ==========
    shopName: "Hi-5 Solutions",
    tagline: "Your Trusted Partner for Laptops & Repairs",
    description: "We provide A-to-Z PC and laptop repair services, plus quality laptops at the best prices. New, imported, and pre-owned options available.",

    // ========== CONTACT INFO ==========
    phoneNumber: "+91 90031 96001",
    email: "hi5solutions21@gmail.com",
    address: "6/1, Radial house, Anna Nagar West Extn., Chennai - 600101",

    // ========== BUSINESS HOURS ==========
    businessHours: {
        weekdays: "10:00 AM - 8:00 PM",
        saturday: "10:00 AM - 6:00 PM",
        sunday: "Closed"
    },

    // ========== GOOGLE MAPS (Optional) ==========
    // Replace with your Google Maps embed link or leave empty
    googleMapsLink: "https://www.google.com/maps/dir//13.0878272,80.1911901/@13.0879262,80.1909362,20.75z"

};

export default config;
