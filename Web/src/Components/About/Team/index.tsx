import { useMemo } from 'react';
import { Icons } from '~/Components/Icons';
import { Title } from '~/Components/Title';
import { TitleYellowtail } from '~/Components/TitleYellowtail';
import imageGiovani from '~/Assets/about-team-giovani.jpg';
import imageMarianne from '~/Assets/about-team-marianne.jpg';
import imageRiga from '~/Assets/about-team-riga.jpg';
import classNames from 'classnames';

type TInfo = {
	image: string;
	title: string;
	name: string;
	highlight?: boolean;
	socials: {
		facebook?: string;
		twitter?: string;
		instagram?: string;
	};
};

function Card({ image, title, name, highlight, socials }: TInfo) {
	return (
		<div
			className={classNames({
				'col-span-12 xl:col-span-4 flex flex-col items-center justify-center rounded-3xl bg-light-100':
					true,
				' !bg-white': highlight,
			})}
			style={{
				boxShadow: highlight ? '0px 10px 10px 0px rgba(0,0,0,0.35)' : undefined,
			}}
		>
			<img
				src={image}
				alt={`Employer ${name}`}
				className="bg-light-100 rounded-t-3xl"
			/>
			<div className="p-10 w-full">
				<div className="font-extrabold text-2xl">{name}</div>
				<div className="flex justify-between">
					<TitleYellowtail className="!text-xl">{title}</TitleYellowtail>
					<div className="flex gap-4">
						{socials.facebook && (
							<a href={socials.facebook} target="_blank" rel="noreferrer">
								<Icons.Facebook width="21px" height="21px" />
							</a>
						)}
						{socials.twitter && (
							<a href={socials.twitter} target="_blank" rel="noreferrer">
								<Icons.Twitter width="21px" height="21px" />
							</a>
						)}
						{socials.instagram && (
							<a href={socials.instagram} target="_blank" rel="noreferrer">
								<Icons.Instagram width="21px" height="21px" />
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export function Team() {
	const employers = useMemo(
		() => [
			{
				image: imageGiovani,
				name: 'Giovani Bacardo',
				title: 'Farmer',
				socials: {
					facebook: 'http://facebook.com/giovani_bacardo_2023',
					twitter: 'http://twitter.com/giovani_bacardo_2023',
				},
			},
			{
				image: imageMarianne,
				name: 'Marianne Loreno',
				title: 'Designer',
				socials: {
					facebook: 'http://facebook.com/marianne_loreno_2023',
					twitter: 'http://twitter.com/marianne_loreno_2023',
					instagram: 'http://instagram.com/marianne_loreno_2023',
				},
			},
			{
				image: imageRiga,
				name: 'Riga Pelore',
				title: 'Farmer',
				socials: {
					facebook: 'http://facebook.com/riga_pelore_2023',
					twitter: 'http://twitter.com/riga_pelore_2023',
					instagram: 'http://instagram.com/riga_pelore_2023',
				},
			},
		],
		[]
	);

	return (
		<div className="p-2 lg:p-28 flex flex-col  gap-10 ">
			<div className="flex gap-10">
				<div className="flex flex-col gap-4 w-full items-center justify-center">
					<TitleYellowtail>Team</TitleYellowtail>
					<Title className="text-center">Our Organic Experts</Title>
					<p className="w-1/2 text-center">
						Simply dummy text of the printing and typesetting industry. Lorem
						had ceased to been the industrys standard dummy text ever since the
						1500s, when an unknown printer took a galley.
					</p>
				</div>
			</div>

			<div className="p-2 grid grid-cols-12 gap-5">
				{employers.map((employer, i) => (
					<Card highlight={i === 1} key={employer.name} {...employer} />
				))}
			</div>
		</div>
	);
}
