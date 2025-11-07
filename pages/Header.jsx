import styles from "./Header.module.css";
import Logos from "../components/Logos";
import Picture from "../components/Picture";

function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.clear}></div>
			<h1>Browse everything</h1>
			<div className={styles.underlay}>
				<Picture
					desktopSrc="/Images/Desktop/banner-image.jpg"
					tabletSrc="/Images/Tablet/banner.png"
					mobileSrc="/Images/Mobile/banner.png"
					alt="Our banner image"
				/>
			</div>
			<Logos />
			<hr />
		</div>
	);
}

export default Header;
