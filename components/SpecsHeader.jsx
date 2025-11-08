import styles from "./SpecsHeader.module.css";
import Button from "./Button";

function SpecsHeader() {
	return (
		<div className={styles.specsheader}>
			<p>specs</p>
			<h2>why chose area?</h2>
			<p>
				You need a solution that keeps up. That’s why we developed Area. A
				developer-friendly approach to streamline your business.
			</p>
			<Button variant="secondary" className="btn">
				discover more
			</Button>
		</div>
	);
}

export default SpecsHeader;
