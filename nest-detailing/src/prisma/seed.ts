import { hash } from 'argon2';

import { UserRole } from '../../generated/prisma';
import { PrismaService } from '../prisma/prisma.service';

const prismaService = new PrismaService();

interface IUser {
	name: string;
	email: string;
	phone: string;
	password: string;
	role: UserRole;
	specialization?: string;
}

const users: IUser[] = [
	{
		name: 'Taalaibek',
		email: 'sagynalievv.t@gmail.com',
		phone: '0505601100',
		password: '123456',
		role: 'ADMIN'
	},

	/// MASTER
	{
		name: 'Arthur',
		email: 'king.arthur@gmail.com',
		phone: '0505601101',
		password: '123456',
		role: 'MASTER',
		specialization: 'Мастер по тонированию'
	},
	{
		name: 'Harry Potter',
		email: 'harry.potter@hogwarts.edu',
		phone: '0505601102',
		password: '123456',
		role: 'MASTER',
		specialization: 'Мастер по полировке и химчистке авто'
	},
	{
		name: 'Hermione Granger',
		email: 'hermione.granger@hogwarts.edu',
		phone: '0505601103',
		password: '123456',
		role: 'MASTER',
		specialization: 'Мастер по оклейке'
	},
	{
		name: 'Ron Weasley',
		email: 'ron.weasley@hogwarts.edu',
		phone: '0505601104',
		password: '123456',
		role: 'MASTER',
		specialization: 'Мастер по ремонту салона'
	},
	{
		name: 'Severus Snape',
		email: 'severus.snape@hogwarts.edu',
		phone: '0505601105',
		password: '123456',
		role: 'MASTER',
		specialization: 'Кузовщик'
	},
	{
		name: 'Albus Dumbledore',
		email: 'albus.dumbledore@hogwarts.edu',
		phone: '0505601106',
		password: '123456',
		role: 'MASTER',
		specialization: 'Детейлер-универсал'
	},
	{
		name: 'Draco Malfoy',
		email: 'draco.malfoy@hogwarts.edu',
		phone: '0505601107',
		password: '123456',
		role: 'MASTER',
		specialization: 'Мастер по полировке и химчистке авто'
	},
	{
		name: 'Rubeus Hagrid',
		email: 'rubeus.hagrid@hogwarts.edu',
		phone: '0505601108',
		password: '123456',
		role: 'MASTER',
		specialization: 'Мастер по ремонту салона'
	},
	{
		name: 'Minerva McGonagall',
		email: 'minerva.mcgonagall@hogwarts.edu',
		phone: '0505601109',
		password: '123456',
		role: 'MASTER',
		specialization: 'Мастер по оклейке'
	},
	{
		name: 'Sirius Black',
		email: 'sirius.black@hogwarts.edu',
		phone: '0505601110',
		password: '123456',
		role: 'MASTER',
		specialization: 'Детейлер-универсал'
	},

	///// REGULAR
	{
		name: 'Merlin',
		email: 'merlin.master@gmail.com',
		phone: '0505601103',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Percival',
		email: 'percival.knight@gmail.com',
		phone: '0505601104',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Morgana',
		email: 'morgana.detail@gmail.com',
		phone: '0505601106',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Gawain',
		email: 'gawain.brave@gmail.com',
		phone: '0505601105',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Galahad',
		email: 'galahad.clean@gmail.com',
		phone: '0505601107',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Kay',
		email: 'kay.admin@gmail.com',
		phone: '0505601108',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Tristan',
		email: 'tristan.love@gmail.com',
		phone: '0505601109',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Luna Lovegood',
		email: 'luna.lovegood@example.com',
		phone: '0505601110',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Neville Longbottom',
		email: 'neville.longbottom@example.com',
		phone: '0505601111',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Ginny Weasley',
		email: 'ginny.weasley@example.com',
		phone: '0505601112',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Fred Weasley',
		email: 'fred.weasley@example.com',
		phone: '0505601113',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'George Weasley',
		email: 'george.weasley@example.com',
		phone: '0505601114',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Cho Chang',
		email: 'cho.chang@example.com',
		phone: '0505601115',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Dean Thomas',
		email: 'dean.thomas@example.com',
		phone: '0505601116',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Seamus Finnigan',
		email: 'seamus.finnigan@example.com',
		phone: '0505601117',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Cedric Diggory',
		email: 'cedric.diggory@example.com',
		phone: '0505601118',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Fleur Delacour',
		email: 'fleur.delacour@example.com',
		phone: '0505601119',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Frodo Baggins',
		email: 'frodo.baggins@example.com',
		phone: '0505601120',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Samwise Gamgee',
		email: 'samwise.gamgee@example.com',
		phone: '0505601121',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Aragorn',
		email: 'aragorn@example.com',
		phone: '0505601122',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Legolas',
		email: 'legolas@example.com',
		phone: '0505601123',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Gimli',
		email: 'gimli@example.com',
		phone: '0505601124',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Boromir',
		email: 'boromir@example.com',
		phone: '0505601125',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Gandalf',
		email: 'gandalf@example.com',
		phone: '0505601126',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Pippin Took',
		email: 'pippin.took@example.com',
		phone: '0505601127',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Merry Brandybuck',
		email: 'merry.brandybuck@example.com',
		phone: '0505601128',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Éowyn',
		email: 'éowyn@example.com',
		phone: '0505601129',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Jon Snow',
		email: 'jon.snow@example.com',
		phone: '0505601130',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Arya Stark',
		email: 'arya.stark@example.com',
		phone: '0505601131',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Sansa Stark',
		email: 'sansa.stark@example.com',
		phone: '0505601132',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Bran Stark',
		email: 'bran.stark@example.com',
		phone: '0505601133',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Tyrion Lannister',
		email: 'tyrion.lannister@example.com',
		phone: '0505601134',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Jaime Lannister',
		email: 'jaime.lannister@example.com',
		phone: '0505601135',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Cersei Lannister',
		email: 'cersei.lannister@example.com',
		phone: '0505601136',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Daenerys Targaryen',
		email: 'daenerys.targaryen@example.com',
		phone: '0505601137',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Jorah Mormont',
		email: 'jorah.mormont@example.com',
		phone: '0505601138',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Brienne of Tarth',
		email: 'brienne.of.tarth@example.com',
		phone: '0505601139',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Peter Parker',
		email: 'peter.parker@example.com',
		phone: '0505601140',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Tony Stark',
		email: 'tony.stark@example.com',
		phone: '0505601141',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Steve Rogers',
		email: 'steve.rogers@example.com',
		phone: '0505601142',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Natasha Romanoff',
		email: 'natasha.romanoff@example.com',
		phone: '0505601143',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Bruce Banner',
		email: 'bruce.banner@example.com',
		phone: '0505601144',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Wanda Maximoff',
		email: 'wanda.maximoff@example.com',
		phone: '0505601145',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Stephen Strange',
		email: 'stephen.strange@example.com',
		phone: '0505601146',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Scott Lang',
		email: 'scott.lang@example.com',
		phone: '0505601147',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'TChalla',
		email: 't.challa@example.com',
		phone: '0505601148',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Carol Danvers',
		email: 'carol.danvers@example.com',
		phone: '0505601149',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Clark Kent',
		email: 'clark.kent@example.com',
		phone: '0505601150',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Bruce Wayne',
		email: 'bruce.wayne@example.com',
		phone: '0505601151',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Diana Prince',
		email: 'diana.prince@example.com',
		phone: '0505601152',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Barry Allen',
		email: 'barry.allen@example.com',
		phone: '0505601153',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Arthur Curry',
		email: 'arthur.curry@example.com',
		phone: '0505601154',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Hal Jordan',
		email: 'hal.jordan@example.com',
		phone: '0505601155',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Victor Stone',
		email: 'victor.stone@example.com',
		phone: '0505601156',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Lois Lane',
		email: 'lois.lane@example.com',
		phone: '0505601157',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Lex Luthor',
		email: 'lex.luthor@example.com',
		phone: '0505601158',
		password: '123456',
		role: 'REGULAR'
	},
	{
		name: 'Harley Quinn',
		email: 'harley.quinn@example.com',
		phone: '0505601159',
		password: '123456',
		role: 'REGULAR'
	}
];

const categories = [
	{
		name: 'Тонирование стекол',
		image: 'https://i.postimg.cc/cHXFQynn/image.webp',
		description:
			'Мы стараемся делать все возможное, чтобы наши услуги и их стоимость были доступны для любого автовладельца. Тонирование стёкл очень популярная услуга и в нашей компании мы выполняем данные работы на высочайшем уровне.',
		services: [
			{
				name: 'тонировка стекол авто',
				slug: 'car-window-tinting',
				description:
					'Тонирование стекол автомобиля для защиты от солнца и приватности',
				base_price_min: 5000,
				base_price_max: 15000
			},
			{
				name: 'атермальная тонировка',
				slug: 'heat-resistant-window-tinting',
				description:
					'Установка атермальной пленки для защиты от тепла и УФ-лучей',
				base_price_min: 6000,
				base_price_max: 18000
			},
			{
				name: 'бронепленка на лобовое стекло',
				slug: 'windshield-protective-film',
				description: 'Нанесение защитной бронепленки на лобовое стекло',
				base_price_min: 8000,
				base_price_max: 20000
			},
			{
				name: 'тонирование фар',
				slug: 'headlight-tinting',
				description: 'Тонировка фар для стилизации и защиты',
				base_price_min: 3000,
				base_price_max: 10000
			},
			{
				name: 'тонировка задней полусферы',
				slug: 'rear-window-tinting',
				description: 'Тонирование задних стекол автомобиля',
				base_price_min: 4000,
				base_price_max: 12000
			},
			{
				name: 'растонировка стекол',
				slug: 'window-de-tinting',
				description: 'Удаление старой тонировочной пленки со стекол',
				base_price_min: 2000,
				base_price_max: 8000
			},
			{
				name: 'фотохромные фары',
				slug: 'photochromic-headlights',
				description: 'Установка фотохромной пленки на фары',
				base_price_min: 7000,
				base_price_max: 15000
			},
			{
				name: 'тонировка пленкой llumar',
				slug: 'llumar-window-tinting',
				description: 'Тонирование стекол с использованием пленки Llumar',
				base_price_min: 6000,
				base_price_max: 20000
			}
		]
	},
	{
		name: 'Полировка',
		image: 'https://i.postimg.cc/3NNn1SXb/image.jpg',
		description:
			'Привести состояние не нового автомобиля максимально в первоначальный вид, а также удалить с кузова различные повреждения виде мелких царапин или сколов, всё это можно сделать в нашем Detailing центре.',
		services: [
			{
				name: 'полировка автомобиля',
				slug: 'car-polishing',
				description: 'Полная полировка кузова автомобиля для блеска и защиты',
				base_price_min: 10000,
				base_price_max: 30000
			},
			{
				name: 'нанесение жидкого стекла',
				slug: 'liquid-glass-coating',
				description: 'Покрытие кузова жидким стеклом для долговременной защиты',
				base_price_min: 12000,
				base_price_max: 35000
			},
			{
				name: 'абразивная полировка',
				slug: 'abrasive-polishing',
				description:
					'Удаление царапин и дефектов с помощью абразивной полировки',
				base_price_min: 15000,
				base_price_max: 40000
			},
			{
				name: 'детейлинг полировка',
				slug: 'detailing-polishing',
				description: 'Тщательная полировка с акцентом на детали',
				base_price_min: 18000,
				base_price_max: 50000
			},
			{
				name: 'нанесение керамики',
				slug: 'ceramic-coating',
				description: 'Покрытие кузова керамическим составом для защиты',
				base_price_min: 20000,
				base_price_max: 60000
			},
			{
				name: 'мягкая полировка',
				slug: 'soft-polishing',
				description: 'Легкая полировка для удаления мелких царапин',
				base_price_min: 8000,
				base_price_max: 20000
			},
			{
				name: 'удалить пятна с кузова',
				slug: 'body-stain-removal',
				description: 'Удаление пятен и загрязнений с кузова автомобиля',
				base_price_min: 3000,
				base_price_max: 10000
			},
			{
				name: 'полировка пленки',
				slug: 'film-polishing',
				description: 'Полировка защитной пленки для восстановления блеска',
				base_price_min: 5000,
				base_price_max: 15000
			},
			{
				name: 'восстановление выцветшего пластика',
				slug: 'faded-plastic-restoration',
				description: 'Восстановление цвета и текстуры выцветшего пластика',
				base_price_min: 4000,
				base_price_max: 12000
			},
			{
				name: 'полировка стекол',
				slug: 'glass-polishing',
				description: 'Полировка стекол для удаления царапин и мутности',
				base_price_min: 6000,
				base_price_max: 18000
			},
			{
				name: 'антидождь',
				slug: 'rain-repellent-treatment',
				description: 'Нанесение покрытия антидождь для улучшения видимости',
				base_price_min: 2000,
				base_price_max: 8000
			},
			{
				name: 'полировка дисков',
				slug: 'rim-polishing',
				description: 'Полировка колесных дисков для блеска и защиты',
				base_price_min: 5000,
				base_price_max: 15000
			},
			{
				name: 'полировка фар',
				slug: 'headlight-polishing',
				description: 'Восстановление прозрачности и блеска фар',
				base_price_min: 3000,
				base_price_max: 10000
			},
			{
				name: 'полировка приборной панели',
				slug: 'dashboard-polishing',
				description: 'Полировка приборной панели для чистоты и блеска',
				base_price_min: 2000,
				base_price_max: 7000
			}
		]
	},
	{
		name: 'Оклейка полиуретаном',
		image: 'https://i.postimg.cc/wjm4nGSC/image.webp',
		description:
			'Мы работаем практически со всеми известными и популярными марками пленок. Выполняем такие работы как: оклейка полиуретановой плёнкой кузова автомобиля, оклейка виниловыми, текстурными и гибридными плёнками. Все работы выполняются профессионально с гарантией качества.',
		services: [
			{
				name: 'оклейка автомобиля',
				slug: 'car-wrap',
				description: 'Полная оклейка автомобиля полиуретановой пленкой',
				base_price_min: 50000,
				base_price_max: 150000
			},
			{
				name: 'антигравийная защита',
				slug: 'paint-protection-film',
				description: 'Нанесение антигравийной пленки для защиты кузова',
				base_price_min: 20000,
				base_price_max: 60000
			},
			{
				name: 'оклейка салона',
				slug: 'interior-wrap',
				description: 'Оклейка элементов салона полиуретановой пленкой',
				base_price_min: 10000,
				base_price_max: 30000
			},
			{
				name: 'оклейка передней части',
				slug: 'front-part-wrap',
				description: 'Защита передней части автомобиля пленкой',
				base_price_min: 15000,
				base_price_max: 45000
			},
			{
				name: 'оклейка капота',
				slug: 'hood-wrap',
				description: 'Оклейка капота полиуретановой пленкой',
				base_price_min: 10000,
				base_price_max: 30000
			},
			{
				name: 'оклейка бампера',
				slug: 'bumper-wrap',
				description: 'Защита бампера полиуретановой пленкой',
				base_price_min: 8000,
				base_price_max: 25000
			},
			{
				name: 'оклейка гибридной плёнкой',
				slug: 'hybrid-film-wrap',
				description: 'Оклейка автомобиля гибридной защитной пленкой',
				base_price_min: 20000,
				base_price_max: 60000
			},
			{
				name: 'бронирование фар',
				slug: 'headlight-protection-film',
				description: 'Защита фар полиуретановой пленкой',
				base_price_min: 5000,
				base_price_max: 15000
			},
			{
				name: 'полная оклейка авто',
				slug: 'full-car-wrap',
				description: 'Полная защита кузова полиуретановой пленкой',
				base_price_min: 60000,
				base_price_max: 180000
			},
			{
				name: 'оклейка матовой плёнкой',
				slug: 'matte-wrap',
				description: 'Оклейка автомобиля матовой полиуретановой пленкой',
				base_price_min: 50000,
				base_price_max: 150000
			},
			{
				name: 'оклейка стоек дверей',
				slug: 'door-pillars-wrap',
				description: 'Zaщита стоек дверей полиуретановой пленкой',
				base_price_min: 3000,
				base_price_max: 10000
			},
			{
				name: 'оклейка белого авто',
				slug: 'white-car-wrap',
				description: 'Оклейка белого автомобиля полиуретановой пленкой',
				base_price_min: 50000,
				base_price_max: 150000
			},
			{
				name: 'плёнка под ручки авто',
				slug: 'door-handle-protection-film',
				description: 'Защита зоны под ручками полиуретановой пленкой',
				base_price_min: 2000,
				base_price_max: 8000
			},
			{
				name: 'оклейка полиуретаном',
				slug: 'polyurethane-paint-protection',
				description: 'Стандартная оклейка полиуретановой пленкой',
				base_price_min: 50000,
				base_price_max: 150000
			},
			{
				name: 'оклейка мотоцикла',
				slug: 'motorcycle-wrap',
				description: 'Оклейка мотоцикла полиуретановой пленкой',
				base_price_min: 20000,
				base_price_max: 60000
			},
			{
				name: 'бронирование порогов',
				slug: 'door-sills-protection',
				description: 'Защита порогов автомобиля полиуретановой пленкой',
				base_price_min: 5000,
				base_price_max: 15000
			},
			{
				name: 'оклейка цветным полиуретаном',
				slug: 'colored-polyurethane-wrap',
				description: 'Оклейка цветной полиуретановой пленкой',
				base_price_min: 55000,
				base_price_max: 160000
			},
			{
				name: 'цены на оклейку плёнкой',
				slug: 'wrap-pricing',
				description: 'Консультация по стоимости оклейки пленкой',
				base_price_min: 1000,
				base_price_max: 5000
			},
			{
				name: 'оклейка дверей',
				slug: 'car-doors-wrap',
				description: 'Защита дверей полиуретановой пленкой',
				base_price_min: 8000,
				base_price_max: 25000
			}
		]
	},
	{
		name: 'Оклейка винилом',
		image: 'https://i.postimg.cc/wTPbfpb5/image.webp',
		description:
			'Мы стараемся делать все возможное, чтобы наши услуги и их стоимость были доступны для любого автовладельца. Оклейка виниловыми пленками — одна из самых популярных услуг, и мы выполняем её на высочайшем уровне, используя качественные материалы и проверенные технологии.',
		services: [
			{
				name: 'оклейка автомобиля',
				slug: 'vinyl-car-wrap',
				description: 'Полная оклейка автомобиля виниловой пленкой',
				base_price_min: 40000,
				base_price_max: 120000
			},
			{
				name: 'антихром',
				slug: 'dechroming',
				description: 'Удаление хрома и оклейка виниловой пленкой',
				base_price_min: 10000,
				base_price_max: 30000
			},
			{
				name: 'оклейка крыши',
				slug: 'roof-wrap',
				description: 'Оклейка крыши автомобиля виниловой пленкой',
				base_price_min: 8000,
				base_price_max: 25000
			},
			{
				name: 'оклейка виниловой пленкой',
				slug: 'vinyl-wrap',
				description: 'Стандартная оклейка виниловой пленкой',
				base_price_min: 40000,
				base_price_max: 120000
			},
			{
				name: 'оклейка зеркальной пленкой',
				slug: 'mirror-vinyl-wrap',
				description: 'Оклейка автомобиля зеркальной виниловой пленкой',
				base_price_min: 45000,
				base_price_max: 130000
			},
			{
				name: 'оклейка авто карбоном',
				slug: 'carbon-vinyl-wrap',
				description: 'Оклейка автомобиля винилом под карбон',
				base_price_min: 45000,
				base_price_max: 130000
			},
			{
				name: 'снять виниловую пленку',
				slug: 'vinyl-wrap-removal',
				description: 'Удаление виниловой пленки с автомобиля',
				base_price_min: 5000,
				base_price_max: 15000
			},
			{
				name: 'брендинг автомобиля',
				slug: 'vehicle-branding',
				description: 'Нанесение брендированной виниловой пленки',
				base_price_min: 20000,
				base_price_max: 60000
			},
			{
				name: 'оклейка молдингов',
				slug: 'moldings-wrap',
				description: 'Оклейка молдингов виниловой пленкой',
				base_price_min: 3000,
				base_price_max: 10000
			},
			{
				name: 'оклейка пленкой хамелеон',
				slug: 'chameleon-vinyl-wrap',
				description: 'Оклейка виниловой пленкой с эффектом хамелеон',
				base_price_min: 50000,
				base_price_max: 150000
			},
			{
				name: 'оклейка боковых зеркал',
				slug: 'side-mirrors-wrap',
				description: 'Оклейка боковых зеркал виниловой пленкой',
				base_price_min: 3000,
				base_price_max: 10000
			}
		]
	},
	{
		name: 'Оклейка салона',
		image: 'https://i.postimg.cc/ZqzsmLmC/image.webp',
		description:
			'Для того чтобы уберечь лакированные элементы салона автомобиля от повреждений и мелких царапин, рекомендуем защитить их специальной полиуретановой плёнкой. Эти услуги оказывает наш Detailing центр, гарантируя точность оклейки и высокое качество материалов.',
		services: [
			{
				name: 'оклейка защитной пленкой',
				slug: 'interior-protective-wrap',
				description: 'Защита салона с помощью прозрачной пленки',
				base_price_min: 5000,
				base_price_max: 15000
			},
			{
				name: 'оклейка плёнкой под алюминий',
				slug: 'aluminum-style-interior-wrap',
				description: 'Оклейка салона пленкой с имитацией алюминия',
				base_price_min: 6000,
				base_price_max: 18000
			},
			{
				name: 'оклейка под карбон',
				slug: 'carbon-style-interior-wrap',
				description: 'Оклейка салона пленкой с имитацией карбона',
				base_price_min: 6000,
				base_price_max: 18000
			},
			{
				name: 'оклейка дверей',
				slug: 'interior-doors-wrap',
				description: 'Оклейка внутренних дверей салона пленкой',
				base_price_min: 4000,
				base_price_max: 12000
			},
			{
				name: 'оклейка текстурной плёнкой',
				slug: 'textured-interior-wrap',
				description: 'Оклейка салона текстурной декоративной пленкой',
				base_price_min: 5000,
				base_price_max: 15000
			},
			{
				name: 'оклейка под дерево',
				slug: 'wood-style-interior-wrap',
				description: 'Оклейка салона пленкой с имитацией дерева',
				base_price_min: 6000,
				base_price_max: 18000
			},
			{
				name: 'оклейка приборной панели',
				slug: 'dashboard-wrap',
				description: 'Оклейка приборной панели декоративной пленкой',
				base_price_min: 3000,
				base_price_max: 10000
			}
		]
	},
	{
		name: 'Химчистка',
		image: 'https://i.postimg.cc/c1kDCWZq/image.jpg',
		description:
			'В нашем центре вы можете избавиться от неприятных запахов в салоне автомобиля, а также заказать полную профессиональную химчистку с использованием качественных и безопасных материалов. Мы обеспечим вашему авто чистоту, свежесть и комфорт.',
		services: [
			{
				name: 'химчистка автомобиля',
				slug: 'car-dry-cleaning',
				description: 'Полная химчистка салона автомобиля',
				base_price_min: 8000,
				base_price_max: 20000
			},
			{
				name: 'удаление запаха',
				slug: 'odor-removal',
				description: 'Удаление неприятных запахов из салона',
				base_price_min: 3000,
				base_price_max: 10000
			},
			{
				name: 'уход за кожаным салоном',
				slug: 'leather-interior-care',
				description: 'Чистка и уход за кожаными элементами салона',
				base_price_min: 5000,
				base_price_max: 15000
			},
			{
				name: 'предпродажная подготовка',
				slug: 'pre-sale-preparation',
				description: 'Химчистка для подготовки автомобиля к продаже',
				base_price_min: 10000,
				base_price_max: 25000
			},
			{
				name: 'подарочный сертификат',
				slug: 'gift-certificate',
				description: 'Сертификат на услуги химчистки',
				base_price_min: 5000,
				base_price_max: 20000
			},
			{
				name: 'озонирование салона',
				slug: 'interior-ozonation',
				description: 'Озонирование для устранения бактерий и запахов',
				base_price_min: 3000,
				base_price_max: 10000
			},
			{
				name: 'химчистка пола',
				slug: 'floor-cleaning',
				description: 'Глубокая чистка пола салона автомобиля',
				base_price_min: 2000,
				base_price_max: 8000
			},
			{
				name: 'химчистка багажника',
				slug: 'trunk-cleaning',
				description: 'Чистка багажного отделения автомобиля',
				base_price_min: 2000,
				base_price_max: 8000
			},
			{
				name: 'антибактериальная обработка',
				slug: 'antibacterial-treatment',
				description: 'Обработка салона для уничтожения бактерий',
				base_price_min: 3000,
				base_price_max: 10000
			},
			{
				name: 'химчистка потолка',
				slug: 'ceiling-cleaning',
				description: 'Чистка потолка салона автомобиля',
				base_price_min: 2000,
				base_price_max: 8000
			},
			{
				name: 'химчистка сидений',
				slug: 'seat-cleaning',
				description: 'Глубокая чистка сидений автомобиля',
				base_price_min: 3000,
				base_price_max: 10000
			},
			{
				name: 'химчистка дисков',
				slug: 'wheel-cleaning',
				description: 'Чистка колесных дисков от загрязнений',
				base_price_min: 2000,
				base_price_max: 8000
			},
			{
				name: 'чернение шин',
				slug: 'tire-blackening',
				description: 'Обработка шин для придания черного блеска',
				base_price_min: 1000,
				base_price_max: 5000
			},
			{
				name: 'обработка уплотнителей силиконом',
				slug: 'rubber-seals-silicone-treatment',
				description: 'Силиконовая обработка уплотнителей для защиты',
				base_price_min: 1000,
				base_price_max: 5000
			}
		]
	},
	{
		name: 'Ремонт салона',
		image: 'https://i.postimg.cc/cHsDg4rW/image.jpg',
		description:
			'Если необходимо отремонтировать повреждения в салоне автомобиля, восстановить или перекрасить кожаные и виниловые элементы — специалисты нашего detailing центра сделают это качественно, аккуратно и с использованием профессиональных материалов',
		services: [
			{
				name: 'ремонт обивки салона',
				slug: 'interior-upholstery-repair',
				description: 'Восстановление обивки салона автомобиля',
				base_price_min: 5000,
				base_price_max: 15000
			},
			{
				name: 'ремонт кожи сидений',
				slug: 'leather-seat-repair',
				description: 'Ремонт кожаных сидений от трещин и повреждений',
				base_price_min: 6000,
				base_price_max: 18000
			},
			{
				name: 'ремонт прожогов потолка',
				slug: 'ceiling-burn-repair',
				description: 'Устранение прожогов на потолке салона',
				base_price_min: 3000,
				base_price_max: 10000
			},
			{
				name: 'покраска руля',
				slug: 'steering-wheel-painting',
				description: 'Покраска руля для восстановления внешнего вида',
				base_price_min: 4000,
				base_price_max: 12000
			},
			{
				name: 'ремонт прожогов сидений',
				slug: 'seat-burn-repair',
				description: 'Устранение прожогов на сидениях',
				base_price_min: 3000,
				base_price_max: 10000
			},
			{
				name: 'ремонт ткани и велюра',
				slug: 'fabric-and-velour-repair',
				description: 'Восстановление тканевой и велюровой обивки',
				base_price_min: 4000,
				base_price_max: 12000
			},
			{
				name: 'ремонт обшивки дверной',
				slug: 'door-trim-repair',
				description: 'Ремонт обшивки дверей салона',
				base_price_min: 4000,
				base_price_max: 12000
			},
			{
				name: 'ремонт пластика',
				slug: 'plastic-repair',
				description: 'Восстановление пластиковых элементов салона',
				base_price_min: 3000,
				base_price_max: 10000
			},
			{
				name: 'покраска пластика',
				slug: 'plastic-painting',
				description: 'Покраска пластиковых деталей салона',
				base_price_min: 3000,
				base_price_max: 10000
			}
		]
	},
	{
		name: 'Кузовной ремонт',
		image: 'https://i.postimg.cc/SKLTxzQV/image.jpg',
		description:
			'Мы осуществляем безокрасочный ремонт вмятин на кузове автомобиля. Даже сложные повреждения можно устранить без необходимости в дорогостоящей полной покраске. Также предлагаем качественные услуги по покраске отдельных элементов кузова',
		services: [
			{
				name: 'ремонт вмятин',
				slug: 'dent-repair',
				description: 'Устранение вмятин на кузове автомобиля',
				base_price_min: 5000,
				base_price_max: 20000
			},
			{
				name: 'покраска авто',
				slug: 'car-painting',
				description: 'Полная покраска кузова автомобиля',
				base_price_min: 30000,
				base_price_max: 100000
			},
			{
				name: 'покраска капота',
				slug: 'hood-painting',
				description: 'Покраска капота автомобиля',
				base_price_min: 8000,
				base_price_max: 25000
			},
			{
				name: 'локальная покраска',
				slug: 'spot-painting',
				description: 'Покраска отдельных участков кузова',
				base_price_min: 3000,
				base_price_max: 10000
			},
			{
				name: 'покраска бампера',
				slug: 'bumper-painting',
				description: 'Покраска бампера автомобиля',
				base_price_min: 6000,
				base_price_max: 20000
			},
			{
				name: 'покраска крыла',
				slug: 'fender-painting',
				description: 'Покраска крыла автомобиля',
				base_price_min: 6000,
				base_price_max: 20000
			},
			{
				name: 'цены на покраску',
				slug: 'painting-prices',
				description: 'Консультация по стоимости покраски автомобиля',
				base_price_min: 1000,
				base_price_max: 5000
			},
			{
				name: 'покраска суппортов',
				slug: 'brake-caliper-painting',
				description: 'Покраска тормозных суппортов',
				base_price_min: 4000,
				base_price_max: 12000
			},
			{
				name: 'покраска дисков',
				slug: 'wheel-painting',
				description: 'Покраска колесных дисков',
				base_price_min: 5000,
				base_price_max: 15000
			}
		]
	}
];

const cars = [
	{
		name: 'Toyota',
		coefficient: 1.1,
		models: [
			{ name: 'Camry' },
			{ name: 'Corolla' },
			{ name: 'RAV4' },
			{ name: 'Land Cruiser' },
			{ name: 'Hilux' },
			{ name: 'Highlander' },
			{ name: 'Prius' },
			{ name: 'Sienna' },
			{ name: 'Yaris' },
			{ name: 'Avensis' },
			{ name: 'Fortuner' },
			{ name: 'Supra' }
		]
	},
	{
		name: 'BMW',
		coefficient: 1.1,
		models: [
			{ name: '3 Series' },
			{ name: '5 Series' },
			{ name: 'X3' },
			{ name: 'X5' },
			{ name: '7 Series' },
			{ name: 'X1' },
			{ name: '4 Series' },
			{ name: 'Z4' },
			{ name: 'X6' },
			{ name: '2 Series' },
			{ name: '8 Series' }
		]
	},
	{
		name: 'Mercedes-Benz',
		coefficient: 1.1,
		models: [
			{ name: 'C-Class' },
			{ name: 'E-Class' },
			{ name: 'GLC' },
			{ name: 'GLE' },
			{ name: 'S-Class' },
			{ name: 'A-Class' },
			{ name: 'GLA' },
			{ name: 'AMG GT' },
			{ name: 'CLA' },
			{ name: 'CLS' },
			{ name: 'GLB' },
			{ name: 'EQC' }
		]
	},
	{
		name: 'Audi',
		coefficient: 1.1,
		models: [
			{ name: 'A3' },
			{ name: 'A4' },
			{ name: 'A6' },
			{ name: 'Q5' },
			{ name: 'Q7' },
			{ name: 'Q3' },
			{ name: 'A8' },
			{ name: 'e-tron' },
			{ name: 'Q8' },
			{ name: 'A1' },
			{ name: 'RS6' },
			{ name: 'S4' }
		]
	},
	{
		name: 'Kia',
		coefficient: 1.1,
		models: [
			{ name: 'Rio' },
			{ name: 'Cerato' },
			{ name: 'Sportage' },
			{ name: 'Sorento' },
			{ name: 'K5' },
			{ name: 'Stinger' },
			{ name: 'Telluride' },
			{ name: 'Niro' },
			{ name: 'Picanto' },
			{ name: 'Carnival' },
			{ name: 'Soul' }
		]
	},
	{
		name: 'Hyundai',
		coefficient: 1.1,
		models: [
			{ name: 'Elantra' },
			{ name: 'Sonata' },
			{ name: 'Tucson' },
			{ name: 'Santa Fe' },
			{ name: 'Accent' },
			{ name: 'Palisade' },
			{ name: 'Kona' },
			{ name: 'Ioniq' },
			{ name: 'Creta' },
			{ name: 'Venue' }
		]
	},
	{
		name: 'Volkswagen',
		coefficient: 1.1,
		models: [
			{ name: 'Golf' },
			{ name: 'Passat' },
			{ name: 'Tiguan' },
			{ name: 'Jetta' },
			{ name: 'Touareg' },
			{ name: 'Polo' },
			{ name: 'Arteon' },
			{ name: 'T-Roc' },
			{ name: 'ID.4' },
			{ name: 'Multivan' }
		]
	},
	{
		name: 'Nissan',
		coefficient: 1.1,
		models: [
			{ name: 'Almera' },
			{ name: 'Sentra' },
			{ name: 'X-Trail' },
			{ name: 'Qashqai' },
			{ name: 'Patrol' },
			{ name: 'Rogue' },
			{ name: 'Murano' },
			{ name: 'Leaf' },
			{ name: 'Note' },
			{ name: 'Navara' },
			{ name: 'Juke' }
		]
	},
	{
		name: 'Lexus',
		coefficient: 1.1,
		models: [
			{ name: 'IS' },
			{ name: 'ES' },
			{ name: 'RX' },
			{ name: 'NX' },
			{ name: 'LX' },
			{ name: 'UX' },
			{ name: 'LS' },
			{ name: 'LC' },
			{ name: 'GX' },
			{ name: 'RC' }
		]
	},
	{
		name: 'Honda',
		coefficient: 1.1,
		models: [
			{ name: 'Civic' },
			{ name: 'Accord' },
			{ name: 'CR-V' },
			{ name: 'HR-V' },
			{ name: 'Fit' },
			{ name: 'Pilot' },
			{ name: 'Odyssey' },
			{ name: 'Ridgeline' },
			{ name: 'Jazz' },
			{ name: 'Insight' }
		]
	},
	{
		name: 'Mazda',
		coefficient: 1.1,
		models: [
			{ name: 'Mazda3' },
			{ name: 'Mazda6' },
			{ name: 'CX-5' },
			{ name: 'CX-9' },
			{ name: 'MX-5' },
			{ name: 'CX-30' },
			{ name: 'CX-50' },
			{ name: 'RX-8' },
			{ name: 'CX-3' }
		]
	},
	{
		name: 'Chevrolet',
		coefficient: 1.1,
		models: [
			{ name: 'Cruze' },
			{ name: 'Malibu' },
			{ name: 'Tahoe' },
			{ name: 'Trailblazer' },
			{ name: 'Spark' },
			{ name: 'Equinox' },
			{ name: 'Silverado' },
			{ name: 'Blazer' },
			{ name: 'Captiva' },
			{ name: 'Camaro' }
		]
	},
	{
		name: 'Ford',
		coefficient: 1.1,
		models: [
			{ name: 'Focus' },
			{ name: 'Mondeo' },
			{ name: 'Explorer' },
			{ name: 'Escape' },
			{ name: 'Mustang' },
			{ name: 'F-150' },
			{ name: 'Bronco' },
			{ name: 'Edge' },
			{ name: 'EcoSport' },
			{ name: 'Ranger' }
		]
	},
	{
		name: 'Mitsubishi',
		coefficient: 1.1,
		models: [
			{ name: 'Lancer' },
			{ name: 'Outlander' },
			{ name: 'Pajero' },
			{ name: 'ASX' },
			{ name: 'Eclipse Cross' },
			{ name: 'Mirage' },
			{ name: 'Montero' },
			{ name: 'L200' },
			{ name: 'Xpander' }
		]
	},
	{
		name: 'Renault',
		coefficient: 1.1,
		models: [
			{ name: 'Logan' },
			{ name: 'Duster' },
			{ name: 'Arkana' },
			{ name: 'Sandero' },
			{ name: 'Kaptur' },
			{ name: 'Megane' },
			{ name: 'Captur' },
			{ name: 'Talisman' },
			{ name: 'Koleos' }
		]
	},
	{
		name: 'Peugeot',
		coefficient: 1.1,
		models: [
			{ name: '208' },
			{ name: '308' },
			{ name: '3008' },
			{ name: '5008' },
			{ name: '2008' },
			{ name: '508' },
			{ name: '408' },
			{ name: 'Traveller' },
			{ name: 'RCZ' }
		]
	},
	{
		name: 'Skoda',
		coefficient: 1.1,
		models: [
			{ name: 'Octavia' },
			{ name: 'Superb' },
			{ name: 'Kodiaq' },
			{ name: 'Karoq' },
			{ name: 'Fabia' },
			{ name: 'Scala' },
			{ name: 'Kamiq' },
			{ name: 'Yeti' },
			{ name: 'Rapid' }
		]
	},
	{
		name: 'Subaru',
		coefficient: 1.1,
		models: [
			{ name: 'Impreza' },
			{ name: 'Legacy' },
			{ name: 'Forester' },
			{ name: 'Outback' },
			{ name: 'XV' },
			{ name: 'WRX' },
			{ name: 'Ascent' },
			{ name: 'Crosstrek' },
			{ name: 'BRZ' }
		]
	},
	{
		name: 'Tesla',
		coefficient: 1.1,
		models: [
			{ name: 'Model S' },
			{ name: 'Model 3' },
			{ name: 'Model X' },
			{ name: 'Model Y' },
			{ name: 'Cybertruck' },
			{ name: 'Roadster' },
			{ name: 'Semi' }
		]
	},
	{
		name: 'Geely',
		coefficient: 1.1,
		models: [
			{ name: 'Coolray' },
			{ name: 'Atlas' },
			{ name: 'Emgrand' },
			{ name: 'Tugella' },
			{ name: 'Monjaro' },
			{ name: 'Boyue' },
			{ name: 'Preface' },
			{ name: 'Okavango' },
			{ name: 'Icon' }
		]
	},
	{
		name: 'Lada',
		coefficient: 1.1,
		models: [
			{ name: 'Vesta' },
			{ name: 'Granta' },
			{ name: 'Niva' },
			{ name: 'Largus' },
			{ name: 'XRAY' },
			{ name: 'Kalina' },
			{ name: 'Priora' },
			{ name: '4x4' },
			{ name: 'Samara' }
		]
	},
	{
		name: 'Daewoo',
		coefficient: 1.1,
		models: [
			{ name: 'Matiz' },
			{ name: 'Nexia' },
			{ name: 'Gentra' },
			{ name: 'Lanos' },
			{ name: 'Damas' },
			{ name: 'Tico' },
			{ name: 'Leganza' },
			{ name: 'Espero' }
		]
	},
	{
		name: 'Chery',
		coefficient: 1.1,
		models: [
			{ name: 'Tiggo 7' },
			{ name: 'Tiggo 8' },
			{ name: 'Arrizo 5' },
			{ name: 'Tiggo 4' },
			{ name: 'Omoda 5' },
			{ name: 'Exeed TXL' },
			{ name: 'Arrizo 7' },
			{ name: 'Tiggo 2' }
		]
	},
	{
		name: 'Haval',
		coefficient: 1.1,
		models: [
			{ name: 'H6' },
			{ name: 'Jolion' },
			{ name: 'F7' },
			{ name: 'H9' },
			{ name: 'M6' },
			{ name: 'Dargo' },
			{ name: 'F5' }
		]
	},
	{
		name: 'JAC',
		coefficient: 1.1,
		models: [
			{ name: 'J7' },
			{ name: 'S3' },
			{ name: 'S5' },
			{ name: 'T6' },
			{ name: 'JS4' },
			{ name: 'JS6' },
			{ name: 'M5' },
			{ name: 'T8' }
		]
	},
	{
		name: 'Ravon',
		coefficient: 1.1,
		models: [
			{ name: 'R2' },
			{ name: 'R3' },
			{ name: 'R4' },
			{ name: 'Gentra' },
			{ name: 'Nexia R3' },
			{ name: 'Matiz' }
		]
	},
	{
		name: 'Opel',
		coefficient: 1.1,
		models: [
			{ name: 'Astra' },
			{ name: 'Corsa' },
			{ name: 'Insignia' },
			{ name: 'Mokka' },
			{ name: 'Grandland X' },
			{ name: 'Zafira' },
			{ name: 'Combo' },
			{ name: 'Crossland X' }
		]
	},
	{
		name: 'Changan',
		coefficient: 1.1,
		models: [
			{ name: 'CS35 Plus' },
			{ name: 'CS55' },
			{ name: 'CS75' },
			{ name: 'Eado' },
			{ name: 'UNI-T' },
			{ name: 'Alsvin' },
			{ name: 'UNI-K' },
			{ name: 'Raeton CC' }
		]
	},
	{
		name: 'Jetour',
		coefficient: 1.1,
		models: [
			{ name: 'X70' },
			{ name: 'X90' },
			{ name: 'Dashing' },
			{ name: 'T2' },
			{ name: 'X70 Plus' },
			{ name: 'Traveler' }
		]
	},
	{
		name: 'LiXiang',
		coefficient: 1.1,
		models: [
			{ name: 'L7' },
			{ name: 'L8' },
			{ name: 'L9' },
			{ name: 'One' },
			{ name: 'Mega' }
		]
	}
];

const carBodyTypes = [
	{ name: 'Седан', coefficient: 1.0 },
	{ name: 'Хэтчбек', coefficient: 0.95 },
	{ name: 'Универсал', coefficient: 1.05 },
	{ name: 'Внедорожник (SUV)', coefficient: 1.2 },
	{ name: 'Кроссовер (CUV)', coefficient: 1.15 },
	{ name: 'Купе', coefficient: 1.1 },
	{ name: 'Кабриолет / Родстер', coefficient: 1.3 },
	{ name: 'Минивэн', coefficient: 1.25 },
	{ name: 'Пикап', coefficient: 1.2 },
	{ name: 'Лифтбек', coefficient: 1.0 },
	{ name: 'Фургон / Микроавтобус', coefficient: 1.3 },
	{ name: 'Купе-кроссовер', coefficient: 1.25 },
	{ name: 'Электромобиль', coefficient: 1.1 }
];

async function main() {
	// Очистка таблиц, лучше очистить модели машин тоже
	/*	await prismaService.brand.deleteMany();
	await prismaService.carBrand.deleteMany();*/

	// Очистка данных
	await prismaService.bodyType.deleteMany();
	await prismaService.modelCar.deleteMany();
	await prismaService.brand.deleteMany();

	await prismaService.orderService.deleteMany();
	await prismaService.orderCategory.deleteMany();
	await prismaService.order.deleteMany();
	await prismaService.service.deleteMany();
	await prismaService.serviceCategory.deleteMany();

	await prismaService.user.deleteMany();

	for (const user of users) {
		const createdUsers = await prismaService.user.create({
			data: {
				name: user.name,
				email: user.email,
				password: user.password ? await hash(user.password) : '',
				phone: user.phone,
				role: user.role,
				isVerified: true,
				specialization: user.specialization ? user.specialization : ''
			}
		});

		console.log(`✅ Создан user: ${createdUsers.name}`);
	}

	for (const category of categories) {
		const createdCategory = await prismaService.serviceCategory.create({
			data: {
				name: category.name,
				img: category.image,
				description: category.description,
				services: {
					create: category.services.map(s => ({
						name: s.name,
						description: s.description,
						basePriceMin: s.base_price_min,
						basePriceMax: s.base_price_max
					}))
				}
			}
		});

		console.log(`✅ Создана категория: ${createdCategory.name}`);
	}

	for (const car of cars) {
		const createdCategory = await prismaService.brand.create({
			data: {
				name: car.name,
				coefficient: car.coefficient,
				models: {
					create: car.models.map(s => ({
						name: s.name
					}))
				}
			}
		});

		console.log(`✅ Создана машины: ${createdCategory.name}`);
	}

	// Создаем bodyType
	for (const bodyType of carBodyTypes) {
		const created = await prismaService.bodyType.create({
			data: bodyType
		});
		console.log(`✅ Создан тип кузова: ${created.name}`);
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
