# 🌡️ ThermoFlow - Modern Temperature Converter

A **beautiful, responsive temperature converter** with **dark mode**, **smooth animations**, and **real-time conversion**.

<p align="center">
  <img src="https://img.shields.io/badge/ThermoFlow-Temperature_Converter-blue?style=for-the-badge&logo=thermometer" alt="ThermoFlow Badge">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Badge">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3 Badge">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge">
</p>

---

## ✨ Features

🌡️ **Real-time Conversion** – Convert between Celsius, Fahrenheit, and Kelvin instantly  
🌙 **Dark/Light Mode** – Toggle between beautiful themes with smooth transitions  
📱 **Fully Responsive** – Works perfectly on desktop, tablet, and mobile  
🎨 **Modern UI** – Glass morphism effects, glow animations, and soft shadows  
⚡ **Auto-Convert** – Results update live as you type  
🔄 **Unit Swapping** – One-click swap between source and target units  
📊 **Formula Display** – Shows the exact mathematical formula used  
💫 **Visual Feedback** – Toast notifications & animated buttons  

---

## 🚀 Live Demo
🔗 [Click here to view live website](#)

---

## 🎯 Quick Start

### 🧩 Method 1: Direct Use
1. Download the repository files.  
2. Open `index.html` in any modern browser.  
3. Start converting temperatures instantly!

### ⚙️ Method 2: Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/thermoflow.git

# Navigate into the project
cd thermoflow

# Open the app
open index.html
```
---

## 🎮 How to Use

### Basic Conversion
1. **Enter Temperature** – Type any number in the input field  
2. **Select Units** – Choose “From” and “To” units  
3. **Get Results** – The conversion happens automatically  

### Advanced Features
🔄 **Swap Units:** Click the swap button between unit selectors  
🌙 **Toggle Theme:** Use the Light/Dark mode toggle in the header  
📱 **Mobile Friendly:** Works smoothly on all devices  
⚡ **Instant Results:** Updates instantly as you type  

---

## ✅ Supported Conversions

| From | To | Formula |
|------|----|----------|
| Celsius | Fahrenheit | (°C × 9/5) + 32 |
| Celsius | Kelvin | °C + 273.15 |
| Fahrenheit | Celsius | (°F − 32) × 5/9 |
| Fahrenheit | Kelvin | (°F − 32) × 5/9 + 273.15 |
| Kelvin | Celsius | K − 273.15 |
| Kelvin | Fahrenheit | (K − 273.15) × 9/5 + 32 |

---

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (No frameworks)  
- **Styling:** CSS Grid, Flexbox, CSS Custom Properties  
- **Icons:** Font Awesome 6  
- **Animations:** CSS Transitions & Keyframes  
- **Storage:** Local Storage (Theme preference)  

---

## 📁 Project Structure
```
thermoflow/
├── index.html # Main HTML file
├── style.css # Styling and animations
├── script.js # Conversion logic & theme handling
└── README.md # Documentation
```

---
➕ Adding New Units

Extend the conversion formulas in script.js:
```
const conversionFormulas = {
  celsiusToRankine: (c) => (c * 9/5) + 491.67,
  // Add more formulas here...
};
```

---
## 📱 Browser Support

| Browser | Version | Support |
|----------|----------|----------|
| Chrome | 60+ | ✅ Full Support |
| Firefox | 55+ | ✅ Full Support |
| Safari | 12+ | ✅ Full Support |
| Edge | 79+ | ✅ Full Support |
| Mobile Browsers | Recent | ✅ Full Support |

---

## 🤝 Contributing

We welcome all contributions! 💙

1. **Fork the project**  
2. **Create a new branch**
   ```bash
   git checkout -b amazing-feature
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
4. **ush your branch**
    ```bash
    git push origin amazing-feature
5. **Open a Pull Request 🎉**

---

## 🧑‍💻 Development Setup

```bash
# Clone the repo
git clone https://github.com/yourusername/thermoflow.git

# Open in VS Code or any editor
cd thermoflow
code index.html
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|--------|-----------|
| Conversion not working | Enable JavaScript in your browser |
| Theme not saving | Clear browser cache and reload |
| Mobile layout issues | Refresh and ensure responsive mode |
| Icons missing | Check internet connection (Font Awesome CDN) |

---

## 📝 License

This project is licensed under the **MIT License** – feel free to use it for personal or commercial projects.

---

## 🙏 Acknowledgments

- Icons by **Font Awesome**  
- Color inspiration from **modern design systems**  
- UI patterns from **Material Design** and **Apple HIG**

---

## 📞 Support

If you need help or have suggestions:

- Open an issue in the repository  
- Or email: **shaileshvijaykar103@gmail.com**

---

<div align="center">

⭐ **If you find this project helpful, please give it a star!**  

**ThermoFlow © 2025 | All Rights Reserved**  
_Convert temperatures with style and precision 🚀_

</div>

