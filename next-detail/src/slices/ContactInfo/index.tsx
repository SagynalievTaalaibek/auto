'use client';

import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import React, { FC, useState } from 'react';

import {
	AccessTime,
	Email,
	Instagram,
	LocationOn,
	Phone,
	Telegram,
	WhatsApp,
} from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import Image from 'next/image';
import Link from 'next/link';

export type ContactInfoProps = SliceComponentProps<Content.ContactInfoSlice>;

const iconMap = {
	telegram: Telegram,
	whatsapp: WhatsApp,
	instagram: Instagram,
};

const ContactInfo: FC<ContactInfoProps> = ({ slice }) => {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		message: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<Box
			component="section"
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			sx={{
				px: { xs: 2, md: 6 },
				py: 8,
				mx: 'auto',
				backgroundColor: '#000',
				color: '#fff',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-around',
					flexWrap: 'wrap',
					gap: 4,
				}}
			>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<LocationOn sx={{ color: '#FFD700' }} />
						<Typography ml={1}>{slice.primary.address}</Typography>
					</Box>

					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Phone sx={{ color: '#FFD700' }} />
						<Typography
							ml={1}
							component={Link}
							href={`tel:${slice.primary.phone}`}
							sx={{ color: '#FFD700', textDecoration: 'none' }}
						>
							{slice.primary.phone}
						</Typography>
					</Box>

					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Email sx={{ color: '#FFD700' }} />
						<Typography
							ml={1}
							component={Link}
							href={`mailto:${slice.primary.email}`}
							sx={{ color: '#FFD700', textDecoration: 'none' }}
						>
							{slice.primary.email}
						</Typography>
					</Box>

					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<AccessTime sx={{ color: '#FFD700' }} />
						<PrismicRichText
							field={slice.primary.working_hours}
							components={{
								paragraph: ({ children }) => (
									<Typography ml={1}>{children}</Typography>
								),
							}}
						/>
					</Box>
				</Box>

				<Box
					sx={{
						width: 180,
						height: 180,
						borderRadius: '50%',
						overflow: 'hidden',
						display: { xs: 'none', md: 'block' },
						border: '3px solid #FFD700',
					}}
				>
					<Image
						src="/logo.png"
						alt="Логотип"
						width={180}
						height={180}
						style={{ objectFit: 'cover' }}
					/>
				</Box>
			</Box>

			<Box
				sx={{
					mt: 5,
					display: 'flex',
					flexWrap: 'wrap',
					gap: 2,
					justifyContent: { xs: 'flex-start', md: 'center' },
				}}
			>
				{slice.primary.items.map((item, idx) => {
					const Icon = iconMap[item.platform as keyof typeof iconMap];
					return (
						<PrismicNextLink
							key={`${idx}-social`}
							field={item.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Box
								sx={{
									width: 40,
									height: 40,
									borderRadius: '50%',
									bgcolor: '#FFD700',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									transition: 'transform 0.3s',
									color: '#000',
									'&:hover': {
										transform: 'scale(1.1)',
										bgcolor: '#FFC107',
									},
								}}
							>
								<Icon fontSize="medium" />
							</Box>
						</PrismicNextLink>
					);
				})}
			</Box>

			{slice.primary.map_embed_url && (
				<Box sx={{ my: 5 }}>
					<Box
						component="iframe"
						src={slice.primary.map_embed_url as string}
						width="100%"
						height={450}
						sx={{ border: 0 }}
						loading="lazy"
					/>
				</Box>
			)}

			<Box sx={{ mt: 4 }}>
				<Typography variant="h5" gutterBottom sx={{ color: '#FFD700' }}>
					Обратная связь
				</Typography>
				<Box component="form" onSubmit={handleSubmit}>
					<TextField
						fullWidth
						margin="normal"
						label="Ваше имя"
						name="name"
						onChange={handleChange}
						variant="filled"
						sx={{
							backgroundColor: '#1a1a1a',
							input: { color: '#fff' },
							label: { color: '#aaa' },
						}}
					/>
					<TextField
						fullWidth
						margin="normal"
						label="Телефон"
						name="phone"
						onChange={handleChange}
						variant="filled"
						sx={{
							backgroundColor: '#1a1a1a',
							input: { color: '#fff' },
							label: { color: '#aaa' },
						}}
					/>
					<TextField
						fullWidth
						margin="normal"
						label="Сообщение"
						name="message"
						multiline
						rows={4}
						onChange={handleChange}
						variant="filled"
						sx={{
							backgroundColor: '#1a1a1a',
							input: { color: '#fff' },
							label: { color: '#aaa' },
						}}
					/>
					<Button
						variant="contained"
						type="submit"
						sx={{
							mt: 2,
							backgroundColor: '#FFD700',
							color: '#000',
							fontWeight: 'bold',
							'&:hover': {
								backgroundColor: '#FFC107',
							},
						}}
					>
						Отправить
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default ContactInfo;
