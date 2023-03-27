import imageBanana from '~/Assets/contactPage-banana.jpg';

import { HeaderPage } from '~/Components/HeaderPage';
import { Footer } from '~/Components/Footer';
import { Title } from '~/Components/Title';
import { Icons } from '~/Components/Icons';
import { useMemo } from 'react';

export function Contact() {
	const contacts = useMemo(
		() => [
			{
				icon: <Icons.Instagram />,
				link: 'http://instagram.com/organick',
			},
			{
				icon: <Icons.Facebook />,
				link: 'http://facebook.com/organick',
			},
			{
				icon: <Icons.Twitter />,
				link: 'http://twitter.com/organick',
			},
			{
				icon: <Icons.Pintrest />,
				link: 'http://pintrest.com/organick',
			},
		],
		[]
	);

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
						Ipsum had ceased to been the industry&apos;s standard dummy text
						ever since the 1500s, when an unknown printer took a galley.
					</span>

					<div>
						<div className="p-4 border flex items-center gap-4">
							<div className="flex items-center justify-center rounded-xl w-20 h-20 bg-light-300">
								<Icons.EnvelopeSimple width="42px" height="32px" />
							</div>
							<div className="flex flex-col">
								<p className="font-extrabold text-2xl">Message</p>
								<p>support@organick.com</p>
							</div>
						</div>
						<div className="p-4 border flex items-center gap-4">
							<div className="flex items-center justify-center rounded-xl w-20 h-20 bg-light-300">
								<Icons.Phone width="42px" height="32px" />
							</div>
							<div className="flex flex-col">
								<p className="font-extrabold text-2xl">Contact Us</p>
								<p>+01 123 456 789</p>
							</div>
						</div>
					</div>

					{contacts.map(constact => (
						<div key={constact.link}>{constact.icon}</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
}
