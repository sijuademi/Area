import styles from "./Review.module.css";
import Picture from "./Picture";
import ReviewArticle from "./ReviewArticle";

function Review() {
	return (
		<section className={styles.review}>
			<div className={styles.imagecontainer}>
				<Picture
					desktopSrc="/Images/Desktop/marshmallow.png"
					tabletSrc="/Images/Tablet/marshmallow.png"
					mobileSrc="/Images/Mobile/marshmallow.png"
					alt="Some beautiful marshmallow like stone"
				/>
			</div>
			<hr />
			<ReviewArticle />
		</section>
	);
}

export default Review;
