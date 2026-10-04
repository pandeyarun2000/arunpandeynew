import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';

export default function AboutMe() {
	return (
		<Fade>
			<Element name="about-me" className="relative z-10" />
			<div className="mx-auto mb-40 max-w-4xl px-6 sm:px-12">
				<h2 className="font-display text-4xl font-light sm:text-5xl">Every company began as a conversation.</h2>
				<div className="mt-10 space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
					<p>I start with a blank page. Nuxom, Magnest and Wheelhouse each began as an idea and a decision to begin before it felt ready.</p>
					<p>What I have learned is that the real engine is always people. I believe human potential is infinite, and that a positive mind turns what is possible into what is real.</p>
					<p>Today I build, advise and tell stories for founders, teams and leaders ready to grow into the best version of what they are creating.</p>
				</div>
			</div>
		</Fade>
	);
}
