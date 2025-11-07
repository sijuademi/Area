function Logo({ type, text, alt, src, className }) {
	if (type === "text") return <h1 className={className}>{text}</h1>;
	return <img src={src} alt={alt} className={className} />;
}

export default Logo;
