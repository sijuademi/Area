import Logo from "./Logo";
import styles from "./Logos.module.css";

function Logos() {
	return (
		<div className={styles.logos}>
			<p>Trusted by:</p>
			<ul>
				<li class="logo">
					<Logo src="/Images/Logos/logo-1.png" alt="first logo" />
				</li>
				<li class="logo">
					<Logo src="/Images/Logos/logo-2.png" alt="second logo" />
				</li>
				<li class="logo">
					<Logo src="/Images/Logos/logo-3.svg" alt="third logo" />
				</li>
				<li class="logo">
					<Logo src="/Images/Logos/Logo.png" alt="fourth Logos" />
				</li>
				<li class="logo">
					<Logo src="/Images/Logos/logo-4.svg" alt="fifth logo" />
				</li>
				<li class="logo">
					<Logo src="/Images/Logos/logo-5.svg" alt="sixth logo" />
				</li>
			</ul>
		</div>
	);
}

export default Logos;
