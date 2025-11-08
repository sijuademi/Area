import styles from "./Specifications.module.css";
import Area from "./Area";
import Hyperview from "./Hyperview";
import Review from "./Review";
import SpecsHeader from "./SpecsHeader";
import WebSurge from "./WebSurge";

function Specifications() {
	return (
		<section id="specifications">
			<SpecsHeader />
			<article className={styles.specifications}>
				<Area />
				<WebSurge />
				<Hyperview />
			</article>
			<Review />
		</section>
	);
}

export default Specifications;
