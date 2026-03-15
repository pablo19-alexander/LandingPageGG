import { motion } from 'framer-motion';
import { Gem, ArrowRight, UserPlus, Store } from 'lucide-react';

const CallToAction = () => {
    return (
        <section id="marketplace" className="relative py-32 md:py-40 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-fixed bg-center opacity-15 grayscale"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2671&auto=format&fit=crop")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-dark)] via-[var(--color-bg-dark)]/95 to-[var(--color-bg-dark)]/80 z-0" />

            {/* Top/bottom borders */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Left: Copy */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2.5 text-[var(--color-brand-gold)] mb-8"
                    >
                        <Gem size={16} />
                        <span className="text-[11px] tracking-[0.4em] uppercase font-medium">
                            Únete a la Comunidad
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl md:text-6xl font-light text-white mb-8 leading-[1.1]"
                    >
                        Personaliza tu{' '}
                        <br className="hidden md:block" />
                        <em className="not-italic gold-shimmer">experiencia</em>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 }}
                        className="w-12 h-px bg-[var(--color-brand-gold-dark)] mb-8 origin-left"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-500 text-base md:text-lg mb-6 max-w-lg font-light leading-relaxed"
                    >
                        Regístrate para elegir tu contenido prioritario. Como usuario registrado,
                        decides qué esmeraldas o joyas ver primero y habilitas la negociación por chat.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-zinc-600 text-sm font-light"
                    >
                        Los usuarios no registrados ven la vitrina de GoldenGems por defecto.
                    </motion.p>
                </div>

                {/* Right: Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="relative bg-[var(--color-bg-dark)]/80 backdrop-blur-2xl border border-zinc-800/80 p-8 md:p-12"
                >
                    {/* Top gold accent line */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[var(--color-brand-gold-dark)] via-[var(--color-brand-gold)] to-[var(--color-brand-gold-dark)]" />

                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[var(--color-brand-gold-dark)]/50" />
                    <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[var(--color-brand-gold-dark)]/50" />
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[var(--color-brand-gold-dark)]/50" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[var(--color-brand-gold-dark)]/50" />

                    <h3 className="font-display text-2xl md:text-3xl text-white mb-10 font-light">
                        Comienza Ahora
                    </h3>

                    <div className="space-y-4 mb-10">
                        <button className="w-full flex items-center justify-between group bg-[var(--color-bg-card)] hover:bg-[var(--color-bg-elevated)] border border-zinc-800/50 hover:border-[var(--color-brand-gold-dark)]/30 p-5 transition-all duration-400">
                            <div className="flex items-center gap-5 text-left">
                                <div className="w-12 h-12 flex items-center justify-center text-[var(--color-brand-gold)] border border-[var(--color-brand-gold-dark)]/20 group-hover:border-[var(--color-brand-gold-dark)]/50 transition-all duration-400">
                                    <UserPlus size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium text-sm tracking-wide mb-0.5">Cuenta de Comprador</h4>
                                    <p className="text-zinc-600 text-xs font-light">Negocia precios y personaliza tu feed</p>
                                </div>
                            </div>
                            <ArrowRight className="text-zinc-700 group-hover:text-[var(--color-brand-gold)] group-hover:translate-x-1 transition-all duration-300" size={18} />
                        </button>

                        <button className="w-full flex items-center justify-between group bg-[var(--color-bg-card)] hover:bg-[var(--color-bg-elevated)] border border-zinc-800/50 hover:border-[var(--color-brand-gold)]/40 p-5 transition-all duration-400 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-gold)]/[0.02] to-transparent pointer-events-none" />
                            <div className="flex items-center gap-5 text-left relative z-10">
                                <div className="w-12 h-12 flex items-center justify-center text-[var(--color-brand-gold)] bg-[var(--color-brand-gold)]/[0.06] group-hover:bg-[var(--color-brand-gold)]/[0.12] transition-all duration-400">
                                    <Store size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium text-sm tracking-wide mb-0.5">Cuenta de Vendedor</h4>
                                    <p className="text-zinc-600 text-xs font-light">Crea tu vitrina y publica tus esmeraldas</p>
                                </div>
                            </div>
                            <ArrowRight className="text-zinc-700 group-hover:text-[var(--color-brand-gold)] group-hover:translate-x-1 transition-all duration-300 relative z-10" size={18} />
                        </button>
                    </div>

                    <p className="text-zinc-600 text-[11px] text-center border-t border-zinc-800/50 pt-6 font-light tracking-wide">
                        Al registrarte aceptas nuestros{' '}
                        <a href="#" className="text-zinc-500 hover:text-[var(--color-brand-gold)] underline underline-offset-4 decoration-zinc-800 transition-colors">
                            Términos de Servicio
                        </a>{' '}
                        y{' '}
                        <a href="#" className="text-zinc-500 hover:text-[var(--color-brand-gold)] underline underline-offset-4 decoration-zinc-800 transition-colors">
                            Políticas de Privacidad
                        </a>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
