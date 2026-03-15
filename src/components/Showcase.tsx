import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Eye } from 'lucide-react';

const products = [
    { id: 1, name: "Anillo Esmeralda Gota", price: "$1,200", seller: "GoldenGems", image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800&auto=format&fit=crop", tag: null },
    { id: 2, name: "Esmeralda en Bruto 5ct", price: "Negociable", seller: "Esmeraldas Colombia", image: "https://images.unsplash.com/photo-1551122089-4e3e72477432?q=80&w=800&auto=format&fit=crop", tag: "Negociable" },
    { id: 3, name: "Collar Oro y Esmeralda", price: "$3,400", seller: "GoldenGems", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop", tag: null },
    { id: 4, name: "Topitos Clásicos", price: "$450", seller: "Joyería Fina", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", tag: "Nuevo" }
];

const tabs = ['Todos', 'GoldenGems Oficial', 'Esmeraldas en Bruto', 'Joyería de Terceros'];

const Showcase = () => {
    const [activeTab, setActiveTab] = useState('Todos');

    return (
        <section id="showcase" className="py-32 md:py-40 bg-[var(--color-bg-card)] relative">
            {/* Top border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header row */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block text-[11px] tracking-[0.4em] uppercase text-[var(--color-brand-gold)] font-medium mb-6"
                        >
                            Colección
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-display text-4xl md:text-6xl font-light text-white mb-5 leading-[1.1]"
                        >
                            Vitrina{' '}
                            <em className="not-italic text-[var(--color-emerald-light)]">Digital</em>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-zinc-500 max-w-lg font-light"
                        >
                            Explora el catálogo oficial de GoldenGems y descubre joyas exclusivas
                            de terceros registradas en nuestro marketplace.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-3"
                    >
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={16} />
                            <input
                                type="text"
                                placeholder="Buscar joyas, esmeraldas..."
                                className="bg-[var(--color-bg-dark)] border border-zinc-800 py-3 pl-11 pr-5 text-sm text-white focus:outline-none focus:border-[var(--color-brand-gold-dark)] transition-colors w-full md:w-72 placeholder:text-zinc-600 font-light"
                            />
                        </div>
                        <button className="p-3 bg-[var(--color-bg-dark)] border border-zinc-800 text-zinc-500 hover:text-[var(--color-brand-gold)] hover:border-[var(--color-brand-gold-dark)] transition-all duration-300">
                            <Filter size={16} />
                        </button>
                    </motion.div>
                </div>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-1 mb-14 overflow-x-auto pb-4 border-b border-zinc-800/50"
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative px-6 py-2.5 text-[12px] tracking-[0.15em] uppercase whitespace-nowrap transition-all duration-300 font-light ${
                                activeTab === tab
                                    ? 'text-[var(--color-brand-gold)]'
                                    : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 w-full h-px bg-[var(--color-brand-gold)]"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* Product grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden mb-5 bg-zinc-900">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out opacity-75 group-hover:opacity-100"
                                />

                                {/* Tag */}
                                {product.tag && (
                                    <div className={`absolute top-4 left-4 text-[10px] font-medium px-3 py-1.5 uppercase tracking-[0.2em] backdrop-blur-md ${
                                        product.tag === 'Negociable'
                                            ? 'bg-[var(--color-emerald-brand)]/80 text-white'
                                            : 'bg-[var(--color-brand-gold)]/90 text-black'
                                    }`}>
                                        {product.tag}
                                    </div>
                                )}

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                                    <button className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-black transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                        <Eye size={14} />
                                        Ver Detalles
                                    </button>
                                </div>

                                {/* Corner accent */}
                                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[var(--color-brand-gold-dark)]/0 group-hover:border-[var(--color-brand-gold-dark)]/40 transition-colors duration-500" />
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[var(--color-brand-gold-dark)]/0 group-hover:border-[var(--color-brand-gold-dark)]/40 transition-colors duration-500" />
                            </div>

                            <div>
                                <p className="text-[10px] text-[var(--color-brand-gold)] mb-1.5 uppercase tracking-[0.25em] font-medium">
                                    {product.seller}
                                </p>
                                <h3 className="font-display text-lg text-white font-normal mb-1.5 group-hover:text-[var(--color-brand-gold-light)] transition-colors duration-300">
                                    {product.name}
                                </h3>
                                <p className="text-zinc-500 text-sm font-light">{product.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Showcase;
