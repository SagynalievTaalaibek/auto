import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Patch,
	Post
} from '@nestjs/common';

import { Authorization } from '@/auth/decorators/auth.decorator';
import { CreateMainServiceDto } from '@/order/dto/create-main-service.dto';
import { CreateServicesDto } from '@/order/dto/create-services.dto';
import { CreateUpdateOrderDto } from '@/order/dto/create-update-order.dto';

import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
	constructor(private readonly orderService: OrderService) {}

	@Authorization()
	@HttpCode(HttpStatus.OK)
	@Post()
	async createOrder(@Body() dto: CreateUpdateOrderDto) {
		return this.orderService.createOrder(dto);
	}

	@Authorization()
	@HttpCode(HttpStatus.OK)
	@Get()
	public async findAll() {
		return this.orderService.findAll();
	}

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
		@Param('id') id: string,
		@Body() dto: CreateUpdateOrderDto
	) {
		return this.orderService.updateOrder(id, dto);
	}

	// SERVICES //

	@Authorization()
	@HttpCode(HttpStatus.OK)
	@Post('main-service')
	async createMainService(@Body() dto: CreateMainServiceDto) {
		return this.orderService.createMainService(dto);
	}

	@Authorization()
	@HttpCode(HttpStatus.OK)
	@Post('services')
	async createServices(@Body() dto: CreateServicesDto) {
		return this.orderService.createServices(dto);
	}

	@Authorization()
	@HttpCode(HttpStatus.OK)
	@Get('main-service')
	async getMainService() {
		return this.orderService.getMainService();
	}
}
