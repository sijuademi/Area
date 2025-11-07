import styles from "./NavBar.module.css";
import { useState } from "react";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

function NavBar() {
	const [nav, setNav] = useState(false);
	const [menu, setMenu] = useState(true);

	function handleClick() {
		setNav((nav) => !nav);
	}
	return (
		<nav className={styles.navbar}>
			<div className={`${styles.navbar_top} ${!nav ? styles.round : ""}`}>
				{menu && (
					<>
						<Logo type="text" text="Area" className={styles.logo} />
						<Button className={`${styles.btn_menu} icon`} onClick={handleClick}>
							{nav ? (
								<span className="material-symbols-outlined">close</span>
							) : (
								<span className="material-symbols-outlined">menu</span>
							)}
						</Button>
					</>
				)}
			</div>
			{nav && (
				<div className={styles.navbar_bottom}>
					<Nav />

					{/* <Button className={`btn-learn btn`}> */}
					<Button className="btn btn-learn">
						learn more{" "}
						<span className={`material-symbols-outlined icon`}>call_made</span>
					</Button>
				</div>
			)}
		</nav>
	);
}

export default NavBar;
