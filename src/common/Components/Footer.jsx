import React from "react";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-green-700 text-white py-12 px-6 md:px-20"
    >
      <div className="  grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">AgriHelp</h3>
          <p className="text-gray-200 leading-relaxed">
            Connecting farmers, buyers, and communities through technology.  
            Making agriculture smarter, easier, and more transparent.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-200 mb-3">support@agrihelp.com</p>
          <p className="text-gray-200 mb-6">+91 9497158172</p>

          <div className="flex space-x-6">
            <FacebookIcon className="text-white hover:text-gray-300 cursor-pointer" />
            <InstagramIcon className="text-white hover:text-gray-300 cursor-pointer" />
            <TwitterIcon className="text-white hover:text-gray-300 cursor-pointer" />
            <YouTubeIcon className="text-white hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-white/30 pt-5 text-center text-gray-200 text-sm">
        © {new Date().getFullYear()} AgriHelp. All rights reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;
