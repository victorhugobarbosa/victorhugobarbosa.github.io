"use client";

import { motion } from "framer-motion";
import { ExternalLink, Search, ShoppingCart, TrendingUp, TrendingDown, Wrench } from "lucide-react";

function AutoFixPreview() {
    return (
        <div className="w-full h-full bg-black flex flex-col text-white overflow-hidden">
            {/* Nav */}
            <div className="flex items-center justify-between px-4 py-2 bg-black border-b border-white/10 shrink-0">
                <div className="flex items-center gap-1">
                    <Wrench size={10} className="text-orange-500" />
                    <span className="text-orange-500 font-bold text-[9px] tracking-widest">AUTOFIX</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-[7px] text-gray-400">SERVIÇOS</span>
                    <span className="text-[7px] text-gray-400">SOBRE</span>
                    <span className="text-[7px] text-gray-400">CONTATO</span>
                    <div className="bg-orange-500 px-2 py-0.5 rounded-sm">
                        <span className="text-[7px] font-bold">AGENDAR</span>
                    </div>
                </div>
            </div>
            {/* Hero */}
            <div className="flex-1 relative flex items-center justify-center overflow-hidden">
                {/* bg cars blur effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
                <div className="absolute inset-0 flex items-end justify-end opacity-20">
                    <div className="w-3/4 h-3/4 bg-gradient-to-tl from-gray-600 to-transparent rounded-full blur-2xl" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <p className="text-[8px] text-gray-400 mb-1 tracking-widest">MANUTENÇÃO DE</p>
                    <p className="text-[14px] font-black text-orange-500 leading-tight">ALTA PERFORMANCE</p>
                    <p className="text-[6px] text-gray-400 mt-1 mb-2">Diagnóstico computadorizado, peças originais e garantia total.</p>
                    <div className="inline-flex items-center gap-1 bg-orange-500 px-3 py-1 rounded-sm">
                        <span className="text-[7px] font-bold">SOLICITAR ORÇAMENTO VIA WHATSAPP →</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TechStorePreview() {
    return (
        <div className="w-full h-full bg-[#0a0a1a] flex flex-col text-white overflow-hidden">
            {/* Nav */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#0d0d20] border-b border-white/10 shrink-0">
                <span className="text-[10px] font-bold">Tech<span className="text-purple-400">Store</span></span>
                <div className="flex-1 mx-3 flex items-center gap-1 bg-white/10 rounded-full px-2 py-0.5">
                    <Search size={7} className="text-gray-400" />
                    <span className="text-[7px] text-gray-500">Search for products...</span>
                </div>
                <div className="relative">
                    <ShoppingCart size={13} className="text-white" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-[6px] font-bold">0</span>
                    </div>
                </div>
            </div>
            {/* Hero */}
            <div className="flex-1 flex items-center px-4 gap-3">
                <div className="flex-1">
                    <div className="inline-block bg-white/10 border border-white/20 rounded-full px-2 py-0.5 mb-2">
                        <span className="text-[7px] text-gray-300">New Release</span>
                    </div>
                    <p className="text-[11px] font-bold leading-tight text-white">Gaming Laptop</p>
                    <p className="text-[13px] font-black text-purple-400 leading-tight">Legion Pro X</p>
                    <p className="text-[6px] text-gray-400 mt-1 mb-2 leading-relaxed">Unleash ultimate power. RGB glory meets desktop-class performance.</p>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold">R$ 8.999</span>
                        <div className="bg-purple-500 px-2 py-0.5 rounded-full">
                            <span className="text-[7px] font-bold">Buy Now</span>
                        </div>
                    </div>
                </div>
                {/* Product image */}
                <div className="w-20 h-20 relative shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-900/30 rounded-lg border border-purple-500/20" />
                    <div className="absolute inset-2 flex items-center justify-center">
                        <div className="w-12 h-8 bg-gradient-to-b from-gray-600 to-gray-800 rounded-sm border border-gray-600 shadow-lg">
                            <div className="w-full h-5 bg-gradient-to-br from-gray-700 to-gray-900 rounded-t-sm" />
                            <div className="w-full h-3 bg-gray-800 rounded-b-sm flex items-center justify-center gap-0.5 px-0.5">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="flex-1 h-1 bg-purple-500/40 rounded-[1px]" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DashboardPreview() {
    const bars = [35, 55, 48, 90, 72, 42];
    return (
        <div className="w-full h-full bg-[#0a0f0a] flex text-white overflow-hidden text-[7px]">
            {/* Sidebar */}
            <div className="w-20 bg-[#0d120d] border-r border-white/5 flex flex-col py-2 shrink-0">
                <div className="px-2 mb-3">
                    <span className="text-green-400 font-bold text-[9px]">Finance<span className="text-white">.ai</span></span>
                </div>
                {["Visão Geral", "Transações", "Cartões", "Investimentos"].map((item, i) => (
                    <div key={item} className={`px-2 py-1.5 flex items-center gap-1 ${i === 0 ? "bg-green-500/10 border-l-2 border-green-400" : ""}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-green-400" : "bg-gray-600"}`} />
                        <span className={i === 0 ? "text-green-400" : "text-gray-500"}>{item}</span>
                    </div>
                ))}
            </div>
            {/* Main */}
            <div className="flex-1 flex flex-col p-2 gap-1.5 overflow-hidden">
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-1">
                    {[
                        { label: "Saldo Total", val: "R$ 48.250", delta: "+12.5%", up: true },
                        { label: "Receitas", val: "R$ 15.300", delta: "+8.2%", up: true },
                        { label: "Despesas", val: "R$ 4.280", delta: "-2.4%", up: false },
                    ].map(m => (
                        <div key={m.label} className="bg-white/5 border border-white/5 rounded p-1.5">
                            <div className="flex justify-between items-start mb-0.5">
                                <span className="text-gray-500 text-[6px]">{m.label}</span>
                                <span className={`text-[6px] ${m.up ? "text-green-400" : "text-red-400"}`}>{m.delta}</span>
                            </div>
                            <span className="text-[8px] font-bold">{m.val}</span>
                        </div>
                    ))}
                </div>
                {/* Chart */}
                <div className="flex-1 bg-white/5 border border-white/5 rounded p-2 overflow-hidden">
                    <div className="flex justify-between mb-1">
                        <span className="text-[6px] text-gray-400">Fluxo de Caixa</span>
                        <span className="text-[6px] text-gray-600">Últimos 6 meses</span>
                    </div>
                    <div className="flex items-end gap-1 h-10">
                        {bars.map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col gap-0.5 justify-end">
                                <div className="w-full bg-green-500/60 rounded-t-sm" style={{ height: `${h * 0.4}px` }} />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-0.5">
                        {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"].map(m => (
                            <span key={m} className="text-[5px] text-gray-600 flex-1 text-center">{m}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function AdvocaciaPreview() {
    return (
        <div className="w-full h-full bg-[#1a1800] flex flex-col text-white overflow-hidden">
            {/* Nav */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#1a1800]/80 border-b border-yellow-900/30 shrink-0">
                <span className="text-[10px] font-bold text-yellow-100">VH <span className="text-yellow-600">Advocacia</span></span>
                <div className="flex items-center gap-3">
                    {["INÍCIO", "ATUAÇÃO", "SOBRE", "CONTATO"].map(i => (
                        <span key={i} className="text-[6px] text-gray-400">{i}</span>
                    ))}
                    <div className="border border-yellow-700/50 px-2 py-0.5 rounded-sm">
                        <span className="text-[6px] text-yellow-600 font-bold">AGENDAR</span>
                    </div>
                </div>
            </div>
            {/* Hero */}
            <div className="flex-1 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2a2400] via-[#1a1800] to-[#0d1020]" />
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-2 right-4 text-[28px] font-black text-white/30 leading-none">INNOVATION</div>
                    <div className="absolute top-8 right-2 text-[20px] font-black text-white/20 leading-none">WORKS</div>
                </div>
                <div className="relative z-10 text-center px-4">
                    <p className="text-[7px] text-yellow-700/70 tracking-widest mb-1">ESCRITÓRIO DE ADVOCACIA</p>
                    <p className="text-[11px] font-black text-white leading-tight">Excelência Jurídica e</p>
                    <p className="text-[11px] font-black leading-tight">
                        Defesa <span className="text-yellow-500 italic">Intransigente</span> dos Seus Direitos.
                    </p>
                    <p className="text-[6px] text-gray-400 mt-1.5 mb-2 max-w-[180px] mx-auto leading-relaxed">
                        Compromisso com a ética, transparência e resultados.
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="bg-yellow-700 px-2 py-1 rounded-sm">
                            <span className="text-[7px] font-bold">FALAR COM ADVOGADO</span>
                        </div>
                        <div className="border border-white/30 px-2 py-1 rounded-sm">
                            <span className="text-[7px] font-bold text-gray-300">NOSSAS ÁREAS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const projects = [
    {
        title: "AutoFix - Oficina Premium",
        category: "Institutional / Booking",
        link: "https://victorhugobarbosa.github.io/AutoFix---Oficina-Premium/",
        preview: AutoFixPreview,
        accent: "hover:border-orange-500/50",
        badge: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    },
    {
        title: "E-commerce Tech",
        category: "Next.js / Shopify",
        link: "https://victorhugobarbosa.github.io/E-commerce-Tech/",
        preview: TechStorePreview,
        accent: "hover:border-purple-500/50",
        badge: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
        title: "Dashboard Financeiro",
        category: "SaaS / Fintech",
        link: "https://victorhugobarbosa.github.io/Dashboard-Financeiro/",
        preview: DashboardPreview,
        accent: "hover:border-green-500/50",
        badge: "text-green-400 bg-green-500/10 border-green-500/20",
    },
    {
        title: "Site Institucional Advogado",
        category: "Legal / Corporate",
        link: "https://victorhugobarbosa.github.io/Site-Institucional-Advogado/",
        preview: AdvocaciaPreview,
        accent: "hover:border-yellow-600/50",
        badge: "text-yellow-600 bg-yellow-700/10 border-yellow-700/20",
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
                    {projects.map((project, index) => {
                        const Preview = project.preview;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block h-full"
                                >
                                    {/* Browser Window Frame */}
                                    <div className={`relative overflow-hidden rounded-xl border border-white/10 bg-[#111] aspect-video transition-colors duration-300 h-full ${project.accent}`}>
                                        {/* Browser Header */}
                                        <div className="absolute top-0 left-0 right-0 h-7 bg-[#1a1a1a] border-b border-white/5 flex items-center px-3 gap-2 z-10 shrink-0">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                                            <div className="flex-1 mx-2 bg-white/5 rounded-sm h-3.5 flex items-center px-2">
                                                <span className="text-[7px] text-gray-600 truncate">{project.link}</span>
                                            </div>
                                            <div className={`px-2 py-0.5 rounded-full border text-[7px] font-bold ${project.badge}`}>
                                                {project.category}
                                            </div>
                                        </div>

                                        {/* Preview Content */}
                                        <div className="absolute inset-0 top-7 group-hover:scale-[1.02] transition-transform duration-500 ease-out overflow-hidden">
                                            <Preview />
                                        </div>

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-20">
                                            <div className="flex items-center gap-2 text-neon-green font-bold border border-neon-green/30 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                <span>Ver Projeto</span>
                                                <ExternalLink size={16} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Footer */}
                                    <div className="mt-3 flex items-center justify-between px-1">
                                        <h4 className="text-white font-semibold text-sm">{project.title}</h4>
                                        <ExternalLink size={14} className="text-gray-600 group-hover:text-neon-green transition-colors" />
                                    </div>
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
