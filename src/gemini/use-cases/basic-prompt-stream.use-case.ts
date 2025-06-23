import { GoogleGenAI } from "@google/genai";
import { BasicPromptDto } from "../dtos/basic-prompt.dto";

interface Options{
    model?:string;
    systemInstruction?:string;
}

export const basicPromptStreamUseCase = async (ai: GoogleGenAI, basicPromptDto: BasicPromptDto, options?:Options) => {
    
    const {
        model = 'gemini-2.5-flash',
        systemInstruction = 'Responds in english, markdown format'
    } = options ?? {};
    
    
    const response = await ai.models.generateContentStream({
            model: model,
            contents: basicPromptDto.prompt,
            config:{
                systemInstruction: systemInstruction,
            }
        });
       return response;
}