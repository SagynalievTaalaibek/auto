import {
	IsArray,
	IsNumber,
	IsOptional,
	IsString,
	IsUUID
} from 'class-validator';

export class CreateUpdateOrderDto {
	@IsString()
	carBrand: string;

	@IsString()
	carModel: string;

	@IsString()
	carYear: string;

	@IsString()
	carColor: string;

	@IsArray()
	categoryIds: string[]; // ID выбранных категорий

	@IsArray()
	serviceIds: string[]; // ID выбранных подуслуг

	@IsOptional()
	@IsString()
	notes?: string;

	@IsOptional()
	@IsUUID()
	masterId?: string;

	@IsOptional()
	@IsArray()
	photos?: string[];

	@IsOptional()
	@IsNumber()
	totalPrice?: number;
}
