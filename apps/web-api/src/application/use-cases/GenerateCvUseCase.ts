import { type CV } from '@app/domain';
import { ICVFactory } from '../interfaces/ICVFactory';

export class GenerateCvUseCase {
  constructor(private readonly cvFactory: ICVFactory) {}

  async execute(request: GenerateCvRequest): Promise<CV> {
    const cv = await this.cvFactory.createCV(request.prompt, request.currentCV);

    return cv;
  }
}

interface GenerateCvRequest {
  prompt: string;
  currentCV: CV;
}
