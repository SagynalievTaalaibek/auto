import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateOrderClientDto } from '@/order/dto/create-order-client.dto';
import { CreateOrderCRMDto } from '@/order/dto/create-order-crm.dto';
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
			modelCarId,
			bodyTypeId,
			carYear,
			carColor,
			orderCategoryIds,
			orderServiceIds,
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
				modelCarId,
				bodyTypeId,
				carYear,
				carColor,
				masterId,
				startTime: startTime ? new Date(startTime) : undefined,
				endTime: endTime ? new Date(endTime) : undefined,
				totalPrice,
				photos: photos ?? [],
				notes,
				orderCategories: {
					create: orderCategoryIds.map(categoryId => ({
						category: { connect: { id: categoryId } }
					}))
				},
				orderServices: {
					create: orderServiceIds.map(serviceId => ({
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

	async createOrderClient(dto: CreateOrderClientDto, userId: string) {
		const {
			modelCarId,
			carColor,
			carYear,
			bodyTypeId,
			orderCategoryIds,
			orderServiceIds,
			notes
		} = dto;

		await this.prismaService.order.create({
			data: {
				userId,
				modelCarId,
				carColor,
				carYear,
				bodyTypeId,
				notes,
				orderCategories: {
					create: orderCategoryIds.map(categoryId => ({
						category: { connect: { id: categoryId } }
					}))
				},
				orderServices: {
					create: orderServiceIds.map(serviceId => ({
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
					modelCar: {
						select: {
							name: true
						}
					},
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
					modelCar: true,
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

	async findOne(filters: { update?: boolean }, id: string) {
		if (filters.update) {
			const order = await this.prismaService.order.findUnique({
				where: { id },
				include: {
					modelCar: {
						include: {
							brand: true
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

			if (!order)
				throw new NotFoundException(
					'Заказа не найден. Пожалуйста, проверьте введенные данные'
				);

			return {
				userId: order.userId,
				carBrand: order.modelCar.brand.name,
				carModel: order.modelCar.name,
				carYear: order.carYear,
				carColor: order.carColor,
				categoryIds: order.orderCategories.map(oc => oc.category.id),
				serviceIds: order.orderServices.map(os => os.service.id),
				masterId: order.masterId ?? undefined,
				startTime: order.startTime?.toISOString() ?? '',
				endTime: order.endTime?.toISOString() ?? '',
				totalPrice: order.totalPrice ?? 0,
				notes: order.notes ?? '',
				photos: order.photos ?? []
			};
		}

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

	async updateOrder(id: string, dto: CreateOrderClientDto, userId: string) {
		const order = await this.prismaService.order.findUnique({ where: { id } });
		if (!order) throw new NotFoundException('Order not found');

		const {
			modelCarId,
			carColor,
			carYear,
			bodyTypeId,
			orderCategoryIds,
			orderServiceIds,
			notes
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
				modelCarId,
				carYear,
				carColor,
				notes,
				bodyTypeId,
				orderCategories: {
					create: orderCategoryIds.map(categoryId => ({
						category: { connect: { id: categoryId } }
					}))
				},
				orderServices: {
					create: orderServiceIds.map(serviceId => ({
						service: { connect: { id: serviceId } }
					}))
				}
			},
			include: {
				orderCategories: { include: { category: true } },
				orderServices: { include: { service: true } },
				modelCar: { include: { brand: true } }
			}
		});
	}
}
