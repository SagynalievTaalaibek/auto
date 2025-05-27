import { IsString, IsUUID } from 'class-validator';

export class CreateServicesDto {
	@IsString()
	name: string;

	@IsUUID()
	categoryId: string;
}
