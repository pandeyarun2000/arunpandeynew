import Image from 'next/image';
import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

export default function LandingPage() {
	const titles = ['Founder', 'Builder', 'Storyteller', 'Advisor'];
	const [mounted, setMounted] = useState(false);
	const [titleIndex, setTitleIndex] = useState(0);

	useEffect(() => {
		setMounted(true);
		const interval = window.setInterval(() => setTitleIndex((prev) => (prev + 1) % titles.length), 3000);
		return () => clearInterval(interval);
	}, [titles.length]);

	return (
		<div className="relative flex min-h-[100dvh] w-full items-center overflow-hidden px-6 pb-16 pt-32 sm:px-12 lg:px-24">
			<div className="dawn pointer-events-none absolute -right-40 top-1/2 h-[720px] w-[720px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,185,74,0.55)_0%,rgba(245,185,74,0)_65%)]" />
			<div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
				<div>
					<p className="mb-6 text-lg text-amber-700 dark:text-amber-400">Arun Pandey</p>
					<h1 className="font-display text-4xl font-light leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
						We all carry more within us than the world has yet seen.
						<span className="mt-3 block text-slate-600 dark:text-slate-300">I build the spaces where it can emerge.</span>
					</h1>
					<div className="mt-8 text-2xl text-amber-700 dark:text-amber-400 sm:text-3xl">
						{mounted ? (
							<TextTransition springConfig={presets.default} className="flex items-center">
								<span>{titles[titleIndex % titles.length]}</span>
							</TextTransition>
						) : (
							<span>{titles[0]}</span>
						)}
					</div>
					<div className="mt-10 flex flex-wrap items-center gap-4">
						<Link to="leadership" smooth duration={600} offset={-120} className="cursor-pointer rounded-full bg-amber-400 px-8 py-3 font-medium text-slate-900 transition hover:bg-amber-300">
							See what I have built
						</Link>
						<Link to="contact" smooth duration={600} className="cursor-pointer rounded-full border border-slate-400/50 px-8 py-3 transition hover:border-amber-400 hover:text-amber-500">
							Let&apos;s talk
						</Link>
						<a href="https://www.linkedin.com/in/arunppandey/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="ml-2 text-4xl text-slate-500 transition hover:text-amber-500">
							<AiFillLinkedin />
						</a>
					</div>
				</div>
				<div className="relative mx-auto w-full max-w-sm">
					<div className="absolute inset-0 -m-4 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200/10 blur-2xl dawn" />
					<Image src="/profile_pic.png" alt="Arun Pandey" width={480} height={480} priority className="relative w-full rounded-full border border-amber-300/60 object-cover" />
				</div>
			</div>
		</div>
	);
}
