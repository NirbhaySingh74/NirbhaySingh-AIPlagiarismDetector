import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p>© 2024 AI Plagiarism Detector. All rights reserved.</p>
        <ul className="mt-4 flex justify-center space-x-4">
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Legal
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
