/**
 * ============================================
 * LAPTOP PRODUCT DATA
 * ============================================
 * 
 * HOW TO ADD A NEW LAPTOP:
 * 1. Copy an existing laptop object (everything between { and })
 * 2. Paste it at the end of the array (before the closing ])
 * 3. Change the 'id' to a unique number
 * 4. Update all the details
 * 
 * HOW TO REMOVE A LAPTOP:
 * Delete the entire object from { to }, including the comma
 * 
 * HOW TO EDIT A LAPTOP:
 * Find the laptop by its name and update the fields
 * 
 * CONDITION OPTIONS: "New", "Imported", "Used"
 */

const laptops = [
    {
        id: 1,
        name: "HP Pavilion 15",
        images: [
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
        ],
        processor: "Intel Core i5-1235U (12th Gen)",
        ram: "8GB DDR4",
        storage: "512GB SSD",
        graphics: "Intel Iris Xe",
        display: "15.6\" FHD IPS",
        condition: "New",
        warranty: "1 Year HP Warranty",
        price: 52999,
    },
    {
        id: 2,
        name: "Dell Inspiron 14",
        images: [
            "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400",
        ],
        processor: "AMD Ryzen 5 5500U",
        ram: "8GB DDR4",
        storage: "256GB SSD",
        graphics: "AMD Radeon Graphics",
        display: "14\" FHD",
        condition: "Imported",
        warranty: "6 Months Shop Warranty",
        price: 38999,
    },
    {
        id: 3,
        name: "Lenovo ThinkPad E14",
        images: [
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400",
        ],
        processor: "Intel Core i7-1165G7 (11th Gen)",
        ram: "16GB DDR4",
        storage: "512GB SSD",
        graphics: "NVIDIA MX450 2GB",
        display: "14\" FHD IPS",
        condition: "Used",
        warranty: "3 Months Shop Warranty",
        price: 45999,
    },
    {
        id: 4,
        name: "ASUS VivoBook 15",
        images: [
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400",
        ],
        processor: "Intel Core i3-1115G4 (11th Gen)",
        ram: "8GB DDR4",
        storage: "256GB SSD",
        graphics: "Intel UHD Graphics",
        display: "15.6\" FHD",
        condition: "New",
        warranty: "1 Year ASUS Warranty",
        price: 35999,
    },
    {
        id: 5,
        name: "Apple MacBook Air M1",
        images: [
            "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400",
        ],
        processor: "Apple M1 Chip",
        ram: "8GB Unified Memory",
        storage: "256GB SSD",
        graphics: "Apple 7-Core GPU",
        display: "13.3\" Retina Display",
        condition: "Imported",
        warranty: "6 Months Shop Warranty",
        price: 72999,
    },
    {
        id: 6,
        name: "Acer Aspire 5",
        images: [
            "https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=400",
        ],
        processor: "AMD Ryzen 7 5700U",
        ram: "16GB DDR4",
        storage: "512GB SSD",
        graphics: "AMD Radeon Graphics",
        display: "15.6\" FHD IPS",
        condition: "New",
        warranty: "1 Year Acer Warranty",
        price: 58999,
    },
];

export default laptops;
