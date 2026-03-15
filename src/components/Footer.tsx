import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contacto" className="bg-[var(--color-bg-dark)] relative pt-24 pb-10">
            {/* Top border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-brand-gold-dark)]/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand */}
                    <div>
                        <img
                            src="/goldengems-logo.png"
                            alt="GoldenGems"
                            className="h-16 md:h-20 w-auto object-contain mb-6"
                        />
                        <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-light">
                            El marketplace premium para joyería exclusiva y esmeraldas en bruto.
                            Centralizando la comercialización directa entre vendedores y compradores internacionales.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: <Instagram size={16} />, href: '#' },
                                { icon: <Facebook size={16} />, href: '#' },
                                { icon: <Twitter size={16} />, href: '#' },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="w-9 h-9 flex items-center justify-center border border-zinc-800 text-zinc-500 hover:text-[var(--color-brand-gold)] hover:border-[var(--color-brand-gold-dark)] transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Platform links */}
                    <div>
                        <h3 className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-brand-gold)] font-medium mb-8">
                            Plataforma
                        </h3>
                        <ul className="space-y-4">
                            {['Vitrina GoldenGems', 'Marketplace Externo', 'Vender en la plataforma', 'Precios de esmeraldas'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors duration-300 font-light">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-brand-gold)] font-medium mb-8">
                            Soporte
                        </h3>
                        <ul className="space-y-4">
                            {['Centro de Ayuda', 'Garantía y Devoluciones', 'Seguridad de Pagos', 'Términos y Condiciones'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors duration-300 font-light">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-brand-gold)] font-medium mb-8">
                            Contacto
                        </h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3 text-zinc-500 text-sm font-light">
                                <MapPin size={16} className="text-[var(--color-brand-gold-dark)] shrink-0 mt-0.5" />
                                <span>Bogotá, Colombia.<br />Zona Esmeraldera principal.</span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-500 text-sm font-light">
                                <Phone size={16} className="text-[var(--color-brand-gold-dark)] shrink-0" />
                                <span>+57 300 000 0000</span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-500 text-sm font-light">
                                <Mail size={16} className="text-[var(--color-brand-gold-dark)] shrink-0" />
                                <span>contacto@goldengems.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-700 text-[11px] tracking-wider font-light">
                        &copy; {new Date().getFullYear()} GoldenGems. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-zinc-700 hover:text-zinc-400 text-[11px] tracking-wider transition-colors font-light">
                            Políticas de Privacidad
                        </a>
                        <a href="#" className="text-zinc-700 hover:text-zinc-400 text-[11px] tracking-wider transition-colors font-light">
                            Términos de Servicio
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
