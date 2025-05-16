import { SliceZone } from '@prismicio/react';

import { notFound } from 'next/navigation';

import { createClient } from '@/prismicio';
import { components } from '@/slices';

export default async function Page() {
	const client = createClient();
	const page = await client
		.getByUID('services', 'services', { fetchOptions: { cache: 'no-cache' } })
		.catch(() => notFound());

	return (
		<div style={{ marginTop: '68px' }}>
			<SliceZone slices={page.data.slices} components={components} />
		</div>
	);
}
