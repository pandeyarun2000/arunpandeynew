'use client';
import { ThemeProvider } from 'next-themes';
import AnimatedCursor from 'react-animated-cursor';
import { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import LandingPage from '@/components/LandingPage';
import AboutMe from '@/components/AboutMe';
import Beliefs from '@/components/Beliefs';
import ToolBox from '@/components/ToolBox';
import ContactMe from '@/components/ContactMe';

export default function Home() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<ThemeProvider attribute="class" defaultTheme="dark">
			{mounted && (
				<AnimatedCursor
					innerSize={8}
					outerSize={35}
					innerScale={0}
					outerScale={1.5}
					outerAlpha={0}
					innerStyle={{
						backgroundColor: `var(--cursor-color)`,
					}}
					outerStyle={{
						border: `3px solid var(--cursor-color)`,
					}}
				/>
			)}

			<NavBar />
			<main className="bg-[#fbf7ef] text-slate-800 dark:bg-[#0b1324] dark:text-white">
				{/* Front Section, covers entire screen */}
				<section>
					<LandingPage />
				</section>

				{/* Main Section */}
				<section>
					<AboutMe />
					<ToolBox />
					<Beliefs />
					
					
				</section>

				{/* Footer/Contact Me Section */}
				<section>
					<ContactMe />
				</section>
			</main>
		</ThemeProvider>
	);
}
