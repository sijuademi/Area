import styles from "./WebSurge.module.css";
function WebSurge() {
	return (
		<article className={styles.websurge}>
			<h2>WebSurge</h2>
			<ul>
				<li>fast browsing</li>
				<li>
					basic <span class="ai">AI</span> recommendations
				</li>
				<li>restricts customization</li>
				<li className={styles.close}>
					basic <span class="ai">AI</span> insights
				</li>
				<li>fast browsing</li>
				<li className={styles.close}>potential display errors</li>
			</ul>
		</article>
	);
}

export default WebSurge;
