# Hi-5 Computer Shop - MVP Website

A React-based website for a local computer repair shop and laptop sales business with WhatsApp-based lead generation.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Navigate to project folder
cd Hi-5

# Install dependencies
npm install

# Start development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📝 How to Customize

### Change WhatsApp Number

Edit `src/config.js`:

```javascript
whatsappNumber: "919876543210",  // Your number with country code
```

### Add/Edit Laptops

Edit `src/data/laptops.js`:

```javascript
{
  id: 7,                    // Unique ID
  name: "Your Laptop Name",
  images: ["image-url"],
  processor: "Intel Core i7",
  ram: "16GB DDR4",
  storage: "512GB SSD",
  graphics: "NVIDIA RTX 3060",
  display: "15.6\" FHD",
  condition: "New",         // New, Imported, or Used
  warranty: "1 Year",
  price: 75999,
}
```

### Update Shop Details

Edit `src/config.js` to change:
- Shop name and tagline
- Phone number
- Business hours
- Address
- Google Maps link

---

## 📂 Project Structure

```
Hi-5/
├── src/
│   ├── components/         # React components
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Laptops.jsx
│   │   ├── LaptopCard.jsx
│   │   ├── Contact.jsx
│   │   └── WhatsAppButton.jsx
│   ├── data/
│   │   └── laptops.js      # Product data
│   ├── utils/
│   │   └── whatsapp.js     # WhatsApp link utilities
│   ├── config.js           # Shop configuration
│   ├── App.jsx             # Main app
│   ├── App.css             # Styles
│   └── main.jsx            # Entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🎨 Features

- ✅ Modern dark theme with gradients and animations
- ✅ Mobile-first responsive design
- ✅ Floating WhatsApp button
- ✅ Pre-filled WhatsApp messages for enquiries
- ✅ Lazy-loaded images
- ✅ Empty state handling
- ✅ SEO optimized

---

## 🏗️ Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy.

---

## 🚀 Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.
Every push to the `main` branch will trigger a new build and deployment.


---

## 📜 License

MIT License - Feel free to use and modify for your business!
