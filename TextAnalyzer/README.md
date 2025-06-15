
# 📝 Text Analyzer

This is a **Text Analyzer** web application built with **HTML**, **CSS**, and **JavaScript**. It allows users to input any block of text and instantly analyze its contents — including word count, character count, and text transformations (uppercase/lowercase).

---

## 💡 Features

- ✅ Word counting with regex
- ✅ Character counting (including spaces)
- ✅ Convert text to UPPERCASE and lowercase
- ✅ Input validation for empty text
- ✅ Elegant design using **CSS variables and gradients**
- ✅ Animated gradient border effect on hover
- ✅ Fully responsive layout using Flexbox

---

## 📺 Live Demo

🔗 [Click here to see it in action](https://ahmedkhaled2817.github.io/50-Project-HTML-CSS-JS/TextAnalyzer/)

---

## 📸 Preview

### 🖥️ Desktop View

![image](https://github.com/user-attachments/assets/0139e231-4b8a-473e-98de-aade833898d2)

### 📱 Mobile View

![image](https://github.com/user-attachments/assets/18a4c637-a045-4492-9130-2487b76a41ae)

---

## 📁 Project Structure

TextAnalyzer/
├── index.html              # Main HTML structure
├── assets/
│   ├── css/
│   │   └── style.css       # Styling and animation
│   └── js/
│       └── main.js         # JavaScript logic for analysis
\`\`\`

---

## 🚀 How It Works

- The user types any text into the `<textarea>`.
- On clicking the **"Text Analyzer"** button:
  - The app counts words using `split(/\s+/)`
  - It calculates total characters using `.length`
  - Converts the input text into both `UPPERCASE` and `lowercase`
  - Shows all results inside a styled result container

---

## 📌 Technologies Used

- HTML5
- CSS3 (Custom properties, transitions, gradients, border animations)
- JavaScript (DOM manipulation, string methods, event handling)

---

## 🧠 Lessons Learned

- Using regular expressions to split and clean strings
- Dynamic DOM updates via `textContent`
- Working with `trim()`, `split()`, `toUpperCase()`, and `toLowerCase()`
- Applying `@keyframes` animation on `border-image-source`
- Writing reusable and responsive UI components
- Add a **"Clear"** button to reset inputs and results

## ✍️ Author

**Ahmed Khaled**  
🔗 [GitHub Profile](https://github.com/AhmedKhaled2817)
