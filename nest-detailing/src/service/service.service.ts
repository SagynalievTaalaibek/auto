import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';
import { CreateMainServiceDto } from '@/service/dto/create-main-service.dto';
import { CreateServicesDto } from '@/service/dto/create-services.dto';

@Injectable()
export class ServiceService {
	constructor(private readonly prismaService: PrismaService) {}

	async createMainService(dto: CreateMainServiceDto) {
		const { name, description, img } = dto;

		return this.prismaService.serviceCategory.create({
			data: {
				name,
				description,
				img
			}
		});
	}

	async createServices(dto: CreateServicesDto) {
		const { name, categoryId, description, basePriceMin, basePriceMax } = dto;

		return this.prismaService.service.create({
			data: {
				name,
				categoryId,
				description,
				basePriceMin,
				basePriceMax
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
