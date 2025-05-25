import { PrismaService } from '../prisma/prisma.service';

const prismaService = new PrismaService();

const categories = [
	{
		name: 'Тонирование стекол',
		services: [
			{ name: 'тонировка стекол авто', slug: 'car-window-tinting' },
			{ name: 'атермальная тонировка', slug: 'heat-resistant-window-tinting' },
			{
				name: 'бронепленка на лобовое стекло',
				slug: 'windshield-protective-film'
			},
			{ name: 'тонирование фар', slug: 'headlight-tinting' },
			{ name: 'тонировка задней полусферы', slug: 'rear-window-tinting' },
			{ name: 'растонировка стекол', slug: 'window-de-tinting' },
			{ name: 'фотохромные фары', slug: 'photochromic-headlights' },
			{ name: 'тонировка пленкой llumar', slug: 'llumar-window-tinting' }
		]
	},
	{
		name: 'Полировка',
		services: [
			{ name: 'полировка автомобиля', slug: 'car-polishing' },
			{ name: 'нанесение жидкого стекла', slug: 'liquid-glass-coating' },
			{ name: 'абразивная полировка', slug: 'abrasive-polishing' },
			{ name: 'детейлинг полировка', slug: 'detailing-polishing' },
			{ name: 'нанесение керамики', slug: 'ceramic-coating' },
			{ name: 'мягкая полировка', slug: 'soft-polishing' },
			{ name: 'удалить пятна с кузова', slug: 'body-stain-removal' },
			{ name: 'полировка пленки', slug: 'film-polishing' },
			{
				name: 'восстановление выцветшего пластика',
				slug: 'faded-plastic-restoration'
			},
			{ name: 'полировка стекол', slug: 'glass-polishing' },
			{ name: 'антидождь', slug: 'rain-repellent-treatment' },
			{ name: 'полировка дисков', slug: 'rim-polishing' },
			{ name: 'полировка фар', slug: 'headlight-polishing' },
			{ name: 'полировка приборной панели', slug: 'dashboard-polishing' }
		]
	},
	{
		name: 'Оклейка полиуретаном',
		services: [
			{ name: 'оклейка автомобиля', slug: 'car-wrap' },
			{ name: 'антигравийная защита', slug: 'paint-protection-film' },
			{ name: 'оклейка салона', slug: 'interior-wrap' },
			{ name: 'оклейка передней части', slug: 'front-part-wrap' },
			{ name: 'оклейка капота', slug: 'hood-wrap' },
			{ name: 'оклейка бампера', slug: 'bumper-wrap' },
			{ name: 'оклейка гибридной плёнкой', slug: 'hybrid-film-wrap' },
			{ name: 'бронирование фар', slug: 'headlight-protection-film' },
			{ name: 'полная оклейка авто', slug: 'full-car-wrap' },
			{ name: 'оклейка матовой плёнкой', slug: 'matte-wrap' },
			{ name: 'оклейка стоек дверей', slug: 'door-pillars-wrap' },
			{ name: 'оклейка белого авто', slug: 'white-car-wrap' },
			{ name: 'плёнка под ручки авто', slug: 'door-handle-protection-film' },
			{ name: 'оклейка полиуретаном', slug: 'polyurethane-paint-protection' },
			{ name: 'оклейка мотоцикла', slug: 'motorcycle-wrap' },
			{ name: 'бронирование порогов', slug: 'door-sills-protection' },
			{
				name: 'оклейка цветным полиуретаном',
				slug: 'colored-polyurethane-wrap'
			},
			{ name: 'цены на оклейку плёнкой', slug: 'wrap-pricing' },
			{ name: 'оклейка дверей', slug: 'car-doors-wrap' }
		]
	},
	{
		name: 'Оклейка винилом',
		services: [
			{ name: 'оклейка автомобиля', slug: 'vinyl-car-wrap' },
			{ name: 'антихром', slug: 'dechroming' },
			{ name: 'оклейка крыши', slug: 'roof-wrap' },
			{ name: 'оклейка виниловой пленкой', slug: 'vinyl-wrap' },
			{ name: 'оклейка зеркальной пленкой', slug: 'mirror-vinyl-wrap' },
			{ name: 'оклейка авто карбоном', slug: 'carbon-vinyl-wrap' },
			{ name: 'снять виниловую пленку', slug: 'vinyl-wrap-removal' },
			{ name: 'брендинг автомобиля', slug: 'vehicle-branding' },
			{ name: 'оклейка молдингов', slug: 'moldings-wrap' },
			{ name: 'оклейка пленкой хамелеон', slug: 'chameleon-vinyl-wrap' },
			{ name: 'оклейка боковых зеркал', slug: 'side-mirrors-wrap' }
		]
	},
	{
		name: 'Оклейка салона',
		services: [
			{ name: 'оклейка защитной пленкой', slug: 'interior-protective-wrap' },
			{
				name: 'оклейка плёнкой под алюминий',
				slug: 'aluminum-style-interior-wrap'
			},
			{ name: 'оклейка под карбон', slug: 'carbon-style-interior-wrap' },
			{ name: 'оклейка дверей', slug: 'interior-doors-wrap' },
			{ name: 'оклейка текстурной плёнкой', slug: 'textured-interior-wrap' },
			{ name: 'оклейка под дерево', slug: 'wood-style-interior-wrap' },
			{ name: 'оклейка приборной панели', slug: 'dashboard-wrap' }
		]
	},
	{
		name: 'Химчистка',
		services: [
			{ name: 'химчистка автомобиля', slug: 'car-dry-cleaning' },
			{ name: 'удаление запаха', slug: 'odor-removal' },
			{ name: 'уход за кожаным салоном', slug: 'leather-interior-care' },
			{ name: 'предпродажная подготовка', slug: 'pre-sale-preparation' },
			{ name: 'подарочный сертификат', slug: 'gift-certificate' },
			{ name: 'озонирование салона', slug: 'interior-ozonation' },
			{ name: 'химчистка пола', slug: 'floor-cleaning' },
			{ name: 'химчистка багажника', slug: 'trunk-cleaning' },
			{ name: 'антибактериальная обработка', slug: 'antibacterial-treatment' },
			{ name: 'химчистка потолка', slug: 'ceiling-cleaning' },
			{ name: 'химчистка сидений', slug: 'seat-cleaning' },
			{ name: 'химчистка дисков', slug: 'wheel-cleaning' },
			{ name: 'чернение шин', slug: 'tire-blackening' },
			{
				name: 'обработка уплотнителей силиконом',
				slug: 'rubber-seals-silicone-treatment'
			}
		]
	},
	{
		name: 'Ремонт салона',
		services: [
			{ name: 'ремонт обивки салона', slug: 'interior-upholstery-repair' },
			{ name: 'ремонт кожи сидений', slug: 'leather-seat-repair' },
			{ name: 'ремонт прожогов потолка', slug: 'ceiling-burn-repair' },
			{ name: 'покраска руля', slug: 'steering-wheel-painting' },
			{ name: 'ремонт прожогов сидений', slug: 'seat-burn-repair' },
			{ name: 'ремонт ткани и велюра', slug: 'fabric-and-velour-repair' },
			{ name: 'ремонт обшивки дверной', slug: 'door-trim-repair' },
			{ name: 'ремонт пластика', slug: 'plastic-repair' },
			{ name: 'покраска пластика', slug: 'plastic-painting' }
		]
	},
	{
		name: 'Кузовной ремонт',
		services: [
			{ name: 'ремонт вмятин', slug: 'dent-repair' },
			{ name: 'покраска авто', slug: 'car-painting' },
			{ name: 'покраска капота', slug: 'hood-painting' },
			{ name: 'локальная покраска', slug: 'spot-painting' },
			{ name: 'покраска бампера', slug: 'bumper-painting' },
			{ name: 'покраска крыла', slug: 'fender-painting' },
			{ name: 'цены на покраску', slug: 'painting-prices' },
			{ name: 'покраска суппортов', slug: 'brake-caliper-painting' },
			{ name: 'покраска дисков', slug: 'wheel-painting' }
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
