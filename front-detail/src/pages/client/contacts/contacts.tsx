import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
	AccessTime,
	Email,
	Instagram,
	LocationOn,
	Phone,
	Telegram,
	WhatsApp,
} from '@mui/icons-material';
import { Button, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { FormQuestion } from '../../../components/client/form-question/form-question.tsx';

const CONTACTS = {
	title: 'Контакты детейлинг-центра',
	sub_title: 'Всегда на связи — заботимся о вашем авто',
	address: 'Бишкек, ул. Тоголок Молдо 25',
	phone: '+996 700 123 456',
	email: 'contact@detailing.kg',
	working_hours: 'Пн–Сб: 9:00 – 20:00 / Вс: выходной',
	items: [
		{ platform: 'telegram', url: 'https://t.me/thetechkz' },
		{ platform: 'whatsapp', url: 'https://web.whatsapp.com/' },
		{ platform: 'instagram', url: 'https://www.instagram.com/' },
	],
	map_url:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.320321368569!2d74.58490727654616!3d42.84496910432818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9dbdc3d4eef%3A0x6a75a5244d9c79f8!2z0JrQk9Ci0KMg0LjQvC4g0JguINCg0LDQt9C30LDQutC-0LLQsA!5e0!3m2!1sru!2skg!4v1748156728783!5m2!1sru!2skg',
};

const iconMap = {
	telegram: Telegram,
	whatsapp: WhatsApp,
	instagram: Instagram,
};

export const Contacts = () => {
	const [open, setOpen] = useState(false);

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
						mt: 4,
					}}
				>
					{CONTACTS.title}
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
					{CONTACTS.sub_title}
				</Typography>

				<Button
					variant="contained"
					sx={{
						color: 'black',
						px: 3,
						py: 1.5,
						backgroundColor: '#FFD700',
						'&:hover': { fontWeight: 600 },
					}}
					onClick={() => setOpen(true)}
				>
					Задать вопрос
				</Button>

				<Box
					component="section"
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
								<Typography ml={1}>{CONTACTS.address}</Typography>
							</Box>

							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								<Phone sx={{ color: '#FFD700' }} />
								<Typography
									ml={1}
									component={Link}
									to={`tel:${CONTACTS.phone}`}
									sx={{ color: '#fff', textDecoration: 'none' }}
								>
									{CONTACTS.phone}
								</Typography>
							</Box>

							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								<Email sx={{ color: '#FFD700' }} />
								<Typography
									ml={1}
									component={Link}
									to={`mailto:${CONTACTS.email}`}
									sx={{ color: '#fff', textDecoration: 'none' }}
								>
									{CONTACTS.email}
								</Typography>
							</Box>

							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								<AccessTime sx={{ color: '#FFD700' }} />
								<Typography>{CONTACTS.working_hours}</Typography>
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
							<img
								src={'/logo.png'}
								alt={'detail logo'}
								width={180}
								height={180}
								style={{ objectFit: 'cover' }}
							/>
						</Box>
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
					{CONTACTS.items.map((item, idx) => {
						const Icon = iconMap[item.platform as keyof typeof iconMap];
						return (
							<Link
								key={`${idx}-social`}
								to={item.url}
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
							</Link>
						);
					})}
				</Box>

				<Box sx={{ my: 5 }}>
					<Box
						component="iframe"
						src={CONTACTS.map_url as string}
						width="100%"
						height={450}
						sx={{ border: 0 }}
						loading="lazy"
					/>
				</Box>
			</Box>

			<FormQuestion open={open} setOpen={setOpen} />
		</Box>
	);
};
