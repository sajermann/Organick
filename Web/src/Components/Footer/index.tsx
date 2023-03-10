import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { Icons } from '../Icons';
import { Logo } from '../Logo';
import { Title } from '../Title';

export function Footer() {
	return (
		<footer className="p-2 md:p-20 flex flex-col gap-10">
			<div className="w-full h-full rounded-2xl bg-[url('~/Assets/bannerFooter.jpg')] bg-cover p-2 md:p-20 flex flex-wrap justify-center lg:justify-between items-center">
				<Title className="text-white w-80">Subscribe to our Newsletter</Title>
				<div className="flex flex-wrap justify-center items-center">
					<input
						className="bg-light-400 m-2 w-80 h-20 rounded-2xl p-2 placeholder:text-dark-100 placeholder:italic text-lg"
						placeholder="Your Email Address"
					/>
					<Button hideIcon>Subscribe</Button>
				</div>
			</div>

			<div className="grid grid-cols-12">
				<div className="col-span-12 xl:col-span-3 xl:border-r-2 p-10 flex flex-col gap-4">
					<p className="font-bold text-3xl text-center xl:text-right">
						Contact Us
					</p>
					<div>
						<p className="font-bold text-center xl:text-right">Email</p>
						<p className="text-center xl:text-right">needhelp@Organik.com</p>
					</div>
					<div>
						<p className="font-bold text-center xl:text-right">Phone</p>
						<p className="text-center xl:text-right">111 222 333 444</p>
					</div>
					<div>
						<p className="font-bold text-center xl:text-right">Address</p>
						<p className="text-center xl:text-right">
							88 road, borklyn street, USA
						</p>
					</div>
				</div>

				<div className="col-span-12 xl:col-span-6 p-10 flex flex-col items-center gap-4">
					<div className="h-14">
						<Logo />
					</div>
					<p className="text-center">
						Simply dummy text of the printing and typesetting industry. Lorem
						Ipsum simply dummy text of the printing{' '}
					</p>

					<div className="flex gap-4">
						<IconButton className="bg-light-300">
							<Icons.Instagram width="20px" />
						</IconButton>
						<IconButton className="bg-light-300">
							<Icons.Facebook width="20px" />
						</IconButton>
						<IconButton className="bg-light-300">
							<Icons.Twitter width="20px" />
						</IconButton>
						<IconButton className="bg-light-300">
							<Icons.Pintrest width="20px" />
						</IconButton>
					</div>
				</div>

				<div className="col-span-12 xl:col-span-3 xl:border-l-2 p-10 flex flex-col gap-4">
					<p className="font-bold text-3xl text-center xl:text-left">
						Utility Pages
					</p>

					<p className="text-center xl:text-left">Style Guide</p>
					<p className="text-center xl:text-left">404 Not Found</p>
					<p className="text-center xl:text-left">Password Protected</p>
					<p className="text-center xl:text-left">Licences</p>
					<p className="text-center xl:text-left">Changelog</p>
				</div>
			</div>
		</footer>
	);
}
