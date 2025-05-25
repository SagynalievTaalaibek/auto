import { Injectable } from '@nestjs/common';

import { CreateMainServiceDto } from '@/order/dto/create-main-service.dto';
import { CreateOrderClientDto } from '@/order/dto/create-order-client.dto';
import { CreateOrderCRMDto } from '@/order/dto/create-order-crm.dto';
import { CreateServicesDto } from '@/order/dto/create-services.dto';
import { PrismaService } from '@/prisma/prisma.service';

import { OrderStatus } from '../../generated/prisma';

interface OrderFilter {
	status?: OrderStatus;
	masterId?: string;
	userId?: string;
	profile?: boolean;
	crm?: boolean;
	createdAt?: {
		$gte?: Date;
		$lte?: Date;
	};
}

@Injectable()
export class OrderService {
	constructor(private readonly prismaService: PrismaService) {}

	async createOrderCRM(dto: CreateOrderCRMDto) {
		const {
			userId,
			carBrand,
			carModel,
			carYear,
			carColor,
			categoryIds,
			serviceIds,
			masterId,
			startTime,
			endTime,
			totalPrice,
			photos,
			notes
		} = dto;

		await this.prismaService.order.create({
			data: {
				userId,
				carBrand,
				carModel,
				carYear,
				carColor,
				masterId,
				startTime: startTime ? new Date(startTime) : undefined,
				endTime: endTime ? new Date(endTime) : undefined,
				totalPrice,
				photos: photos ?? [],
				notes,
				orderCategories: {
					create: categoryIds.map(categoryId => ({
						category: { connect: { id: categoryId } }
					}))
				},
				orderServices: {
					create: serviceIds.map(serviceId => ({
						service: { connect: { id: serviceId } }
					}))
				}
			},
			include: {
				orderCategories: {
					include: { category: true }
				},
				orderServices: {
					include: { service: true }
				},
				user: true,
				master: true
			}
		});

		return {
			message: 'Заказ успешно создан в CRM'
		};
	}

	async createOrder(dto: CreateOrderClientDto, userId: string) {
		const {
			carBrand,
			carModel,
			carYear,
			carColor,
			categoryIds,
			serviceIds,
			notes
		} = dto;

		await this.prismaService.order.create({
			data: {
				userId,
				carBrand,
				carModel,
				carYear,
				carColor,
				notes,
				orderCategories: {
					create: categoryIds.map(categoryId => ({
						category: { connect: { id: categoryId } }
					}))
				},
				orderServices: {
					create: serviceIds.map(serviceId => ({
						service: { connect: { id: serviceId } }
					}))
				}
			},
			include: {
				orderCategories: {
					include: { category: true }
				},
				orderServices: {
					include: { service: true }
				}
			}
		});

		return {
			message: 'Вы успешно создали заказ'
		};
	}

	async findAll(filters: OrderFilter, userId: string) {
		if (filters.profile) {
			return this.prismaService.order.findMany({
				where: {
					userId: userId
				},
				select: {
					id: true,
					carBrand: true,
					orderCategories: {
						select: {
							category: {
								select: {
									name: true
								}
							}
						}
					},
					createdAt: true,
					status: true
				},
				orderBy: { createdAt: 'desc' }
			});
		}

		if (filters.crm) {
			return this.prismaService.order.findMany({
				select: {
					id: true,
					carBrand: true,
					carModel: true,
					carYear: true,
					carColor: true,
					createdAt: true,
					status: true,
					user: {
						select: {
							name: true,
							email: true,
							phone: true
						}
					}
				},
				orderBy: { createdAt: 'desc' }
			});
		}

		return this.prismaService.order.findMany({
			include: {
				user: {
					select: {
						name: true,
						email: true,
						phone: true
					}
				},
				orderCategories: {
					include: { category: true }
				},
				orderServices: {
					include: { service: true }
				}
			}
		});
	}

	async findOne(id: string) {
		return this.prismaService.order.findUnique({
			where: { id },
			include: {
				user: {
					select: {
						id: true,
						name: true,
						email: true,
						phone: true
					}
				},
				master: {
					select: {
						id: true,
						name: true
					}
				},
				orderCategories: {
					include: { category: true }
				},
				orderServices: {
					include: { service: true }
				}
			}
		});
	}

	/*async updateOrder(id: string, dto: CreateOrderClientDto, userId: string) {
		const order = await this.prismaService.order.findUnique({ where: { id } });
		if (!order) throw new NotFoundException('Order not found');

		const {
			carBrand,
			carModel,
			carYear,
			carColor,
			categoryIds,
			serviceIds,
			notes,
			masterId,
			photos,
			totalPrice
		} = dto;

		// Удалим старые связи перед добавлением новых
		await this.prismaService.orderCategory.deleteMany({
			where: { orderId: id }
		});
		await this.prismaService.orderService.deleteMany({
			where: { orderId: id }
		});

		return this.prismaService.order.update({
			where: { id },
			data: {
				userId,
				carBrand,
				carModel,
				carYear,
				carColor,
				notes,
				masterId,
				photos,
				totalPrice,
				orderCategories: {
					create: categoryIds.map(categoryId => ({
						category: { connect: { id: categoryId } }
					}))
				},
				orderServices: {
					create: serviceIds.map(serviceId => ({
						service: { connect: { id: serviceId } }
					}))
				}
			},
			include: {
				orderCategories: { include: { category: true } },
				orderServices: { include: { service: true } }
			}
		});
	}*/

	/// SERVICES ///

	async createMainService(dto: CreateMainServiceDto) {
		const { name } = dto;

		return this.prismaService.serviceCategory.create({
			data: {
				name
			}
		});
	}

	async createServices(dto: CreateServicesDto) {
		const { name, categoryId } = dto;

		return this.prismaService.service.create({
			data: {
				name,
				categoryId
			},
			include: {
				orderServices: {
					include: { service: true }
				}
			}
		});
	}

	async getMainService() {
		return this.prismaService.serviceCategory.findMany({
			include: {
				services: true
			}
		});
	}
}
