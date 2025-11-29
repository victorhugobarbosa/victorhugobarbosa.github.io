"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Sobre", href: "#hero" },
    { name: "Projetos", href: "#showroom" },
    { name: "Agentes AI", href: "#agent" },
    { name: "SaaS", href: "#saas" },
    { name: "Stack", href: "#integrations" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 border-b border-white/5 bg-black/50 backdrop-blur-md"
        >
            <div className="flex items-center gap-2">
                <span className="text-xl font-mono font-bold tracking-tighter text-white">
                    &lt; VictorHugo /&gt;
                </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm font-medium text-gray-400 hover:text-neon-green transition-colors"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-4 border-r border-white/10 pr-4 mr-2">
                    <a href="https://github.com/victorhugobarbosa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/victor-hugo-barbosa-dos-santos-90272b270/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Linkedin size={20} />
                    </a>
                </div>
                <a
                    href="https://wa.me/5519995828604"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 text-sm font-semibold text-black bg-neon-green rounded-full hover:bg-neon-green/80 transition-all shadow-[0_0_15px_rgba(0,255,148,0.3)] hover:shadow-[0_0_25px_rgba(0,255,148,0.5)]"
                >
                    Contratar
                </a>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X /> : <Menu />}
            </button>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-lg font-medium text-gray-300 hover:text-neon-green"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/5519995828604"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 mt-2 text-center text-black bg-neon-green rounded-lg font-bold"
                    >
                        Contratar
                    </a>
                </motion.div>
            )}
        </motion.header>
    );
}
