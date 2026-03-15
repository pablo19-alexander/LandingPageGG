import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background layers */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-110"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1599643478524-fb66f70a0004?q=80&w=2671&auto=format&fit=crop")' }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-[var(--color-bg-dark)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(195,154,62,0.08)_0%,transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(4,99,7,0.06)_0%,transparent_50%)]" />
            </div>

            {/* Decorative gem-facet lines */}
            <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.06 }}
                    transition={{ duration: 2, delay: 1.2 }}
                    className="absolute top-[20%] -left-[10%] w-[60%] h-px bg-gradient-to-r from-transparent via-[var(--color-brand-gold)] to-transparent rotate-[25deg]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.04 }}
                    transition={{ duration: 2, delay: 1.5 }}
                    className="absolute top-[40%] -right-[10%] w-[50%] h-px bg-gradient-to-r from-transparent via-[var(--color-brand-gold)] to-transparent -rotate-[15deg]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.05 }}
                    transition={{ duration: 2, delay: 1.8 }}
                    className="absolute bottom-[30%] -left-[5%] w-[40%] h-px bg-gradient-to-r from-transparent via-[var(--color-emerald-light)] to-transparent rotate-[35deg]"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col items-center text-center pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2.5 px-5 py-2 border border-[var(--color-brand-gold-dark)]/30 bg-[var(--color-bg-card)]/40 backdrop-blur-md mb-12"
                >
                    <Sparkles className="text-[var(--color-brand-gold)]" size={14} />
                    <span className="text-zinc-400 text-[11px] tracking-[0.3em] uppercase font-light">
                        El Primer Marketplace de Esmeraldas
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-white leading-[0.9] tracking-tight mb-8"
                >
                    <span className="block">Valores Reales</span>
                    <span className="block mt-2 italic gold-shimmer font-light">
                        en tus manos
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--color-brand-gold)] to-transparent mb-8"
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-xl text-base md:text-lg text-zinc-500 mb-14 font-light leading-relaxed"
                >
                    Conectamos compradores y vendedores de esmeraldas y joyería fina de forma directa.
                    Negocia el precio, asegura tu transacción y descubre piezas exclusivas.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <button className="group relative px-10 py-4 bg-[var(--color-brand-gold)] text-black text-[12px] uppercase tracking-[0.25em] font-semibold overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(195,154,62,0.35)]">
                        <span className="relative z-10 flex items-center gap-3">
                            Explorar Catálogo
                            <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-[var(--color-brand-gold-light)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                    </button>

                    <button className="group px-10 py-4 border border-zinc-800 text-zinc-300 text-[12px] uppercase tracking-[0.25em] font-medium hover:border-[var(--color-brand-gold-dark)] hover:text-white transition-all duration-400">
                        Vende tus Esmeraldas
                    </button>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[var(--color-bg-dark)] to-transparent z-10 pointer-events-none" />

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
            >
                <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-600 font-light">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-px h-8 bg-gradient-to-b from-[var(--color-brand-gold-dark)] to-transparent"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
