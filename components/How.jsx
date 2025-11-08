import Button from "./Button";
import styles from "./How.module.css";
import HowToSteps from "./HowToSteps";
import Picture from "./Picture";

function How() {
	return (
		<section className={styles.how} id="how-to">
			<hr />
			<div>
				<h2>map your success</h2>
				<Button variant="secondary" className="btn">
					discover more
				</Button>
			</div>
			<hr />
			<HowToSteps />
			<div className={styles.imagecontainer}>
				<Picture
					desktopSrc="/Images/Desktop/valley.png"
					tabletSrc="/Images/Tablet/valley.png"
					mobileSrc="/Images/Mobile/valley.png"
					alt="A beautiful valley somewhere in the world"
				/>
			</div>
			<hr />
		</section>
	);
}

export default How;
