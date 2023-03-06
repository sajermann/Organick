/* eslint-disable react/button-has-type */
import classNames from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export function Button({
	...rest
}: DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>) {
	return (
		<button
			{...rest}
			className={classNames({
				[rest.className as string]: rest.className,
				'w-14 h-14 rounded-full flex items-center justify-center': true,
			})}
		/>
	);
}
