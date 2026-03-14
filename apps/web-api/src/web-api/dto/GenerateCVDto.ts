import { cvSchema } from '@app/lib';
import { createZodDto } from 'nestjs-zod';
import z from 'zod';

export const GenerateCVDtoSchema = z.object({
  prompt: z.string().trim().min(1).max(5000),
  currentCV: cvSchema,
});

export class GenerateCVDto extends createZodDto(GenerateCVDtoSchema) {}
