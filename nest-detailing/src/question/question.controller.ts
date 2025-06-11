import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Post
} from '@nestjs/common';

import { Authorization } from '@/auth/decorators/auth.decorator';
import { CreateQuestionDto } from '@/question/dto/create-question.dto';

import { UserRole } from '../../generated/prisma';

import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
	constructor(private readonly questionService: QuestionService) {}

	@Post()
	create(@Body() dto: CreateQuestionDto) {
		return this.questionService.create(dto);
	}

	@Authorization(UserRole.ADMIN, UserRole.MASTER)
	@HttpCode(HttpStatus.OK)
	@Get()
	findAll() {
		return this.questionService.findAll();
	}
}
