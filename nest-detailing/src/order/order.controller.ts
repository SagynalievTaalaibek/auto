import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Patch,
	Post,
	Query
} from '@nestjs/common';

import { Authorization } from '@/auth/decorators/auth.decorator';
import { Authorized } from '@/auth/decorators/authorized.decorator';
import { CreateMainServiceDto } from '@/order/dto/create-main-service.dto';
import { CreateServicesDto } from '@/order/dto/create-services.dto';
import { CreateUpdateOrderDto } from '@/order/dto/create-update-order.dto';

import { UserRole } from '../../generated/prisma';

import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
	constructor(private readonly orderService: OrderService) {}

	@Authorization()
	@HttpCode(HttpStatus.OK)
	@Post()
	async createOrder(
		@Authorized('id') userId: string,
		@Body() dto: CreateUpdateOrderDto
	) {
		return this.orderService.createOrder(dto, userId);
	}

	@Authorization()
	@HttpCode(HttpStatus.OK)
	@Get()
	public async findAll(
		@Authorized('id') userId: string,
		@Query()
		query: {
			status?: string;
			masterId?: string;
			fromDate?: string;
			toDate?: string;
			userId?: string;
			profile: boolean;
		}
	) {
		if (query.profile) {
			return this.orderService.findAll({ profile: query.profile }, userId);
		}

		return this.orderService.findAll({}, userId);
	}

	// SERVICES //

	@Authorization(UserRole.ADMIN)
	@HttpCode(HttpStatus.OK)
	@Post('main-service')
	async createMainService(@Body() dto: CreateMainServiceDto) {
		return this.orderService.createMainService(dto);
	}

	@Authorization(UserRole.ADMIN)
	@HttpCode(HttpStatus.OK)
	@Post('services')
	async createServices(@Body() dto: CreateServicesDto) {
		return this.orderService.createServices(dto);
	}

	@Authorization()
	@HttpCode(HttpStatus.OK)
	@Get('main-services')
	async getMainService() {
		return this.orderService.getMainService();
	}

	/// BY-ID

	@Authorization()
	@HttpCode(HttpStatus.OK)
	@Get(':id')
	public async findOne(@Param('id') id: string) {
		return this.orderService.findOne(id);
	}

	@Authorization()
	@HttpCode(HttpStatus.OK)
	@Patch(':id')
	public async updateOrder(
		@Authorized('id') userId: string,
		@Param('id') id: string,
		@Body() dto: CreateUpdateOrderDto
	) {
		return this.orderService.updateOrder(id, dto, userId);
	}
}
