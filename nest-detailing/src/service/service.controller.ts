import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Post
} from '@nestjs/common';

import { Authorization } from '@/auth/decorators/auth.decorator';
import { CreateMainServiceDto } from '@/service/dto/create-main-service.dto';
import { CreateServicesDto } from '@/service/dto/create-services.dto';

import { UserRole } from '../../generated/prisma';

import { ServiceService } from './service.service';

@Controller('services')
export class ServiceController {
	constructor(private readonly serviceService: ServiceService) {}
	@Authorization(UserRole.ADMIN)
	@HttpCode(HttpStatus.OK)
	@Post('main-service')
	async createMainService(@Body() dto: CreateMainServiceDto) {
		return this.serviceService.createMainService(dto);
	}

	@Authorization(UserRole.ADMIN)
	@HttpCode(HttpStatus.OK)
	@Post()
	async createServices(@Body() dto: CreateServicesDto) {
		return this.serviceService.createServices(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Get('main-services')
	async getMainService() {
		return this.serviceService.getMainService();
	}
}
