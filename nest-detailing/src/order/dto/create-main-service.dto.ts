import { IsString } from 'class-validator';

export class CreateMainServiceDto {
	@IsString()
	name: string;
}
