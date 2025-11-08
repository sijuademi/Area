import styles from "./HowToSteps.module.css";
function HowToSteps() {
	return (
		<article className={styles.howtostep}>
			<article>
				<h2>01</h2>
				<p>get started</p>
				<p>With our intuitive setup, you’re up and running in minutes.</p>
			</article>
			<article>
				<h2>02</h2>
				<p>customize and configure</p>
				<p>Adapt Area to your specific requirements and preferences.</p>
			</article>
			<article>
				<h2>03</h2>
				<p>grow your business</p>
				<p>Make informed decisions to exceed your goals.</p>
			</article>
		</article>
	);
}

export default HowToSteps;
