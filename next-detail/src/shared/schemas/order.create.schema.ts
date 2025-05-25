import { z } from 'zod';

const currentYear = new Date().getFullYear();

export const OrderSchema = z.object({
	carBrand: z.string().min(1, 'Укажите марку автомобиля'),
	carModel: z.string().min(1, 'Укажите модель автомобиля'),
	carYear: z
		.string({
			required_error: 'Укажите год выпуска',
			invalid_type_error: 'Год должен быть числом',
		})
		.nonempty('Укажите год выпуска')
		.transform(val => Number(val))
		.refine(val => Number.isInteger(val), {
			message: 'Год должен быть целым числом',
		})
		.refine(val => val >= 1980, {
			message: 'Год должен быть не меньше 1980',
		})
		.refine(val => val <= currentYear, {
			message: `Год должен быть не больше ${currentYear}`,
		}),
	carColor: z.string().min(1, 'Укажите цвет автомобиля'),

	categoryIds: z
		.array(z.string().uuid({ message: 'Некорректный UUID категории' }))
		.min(1, 'Выберите хотя бы одну категорию'),

	serviceIds: z
		.array(z.string().uuid({ message: 'Некорректный UUID подуслуги' }))
		.min(1, 'Выберите хотя бы одну услугу'),

	notes: z.string().optional(),
});

export type TypeOrderSchema = z.infer<typeof OrderSchema>;
