import React from "react";
import XIcon from "@mui/icons-material/X";

function Footer() {
  return (
    <footer className="bg-green-600 text-dark-gray py-8 md:w-[90%] w-full max-w-screen-2xl mx-auto">
      <div className="container p-4 flex justify-around flex-col md:flex-row">
        {/* Description */}
        <div className="mb-8 w-80">
          <h2 className="text-2xl font-bold">About Our School</h2>
          <p className="mt-5 font-semibold">
            Our school is committed to providing high-quality education to
            students from diverse backgrounds. We offer a wide range of programs
            and extracurricular activities to help students achieve their full
            potential.
          </p>
        </div>

        {/* Links */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Quick Links</h2>
          <ul className="mt-5 font-semibold">
            <li className="mt-2">
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mt-2">
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mt-2">
              <a href="/courses" className="hover:underline">
                Courses
              </a>
            </li>
            <li className="mt-2">
              <a href="/staffs" className="hover:underline">
                Staff
              </a>
            </li>
            <li className="mt-2">
              <a href="/news-and-events" className="hover:underline">
                Events
              </a>
            </li>
            <li className="mt-2">
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="mt-5 text-gray-800 font-semibold">
            Kwara State, Malete
          </p>
          <p className="mt-2 text-gray-800 font-semibold">
            Email: hod.ece@kwasu.edu.ng
          </p>
          <p className="mt-2 text-gray-800 font-semibold">
            Phone: (123) 456-7890
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-2xl font-bold">Follow Us</h2>
          <div className="mt-5 flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-blue-400 hover:text-blue-950"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.49v-9.294H9.691v-3.622h3.125V8.413c0-3.097 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.916.001c-1.504 0-1.794.715-1.794 1.763v2.311h3.588l-.468 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.675V1.325C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-900 hover:text-gray-700"
            >
              <XIcon />
            </a>
            <a
              href="https://linkedin.com"
              className="text-red-500 hover:text-white"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.028-3.037-1.852-3.037-1.852 0-2.136 1.448-2.136 2.942v5.664H9.355v-11.45h3.414v1.561h.047c.476-.9 1.635-1.85 3.364-1.85 3.6 0 4.262 2.368 4.262 5.449v6.29h-.005zM5.337 8.433a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm-1.777 12.019h3.556v-11.45h-3.556v11.45zm16.344-18.452h-16.005c-1.017 0-1.844.826-1.844 1.844v16.005c0 1.017.826 1.844 1.844 1.844h16.005c1.017 0 1.844-.826 1.844-1.844v-16.005c0-1.017-.826-1.844-1.844-1.844z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
