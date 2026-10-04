import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Geologica, Fraunces } from 'next/font/google';

const display = Fraunces({ subsets: ['latin'], display: 'swap', variable: '--font-display' });

const montserrat = Geologica({
	subsets: ['latin'],
	display: 'swap',
	adjustFontFallback: false,
});

export const metadata = {
	title: 'Arun Pandey',
	description: "Founder, builder and storyteller. Creator of Nuxom Workforce Solutions, Magnest Realty, Magnest AI and Wheelhouse Corporation. Believer in infinite human potential.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
			</head>
			<body suppressHydrationWarning={true} className={`${montserrat.className} ${display.variable}`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
