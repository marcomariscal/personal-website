import { createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";
import { motion } from "framer-motion";
import {
	ArrowUpRight,
	Briefcase,
	Code2,
	Database,
	Github,
	GraduationCap,
	Layers,
	Linkedin,
	Mail,
	Terminal,
} from "lucide-react";
import { useRef, useState } from "react";

export const Route = createFileRoute("/")({
	component: Portfolio,
});

// --- Data ---

const _SOCIALS = [
	{
		name: "GitHub",
		icon: <Github className="w-5 h-5" />,
		href: "https://github.com/marcomariscal",
	},
	{
		name: "LinkedIn",
		icon: <Linkedin className="w-5 h-5" />,
		href: "https://www.linkedin.com/in/marcomariscal",
	},
	{
		name: "Email",
		icon: <Mail className="w-5 h-5" />,
		href: "mailto:marco.a.mariscal@gmail.com",
	},
];

const EXPERIENCE = [
	{
		id: "scopelift",
		role: "Software Engineer",
		company: "ScopeLift",
		period: "Jan 2024 - Present",
		description:
			"Designing and building complex DeFi systems, protocol interfaces, and on-chain governance tooling for leading protocols including Wormhole, Uniswap, Seamless, and zkSync.",
		tech: ["TypeScript", "React", "Wagmi", "Viem"],
	},
	{
		id: "cozy",
		role: "Software Engineer",
		company: "Cozy Finance",
		period: "Nov 2023 - Nov 2023",
		description:
			"Successfully delivered a key feature for Cozy Finance within a one-month contract, demonstrating rapid adaptability and efficient, high-quality coding practices.",
		tech: ["React.js", "TypeScript"],
	},
	{
		id: "yield",
		role: "Frontend Engineer",
		company: "Yield Protocol",
		period: "Jul 2021 - Oct 2023",
		description:
			"Built and architected decentralized finance applications using React, Next.js, TypeScript, React Query, ethers.js, and TailwindCSS.",
		tech: ["web3.js", "React.js", "Next.js", "TypeScript"],
	},
	{
		id: "springboard",
		role: "Software Engineering Fellow",
		company: "Springboard",
		period: "2020 - 2021",
		description:
			"Intensive software engineering bootcamp covering full-stack development, algorithms, and data structures. Completed capstone projects in Python and JavaScript.",
		tech: ["Python", "JavaScript", "Full Stack"],
	},
];

const PROJECTS = [
	{
		id: "seamless",
		title: "Seamless Protocol",
		description:
			'Decentralized lending and borrowing protocol. "Complex DeFi wrapped into simple tokens."',
		tags: ["TypeScript", "DeFi", "Web3"],
		href: "https://github.com/seamless-protocol/app",
	},
	{
		id: "seatbelt",
		title: "Governance Seatbelt",
		description:
			"Tooling to make governance safer. Forked and enhanced for the Uniswap Foundation.",
		tags: ["TypeScript", "Governance"],
		href: "https://github.com/uniswapfoundation/governance-seatbelt",
	},
	{
		id: "stealth",
		title: "Stealth Address SDK",
		description:
			"TypeScript SDK for ERC-5564 Stealth Addresses and ERC-6538 Registry. Enabling privacy on EVM chains.",
		tags: ["TypeScript", "Privacy", "SDK"],
		href: "https://github.com/ScopeLift/stealth-address-sdk",
	},
	{
		id: "multigov",
		title: "Multigov",
		description: "Cross-chain governance infrastructure built for the Wormhole Foundation.",
		tags: ["TypeScript", "Wormhole", "Cross-chain"],
		href: "https://github.com/wormhole-foundation/multigov",
	},
];

const EDUCATION = [
	{
		id: "dartmouth",
		school: "Dartmouth College",
		degree: "Bachelor of Arts",
		period: "Sep 2008 - May 2012",
		details: [
			"Economics, Minor in Neuroscience",
			"4 year Varsity Baseball, Pitcher",
			"Sigma Alpha Epsilon Fraternity",
		],
	},
];

const SKILLS = {
	Languages: ["TypeScript", "Solidity", "Python", "JavaScript", "SQL"],
	Frontend: ["React", "Next.js", "TanStack Query", "Tailwind CSS", "Framer Motion"],
	Web3: ["Wagmi", "Viem", "Ethers.js", "Foundry", "GraphQL"],
	"Backend & Tools": ["Node.js", "PostgreSQL", "Git", "Docker", "AWS"],
};

// --- Components ---

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

function Badge({ children }: { children: React.ReactNode }) {
	return (
		<span className="inline-flex items-center px-2 py-1 rounded-[var(--radius-8)] text-[11px] font-medium bg-white/5 text-text-muted border border-white/5">
			{children}
		</span>
	);
}

function Card({
	children,
	href,
	className,
	variants = itemVariants,
}: {
	children: React.ReactNode;
	href?: string;
	className?: string;
	variants?: any;
}) {
	const divRef = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [opacity, setOpacity] = useState(0);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!divRef.current) return;
		const rect = divRef.current.getBoundingClientRect();
		setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
	};

	const handleFocus = () => {
		setOpacity(1);
	};

	const handleBlur = () => {
		setOpacity(0);
	};

	const Component = href ? motion.a : motion.div;

	return (
		<Component
			ref={divRef}
			href={href}
			target={href ? "_blank" : undefined}
			rel={href ? "noopener noreferrer" : undefined}
			onMouseMove={handleMouseMove}
			onMouseEnter={handleFocus}
			onMouseLeave={handleBlur}
			className={clsx(
				"group relative block p-6 rounded-[var(--radius-12)] bg-surface border border-[var(--color-border)] transition-colors overflow-hidden",
				className,
			)}
			variants={variants}
		>
			{/* Spotlight Overlay */}
			<div
				className="pointer-events-none absolute -inset-px transition duration-300"
				style={{
					opacity,
					background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 255, 0, 0.15), transparent 40%)`,
				}}
			/>

			{/* Subtle Border Glow via Spotlight */}
			<div
				className="pointer-events-none absolute -inset-px transition duration-300"
				style={{
					opacity,
					background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(0, 255, 0, 0.2), transparent 40%)`,
					maskImage: "linear-gradient(black, black), linear-gradient(black, black)",
					maskClip: "content-box, border-box",
					maskComposite: "exclude",
					WebkitMaskComposite: "xor",
					padding: "1px",
				}}
			/>

			{children}
			{href && (
				<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					<ArrowUpRight className="w-4 h-4 text-text-muted" />
				</div>
			)}
		</Component>
	);
}

import Header from "../components/Header";

function Portfolio() {
	return (
		<div className="min-h-screen w-full">
			<Header />

			<main className="max-w-3xl mx-auto px-6 py-32 md:py-40">
				{/* Hero Section */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-32 space-y-6"
				>
					<h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-main">
						Software Engineer
					</h1>

					<div className="space-y-4">
						<h2 className="text-2xl md:text-3xl font-medium text-text-main">Marco Mariscal</h2>
						<p className="w-full text-lg text-text-muted leading-relaxed">
							Senior software engineer specializing in complex DeFi systems, protocol interfaces,
							and on-chain integrations across the EVM ecosystem. I’ve shipped production governance
							tooling and protocol infrastructure for leading projects including Wormhole’s
							Multigov, Uniswap Foundation’s Seatbelt (via Tally), Seamless Protocol’s interface,
							and zkSync governance admin.
						</p>
					</div>
				</motion.div>

				{/* Experience Section */}
				<section id="experience" className="mb-32">
					<motion.h2
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-3xl font-semibold text-text-main mb-12 flex items-center gap-3"
					>
						<Briefcase className="w-6 h-6 text-[var(--color-primary)]" />
						Experience
					</motion.h2>

					<motion.div
						className="grid grid-cols-1 gap-6"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
					>
						{EXPERIENCE.map((job) => (
							<Card key={job.id} className="p-8 relative overflow-hidden">
								{/* Grid Background Pattern */}
								<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

								<div className="relative z-10 flex flex-col md:flex-row md:gap-8 md:items-start">
									<div className="flex-1">
										<div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
											<h3 className="text-xl font-semibold text-text-main flex items-center gap-2">
												{job.role}
											</h3>
											<span className="text-sm font-mono text-text-subtle mt-1 md:mt-0 bg-white/5 px-2 py-1 rounded">
												{job.period}
											</span>
										</div>

										<div className="text-base font-medium text-[var(--color-primary)] mb-4">
											{job.company}
										</div>
										<p className="text-[15px] text-text-muted leading-relaxed mb-6 max-w-3xl">
											{job.description}
										</p>
										<div className="flex flex-wrap gap-2">
											{job.tech.map((t) => (
												<Badge key={t}>{t}</Badge>
											))}
										</div>
									</div>
								</div>
							</Card>
						))}
					</motion.div>
				</section>

				{/* Projects Section */}
				<section id="projects" className="mb-32">
					<motion.h2
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-3xl font-semibold text-text-main mb-12 flex items-center gap-3"
					>
						<Code2 className="w-6 h-6 text-[var(--color-primary)]" />
						Projects
					</motion.h2>

					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 gap-6"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
					>
						{PROJECTS.map((project) => (
							<Card
								key={project.id}
								href={project.href}
								className="h-full flex flex-col p-8 relative overflow-hidden"
							>
								{/* Grid Background Pattern */}
								<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

								<div className="relative z-10 flex flex-col h-full">
									<h3 className="text-xl font-semibold text-text-main mb-3 group-hover:text-primary transition-colors">
										{project.title}
									</h3>
									<p className="text-[15px] text-text-muted leading-relaxed mb-6 flex-1">
										{project.description}
									</p>
									<div className="mt-auto flex flex-wrap gap-2">
										{project.tags.map((tag) => (
											<Badge key={tag}>{tag}</Badge>
										))}
									</div>
								</div>
							</Card>
						))}
					</motion.div>
				</section>

				{/* Education Section */}
				<section id="education" className="mb-32">
					<motion.h2
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-3xl font-semibold text-text-main mb-12 flex items-center gap-3"
					>
						<GraduationCap className="w-6 h-6 text-[var(--color-primary)]" />
						Education
					</motion.h2>

					<motion.div
						className="grid grid-cols-1 gap-6"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
					>
						{EDUCATION.map((edu) => (
							<Card key={edu.id} className="p-8 relative overflow-hidden">
								{/* Grid Background Pattern */}
								<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

								<div className="relative z-10 flex flex-col md:flex-row md:gap-8 md:items-start">
									<div className="flex-1">
										<div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
											<h3 className="text-xl font-semibold text-text-main flex items-center gap-2">
												{edu.school}
											</h3>
											<span className="text-sm font-mono text-text-subtle mt-1 md:mt-0 bg-white/5 px-2 py-1 rounded">
												{edu.period}
											</span>
										</div>
										<div className="text-base font-medium text-[var(--color-primary)] mb-4">
											{edu.degree}
										</div>
										<ul className="text-[15px] text-text-muted leading-relaxed space-y-1 list-disc list-inside marker:text-text-subtle">
											{edu.details.map((detail, index) => (
												<li key={index}>{detail}</li>
											))}
										</ul>
									</div>
								</div>
							</Card>
						))}
					</motion.div>
				</section>

				{/* Skills Section */}
				<section id="skills" className="mb-32">
					<motion.h2
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-3xl font-semibold text-text-main mb-12 flex items-center gap-3"
					>
						<Terminal className="w-6 h-6 text-[var(--color-primary)]" />
						Technical Skills
					</motion.h2>

					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 gap-6"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
					>
						{Object.entries(SKILLS).map(([category, skills]) => (
							<Card key={category} className="flex flex-col gap-6 p-8 relative overflow-hidden">
								{/* Grid Background Pattern */}
								<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

								<div className="relative z-10">
									<h3 className="text-xl font-semibold text-text-main mb-6 flex items-center gap-3">
										{category === "Languages" && <Code2 className="w-5 h-5 text-text-muted" />}
										{category === "Frontend" && <Layers className="w-5 h-5 text-text-muted" />}
										{category === "Web3" && <Database className="w-5 h-5 text-text-muted" />}
										{category === "Backend & Tools" && (
											<Terminal className="w-5 h-5 text-text-muted" />
										)}
										{category}
									</h3>
									<div className="flex flex-wrap gap-2">
										{skills.map((skill) => (
											<Badge key={skill}>{skill}</Badge>
										))}
									</div>
								</div>
							</Card>
						))}
					</motion.div>
				</section>

				<footer className="mt-32 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-text-subtle">
					<p>© {new Date().getFullYear()} Marco Mariscal</p>
				</footer>
			</main>
		</div>
	);
}
