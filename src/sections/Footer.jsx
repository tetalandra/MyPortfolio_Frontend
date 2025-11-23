import React from "react";
import { motion } from "framer-motion";
import Icon from "../components/Icon";
import Logo from "../assets/logo.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", icon: "linkedin", url: "#", color: "from-[#1e90ff] to-[#4db6ff]" },
    { name: "GitHub", icon: "github", url: "#", color: "from-[#2c3e50] to-[#34495e]" },
    { name: "Twitter", icon: "twitter", url: "#", color: "from-[#00c2ff] to-[#7c5cff]" },
    { name: "Dribbble", icon: "dribbble", url: "#", color: "from-[#1e90ff] to-[#4db6ff]" },
  ];

  return (
    <footer className="border-t border-white/10 pt-12 pb-8 relative overflow-hidden">
      
      {/* Soft radial glow effect */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(124,92,255,0.3),transparent)] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto max-w-[1200px] px-6 relative"
      >
        <div className="grid gap-8 md:grid-cols-3">

          {/* --------------------------------------------------------
                     BRAND SECTION
          -------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <motion.div
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src={Logo} alt="INEZA Logo" className="w-8 h-8" />
              <motion.h3
                className="text-xl font-bold bg-gradient-to-r from-[#00c2ff] to-[#7c5cff] bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-heading)" }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                INEZA TETA Landra
              </motion.h3>
            </motion.div>

            <p className="text-[#a6b3c2] text-sm leading-relaxed">
              Frontend Developer & UI/UX Designer crafting beautiful, functional digital experiences.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className={`w-10 h-10 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center shadow-lg`}
                  title={social.name}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Icon name={social.icon} className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* --------------------------------------------------------
                     NAVIGATION LINKS
          -------------------------------------------------------- */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, staggerChildren: 0.05 },
              },
            }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              {["Home", "About", "Projects", "Services", "Experience", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#a6b3c2] text-sm hover:text-[#00c2ff] transition-colors"
                  variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* --------------------------------------------------------
                     CONTACT / INFO SECTION
          -------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Get In Touch</h3>

            <div className="space-y-3">
              {[
                { icon: "email", text: "landrate2000@gmail.com", color: "from-[#00c2ff] to-[#7c5cff]" },
                { icon: "location", text: "Nyabihu, Rwanda", color: "from-[#1e90ff] to-[#4db6ff]" },
                { icon: "time", text: "Available for projects", color: "from-[#2c3e50] to-[#34495e]" },
              ].map((item) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}
                  >
                    <Icon name={item.icon} className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#a6b3c2] text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom */}
        <motion.div
          className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-[#a6b3c2] text-sm">© {year} INEZA TETA Landra. All rights reserved.</p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="text-[#a6b3c2] hover:text-[#00c2ff] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#a6b3c2] hover:text-[#00c2ff] transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
