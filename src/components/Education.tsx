import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';

export default function Education() {
  return (
    <>
      <Element name="education" className="relative" />
      <div className="mb-48 mt-20 sm:mt-0">
        <h3 className="mb-16 text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
          Education: Foundation of the Blueprint for Business Leadership
        </h3>
        <div className="mx-0 grid grid-cols-1 sm:grid-cols-2 md:mx-5 lg:grid-cols-4">
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500  dark:border-gray-800 dark:text-white dark:hover:border-cyan-700">
						<Fade left cascade>
							<div>
								<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">MBA</p>
								<p className="my-1 text-sm font-medium">Queen&apos;s University</p>

							</div>
							<div className="block">
								<Image
									src="/bps_logo.png"
									alt="BPS Logo"
									width={100}
									title="BPS Mayur Vihar Phase III"
									height={100}
									onClick={() => {
										window.open('https://smith.queensu.ca/index.php', '_blank');
									}}
									className="hover:cursor-pointer"
								/>
							</div>
						</Fade>
					</div>

					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500  dark:border-gray-800 dark:text-white dark:hover:border-cyan-700">
						<Fade left>
							<div>
								<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">
									Business Accounting
								</p>
								<p className="my-1 text-sm font-medium">York University</p>
								

							</div>
							<div className="block">
								<Image
									src="/york.png"
									alt="Bennett Logo"
									width={100}
									height={100}
									title="University of Mumbai"
									onClick={() => {
										window.open('https://www.yorku.ca/', '_blank');
									}}
									className="hover:cursor-pointer"
								/>
							</div>
						</Fade>
					</div>



					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500  dark:border-gray-800 dark:text-white dark:hover:border-cyan-700">
						<Fade left>
							<div>
								<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">
									Business Accounting
								</p>
								<p className="my-1 text-sm font-medium">Humber College</p>

							</div>
							<div className="block">
								<Image
									src="/humber.png"
									alt="BPS Logo"
									width={100}
									title="BPS Mayur Vihar Phase III"
									height={100}
									
									onClick={() => {
										window.open('https://humber.ca/', '_blank');
									}}
									className="hover:cursor-pointer"
								/>
							</div>
						</Fade>
					</div>


					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500  dark:border-gray-800 dark:text-white dark:hover:border-cyan-700">
						<Fade left>
							<div>
								<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">
									B.Sc.
								</p>
								
								<p className="my-1 text-sm font-medium">University of Mumbai</p>

							</div>
							<div className="block">
								<Image
									src="/bennett_logo.png"
									alt="Bennett Logo"
									width={100}
									height={100}
									title="University of Mumbai"
									onClick={() => {
										window.open('https://mu.ac.in/', '_blank');
									}}
									className="hover:cursor-pointer"
								/>
							</div>
						</Fade>
					</div>



					{/* </Slide> */}
				</div>
			</div>
		</>
	);
}
