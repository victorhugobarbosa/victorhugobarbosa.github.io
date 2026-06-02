"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function AutoFixPreview() {
    return (
        <div style={{ width: '100%', height: '100%', background: '#0a0a0a', display: 'flex', flexDirection: 'column', fontFamily: 'sans-serif', overflow: 'hidden' }}>
            <nav style={{ background: '#000', borderBottom: '1px solid rgba(249,115,22,0.2)', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
                <span style={{ color: '#f97316', fontWeight: 900, fontSize: '11px', letterSpacing: '3px' }}>⚙ AUTOFIX</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    {['SERVIÇOS', 'SOBRE', 'CONTATO'].map(i => <span key={i} style={{ color: '#6b7280', fontSize: '9px' }}>{i}</span>)}
                    <span style={{ background: '#f97316', color: '#000', padding: '5px 10px', borderRadius: '2px', fontSize: '9px', fontWeight: 800 }}>AGENDAR AGORA</span>
                </div>
            </nav>
            <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(60,50,40,0.8) 0%, #000 65%)' }} />
                <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', background: 'linear-gradient(to left, rgba(30,25,20,0.6), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '80%', height: '70%', background: 'linear-gradient(135deg, #2a2a2a, #111)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ width: '80%', height: '60%', background: 'linear-gradient(to bottom, #333, #111)', borderRadius: '50%', filter: 'blur(12px)', opacity: 0.6 }} />
                    </div>
                </div>
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px' }}>
                    <div style={{ color: '#9ca3af', fontSize: '10px', letterSpacing: '5px', marginBottom: '6px' }}>MANUTENÇÃO DE</div>
                    <div style={{ color: '#f97316', fontSize: '22px', fontWeight: 900, letterSpacing: '1px' }}>ALTA PERFORMANCE</div>
                    <div style={{ color: '#6b7280', fontSize: '9px', margin: '8px 0 14px' }}>Diagnóstico computadorizado, peças originais e garantia total.</div>
                    <div style={{ display: 'inline-block', background: '#f97316', color: '#000', padding: '8px 16px', borderRadius: '2px', fontSize: '9px', fontWeight: 800 }}>
                        SOLICITAR ORÇAMENTO VIA WHATSAPP →
                    </div>
                </div>
            </div>
        </div>
    );
}

function TechStorePreview() {
    return (
        <div style={{ width: '100%', height: '100%', background: '#060612', display: 'flex', flexDirection: 'column', fontFamily: 'sans-serif', overflow: 'hidden' }}>
            <nav style={{ background: '#0a0a1a', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                <span style={{ color: '#fff', fontWeight: 800, fontSize: '12px' }}>Tech<span style={{ color: '#a78bfa' }}>Store</span></span>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.07)', borderRadius: '20px', padding: '5px 12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: '#6b7280', fontSize: '9px' }}>🔍</span>
                    <span style={{ color: '#4b5563', fontSize: '9px' }}>Search for products...</span>
                </div>
                <div style={{ position: 'relative' }}>
                    <span style={{ fontSize: '14px' }}>🛒</span>
                    <span style={{ position: 'absolute', top: -4, right: -4, background: '#3b82f6', color: '#fff', borderRadius: '50%', width: '12px', height: '12px', fontSize: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>0</span>
                </div>
            </nav>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '16px 24px', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '3px 10px', marginBottom: '10px' }}>
                        <span style={{ color: '#d1d5db', fontSize: '9px' }}>New Release</span>
                    </div>
                    <div style={{ color: '#fff', fontSize: '16px', fontWeight: 700, lineHeight: 1.2 }}>Gaming Laptop</div>
                    <div style={{ color: '#a78bfa', fontSize: '18px', fontWeight: 900, lineHeight: 1.2, marginBottom: '8px' }}>Legion Pro X</div>
                    <div style={{ color: '#9ca3af', fontSize: '9px', marginBottom: '12px', lineHeight: 1.5 }}>Unleash ultimate power. RGB glory meets desktop-class performance.</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: '#fff', fontSize: '14px', fontWeight: 800 }}>R$ 8.999</span>
                        <span style={{ background: '#7c3aed', color: '#fff', padding: '6px 14px', borderRadius: '20px', fontSize: '9px', fontWeight: 700 }}>Buy Now</span>
                    </div>
                </div>
                <div style={{ width: '120px', height: '100px', flexShrink: 0, position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)', borderRadius: '12px' }} />
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '90px', height: '60px', background: 'linear-gradient(135deg, #374151, #111827)', borderRadius: '4px', border: '1px solid rgba(124,58,237,0.3)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                            <div style={{ flex: 1, background: 'linear-gradient(135deg, #1f2937, #111)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ width: '60px', height: '30px', background: 'linear-gradient(45deg, rgba(124,58,237,0.4), rgba(59,130,246,0.3))', borderRadius: '2px' }} />
                            </div>
                            <div style={{ height: '14px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
                                {[...Array(12)].map((_, i) => <div key={i} style={{ width: '5px', height: '5px', background: `rgba(124,58,237,${0.3 + (i % 3) * 0.2})`, borderRadius: '1px' }} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DashboardPreview() {
    const points = [60, 85, 70, 140, 110, 65, 90, 120, 80, 100];
    const maxVal = 160;
    const w = 200, h = 60;
    const pts = points.map((v, i) => `${(i / (points.length - 1)) * w},${h - (v / maxVal) * h}`).join(' ');
    const area = `0,${h} ${pts} ${w},${h}`;

    return (
        <div style={{ width: '100%', height: '100%', background: '#050a05', display: 'flex', fontFamily: 'sans-serif', overflow: 'hidden', color: '#fff' }}>
            <div style={{ width: '90px', background: '#080d08', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', padding: '12px 0', flexShrink: 0 }}>
                <div style={{ padding: '0 10px', marginBottom: '14px' }}>
                    <span style={{ color: '#4ade80', fontWeight: 800, fontSize: '11px' }}>Finance<span style={{ color: '#fff' }}>.ai</span></span>
                </div>
                {[['Visão Geral', true], ['Transações', false], ['Meus Cartões', false], ['Investimentos', false]].map(([label, active]) => (
                    <div key={label as string} style={{ padding: '7px 10px', background: active ? 'rgba(74,222,128,0.08)' : 'transparent', borderLeft: active ? '2px solid #4ade80' : '2px solid transparent', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: active ? '#4ade80' : '#374151' }} />
                        <span style={{ fontSize: '8px', color: active ? '#4ade80' : '#6b7280' }}>{label as string}</span>
                    </div>
                ))}
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '10px', gap: '8px', overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px' }}>
                    {[
                        { label: 'Saldo Total', val: 'R$ 48.250', delta: '+12.5%', up: true },
                        { label: 'Receitas', val: 'R$ 15.300', delta: '+8.2%', up: true },
                        { label: 'Despesas', val: 'R$ 4.280', delta: '-2.4%', up: false },
                    ].map(m => (
                        <div key={m.label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '6px', padding: '8px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                                <span style={{ color: '#6b7280', fontSize: '7px' }}>{m.label}</span>
                                <span style={{ color: m.up ? '#4ade80' : '#f87171', fontSize: '7px' }}>{m.delta}</span>
                            </div>
                            <div style={{ color: '#fff', fontSize: '10px', fontWeight: 700 }}>{m.val}</div>
                        </div>
                    ))}
                </div>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '6px', padding: '8px', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span style={{ color: '#9ca3af', fontSize: '8px' }}>Fluxo de Caixa</span>
                        <span style={{ color: '#4b5563', fontSize: '7px' }}>Últimos 6 meses ▾</span>
                    </div>
                    <svg width="100%" height="50" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#4ade80" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <polygon points={area} fill="url(#grad)" />
                        <polyline points={pts} fill="none" stroke="#4ade80" strokeWidth="1.5" />
                    </svg>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2px' }}>
                        {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out'].map(m => (
                            <span key={m} style={{ color: '#374151', fontSize: '6px' }}>{m}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function AdvocaciaPreview() {
    return (
        <div style={{ width: '100%', height: '100%', background: '#0f0e00', display: 'flex', flexDirection: 'column', fontFamily: 'Georgia, serif', overflow: 'hidden' }}>
            <nav style={{ background: 'rgba(15,14,0,0.95)', borderBottom: '1px solid rgba(161,132,0,0.2)', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
                <span style={{ color: '#f5f0d0', fontWeight: 700, fontSize: '12px' }}>VH <span style={{ color: '#b8960c' }}>Advocacia</span></span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    {['INÍCIO', 'ATUAÇÃO', 'SOBRE', 'CONTATO'].map(i => <span key={i} style={{ color: '#6b6040', fontSize: '8px', letterSpacing: '1px' }}>{i}</span>)}
                    <span style={{ border: '1px solid rgba(184,150,12,0.4)', color: '#b8960c', padding: '4px 10px', borderRadius: '2px', fontSize: '8px', letterSpacing: '1px' }}>AGENDAR CONSULTA</span>
                </div>
            </nav>
            <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1a1800 0%, #0a0d1a 60%, #0f0e00 100%)' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 20px', opacity: 0.06 }}>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ color: '#fff', fontSize: '32px', fontWeight: 900, lineHeight: 1.0 }}>INNOVATION</div>
                        <div style={{ color: '#fff', fontSize: '24px', fontWeight: 900, lineHeight: 1.0 }}>WORKS</div>
                    </div>
                </div>
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 28px' }}>
                    <div style={{ color: '#6b5a10', fontSize: '9px', letterSpacing: '4px', marginBottom: '8px' }}>ESCRITÓRIO DE ADVOCACIA</div>
                    <div style={{ color: '#f5f0d0', fontSize: '16px', fontWeight: 700, lineHeight: 1.3 }}>Excelência Jurídica e</div>
                    <div style={{ color: '#f5f0d0', fontSize: '16px', fontWeight: 700, lineHeight: 1.3, marginBottom: '8px' }}>
                        Defesa <em style={{ color: '#b8960c' }}>Intransigente</em> dos Seus Direitos.
                    </div>
                    <div style={{ color: '#6b6040', fontSize: '9px', marginBottom: '14px', lineHeight: 1.6 }}>Compromisso com a ética, transparência e resultados.</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <span style={{ background: '#b8960c', color: '#000', padding: '7px 14px', borderRadius: '2px', fontSize: '8px', fontWeight: 700, letterSpacing: '1px' }}>FALAR COM UM ADVOGADO</span>
                        <span style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#d1d5db', padding: '7px 14px', borderRadius: '2px', fontSize: '8px', letterSpacing: '1px' }}>CONHEÇA NOSSAS ÁREAS</span>
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
                                    className="block"
                                >
                                    {/* Browser Window Frame */}
                                    <div className={`relative overflow-hidden rounded-xl border border-white/10 bg-[#111] aspect-video transition-colors duration-300 ${project.accent}`}>
                                        {/* Browser Header */}
                                        <div className="absolute top-0 left-0 right-0 h-7 bg-[#1a1a1a] border-b border-white/5 flex items-center px-3 gap-2 z-10">
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

                                        {/* Preview — fills space below browser bar */}
                                        <div
                                            className="absolute left-0 right-0 bottom-0 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                                            style={{ top: '28px' }}
                                        >
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
