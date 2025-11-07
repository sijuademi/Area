import Logo from "../components/Logo";
import Nav from "../components/Nav";

function Footer() {
	return (
		<footer>
			<Nav />
			<div>
				<div>
					<Logo src="/Images/Logos/footer-logo.svg" alt="footer logo" />
					<p>&copy; area. 2025</p>
				</div>
				<p>all rights reserved</p>
			</div>
		</footer>
	);
}

export default Footer;
