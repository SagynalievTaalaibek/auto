import { useState } from 'react';

import { Edit as EditIcon, Email, Phone } from '@mui/icons-material';
import {
	Box,
	Button,
	Paper,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';

export function SettingsPage() {
	const [centerName, setCenterName] = useState('Детейлинг Центр');
	const [logoUrl, setLogoUrl] = useState('');
	const [workingHours, setWorkingHours] = useState('9:00 - 18:00');

	const handleSave = () => {
		console.log({
			centerName,
			logoUrl,
			workingHours,
		});
	};

	return (
		<Box sx={{ py: 3, width: '100%' }}>
			<Paper sx={{ p: 3, mb: 4 }}>
				<Typography variant="h6" mb={2}>
					Информация о центре
				</Typography>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
					<TextField
						label="Название центра"
						value={centerName}
						onChange={e => setCenterName(e.target.value)}
						fullWidth
					/>
					<TextField
						label="URL логотипа"
						value={logoUrl}
						onChange={e => setLogoUrl(e.target.value)}
						placeholder="https://example.com/logo.png"
						fullWidth
					/>
					<TextField
						label="Часы работы"
						value={workingHours}
						onChange={e => setWorkingHours(e.target.value)}
						helperText="Например: 9:00 - 18:00"
						fullWidth
					/>
				</Box>
			</Paper>

			<Paper sx={{ p: 3, mb: 4 }}>
				<Typography variant="h6" mb={2}>
					Мои данные
				</Typography>
				<Stack spacing={1}>
					<Stack direction="row" alignItems="center" spacing={1}>
						<Phone fontSize="small" />
						<Typography>+996505601100</Typography>
						<IconButton size="small">
							<EditIcon fontSize="small" />
						</IconButton>
					</Stack>
					<Stack direction="row" alignItems="center" spacing={1}>
						<Email fontSize="small" />
						<Typography>sagynalievv.t@gmail.com</Typography>
						<IconButton size="small">
							<EditIcon fontSize="small" />
						</IconButton>
					</Stack>
				</Stack>
			</Paper>

			<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
				<Button variant="contained" color="primary" onClick={handleSave}>
					Сохранить настройки
				</Button>
			</Box>
		</Box>
	);
}
