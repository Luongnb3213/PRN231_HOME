import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 mt-6">
      <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-sm text-gray-600">
        {/* Buy Section */}
        <div>
          <h3 className="font-extrabold text-gray-900 mb-2">Buy</h3>
          <ul>
            <li><a href="https://example.com/" className="hover:underline">Registration</a></li>
            <li><a href="https://example.com/" className="hover:underline">Bidding & buying help</a></li>
            <li><a href="https://example.com/" className="hover:underline">Stores</a></li>
            <li><a href="https://example.com/" className="hover:underline">eBay for Charity</a></li>
            <li><a href="https://example.com/" className="hover:underline">Charity Shop</a></li>
            <li><a href="https://example.com/" className="hover:underline">Seasonal Sales and events</a></li>
            <li><a href="https://example.com/" className="hover:underline">eBay Gift Cards</a></li>
          </ul>
        </div>

        {/* Sell Section */}
        <div>
          <h3 className="font-extrabold text-gray-900 mb-2">Sell</h3>
          <ul>
            <li><a href="https://example.com/" className="hover:underline">Start selling</a></li>
            <li><a href="https://example.com/" className="hover:underline">How to sell</a></li>
            <li><a href="https://example.com/" className="hover:underline">Business sellers</a></li>
            <li><a href="https://example.com/" className="hover:underline">Affiliates</a></li>
          </ul>
        </div>

        {/* Tools & apps Section */}
        <div>
          <h3 className="font-extrabold text-gray-900 mb-2">Tools & apps</h3>
          <ul>
            <li><a href="https://example.com/" className="hover:underline">Developers</a></li>
            <li><a href="https://example.com/" className="hover:underline">Security center</a></li>
            <li><a href="https://example.com/" className="hover:underline">Site map</a></li>
          </ul>
        </div>

        {/* About eBay Section */}
        <div>
          <h3 className="font-extrabold text-gray-900 mb-2">About eBay</h3>
          <ul>
            <li><a href="https://example.com/" className="hover:underline">Company info</a></li>
            <li><a href="https://example.com/" className="hover:underline">News</a></li>
            <li><a href="https://example.com/" className="hover:underline">Investors</a></li>
            <li><a href="https://example.com/" className="hover:underline">Careers</a></li>
            <li><a href="https://example.com/" className="hover:underline">Diversity & Inclusion</a></li>
            <li><a href="https://example.com/" className="hover:underline">Global Impact</a></li>
            <li><a href="https://example.com/" className="hover:underline">Government relations</a></li>
            <li><a href="https://example.com/" className="hover:underline">Advertise with us</a></li>
            <li><a href="https://example.com/" className="hover:underline">Policies</a></li>
          </ul>
        </div>

        {/* Help & Contact Section */}
        <div>
          <h3 className="font-extrabold text-gray-900 mb-2">Help & Contact</h3>
          <ul>
            <li><a href="https://example.com/" className="hover:underline">Seller Center</a></li>
            <li><a href="https://example.com/" className="hover:underline">Contact Us</a></li>
            <li><a href="https://example.com/" className="hover:underline">eBay Returns</a></li>
            <li><a href="https://example.com/" className="hover:underline">eBay Money Back Guarantee</a></li>
          </ul>

          <div className="mt-6">
            <h3 className="font-extrabold text-gray-900 mb-2">Stay connected</h3>
            <a href="https://example.com/" className="inline-block mr-2"><i className="fab fa-facebook"></i> Facebook</a>
            <a href="https://example.com/" className="inline-block"><i className="fab fa-twitter"></i> Twitter</a>
          </div>
        </div>
      </div>
  
    </footer>
  );
};

export default Footer;
