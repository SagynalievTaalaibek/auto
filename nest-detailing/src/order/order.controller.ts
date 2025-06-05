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
import { CreateOrderClientDto } from '@/order/dto/create-order-client.dto';
import { CreateOrderCRMDto } from '@/order/dto/create-order-crm.dto';

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
		return this.orderService.createOrderClient(dto, userId);
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

	/// BY-ID

	@Authorization()
	@HttpCode(HttpStatus.OK)
	@Get(':id')
	public async findOne(
		@Param('id') id: string,
		@Query()
		query: {
			update: boolean;
		}
	) {
		if (query.update) {
			return this.orderService.findOne({ update: query.update }, id);
		}

		return this.orderService.findOne({}, id);
	}
}
