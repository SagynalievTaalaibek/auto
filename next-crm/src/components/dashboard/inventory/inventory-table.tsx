'use client';

import React, { useMemo, useState } from 'react';

import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import {
	Box,
	Button,
	MenuItem,
	Paper,
	Select,
	SelectChangeEvent,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Tooltip,
} from '@mui/material';

// --- mock данные ---
const categories = ['Все', 'Химия', 'Пленка', 'Аксессуары'];

// Материал должен содержать category (string), stock и minStockLevel
const mockMaterials = [
	{
		id: 1,
		name: 'Шампунь',
		category: 'Химия',
		stock: 5,
		minStockLevel: 10,
	},
	{
		id: 2,
		name: 'Виниловая пленка',
		category: 'Пленка',
		stock: 20,
		minStockLevel: 5,
	},
	{
		id: 3,
		name: 'Полировальная губка',
		category: 'Аксессуары',
		stock: 2,
		minStockLevel: 3,
	},
];

export function InventoryTable() {
	const [selectedCategory, setSelectedCategory] = useState('Все');

	const filteredMaterials = useMemo(() => {
		if (selectedCategory === 'Все') return mockMaterials;
		return mockMaterials.filter(m => m.category === selectedCategory);
	}, [selectedCategory]);

	const handleCategoryChange = (event: SelectChangeEvent) => {
		setSelectedCategory(event.target.value);
	};

	return (
		<Box>
			<Box sx={{ width: '100%', p: 2 }}>
				{/* Фильтр категории и кнопка добавления */}
				<Box
					sx={{
						display: 'flex',
						gap: 2,
						alignItems: 'center',
						mb: 3,
					}}
				>
					<Select
						value={selectedCategory}
						onChange={handleCategoryChange}
						size="small"
						sx={{ minWidth: 150 }}
					>
						{categories.map(cat => (
							<MenuItem key={cat} value={cat}>
								{cat}
							</MenuItem>
						))}
					</Select>

					<Button variant="contained" color="primary">
						Добавить материал
					</Button>
				</Box>

				{/* Таблица */}
				<TableContainer component={Paper} sx={{ boxShadow: 3 }}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Название</TableCell>
								<TableCell>Категория</TableCell>
								<TableCell>Остаток</TableCell>
								<TableCell>Минимальный остаток</TableCell>
								<TableCell align="right">Действия</TableCell>
							</TableRow>
						</TableHead>

						<TableBody>
							{filteredMaterials.map(material => {
								const lowStock = material.stock < material.minStockLevel;
								return (
									<TableRow
										key={material.id}
										sx={{
											bgcolor: lowStock ? 'rgba(255, 0, 0, 0.1)' : 'inherit',
										}}
									>
										<TableCell>{material.name}</TableCell>
										<TableCell>{material.category}</TableCell>
										<TableCell>
											{material.stock}{' '}
											{lowStock && (
												<Tooltip title="Низкий остаток!">
													<WarningAmberIcon color="error" fontSize="small" />
												</Tooltip>
											)}
										</TableCell>
										<TableCell>{material.minStockLevel}</TableCell>
										<TableCell align="right">
											<Button size="small" variant="outlined" sx={{ mr: 1 }}>
												Редактировать
											</Button>
											<Button
												size="small"
												variant="outlined"
												color="error"
												sx={{ mr: 1 }}
											>
												Списать
											</Button>
											<Button size="small" variant="contained" color="success">
												Поступление
											</Button>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</Box>
	);
}
