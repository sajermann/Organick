import { HeaderPage } from '~/Components/HeaderPage';
import { Footer } from '~/Components/Footer';
import { Form } from '~/Components/Contact/Form';
import { Location } from '~/Components/Contact/Location';
import { OurContacts } from '~/Components/Contact/OurContacts';

export function Contact() {
	return (
		<>
			<HeaderPage
				heading="Contact Us"
				className="bg-[url('~/Assets/contactPage-headerBanner.png')]"
			/>

			<OurContacts />

			<Location />

			<Form />

			<Footer />
		</>
	);
}
