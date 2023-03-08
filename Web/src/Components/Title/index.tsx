import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export function Title({
	...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
	return (
		<h1
			{...rest}
			className={classNames({
				'font-extrabold text-5xl': true,
				[rest.className as string]: rest.className,
			})}
		>
			{rest.children}
		</h1>
	);
}
