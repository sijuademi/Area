import styles from "./Contact.module.css";
import Button from "./Button";

function Contact() {
	return (
		<section className={styles.cta} id="cta">
			<h2>Connect with us</h2>
			<p>
				Schedule a quick call to learn how Area can turn your regional data into
				a powerful advantage.
			</p>

			<Button variant="primary" className={`${styles.btn_how} btn`}>
				learn more <span class="material-symbols-outlined"> call_made </span>
			</Button>
		</section>
	);
}

export default Contact;
