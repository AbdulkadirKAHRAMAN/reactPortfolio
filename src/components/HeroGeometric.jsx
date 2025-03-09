import { motion } from "framer-motion";
import React from "react";
import myImage from "../assets/profil.jpg";

function ElegantShape({
  className = "",
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{ duration: 2.4, delay, ease: [0.23, 0.86, 0.39, 0.96], opacity: { duration: 1.2 } }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r to-transparent ${gradient} backdrop-blur-[2px] border-2 border-white/[0.15] shadow-lg`}
        />
      </motion.div>
    </motion.div>
  );
}

export default function HeroGeometric({
  title1 = "Abdulkadir",
  title2 = "KAHRAMAN",
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 + i * 0.2, ease: [0.25, 0.4, 0.25, 1] },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape delay={0.3} width={600} height={140} rotate={12} className="left-[-10%] top-[15%]" />
        <ElegantShape delay={0.5} width={500} height={120} rotate={-15} className="right-[-5%] top-[70%]" />
        <ElegantShape delay={0.4} width={300} height={80} rotate={-8} className="left-[5%] bottom-[5%]" />
        <ElegantShape delay={0.6} width={200} height={60} rotate={20} className="right-[15%] top-[10%]" />
        <ElegantShape delay={0.7} width={150} height={40} rotate={-25} className="left-[20%] top-[5%]" />
      </div>
      <div className="relative z-10 container mx-auto text-center">
        <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate="visible" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8">
          <img className="rounded-full mx-auto text-center" src={myImage} alt="profil img" width={100} height={100} />
        </motion.div>
        <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight text-white">
            {title1}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
              {title2}
            </span>
          </h1>
        </motion.div>
        <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
          <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
          {/* Merhaba! Ben bir frontend geliştiriciyim. Kullanıcı odaklı, temiz ve sürdürülebilir kod yazmayı öncelik haline getirdim. Yenilikleri keşfetmeye ve sürekli öğrenmeye olan ilgimle, modern ve etkileyici arayüzler geliştirmek benim için bir tutku. Projelerimi keşfetmeniz ve birlikte yeni fikirler üretmemiz için buradayım. Hoş geldiniz! */}
          Hello!!! I am a frontend developer. I prioritise writing user-centric, clean and maintainable code. With an interest in discovering innovations and continuous learning, developing modern and expressive interfaces is my passion. I'm here for you to explore my projects and for us to generate new ideas together. Welcome!
          </p>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 pointer-events-none" />
    </div>
  );
}
