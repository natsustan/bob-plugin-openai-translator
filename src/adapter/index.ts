import { OpenAiAdapter } from './openai';
import { GeminiAdapter } from './gemini';
import type { ServiceAdapter, ServiceProvider } from '../types';
import { AzureOpenAiAdapter } from './azure-openai';
import { OpenAiCompatibleAdapter } from './openai-compatible';

export const getServiceAdapter = (serviceProvider: ServiceProvider): ServiceAdapter => {
  switch (serviceProvider) {
    case 'azure-openai':
      return new AzureOpenAiAdapter();
    case 'gemini':
      return new GeminiAdapter();
    case 'openai-compatible':
      return new OpenAiCompatibleAdapter();
    default:
      return new OpenAiAdapter();
  }
}