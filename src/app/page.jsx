// pages/index.jsx
import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sweet Bakery Final Exam</title>
      </Head>

      {/* User's custom header for Final Exam 343 */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Final Exam 343</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-1">Ruzzaq, Saddat</h2>
      <h3 className="text-xl text-gray-600 mb-4">Spring 2025</h3>

      {/* Bakery site content */}
      <header>
        <h1>Sweet Bakery</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about" className="section">
        <h2>About Us</h2>
        <p>Welcome to Sweet Bakery!</p>
      </section>

      <section id="products" className="section">
        <h2>Our Products</h2>
        <div className="product-container">
          <div className="product-card">
            <h3>Cupcakes</h3>
            <p>Delicious cupcakes baked fresh daily.</p>
          </div>
          <div className="product-card">
            <h3>Artisan Bread</h3>
            <p>Freshly baked artisan breads.</p>
          </div>
          <div className="product-card">
            <h3>Pastries</h3>
            <p>Sweet and buttery pastries to enjoy.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <form id="contactForm">
          <input type="text" id="name" placeholder="Your Name" required />
          <input type="email" id="email" placeholder="Your Email" required />
          <textarea id="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p>© 2024 Sweet Bakery. All rights reserved.</p>
      </footer>
    </>
  );
}
