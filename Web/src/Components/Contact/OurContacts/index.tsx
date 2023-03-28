import { useMemo } from 'react';

import imageBanana from '~/Assets/contactPage-banana.jpg';
import { Title } from '~/Components/Title';
import { Icons } from '~/Components/Icons';

export function OurContacts() {
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
		<div className="p-2 md:p-20 grid grid-cols-12 gap-4">
			<img
				className="hidden xl:block col-span-6 rounded-3xl"
				src={imageBanana}
				alt="Contact"
			/>

			<div className="col-span-12 xl:col-span-6 flex flex-col gap-4 justify-between">
				<Title>We&apos;d love to talk about how we can work together.</Title>
				<span>
					Simply dummy text of the printing and typesetting industry. Lorem
					Ipsum had ceased to been the industry&apos;s standard dummy text ever
					since the 1500s, when an unknown printer took a galley.
				</span>

				<div className="flex flex-col gap-5">
					<div className="p-4 border flex items-center gap-4 rounded-2xl w-full xl:w-1/2 hover:shadow-[0px_10px_14px_0px_rgba(0,0,0,0.75)] transition-all duration-500">
						<div className="flex items-center justify-center rounded-xl w-20 h-20 bg-light-300">
							<Icons.EnvelopeSimple width="42px" height="32px" />
						</div>
						<div className="flex flex-col">
							<p className="font-extrabold text-2xl">Message</p>
							<p>support@organick.com</p>
						</div>
					</div>
					<div className="p-4 border flex items-center gap-4 rounded-2xl w-full xl:w-1/2 hover:shadow-[0px_10px_14px_0px_rgba(0,0,0,0.75)] transition-all duration-500">
						<div className="flex items-center justify-center rounded-xl w-20 h-20 bg-light-300">
							<Icons.Phone width="42px" height="32px" />
						</div>
						<div className="flex flex-col ">
							<p className="font-extrabold text-2xl">Contact Us</p>
							<p>+01 123 456 789</p>
						</div>
					</div>
				</div>

				<div className="flex gap-4 justify-center xl:justify-start">
					{contacts.map(constact => (
						<div
							className="p-4 bg-light-300 rounded-full w-14"
							key={constact.link}
						>
							{constact.icon}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
