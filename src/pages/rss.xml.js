export async function GET(context) {
	const target = new URL('/en/rss.xml', context.site);
	return new Response(null, {
		status: 301,
		headers: {
			Location: target.toString(),
		},
	});
}
