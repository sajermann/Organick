/* eslint-disable react/button-has-type */
import classNames from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { Icons } from '../Icons';

interface Props
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	variant?: 'primary' | 'secondary' | 'outline' | 'link';
	hideIcon?: true;
}

export function Button({ variant = 'primary', hideIcon, ...rest }: Props) {
	return (
		<button
			{...rest}
			className={classNames({
				'flex items-center justify-center gap-2': !hideIcon,
				'w-56 h-20 rounded-2xl font-bold text-xl': true,
				'bg-dark-500 text-white': variant === 'primary',
				'bg-yellow-500 text-dark-500': variant === 'secondary',
				'border border-dark-500 text-dark-500': variant === 'outline',
				'text-dark-500 !justify-start !h-10': variant === 'link',
				[rest.className as string]: rest.className,
			})}
		>
			{rest.children} {!hideIcon && <Icons.Arrow width="19px" height="19px" />}
		</button>
	);
}
