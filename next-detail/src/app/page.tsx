import { SliceZone } from '@prismicio/react';

import { notFound } from 'next/navigation';

import { createClient } from '@/prismicio';
import { components } from '@/slices';

export default async function Home() {
	const client = createClient();
	const page = await client
		.getByUID('page', 'home', { fetchOptions: { cache: 'no-cache' } })
		.catch(() => notFound());

	return (
		<div>
			<SliceZone slices={page.data.slices} components={components} />
		</div>
	);
}
