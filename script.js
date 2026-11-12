/* ==========================================================================
   Aie Saheb Rose Nursery — Storefront, Care Quick-View, WhatsApp & Marathi UI
   ========================================================================== */

const WHATSAPP_NUMBER = "917218584150";

const PLANT_CATALOG = [
  {
    id: "crimson-royal-rose",
    name: "Crimson Royal Hybrid Rose",
    category: "roses",
    categoryLabel: "Rose Plants",
    tag: "Best Seller",
    rating: "4.9",
    reviews: 128,
    careTag: "Full Sun",
    sunlight: "Full Sun (5–6 hrs)",
    watering: "Every 2 Days",
    season: "Year-Round Blooms",
    height: "2.5 – 4 ft",
    priceInr: 299,
    mrpInr: 399,
    priceUsd: 24,
    mrpUsd: 32,
    unit: "2 Gal Nursery Pot",
    image: "assets/cat-roses.jpg",
    description: "Velvety deep crimson petals with rich Damascus fragrance and continuous repeat flowering."
  },
  {
    id: "kashmiri-desi-gulab",
    name: "Heirloom Desi Gulab",
    category: "roses",
    categoryLabel: "Rose Plants",
    tag: "Highly Fragrant",
    rating: "4.9",
    reviews: 214,
    careTag: "Easy Care",
    sunlight: "Full Sun (4–6 hrs)",
    watering: "Every 2–3 Days",
    season: "All Seasons",
    height: "3 – 5 ft",
    priceInr: 179,
    mrpInr: 249,
    priceUsd: 18,
    mrpUsd: 24,
    unit: "Grafted Sapling",
    image: "assets/hero-rose.jpg",
    description: "Traditional aromatic pink-red rose prized for home gardens, garlands, and pure rosewater."
  },
  {
    id: "imperial-velvet-floribunda",
    name: "Imperial Velvet Floribunda",
    category: "roses",
    categoryLabel: "Rose Plants",
    tag: "Disease-Free",
    rating: "4.8",
    reviews: 96,
    careTag: "Cluster Bloom",
    sunlight: "Full Sun (6 hrs)",
    watering: "Every 2 Days",
    season: "Winter & Monsoon",
    height: "2 – 3.5 ft",
    priceInr: 349,
    mrpInr: 449,
    priceUsd: 29,
    mrpUsd: 36,
    unit: "3 Gal Container",
    image: "assets/cat-roses.jpg",
    description: "Cluster-blooming exhibition rose bred for continuous seasonal color and strong stem vigor."
  },
  {
    id: "golden-marigold-jasmine",
    name: "Royal Mogra & Marigold Duo",
    category: "flowering",
    categoryLabel: "Flowering Plants",
    tag: "20% OFF",
    rating: "4.8",
    reviews: 152,
    careTag: "Sweet Scent",
    sunlight: "Bright Direct Sun",
    watering: "Daily Light Water",
    season: "Spring – Monsoon",
    height: "1.5 – 3 ft",
    priceInr: 199,
    mrpInr: 259,
    priceUsd: 16,
    mrpUsd: 21,
    unit: "Terracotta Set",
    image: "assets/cat-flowering.jpg",
    description: "Sun-loving aromatic Mogra jasmine paired with vibrant seasonal flowering perennials."
  },
  {
    id: "magenta-bougainvillea",
    name: "Sunburst Bougainvillea Arch",
    category: "flowering",
    categoryLabel: "Flowering Plants",
    tag: "Hardy Climber",
    rating: "4.9",
    reviews: 88,
    careTag: "Low Water",
    sunlight: "Full Sun (6+ hrs)",
    watering: "Twice Weekly",
    season: "Year-Round",
    height: "5 – 10 ft",
    priceInr: 269,
    mrpInr: 349,
    priceUsd: 22,
    mrpUsd: 28,
    unit: "Trellis Pot",
    image: "assets/cat-flowering.jpg",
    description: "Drought-tolerant vivid magenta bracts ideal for compound gates, pergolas, and sunny balconies."
  },
  {
    id: "monstera-fiddle-duo",
    name: "Architectural Fiddle & Monstera",
    category: "ornamental",
    categoryLabel: "Ornamental Plants",
    tag: "Air Purifying",
    rating: "4.9",
    reviews: 175,
    careTag: "Indoor Bright",
    sunlight: "Indirect Bright Light",
    watering: "Once in 4–5 Days",
    season: "Evergreen",
    height: "3 – 5 ft",
    priceInr: 499,
    mrpInr: 649,
    priceUsd: 38,
    mrpUsd: 48,
    unit: "Ceramic Planter",
    image: "assets/cat-ornamental.jpg",
    description: "Sculptural broad-leaf indoor foliage acclimatized for modern homes, villas, and studios."
  },
  {
    id: "evergreen-courtyard-palm",
    name: "Manicured Courtyard Evergreen",
    category: "ornamental",
    categoryLabel: "Ornamental Plants",
    tag: "Landscape Grade",
    rating: "4.8",
    reviews: 64,
    careTag: "Low Maint.",
    sunlight: "Partial to Full Sun",
    watering: "Every 3 Days",
    season: "Evergreen",
    height: "4 – 7 ft",
    priceInr: 549,
    mrpInr: 699,
    priceUsd: 44,
    mrpUsd: 55,
    unit: "5 Gal Specimen",
    image: "assets/cat-ornamental.jpg",
    description: "Balanced emerald foliage for pathways, resort entryways, and architectural terrace borders."
  },
  {
    id: "grafted-citrus-pomegranate",
    name: "Grafted Citrus & Pomegranate",
    category: "fruit",
    categoryLabel: "Fruit Plants",
    tag: "Organic Graft",
    rating: "4.9",
    reviews: 141,
    careTag: "Early Fruit",
    sunlight: "Full Sun (6 hrs)",
    watering: "Every 2–3 Days",
    season: "Fruiting in 12–18 Mo",
    height: "4 – 8 ft",
    priceInr: 399,
    mrpInr: 499,
    priceUsd: 32,
    mrpUsd: 40,
    unit: "Fruiting Sapling",
    image: "assets/cat-fruit.jpg",
    description: "Early-fruiting grafted orchard saplings cultivated in nutrient-rich organic bio-compost."
  }
];

const POT_SIZE_OPTIONS = [
  { id: "bag", label: "Nursery Grow Bag", factor: 0.78 },
  { id: "pot2", label: "2 Gal Nursery Pot", factor: 1.0 },
  { id: "pot5", label: "5 Gal Specimen", factor: 1.45 }
];

const TOUR_SLIDES = [
  {
    title: "Rose Propagation & Dew-Fresh Bloom Blocks",
    desc: "Over 500 disease-screened hybrid, desi, and rare rose cultivars nurtured under balanced natural light.",
    image: "assets/cat-roses.jpg"
  },
  {
    title: "Seasonal & Year-Round Flowering Shade Houses",
    desc: "Vibrant jasmine, hibiscus, bougainvillea, and bedding perennials conditioned for immediate garden planting.",
    image: "assets/cat-flowering.jpg"
  },
  {
    title: "Ornamental & Architectural Foliage Gallery",
    desc: "Acclimatized indoor and landscape evergreens graded for uniform canopy shape and healthy root systems.",
    image: "assets/cat-ornamental.jpg"
  },
  {
    title: "Organic Grafted Fruit Orchard Blocks",
    desc: "High-yield citrus, mango, and pomegranate saplings certified pest-free for backyard and commercial orchards.",
    image: "assets/cat-fruit.jpg"
  }
];

const TRANSLATIONS = {
  en: {
    announceText: "Free Safe Delivery on Orders Above ₹999 • Fresh Nursery-Direct Roses, Fruit & Ornamental Trees • Pan-India & Global Export",
    brandName: "Aie Saheb",
    brandSub: "Rose Nursery",
    navHome: "Home",
    navPlants: "Plants",
    navSolutions: "Solutions",
    navAbout: "About",
    navGallery: "Gallery",
    navContact: "Contact",
    getQuote: "Get a Quote",
    heroEyebrow: "PREMIUM PLANT NURSERY",
    heroTitleHtml: 'Cultivating <em class="rose-accent">Roses</em><br />for a Greener World',
    heroSubtitle: "Aie Saheb Rose Nursery – your trusted source for premium roses, ornamental plants, and garden solutions for homes, landscapes, and institutions worldwide.",
    explorePlants: "Explore Our Plants",
    watchNursery: "Watch Our Nursery",
    exploreNurseryInline: "Explore Our Nursery",
    trustVarieties: "Plant Varieties",
    trustQualityTitle: "High-Quality",
    trustQualitySub: "& Disease-Free",
    trustDeliveryTitle: "Safe & Global",
    trustDeliverySub: "Delivery",
    catRoses: "Rose Plants",
    catRosesSub: "Hybrid, Desi & Rare Varieties",
    catFlowering: "Flowering Plants",
    catFloweringSub: "Seasonal & Year-Round Blooms",
    catOrnamental: "Ornamental Plants",
    catOrnamentalSub: "Perfect for Homes & Landscapes",
    catFruit: "Fruit Plants",
    catFruitSub: "Grow Fresh & Naturally",
    catalogEyebrow: "OUR COLLECTION",
    catalogTitleHtml: "Curated Nursery <em>Varieties</em>",
    catalogDesc: "Tap any plant for care instructions, sunlight tips, and pot sizes. Cultivated organically with zero pest pressure.",
    solutionsEyebrow: "GARDEN & LANDSCAPE SOLUTIONS",
    solutionsTitleHtml: "Tailored Botanical <em>Services</em>",
    solutionsDesc: "From intimate balcony rose gardens to multi-acre institutional estates and international nursery consignments.",
    reviewsEyebrow: "TRUSTED BY 120+ HOMES, RESORTS & INSTITUTIONS",
    reviewsTitleHtml: "Loved by <em>Plant Parents</em> & Landscapers",
    aboutEyebrow: "OUR HERITAGE & STANDARDS",
    aboutTitleHtml: "Rooted in Craft, <em>Grown for Longevity</em>",
    galleryEyebrow: "GREENHOUSE & FIELD GALLERY",
    galleryTitleHtml: "Inside <em>Aie Saheb</em> Nursery",
    contactEyebrow: "VISIT OR CONNECT",
    contactTitleHtml: "Bring Living Beauty <em>Home</em>"
  },
  mr: {
    announceText: "₹९९९ वरील ऑर्डरवर मोफत व सुरक्षित डिलिव्हरी • थेट नर्सरीतून ताजी गुलाब, फळझाडे व शोभेची रोपे",
    brandName: "आई साहेब",
    brandSub: "रोझ नर्सरी",
    navHome: "मुख्यपृष्ठ",
    navPlants: "रोपे",
    navSolutions: "सेवा",
    navAbout: "आमच्याविषयी",
    navGallery: "गॅलरी",
    navContact: "संपर्क",
    getQuote: "दरपत्रक घ्या",
    heroEyebrow: "प्रीमियम प्लांट नर्सरी",
    heroTitleHtml: 'हिरव्यागार जगासाठी <em class="rose-accent">गुलाब</em><br />आणि दर्जेदार रोपांची निर्मिती',
    heroSubtitle: "आई साहेब रोझ नर्सरी – घरे, बगीचे, हॉटेल्स आणि संस्थांसाठी दर्जेदार गुलाब, फळझाडे, शोभेची रोपे आणि लँडस्केपिंगचा विश्वासार्ह स्रोत.",
    explorePlants: "रोपे पहा",
    watchNursery: "नर्सरी टूर पहा",
    exploreNurseryInline: "नर्सरी टूर पहा",
    trustVarieties: "रोपांच्या जाती",
    trustQualityTitle: "उत्कृष्ट दर्जा",
    trustQualitySub: "रोगमुक्त रोपे",
    trustDeliveryTitle: "सुरक्षित डिलिव्हरी",
    trustDeliverySub: "भारत व जगभर",
    catRoses: "गुलाबाची रोपे",
    catRosesSub: "हायब्रिड, देशी व दुर्मिळ जाती",
    catFlowering: "फुलझाडे",
    catFloweringSub: "बारमाही व हंगामी फुले",
    catOrnamental: "शोभेची झाडे",
    catOrnamentalSub: "घर आणि लँडस्केपसाठी उत्तम",
    catFruit: "फळझाडे",
    catFruitSub: "सेंद्रिय व कलमी रोपे",
    catalogEyebrow: "आमचा संग्रह",
    catalogTitleHtml: "निवडक नर्सरी <em>रोपे</em>",
    catalogDesc: "सूर्यप्रकाश, पाणी आणि कुंडीच्या आकारासाठी कोणत्याही रोपावर क्लिक करा. सेंद्रिय व निरोगी वाढवलेली रोपे.",
    solutionsEyebrow: "बगीचा व लँडस्केप सेवा",
    solutionsTitleHtml: "तुमच्यासाठी खास <em>सेवा</em>",
    solutionsDesc: "बाल्कनीतील छोटेखानी गुलाब बागेपासून ते रिसॉर्ट व संस्थांच्या भव्य लँडस्केपिंगपर्यंत संपूर्ण मार्गदर्शन.",
    reviewsEyebrow: "१२०+ घरे, रिसॉर्ट्स व संस्थांचा विश्वास",
    reviewsTitleHtml: "ग्राहकांचे <em>अभिप्राय</em>",
    aboutEyebrow: "आमची परंपरा व दर्जा",
    aboutTitleHtml: "अनुभवी कलमकाम, <em>दीर्घकाळ टिकणारी रोपे</em>",
    galleryEyebrow: "ग्रीनहाऊस व नर्सरी गॅलरी",
    galleryTitleHtml: "<em>आई साहेब</em> नर्सरीची झलक",
    contactEyebrow: "भेट द्या किंवा संपर्क साधा",
    contactTitleHtml: "तुमच्या घरी <em>हिरवाई</em> आणा"
  }
};

const state = {
  filter: "all",
  currency: "INR",
  lang: "en",
  cart: [],
  activePlant: null,
  activeSizeId: "pot2"
};

/* ---------- DOM References ---------- */
const siteHeader = document.getElementById("siteHeader");
const plantsGrid = document.getElementById("plantsGrid");
const filterPills = document.querySelectorAll(".filter-pill");
const storyChips = document.querySelectorAll(".story-chip[data-story-filter]");
const currButtons = document.querySelectorAll(".curr-btn");
const langToggleBtn = document.getElementById("langToggleBtn");

const cartCountEl = document.getElementById("cartCount");
const cartItemsList = document.getElementById("cartItemsList");
const cartTotalEl = document.getElementById("cartTotal");
const cartFooter = document.getElementById("cartFooter");
const cartWhatsappBtn = document.getElementById("cartWhatsappBtn");

const plantModal = document.getElementById("plantModal");
const qvImage = document.getElementById("qvImage");
const qvTag = document.getElementById("qvTag");
const qvCategory = document.getElementById("qvCategory");
const qvTitle = document.getElementById("qvTitle");
const qvRating = document.getElementById("qvRating");
const qvDesc = document.getElementById("qvDesc");
const qvSun = document.getElementById("qvSun");
const qvWater = document.getElementById("qvWater");
const qvSeason = document.getElementById("qvSeason");
const qvHeight = document.getElementById("qvHeight");
const qvSizeOptions = document.getElementById("qvSizeOptions");
const qvPrice = document.getElementById("qvPrice");
const qvMrp = document.getElementById("qvMrp");
const qvAddCartBtn = document.getElementById("qvAddCartBtn");
const qvWhatsappBtn = document.getElementById("qvWhatsappBtn");

const searchModal = document.getElementById("searchModal");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const cartDrawer = document.getElementById("cartDrawer");
const quoteModal = document.getElementById("quoteModal");
const quoteProjectSelect = document.getElementById("quoteProjectSelect");
const quoteDetailsInput = document.getElementById("quoteDetailsInput");
const quoteForm = document.getElementById("quoteForm");
const quoteFormFeedback = document.getElementById("quoteFormFeedback");

const videoModal = document.getElementById("videoModal");
const tourPreviewImg = document.getElementById("tourPreviewImg");
const tourSlideTitle = document.getElementById("tourSlideTitle");
const tourSlideDesc = document.getElementById("tourSlideDesc");
const tourSteps = document.querySelectorAll(".tour-step");

/* ---------- Currency Formatting ---------- */
function getPlantPrice(plant, factor = 1) {
  if (state.currency === "INR") {
    return Math.round(plant.priceInr * factor);
  }
  return Number((plant.priceUsd * factor).toFixed(2));
}

function getPlantMrp(plant, factor = 1) {
  if (state.currency === "INR") {
    return Math.round(plant.mrpInr * factor);
  }
  return Number((plant.mrpUsd * factor).toFixed(2));
}

function formatMoney(amount) {
  if (state.currency === "INR") {
    return `₹${Math.round(amount).toLocaleString("en-IN")}`;
  }
  return `$${Number(amount).toFixed(2)}`;
}

/* ---------- Language Toggle (EN | मराठी) ---------- */
function applyLanguage(lang) {
  state.lang = lang;
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

  document.documentElement.lang = lang === "mr" ? "mr" : "en";
  document.querySelectorAll("[data-lang-opt]").forEach((opt) => {
    opt.classList.toggle("active", opt.dataset.langOpt === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  const htmlBindings = [
    ["heroTitle", "heroTitleHtml"],
    ["catalogTitle", "catalogTitleHtml"],
    ["solutionsTitle", "solutionsTitleHtml"],
    ["reviewsTitle", "reviewsTitleHtml"],
    ["aboutTitle", "aboutTitleHtml"],
    ["galleryTitle", "galleryTitleHtml"],
    ["contactTitle", "contactTitleHtml"]
  ];

  htmlBindings.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el && dict[key]) el.innerHTML = dict[key];
  });
}

langToggleBtn?.addEventListener("click", () => {
  applyLanguage(state.lang === "en" ? "mr" : "en");
});

/* ---------- Header Scroll State ---------- */
window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("scrolled", window.scrollY > 24);
});

/* ---------- Mobile Navigation ---------- */
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNavDrawer = document.getElementById("mobileNavDrawer");

mobileMenuBtn?.addEventListener("click", () => {
  const isOpen = mobileNavDrawer.classList.toggle("open");
  mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
});

mobileNavDrawer?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNavDrawer.classList.remove("open");
    mobileMenuBtn.setAttribute("aria-expanded", "false");
  });
});

/* ---------- Catalog Rendering & Filtering ---------- */
function renderPlants(filter = state.filter) {
  state.filter = filter;

  filterPills.forEach((pill) => {
    pill.classList.toggle("active", pill.dataset.filter === filter);
  });

  storyChips.forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.storyFilter === filter);
  });

  const items =
    filter === "all"
      ? PLANT_CATALOG
      : PLANT_CATALOG.filter((item) => item.category === filter);

  plantsGrid.innerHTML = items
    .map((plant) => {
      const price = formatMoney(getPlantPrice(plant));
      const mrp = formatMoney(getPlantMrp(plant));
      return `
      <article class="plant-card" data-quick-view="${plant.id}">
        <div class="plant-card-media">
          <img src="${plant.image}" alt="${plant.name}" loading="lazy" />
          <span class="plant-tag">${plant.tag}</span>
        </div>
        <div class="plant-card-body">
          <div class="plant-rating-row">
            <span class="plant-stars">★ ${plant.rating} (${plant.reviews})</span>
            <span class="plant-care-pill">${plant.careTag}</span>
          </div>
          <span class="plant-category-label">${plant.categoryLabel}</span>
          <h3>${plant.name}</h3>
          <p>${plant.description}</p>
          <div class="plant-card-footer">
            <div class="plant-price-wrap">
              <div class="plant-price-line">
                <span class="plant-price">${price}</span>
                <del class="plant-mrp">${mrp}</del>
              </div>
              <small>${plant.unit}</small>
            </div>
            <div class="plant-card-actions">
              <button class="quick-view-btn" type="button" data-quick-view="${plant.id}">Care</button>
              <button class="add-cart-btn" type="button" data-add-id="${plant.id}">+ Add</button>
            </div>
          </div>
        </div>
      </article>
    `;
    })
    .join("");
}

filterPills.forEach((pill) => {
  pill.addEventListener("click", () => renderPlants(pill.dataset.filter));
});

storyChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    renderPlants(chip.dataset.storyFilter);
    document.getElementById("plants")?.scrollIntoView({ behavior: "smooth" });
  });
});

document.getElementById("storyBulkBtn")?.addEventListener("click", () => {
  openQuoteWithProject("Commercial Landscape");
});

currButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    state.currency = btn.dataset.currency;
    currButtons.forEach((b) => b.classList.toggle("active", b === btn));
    renderPlants(state.filter);
    updateCartUI();
    if (!plantModal.hidden && state.activePlant) {
      updateQuickViewPrice();
    }
  });
});

document
  .querySelectorAll("[data-category-jump], .dropdown-menu a[data-filter], .mobile-nav-drawer a[data-filter]")
  .forEach((el) => {
    el.addEventListener("click", () => {
      const filter = el.dataset.categoryJump || el.dataset.filter || "all";
      renderPlants(filter);
    });
  });

/* ---------- Plant Quick-View & Care Modal ---------- */
function updateQuickViewPrice() {
  const plant = state.activePlant;
  if (!plant) return;
  const sizeObj = POT_SIZE_OPTIONS.find((s) => s.id === state.activeSizeId) || POT_SIZE_OPTIONS[1];
  const activePrice = formatMoney(getPlantPrice(plant, sizeObj.factor));
  const activeMrp = formatMoney(getPlantMrp(plant, sizeObj.factor));

  qvPrice.textContent = activePrice;
  qvMrp.textContent = activeMrp;

  const waMsg = `Hello Aie Saheb Rose Nursery! I would like to order:\n• ${plant.name} (${sizeObj.label}) - ${activePrice}`;
  qvWhatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;
}

function openQuickView(plantId) {
  const plant = PLANT_CATALOG.find((p) => p.id === plantId);
  if (!plant) return;

  state.activePlant = plant;
  state.activeSizeId = "pot2";

  qvImage.src = plant.image;
  qvImage.alt = plant.name;
  qvTag.textContent = plant.tag;
  qvCategory.textContent = plant.categoryLabel;
  qvTitle.textContent = plant.name;
  qvRating.textContent = `★ ${plant.rating} (${plant.reviews} verified plant parents)`;
  qvDesc.textContent = plant.description;
  qvSun.textContent = plant.sunlight;
  qvWater.textContent = plant.watering;
  qvSeason.textContent = plant.season;
  qvHeight.textContent = plant.height;

  qvSizeOptions.innerHTML = POT_SIZE_OPTIONS.map(
    (s) =>
      `<button type="button" class="qv-size-btn ${s.id === state.activeSizeId ? "active" : ""}" data-size-id="${s.id}">${s.label}</button>`
  ).join("");

  updateQuickViewPrice();
  openModal(plantModal);
}

qvSizeOptions?.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-size-id]");
  if (!btn) return;
  state.activeSizeId = btn.dataset.sizeId;
  qvSizeOptions.querySelectorAll(".qv-size-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.sizeId === state.activeSizeId);
  });
  updateQuickViewPrice();
});

qvAddCartBtn?.addEventListener("click", () => {
  if (!state.activePlant) return;
  const sizeObj = POT_SIZE_OPTIONS.find((s) => s.id === state.activeSizeId) || POT_SIZE_OPTIONS[1];
  addToCart(state.activePlant.id, sizeObj);
  closeModal(plantModal);
  openModal(cartDrawer);
});

/* ---------- Cart Management & WhatsApp Checkout ---------- */
function getCartItemPrice(item) {
  const factor = item.factor || 1;
  return getPlantPrice(item, factor);
}

function updateCartUI() {
  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = state.cart.reduce((sum, item) => sum + getCartItemPrice(item) * item.qty, 0);

  cartCountEl.textContent = String(totalQty);
  cartTotalEl.textContent = formatMoney(totalAmount);

  if (state.cart.length === 0) {
    cartItemsList.innerHTML = `<p class="cart-empty">Your nursery basket is currently empty. Add plants from our catalog to begin an order or WhatsApp inquiry.</p>`;
    cartFooter.hidden = true;
    return;
  }

  cartFooter.hidden = false;
  cartItemsList.innerHTML = state.cart
    .map((item) => {
      const unitPrice = getCartItemPrice(item);
      return `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.name}" />
        <div class="cart-item-info">
          <strong>${item.name}</strong>
          <span>${item.sizeLabel || item.unit} &bull; ${formatMoney(unitPrice)} &times; ${item.qty}</span>
        </div>
        <div class="qty-controls">
          <button class="qty-btn" type="button" data-qty-key="${item.cartKey}" data-delta="-1" aria-label="Decrease quantity">&minus;</button>
          <span>${item.qty}</span>
          <button class="qty-btn" type="button" data-qty-key="${item.cartKey}" data-delta="1" aria-label="Increase quantity">+</button>
        </div>
      </div>
    `;
    })
    .join("");

  const waLines = state.cart
    .map(
      (item) =>
        `• ${item.qty}x ${item.name} (${item.sizeLabel || item.unit}) = ${formatMoney(
          getCartItemPrice(item) * item.qty
        )}`
    )
    .join("\n");
  const waText = `Hello Aie Saheb Rose Nursery! I would like to place an order:\n${waLines}\n\nEstimated Total: ${formatMoney(
    totalAmount
  )}`;
  cartWhatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
}

function addToCart(plantId, sizeObj = POT_SIZE_OPTIONS[1]) {
  const plant = PLANT_CATALOG.find((p) => p.id === plantId);
  if (!plant) return;

  const cartKey = `${plantId}__${sizeObj.id}`;
  const existing = state.cart.find((item) => item.cartKey === cartKey);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      ...plant,
      cartKey,
      sizeLabel: sizeObj.label,
      factor: sizeObj.factor,
      qty: 1
    });
  }
  updateCartUI();
}

document.addEventListener("click", (event) => {
  const addBtn = event.target.closest("[data-add-id]");
  if (addBtn) {
    event.stopPropagation();
    addToCart(addBtn.dataset.addId);
    const originalText = addBtn.textContent;
    addBtn.textContent = "Added ✓";
    setTimeout(() => {
      addBtn.textContent = originalText;
    }, 900);
    return;
  }

  const qtyBtn = event.target.closest("[data-qty-key]");
  if (qtyBtn) {
    const key = qtyBtn.dataset.qtyKey;
    const delta = Number(qtyBtn.dataset.delta);
    const idx = state.cart.findIndex((i) => i.cartKey === key);
    if (idx !== -1) {
      state.cart[idx].qty += delta;
      if (state.cart[idx].qty <= 0) {
        state.cart.splice(idx, 1);
      }
      updateCartUI();
    }
    return;
  }

  const quickViewTrigger = event.target.closest("[data-quick-view]");
  if (quickViewTrigger) {
    openQuickView(quickViewTrigger.dataset.quickView);
  }
});

/* ---------- Modal Helpers ---------- */
function openModal(modalEl) {
  modalEl.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal(modalEl) {
  modalEl.hidden = true;
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-close-modal]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.closeModal);
    if (target) closeModal(target);
  });
});

[plantModal, searchModal, cartDrawer, quoteModal, videoModal].forEach((overlay) => {
  overlay?.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal(overlay);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    [plantModal, searchModal, cartDrawer, quoteModal, videoModal].forEach((m) => {
      if (m && !m.hidden) closeModal(m);
    });
  }
});

/* ---------- Search Overlay ---------- */
function renderSearchResults(query = "") {
  const q = query.trim().toLowerCase();
  const matches = PLANT_CATALOG.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );

  if (matches.length === 0) {
    searchResults.innerHTML = `<p class="cart-empty">No matching varieties found for "${query}".</p>`;
    return;
  }

  searchResults.innerHTML = matches
    .map(
      (p) => `
      <div class="search-result-row">
        <img src="${p.image}" alt="${p.name}" />
        <div class="search-result-meta">
          <strong>${p.name}</strong>
          <span>${p.categoryLabel} &bull; ${formatMoney(getPlantPrice(p))}</span>
        </div>
        <button class="add-cart-btn" type="button" data-add-id="${p.id}">+ Add</button>
      </div>
    `
    )
    .join("");
}

document.getElementById("searchBtn")?.addEventListener("click", () => {
  renderSearchResults("");
  openModal(searchModal);
  setTimeout(() => searchInput.focus(), 50);
});

searchInput?.addEventListener("input", (e) => {
  renderSearchResults(e.target.value);
});

/* ---------- Cart Drawer Triggers ---------- */
document.getElementById("cartBtn")?.addEventListener("click", () => {
  updateCartUI();
  openModal(cartDrawer);
});

document.getElementById("checkoutQuoteBtn")?.addEventListener("click", () => {
  const summary = state.cart
    .map(
      (item) =>
        `${item.qty}x ${item.name} (${item.sizeLabel || item.unit} - ${formatMoney(
          getCartItemPrice(item) * item.qty
        )})`
    )
    .join(", ");
  closeModal(cartDrawer);
  quoteProjectSelect.value = "Residential Garden";
  quoteDetailsInput.value = summary
    ? `Selected varieties: ${summary}. Please share delivery options and timeline.`
    : "";
  quoteFormFeedback.textContent = "";
  openModal(quoteModal);
});

/* ---------- Quote Modal Triggers ---------- */
function openQuoteWithProject(project = "Residential Garden") {
  quoteProjectSelect.value = project;
  quoteFormFeedback.textContent = "";
  openModal(quoteModal);
}

document.getElementById("headerQuoteBtn")?.addEventListener("click", () => openQuoteWithProject());
document.getElementById("mobileQuoteBtn")?.addEventListener("click", () => {
  mobileNavDrawer.classList.remove("open");
  openQuoteWithProject();
});

document.querySelectorAll(".open-quote-btn").forEach((btn) => {
  btn.addEventListener("click", () => openQuoteWithProject(btn.dataset.project));
});

quoteForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  quoteFormFeedback.textContent =
    "Thank you! Your quote request has been received. Our nursery desk will reply within 24 hours.";
  quoteForm.reset();
});

/* ---------- Contact Form ---------- */
const contactForm = document.getElementById("contactForm");
const contactFormFeedback = document.getElementById("contactFormFeedback");

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  contactFormFeedback.textContent =
    "Thank you for reaching out to Aie Saheb Rose Nursery! Our horticulturist will contact you shortly.";
  contactForm.reset();
});

/* ---------- Watch / Explore Our Nursery Modal ---------- */
function setTourSlide(index) {
  const slide = TOUR_SLIDES[index] || TOUR_SLIDES[0];
  tourPreviewImg.src = slide.image;
  tourSlideTitle.textContent = slide.title;
  tourSlideDesc.textContent = slide.desc;
  tourSteps.forEach((step, idx) => {
    step.classList.toggle("active", idx === index);
  });
}

[
  document.getElementById("watchNurseryBtn"),
  document.getElementById("heroExploreVideoBtn"),
  document.getElementById("mobileExploreVideoBtn")
].forEach((trigger) => {
  trigger?.addEventListener("click", () => {
    setTourSlide(0);
    openModal(videoModal);
  });
});

tourSteps.forEach((step) => {
  step.addEventListener("click", () => {
    setTourSlide(Number(step.dataset.slide));
  });
});

/* ---------- Initialize ---------- */
renderPlants("all");
updateCartUI();
