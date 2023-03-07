/* eslint-disable react/button-has-type */
import classNames from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface Props
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	variant?: 'primary' | 'secondary' | 'outline';
}

export function Button({ variant = 'primary', ...rest }: Props) {
	return (
		<button
			{...rest}
			className={classNames({
				'w-56 h-20 rounded-2xl font-bold text-xl': true,
				'bg-dark-500 text-white': variant === 'primary',
				'bg-yellow-500 text-dark-500': variant === 'secondary',
				'border border-dark-500 text-dark-500': variant === 'outline',
				[rest.className as string]: rest.className,
			})}
		/>
	);
}
