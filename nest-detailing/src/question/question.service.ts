import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';
import { CreateQuestionDto } from '@/question/dto/create-question.dto';

@Injectable()
export class QuestionService {
	constructor(private readonly prismaService: PrismaService) {}

	async create(data: CreateQuestionDto) {
		return this.prismaService.questions.create({
			data
		});
	}

	async findAll() {
		return this.prismaService.questions.findMany();
	}
}
