// ============= ENHANCED CHATBOT WITH PROPERTY INFO ============= 

// Access properties data if available (from properties.js)
let allPropertiesData = typeof allProperties !== 'undefined' ? allProperties : [];

// Place information database
const placeInfo = {
  mumbai: { state: 'Maharashtra', info: '🏙️ Financial capital of India. Known for Bollywood, beaches, and business hubs. Climate: Tropical. Best time: Oct-May.' },
  pune: { state: 'Maharashtra', info: '📚 Oxford of the East. Tech and education hub. Known for Koregaon Park. Climate: Pleasant. Best time: Sep-May.' },
  alibag: { state: 'Maharashtra', info: '🏖️ Beach paradise. Popular seaside destination near Mumbai. Known for sea views and weekend getaways.' },
  bangalore: { state: 'Karnataka', info: '💻 Silicon Valley of India. Weather capital. Hub for IT and startups. Climate: Cool and pleasant year-round.' },
  delhi: { state: 'Delhi', info: '🏛️ National capital. Historical monuments and cultural heritage. Extremely hot summers, cold winters.' },
  kochi: { state: 'Kerala', info: '⛵ Queen of the Arabian Sea. Backwaters and coconut palms. Tropical climate. Known for Spice trade.' },
  goa: { state: 'Goa', info: '🏖️ Party capital with beaches and Portuguese heritage. Tropical climate. Best time: Oct-Mar.' },
  jaipur: { state: 'Rajasthan', info: '🏰 Pink City. Desert landscape with Mughal architecture. Hot and dry. Best time: Oct-Mar.' },
  hyderabad: { state: 'Telangana', info: '💎 City of Pearls. IT hub with growing real estate. Climate: Hot summers, cool winters.' },
  shimla: { state: 'Himachal Pradesh', info: '❄️ Hill station with snow. Cool mountain climate. Popular for honeymoon. Altitude: 7,180 ft.' },
  srinagar: { state: 'J&K', info: '🏞️ Paradise on Earth. Dal Lake and houseboats. Cool summers, heavy snowfall in winter.' },
  kolkata: { state: 'West Bengal', info: '🎨 Cultural capital. Known for Darjeeling tea and Tagore legacy. Hot and humid with monsoons.' },
  ahmedabad: { state: 'Gujarat', info: '🏛️ Gandhi\'s home. Textile hub. Hot and dry climate. Rich in heritage sites.' },
  lucknow: { state: 'U.P.', info: '🍜 Nawabi City. Known for Lucknowi cuisine and architecture. Hot summers, cool winters.' },
  agra: { state: 'U.P.', info: '🕌 Taj Mahal city. Historical significance. Hot summers, pleasant winters.' },
  panaji: { state: 'Goa', info: '⛪ Capital of Goa. Beach town with Portuguese influence. Warm and tropical.' }
};

// Chatbot responses with property details
const chatbotResponses = {
  greeting: [
    "🏠 Welcome to LuxeEstate! I'm your AI Property Assistant. Let me help you find your dream home across India! What are you looking for?",
    "👋 Hello! Ready to explore premium properties in India? Ask me about any city or use our AI recommendation feature!",
    "🏡 Hi there! I can help you with property search, location info, or filter by budget. What interests you?"
  ],
  
  locationinfo: [
    "📍 I can tell you about cities like Mumbai, Pune, Bangalore, Delhi, Goa, Kochi, Jaipur, Hyderabad, Shimla, and many more! Which city interests you?",
    "🌏 Ask me about any Indian city! I'll share details about climate, attractions, and why it's great for living."
  ],

  propertycount: [
    "🏢 We now have 45 premium properties across 20+ Indian cities! From luxury sea villas to modern apartments.",
    "✨ Explore our expanding collection! We have properties in metros, hill stations, and beach destinations."
  ],

  mumbai: [
    "🏙️ **MUMBAI** - Financial Capital\n📍 Climate: Tropical (Hot & Humid)\n🌟 Our Properties:\n• Mumbai Highrise Flat - ₹3,20,00,000 (3 BHK)\n• Premium locations: Bandra, Fort, Marine Drive\n💼 Great for: Business professionals, expats",
    "Mumbai is India's financial hub! We have modern high-rises with stunning city skyline views. Would you like specific property details?"
  ],

  pune: [
    "🎓 **PUNE** - Oxford of the East\n🏢 Tech Hub with Great Culture\n🌟 Our Featured Property:\n• Penthouse in Pune - ₹2,50,00,000 (3 BHK)\n• Location: Koregaon Park\n🎯 Great for: Tech professionals, families",
    "Pune offers a perfect blend of education, tech industry, and pleasant weather. Our penthouse is in the heart of the city!"
  ],

  alibag: [
    "🏖️ **ALIBAG** - Beach Paradise\n🌊 Sea View & Luxury Destination\n🌟 Our Signature Property:\n• Luxury Sea View Villa - ₹4,80,00,000 (4 BHK)\n• Features: Pool, 2 acres, Smart Home\n⛱️ Great for: Luxury seekers, weekend retreats",
    "Alibag is the ultimate sea-view destination! Our villa offers private beach access and 5-star amenities."
  ],

  bangalore: [
    "💻 **BANGALORE** - Silicon Valley of India\n🌤️ Climate: Cool & Pleasant Year-round\n🌟 Our Properties:\n• Tech Hub Apartment - ₹1,20,00,000 (2 BHK)\n• Near: HITEC City, IT Parks\n📊 Great for: Startups, tech teams, professionals",
    "Bangalore is perfect for tech careers! We have properties near all major IT parks with modern amenities."
  ],

  delhi: [
    "🏛️ **DELHI** - National Capital\n🏙️ Historic & Modern Mix\n🌟 Our Delhi Properties:\n• Family Home - ₹1,60,00,000 (3 BHK)\n• Noida Smart City Apartment - ₹1,10,00,000 (2 BHK)\n🎭 Great for: Government jobs, families, culture lovers",
    "Delhi offers political importance and modern infrastructure. Great schools and healthcare facilities!"
  ],

  goa: [
    "🏖️ **GOA** - Beach Paradise with Party Culture\n🌅 Beautiful Beaches & Portuguese Heritage\n🌟 Our Featured Property:\n• Goa Beach Paradise Villa - ₹2,50,00,000 (4 BHK)\n• Location: Panaji\n🎉 Great for: Beach lovers, tourists, expats",
    "Goa is India's ultimate beach destination! Our villa offers direct beach access and sunset views."
  ],

  kochi: [
    "⛵ **KOCHI** - Queen of the Arabian Sea\n🌴 Backwaters & Tropical Paradise\n🌟 Our Property:\n• Kochi Backwater Villa - ₹1,95,00,000 (3 BHK)\n• Kerala Architecture Style\n🌊 Great for: Retirees, nature lovers, tourists",
    "Kochi is incredibly beautiful with backwaters and coconut palms. Perfect for a peaceful lifestyle!"
  ],

  shimla: [
    "❄️ **SHIMLA** - Himalayan Hill Station\n🏔️ Snow & Mountain Views\n🌟 Our Mountain Home:\n• Shimla Mountain Resort - ₹1,25,00,000 (3 BHK)\n• Altitude: 7,180 ft with stunning peaks\n❄️ Great for: Honeymoon, retirement, adventure",
    "Shimla offers cool climate and beautiful snow-capped mountains! Perfect for escaping hot cities."
  ],

  srinagar: [
    "🏞️ **SRINAGAR** - Paradise on Earth\n🌺 Dal Lake & Mughal Gardens\n🌟 Our Featured Property:\n• Dal Lake Paradise - ₹1,40,00,000 (3 BHK)\n• Houseboat views & garden access\n🛶 Great for: Honeymooners, nature lovers",
    "Srinagar is breathtakingly beautiful! Dal Lake offers incredible views and peaceful living."
  ],

  hyderabad: [
    "💎 **HYDERABAD** - City of Pearls\n🏢 Growing IT Hub\n🌟 Our Properties:\n• Luxury Home - ₹2,20,00,000 (3 BHK)\n• Tech Park Apartment - ₹1,30,00,000 (3 BHK)\n💼 Great for: Tech professionals, startups",
    "Hyderabad is rapidly developing with amazing tech infrastructure and affordable luxury!"
  ],

  jaipur: [
    "🏰 **JAIPUR** - Pink City\n🏛️ Mughal Architecture & Culture\n🌟 Our Property:\n• Traditional Villa - ₹1,80,00,000 (4 BHK)\n• Spacious gardens, heritage charm\n🎨 Great for: Culture enthusiasts, families",
    "Jaipur offers desert beauty with incredible Mughal architecture and colorful culture!"
  ],

  kolkata: [
    "🎨 **KOLKATA** - Cultural Capital\n🏛️ Literary & Arts Hub\n🌟 Our Property:\n• Victorian Mansion - ₹2,10,00,000 (4 BHK)\n• Historic area with heritage charm\n📚 Great for: Artists, writers, intellectuals",
    "Kolkata is India's cultural heart with amazing literature, art, and cuisine!"
  ],

  price: [
    "💰 **BUDGET OPTIONS**:\n• Below ₹1 Cr: Cozy apartments in emerging cities\n• ₹1-2 Cr: 2-3 BHK in tier-2 cities\n\n**PREMIUM OPTIONS**:\n• ₹2-3 Cr: Luxury apartments in metros\n• Above ₹3 Cr: Villas with premium amenities\n\nWhat's your ideal budget?",
    "Our properties range from ₹52 Lakhs to ₹4.8 Crores! Tell me your budget and I'll find perfect matches."
  ],

  luxury: [
    "👑 **LUXURY PROPERTIES** (Featured):\n• Luxury Sea View Villa, Alibag - ₹4,80,00,000\n• Goa Beach Paradise Villa - ₹2,50,00,000\n• Penthouse in Pune - ₹2,50,00,000\n• Gurugram Golf Course - ₹2,10,00,000\n\n✨ All include premium amenities & views!",
    "Our luxury collection features sea villas, golf course properties, and mountain estates with premium finishes!"
  ],

  affordable: [
    "🏡 **AFFORDABLE OPTIONS** (Smart Buys):\n• Patna Riverside - ₹52,00,000 (2 BHK)\n• Itanagar Hill View - ₹65,00,000 (2 BHK)\n• Shillong Cottage - ₹72,00,000 (2 BHK)\n• Guwahati Tea Garden - ₹78,00,000 (3 BHK)\n\n💎 Great value with beautiful locations!",
    "We have excellent affordable properties in emerging cities with high growth potential!"
  ],

  featured: [
    "⭐ **FEATURED PROPERTIES**:\n1. Luxury Sea View Villa - ₹4,80,00,000 🌊\n2. Goa Beach Paradise - ₹2,50,00,000 🏖️\n3. Shimla Mountain Resort - ₹1,25,00,000 ❄️\n4. Srinagar Dal Lake - ₹1,40,00,000 🏞️\n5. Gurugram Golf Course - ₹2,10,00,000 ⛳\n\nWould you like details about any of these?",
    "Our featured properties offer incredible value and unique experiences across India!"
  ],

  beds: [
    "🛏️ **BEDROOM OPTIONS**:\n• 2 BHK: Perfect for couples & small families - ₹50L-₹1.5Cr\n• 3 BHK: Ideal for growing families - ₹1Cr-₹2.5Cr\n• 4 BHK: Spacious family villas - ₹1.8Cr-₹4.8Cr\n\nHow many bedrooms do you need?",
    "We have 2, 3, and 4-bedroom properties across all price ranges!"
  ],

  amenities: [
    "✨ **OUR AMENITIES**:\n✓ Swimming pools & gyms\n✓ Smart home automation\n✓ 24/7 security\n✓ Parking facilities\n✓ Scenic views (sea, mountains)\n✓ Private gardens\n✓ Modern kitchens & bathrooms\n✓ Premium finishes",
    "All our properties come with modern amenities like gyms, security, and smart home features!"
  ],

  ai_help: [
    "🤖 **AI FEATURES**:\n• Click 'Get Recommendations' for smart suggestions\n• Tell me: 'I want 3 bedroom villa under 2 crore'\n• Use filters: Region, Price, Bedrooms\n• Search by city name\n\nTry the AI now! It learns your preferences!",
    "Use our AI Recommendation Engine! It understands natural language and finds perfect properties!"
  ],

  schedule: [
    "📅 **SCHEDULE A TOUR**:\n• Click any property card\n• Click 'Schedule Tour' button\n• Or call: 📞 (555) 123-4567\n• Email: 📧 hello@luxestate.com\n\nOur team responds within 24 hours!",
    "Want to see a property in person? Click the property card and book a tour!"
  ],

  contact: [
    "📞 **CONTACT US**:\n☎️ Phone: (555) 123-4567\n📧 Email: hello@luxestate.com\n📍 Address: 123 Luxury Ave, New York, NY 10001\n⏰ Available: 24/7 for inquiries",
    "Reach out anytime! Our team is ready to help with any property queries."
  ],

  help: [
    "🤖 **I CAN HELP WITH**:\n• Property search by city\n• Budget & price range info\n• Location & city information\n• Amenities & features\n• Schedule tours\n• Use filters & AI recommendations\n\nWhat would you like to know?",
    "Ask me anything about Indian properties, cities, prices, or our services!"
  ],

  default: [
    "That's interesting! 🤔 I can help you find properties by:\n• City name (Mumbai, Bangalore, etc.)\n• Price range (Budget/Luxury)\n• Bedrooms (2/3/4 BHK)\n• Location features (Beach, Mountain, etc.)\n\nWhat interests you?",
    "I'm here to help! Try asking about a specific city, budget range, or property type. 😊"
  ]
};

// Keywords mapping
const keywords = {
  greeting: ['hi', 'hello', 'hey', 'start', 'welcome', 'namaste'],
  locationinfo: ['cities', 'locations', 'places', 'where'],
  propertycount: ['how many', 'properties available', 'portfolio'],
  mumbai: ['mumbai', 'high rise', 'skyline', 'financial'],
  pune: ['pune', 'penthouse', 'koregaon', 'tech'],
  alibag: ['alibag', 'sea view', 'villa', 'beach paradise', 'luxury sea'],
  bangalore: ['bangalore', 'bengaluru', 'tech hub', 'it park'],
  delhi: ['delhi', 'capital', 'noida', 'gurugram'],
  goa: ['goa', 'panaji', 'beach', 'party'],
  kochi: ['kochi', 'backwater', 'kerala', 'arabian sea'],
  shimla: ['shimla', 'hill station', 'mountain', 'snow'],
  srinagar: ['srinagar', 'dal lake', 'kashmir', 'paradise'],
  hyderabad: ['hyderabad', 'telangana', 'pearls'],
  jaipur: ['jaipur', 'pink city', 'rajasthan'],
  kolkata: ['kolkata', 'west bengal', 'cultural'],
  price: ['price', 'cost', 'budget', 'crore', 'rupees', 'how much', 'affordable', 'expensive'],
  luxury: ['luxury', 'premium', 'high end', 'expensive', 'villa'],
  affordable: ['cheap', 'budget', 'low cost', 'affordable', 'under'],
  featured: ['featured', 'best', 'top', 'popular'],
  beds: ['bedroom', 'bhk', 'rooms', 'space', 'size'],
  amenities: ['amenities', 'features', 'gym', 'pool', 'security', 'parking'],
  ai_help: ['ai', 'recommendation', 'filter', 'search', 'suggestion'],
  schedule: ['schedule', 'tour', 'visit', 'book', 'appointment'],
  contact: ['contact', 'call', 'phone', 'email', 'reach', 'number'],
  help: ['help', 'what can you do', 'how', 'guide', 'menu']
};

// Get random response
function getRandomResponse(responseArray) {
  return responseArray[Math.floor(Math.random() * responseArray.length)];
}

// Identify intent from user message
function identifyIntent(userMessage) {
  const message = userMessage.toLowerCase().trim();
  
  for (const [intent, words] of Object.entries(keywords)) {
    if (words.some(word => message.includes(word))) {
      return intent;
    }
  }
  
  return 'default';
}

// ============= LANGUAGE SUPPORT ============= 
let currentLanguage = localStorage.getItem('propertyLanguage') || 'en';

// Translation dictionaries
const translations = {
  en: {
    greeting: [
      "🏠 Welcome to LuxeEstate! I'm your AI Property Assistant. Let me help you find your dream home across India! What are you looking for?",
      "👋 Hello! Ready to explore premium properties in India? Ask me about any city or use our AI recommendation feature!",
      "🏡 Hi there! I can help you with property search, location info, or filter by budget. What interests you?"
    ],
    locationinfo: [
      "📍 I can tell you about cities like Mumbai, Pune, Bangalore, Delhi, Goa, Kochi, Jaipur, Hyderabad, Shimla, and many more! Which city interests you?",
      "🌏 Ask me about any Indian city! I'll share details about climate, attractions, and why it's great for living."
    ],
    propertycount: [
      "🏢 We now have 45 premium properties across 20+ Indian cities! From luxury sea villas to modern apartments.",
      "✨ Explore our expanding collection! We have properties in metros, hill stations, and beach destinations."
    ]
  },
  hi: {
    greeting: [
      "🏠 LuxeEstate में आपका स्वागत है! मैं आपका AI संपत्ति सहायक हूँ। मुझे भारत भर में आपका सपनों का घर खोजने में मदद करने दें! आप क्या ढूंढ रहे हैं?",
      "👋 नमस्ते! भारत में प्रीमियम संपत्तियों की खोज करने के लिए तैयार? मुझसे किसी भी शहर के बारे में पूछें!",
      "🏡 नमस्कार! मैं संपत्ति खोज, स्थान जानकारी, या बजट के आधार पर फिल्टर करने में मदद कर सकता हूँ।"
    ],
    locationinfo: [
      "📍 मैं मुंबई, पुणे, बेंगलुरु, दिल्ली, गोवा, कोच्चि, जयपुर, हैदराबाद, शिमला और कई अन्य शहरों के बारे में बता सकता हूँ! किस शहर में आपकी रुचि है?",
      "🌏 मुझसे किसी भी भारतीय शहर के बारे में पूछें! मैं जलवायु, आकर्षण और रहने के लिए इसकी बेहतरी के बारे में विवरण साझा करूंगा।"
    ],
    propertycount: [
      "🏢 हमारे पास अब 20+ भारतीय शहरों में 45 प्रीमियम संपत्तियां हैं! विलास समुद्री विलाओं से आधुनिक अपार्टमेंट तक।",
      "✨ हमारे विस्तारित संग्रह की खोज करें! हमारे पास मेट्रो, पहाड़ी स्टेशन और समुद्र तटीय गंतव्यों में संपत्तियां हैं।"
    ]
  },
  mr: {
    greeting: [
      "🏠 LuxeEstate मध्ये आपले स्वागत आहे! मी आपला AI संपत्ती सहायक आहे. भारत भर मध्ये आपले स्वप्नांचे घर शोधण्यात मला मदत करू द्या! आप काय शोधत आहात?",
      "👋 नमस्कार! भारतातील प्रीमियम मालमत्तेचा शोध घेण्यास तयार? मला कोणत्याही शहराबद्दल विचारा!",
      "🏡 नमस्कार! मी मालमत्ता शोध, स्थान माहिती, किंवा बजेटनुसार फिल्टर करण्यात मदत करू शकतो."
    ],
    locationinfo: [
      "📍 मी मुंबई, पुणे, बेंगलुरु, दिल्ली, गोवा, कोच्चि, जयपूर, हैदराबाद, शिमला आणि बर्याच शहरांविषयी सांगू शकतो! कोणत्या शहरात आपली रुची आहे?",
      "🌏 मला कोणत्याही भारतीय शहराबद्दल विचारा! मी हवामान, आकर्षण आणि राहण्यासाठी सुसंवादबद्दलचे तपशील सामायिक करीन."
    ],
    propertycount: [
      "🏢 आमच्याकडे आता 20+ भारतीय शहरांमध्ये 45 प्रीमियम मालमत्तायें आहेत! विलास समुद्र विलास वाहिन्यांपासून आधुनिक अपार्टमेंट पर्यंत.",
      "✨ आमच्या विस्तारित संग्रहाचा शोध घ्या! आमच्याकडे मेट्रो, टेकडी स्टेशन आणि समुद्र किनारे गंतव्यांमध्ये मालमत्तायें आहेत."
    ]
  },
  fr: {
    greeting: [
      "🏠 Bienvenue chez LuxeEstate! Je suis votre assistant immobilier IA. Laissez-moi vous aider à trouver la maison de vos rêves en Inde! Que recherchez-vous?",
      "👋 Bonjour! Prêt à explorer les propriétés premium en Inde? Demandez-moi n'importe quelle ville!",
      "🏡 Bonjour! Je peux vous aider avec la recherche immobilière, les informations sur les lieux ou filtrer par budget."
    ],
    locationinfo: [
      "📍 Je peux vous parler de villes comme Mumbai, Pune, Bangalore, Delhi, Goa, Kochi, Jaipur, Hyderabad, Shimla et bien d'autres! Quelle ville vous intéresse?",
      "🌏 Posez-moi des questions sur n'importe quelle ville indienne! Je vais partager des détails sur le climat et les attractions."
    ],
    propertycount: [
      "🏢 Nous avons maintenant 45 propriétés premium dans plus de 20 villes indiennes! Des villas de luxe en bord de mer aux appartements modernes.",
      "✨ Explorez notre collection en expansion! Nous avons des propriétés dans les métropoles, les stations de montagne et les destinations balnéaires."
    ]
  }
};

// Place info translations
const placeInfoTranslations = {
  en: placeInfo,
  hi: {
    mumbai: { state: 'महाराष्ट्र', info: '🏙️ भारत की वित्तीय राजधानी। बॉलीवुड, समुद्र तट और व्यावसायिक केंद्रों के लिए जानी जाती है। जलवायु: उष्णकटिबंधीय। सर्वश्रेष्ठ समय: अक्टूबर-मई।' },
    pune: { state: 'महाराष्ट्र', info: '📚 पूर्व का ऑक्सफोर्ड। प्रौद्योगिकी और शिक्षा हब। कोरेगांव पार्क के लिए जाना जाता है। जलवायु: सुखद। सर्वश्रेष्ठ समय: सितंबर-मई।' },
    bangalore: { state: 'कर्नाटक', info: '💻 भारत की सिलिकॉन वैली। मौसम राजधानी। आईटी और स्टार्टअप का केंद्र। जलवायु: ठंडी और सुखद साल भर।' }
  },
  mr: {
    mumbai: { state: 'महाराष्ट्र', info: '🏙️ भारताची आर्थिक राजधानी. बॉलीवुड, समुद्रकिनारे आणि व्यावसायिक केंद्रांसाठी ओळखली जाते. वातावरण: उष्णकटिबंधीय. सर्वोत्तम समय: ऑक्टोबर-मे.' },
    pune: { state: 'महाराष्ट्र', info: '📚 पूर्वेतील ऑक्सफोर्ड. तंत्रज्ञान आणि शिक्षा केंद्र. कोरेगांव पार्कसाठी ओळखली जाते. वातावरण: आनंददायक. सर्वोत्तम समय: सप्टेंबर-मे.' },
    bangalore: { state: 'कर्नाटक', info: '💻 भारताची सिलिकॉन व्हॅली. हवामान राजधानी. आयटी आणि स्टार्टअप हब. वातावरण: थंड आणि सुखद वर्षभर.' }
  },
  fr: {
    mumbai: { state: 'Maharashtra', info: '🏙️ Capitale financière de l\'Inde. Connue pour Bollywood, les plages et les centres d\'affaires. Climat: Tropical. Meilleure époque: oct-mai.' },
    pune: { state: 'Maharashtra', info: '📚 Oxford de l\'Est. Hub technologique et éducatif. Connu pour Koregaon Park. Climat: Agréable. Meilleure époque: sep-mai.' },
    bangalore: { state: 'Karnataka', info: '💻 Silicon Valley de l\'Inde. Capitale météorologique. Hub informatique et startups. Climat: Frais et agréable toute l\'année.' }
  }
};

// Get chatbot response with language support
function getChatbotResponse(userMessage) {
  const intent = identifyIntent(userMessage);
  let responseList = chatbotResponses[intent] || chatbotResponses.default;
  
  // Get translation if available
  if (translations[currentLanguage] && translations[currentLanguage][intent]) {
    responseList = translations[currentLanguage][intent];
  }
  
  return getRandomResponse(responseList);
}

// DOM Elements
const chatbotContainer = document.getElementById('chatbotContainer');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');
const chatbotToggle = document.getElementById('chatbotToggle');
const historyBtn = document.getElementById('historyBtn');
const propertiesModal = document.getElementById('propertiesModal');
const modalClose = document.getElementById('modalClose');
const themeToggle = document.getElementById('themeToggle');

// Theme management
let currentTheme = localStorage.getItem('chatbotTheme') || 'light';

// Apply theme on page load
function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('chatbotTheme', theme);
  
  if (theme === 'dark') {
    chatbotContainer.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  } else {
    chatbotContainer.classList.remove('dark-mode');
    themeToggle.textContent = '🌙';
  }
}

// Theme toggle handler
themeToggle.addEventListener('click', () => {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
});

// Chat history storage
let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
let historyIndex = -1;

// Save chat to history
function saveChatToHistory() {
  const messages = chatbotMessages.innerHTML;
  if (messages && messages.length > 0) {
    chatHistory.push({
      date: new Date().toLocaleString(),
      messages: messages
    });
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
  }
}

// Load chat from history
function loadChatFromHistory(index) {
  if (index >= 0 && index < chatHistory.length) {
    chatbotMessages.innerHTML = chatHistory[index].messages;
    historyIndex = index;
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
}

// History button handler
historyBtn.addEventListener('click', () => {
  if (chatHistory.length === 0) {
    addMessage("📜 No chat history available. Start a new conversation!", false);
    return;
  }
  
  historyIndex = historyIndex === -1 ? chatHistory.length - 1 : historyIndex;
  historyIndex = (historyIndex - 1 + chatHistory.length) % chatHistory.length;
  loadChatFromHistory(historyIndex);
  addMessage(`📜 Showing chat #${historyIndex + 1} from ${chatHistory[historyIndex].date}`, false);
});

// Show properties modal for a city
function showCityProperties(city) {
  const cityKey = city.toLowerCase().trim();
  const placeData = placeInfoTranslations[currentLanguage] || placeInfo;
  const cityInfo = placeData[cityKey];
  
  if (!cityInfo) {
    addMessage("Sorry, I don't have information about this city yet. Try cities like Mumbai, Pune, Bangalore, Delhi, Goa, Kochi, etc.", false);
    return;
  }
  
  // Get properties for this city
  const cityProperties = allPropertiesData.filter(prop => 
    prop.city.toLowerCase() === cityKey
  );
  
  if (cityProperties.length === 0) {
    addMessage(`We currently don't have properties in ${city}. Try asking about: Mumbai, Pune, Bangalore, Delhi, Goa, Kochi, etc.`, false);
    return;
  }
  
  // Populate modal
  document.getElementById('modalCityName').textContent = `🏠 ${city.toUpperCase()} - Properties`;
  
  const placeInfoDiv = document.getElementById('modalPlaceInfo');
  placeInfoDiv.innerHTML = `
    <strong>📍 Location:</strong> ${cityInfo.state}<br>
    <strong>ℹ️ Information:</strong> ${cityInfo.info}
  `;
  
  const propertiesList = document.getElementById('modalPropertiesList');
  propertiesList.innerHTML = cityProperties.map((prop, idx) => `
    <div class="property-item" data-index="${idx}">
      <div class="property-header">
        <span class="property-name">${prop.title}</span>
        <span class="property-price">₹${(prop.price / 10000000).toFixed(2)}Cr</span>
        <span class="expand-arrow">▼</span>
      </div>
      <div class="property-details">
        <div class="detail-row">
          <span class="detail-label">📍 Location:</span>
          <span class="detail-value">${prop.city}, ${prop.state}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">🛏️ Bedrooms:</span>
          <span class="detail-value">${prop.beds} BHK</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">🚿 Bathrooms:</span>
          <span class="detail-value">${prop.baths}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">📐 Area:</span>
          <span class="detail-value">${prop.area}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">💰 Price:</span>
          <span class="detail-value">₹${(prop.price / 10000000).toFixed(2)} Crore</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">📝 Description:</span>
          <span class="detail-value">${prop.description}</span>
        </div>
      </div>
    </div>
  `).join('');
  
  // Add expand/collapse functionality
  document.querySelectorAll('.property-header').forEach(header => {
    header.addEventListener('click', function() {
      const item = this.closest('.property-item');
      item.classList.toggle('expanded');
    });
  });
  
  // Show modal
  propertiesModal.classList.add('active');
}

// Modal close handlers
modalClose.addEventListener('click', () => {
  propertiesModal.classList.remove('active');
});

propertiesModal.addEventListener('click', (e) => {
  if (e.target === propertiesModal) {
    propertiesModal.classList.remove('active');
  }
});

// Add message to chat
function addMessage(text, isUser = false) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${isUser ? 'user-message' : 'bot-message'}`;
  
  const messagePara = document.createElement('p');
  messagePara.innerHTML = text.replace(/\n/g, '<br>');
  messagePara.style.whiteSpace = 'pre-wrap';
  messagePara.style.wordWrap = 'break-word';
  
  messageDiv.appendChild(messagePara);
  chatbotMessages.appendChild(messageDiv);
  
  // Auto scroll
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Handle send message
function sendMessage() {
  const userText = chatbotInput.value.trim();
  
  if (!userText) return;
  
  addMessage(userText, true);
  chatbotInput.value = '';
  
  // Check if user is asking about a specific city
  const cities = ['mumbai', 'pune', 'alibag', 'bangalore', 'delhi', 'goa', 'kochi', 'shimla', 'srinagar', 'hyderabad', 'jaipur', 'kolkata', 'ahmedabad', 'lucknow', 'agra', 'panaji'];
  const userLower = userText.toLowerCase();
  let foundCity = null;
  
  for (let city of cities) {
    if (userLower.includes(city)) {
      foundCity = city;
      break;
    }
  }
  
  // Typing indicator
  setTimeout(() => {
    if (foundCity) {
      // Show city properties modal
      const botResponse = `🏠 Showing all properties in ${foundCity.charAt(0).toUpperCase() + foundCity.slice(1)}...`;
      addMessage(botResponse, false);
      setTimeout(() => {
        showCityProperties(foundCity);
      }, 600);
    } else {
      const botResponse = getChatbotResponse(userText);
      addMessage(botResponse, false);
    }
  }, 500);
  
  // Save to history
  saveChatToHistory();
}

// Event listeners
chatbotSend.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

// Minimize/Maximize
chatbotToggle.addEventListener('click', () => {
  chatbotContainer.classList.toggle('minimized');
  chatbotToggle.textContent = chatbotContainer.classList.contains('minimized') ? '+' : '−';
});

// ============= LANGUAGE SELECTOR ============= 
const languageToggle = document.getElementById('languageToggle');
const languageDropdown = document.getElementById('languageDropdown');
const languageOptions = document.querySelectorAll('.language-option');
const currentLangDisplay = document.getElementById('currentLang');

// Toggle dropdown
languageToggle.addEventListener('click', () => {
  languageToggle.classList.toggle('active');
  languageDropdown.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.language-selector')) {
    languageToggle.classList.remove('active');
    languageDropdown.classList.remove('active');
  }
});

// Handle language selection
languageOptions.forEach(option => {
  option.addEventListener('click', () => {
    const lang = option.getAttribute('data-lang');
    selectLanguage(lang);
  });
});

// Select language function
function selectLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('propertyLanguage', lang);
  
  // Update button display
  currentLangDisplay.textContent = lang.toUpperCase();
  
  // Update active state
  languageOptions.forEach(opt => {
    opt.classList.remove('active');
    if (opt.getAttribute('data-lang') === lang) {
      opt.classList.add('active');
    }
  });
  
  // Close dropdown
  languageToggle.classList.remove('active');
  languageDropdown.classList.remove('active');
  
  // Clear messages and show welcome message in new language
  chatbotMessages.innerHTML = '';
  const welcomeIntents = ['greeting'];
  const welcome = getRandomResponse(translations[currentLanguage].greeting || translations.en.greeting);
  addMessage(welcome, false);
}

// Set initial active language on page load
window.addEventListener('DOMContentLoaded', () => {
  languageOptions.forEach(opt => {
    if (opt.getAttribute('data-lang') === currentLanguage) {
      opt.classList.add('active');
      currentLangDisplay.textContent = currentLanguage.toUpperCase();
    }
  });
});

// Initialize theme on page load
window.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
});

// Welcome message
window.addEventListener('load', () => {
  setTimeout(() => {
    const welcomeMessages = {
      en: "👋 Welcome to LuxeEstate! I'm your AI assistant. Ask me about properties, cities, or prices! Type 'help' for more options.",
      hi: "👋 LuxeEstate में आपका स्वागत है! मैं आपका AI सहायक हूँ। मुझसे संपत्तियों, शहरों या कीमतों के बारे में पूछें! अधिक विकल्पों के लिए 'मदद' टाइप करें।",
      mr: "👋 LuxeEstate मध्ये आपले स्वागत आहे! मी आपला AI सहायक आहे. मला मालमत्तेबद्दल, शहरांबद्दल किंवा किंमतींबद्दल विचारा! अधिक पर्याय साठी 'मदत' टाइप करा.",
      fr: "👋 Bienvenue chez LuxeEstate! Je suis votre assistant IA. Demandez-moi des propriétés, des villes ou des prix! Tapez 'aide' pour plus d'options."
    };
    addMessage(welcomeMessages[currentLanguage] || welcomeMessages.en, false);
  }, 1000);
});
