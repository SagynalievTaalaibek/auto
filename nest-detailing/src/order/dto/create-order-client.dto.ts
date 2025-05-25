import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateOrderClientDto {
	@IsString()
	carBrand: string;

	@IsString()
	carModel: string;

	@IsString()
	carYear: string;

	@IsString()
	carColor: string;

	@IsArray()
	categoryIds: string[];

	@IsArray()
	serviceIds: string[];

	@IsOptional()
	@IsString()
	notes?: string;
}
