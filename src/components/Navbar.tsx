import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { label: 'Vitrina', href: '#showcase' },
    { label: 'Modelo', href: '#about' },
    { label: 'Marketplace', href: '#marketplace' },
    { label: 'Contacto', href: '#contacto' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-[#060606]/90 backdrop-blur-xl border-b border-[var(--color-brand-gold-dark)]/15 py-3'
                    : 'bg-transparent border-b border-transparent py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    <img
                        src="/goldengems-logo.png"
                        alt="GoldenGems"
                        className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </a>

                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="relative text-[13px] uppercase tracking-[0.2em] text-zinc-400 hover:text-[var(--color-brand-gold-light)] transition-colors duration-300 group font-light"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-brand-gold)] group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                    <button className="relative ml-4 px-7 py-2.5 text-[12px] uppercase tracking-[0.25em] font-medium text-[var(--color-brand-gold)] border border-[var(--color-brand-gold-dark)]/40 rounded-none hover:bg-[var(--color-brand-gold)] hover:text-black transition-all duration-400 overflow-hidden group">
                        <span className="relative z-10">Ingresar</span>
                        <div className="absolute inset-0 bg-[var(--color-brand-gold)] translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out" />
                    </button>
                </nav>

                <button
                    className="md:hidden text-zinc-300 hover:text-[var(--color-brand-gold)] transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden md:hidden bg-[#060606]/98 backdrop-blur-xl border-b border-[var(--color-brand-gold-dark)]/20"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    className="text-[13px] uppercase tracking-[0.2em] text-zinc-400 hover:text-[var(--color-brand-gold-light)] transition-colors font-light"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <button className="mt-2 px-6 py-3 text-[12px] uppercase tracking-[0.25em] font-medium bg-[var(--color-brand-gold)] text-black">
                                Ingresar
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
