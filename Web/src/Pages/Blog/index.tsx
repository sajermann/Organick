import { useMemo } from 'react';
import dayjs from 'dayjs';

import imageCarbbage from '~/Assets/blog-carbbage.png';
import imageTomato from '~/Assets/blog-tomato.png';
import imageBlog3 from '~/Assets/blog-3.png';
import imageBlog4 from '~/Assets/blog-4.png';
import imageBlog5 from '~/Assets/blog-5.png';
import imageBlog6 from '~/Assets/blog-6.png';

import { Button } from '~/Components/Button';
import { Icons } from '~/Components/Icons';

import { HeaderPage } from '~/Components/HeaderPage';
import { Footer } from '~/Components/Footer';
import styles from './index.module.css';

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
		<div className="relative min-w-[calc(100%_*_(1/2)_-_16px)] h-[600px]">
			<img
				className="rounded-3xl w-full max-h-[500px]"
				src={image}
				alt={title}
			/>
			<div className="absolute top-10 left-10 bg-white flex flex-col items-center justify-center font-extrabold rounded-full w-20 h-20">
				<p>{dayjs(date).format('DD')}</p>
				<p>{dayjs(date).format('MMM')}</p>
			</div>

			<div className="absolute top-1/2  left-1/2 -translate-x-1/2 bg-white w-4/5 rounded-3xl flex flex-col p-10 gap-4 shadow-[0px_10px_14px_0px_rgba(0,0,0,0.75)]">
				<span className="flex items-center gap-2">
					<Icons.User width="20px" height="20px" /> By {author}
				</span>
				<span className="font-extrabold text-2xl bg-white">{title}</span>
				<span
					className={`min-h-[50px] max-h-[50px] h-[50px]  ${styles.ellipsis}`}
				>
					{resume}
				</span>

				<Button variant="link">Read More</Button>
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
			{
				image: imageBlog3,
				author: 'Marcia Taylor',
				title: 'Benefits of Vitamin C & How to Get It',
				resume:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis nihil possimus quibusdam rerum unde, voluptatum, obcaecati maiores exercitationem et ipsum neque consequatur sed repudiandae ullam repellat incidunt amet temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis nihil possimus quibusdam rerum unde, voluptatum, obcaecati maiores exercitationem et ipsum neque consequatur sed repudiandae ullam repellat incidunt amet temporibus.',
				link: '/',
				date: '2023-05-08T10:00:00.000Z',
			},
			{
				image: imageBlog4,
				author: 'Marcia Taylor',
				title: 'Research More Organic Foods',
				resume:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis nihil possimus quibusdam rerum unde, voluptatum, obcaecati maiores exercitationem et ipsum neque consequatur sed repudiandae ullam repellat incidunt amet temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis nihil possimus quibusdam rerum unde, voluptatum, obcaecati maiores exercitationem et ipsum neque consequatur sed repudiandae ullam repellat incidunt amet temporibus.',
				link: '/',
				date: '2023-05-09T10:00:00.000Z',
			},
			{
				image: imageBlog5,
				author: 'Marcia Taylor',
				title: 'Everyday Fresh Fruites',
				resume:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis nihil possimus quibusdam rerum unde, voluptatum, obcaecati maiores exercitationem et ipsum neque consequatur sed repudiandae ullam repellat incidunt amet temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis nihil possimus quibusdam rerum unde, voluptatum, obcaecati maiores exercitationem et ipsum neque consequatur sed repudiandae ullam repellat incidunt amet temporibus.',
				link: '/',
				date: '2023-05-10T10:00:00.000Z',
			},
			{
				image: imageBlog6,
				author: 'Marcia Taylor',
				title: 'Don’t Use Plastic Product! it’s Kill Nature',
				resume:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis nihil possimus quibusdam rerum unde, voluptatum, obcaecati maiores exercitationem et ipsum neque consequatur sed repudiandae ullam repellat incidunt amet temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis nihil possimus quibusdam rerum unde, voluptatum, obcaecati maiores exercitationem et ipsum neque consequatur sed repudiandae ullam repellat incidunt amet temporibus.',
				link: '/',
				date: '2023-05-11T10:00:00.000Z',
			},
		],
		[]
	);

	return (
		<>
			<HeaderPage
				heading="Recent News"
				className="bg-[url('~/Assets/blogPage-headerBanner.png')]"
			/>
			<div className="p-2 md:p-20 flex flex-col gap-4">
				<div className="flex justify-center gap-4 flex-wrap">
					{posts.map(post => (
						<Card key={post.resume} {...post} />
					))}
				</div>
			</div>
			<Footer />
		</>
	);
}
