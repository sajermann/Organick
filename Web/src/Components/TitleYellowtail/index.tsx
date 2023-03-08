import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export function TitleYellowtail({
	...rest
}: DetailedHTMLProps<
	HTMLAttributes<HTMLParagraphElement>,
	HTMLParagraphElement
>) {
	return (
		<p
			{...rest}
			className={classNames({
				'font-Yellowtail text-4xl text-green-500': true,
				[rest.className as string]: rest.className,
			})}
		/>
	);
}
