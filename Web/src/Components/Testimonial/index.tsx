import Carousel from 'nuka-carousel';
import { useMemo } from 'react';
import imgLeft from '~/Assets/testimonial-left.png';
import imgRight from '~/Assets/testimonial-right.png';
import { Stars } from '../Stars';
import { Title } from '../Title';
import { TitleYellowtail } from '../TitleYellowtail';

type Props = {
	avatar: string;
	rating: number;
	note: string;
	name: string;
	title: string;
};

function Card({ avatar, rating, note, name, title }: Props) {
	return (
		<div className="flex flex-col items-center justify-center w-full gap-4 py-11 px-44">
			<img className="w-28 h-28" src={avatar} alt="User Avatar" />
			<Stars quantity={rating} />
			<p className="text-center">{note}</p>
			<p className="font-semibold text-2xl">{name}</p>
			<p>{title}</p>
		</div>
	);
}

export function Testimonial() {
	const testimonials = useMemo(
		() => [
			{
				avatar:
					'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png',
				rating: 5,
				note: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
				name: 'Marcia Taylor',
				title: 'Consumer',
			},
			{
				avatar:
					'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png',
				rating: 5,
				note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptate quae eos, optio ad aperiam neque blanditiis, velit quos iste tempora pariatur provident numquam quo ullam magnam temporibus quisquam rem?',
				name: 'Eva Schtz',
				title: 'Consumer',
			},
			{
				avatar:
					'https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png',
				rating: 5,
				note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit eius, aut omnis modi sed fugit ullam accusantium, odio blanditiis saepe sit laborum porro eum minima, commodi at explicabo soluta fugiat.',
				name: 'Bruno Schtz',
				title: 'Consumer',
			},
		],
		[]
	);

	const counters = useMemo(
		() => [
			{
				value: '100%',
				description: 'Organic',
			},
			{
				value: '285',
				description: 'Active Product',
			},
			{
				value: '350+',
				description: 'Organic Orchads',
			},
			{
				value: '25+',
				description: 'Years of Farming',
			},
		],
		[]
	);

	return (
		<div className="flex justify-between w-full gap-4 bg-light-240">
			<img
				className="hidden lg:block max-w-[calc(20%_-_16px)] "
				src={imgLeft}
				alt="Testimonial Left Decoration"
			/>
			<div className="w-full lg:max-w-[60%] flex flex-col items-center justify-center gap-10 py-5 ">
				<TitleYellowtail>Testimonial</TitleYellowtail>
				<p className="font-extrabold text-4xl">What Our Customer Saying?</p>
				<div className="w-full overflow-hidden">
					<Carousel
						autoplay
						wrapAround
						pauseOnHover
						defaultControlsConfig={{
							nextButtonClassName: 'hidden',
							prevButtonClassName: 'hidden',
							pagingDotsContainerClassName: 'flex gap-2',
							pagingDotsStyle: {
								fill: 'red',
							},
						}}
					>
						{testimonials.map(testimonial => (
							<Card key={testimonial.note} {...testimonial} />
						))}
					</Carousel>
				</div>
				<hr className="my-2 w-full" />
				<div className=" flex gap-4 flex-wrap justify-center">
					{counters.map(count => (
						<div
							key={count.value}
							className="w-52 h-52 border-4 border-green-500 rounded-full"
						>
							<div className="w-full h-full flex flex-col items-center justify-center bg-light-230 rounded-full">
								<Title className="font-extrabold text-5xl">{count.value}</Title>
								<p className="">{count.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<img
				className="hidden lg:block max-w-[calc(20%_-_16px)]"
				src={imgRight}
				alt="Testimonial Right Decoration"
			/>
		</div>
	);
}
