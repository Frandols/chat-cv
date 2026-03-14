import { type CV } from '@app/domain';
import { GenerateCvUseCase } from '@application/use-cases/GenerateCvUseCase';
import { Body, Controller, Post } from '@nestjs/common';
import { GenerateCVDto } from './web-api/dto/GenerateCVDto';

@Controller()
export class AppController {
  constructor(private readonly generateCVUseCase: GenerateCvUseCase) {}

  @Post()
  async generateCV(@Body() dto: GenerateCVDto): Promise<CV> {
    return await this.generateCVUseCase.execute(dto);
  }
}
