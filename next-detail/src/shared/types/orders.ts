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

export interface Order {
	id: string;
	userId: string;

	carBrand: string;
	carModel: string;
	carYear: string;
	carColor: string;

	status: OrderStatus;
	startTime?: string;
	endTime?: string;
	totalPrice?: number;
	notes?: string;
	masterId?: string;

	photos: string[];

	createdAt: string;
	updatedAt: string;
}

export interface OrderCategory {
	id: string;
	orderId: string;
	categoryId: string;
}

export interface OrderService {
	id: string;
	orderId: string;
	serviceId: string;
}

export interface OrderGetProfile {
	id: string;

	carBrand: string;
	status: OrderStatus;

	orderCategories: {
		category: {
			name: string;
		};
	}[];

	createdAt: string;
}
