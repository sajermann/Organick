import imageBanana from '~/Assets/contactPage-banana.jpg';

import { HeaderPage } from '~/Components/HeaderPage';
import { Footer } from '~/Components/Footer';
import { Title } from '~/Components/Title';

export function Contact() {
	return (
		<>
			<HeaderPage
				heading="Contact Us"
				className="bg-[url('~/Assets/contactPage-headerBanner.png')]"
			/>
			<div className="p-2 md:p-20 grid grid-cols-12 gap-4">
				<img
					className="col-span-6 rounded-3xl"
					src={imageBanana}
					alt="Contact"
				/>
				<div className="col-span-6 flex flex-col gap-4 border">
					<Title>We&apos;d love to talk about how we can work together.</Title>
					<span>
						Simply dummy text of the printing and typesetting industry. Lorem
						had ceased to been the industry&apos;s standard dummy text ever
						since the 1500s, when an unknown printer took a galley.
					</span>

					<div>
						<div className="p-4 border">
							<div className="flex flex-col">
								<p className="font-extrabold text-2xl">Message</p>
								<p>support@organick.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
