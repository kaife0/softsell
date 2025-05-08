import OpenAI from 'openai';
import type { ChatMessage } from './types';

// Initialize the OpenAI client
// For free tier usage, you would add your API key here
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || 'YOUR_OPENAI_API_KEY', // Replace with your API key or use environment variable
  dangerouslyAllowBrowser: true // Only for demo - in production, make API calls from your backend
});

// Knowledge base for license selling
const licenseSellingKnowledge = `
CredEx is a platform that helps professionals sell their licenses.

Process for selling a license:
1. Register on the CredEx platform
2. Verify your license credentials
3. List your license with desired price and terms
4. Accept offers from buyers
5. Complete the transfer through our secure escrow system

Pricing: 
- You set your own asking price
- Market value depends on license type, location, and demand
- CredEx takes a 5% commission on successful sales

Transfer Process:
- All regulatory requirements are handled through our platform
- We provide digital document signing
- Legal verification is included
- Transfers typically take 5-10 business days

Common Questions:
- Yes, you can sell partial ownership of certain licenses
- All payments are secured through our escrow system
- We handle all regulatory filings
- Background checks for buyers are included
- You can withdraw your listing at any time before an offer is accepted
`;

export const generateAIResponse = async (
  userMessage: string,
  previousMessages: ChatMessage[]
): Promise<string> => {
  try {
    // For a lightweight demo without using actual API calls, you can use this mock implementation
    // This helps avoid costs while developing
    if (import.meta.env.DEV || !openai.apiKey.startsWith('sk-')) {
      return mockAIResponse(userMessage);
    }

    // Format the conversation history for the API call
    const messages = previousMessages.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.text
    }));

    // Add the new user message
    messages.push({
      role: 'user',
      content: userMessage
    });

    // Add system message with context
    messages.unshift({
      role: 'system',
      content: `You are a helpful assistant for CredEx, a platform for selling professional licenses. 
      Be concise, informative, and helpful. Use this knowledge base: ${licenseSellingKnowledge}`
    });

    // Make the API call to OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages as any,
      temperature: 0.7,
      max_tokens: 150
    });

    return completion.choices[0].message.content || 
      "I'm sorry, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    return "I apologize, but I'm having trouble connecting to my knowledge base. Please try again later.";
  }
};

// Mock AI responses for development without API calls
const mockAIResponse = (userMessage: string): string => {
  const normalizedQuestion = userMessage.toLowerCase();
  
  if (normalizedQuestion.includes('sell') && normalizedQuestion.includes('license')) {
    return "To sell your license on CredEx, first register an account, verify your credentials, then list your license with your desired price. Once verified, your listing will be visible to potential buyers.";
  }
  
  if (normalizedQuestion.includes('transfer') || normalizedQuestion.includes('ownership')) {
    return "The license transfer process is handled securely through our platform. Once a buyer makes an offer and you accept, we'll guide you through document signing and regulatory filings. The process typically takes 5-10 business days.";
  }
  
  if (normalizedQuestion.includes('fee') || normalizedQuestion.includes('commission') || normalizedQuestion.includes('cost')) {
    return "CredEx charges a 5% commission on successful sales. There are no upfront fees or costs to list your license on the platform.";
  }
  
  if (normalizedQuestion.includes('price') || normalizedQuestion.includes('worth') || normalizedQuestion.includes('value')) {
    return "You set your own asking price for your license. The market value depends on factors like license type, location, and current demand. Our platform provides market insights to help you price competitively.";
  }
  
  // Default response
  return "I'd be happy to help with your license selling questions. Could you provide more details about what you'd like to know about selling your professional license on CredEx?";
};