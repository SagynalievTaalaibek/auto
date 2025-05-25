import { SliceZone } from '@prismicio/react';

import { Box, Divider, Typography } from '@mui/material';
import { notFound } from 'next/navigation';

import { createClient } from '@/prismicio';
import { components } from '@/slices';

export default async function Page() {
	const client = createClient();
	const page = await client
		.getSingle('contact_page', { fetchOptions: { cache: 'no-cache' } })
		.catch(() => notFound());

	return (
		<Box
			sx={{
				py: 8,
				backgroundColor: '#000',
				color: '#fff',
				minHeight: '100vh',
			}}
		>
			<Box className="container" sx={{ textAlign: 'center' }}>
				<Typography
					variant="h3"
					component="h1"
					gutterBottom
					sx={{
						color: '#FFD700', // Золотой
						fontWeight: 'bold',
						mb: 2,
					}}
				>
					{page.data.title_main}
				</Typography>

				<Divider
					sx={{
						backgroundColor: '#FFD700',
						height: 3,
						margin: '0 auto 40px auto',
						borderRadius: 5,
					}}
				/>

				<Typography variant="h6" sx={{ mb: 5 }}>
					{page.data.sub_title}
				</Typography>

				<SliceZone slices={page.data.slices} components={components} />
			</Box>
		</Box>
	);
}
