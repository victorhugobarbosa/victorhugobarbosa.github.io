"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Image as ImageIcon, Users, Database } from "lucide-react";
import { useState } from "react";

export function MicroSaas() {
    const [metaTitle, setMetaTitle] = useState("Seu Título Aqui");

    return (
        <section id="saas" className="py-24 px-6 md:px-12 bg-black/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-neon-green font-mono text-sm tracking-wider mb-4">
                        SIDE PROJECTS
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">
                        Micro-SaaS Lab
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1: MetaTag.io */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative p-8 rounded-2xl bg-[#111] border border-white/10 hover:border-neon-green/30 transition-colors flex flex-col"
                    >
                        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs font-bold">
                            <Zap size={12} />
                            FastOG
                        </div>

                        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-neon-green/10 group-hover:text-neon-green transition-colors">
                            <ImageIcon size={24} />
                        </div>

                        <h4 className="text-2xl font-bold text-white mb-2">MetaTag.io</h4>
                        <p className="text-gray-400 mb-6">
                            API de geração de imagens Open Graph. Pare de gastar horas no Photoshop. Uma requisição GET gera capas de blog dinâmicas em milissegundos.
                        </p>

                        {/* Interactive Demo */}
                        <div className="bg-black/50 p-4 rounded-lg border border-white/5 mb-6">
                            <label className="text-xs text-gray-500 mb-2 block">Teste ao vivo:</label>
                            <input
                                type="text"
                                value={metaTitle}
                                onChange={(e) => setMetaTitle(e.target.value)}
                                className="w-full bg-[#222] border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-neon-green/50 outline-none mb-3"
                                placeholder="Digite um título..."
                            />
                            {/* Fake Preview */}
                            <div className="aspect-video bg-gradient-to-br from-gray-800 to-black rounded border border-white/10 flex items-center justify-center p-4 text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-grid-white/[0.05]" />
                                <h3 className="text-xl font-bold text-white relative z-10">{metaTitle || "Seu Título"}</h3>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                            {["Python", "FastAPI", "Playwright", "Redis"].map(tag => (
                                <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">{tag}</span>
                            ))}
                        </div>

                        <button className="flex items-center gap-2 text-white font-semibold group-hover:text-neon-green transition-colors">
                            Ver Documentação <ArrowRight size={16} />
                        </button>
                    </motion.div>

                    {/* Card 2: NicheCRM */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative p-8 rounded-2xl bg-[#111] border border-white/10 hover:border-neon-green/30 transition-colors flex flex-col"
                    >
                        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold">
                            <Database size={12} />
                            MVP
                        </div>

                        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-neon-green/10 group-hover:text-neon-green transition-colors">
                            <Users size={24} />
                        </div>

                        <h4 className="text-2xl font-bold text-white mb-2">NicheCRM</h4>
                        <p className="text-gray-400 mb-6">
                            CRM minimalista para autônomos. Cadastro de clientes, pipeline visual e follow-up automático sem a complexidade dos grandes softwares.
                        </p>

                        {/* Visual Representation */}
                        <div className="bg-black/50 p-4 rounded-lg border border-white/5 mb-6 flex-1 flex flex-col justify-center">
                            <div className="flex gap-2 mb-2">
                                <div className="h-2 w-1/3 bg-gray-700 rounded animate-pulse" />
                                <div className="h-2 w-1/4 bg-gray-800 rounded" />
                            </div>
                            <div className="space-y-2">
                                <div className="bg-[#222] p-2 rounded border-l-2 border-green-500 flex justify-between items-center">
                                    <span className="text-xs text-gray-300">Lead: João Silva</span>
                                    <span className="text-[10px] text-green-500">Novo</span>
                                </div>
                                <div className="bg-[#222] p-2 rounded border-l-2 border-yellow-500 flex justify-between items-center">
                                    <span className="text-xs text-gray-300">Lead: Maria Souza</span>
                                    <span className="text-[10px] text-yellow-500">Negociação</span>
                                </div>
                                <div className="bg-[#222] p-2 rounded border-l-2 border-blue-500 flex justify-between items-center opacity-50">
                                    <span className="text-xs text-gray-300">Lead: Tech Corp</span>
                                    <span className="text-[10px] text-blue-500">Fechado</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {["Next.js", "Supabase", "Automação"].map(tag => (
                                <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">{tag}</span>
                            ))}
                        </div>

                        <button className="flex items-center gap-2 text-white font-semibold group-hover:text-neon-green transition-colors">
                            Solicitar Acesso <ArrowRight size={16} />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
