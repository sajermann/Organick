import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Title } from '~/Components/Title';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
	heading: string;
};

export function HeaderPage({ ...rest }: Props) {
	return (
		<header
			className={classNames({
				'bg-cover bg-pink-100 flex items-center justify-center h-[30vh]': true,
				[rest.className as string]: rest.className,
			})}
		>
			<Title className="text-7xl">{rest.heading}</Title>
		</header>
	);
}
