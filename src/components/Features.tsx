import { motion } from 'framer-motion';
import { MessageSquare, BadgeDollarSign, Store, ShieldCheck } from 'lucide-react';
import type { ReactNode } from 'react';

interface Feature {
    icon: ReactNode;
    title: string;
    description: string;
    accent: string;
}

const features: Feature[] = [
    {
        icon: <Store size={28} />,
        title: "Vitrina Exclusiva",
        description: "Espacios personalizados para que empresas sin presencia digital muestren sus esmeraldas en nuestro marketplace.",
        accent: "01"
    },
    {
        icon: <MessageSquare size={28} />,
        title: "Negociación Directa",
        description: "Chat integrado en la plataforma para negociar el precio de las esmeraldas en bruto directamente con el comprador o vendedor.",
        accent: "02"
    },
    {
        icon: <BadgeDollarSign size={28} />,
        title: "Pagos Seguros",
        description: "Una vez acordado el valor, el cobro se realiza mediante nuestra pasarela de pagos integrada, garantizando transparencia.",
        accent: "03"
    },
    {
        icon: <ShieldCheck size={28} />,
        title: "Garantía GoldenGems",
        description: "Supervisamos las transacciones y cobramos una pequeña comisión para respaldar la calidad del servicio.",
        accent: "04"
    }
];

const Features = () => {
    return (
        <section id="about" className="py-32 md:py-40 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(195,154,62,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-[11px] tracking-[0.4em] uppercase text-[var(--color-brand-gold)] font-medium mb-6"
                    >
                        El Modelo de Negocio
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="font-display text-4xl md:text-6xl font-light text-white mb-8 leading-[1.1]"
                    >
                        Modernizando la venta de{' '}
                        <br className="hidden md:block" />
                        <em className="text-[var(--color-brand-gold-light)] not-italic gold-shimmer">esmeraldas en bruto</em>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="w-12 h-px bg-[var(--color-brand-gold-dark)] mx-auto mb-8"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-zinc-500 text-base md:text-lg font-light leading-relaxed"
                    >
                        GoldenGems centraliza y potencia tu comercialización. No importa si no tienes
                        presencia digital, aquí construyes tu espacio y accedes a clientes de todo el mundo.
                    </motion.p>
                </div>

                {/* Feature cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 + index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative bg-[var(--color-bg-card)] border border-zinc-900 hover:border-[var(--color-brand-gold-dark)]/30 transition-all duration-500 p-8 overflow-hidden"
                        >
                            {/* Number accent */}
                            <span className="absolute top-6 right-6 font-display text-5xl font-light text-zinc-900 group-hover:text-[var(--color-brand-gold-dark)]/10 transition-colors duration-500 select-none">
                                {feature.accent}
                            </span>

                            {/* Top gold line on hover */}
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[var(--color-brand-gold-dark)] via-[var(--color-brand-gold)] to-[var(--color-brand-gold-dark)] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 flex items-center justify-center text-[var(--color-brand-gold)] mb-8 border border-[var(--color-brand-gold-dark)]/20 group-hover:border-[var(--color-brand-gold-dark)]/40 transition-colors">
                                    {feature.icon}
                                </div>

                                <h3 className="font-display text-xl text-white font-medium mb-4 tracking-wide">
                                    {feature.title}
                                </h3>

                                <p className="text-zinc-500 text-sm leading-relaxed font-light">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
