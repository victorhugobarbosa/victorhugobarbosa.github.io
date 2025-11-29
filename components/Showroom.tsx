"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: "AutoFix - Oficina Premium",
        category: "Institutional / Booking",
        color: "from-gray-700 to-orange-500",
    },
    {
        title: "E-commerce Tech",
        category: "Next.js / Shopify",
        color: "from-blue-500 to-cyan-400",
    },
    {
        title: "Dashboard Financeiro",
        category: "SaaS / Fintech",
        color: "from-emerald-400 to-green-600",
    },
    {
        title: "Site Institucional Advogado",
        category: "Legal / Corporate",
        color: "from-slate-300 to-slate-500",
    },
];

export function Showroom() {
    return (
        <section id="showroom" className="py-24 px-6 md:px-12 bg-black/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-neon-green font-mono text-sm tracking-wider mb-4">
                        SELECTED WORK
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">
                        Showroom Web
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Browser Window Frame */}
                            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111] aspect-video hover:border-neon-green/50 transition-colors duration-300">
                                {/* Browser Header */}
                                <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 z-10">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>

                                {/* Content / Image Placeholder */}
                                <div className="w-full h-full pt-8 bg-[#0a0a0a] group-hover:scale-105 transition-transform duration-500 ease-out">
                                    <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`} />

                                    {/* Overlay Content */}
                                    <div className="absolute inset-0 pt-8 flex flex-col items-center justify-center p-6 text-center">
                                        <h4 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            {project.title}
                                        </h4>
                                        <p className="text-gray-400 text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                                            {project.category}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                    <div className="flex items-center gap-2 text-neon-green font-bold border border-neon-green/30 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span>Ver Projeto</span>
                                        <ExternalLink size={16} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
