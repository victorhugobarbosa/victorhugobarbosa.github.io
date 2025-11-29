"use client";

import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import Image from "next/image";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-24 md:pt-0 overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-neon-green/10 rounded-full blur-[120px] pointer-events-none" />

            {/* User Image - Artistic Background */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 w-[800px] h-[800px] z-0 opacity-50 pointer-events-none mix-blend-luminosity">
                <div className="relative w-full h-full">
                    <Image
                        src="/me.png"
                        alt="Victor Hugo"
                        fill
                        className="object-cover object-bottom mask-image-gradient"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
                </div>
            </div>

            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10 flex flex-col gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-neon-green font-mono text-sm tracking-wider mb-4">
                        ENGENHARIA DE SOFTWARE & AUTOMAÇÃO DE NEGÓCIOS
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
                        Victor Hugo <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-purple">
                            Barbosa dos Santos
                        </span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                        Não entrego apenas código, entrego <strong className="text-white">eficiência</strong>. Com base técnica sólida (COTUCA/UNIP) e experiência real na <a href="https://dynamicslabs.com.br/" target="_blank" rel="noopener noreferrer" className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 hover:text-purple-400 hover:underline decoration-purple-500 transition-colors">Dynamics Labs</a>, desenvolvo ecossistemas digitais completos.
                    </p>
                    <p className="text-lg text-gray-400 max-w-xl leading-relaxed mt-4">
                        Do design de interfaces de alta conversão à criação de <strong className="text-white">Agentes de IA</strong> que operam sua empresa no <strong className="text-white">piloto automático</strong>.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex gap-4"
                >
                    <a
                        href="#showroom"
                        className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors inline-block"
                    >
                        Ver Projetos
                    </a>
                    <a
                        href="https://wa.me/5519995828604"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-colors inline-block"
                    >
                        Falar no WhatsApp
                    </a>
                </motion.div>
            </div>

            {/* Right Content - Spline 3D */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="hidden md:block w-full md:w-1/2 h-[500px] relative flex items-center justify-center z-10"
                id="spline-container"
            >
                <Spline scene="https://prod.spline.design/1U9WlHdxjmIeL4uq/scene.splinecode" className="w-full h-full" />
            </motion.div>
        </section>
    );
}
