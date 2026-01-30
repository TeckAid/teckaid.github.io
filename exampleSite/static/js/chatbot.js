// Simple AI Chatbot for TeckAid
// This chatbot answers basic questions about AI services

(function() {
  'use strict';

  // Chatbot knowledge base - FAQ about AI services
  const knowledgeBase = [
    {
      keywords: ['hello', 'hi', 'hey', 'greetings'],
      response: "Hello! I'm TeckAid's AI assistant. I'm here to answer questions about our AI services. How can I help you today?"
    },
    {
      keywords: ['what', 'services', 'offer', 'provide'],
      response: "TeckAid offers comprehensive AI services including:\n• Custom AI Development\n• Process Automation\n• Data Analytics & Insights\n• Natural Language Processing\n• Computer Vision\n• Machine Learning Integration\n\nWhich service interests you?"
    },
    {
      keywords: ['price', 'pricing', 'cost', 'how much'],
      response: "Our pricing varies based on project scope and requirements. We offer flexible engagement models including project-based and retainer options. I'd recommend scheduling a free consultation to discuss your specific needs and get a custom quote. Would you like to contact our team?"
    },
    {
      keywords: ['automation', 'automate', 'workflow'],
      response: "Our Process Automation service helps businesses streamline operations using AI. We can automate repetitive tasks, optimize workflows, and integrate intelligent decision-making into your processes. This typically results in 30-70% efficiency gains. Would you like to learn more about a specific use case?"
    },
    {
      keywords: ['machine learning', 'ml', 'model', 'training'],
      response: "We develop and train custom machine learning models tailored to your business needs. This includes data preparation, model selection, training, validation, and deployment. We work with various ML frameworks including TensorFlow, PyTorch, and scikit-learn. What type of problem are you looking to solve?"
    },
    {
      keywords: ['nlp', 'natural language', 'chatbot', 'text'],
      response: "Our NLP services include chatbot development, sentiment analysis, text classification, entity recognition, and language translation. We can build conversational AI systems that understand and respond to customer queries naturally. Interested in building a chatbot for your business?"
    },
    {
      keywords: ['computer vision', 'image', 'video', 'recognition'],
      response: "We provide Computer Vision solutions for image and video analysis, including object detection, facial recognition, quality inspection, and visual search. These solutions are perfect for manufacturing, security, retail, and healthcare industries. What's your use case?"
    },
    {
      keywords: ['data', 'analytics', 'insights', 'analysis'],
      response: "Our Data Analytics service transforms raw data into actionable insights using AI. We offer predictive analytics, trend analysis, customer segmentation, and business intelligence dashboards. We work with various data sources and can handle both structured and unstructured data. What kind of data are you looking to analyze?"
    },
    {
      keywords: ['contact', 'reach', 'email', 'phone', 'talk'],
      response: "You can reach us by:\n• Email: nasir@teckaid.com\n• Contact Form: Visit our Contact page\n• Schedule a free consultation to discuss your AI needs\n\nWould you like me to direct you to the contact page?"
    },
    {
      keywords: ['start', 'begin', 'get started', 'how to'],
      response: "Getting started with TeckAid is easy:\n1. Schedule a free consultation\n2. We'll discuss your needs and goals\n3. Receive a custom proposal\n4. Start your AI transformation\n\nWould you like to contact us to schedule a consultation?"
    },
    {
      keywords: ['industry', 'sector', 'vertical'],
      response: "We serve clients across various industries including:\n• Healthcare\n• Finance & Banking\n• Retail & E-commerce\n• Manufacturing\n• Technology\n• Professional Services\n\nOur AI solutions are customized for each industry's unique challenges. What industry are you in?"
    },
    {
      keywords: ['time', 'timeline', 'how long', 'duration'],
      response: "Project timelines vary based on complexity:\n• Simple automation: 2-4 weeks\n• Custom ML models: 1-3 months\n• Complex AI systems: 3-6 months\n\nWe provide detailed timelines during the consultation phase. Each project includes planning, development, testing, and deployment phases."
    },
    {
      keywords: ['thank', 'thanks'],
      response: "You're welcome! Is there anything else you'd like to know about our AI services?"
    }
  ];

  const defaultResponse = "That's a great question! While I can answer basic questions about our AI services, I'd recommend contacting our team for detailed information. You can reach us at nasir@teckaid.com or use our contact form. Is there anything else I can help you with?";

  // Find best matching response
  function findResponse(userInput) {
    const input = userInput.toLowerCase();
    
    for (const item of knowledgeBase) {
      for (const keyword of item.keywords) {
        if (input.includes(keyword)) {
          return item.response;
        }
      }
    }
    
    return defaultResponse;
  }

  // Create chatbot UI
  function createChatbotUI() {
    const chatbotHTML = `
      <div id="ai-chatbot" class="chatbot-container">
        <div id="chatbot-toggle" class="chatbot-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
        
        <div id="chatbot-window" class="chatbot-window" style="display: none;">
          <div class="chatbot-header">
            <h3>TeckAid AI Assistant</h3>
            <button id="chatbot-close" class="chatbot-close">&times;</button>
          </div>
          
          <div id="chatbot-messages" class="chatbot-messages">
            <div class="chatbot-message bot-message">
              <p>Hi! I'm your AI assistant. Ask me about TeckAid's AI services!</p>
            </div>
          </div>
          
          <div class="chatbot-input-container">
            <input 
              type="text" 
              id="chatbot-input" 
              class="chatbot-input" 
              placeholder="Type your question..."
              autocomplete="off"
            />
            <button id="chatbot-send" class="chatbot-send">Send</button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
  }

  // Add message to chat
  function addMessage(message, isUser = false) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const messageParagraph = document.createElement('p');
    messageParagraph.textContent = message;
    messageParagraph.style.whiteSpace = 'pre-line';
    
    messageDiv.appendChild(messageParagraph);
    messagesContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Handle user input
  function handleUserInput() {
    const input = document.getElementById('chatbot-input');
    const userMessage = input.value.trim();
    
    if (!userMessage) return;
    
    // Add user message
    addMessage(userMessage, true);
    
    // Clear input
    input.value = '';
    
    // Simulate typing delay
    setTimeout(() => {
      const response = findResponse(userMessage);
      addMessage(response, false);
    }, 500);
  }

  // Initialize chatbot
  function initChatbot() {
    createChatbotUI();
    
    const toggle = document.getElementById('chatbot-toggle');
    const close = document.getElementById('chatbot-close');
    const send = document.getElementById('chatbot-send');
    const input = document.getElementById('chatbot-input');
    const window = document.getElementById('chatbot-window');
    
    toggle.addEventListener('click', () => {
      window.style.display = window.style.display === 'none' ? 'flex' : 'none';
      if (window.style.display === 'flex') {
        input.focus();
      }
    });
    
    close.addEventListener('click', () => {
      window.style.display = 'none';
    });
    
    send.addEventListener('click', handleUserInput);
    
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleUserInput();
      }
    });
  }

  // Wait for DOM to load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
  } else {
    initChatbot();
  }
})();
