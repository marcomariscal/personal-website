import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [hoveredNav, setHoveredNav] = useState<string | null>(null);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	const navLinks = [
		{ name: "Experience", href: "#experience" },
		{ name: "Projects", href: "#projects" },
		{ name: "Skills", href: "#skills" },
	];

	const menuVariants = {
		closed: {
			opacity: 0,
			height: 0,
			transition: { duration: 0.2, ease: "easeInOut" as const },
		},
		open: {
			opacity: 1,
			height: "auto",
			transition: { duration: 0.3, ease: "easeOut" as const },
		},
	};

	return (
		<>
			<header className="fixed top-0 left-0 right-0 z-50 h-[64px] border-b border-[var(--color-border)] bg-black/80 backdrop-blur-xl transition-all duration-300">
				<div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
					{/* Left: Logo / Name */}
					<div className="flex items-center gap-8">
						<Link
							to="/"
							className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors tracking-tight"
							onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						>
							<span className="font-semibold tracking-tight text-[15px]">Marco Mariscal</span>
						</Link>

						{/* Desktop Nav Links */}
						<nav className="hidden md:flex items-center gap-1">
							{navLinks.map((link) => (
								<motion.a
									key={link.name}
									href={link.href}
									className="relative px-3 py-2 text-[14px] font-medium transition-colors duration-200"
									onMouseEnter={() => setHoveredNav(link.name)}
									onMouseLeave={() => setHoveredNav(null)}
									whileTap={{ scale: 0.95 }}
								>
									{hoveredNav === link.name && (
										<motion.span
											layoutId="nav-hover"
											className="absolute inset-0 bg-[var(--color-surface-hover)] rounded-[var(--radius-8)] -z-10"
											transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
										/>
									)}
									<span
										className={
											hoveredNav === link.name
												? "text-[var(--color-primary)]"
												: "text-[var(--color-text-muted)]"
										}
									>
										{link.name}
									</span>
								</motion.a>
							))}
						</nav>
					</div>

					{/* Right: Actions */}
					<div className="flex items-center gap-4">
						{/* Social Icons */}
						<div className="hidden sm:flex items-center gap-4 pr-4 border-r border-[var(--color-border)]">
							<a
								href="https://github.com/marcomariscal"
								target="_blank"
								rel="noreferrer"
								className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
								aria-label="GitHub"
							>
								<Github className="w-[18px] h-[18px]" />
							</a>
							<a
								href="https://www.linkedin.com/in/marcomariscal"
								target="_blank"
								rel="noreferrer"
								className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
								aria-label="LinkedIn"
							>
								<Linkedin className="w-[18px] h-[18px]" />
							</a>
						</div>

						{/* CTA Button */}
						<a
							href="mailto:marco.a.mariscal@gmail.com"
							className="hidden sm:inline-flex items-center h-8 px-3 rounded-full bg-[var(--color-primary)] text-black text-[13px] font-bold hover:bg-[var(--color-primary-hover)] transition-colors shadow-[0_0_10px_rgba(16,185,129,0.3)]"
						>
							Contact
						</a>

						{/* Mobile Menu Button */}
						<button
							className="md:hidden text-[var(--color-text-muted)] hover:text-[var(--color-primary)] p-2"
							onClick={toggleMenu}
							aria-label="Toggle menu"
						>
							{isMenuOpen ? <X size={20} /> : <Menu size={20} />}
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Menu Overlay */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial="closed"
						animate="open"
						exit="closed"
						variants={menuVariants}
						className="fixed top-[64px] left-0 right-0 z-40 bg-black/95 backdrop-blur-xl border-b border-[var(--color-border)] overflow-hidden md:hidden"
					>
						<nav className="flex flex-col p-6 gap-4">
							{navLinks.map((link) => (
								<motion.a
									key={link.name}
									href={link.href}
									className="text-lg font-medium text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors"
									onClick={() => setIsMenuOpen(false)}
									whileTap={{ scale: 0.95 }}
								>
									{link.name}
								</motion.a>
							))}
							<div className="h-px bg-[var(--color-border)] my-2" />
							<div className="flex items-center gap-6">
								<a
									href="https://github.com/marcomariscal"
									target="_blank"
									rel="noreferrer"
									className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
								>
									<Github className="w-6 h-6" />
								</a>
								<a
									href="https://www.linkedin.com/in/marcomariscal"
									target="_blank"
									rel="noreferrer"
									className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
								>
									<Linkedin className="w-6 h-6" />
								</a>
								<a
									href="mailto:marco.a.mariscal@gmail.com"
									className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
								>
									<Mail className="w-6 h-6" />
								</a>
							</div>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
