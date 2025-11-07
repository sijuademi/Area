import Picture from "./Picture";

function FeaturesImage() {
	return (
		<aside>
			<Picture
				desktopSrc="/Images/Desktop/stones.png"
				tabletSrc="/Images/Tablet/stones.png"
				mobileSrc="/Images/Mobile/stones.png"
				alt="A stack of stones"
			/>
		</aside>
	);
}

export default FeaturesImage;
