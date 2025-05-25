import {
	IsArray,
	IsDateString,
	IsEnum,
	IsNumber,
	IsOptional,
	IsString,
	IsUUID
} from 'class-validator';

import { OrderStatus } from '../../../generated/prisma';

export class CreateOrderCRMDto {
	@IsUUID()
	userId: string;

	@IsString()
	carBrand: string;

	@IsString()
	carModel: string;

	@IsString()
	carYear: string;

	@IsString()
	carColor: string;

	@IsArray()
	@IsUUID(undefined, { each: true })
	categoryIds: string[];

	@IsArray()
	@IsUUID(undefined, { each: true })
	serviceIds: string[];

	@IsOptional()
	@IsUUID()
	masterId?: string;

	@IsOptional()
	@IsDateString()
	startTime?: string;

	@IsOptional()
	@IsDateString()
	endTime?: string;

	@IsOptional()
	@IsNumber()
	totalPrice?: number;

	@IsOptional()
	@IsString()
	notes?: string;

	@IsOptional()
	@IsEnum(OrderStatus)
	status?: OrderStatus;

	@IsOptional()
	@IsArray()
	@IsString({ each: true })
	photos?: string[];
}
