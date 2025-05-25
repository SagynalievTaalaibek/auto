import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Post,
	Query
} from '@nestjs/common';

import { Authorization } from '@/auth/decorators/auth.decorator';
import { Authorized } from '@/auth/decorators/authorized.decorator';
import { CreateMainServiceDto } from '@/order/dto/create-main-service.dto';
import { CreateOrderClientDto } from '@/order/dto/create-order-client.dto';
import { CreateOrderCRMDto } from '@/order/dto/create-order-crm.dto';
import { CreateServicesDto } from '@/order/dto/create-services.dto';

import { UserRole } from '../../generated/prisma';

import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
	constructor(private readonly orderService: OrderService) {}

	@Authorization()
	@HttpCode(HttpStatus.OK)
	@Post('crm')
	async createOrderCRM(@Body() dto: CreateOrderCRMDto) {
		return this.orderService.createOrderCRM(dto);
	}

	@Authorization()
	@HttpCode(HttpStatus.OK)
	@Post('client')
	async createOrder(
		@Authorized('id') userId: string,
		@Body() dto: CreateOrderClientDto
	) {
		return this.orderService.createOrder(dto, userId);
	}

	/*@Authorization()
	@HttpCode(HttpStatus.OK)
	@Patch(':id')
	public async updateOrder(
		@Authorized('id') userId: string,
		@Param('id') id: string,
		@Body() dto: CreateOrderClientDto
	) {
		return this.orderService.updateOrder(id, dto, userId);
	}*/

	@Authorization()
	@HttpCode(HttpStatus.OK)
	@Get()
	public async findAll(
		@Authorized('id') userId: string,
		@Query()
		query: {
			profile: boolean;
			crm: boolean;
		}
	) {
		if (query.profile) {
			return this.orderService.findAll({ profile: query.profile }, userId);
		}

		if (query.crm) {
			return this.orderService.findAll({ crm: query.crm }, userId);
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
}
