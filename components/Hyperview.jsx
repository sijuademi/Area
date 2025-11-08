import styles from "./Hyperview.module.css";

function Hyperview() {
	return (
		<article className={styles.hyperview}>
			<h2>HyperView</h2>
			<ul>
				<li>moderate speeds</li>
				<li>
					no <span class="ai">AI</span> assistance
				</li>
				<li>steep learning curve</li>
				<li>
					no <span class="ai">AI</span> assistance
				</li>
				<li>moderate speeds</li>
				<li>
					partial <span>utf-8</span> support
				</li>
			</ul>
		</article>
	);
}

export default Hyperview;
