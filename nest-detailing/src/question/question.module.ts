import { Module } from '@nestjs/common';

import { UserService } from '@/user/user.service';

import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';

@Module({
	controllers: [QuestionController],
	providers: [QuestionService, UserService],
	exports: [QuestionService]
})
export class QuestionModule {}
