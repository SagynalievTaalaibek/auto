import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { EmailConfirmationModule } from '@/auth/email-confirmation/email-confirmation.module';
import { PasswordRecoveryModule } from '@/auth/password-recovery/password-recovery.module';
import { TwoFactorAuthModule } from '@/auth/two-factor-auth/two-factor-auth.module';
import { MailModule } from '@/libs/mail/mail.module';

import { AuthModule } from './auth/auth.module';
import { IS_DEV_ENV } from './libs/common/utils/is-dev.util';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { ServiceModule } from './service/service.module';
import { CarsModule } from './cars/cars.module';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			ignoreEnvFile: !IS_DEV_ENV,
			isGlobal: true
		}),
		PrismaModule,
		AuthModule,
		UserModule,
		MailModule,
		EmailConfirmationModule,
		PasswordRecoveryModule,
		TwoFactorAuthModule,
		OrderModule,
		ServiceModule,
		CarsModule,
		AnalyticsModule
	]
})
export class AppModule {}
