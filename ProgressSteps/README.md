# Progress Steps

This is a responsive multi-step progress bar built using **HTML**, **CSS (Bootstrap + custom)**, and **JavaScript**.

## 💡 Features

* Dynamic progress tracking
* Responsive design:

  * Horizontal steps on desktop
  * Vertical progress on screens ≤ 380px
* Next/Prev navigation
* Updates current step counter
* Styled using Bootstrap 5 and custom CSS

## 📺 Live Demo

[Click here to see it in action](https://ahmedkhaled2817.github.io/50-Project-HTML-CSS-JS/ProgressSteps/)

## 📸 Preview

### Desktop

![image](https://github.com/user-attachments/assets/8f0227e2-ea35-4117-b8d0-440fe485ce63)

### Mobile (≤ 380px)

![image](https://github.com/user-attachments/assets/8c93acc9-2ddc-4bc2-a518-677266da0f18)

## 📁 Files

* `index.html` – Main structure of the page
* `assets/css/style.css` – Custom styling
* `assets/css/responsive.css` – Media query for mobile layout
* `assets/js/main.js` – Handles navigation and progress update

## 🚀 How it works

* Circles represent steps
* The `.progress-circle` background fills based on active steps
* At screen width ≤ 380px, layout switches to **vertical**
* JavaScript adjusts progress width/height based on screen size

## 🧠 Lessons Learned

* Responsive behavior using both **CSS media queries** and **JS (window\.innerWidth)**
* DOM manipulation to update classes and styles dynamically
* Clean separation of concerns: HTML, CSS, and JS

## ✍️ Author

**Ahmed Khaled**
🔗 [GitHub Profile](https://github.com/AhmedKhaled2817)
