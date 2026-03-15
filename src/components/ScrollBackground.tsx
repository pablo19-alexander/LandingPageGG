import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollBackground = () => {
    const { scrollYProgress } = useScroll();

    // Parallax transforms at different speeds
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -600]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -900]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, -1200]);
    const y5 = useTransform(scrollYProgress, [0, 1], [0, -700]);

    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const rotate3 = useTransform(scrollYProgress, [0, 1], [45, 225]);

    const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.04, 0.08, 0.06, 0.02]);
    const opacity2 = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.02, 0.06, 0.08, 0.05, 0.03]);

    const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 0.8]);
    const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1]);

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

            {/* Large gold gradient orb - top right */}
            <motion.div
                style={{ y: y1, x: x1, scale: scale1, opacity: opacity1 }}
                className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(195,154,62,0.15)_0%,rgba(195,154,62,0.05)_40%,transparent_70%)] blur-3xl"
            />

            {/* Emerald gradient orb - left mid */}
            <motion.div
                style={{ y: y2, x: x2, scale: scale2, opacity: opacity2 }}
                className="absolute top-[40%] -left-48 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(80,200,120,0.12)_0%,rgba(4,99,7,0.05)_40%,transparent_70%)] blur-3xl"
            />

            {/* Gold orb - bottom right */}
            <motion.div
                style={{ y: y3, opacity: opacity1 }}
                className="absolute top-[70%] right-[10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(195,154,62,0.1)_0%,transparent_60%)] blur-2xl"
            />

            {/* Diamond shape 1 */}
            <motion.div
                style={{ y: y4, rotate: rotate1, opacity: opacity1 }}
                className="absolute top-[15%] right-[15%] w-24 h-24 border border-[var(--color-brand-gold)]/10"
            />

            {/* Diamond shape 2 */}
            <motion.div
                style={{ y: y2, rotate: rotate2, opacity: opacity2 }}
                className="absolute top-[55%] left-[8%] w-32 h-32 border border-[var(--color-brand-gold)]/8"
            />

            {/* Diamond shape 3 - smaller */}
            <motion.div
                style={{ y: y5, rotate: rotate3, opacity: opacity1 }}
                className="absolute top-[80%] right-[25%] w-16 h-16 border border-[var(--color-emerald-light)]/8"
            />

            {/* Faceted lines that move on scroll */}
            <motion.div
                style={{ y: y3, opacity: opacity2 }}
                className="absolute top-[30%] left-0 w-[40%] h-px bg-gradient-to-r from-transparent via-[var(--color-brand-gold)]/10 to-transparent rotate-[20deg] origin-left"
            />
            <motion.div
                style={{ y: y4, opacity: opacity1 }}
                className="absolute top-[50%] right-0 w-[35%] h-px bg-gradient-to-r from-transparent via-[var(--color-brand-gold)]/8 to-transparent -rotate-[15deg] origin-right"
            />
            <motion.div
                style={{ y: y1, opacity: opacity2 }}
                className="absolute top-[75%] left-[10%] w-[30%] h-px bg-gradient-to-r from-transparent via-[var(--color-emerald-light)]/6 to-transparent rotate-[30deg]"
            />
            <motion.div
                style={{ y: y5, opacity: opacity1 }}
                className="absolute top-[20%] left-[60%] w-[25%] h-px bg-gradient-to-r from-transparent via-[var(--color-brand-gold)]/6 to-transparent -rotate-[25deg]"
            />

            {/* Floating dots / sparkles */}
            {[
                { top: '12%', left: '20%', y: y2, size: 3, color: 'var(--color-brand-gold)' },
                { top: '25%', left: '75%', y: y4, size: 2, color: 'var(--color-brand-gold)' },
                { top: '38%', left: '90%', y: y1, size: 4, color: 'var(--color-brand-gold)' },
                { top: '52%', left: '5%',  y: y3, size: 2, color: 'var(--color-emerald-light)' },
                { top: '65%', left: '45%', y: y5, size: 3, color: 'var(--color-brand-gold)' },
                { top: '78%', left: '70%', y: y2, size: 2, color: 'var(--color-emerald-light)' },
                { top: '88%', left: '30%', y: y4, size: 3, color: 'var(--color-brand-gold)' },
                { top: '45%', left: '55%', y: y1, size: 2, color: 'var(--color-brand-gold)' },
                { top: '60%', left: '15%', y: y5, size: 4, color: 'var(--color-brand-gold)' },
                { top: '35%', left: '35%', y: y3, size: 2, color: 'var(--color-emerald-light)' },
            ].map((dot, i) => (
                <motion.div
                    key={i}
                    style={{
                        top: dot.top,
                        left: dot.left,
                        y: dot.y,
                        width: dot.size,
                        height: dot.size,
                        opacity: 0.15,
                    }}
                    className="absolute rounded-full"
                    animate={{
                        opacity: [0.08, 0.2, 0.08],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.3,
                    }}
                >
                    <div
                        className="w-full h-full rounded-full"
                        style={{
                            backgroundColor: dot.color,
                            boxShadow: `0 0 ${dot.size * 3}px ${dot.color}`,
                        }}
                    />
                </motion.div>
            ))}

            {/* Hexagon / gem outline - large decorative */}
            <motion.svg
                style={{ y: y3, rotate: rotate1, opacity: opacity2 }}
                className="absolute top-[45%] right-[5%] w-48 h-48"
                viewBox="0 0 100 100"
                fill="none"
            >
                <polygon
                    points="50,2 93,25 93,75 50,98 7,75 7,25"
                    stroke="currentColor"
                    strokeWidth="0.3"
                    className="text-[var(--color-brand-gold)]/10"
                />
            </motion.svg>

            {/* Second hexagon */}
            <motion.svg
                style={{ y: y5, rotate: rotate2, opacity: opacity1 }}
                className="absolute top-[10%] left-[5%] w-36 h-36"
                viewBox="0 0 100 100"
                fill="none"
            >
                <polygon
                    points="50,2 93,25 93,75 50,98 7,75 7,25"
                    stroke="currentColor"
                    strokeWidth="0.4"
                    className="text-[var(--color-emerald-light)]/8"
                />
            </motion.svg>

            {/* Third hexagon - bottom */}
            <motion.svg
                style={{ y: y1, rotate: rotate3, opacity: opacity2 }}
                className="absolute top-[85%] left-[40%] w-28 h-28"
                viewBox="0 0 100 100"
                fill="none"
            >
                <polygon
                    points="50,2 93,25 93,75 50,98 7,75 7,25"
                    stroke="currentColor"
                    strokeWidth="0.3"
                    className="text-[var(--color-brand-gold)]/8"
                />
            </motion.svg>
        </div>
    );
};

export default ScrollBackground;
