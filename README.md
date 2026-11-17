# ✍️ RESTful Blogging Platform & CMS API

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.21-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

An enterprise-grade **RESTful Blogging Platform & CMS API** built with Node.js, Express, public article feeds, dynamic comment threads, and a responsive dark-mode CMS admin publishing portal styled with **Tailwind CSS**.

---

## 📋 Table of Contents
1. [Core Features & Highlights](#-core-features--highlights)
2. [Tech Stack & Architecture](#-tech-stack--architecture)
3. [Project Folder Structure](#-project-folder-structure)
4. [API Endpoints Reference](#-api-endpoints-reference)
5. [Local Installation & Setup](#-local-installation--setup)
6. [Testing the Application](#-testing-the-application)
7. [Author & Developer](#-author--developer)

---

## 🌟 Core Features & Highlights

* **Public Reading Feed:** Clean article reader interface displaying published posts, categories, and interactive comment sections.
* **CMS Admin Dashboard:** Dedicated management portal for publishing new articles and deleting existing posts in real-time.
* **Dynamic Comment Threads:** Allows visitors to post comments instantly on individual blog articles.
* **Slug Generation:** Automatically generates SEO-friendly URL slugs from article titles.
* **Clean Code Architecture:** Modular routing separation between public blog feeds and administrative CMS actions.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend UI** | HTML5 & Tailwind CSS | Responsive dark-mode blog reader and CMS admin dashboard |
| **Backend Runtime** | Node.js & Express.js | REST routing, post publishing, and comment management |

---

## 📂 Project Folder Structure

```text
blog-cms-platform/
├── public/
│   ├── index.html             # Public blog reader feed & comments UI
│   └── admin.html             # CMS admin publishing dashboard UI
├── src/
│   ├── routes/
│   │   └── blogRoutes.js      # Blog posts CRUD & comment endpoints
│   └── data/
│       └── store.js           # In-memory database store for posts and comments
├── server.js                  # Main entry point & static bindings
├── package.json               # Dependencies and scripts manifest
├── .env                       # Environment variables configuration
├── .gitignore                 # Git ignore exclusions
└── README.md                  # Comprehensive technical documentation
