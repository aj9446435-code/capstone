// ============= PROPERTY DATA - ALL INDIA ============= 
const allProperties = [
  // MAHARASHTRA PROPERTIES
  {
    id: 1,
    title: "Luxury Sea View Villa",
    price: "₹4,80,00,000",
    city: "Alibag",
    state: "Maharashtra",
    country: "India",
    image: "image/download1.jpg",
    desc: "Stunning 4 BHK villa with private pool, sea view, and 2 acres of land. Modern amenities, smart home automation.",
    beds: "4",
    baths: "3",
    area: "5000",
    featured: true
  },
  {
    id: 2,
    title: "Penthouse in Pune",
    price: "₹2,50,00,000",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    image: "image/download2.jpg",
    desc: "Spacious 3 BHK penthouse near Koregaon Park with gym, swimming pool, and 24/7 security.",
    beds: "3",
    baths: "2",
    area: "3200",
    featured: true
  },
  {
    id: 3,
    title: "Mumbai Highrise Flat",
    price: "₹3,20,00,000",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    image: "image/download3.jpg",
    desc: "Modern 3 BHK with city skyline views, luxury finishes, and premium location in Bandra.",
    beds: "3",
    baths: "2",
    area: "2800",
    featured: true
  },
  {
    id: 4,
    title: "Bungalow near Lonavala",
    price: "₹1,40,00,000",
    city: "Lonavala",
    state: "Maharashtra",
    country: "India",
    image: "image/download4.jpg",
    desc: "Quiet 2 BHK bungalow in the hills with scenic views, garden, and close to nature.",
    beds: "2",
    baths: "2",
    area: "1800",
    featured: false
  },
  {
    id: 5,
    title: "Nagpur Modern Home",
    price: "₹1,20,00,000",
    city: "Nagpur",
    state: "Maharashtra",
    country: "India",
    image: "image/download5.jpg",
    desc: "2 BHK modern home in central Nagpur with parking and modern amenities.",
    beds: "2",
    baths: "2",
    area: "1600",
    featured: false
  },

  // TAMIL NADU PROPERTIES
  {
    id: 6,
    title: "Chennai Modern Apartment",
    price: "₹95,00,000",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    image: "image/download6.jpg",
    desc: "2 BHK modern apartment in central Chennai with excellent connectivity and amenities.",
    beds: "2",
    baths: "1",
    area: "1200",
    featured: false
  },
  {
    id: 7,
    title: "Coimbatore Tech Hub Flat",
    price: "₹75,00,000",
    city: "Coimbatore",
    state: "Tamil Nadu",
    country: "India",
    image: "image/download7.jpg",
    desc: "2 BHK apartment near IT parks with modern facilities.",
    beds: "2",
    baths: "1",
    area: "1000",
    featured: false
  },
  {
    id: 8,
    title: "Madurai Heritage Home",
    price: "₹85,00,000",
    city: "Madurai",
    state: "Tamil Nadu",
    country: "India",
    image: "image/download8.jpg",
    desc: "2 BHK home in quiet residential area near temples and temples.",
    beds: "2",
    baths: "2",
    area: "1400",
    featured: false
  },

  // DELHI PROPERTIES
  {
    id: 9,
    title: "Delhi Family Home",
    price: "₹1,60,00,000",
    city: "Delhi",
    state: "Delhi",
    country: "India",
    image: "image/download9.jpg",
    desc: "3 BHK in peaceful residential colony with good schools and parks nearby.",
    beds: "3",
    baths: "2",
    area: "2200",
    featured: false
  },
  {
    id: 10,
    title: "Noida Smart City Apartment",
    price: "₹1,10,00,000",
    city: "Noida",
    state: "Delhi",
    country: "India",
    image: "image/download1.jpg",
    desc: "2 BHK smart home with excellent connectivity and modern amenities.",
    beds: "2",
    baths: "1",
    area: "1100",
    featured: false
  },
  {
    id: 11,
    title: "Gurgaon Corporate Flat",
    price: "₹1,80,00,000",
    city: "Gurgaon",
    state: "Delhi",
    country: "India",
    image: "image/download2.jpg",
    desc: "3 BHK in corporate hub with metro connectivity.",
    beds: "3",
    baths: "2",
    area: "2000",
    featured: false
  },

  // KARNATAKA PROPERTIES
  {
    id: 12,
    title: "Bangalore Tech Hub Apartment",
    price: "₹1,20,00,000",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    image: "image/download3.jpg",
    desc: "2 BHK in IT hub with proximity to tech parks and shopping centers.",
    beds: "2",
    baths: "2",
    area: "1500",
    featured: false
  },
  {
    id: 13,
    title: "Mysore Palace View Villa",
    price: "₹85,00,000",
    city: "Mysore",
    state: "Karnataka",
    country: "India",
    image: "image/download4jpg.jpeg",
    desc: "3 BHK villa with palace views and heritage charm.",
    beds: "3",
    baths: "2",
    area: "1900",
    featured: false
  },
  {
    id: 14,
    title: "Mangalore Coastal Apartment",
    price: "₹95,00,000",
    city: "Mangalore",
    state: "Karnataka",
    country: "India",
    image: "image/download5.jpg",
    desc: "2 BHK near beaches with sea breeze and coastal charm.",
    beds: "2",
    baths: "2",
    area: "1300",
    featured: false
  },

  // TELANGANA PROPERTIES
  {
    id: 15,
    title: "Hyderabad Luxury Home",
    price: "₹2,20,00,000",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    image: "image/download6.jpg",
    desc: "3 BHK luxury villa with high-end finishes and premium location.",
    beds: "3",
    baths: "3",
    area: "2500",
    featured: false
  },
  {
    id: 16,
    title: "Hyderabad Tech Park Apartment",
    price: "₹1,30,00,000",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    image: "image/download7.jpg",
    desc: "3 BHK near HITEC City tech parks with all modern amenities.",
    beds: "3",
    baths: "2",
    area: "1700",
    featured: false
  },

  // RAJASTHAN PROPERTIES
  {
    id: 17,
    title: "Jaipur Traditional Villa",
    price: "₹1,80,00,000",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    image: "image/download8.jpg",
    desc: "4 BHK traditional villa with modern amenities and spacious gardens.",
    beds: "4",
    baths: "3",
    area: "4000",
    featured: false
  },
  {
    id: 18,
    title: "Jodhpur Heritage Home",
    price: "₹1,20,00,000",
    city: "Jodhpur",
    state: "Rajasthan",
    country: "India",
    image: "image/download9.jpg",
    desc: "3 BHK with blue city architecture and heritage charm.",
    beds: "3",
    baths: "2",
    area: "1800",
    featured: false
  },
  {
    id: 19,
    title: "Udaipur Lake View Apartment",
    price: "₹1,40,00,000",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    image: "image/download1.jpg",
    desc: "3 BHK with stunning lake views and romantic setting.",
    beds: "3",
    baths: "2",
    area: "1600",
    featured: false
  },

  // WEST BENGAL PROPERTIES
  {
    id: 20,
    title: "Kolkata Victorian Mansion",
    price: "₹2,10,00,000",
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    image: "image/download2.jpg",
    desc: "4 BHK Victorian-style mansion in heritage area.",
    beds: "4",
    baths: "3",
    area: "3500",
    featured: false
  },

  // PUNJAB PROPERTIES
  {
    id: 21,
    title: "Chandigarh Modern Home",
    price: "₹1,50,00,000",
    city: "Chandigarh",
    state: "Punjab",
    country: "India",
    image: "image/download3.jpg",
    desc: "3 BHK in planned city with excellent infrastructure.",
    beds: "3",
    baths: "2",
    area: "2000",
    featured: false
  },
  {
    id: 22,
    title: "Amritsar Golden Temple View",
    price: "₹85,00,000",
    city: "Amritsar",
    state: "Punjab",
    country: "India",
    image: "image/download4jpg.jpeg",
    desc: "2 BHK with Golden Temple views and spiritual location.",
    beds: "2",
    baths: "2",
    area: "1200",
    featured: false
  },

  // KERALA PROPERTIES
  {
    id: 23,
    title: "Kochi Backwater Villa",
    price: "₹1,95,00,000",
    city: "Kochi",
    state: "Kerala",
    country: "India",
    image: "image/download5.jpg",
    desc: "3 BHK on backwater with traditional Kerala architecture.",
    beds: "3",
    baths: "2",
    area: "2000",
    featured: false
  },
  {
    id: 24,
    title: "Thiruvananthapuram Beach Home",
    price: "₹1,70,00,000",
    city: "Thiruvananthapuram",
    state: "Kerala",
    country: "India",
    image: "image/download6.jpg",
    desc: "3 BHK beach home with sunset views.",
    beds: "3",
    baths: "2",
    area: "1800",
    featured: false
  },

  // GUJRAT PROPERTIES
  {
    id: 25,
    title: "Ahmedabad Modern Flat",
    price: "₹1,10,00,000",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    image: "image/download7.jpg",
    desc: "2 BHK in vibrant city center with metro connectivity.",
    beds: "2",
    baths: "1",
    area: "1100",
    featured: false
  },
  {
    id: 26,
    title: "Vadodara Heritage Palace",
    price: "₹1,60,00,000",
    city: "Vadodara",
    state: "Gujarat",
    country: "India",
    image: "image/download8.jpg",
    desc: "3 BHK near famous palace with historic charm.",
    beds: "3",
    baths: "2",
    area: "2100",
    featured: false
  },

  // UTTAR PRADESH PROPERTIES
  {
    id: 27,
    title: "Lucknow Nawabi Home",
    price: "₹90,00,000",
    city: "Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    image: "image/download9.jpg",
    desc: "3 BHK with Nawabi architecture and cultural heritage.",
    beds: "3",
    baths: "2",
    area: "1700",
    featured: false
  },
  {
    id: 28,
    title: "Agra Taj View Apartment",
    price: "₹80,00,000",
    city: "Agra",
    state: "Uttar Pradesh",
    country: "India",
    image: "image/download1.jpg",
    desc: "2 BHK with Taj Mahal views and historical significance.",
    beds: "2",
    baths: "1",
    area: "1000",
    featured: false
  },

  // HARYANA PROPERTIES
  {
    id: 29,
    title: "Faridabad Industrial City Flat",
    price: "₹85,00,000",
    city: "Faridabad",
    state: "Haryana",
    country: "India",
    image: "image/download2.jpg",
    desc: "2 BHK in industrial hub with modern amenities.",
    beds: "2",
    baths: "1",
    area: "1100",
    featured: false
  },

  // MADHYA PRADESH PROPERTIES
  {
    id: 30,
    title: "Indore Smart City Home",
    price: "₹1,05,00,000",
    city: "Indore",
    state: "Madhya Pradesh",
    country: "India",
    image: "image/download3.jpg",
    desc: "3 BHK in India's cleanest city with smart infrastructure.",
    beds: "3",
    baths: "2",
    area: "1600",
    featured: false
  },

  // ASSAM PROPERTIES
  {
    id: 31,
    title: "Guwahati Tea Garden Villa",
    price: "₹78,00,000",
    city: "Guwahati",
    state: "Assam",
    country: "India",
    image: "image/download4jpg.jpeg",
    desc: "Beautiful 3 BHK villa with tea garden views and serene surroundings.",
    beds: "3",
    baths: "2",
    area: "2200",
    featured: true
  },

  // HIMACHAL PRADESH PROPERTIES
  {
    id: 32,
    title: "Shimla Mountain Resort Home",
    price: "₹1,25,00,000",
    city: "Shimla",
    state: "Himachal Pradesh",
    country: "India",
    image: "image/download5.jpg",
    desc: "3 BHK luxury home with snow-capped mountain views.",
    beds: "3",
    baths: "2",
    area: "2000",
    featured: true
  },

  // JAMMU & KASHMIR PROPERTIES
  {
    id: 33,
    title: "Srinagar Dal Lake Paradise",
    price: "₹1,40,00,000",
    city: "Srinagar",
    state: "Jammu & Kashmir",
    country: "India",
    image: "image/download6.jpg",
    desc: "Stunning 3 BHK with direct Dal Lake views and Mughal gardens nearby.",
    beds: "3",
    baths: "2",
    area: "1900",
    featured: true
  },

  // UTTARAKHAND PROPERTIES
  {
    id: 34,
    title: "Dehradun Nature Escape Home",
    price: "₹1,15,00,000",
    city: "Dehradun",
    state: "Uttarakhand",
    country: "India",
    image: "image/download7.jpg",
    desc: "2 BHK eco-friendly home with forest views and peaceful location.",
    beds: "2",
    baths: "2",
    area: "1700",
    featured: false
  },

  // BIHAR PROPERTIES
  {
    id: 35,
    title: "Patna Riverside Apartment",
    price: "₹52,00,000",
    city: "Patna",
    state: "Bihar",
    country: "India",
    image: "image/download8.jpg",
    desc: "Modern 2 BHK apartment with Ganges river view.",
    beds: "2",
    baths: "1",
    area: "1200",
    featured: false
  },

  // JHARKHAND PROPERTIES
  {
    id: 36,
    title: "Ranchi Tech Park Home",
    price: "₹95,00,000",
    city: "Ranchi",
    state: "Jharkhand",
    country: "India",
    image: "image/download9.jpg",
    desc: "3 BHK near tech parks with modern amenities.",
    beds: "3",
    baths: "2",
    area: "1600",
    featured: false
  },

  // ODISHA PROPERTIES
  {
    id: 37,
    title: "Bhubaneswar Temple City Home",
    price: "₹1,05,00,000",
    city: "Bhubaneswar",
    state: "Odisha",
    country: "India",
    image: "image/download1.jpg",
    desc: "3 BHK in cultural city near ancient temples.",
    beds: "3",
    baths: "2",
    area: "1700",
    featured: false
  },

  // GOA PROPERTIES
  {
    id: 38,
    title: "Goa Beach Paradise Villa",
    price: "₹2,50,00,000",
    city: "Panaji",
    state: "Goa",
    country: "India",
    image: "image/download2.jpg",
    desc: "Luxury 4 BHK villa near pristine beaches with sunset views.",
    beds: "4",
    baths: "3",
    area: "3500",
    featured: true
  },

  // ANDHRA PRADESH PROPERTIES
  {
    id: 39,
    title: "Visakhapatnam Port City Home",
    price: "₹1,10,00,000",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    country: "India",
    image: "image/download3.jpg",
    desc: "Modern 3 BHK with beach access and port city charm.",
    beds: "3",
    baths: "2",
    area: "1800",
    featured: false
  },

  // TELANGANA EXPANSION
  {
    id: 40,
    title: "Secunderabad Cantonment Estate",
    price: "₹1,80,00,000",
    city: "Secunderabad",
    state: "Telangana",
    country: "India",
    image: "image/download4jpg.jpeg",
    desc: "4 BHK in historic cantonment area with heritage charm.",
    beds: "4",
    baths: "3",
    area: "2600",
    featured: true
  },

  // HARYANA EXPANSION
  {
    id: 41,
    title: "Gurugram Golf Course Apartment",
    price: "₹2,10,00,000",
    city: "Gurugram",
    state: "Haryana",
    country: "India",
    image: "image/download5.jpg",
    desc: "Luxury 3 BHK near golf course with premium amenities.",
    beds: "3",
    baths: "2",
    area: "2200",
    featured: true
  },

  // HIMACHAL PRADESH EXPANSION
  {
    id: 42,
    title: "Manali Snow Valley Estate",
    price: "₹1,60,00,000",
    city: "Manali",
    state: "Himachal Pradesh",
    country: "India",
    image: "image/download6.jpg",
    desc: "Stunning 3 BHK vacation home with snow-capped peaks.",
    beds: "3",
    baths: "2",
    area: "2100",
    featured: true
  },

  // ARUNACHAL PRADESH
  {
    id: 43,
    title: "Itanagar Hill View Home",
    price: "₹65,00,000",
    city: "Itanagar",
    state: "Arunachal Pradesh",
    country: "India",
    image: "image/download7.jpg",
    desc: "2 BHK with panoramic hill views in peaceful state capital.",
    beds: "2",
    baths: "2",
    area: "1500",
    featured: false
  },

  // MEGHALAYA
  {
    id: 44,
    title: "Shillong Cloud City Cottage",
    price: "₹72,00,000",
    city: "Shillong",
    state: "Meghalaya",
    country: "India",
    image: "image/download8.jpg",
    desc: "Charming 2 BHK cottage in the wettest place on Earth.",
    beds: "2",
    baths: "2",
    area: "1400",
    featured: false
  },

  // MANIPUR
  {
    id: 45,
    title: "Imphal Loktak Lake Villa",
    price: "₹68,00,000",
    city: "Imphal",
    state: "Manipur",
    country: "India",
    image: "image/download9.jpg",
    desc: "Beautiful 2 BHK near the floating Loktak Lake.",
    beds: "2",
    baths: "2",
    area: "1350",
    featured: false
  }
];

// ============= STATE VARIABLES ============= 
let filteredProperties = [...allProperties];
let renderedCount = 0;
const PAGE_SIZE = 4;
let currentViewMode = 'grid';

// ============= DOM ELEMENTS ============= 
const grid = document.getElementById('propertiesGrid');
const loadMoreWrap = document.getElementById('loadMoreWrap');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const regionSelect = document.getElementById('regionSelect');
const priceSelect = document.getElementById('priceSelect');
const searchInput = document.getElementById('searchInput');
const propertyCount = document.getElementById('propertyCount');
const modal = document.getElementById('propertyModal');

// ============= MODAL ELEMENTS ============= 
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalLocation = document.getElementById('modalLocation');
const modalDesc = document.getElementById('modalDesc');
const modalImage = document.getElementById('modalImage');
const modalBeds = document.getElementById('modalBeds');
const modalBaths = document.getElementById('modalBaths');
const modalArea = document.getElementById('modalArea');

// ============= RENDER FUNCTIONS ============= 
function renderNextBatch() {
  const slice = filteredProperties.slice(renderedCount, renderedCount + PAGE_SIZE);
  
  slice.forEach(property => {
    const card = createPropertyCard(property);
    grid.appendChild(card);
  });
  
  renderedCount += slice.length;
  
  // Update property count dynamically
  propertyCount.textContent = `Showing ${renderedCount} of ${filteredProperties.length} properties`;
  
  updateLoadMoreVisibility();
}

function createPropertyCard(property) {
  const card = document.createElement('article');
  card.className = 'card';
  
  const html = `
    <div class="card-image">
      <img 
        src="${property.image}" 
        alt="${property.title}" 
        loading="lazy"
        onerror="this.src='https://via.placeholder.com/400x300/cccccc/666666?text=Image+Not+Available'"
      />
      ${property.featured ? '<span class="badge">⭐ Featured</span>' : ''}
    </div>
    <div class="card-body">
      <h3 class="card-title">${property.title}</h3>
      <div class="card-price">${property.price}</div>
      <p class="card-location">📍 ${property.city}, ${property.state}</p>
      <div class="card-features">
        <span class="feature-item">🛏️ ${property.beds} Beds</span>
        <span class="feature-item">🚿 ${property.baths} Baths</span>
        <span class="feature-item">📐 ${property.area} sqft</span>
      </div>
    </div>
  `;
  
  card.innerHTML = html;
  card.onclick = () => openModal(property);
  
  return card;
}

function updateLoadMoreVisibility() {
  if (renderedCount < filteredProperties.length) {
    loadMoreWrap.hidden = false;
  } else {
    loadMoreWrap.hidden = true;
  }
}

function resetAndRender() {
  grid.innerHTML = '';
  renderedCount = 0;
  
  if (filteredProperties.length === 0) {
    propertyCount.textContent = 'No properties found. Try adjusting your filters.';
    loadMoreWrap.hidden = true;
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">No properties match your search. 🔍</div>';
  } else {
    propertyCount.textContent = `Showing ${Math.min(PAGE_SIZE, filteredProperties.length)} of ${filteredProperties.length} properties`;
    renderNextBatch();
  }
}

function filterProperties() {
  let filtered = [...allProperties];
  
  // Region filter
  const region = regionSelect.value;
  if (region !== 'all') {
    filtered = filtered.filter(p => {
      if (region === 'maharashtra') return p.state.toLowerCase() === 'maharashtra';
      if (region === 'tamil-nadu') return p.state.toLowerCase() === 'tamil nadu';
      if (region === 'delhi') return p.state.toLowerCase() === 'delhi';
      return true;
    });
  }
  
  // Price filter
  const price = priceSelect.value;
  if (price !== 'all') {
    filtered = filtered.filter(p => {
      const priceNum = parseInt(p.price.replace(/₹|,/g, ''));
      if (price === 'low') return priceNum < 10000000;
      if (price === 'mid') return priceNum >= 10000000 && priceNum <= 30000000;
      if (price === 'high') return priceNum > 30000000;
      return true;
    });
  }
  
  // Search filter - works across title, city, state, description
  const search = searchInput.value.toLowerCase().trim();
  if (search) {
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(search) ||
      p.city.toLowerCase().includes(search) ||
      p.state.toLowerCase().includes(search) ||
      p.desc.toLowerCase().includes(search) ||
      p.price.toLowerCase().includes(search)
    );
  }
  
  filteredProperties = filtered;
  resetAndRender();
}

function resetFilters() {
  regionSelect.value = 'all';
  priceSelect.value = 'all';
  searchInput.value = '';
  searchInput.focus();
  filteredProperties = [...allProperties];
  setViewMode('grid');
  resetAndRender();
}

function setViewMode(mode) {
  currentViewMode = mode;
  const gridBtn = document.querySelector('.grid-view');
  const listBtn = document.querySelector('.list-view');
  
  if (mode === 'grid') {
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
    grid.classList.remove('list-mode');
  } else {
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
    grid.classList.add('list-mode');
  }
}

// ============= MODAL FUNCTIONS ============= 
function openModal(property) {
  modalImage.src = property.image;
  modalTitle.textContent = property.title;
  modalPrice.textContent = property.price;
  modalLocation.textContent = `📍 ${property.city}, ${property.state}, ${property.country}`;
  modalDesc.textContent = property.desc;
  modalBeds.textContent = property.beds;
  modalBaths.textContent = property.baths;
  modalArea.textContent = property.area;
  
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(event) {
  if (event && event.target !== modal && !event.target.classList.contains('modal-close')) {
    return;
  }
  
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto';
}

// ============= EVENT LISTENERS ============= 
regionSelect.addEventListener('change', filterProperties);
priceSelect.addEventListener('change', filterProperties);
searchInput.addEventListener('input', filterProperties);
loadMoreBtn.addEventListener('click', renderNextBatch);
document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
    closeModal();
  }
});

// Infinite scroll
window.addEventListener('scroll', () => {
  const scrollPercentage = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  if (scrollPercentage > 0.8 && renderedCount < filteredProperties.length) {
    loadMoreWrap.hidden = false;
  }
});

// ============= AI FEATURES ============= 
function openAIAssistant() {
  const preferences = prompt('Tell me your preferences:\n\nExample: "3 bedroom villa near sea view under 5 crore"\n\nOr select from:\n1. Luxury properties\n2. Budget-friendly\n3. Sea view homes\n4. City properties\n5. Family villas');
  
  if (!preferences) return;

  let results = [...allProperties];
  
  // AI-based recommendations based on keywords
  const lowerPref = preferences.toLowerCase();
  
  if (lowerPref.includes('luxury') || lowerPref.includes('premium')) {
    results = results.filter(p => p.featured || parseFloat(p.price.replace(/[^\d]/g, '')) > 200000000);
  }
  
  if (lowerPref.includes('budget') || lowerPref.includes('affordable')) {
    results = results.sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[^\d]/g, ''));
      const priceB = parseFloat(b.price.replace(/[^\d]/g, ''));
      return priceA - priceB;
    });
  }
  
  if (lowerPref.includes('sea') || lowerPref.includes('beach') || lowerPref.includes('water')) {
    results = results.filter(p => p.title.includes('Sea') || p.title.includes('Beach') || p.title.includes('Water') || p.city.includes('Kochi') || p.city.includes('Alibag') || p.city.includes('Mangalore'));
  }
  
  if (lowerPref.includes('bedroom') || lowerPref.includes('bhk')) {
    const bedMatch = preferences.match(/(\d+)\s*(bedroom|bhk)/i);
    if (bedMatch) {
      const beds = parseInt(bedMatch[1]);
      results = results.filter(p => parseInt(p.beds) >= beds);
    }
  }

  if (lowerPref.includes('villa')) {
    results = results.filter(p => p.title.includes('Villa') || p.title.includes('Bungalow') || p.title.includes('Home'));
  }

  if (results.length === 0) {
    alert('No matching properties found. Try different preferences!');
  } else {
    filteredProperties = results;
    resetAndRender();
    alert(`🤖 AI Found ${results.length} matching properties for you!`);
  }
}

function toggleAdvancedFilters() {
  const filterGrid = document.querySelector('.filter-grid');
  filterGrid.style.display = filterGrid.style.display === 'none' ? 'grid' : 'none';
}

// Filter by bedrooms
const bedsSelect = document.getElementById('bedsSelect');
if (bedsSelect) {
  bedsSelect.addEventListener('change', () => {
    const beds = bedsSelect.value;
    if (beds !== 'all') {
      filteredProperties = filteredProperties.filter(p => {
        if (beds === '1') return parseInt(p.beds) === 1;
        if (beds === '2') return parseInt(p.beds) === 2;
        if (beds === '3') return parseInt(p.beds) >= 3;
        if (beds === '4') return parseInt(p.beds) >= 4;
      });
    }
    resetAndRender();
  });
}

