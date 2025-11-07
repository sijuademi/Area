import styles from "./Benefits.module.css";
import Amplify from "./Amplify";
import BigPicture from "./BigPicture";
import Control from "./Control";
import FeaturesImage from "./FeaturesImage";
import Picture from "./Picture";
import Remove from "./Remove";
import Visualize from "./Visualize";

function Benefits() {
	return (
		<section id="benefits" className={styles.benefits}>
			<p>benefits</p>
			<h2>We've cracked the code</h2>
			<p>area provides real insight, without the data overload</p>
			<hr />
			<article>
				<Amplify />
				<Control />
				<Remove />
				<Visualize />
			</article>
			<Picture
				desktopSrc="/Images/Desktop/canyon.png"
				tabletSrc="/Images/Tablet/canyon.png"
				mobileSrc="/Images/Mobile/canyon.png"
				alt="A beautiful canyon somewhere in the world"
			/>
			<BigPicture />
			<FeaturesImage />
		</section>
	);
}

export default Benefits;
