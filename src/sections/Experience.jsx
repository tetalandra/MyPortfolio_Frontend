import React from "react";
import Section from "../components/Section";
import { motion } from "framer-motion";

export default function Experience() {
  const items = [
    {
      role: "Frontend Developer & UI/UX Designer",
      org: "Freelance",
      time: "2020 — Present",
      desc: "Designing and building accessible, performant web apps with a focus on design systems and motion.",
    },
    {
      role: "Product Designer",
      org: "Studio",
      time: "2018 — 2020",
      desc: "Led UX from research to hi-fi prototypes; collaborated closely with engineering.",
    },
  ];

  return (
    <Section id="experience" title="Experience">
      <motion.div
        className="grid gap-4 md:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.2 }}
      >
        {items.map((i) => (
          <motion.article
            key={i.role}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.25)",
            }}
            className="rounded-2xl p-4 border border-white/10 shadow-soft 
            bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm 
            transition-transform duration-300"
          >
            <h3 className="m-0 text-lg font-semibold">{i.role}</h3>
            <p className="m-0 text-[#a6b3c2]">
              {i.org} • {i.time}
            </p>
            <p className="mt-2 text-[#a6b3c2]">{i.desc}</p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
