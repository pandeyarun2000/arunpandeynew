import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdAdsClick } from 'react-icons/md';
import Fade from 'react-reveal/Fade';
import { useTheme } from 'next-themes';
import { Element } from 'react-scroll';

interface Project {
	index: number;
	image: string;
	image_dark: string;
	description: string;
	name: string;
	demo_link: string;
	github_link: string;
	hover_gif_dark: string;
	hover_gif_light: string;
}

export default function Projects() {
	const [modalImg, setModalImg] = useState<string | undefined>(undefined);
	const [showModal, setShowModal] = useState<boolean>(false);
	const { theme } = useTheme();

	useEffect(() => {
		const closeOnEscapeKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setModalImg(undefined);
			}
		};
		window.addEventListener('keydown', closeOnEscapeKey);
		return () => window.removeEventListener('keydown', closeOnEscapeKey);
	}, []);

	useEffect(() => {
		if (modalImg === undefined) {
			setShowModal(false);
		} else {
			setShowModal(true);
		}
	}, [modalImg]);

	const projects: Project[] = [

		{
			index: 1,
			image: '/project_thumbnails/spot-clone.png',
			image_dark: '/project_thumbnails/spot-clone.png',
			description: 'Big 4 Consulting Firm',
			name: 'KPMG',
			demo_link: 'https://kpmg.com/ca/en/home.html',
			github_link: 'https://kpmg.com/ca/en/home.html',
			hover_gif_dark: '/project_gifs/spot-clone.gif',
			hover_gif_light: '/project_gifs/spot-clone.gif',
		},
		{
			index: 2,
			image: '/project_thumbnails/light/bu-news-android.png',
			image_dark: '/project_thumbnails/dark/bu-news-android.png',
			description: 'Largest Bank in Canada',
			name: 'RBC',
			demo_link: 'https://www.rbc.com/canada.html',
			github_link: 'https://www.rbc.com/canada.html',
			hover_gif_dark: '/project_gifs/dark/bu-news-android.gif',
			hover_gif_light: '/project_gifs/light/bu-news-android.gif',
		},
		{
			index: 3,
			image: '/project_thumbnails/light/bu-news.png',
			image_dark: '/project_thumbnails/dark/bu-news.png',
			description: 'Largest P&C Insurance Provider',
			name: 'State Farm Insurance',
			demo_link: 'https://www.statefarm.com/',
			github_link: 'https://www.statefarm.com/',
			hover_gif_dark: '/project_gifs/dark/bu-news.gif',
			hover_gif_light: '/project_gifs/light/bu-news.gif',
		},
		{
			index: 4,
			image: '/project_thumbnails/light/weatherly.png',
			image_dark: '/project_thumbnails/dark/weatherly.png',
			description: 'Largest Shipping Company by Fleet Capacity',
			name: 'Maersk',
			demo_link: 'https://www.maersk.com/',
			github_link: 'https://www.maersk.com/',
			hover_gif_dark: '/project_gifs/dark/weatherly.gif',
			hover_gif_light: '/project_gifs/light/weatherly.gif',
		},

	];

	return (
		<>
			<Element name="projects" className="relative" />
			<div className="mb-48">
				<h1 className="mb-16 text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
					Experience: A Journey Through Renowned Corporations
				</h1>
				<div className="mx-0 grid grid-cols-1 grid-rows-2 sm:grid-cols-2 md:mx-4 lg:grid-cols-3">
					{projects.map((project) => {
						return (
							<div
								key={project.index}
								className={`group m-6 flex items-center flex-col justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500  dark:border-gray-800 dark:text-white dark:hover:border-cyan-700`}
							>
								<Fade bottom>
									<div className="relative flex items-center justify-center h-full">
										<Image
											src={theme === 'light' ? project.image : project.image_dark}
											alt={project.name}
											width={300}
											height={224}
											title="Click to enlarge"
											onClick={() => {
												setModalImg(theme === 'dark' ? project.image_dark : project.image);
											}}
											className={`absolute mb-4 h-auto max-h-56 w-full transform rounded-lg object-contain transition duration-500 ease-in-out hover:cursor-pointer group-hover:opacity-0`}
										/>
										<Image
											src={theme === 'light' ? project.hover_gif_light : project.hover_gif_dark}
											alt={project.name}
											width={300}
											height={224}
											className={`mb-4 h-auto max-h-56 w-full rounded-lg object-contain`}
										/>
									</div>
									<div className={`w-full`}>
										<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">
											{project.description}
										</p>
										<p className="my-1 text-xl font-medium">{project.name}</p>
										<div className="flex justify-between">
											<Link
												className="text-sm"
												href={project.demo_link}
												aria-label="Visit Demo"
												onClick={
													project.demo_link === '#'
														? (e) => {
															e.preventDefault();
														}
														: (e) => {
															e.preventDefault();
															window.open(project.demo_link, '_blank');
														}
												}
											>
												{project.demo_link === '#' ? '' : 'Visit'}
												<span
													className="block h-[1px] max-w-0 bg-gray-700 transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
											</Link>
											<Link
												href={project.github_link}
												rel="noreferrer"
												title="Github Link"
												target="_blank"
											>
												<MdAdsClick className="inline-block text-4xl text-black transition delay-75 ease-in-out hover:scale-125 dark:text-white" />
											</Link>
										</div>
									</div>
								</Fade>
							</div>
						);
					})}
				</div>
			</div>
			<div
				id="modal"
				className={`fixed left-0 top-0 z-10 h-screen w-screen items-center justify-center bg-black/70 ${
					showModal ? 'flex' : 'hidden'
				}
				`}
				onClick={() => {
					setModalImg(undefined);
				}}
			>
				<div className="flex items-center justify-center sm:m-10 lg:m-20">
					{/* eslint-disable @next/next/no-img-element */}
					<img id="modal-img" alt="" src={modalImg ? modalImg : ''} className="max-h-[90dvh]" />
				</div>
			</div>
		</>
	);
}
