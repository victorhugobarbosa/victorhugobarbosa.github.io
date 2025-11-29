"use client";

import { motion } from "framer-motion";

const integrations = [
    "Evolution API",
    "Z-API",
    "n8n",
    "Zaia",
    "Chatvolt",
    "Kommo",
    "Bling",
    "Google Sheets",
    "Google Docs",
];

export function Integrations() {
    return (
        <section id="integrations" className="py-24 border-t border-white/5 bg-black">
            <div className="mb-12 text-center">
                <h2 className="text-neon-purple font-mono text-sm tracking-wider mb-4">
                    POWERED BY
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Integrações & APIs
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    Sua empresa usa 10 softwares diferentes e nenhum conversa entre si? Eu crio as pontes. Automatize fluxos entre CRM, Financeiro e Planilhas para eliminar o trabalho manual repetitivo.
                </p>
            </div>

            <div className="relative flex overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

                <motion.div
                    className="flex gap-16 whitespace-nowrap py-8"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {[...integrations, ...integrations, ...integrations].map((item, index) => (
                        <div
                            key={index}
                            className="text-2xl md:text-4xl font-bold text-gray-600 hover:text-white transition-colors cursor-default grayscale hover:grayscale-0"
                        >
                            {item}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
