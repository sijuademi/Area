import React from "react";
// eslint-disable-next-line no-unused-vars
import styles from "./Button.module.css";
// Basic reusable Button component. Move global font imports into index.html
// or a CSS file (e.g. public/index.html or src/index.css) instead of JS.
const Button = ({ children, onClick, className = "", variant = "" }) => {
	const classes = `${styles.btn} ${styles[variant] || ""} ${className}`;
	return (
		<button type="button" className={classes} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
