import styles from "./BigPicture.module.css";
import Button from "./Button";

function BigPicture() {
	return (
		<article className={styles.bigpicture}>
			<h2>
				see <span>the</span> big picture
			</h2>
			<p>
				Area turns your data into clear, vibrant visuals that show you exactly
				what's happening in each region.
			</p>
			<hr />
			<article>
				<span>01 </span>
				<p>Spot Trends in Seconds: No more digging through numbers</p>
			</article>
			<hr />
			<article>
				<span>02</span>
				<p>
					Get Everyone on the Same Page: Share easy-to-understand reports with
					your team.
				</p>
			</article>
			<hr />
			<article>
				<span>03</span>
				<p>
					Make Presentations Pop: Interactive maps and dashboards keep your
					audience engaged.
				</p>
			</article>
			<hr />
			<article>
				<span>04</span>
				<p>
					Your Global Snapshot: Get a quick, clear overview of your entire
					operation.
				</p>
			</article>

			<div>
				<Button className="btn btn-discover">discover more</Button>
			</div>
		</article>
	);
}

export default BigPicture;
