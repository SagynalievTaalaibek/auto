import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateMainServiceDto } from '@/order/dto/create-main-service.dto';
import { CreateServicesDto } from '@/order/dto/create-services.dto';
import { CreateUpdateOrderDto } from '@/order/dto/create-update-order.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class OrderService {
	constructor(private readonly prismaService: PrismaService) {}

	async createOrder(dto: CreateUpdateOrderDto) {
		const {
			userId,
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

		return this.prismaService.order.create({
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
				orderCategories: {
					include: { category: true }
				},
				orderServices: {
					include: { service: true }
				}
			}
		});
	}

	async findAll() {
		return this.prismaService.order.findMany({
			include: {
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
		return this.prismaService.order.findUnique({ where: { id } });
	}

	async updateOrder(id: string, dto: CreateUpdateOrderDto) {
		const order = await this.prismaService.order.findUnique({ where: { id } });
		if (!order) throw new NotFoundException('Order not found');

		const {
			userId,
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
	}

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
