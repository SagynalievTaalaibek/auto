interface User {
	id: string;
	name: string;
	email: string;
	phone: string;
	role: 'REGULAR' | 'ADMIN' | 'MASTER';
	specialization?: string;
}

export const mockUsers: User[] = [
	{
		id: '1',
		name: 'Айбек Тургунов',
		email: 'aybek@example.com',
		phone: '+996700000001',
		role: 'ADMIN',
		specialization: '',
	},
	{
		id: '2',
		name: 'Жаныбек Абдыкадыров',
		email: 'janybek@example.com',
		phone: '+996700000002',
		role: 'MASTER',
		specialization: 'Полировка',
	},
	{
		id: '3',
		name: 'Алина Касымова',
		email: 'alina@example.com',
		phone: '+996700000003',
		role: 'MASTER',
		specialization: 'Химчистка',
	},
	{
		id: '4',
		name: 'Нурсултан Кубатов',
		email: 'nursultan@example.com',
		phone: '+996700000004',
		role: 'REGULAR',
		specialization: '',
	},
	{
		id: '5',
		name: 'Асем Турдали',
		email: 'asem@example.com',
		phone: '+996700000005',
		role: 'REGULAR',
		specialization: '',
	},
	{
		id: '6',
		name: 'Бектур Сатаров',
		email: 'bektur@example.com',
		phone: '+996700000006',
		role: 'MASTER',
		specialization: 'Оклейка салона',
	},
	{
		id: '7',
		name: 'Динара Токтосунова',
		email: 'dinara@example.com',
		phone: '+996700000007',
		role: 'REGULAR',
		specialization: '',
	},
	{
		id: '8',
		name: 'Тимур Асанов',
		email: 'timur@example.com',
		phone: '+996700000008',
		role: 'MASTER',
		specialization: 'Тонировка',
	},
	{
		id: '9',
		name: 'Эрнис Жээнбаев',
		email: 'ernis@example.com',
		phone: '+996700000009',
		role: 'ADMIN',
		specialization: '',
	},
	{
		id: '10',
		name: 'Медина Жапарова',
		email: 'medina@example.com',
		phone: '+996700000010',
		role: 'MASTER',
		specialization: 'Ремонт салона',
	},
];
