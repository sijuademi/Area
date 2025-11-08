import { HashLink } from "react-router-hash-link";
import styles from "./Nav.module.css";
import { useEffect, useState } from "react";

function Nav({ hide = "", variant = "" }) {
	const [activeHash, setActiveHash] = useState("#benefits");

	useEffect(() => {
		const sections = document.querySelectorAll("section[id]");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveHash(`#${entry.target.id}`);
					}
				});
			},
			{ threshold: 0.1 }
		);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, []);
	return (
		<nav className={styles.nav}>
			<HashLink
				smooth
				to="#benefits"
				className={`${styles.link} ${styles[variant]} ${
					activeHash === "#benefits" ? styles.active : ""
				}`}
			>
				benefits
			</HashLink>

			<HashLink
				smooth
				to="#specifications"
				className={`${styles.link} ${styles[variant]} ${
					activeHash === "#specifications" ? styles.active : ""
				}`}
			>
				specifications
			</HashLink>

			<HashLink
				smooth
				to="#how-to"
				className={`${styles.link} ${styles[variant]} ${
					activeHash === "#how-to" ? styles.active : ""
				}`}
			>
				how-to
			</HashLink>

			<HashLink
				smooth
				to="#cta"
				className={`${styles.link} ${styles[hide]} ${
					activeHash === "#cta" ? styles.active : ""
				} ${styles.none}`}
			>
				contact us
			</HashLink>
		</nav>
	);
}

export default Nav;
