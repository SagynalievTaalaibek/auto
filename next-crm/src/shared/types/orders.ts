// Service
export interface ServiceCategory {
	id: string;
	name: string;
}

export interface Service {
	id: string;
	name: string;
	categoryId: string;
}

export interface IMainServiceData extends ServiceCategory {
	services: Service[];
}

// types/order.ts
export type OrderStatus =
	| 'NEW'
	| 'CONFIRMED'
	| 'IN_PROGRESS'
	| 'COMPLETED'
	| 'PAID'
	| 'CLOSED'
	| 'CANCELLED'
	| 'RESCHEDULED';

export interface IOrder {
	id: string;
	userId: string;
	carBrand: string;
	carModel: string;
	carYear: string;
	carColor: string;
	status: OrderStatus;
	startTime: string; // ISO формат
	endTime: string | null;
	totalPrice: number | null;
	notes: string;
	masterId: string;
	photos: string[];
	createdAt: string;
	updatedAt: string;
	user: {
		id: string;
		name: string;
		email: string;
		phone: string;
	};
	master: {
		id: string;
		name: string;
	};
	orderCategories: OrderCategory[];
	orderServices: OrderService[];
}

export interface OrderCategory {
	id: string;
	orderId: string;
	categoryId: string;
	category: {
		id: string;
		name: string;
	};
}

export interface OrderService {
	id: string;
	orderId: string;
	serviceId: string;
	service: {
		id: string;
		name: string;
		categoryId: string;
	};
}

export interface OrderGetCRM {
	id: string;

	carBrand: string;
	carModel: string;
	carYear: string;
	carColor: string;
	status: OrderStatus;

	user: {
		name: string;
		email: string;
		phone: string;
	};

	createdAt: string;
}
