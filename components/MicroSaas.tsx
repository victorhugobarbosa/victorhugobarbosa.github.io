"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mic, FileText, Upload, Shield, ExternalLink } from "lucide-react";

export function MicroSaas() {
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
                    {/* Card 1: NeuroScribe AI */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative p-8 rounded-2xl bg-[#111] border border-white/10 hover:border-purple-500/40 transition-colors flex flex-col"
                    >
                        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                            Live
                        </div>

                        <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors text-purple-400">
                            <Mic size={24} />
                        </div>

                        <h4 className="text-2xl font-bold text-white mb-2">NeuroScribe AI</h4>
                        <p className="text-gray-400 mb-6">
                            Converta áudio em texto com IA. Suporta MP3, WAV, M4A, OGG e ZIP com múltiplos arquivos. Transcrição rápida com download em TXT ou PDF.
                        </p>

                        {/* UI Preview */}
                        <div className="bg-gradient-to-br from-[#1a1040] to-[#0d0d1a] rounded-xl border border-purple-500/20 mb-6 overflow-hidden flex-1">
                            {/* App header */}
                            <div className="flex items-center justify-center gap-2 px-4 py-3 border-b border-purple-500/10">
                                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                                    <span className="text-purple-300 text-[10px]">🧠</span>
                                </div>
                                <span className="text-white text-xs font-bold">NeuroScribe <span className="text-purple-400">AI</span></span>
                            </div>
                            {/* Upload zone */}
                            <div className="m-3 border-2 border-dashed border-purple-500/30 rounded-lg p-4 flex flex-col items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                                    <Upload size={14} className="text-purple-400" />
                                </div>
                                <p className="text-xs text-gray-400">Toque para selecionar arquivos</p>
                                <p className="text-[10px] text-gray-600">MP3, WAV, M4A, OGG, MPEG, ZIP</p>
                            </div>
                            {/* Waveform */}
                            <div className="mx-3 mb-3 flex items-end gap-[3px] h-8 justify-center">
                                {[3, 6, 10, 7, 12, 5, 9, 14, 8, 11, 6, 4, 10, 7, 13, 5, 8, 11, 4, 9].map((h, i) => (
                                    <div
                                        key={i}
                                        className="w-1 rounded-full bg-purple-500/40"
                                        style={{ height: `${h * 2}px` }}
                                    />
                                ))}
                            </div>
                            {/* Download row */}
                            <div className="mx-3 mb-3 flex gap-2">
                                {[".TXT", ".PDF", ".ZIP"].map(f => (
                                    <div key={f} className="flex-1 py-1 rounded bg-white/5 border border-white/10 text-center text-[10px] text-gray-500">{f}</div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {["Vite", "React", "AI", "Whisper"].map(tag => (
                                <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">{tag}</span>
                            ))}
                        </div>

                        <a
                            href="https://neuro-scribe-ai.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white font-semibold group-hover:text-purple-400 transition-colors"
                        >
                            Acessar App <ExternalLink size={16} />
                        </a>
                    </motion.div>

                    {/* Card 2: Simplica.ai */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative p-8 rounded-2xl bg-[#111] border border-white/10 hover:border-blue-500/40 transition-colors flex flex-col"
                    >
                        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                            Live
                        </div>

                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors text-blue-400">
                            <Shield size={24} />
                        </div>

                        <h4 className="text-2xl font-bold text-white mb-2">Simplica.ai</h4>
                        <p className="text-gray-400 mb-6">
                            Análise inteligente de contratos com IA. Cole seu contrato ou envie um PDF e receba uma análise completa de riscos em segundos.
                        </p>

                        {/* UI Preview */}
                        <div className="bg-[#0d1117] rounded-xl border border-blue-500/20 mb-6 overflow-hidden flex-1">
                            {/* App header */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center">
                                        <Shield size={11} className="text-white" />
                                    </div>
                                    <span className="text-white text-xs font-bold">Simplica<span className="text-blue-400">.ai</span></span>
                                </div>
                                <span className="text-[10px] text-gray-500">Entenda o que está assinando</span>
                            </div>
                            {/* Contract area */}
                            <div className="p-3 flex gap-2">
                                <div className="flex-1">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-[10px] text-gray-400 flex items-center gap-1">
                                            <FileText size={10} /> Cole seu contrato
                                        </span>
                                        <span className="text-[10px] text-blue-400 bg-blue-500/10 px-2 rounded-full">Análises: 0/3</span>
                                    </div>
                                    <div className="bg-white/5 rounded border border-white/10 p-2 mb-2 h-16">
                                        <p className="text-[9px] text-gray-600 italic">Cole seu contrato aqui ou arraste seu PDF...</p>
                                    </div>
                                    <div className="bg-blue-500 rounded py-1.5 text-center">
                                        <span className="text-white text-[10px] font-bold">Analisar Riscos →</span>
                                    </div>
                                </div>
                                {/* Risk panel */}
                                <div className="w-20 flex flex-col gap-1">
                                    <div className="bg-red-500/10 border border-red-500/20 rounded p-1.5">
                                        <p className="text-[8px] text-red-400 font-bold mb-0.5">⚠ Alto Risco</p>
                                        <p className="text-[7px] text-gray-500">Cláusula 4.2</p>
                                    </div>
                                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded p-1.5">
                                        <p className="text-[8px] text-yellow-400 font-bold mb-0.5">⚡ Médio</p>
                                        <p className="text-[7px] text-gray-500">Cláusula 7.1</p>
                                    </div>
                                    <div className="bg-green-500/10 border border-green-500/20 rounded p-1.5">
                                        <p className="text-[8px] text-green-400 font-bold mb-0.5">✓ Ok</p>
                                        <p className="text-[7px] text-gray-500">Cláusula 1.0</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {["Next.js", "AI", "Legal", "PDF"].map(tag => (
                                <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">{tag}</span>
                            ))}
                        </div>

                        <a
                            href="https://tradutor-juridico-ai.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white font-semibold group-hover:text-blue-400 transition-colors"
                        >
                            Acessar App <ExternalLink size={16} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
