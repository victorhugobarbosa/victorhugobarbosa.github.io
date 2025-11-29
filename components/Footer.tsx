import { Github, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-white/10 bg-black">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-xl font-mono font-bold tracking-tighter text-white">
                        &lt; VictorHugo /&gt;
                    </span>
                    <p className="text-gray-500 text-sm">
                        Construindo o futuro com código e automação.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/victorhugobarbosa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/victor-hugo-barbosa-dos-santos-90272b270/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>
                    <a
                        href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=victorhugobarbosa10000@gmail.com&su=Gostaria+de+solicitar+um+orçamento"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 text-sm hover:text-neon-green transition-colors"
                    >
                        victorhugobarbosa10000@gmail.com
                    </a>
                </div>

                <div className="text-center md:text-right">
                    <p className="text-gray-500 text-sm">
                        Potencializado por <span className="text-neon-purple font-bold">Vibe Coding</span>
                    </p>
                    <p className="text-gray-600 text-xs mt-1">
                        © {new Date().getFullYear()} Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
