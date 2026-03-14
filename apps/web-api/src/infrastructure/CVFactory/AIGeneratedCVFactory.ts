import { type CV } from '@app/domain';
import { jsonToXml, xmlToJson } from '@app/lib';
import { ICVFactory } from '@application/interfaces/ICVFactory';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { generateText } from 'ai';
import dotenv from 'dotenv';

dotenv.config();

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export class AIGeneratedCVFactory implements ICVFactory {
  async createCV(prompt: string, currentCV: CV): Promise<CV> {
    try {
      const currentCVXml = jsonToXml(currentCV);

      const { text: updatedXml } = await generateText({
        model: openrouter(process.env.OPENROUTER_MODEL!),

        temperature: 0.1,

        system: `
You are a professional CV editor.

You will receive:

1) A user's request describing how they want to modify their CV
2) The CV represented as XML

Your job is to EDIT the XML to satisfy the user's request.

Rules:

- Preserve the XML structure
- Do not invent new tags
- Only modify the content when necessary
- Keep the CV professional and concise
- Return ONLY valid XML
- Do not include explanations
- Do not wrap the XML in markdown
- Output must start with <cv> and end with </cv>
- Cards must have at least one detail
`,

        prompt: `
User request:
${prompt}

Current CV (XML):

${currentCVXml}

Edit the XML to satisfy the user's request and return the updated XML.
`,
      });

      const updatedCV = xmlToJson(updatedXml);

      return updatedCV;
    } catch {
      throw new Error('Failed to generate CV');
    }
  }
}
