# 🌿 Green Shop
Live demo: [Green Shop][https://nurunnaharnody0011.github.io/greenshop/]

> A responsive static storefront for browsing trees and plants, adding products to a cart, and exploring account forms.

[![HTML5](https://img.shields.io/badge/HTML5-markup-orange?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-styling-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🌱 About the Project

Green Shop is a front-end plant and tree shop prototype. Visitors can explore the homepage, browse a collection of 16 plants, view product images, add collection items to a shopping cart, and review the cart total. The project also includes a client-side account page with sign-in and account-creation forms.

Its main purpose is to provide a simple, responsive shopping experience for presenting plants and demonstrating common storefront interactions directly in the browser.

## ✨ Features

- Responsive green-themed layout for desktop, tablet, and mobile screens
- Homepage with hero section, plant categories, service information, and contact link
- Tree collection page with 16 plant listings, images, names, and prices
- Product image viewer with captions and a close/back control
- Dynamically generated **Buy** buttons on product cards
- Shopping cart stored in browser `localStorage`
- Cart item listing and total calculation
- Empty-cart state with a link back to the collection
- Sign-in and account-creation forms with basic empty-field validation
- Visual Google and Apple sign-in buttons
- Shared navigation, contact links, and footer across pages

> **Note:** Account actions and social sign-in buttons are currently front-end demonstrations; no authentication service is connected.

## 🧰 Tech Stack

### Frontend

- HTML5
- CSS3
- Vanilla JavaScript
- Browser `localStorage` Web API

### Backend

- None — this is a static front-end project.

### Database

- None — cart data is stored locally in the browser.

### Tools and Assets

- Local JPEG and PNG plant images
- Git repository
- No external libraries, frameworks, APIs, or services
- No package manager or build tool configuration

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- No dependency installation is required

### Installation

1. Clone or download this repository.
2. Open the project folder.
3. No `npm install`, `yarn install`, or other dependency command is needed because the project has no external dependencies.

## ▶️ Running the Project

This project does not include a `package.json` or start script. Open `index.html` in a modern browser to run it locally.

On macOS, the project can be opened from the terminal with:

```bash
open index.html
```

Use the navigation to visit the collection, cart, and account pages. Products added to the cart remain in the current browser's `localStorage` under the key `greenshopCart`.

## 📁 Project Structure

```text
greenshop/
├── index.html                                      # Homepage and shop introduction
├── tree.html                                       # Plant collection and product cards
├── cart.html                                       # Cart items and order total
├── account.html                                    # Sign-in and account-creation forms
├── script.js                                       # Cart, viewer, toast, and form interactions
├── style.css                                       # Shared responsive styling
├── rosemary.png                                    # Local plant image asset
└── WhatsApp Image 2026-06-21 at *.jpeg            # Local plant image assets
```

## 📜 Available Scripts

There are no scripts configured because the project does not contain a `package.json` file. The pages run directly in a browser, with JavaScript loaded through `script.js`.

## 🔭 Future Improvements

- Add a backend for real account registration, sign-in, and social authentication.
- Add checkout and payment processing.
- Add product quantities, item removal, and cart clearing.
- Add prices to homepage product cards so those items contribute correctly to the cart total.
- Add a real product data source and filtering or search controls.
- Add visible form-message elements and stronger input validation.
- Rename image assets to shorter, consistent filenames and correct case-sensitive references.

## 👤 Author

**Nurunnahar Nody**

- GitHub: [@nurunnaharnody0011](https://github.com/nurunnaharnody0011)
