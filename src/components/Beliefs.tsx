import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';

const beliefs = [
	{ title: 'Begin from zero', text: 'Every great thing starts as a blank page and a decision to begin.' },
	{ title: 'Potential is infinite', text: 'People rise to the room we build for them. I build bigger rooms.' },
	{ title: 'Stay positive, always', text: 'Optimism is not naive. It is how the impossible gets started.' },
];

export default function Beliefs() {
	return (
		<>
			<Element name="beliefs" className="relative" />
			<div className="mx-auto mb-40 max-w-5xl px-6 sm:px-12">
				<h2 className="mb-14 font-display text-4xl font-light sm:text-5xl">What I believe</h2>
				{beliefs.map((b) => (
					<Fade bottom key={b.title}>
						<div className="grid gap-3 border-t border-amber-400/40 py-10 md:grid-cols-[1fr_1.4fr] md:gap-10">
							<p className="font-display text-3xl font-light text-amber-700 dark:text-amber-400">{b.title}</p>
							<p className="text-xl leading-relaxed text-slate-600 dark:text-slate-300">{b.text}</p>
						</div>
					</Fade>
				))}
				<p className="border-t border-amber-400/40 pt-10 text-lg italic text-slate-500 dark:text-slate-400">More stories are on their way.</p>
			</div>
		</>
	);
}
