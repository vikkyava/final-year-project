import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full">
      <div className="container p-4 flex justify-around flex-col md:flex-row">
        {/* Description */}
        <div className="mb-8 w-80">
          <h2 className="text-2xl font-semibold">About Our School</h2>
          <p className="mt-5 text-gray-400">
            Our school is committed to providing high-quality education to
            students from diverse backgrounds. We offer a wide range of programs
            and extracurricular activities to help students achieve their full
            potential.
          </p>
        </div>

        {/* Links */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Quick Links</h2>
          <ul className="mt-5">
            <li className="mt-2">
              <a href="/" className="hover:underline text-gray-400">
                Home
              </a>
            </li>
            <li className="mt-2">
              <a href="/about" className="hover:underline text-gray-400">
                About Us
              </a>
            </li>
            <li className="mt-2">
              <a href="/courses" className="hover:underline text-gray-400">
                Courses
              </a>
            </li>
            <li className="mt-2">
              <a href="/staffs" className="hover:underline text-gray-400">
                Staff
              </a>
            </li>
            <li className="mt-2">
              <a
                href="/news-and-events"
                className="hover:underline text-gray-400"
              >
                Events
              </a>
            </li>
            <li className="mt-2">
              <a href="/contact" className="hover:underline text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="mt-5 text-gray-400">Kwara State, Malete</p>
          <p className="mt-2 text-gray-400">Email: contact@ourschool.edu</p>
          <p className="mt-2 text-gray-400">Phone: (123) 456-7890</p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-2xl font-semibold">Follow Us</h2>
          <div className="mt-5 flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.49v-9.294H9.691v-3.622h3.125V8.413c0-3.097 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.916.001c-1.504 0-1.794.715-1.794 1.763v2.311h3.588l-.468 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.675V1.325C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.385-1.83.648-2.825.764a4.936 4.936 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.925 4.925 0 0 0-8.388 4.482A13.978 13.978 0 0 1 1.671 3.149 4.924 4.924 0 0 0 3.195 9.723a4.904 4.904 0 0 1-2.229-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.937 4.937 0 0 1-2.224.084 4.926 4.926 0 0 0 4.604 3.417A9.867 9.867 0 0 1 .975 19.045a13.944 13.944 0 0 0 7.548 2.212c9.056 0 14.009-7.496 14.009-13.986 0-.213-.004-.425-.014-.637a10.025 10.025 0 0 0 2.459-2.548l-.047-.02z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white"
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
