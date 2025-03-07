import { Button } from "@/components/ui/button";
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-900 py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-white">Daily News</h2>
            <p className="mt-1 text-gray-400 text-sm">
              Building a better digital experience for everyone.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4 text-gray-400 text-sm">
            <a href="/about" className="hover:text-white">About</a>
            <a href="/services" className="hover:text-white">Services</a>
            <a href="/contact" className="hover:text-white">Contact</a>
            <a href="/privacy" className="hover:text-white">Privacy</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-3">
            <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-white">
              <AiOutlineTwitter size={20} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-white">
              <AiOutlineInstagram size={20} />
            </a>
            <a href="https://github.com" aria-label="Github" className="text-gray-400 hover:text-white">
              <AiOutlineGithub size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 text-center md:flex md:justify-between md:items-center text-sm">
          <p className="text-gray-400">&copy; 2025 Daily news. All rights reserved.</p>
          <Button variant="outline" className="mt-2 md:mt-0 text-black border-gray-500 hover:bg-red-700">
            Subscribe
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
