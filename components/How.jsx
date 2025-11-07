import HowToSteps from "./HowToSteps";
import Picture from "./Picture";

function How() {
	return (
		<section class="how-it-works" id="how-to">
			<div>
				<h1>map your success</h1>
				<button type="button">discover more</button>
			</div>
			<HowToSteps />
			<Picture
				desktopSrc="/Images/Desktop/valley.png"
				tabletSrc="/Images/Tablet/valley.png"
				mobileSrc="/Images/Mobile/valley.png"
				alt="A beautiful valley somewhere in the world"
			/>
		</section>
	);
}

export default How;
