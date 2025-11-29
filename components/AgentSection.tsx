"use client";

import { motion } from "framer-motion";
import { MessageSquare, Check, CheckCheck } from "lucide-react";

export function AgentSection() {
    return (
        <section id="agent" className="py-24 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                {/* Left: Phone Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 flex justify-center"
                >
                    <div className="relative w-[300px] h-[600px] bg-black border-8 border-gray-800 rounded-[3rem] shadow-2xl overflow-hidden">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20" />

                        {/* Screen Content */}
                        <div className="w-full h-full bg-[#0b141a] flex flex-col">
                            {/* WhatsApp Header */}
                            <div className="bg-[#202c33] p-4 pt-8 flex items-center gap-3 border-b border-gray-700">
                                <div className="w-8 h-8 rounded-full bg-neon-green/20 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                                </div>
                                <div>
                                    <h4 className="text-gray-100 text-sm font-semibold">Agente Comercial</h4>
                                    <p className="text-neon-green text-xs">Online</p>
                                </div>
                            </div>

                            {/* Chat Area */}
                            <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
                                {/* Message 1 (Bot) */}
                                <div className="bg-[#202c33] p-3 rounded-lg rounded-tl-none max-w-[80%] self-start">
                                    <p className="text-gray-200 text-sm">Olá! Sou o assistente virtual. Como posso ajudar você a escalar seu negócio hoje?</p>
                                    <span className="text-[10px] text-gray-400 block text-right mt-1">10:00</span>
                                </div>

                                {/* Message 2 (User) */}
                                <div className="bg-[#005c4b] p-3 rounded-lg rounded-tr-none max-w-[80%] self-end">
                                    <p className="text-gray-200 text-sm">Quero automatizar meu atendimento no WhatsApp.</p>
                                    <div className="flex items-center justify-end gap-1 mt-1">
                                        <span className="text-[10px] text-gray-400">10:01</span>
                                        <CheckCheck size={12} className="text-blue-400" />
                                    </div>
                                </div>

                                {/* Message 3 (Bot) */}
                                <div className="bg-[#202c33] p-3 rounded-lg rounded-tl-none max-w-[80%] self-start">
                                    <p className="text-gray-200 text-sm">Perfeito! Com n8n e Evolution API, posso criar fluxos que respondem clientes, agendam reuniões e salvam leads no CRM automaticamente. 🚀</p>
                                    <span className="text-[10px] text-gray-400 block text-right mt-1">10:01</span>
                                </div>
                            </div>

                            {/* Input Area */}
                            <div className="bg-[#202c33] p-3 flex items-center gap-2">
                                <div className="flex-1 h-9 bg-[#2a3942] rounded-lg" />
                                <div className="w-9 h-9 bg-[#00a884] rounded-full flex items-center justify-center">
                                    <MessageSquare size={16} className="text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                >
                    <h2 className="text-neon-purple font-mono text-sm tracking-wider mb-4">
                        AI & AUTOMATION
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Seu Agente de IA <br />
                        <span className="text-neon-green">Trabalhando 24/7</span>
                    </h3>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Utilizo o poder do <strong className="text-white">n8n</strong> e da <strong className="text-white">Evolution API</strong> para criar assistentes inteligentes que vivem no WhatsApp. Além de chatbots, desenvolvo <strong className="text-white">MCP Servers</strong> (Model Context Protocol) que permitem à IA ler seus bancos de dados locais, acessar arquivos e controlar sistemas com segurança total. Transformo o Claude/OpenAI em funcionários que conhecem sua empresa.
                    </p>

                    <button className="flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]">
                        <MessageSquare size={20} />
                        Testar Agente ao Vivo
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
