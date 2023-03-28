import { Button } from '~/Components/Button';

function Input({
	label,
	id,
	placeholder,
}: {
	label: string;
	id: string;
	placeholder: string;
}) {
	return (
		<label htmlFor={id} className="flex flex-col gap-4 font-bold">
			{label}
			<input
				id={id}
				placeholder={placeholder}
				className="border border-green-500 p-5 rounded-xl font-normal"
			/>
		</label>
	);
}

export function Form() {
	return (
		<form className="p-2 md:p-20 grid grid-cols-12 gap-6">
			<div className="col-span-6 ">
				<Input label="Full Name*" id="fullName" placeholder="Your Full Name" />
			</div>
			<div className="col-span-6 ">
				<Input
					label="Your Email*"
					id="email"
					placeholder="example@yourmail.com"
				/>
			</div>
			<div className="col-span-6 ">
				<Input label="Company*" id="company" placeholder="Your Company Name" />
			</div>
			<div className="col-span-6 ">
				<Input label="Subject*" id="subject" placeholder="How Can We Help" />
			</div>
			<div className="col-span-12 ">
				<label htmlFor="message" className="flex flex-col gap-4 font-bold">
					Message*
					<textarea
						id="message"
						placeholder="hello there, I would like to talk about how to..."
						className="border border-green-500 p-5 rounded-xl font-normal"
					/>
				</label>
			</div>

			<Button hideIcon>Send Message</Button>
		</form>
	);
}
