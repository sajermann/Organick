type Props = {
	color?: string;
	width?: string;
	height?: string;
};

function Arrow({ width, height }: Pick<Props, 'height' | 'width'>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 19 19"
			fill="none"
		>
			<circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
			<path
				d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611"
				stroke="white"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function ArrowDown({ width, height }: Pick<Props, 'height' | 'width'>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 8 6"
			fill="none"
		>
			<path
				d="M0.791016 1.5L3.79102 4.5L6.79102 1.5"
				stroke="#274C5B"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function Search({ width, height, color }: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 22 21"
			fill="none"
		>
			<path
				d="M21.4692 18.8921L16.7086 14.1315C17.8547 12.6057 18.4734 10.7485 18.4713 8.84016C18.4713 3.96573 14.5056 0 9.63118 0C4.75674 0 0.791016 3.96573 0.791016 8.84016C0.791016 13.7146 4.75674 17.6803 9.63118 17.6803C11.5395 17.6824 13.3967 17.0637 14.9225 15.9175L19.6831 20.6781C19.9241 20.8936 20.2384 21.0085 20.5615 20.9995C20.8846 20.9905 21.192 20.8581 21.4205 20.6295C21.6491 20.401 21.7815 20.0936 21.7905 19.7705C21.7996 19.4474 21.6846 19.1331 21.4692 18.8921ZM3.31678 8.84016C3.31678 7.59129 3.68711 6.37047 4.38094 5.33207C5.07478 4.29367 6.06095 3.48434 7.21476 3.00642C8.36856 2.52849 9.63818 2.40345 10.8631 2.64709C12.0879 2.89073 13.213 3.49212 14.0961 4.3752C14.9792 5.25829 15.5806 6.38341 15.8242 7.60828C16.0679 8.83315 15.9428 10.1028 15.4649 11.2566C14.987 12.4104 14.1777 13.3966 13.1393 14.0904C12.1009 14.7842 10.88 15.1546 9.63118 15.1546C7.95711 15.1526 6.35218 14.4866 5.16844 13.3029C3.98469 12.1192 3.31878 10.5142 3.31678 8.84016Z"
				fill={color || 'currentColor'}
			/>
		</svg>
	);
}

function Cart({ width, height, color }: Props) {
	return (
		<svg
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 27 24"
			fill="none"
		>
			<path
				d="M11.5689 23.0001C12.2439 23.0001 12.7911 22.4529 12.7911 21.7779C12.7911 21.1029 12.2439 20.5557 11.5689 20.5557C10.8939 20.5557 10.3467 21.1029 10.3467 21.7779C10.3467 22.4529 10.8939 23.0001 11.5689 23.0001Z"
				fill={color || 'currentColor'}
				stroke={color || 'currentColor'}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.1246 23.0001C20.7996 23.0001 21.3468 22.4529 21.3468 21.7779C21.3468 21.1029 20.7996 20.5557 20.1246 20.5557C19.4496 20.5557 18.9023 21.1029 18.9023 21.7779C18.9023 22.4529 19.4496 23.0001 20.1246 23.0001Z"
				fill={color || 'currentColor'}
				stroke={color || 'currentColor'}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M1.79102 1H5.57291L8.40933 17.0731H23.5369"
				stroke={color || 'currentColor'}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.90221 13.1837L23.1494 13.2907C23.2587 13.2908 23.3647 13.2529 23.4493 13.1837C23.5339 13.1144 23.5918 13.0179 23.6133 12.9107L25.3151 4.40145C25.3289 4.33283 25.3272 4.26203 25.3102 4.19414C25.2933 4.12625 25.2615 4.06297 25.2171 4.00886C25.1727 3.95476 25.1169 3.91118 25.0536 3.88128C24.9903 3.85138 24.9212 3.83589 24.8513 3.83594L6.35838 3.83594"
				stroke={color || 'currentColor'}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function Star({ width, height }: Pick<Props, 'height' | 'width'>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 14 14"
			fill="none"
		>
			<path
				d="M6.05208 1.09367C6.35969 0.189974 7.6378 0.189977 7.94541 1.09367L8.92893 3.98313C9.06687 4.3884 9.44749 4.66091 9.87559 4.66091H12.9558C13.9357 4.66091 14.3309 5.92416 13.5257 6.48263L11.115 8.15456C10.7481 8.40901 10.5943 8.87584 10.7382 9.29851L11.6777 12.0586C11.9885 12.9718 10.9538 13.7523 10.1611 13.2025L7.56864 11.4046C7.22589 11.1668 6.7716 11.1668 6.42885 11.4046L3.83638 13.2025C3.04371 13.7523 2.00899 12.9718 2.31982 12.0586L3.2593 9.29851C3.40317 8.87584 3.24942 8.40901 2.88253 8.15456L0.471796 6.48263C-0.333441 5.92416 0.0617454 4.66091 1.04169 4.66091H4.1219C4.55 4.66091 4.93062 4.3884 5.06856 3.98313L6.05208 1.09367Z"
				fill="#FFA858"
			/>
		</svg>
	);
}

function User({ width, height }: Pick<Props, 'height' | 'width'>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 18 20"
			fill="none"
		>
			<path
				d="M12.3161 1.45446C11.4741 0.516515 10.298 0 9 0C7.69504 0 6.51512 0.51339 5.67701 1.44553C4.82983 2.38793 4.41705 3.66873 4.51397 5.05176C4.70608 7.78031 6.71848 9.99994 9 9.99994C11.2815 9.99994 13.2905 7.78076 13.4856 5.05265C13.5838 3.68212 13.1684 2.404 12.3161 1.45446ZM16.6152 19.9999H1.38482C1.18547 20.0026 0.988051 19.9594 0.806921 19.8734C0.625791 19.7874 0.46551 19.6609 0.337738 19.503C0.0564959 19.1561 -0.0568664 18.6825 0.0270736 18.2035C0.392256 16.1133 1.53194 14.3575 3.32323 13.1249C4.91463 12.0307 6.93049 11.4285 9 11.4285C11.0695 11.4285 13.0854 12.0312 14.6768 13.1249C16.4681 14.3571 17.6077 16.1129 17.9729 18.203C18.0569 18.682 17.9435 19.1557 17.6623 19.5026C17.5345 19.6606 17.3743 19.7872 17.1931 19.8732C17.012 19.9592 16.8146 20.0025 16.6152 19.9999Z"
				fill="#EFD372"
			/>
		</svg>
	);
}

function Instagram({ width, height }: Pick<Props, 'height' | 'width'>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 20 20"
			fill="none"
		>
			<path
				d="M13.6585 2.26307C14.7231 2.26613 15.7431 2.67471 16.4958 3.39958C17.2486 4.12445 17.6729 5.1067 17.6761 6.13181V13.8685C17.6729 14.8936 17.2486 15.8758 16.4958 16.6007C15.7431 17.3256 14.7231 17.7342 13.6585 17.7372H5.6243C4.55976 17.7342 3.53973 17.3256 2.78698 16.6007C2.03423 15.8758 1.60994 14.8936 1.60676 13.8685V6.13181C1.60994 5.1067 2.03423 4.12445 2.78698 3.39958C3.53973 2.67471 4.55976 2.26613 5.6243 2.26307H13.6585ZM13.6585 0.71582H5.6243C2.53087 0.71582 0 3.15296 0 6.13181V13.8685C0 16.8473 2.53087 19.2845 5.6243 19.2845H13.6585C16.752 19.2845 19.2828 16.8473 19.2828 13.8685V6.13181C19.2828 3.15296 16.752 0.71582 13.6585 0.71582Z"
				fill="#274C5B"
			/>
			<path
				d="M14.8638 6.1326C14.6254 6.1326 14.3924 6.06454 14.1942 5.93702C13.996 5.8095 13.8416 5.62824 13.7504 5.41618C13.6591 5.20412 13.6353 4.97078 13.6818 4.74565C13.7283 4.52053 13.8431 4.31374 14.0116 4.15144C14.1802 3.98913 14.3949 3.8786 14.6287 3.83382C14.8625 3.78904 15.1048 3.81203 15.325 3.89986C15.5452 3.9877 15.7334 4.13645 15.8659 4.3273C15.9983 4.51815 16.069 4.74253 16.069 4.97206C16.0693 5.12456 16.0384 5.27562 15.9779 5.41657C15.9175 5.55752 15.8287 5.68559 15.7167 5.79342C15.6048 5.90125 15.4718 5.98673 15.3254 6.04493C15.179 6.10314 15.0222 6.13293 14.8638 6.1326ZM9.64151 6.90602C10.2772 6.90602 10.8986 7.08754 11.4271 7.42761C11.9556 7.76768 12.3676 8.25104 12.6108 8.81656C12.8541 9.38209 12.9177 10.0044 12.7937 10.6047C12.6697 11.2051 12.3636 11.7565 11.9141 12.1894C11.4646 12.6222 10.892 12.917 10.2685 13.0364C9.64507 13.1558 8.99886 13.0945 8.41158 12.8603C7.82431 12.626 7.32236 12.2293 6.96921 11.7204C6.61606 11.2114 6.42756 10.6131 6.42756 10.0009C6.42847 9.18038 6.76738 8.39369 7.36991 7.81347C7.97245 7.23325 8.7894 6.9069 9.64151 6.90602ZM9.64151 5.35877C8.68806 5.35877 7.75603 5.63103 6.96327 6.14112C6.17051 6.65121 5.55263 7.37621 5.18776 8.22446C4.82289 9.0727 4.72742 10.0061 4.91343 10.9066C5.09944 11.8071 5.55857 12.6342 6.23275 13.2834C6.90694 13.9327 7.76591 14.3748 8.70104 14.5539C9.63616 14.733 10.6054 14.6411 11.4863 14.2897C12.3672 13.9384 13.1201 13.3434 13.6498 12.58C14.1795 11.8166 14.4622 10.9191 14.4622 10.0009C14.4622 8.76976 13.9543 7.58901 13.0503 6.71843C12.1462 5.84786 10.92 5.35877 9.64151 5.35877Z"
				fill="#274C5B"
			/>
		</svg>
	);
}

function Facebook({ width, height }: Pick<Props, 'height' | 'width'>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 20 20"
			fill="none"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19.2828 10.0001C19.2828 4.87304 14.9657 0.71582 9.64141 0.71582C4.31711 0.71582 0 4.87304 0 10.0001C0 14.634 3.52514 18.475 8.13494 19.1721V12.6847H5.68628V10.0001H8.13494V7.95469C8.13494 5.62822 9.5747 4.34209 11.7767 4.34209C12.8317 4.34209 13.9353 4.52364 13.9353 4.52364V6.80866H12.7189C11.5219 6.80866 11.1475 7.52405 11.1475 8.25933V10.0001H13.8212L13.3942 12.6847H11.1479V19.173C15.7577 18.4762 19.2828 14.6353 19.2828 10.0001Z"
				fill="#274C5B"
			/>
		</svg>
	);
}

function Twitter({ width, height }: Pick<Props, 'height' | 'width'>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 21 18"
			fill="none"
		>
			<path
				d="M20.6602 2.67424C19.8852 3.01098 19.0652 3.23283 18.2261 3.33278C19.1079 2.81644 19.7711 1.99614 20.0912 1.02573C19.2575 1.51322 18.3469 1.85527 17.3984 2.03722C16.9991 1.61865 16.5187 1.28566 15.9866 1.0585C15.4546 0.831346 14.8818 0.714758 14.3033 0.715828C11.9609 0.715828 10.0654 2.58385 10.0654 4.8866C10.0637 5.2069 10.1004 5.52625 10.1747 5.83783C8.49507 5.75909 6.85036 5.33061 5.34581 4.57982C3.84126 3.82903 2.50999 2.77244 1.43717 1.47767C1.0608 2.11216 0.861758 2.8361 0.86084 3.57382C0.86084 5.02003 1.61537 6.29838 2.75469 7.04731C2.07967 7.03129 1.41849 6.85263 0.827268 6.5265V6.57815C0.827268 8.60112 2.2907 10.2841 4.22759 10.6671C3.86336 10.7642 3.48803 10.8134 3.11108 10.8135C2.84361 10.814 2.57674 10.788 2.31437 10.736C2.85283 12.3931 4.41999 13.5983 6.27639 13.6327C4.76793 14.7953 2.91593 15.4236 1.01149 15.419C0.673443 15.4185 0.335713 15.3984 0 15.3587C1.9374 16.5958 4.18947 17.2502 6.48815 17.244C14.2943 17.244 18.5589 10.8867 18.5589 5.37297C18.5589 5.1922 18.5541 5.01142 18.5455 4.83495C19.3733 4.24616 20.0893 3.51447 20.6602 2.67424Z"
				fill="#274C5B"
			/>
		</svg>
	);
}

function Pintrest({ width, height }: Pick<Props, 'height' | 'width'>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 20 21"
			fill="none"
		>
			<path
				d="M9.79664 0.71582C4.38662 0.71582 0 5.10048 0 10.5081C0 14.5168 2.41417 17.9616 5.86486 19.4785C5.83862 18.7965 5.86049 17.9747 6.03543 17.2315C6.22349 16.4359 7.295 11.8939 7.295 11.8939C7.295 11.8939 6.9801 11.2687 6.9801 10.3463C6.9801 8.89499 7.81982 7.81084 8.86946 7.81084C9.76165 7.81084 10.1903 8.47969 10.1903 9.27968C10.1903 10.1758 9.61732 11.5135 9.3243 12.7551C9.07938 13.7955 9.84475 14.6392 10.8725 14.6392C12.7269 14.6392 13.9777 12.2567 13.9777 9.43269C13.9777 7.28626 12.5301 5.6819 9.9016 5.6819C6.932 5.6819 5.07763 7.89827 5.07763 10.3726C5.07763 11.225 5.3313 11.8283 5.72491 12.2917C5.90422 12.5059 5.93046 12.5933 5.86486 12.8381C5.81675 13.0174 5.71179 13.4501 5.66368 13.625C5.59808 13.8742 5.3969 13.9616 5.17385 13.8698C3.80494 13.3102 3.16641 11.8152 3.16641 10.1278C3.16641 7.34746 5.51498 4.01197 10.1684 4.01197C13.9077 4.01197 16.37 6.71795 16.37 9.62066C16.37 13.4633 14.2314 16.331 11.0824 16.331C10.0241 16.331 9.03128 15.7583 8.69014 15.1113C8.69014 15.1113 8.12159 17.367 7.99913 17.8042C7.79357 18.5605 7.38684 19.3124 7.01509 19.9025C7.91686 20.1684 8.85208 20.3039 9.79226 20.3047C15.2023 20.3047 19.5889 15.9201 19.5889 10.5125C19.5889 5.10485 15.2067 0.71582 9.79664 0.71582Z"
				fill="#274C5B"
			/>
		</svg>
	);
}

function Tractor({ width, height, color }: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 50 50"
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
		>
			<path d="M 5.96875 5 C 4.335938 5 3 6.367188 3 8 L 3 24.40625 C 2.601563 24.683594 2.214844 24.96875 1.84375 25.28125 C 1.394531 25.660156 1.339844 26.332031 1.71875 26.78125 C 2.097656 27.230469 2.769531 27.285156 3.21875 26.90625 C 5.675781 24.839844 8.820313 23.59375 12.28125 23.59375 C 20.089844 23.59375 26.40625 29.914063 26.40625 37.71875 C 26.367188 38.117188 26.558594 38.503906 26.898438 38.714844 C 27.238281 38.929688 27.667969 38.929688 28.007813 38.714844 C 28.347656 38.503906 28.539063 38.117188 28.5 37.71875 C 28.5 37.476563 28.480469 37.238281 28.46875 37 L 32.78125 37 C 31.671875 38.371094 31 40.105469 31 42 C 31 46.40625 34.59375 50 39 50 C 43.40625 50 47 46.40625 47 42 C 47 39.867188 46.148438 37.9375 44.78125 36.5 C 44.980469 36.390625 45.15625 36.257813 45.34375 36.125 C 46.042969 35.617188 46.664063 34.964844 46.96875 34.125 L 49.875 26.1875 C 50.210938 25.273438 49.796875 24.265625 49.1875 23.75 C 48.578125 23.234375 47.835938 23 47.0625 23 L 40.0625 23 L 40.0625 17 C 40.0625 15.09375 40.492188 14.40625 40.71875 14.1875 C 40.832031 14.078125 40.925781 14.074219 40.96875 14.0625 C 41.257813 14.074219 41.535156 13.964844 41.742188 13.765625 C 41.949219 13.566406 42.066406 13.289063 42.0625 13 L 42.0625 11 C 42.066406 10.71875 41.953125 10.445313 41.753906 10.246094 C 41.554688 10.046875 41.28125 9.933594 41 9.9375 C 39.710938 9.9375 38.007813 10.171875 36.53125 11.1875 C 35.054688 12.203125 33.9375 14.058594 33.9375 16.8125 L 33.9375 23 L 28.78125 23 L 24.65625 7.78125 C 24.652344 7.757813 24.628906 7.742188 24.625 7.71875 C 24.480469 7.078125 24.214844 6.453125 23.75 5.9375 C 23.269531 5.402344 22.511719 5 21.6875 5 Z M 5.96875 7 L 21.6875 7 C 21.949219 7 22.109375 7.058594 22.28125 7.25 C 22.453125 7.441406 22.601563 7.789063 22.6875 8.1875 C 22.695313 8.207031 22.707031 8.230469 22.71875 8.25 L 27.0625 24.25 C 27.175781 24.691406 27.574219 25 28.03125 25 L 34.625 25 C 34.855469 25.082031 35.113281 25.082031 35.34375 25 L 38.625 25 C 38.855469 25.082031 39.113281 25.082031 39.34375 25 L 47.0625 25 C 47.378906 25 47.753906 25.152344 47.90625 25.28125 C 48.058594 25.410156 48.035156 25.320313 47.96875 25.5 L 45.09375 33.4375 C 45 33.691406 44.609375 34.171875 44.15625 34.5 C 43.703125 34.828125 43.167969 35 42.96875 35 L 28.25 35 C 26.949219 27.351563 20.296875 21.5 12.28125 21.5 C 9.664063 21.5 7.195313 22.121094 5 23.21875 L 5 8 C 5 7.4375 5.429688 7 5.96875 7 Z M 7.8125 9 C 7.335938 9.089844 6.992188 9.511719 7 10 L 7 19 C 7 19.550781 7.449219 20 8 20 L 22.90625 20 C 23.214844 20 23.507813 19.855469 23.695313 19.613281 C 23.886719 19.367188 23.953125 19.050781 23.875 18.75 L 21.4375 9.75 C 21.324219 9.308594 20.925781 9 20.46875 9 L 8 9 C 7.96875 9 7.9375 9 7.90625 9 C 7.875 9 7.84375 9 7.8125 9 Z M 9 11 L 19.71875 11 L 21.625 18 L 9 18 Z M 39.9375 12.1875 L 39.9375 12.3125 C 39.714844 12.425781 39.503906 12.472656 39.28125 12.6875 C 38.507813 13.429688 37.9375 14.757813 37.9375 17 L 37.9375 23 L 36.0625 23 L 36.0625 16.8125 C 36.0625 14.574219 36.777344 13.554688 37.71875 12.90625 C 38.363281 12.460938 39.15625 12.292969 39.9375 12.1875 Z M 12 26 C 5.386719 26 0 31.386719 0 38 C 0 44.613281 5.386719 50 12 50 C 18.613281 50 24 44.613281 24 38 C 24 31.386719 18.613281 26 12 26 Z M 12 28 C 17.53125 28 22 32.46875 22 38 C 22 43.53125 17.53125 48 12 48 C 11.65625 48 11.304688 47.972656 10.96875 47.9375 C 10.632813 47.902344 10.292969 47.878906 9.96875 47.8125 C 5.40625 46.882813 2 42.839844 2 38 C 2 37.652344 2.027344 37.304688 2.0625 36.96875 C 2.574219 31.917969 6.816406 28 12 28 Z M 11.90625 32.5 C 11.875 32.507813 11.84375 32.519531 11.8125 32.53125 C 11.75 32.535156 11.6875 32.546875 11.625 32.5625 C 11.613281 32.574219 11.605469 32.582031 11.59375 32.59375 C 8.769531 32.816406 6.5 35.121094 6.5 38 C 6.5 41.023438 8.976563 43.5 12 43.5 C 15.023438 43.5 17.5 41.023438 17.5 38 C 17.5 35.144531 15.265625 32.847656 12.46875 32.59375 C 12.433594 32.589844 12.410156 32.566406 12.375 32.5625 C 12.273438 32.523438 12.167969 32.503906 12.0625 32.5 C 12.042969 32.5 12.019531 32.5 12 32.5 C 11.96875 32.5 11.9375 32.5 11.90625 32.5 Z M 11.9375 34.5 C 11.957031 34.5 11.980469 34.5 12 34.5 C 13.941406 34.5 15.5 36.0625 15.5 38 C 15.5 39.9375 13.9375 41.5 12 41.5 C 10.0625 41.5 8.5 39.9375 8.5 38 C 8.5 36.082031 10.027344 34.535156 11.9375 34.5 Z M 35.625 37 L 38.90625 37 C 38.875 37.007813 38.84375 37.019531 38.8125 37.03125 C 38.75 37.035156 38.6875 37.046875 38.625 37.0625 C 38.613281 37.074219 38.605469 37.082031 38.59375 37.09375 C 36.042969 37.3125 34 39.398438 34 42 C 34 44.746094 36.253906 47 39 47 C 41.746094 47 44 44.746094 44 42 C 44 39.417969 41.988281 37.34375 39.46875 37.09375 C 39.433594 37.089844 39.410156 37.066406 39.375 37.0625 C 39.316406 37.035156 39.25 37.015625 39.1875 37 L 42.375 37 C 42.414063 37.046875 42.453125 37.085938 42.5 37.125 C 44.019531 38.214844 45 39.984375 45 42 C 45 45.320313 42.320313 48 39 48 C 35.679688 48 33 45.320313 33 42 C 33 40.070313 33.898438 38.347656 35.3125 37.25 C 35.433594 37.1875 35.539063 37.105469 35.625 37 Z M 39 39 C 40.660156 39 42 40.335938 42 42 C 42 43.664063 40.660156 45 39 45 C 37.335938 45 36 43.660156 36 42 C 36 40.339844 37.335938 39 39 39 Z" />
		</svg>
	);
}

function Factory({ width, height, color }: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 50 50"
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
		>
			<path d="M 37.03125 1.988281 C 36.667969 1.980469 36.324219 2.171875 36.140625 2.484375 C 36.140625 2.484375 33.523438 7 27 7 C 26.640625 6.996094 26.304688 7.183594 26.121094 7.496094 C 25.941406 7.808594 25.941406 8.191406 26.121094 8.503906 C 26.304688 8.816406 26.640625 9.003906 27 9 C 34.476563 9 37.859375 3.515625 37.859375 3.515625 C 38.046875 3.210938 38.054688 2.828125 37.886719 2.511719 C 37.714844 2.199219 37.390625 1.996094 37.03125 1.988281 Z M 28 2 C 24.085938 2 21.554688 4.214844 20.859375 4.863281 C 20.207031 4.566406 18.824219 4 17 4 C 13.554688 4 11.292969 6.292969 11.292969 6.292969 C 11.03125 6.542969 10.925781 6.917969 11.019531 7.265625 C 11.109375 7.617188 11.382813 7.890625 11.734375 7.980469 C 12.082031 8.074219 12.457031 7.96875 12.707031 7.707031 C 12.707031 7.707031 14.445313 6 17 6 C 18.667969 6 20.550781 6.894531 20.550781 6.894531 L 21.199219 7.21875 L 21.707031 6.707031 C 21.707031 6.707031 24.5 4 28 4 C 28.359375 4.003906 28.695313 3.816406 28.878906 3.503906 C 29.058594 3.191406 29.058594 2.808594 28.878906 2.496094 C 28.695313 2.183594 28.359375 1.996094 28 2 Z M 38 9.734375 L 37.386719 10.210938 L 28 17.511719 L 28 25 L 15.9375 25 L 14.9375 10 L 8.0625 10 L 7.0625 25 L 2 25 L 2 48 L 48 48 L 48 17.511719 Z M 9.9375 12 L 13.0625 12 L 13.933594 25 L 11 25 L 11 27 L 30 27 L 30 18.488281 L 38 12.265625 L 46 18.488281 L 46 46 L 4 46 L 4 27 L 8.9375 27 Z M 33 23 L 33 27 L 35 27 L 35 23 Z M 37 23 L 37 27 L 39 27 L 39 23 Z M 41 23 L 41 27 L 43 27 L 43 23 Z M 7 30 L 7 32 L 11 32 L 11 30 Z M 13 30 L 13 32 L 17 32 L 17 30 Z M 19 30 L 19 32 L 23 32 L 23 30 Z M 25 30 L 25 32 L 29 32 L 29 30 Z M 33 30 L 33 34 L 35 34 L 35 30 Z M 37 30 L 37 34 L 39 34 L 39 30 Z M 41 30 L 41 34 L 43 34 L 43 30 Z M 33 37 L 33 41 L 35 41 L 35 37 Z M 37 37 L 37 41 L 39 41 L 39 37 Z M 41 37 L 41 41 L 43 41 L 43 37 Z" />
		</svg>
	);
}

function Eclipse({ width, height }: Pick<Props, 'height' | 'width'>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 19 19"
			fill="none"
		>
			<circle cx="9.5" cy="9.5" r="9.5" fill="#7EB693" />
			<circle cx="9.5" cy="9.5" r="5.5" fill="#ECECEC" />
		</svg>
	);
}

function ShippingCart({ width, height, color }: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z" />
		</svg>
	);
}

function Leaf({ width, height, color }: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<path d="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z" />
		</svg>
	);
}

function Clock({ width, height, color }: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
		</svg>
	);
}

function CreditCard({ width, height, color }: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z" />
		</svg>
	);
}

function EnvelopeSimple({ width, height, color }: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z" />
		</svg>
	);
}

function Phone({ width, height, color }: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z" />
		</svg>
	);
}

function MapPin({ width, height, color }: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" />
		</svg>
	);
}

export const Icons = {
	Arrow,
	ArrowDown,
	Search,
	Cart,
	Star,
	User,
	Instagram,
	Facebook,
	Twitter,
	Pintrest,
	Tractor,
	Factory,
	Eclipse,
	ShippingCart,
	Leaf,
	Clock,
	CreditCard,
	EnvelopeSimple,
	Phone,
	MapPin,
};
