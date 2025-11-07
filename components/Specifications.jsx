import Area from "./Area";
import Hyperview from "./Hyperview";
import Review from "./Review";
import SpecsHeader from "./SpecsHeader";
import WebSurge from "./WebSurge";

function Specifications() {
	return (
		<section id="specifications">
			<SpecsHeader />
			<article>
				<Area />
				<WebSurge />
				<Hyperview />
				<Review />
			</article>
		</section>
	);
}

export default Specifications;
