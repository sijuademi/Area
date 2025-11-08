import styles from "./Footer.module.css";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

function Footer() {
	return (
		<footer className={styles.footer}>
			<Nav hide="hide" variant="footer_links" />
			<div className={styles.footer_flex}>
				<div className={styles.footer_logo}>
					<Logo src="/Images/Logos/footer-logo.svg" alt="footer logo" />
					<p>
						&copy; area. <span>2025</span>{" "}
					</p>
				</div>
				<p>all rights reserved</p>
			</div>
		</footer>
	);
}

export default Footer;
