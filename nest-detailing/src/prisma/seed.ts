import { PrismaService } from '../prisma/prisma.service';

const prismaService = new PrismaService();

const categories = [
	{
		name: 'Тонирование стекол',
		services: [
			{ name: 'тонировка стекол авто' },
			{ name: 'атермальная тонировка' },
			{ name: 'бронепленка на лобовое стекло' },
			{ name: 'тонирование фар' },
			{ name: 'тонировка задней полусферы' },
			{ name: 'растонировка стекол' },
			{ name: 'фотохромные фары' },
			{ name: 'тонировка пленкой llumar' }
		]
	},
	{
		name: 'Полировка',
		services: [
			{ name: 'полировка автомобиля' },
			{ name: 'нанесение жидкого стекла' },
			{ name: 'абразивная полировка' },
			{ name: 'детейлинг полировка' },
			{ name: 'нанесение керамики' },
			{ name: 'мягкая полировка' },
			{ name: 'удалить пятна с кузова' },
			{ name: 'полировка пленки' },
			{ name: 'восстановление выцветшего пластика' },
			{ name: 'полировка стекол' },
			{ name: 'антидождь' },
			{ name: 'полировка дисков' },
			{ name: 'полировка фар' },
			{ name: 'полировка приборной панели' }
		]
	},
	{
		name: 'Оклейка полиуретаном',
		services: [
			{ name: 'оклейка автомобиля' },
			{ name: 'антигравийная защита' },
			{ name: 'оклейка салона' },
			{ name: 'оклейка передней части' },
			{ name: 'оклейка капота' },
			{ name: 'оклейка бампера' },
			{ name: 'оклейка гибридной плёнкой' },
			{ name: 'бронирование фар' },
			{ name: 'полная оклейка авто' },
			{ name: 'оклейка матовой плёнкой' },
			{ name: 'оклейка стоек дверей' },
			{ name: 'оклейка белого авто' },
			{ name: 'плёнка под ручки авто' },
			{ name: 'оклейка полиуретаном' },
			{ name: 'оклейка мотоцикла' },
			{ name: 'бронирование порогов' },
			{ name: 'оклейка цветным полиуретаном' },
			{ name: 'цены на оклейку плёнкой' },
			{ name: 'оклейка дверей' }
		]
	}
];

async function main() {
	await prismaService.orderService.deleteMany();
	await prismaService.orderCategory.deleteMany();
	await prismaService.order.deleteMany();
	await prismaService.service.deleteMany();
	await prismaService.serviceCategory.deleteMany();

	for (const category of categories) {
		const createdCategory = await prismaService.serviceCategory.create({
			data: {
				name: category.name,
				services: {
					create: category.services.map(s => ({
						name: s.name
					}))
				}
			}
		});

		console.log(`✅ Создана категория: ${createdCategory.name}`);
	}
}

main()
	.then(() => {
		console.log('✅ Сидинг завершен.');
		return prismaService.$disconnect();
	})
	.catch(async e => {
		console.error('❌ Ошибка при сидинге:', e);
		await prismaService.$disconnect();
		process.exit(1);
	});
