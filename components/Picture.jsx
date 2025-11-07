function Picture({
	desktopSrc,
	tabletSrc,
	mobileSrc,
	alt,
	className = "",
	loading = "lazy",
}) {
	return (
		<picture className={className}>
			<source media="(min-width: 1200px)" srcset={desktopSrc} />
			<source media="(min-width: 760px)" srcset={tabletSrc} />
			<img src={mobileSrc} alt={alt} loading={loading} />
		</picture>
	);
}

export default Picture;
