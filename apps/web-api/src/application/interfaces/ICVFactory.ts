import { CV } from '@app/domain/src/entities';

export abstract class ICVFactory {
  abstract createCV(prompt: string, currentCV: CV): Promise<CV>;
}
