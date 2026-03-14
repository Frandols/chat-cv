import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { ZodValidationPipe } from 'nestjs-zod';
import { AppController } from './app.controller';
import { GenerateCvUseCase } from './application/use-cases/GenerateCvUseCase';
import { AIGeneratedCVFactory } from './infrastructure/CVFactory/AIGeneratedCVFactory';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 60_000,
        limit: 5,
      },
      {
        name: 'long',
        ttl: 3_600_000,
        limit: 30,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    {
      provide: GenerateCvUseCase,
      useFactory: () => {
        return new GenerateCvUseCase(new AIGeneratedCVFactory());
      },
    },
  ],
})
export class AppModule {}
