import Picture from "./Picture";
import ReviewArticle from "./ReviewArticle";

function Review() {
	return (
		<section>
			<Picture
				desktopSrc="/Images/Desktop/marshmallow.png"
				tabletSrc="/Images/Tablet/marshmallow.png"
				mobileSrc="/Images/Mobile/marshmallow.png"
				alt="Some beautiful marshmallow like stone"
			/>
			<ReviewArticle />
		</section>
	);
}

export default Review;
