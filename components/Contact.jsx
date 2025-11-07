import Button from "./Button";

function Contact() {
	return (
		<section className="cta" id="cta">
			<h2>connect with us</h2>
			<p>
				Schedule a quick call to learn how Area can turn your regional data into
				a powerful advantage.
			</p>

			<Button>
				learn more <span class="material-symbols-outlined"> call_made </span>
			</Button>
		</section>
	);
}

export default Contact;
