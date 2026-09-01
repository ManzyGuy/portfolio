# Emmanuel Kawonga - Professional Portfolio

Welcome to the repository for my professional portfolio website. I am a Software Developer and ICT & Digital Solutions Consultant helping businesses and organizations solve operational problems through software, digital systems, IT support, and user-focused technology solutions.

## 🚀 Features

- **Modern & Professional Design:** An executive dark-mode aesthetic with corporate blue accents.
- **Responsive Layout:** fully optimized for mobile, tablet, and desktop viewing.
- **Dynamic Project Filtering:** Easily sort portfolio projects by category (All, Software Development, Web Design, IT Support, etc.).
- **Serverless Contact Form:** Integrated with [EmailJS](https://www.emailjs.com/) for direct messaging without a backend server, complete with client-side validation and loading states.
- **Downloadable CV:** Easy access for recruiters and clients to download a PDF resume.

## 🛠️ Technologies Used

- **HTML5 & CSS3:** Semantic structure and custom styling.
- **Vanilla JavaScript:** Dynamic DOM manipulation, project filtering, and form handling.
- **EmailJS:** Third-party API for securely sending emails directly from the client side.
- **FontAwesome:** Scalable vector icons.

## 📂 Project Structure

```text
/
├── index.html       # Main HTML document
├── styles.css       # Custom styling and design system tokens
├── script.js        # Logic for filtering and contact form
├── CV.pdf           # (To be added) Downloadable resume
└── README.md        # Project documentation
```

## ⚙️ Setup and Installation

This is a static single-page application (SPA). No build tools or backend servers are required to view it.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ManzyGuy/portfolio.git
   ```
2. **Open the project:**
   Simply double-click on `index.html` to open it in your default web browser, or use a tool like VS Code's Live Server extension for a better development experience.
3. **Add your CV:**
   Place your resume in the root directory and ensure it is named exactly `CV.pdf` so the download buttons function correctly.

## 📧 Configuring the Contact Form (EmailJS)

The contact form is powered by EmailJS. If you are setting this up from scratch or migrating it, you will need to update the configuration in `script.js` inside the `sendEmail` function:

```javascript
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
```
*Be sure to initialize EmailJS in the `<head>` of `index.html` using your public key.*

## 📄 License

This project is licensed under the MIT License - feel free to use it and modify it for your own personal portfolio.
