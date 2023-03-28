import { Title } from '~/Components/Title';
import { Icons } from '~/Components/Icons';
import { TitleYellowtail } from '~/Components/TitleYellowtail';

export function Location() {
	return (
		<div className="p-2 md:p-20">
			<div className="bg-[url('~/Assets/contactPage-locationBanner.png')] bg-cover w-full h-[700px] rounded-2xl flex items-center justify-end">
				<div className="bg-white max-w-lg p-10 rounded-3xl flex flex-col gap-4 m-10">
					<TitleYellowtail>Location</TitleYellowtail>
					<Title>Our Farms</Title>
					<p>
						Established fact that a reader will be distracted by the readable
						content of a page when looking a layout. The point of using.
					</p>

					<div className="flex">
						<Icons.MapPin color="rgb(126 182 147)" width="50" />
						<div>
							<p className="font-bold">New York, USA:</p>
							<p>299 Park Avenue New York, New York 10171</p>
						</div>
					</div>

					<div className="flex">
						<Icons.MapPin color="rgb(126 182 147)" width="50" />
						<div>
							<p className="font-bold">London, UK:</p>
							<p>30 Stamford Street, London SE1 9LQ</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
