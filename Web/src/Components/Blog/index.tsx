import { useMemo } from 'react';
import dayjs from 'dayjs';
import imageCarbbage from '~/Assets/blog-carbbage.png';
import imageTomato from '~/Assets/blog-tomato.png';

import { TitleYellowtail } from '../TitleYellowtail';
import { Title } from '../Title';
import { Button } from '../Button';
import styles from './index.module.css';
import { Icons } from '../Icons';

type Props = {
	image: string;
	author: string;
	title: string;
	resume: string;
	link: string;
	date: string;
};
function Card({ author, title, resume, link, date, image }: Props) {
	return (
		<div className="relative min-w-[calc(100%_*_(1/2)_-_16px)] h-[630px]">
			<img
				className="rounded-3xl w-full max-h-[600px]"
				src={image}
				alt={title}
			/>
			<div className="absolute top-10 left-10 bg-white flex flex-col items-center justify-center font-extrabold rounded-full w-20 h-20">
				<p>{dayjs(date).format('DD')}</p>
				<p>{dayjs(date).format('MMM')}</p>
			</div>

			<div
				className="absolute top-3/4 -translate-y-3/4 left-1/2 -translate-x-1/2 bg-white w-4/5 rounded-3xl flex flex-col p-10 gap-4"
				style={{
					boxShadow: '0px 10px 14px 0px rgba(0,0,0,0.75)',
				}}
			>
				<span className="flex items-center gap-2">
					<Icons.User width="20px" height="20px" /> By {author}
				</span>
				<span className="font-extrabold text-2xl bg-white">{title}</span>
				<span
					className={`min-h-[100px] max-h-[100px] h-[100px]  ${styles.ellipsis}`}
				>
					{resume}
				</span>

				<Button variant="secondary">Read More</Button>
			</div>
		</div>
	);
}

export function Blog() {
	const posts = useMemo(
		() => [
			{
				image: imageCarbbage,
				author: 'Bruno Schtz',
				title: 'The Benefits of Vitamin D & How to Get It',
				resume:
					'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
				link: '/',
				date: '2023-03-08T10:00:00.000Z',
			},
			{
				image: imageTomato,
				author: 'Marcia Taylor',
				title: 'The Benefits of Vitamin D & How to Get It',
				resume:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis nihil possimus quibusdam rerum unde, voluptatum, obcaecati maiores exercitationem et ipsum neque consequatur sed repudiandae ullam repellat incidunt amet temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis nihil possimus quibusdam rerum unde, voluptatum, obcaecati maiores exercitationem et ipsum neque consequatur sed repudiandae ullam repellat incidunt amet temporibus.',
				link: '/',
				date: '2023-03-08T10:00:00.000Z',
			},
		],
		[]
	);

	return (
		<div className="m-20 flex flex-col gap-4">
			<TitleYellowtail>News</TitleYellowtail>
			<div className="flex items-end justify-between flex-wrap gap-4">
				<Title className="max-w-2xl">
					Discover weekly content about organic food, & more
				</Title>
				<Button variant="outline">More News</Button>
			</div>

			<div className="flex justify-center gap-4 flex-wrap">
				{posts.map(post => (
					<Card key={post.resume} {...post} />
				))}
			</div>
		</div>
	);
}
