/* ==========================================================================
   Aie Saheb Rose Nursery — Interactive Catalog, Cart, Search & Modals
   ========================================================================== */

const PLANT_CATALOG = [
  {
    id: "crimson-royal-rose",
    name: "Crimson Royal Hybrid Rose",
    category: "roses",
    categoryLabel: "Rose Plants",
    tag: "Signature Bloom",
    price: 24,
    unit: "2 Gal Nursery Pot",
    image: "assets/cat-roses.jpg",
    description: "Velvety deep crimson petals with rich Damascus fragrance and repeat flowering."
  },
  {
    id: "kashmiri-desi-gulab",
    name: "Heirloom Desi Gulab",
    category: "roses",
    categoryLabel: "Rose Plants",
    tag: "Highly Fragrant",
    price: 18,
    unit: "Grafted Sapling",
    image: "assets/hero-rose.jpg",
    description: "Traditional aromatic pink-red rose prized for gardens, garlands, and rosewater."
  },
  {
    id: "imperial-velvet-floribunda",
    name: "Imperial Velvet Floribunda",
    category: "roses",
    categoryLabel: "Rose Plants",
    tag: "Disease-Free",
    price: 29,
    unit: "3 Gal Container",
    image: "assets/cat-roses.jpg",
    description: "Cluster-blooming exhibition rose bred for continuous seasonal color and vigor."
  },
  {
    id: "golden-marigold-jasmine",
    name: "Royal Mogra & Marigold Duo",
    category: "flowering",
    categoryLabel: "Flowering Plants",
    tag: "Year-Round",
    price: 16,
    unit: "Terracotta Set",
    image: "assets/cat-flowering.jpg",
    description: "Sun-loving aromatic jasmine paired with bright seasonal flowering perennials."
  },
  {
    id: "magenta-bougainvillea",
    name: "Sunburst Bougainvillea Arch",
    category: "flowering",
    categoryLabel: "Flowering Plants",
    tag: "Hardy Climber",
    price: 22,
    unit: "Trellis Pot",
    image: "assets/cat-flowering.jpg",
    description: "Drought-tolerant vivid magenta bracts ideal for gates, pergolas, and facades."
  },
  {
    id: "monstera-fiddle-duo",
    name: "Architectural Fiddle & Monstera",
    category: "ornamental",
    categoryLabel: "Ornamental Plants",
    tag: "Indoor Favorite",
    price: 38,
    unit: "Ceramic Planter",
    image: "assets/cat-ornamental.jpg",
    description: "Sculptural broad-leaf indoor foliage acclimatized for modern homes and offices."
  },
  {
    id: "evergreen-courtyard-palm",
    name: "Manicured Courtyard Evergreen",
    category: "ornamental",
    categoryLabel: "Ornamental Plants",
    tag: "Landscape Grade",
    price: 44,
    unit: "5 Gal Specimen",
    image: "assets/cat-ornamental.jpg",
    description: "Balanced emerald foliage for pathways, resort entryways, and terrace borders."
  },
  {
    id: "grafted-citrus-pomegranate",
    name: "Grafted Citrus & Pomegranate",
    category: "fruit",
    categoryLabel: "Fruit Plants",
    tag: "Organic Graft",
    price: 32,
    unit: "Fruiting Sapling",
    image: "assets/cat-fruit.jpg",
    description: "Early-fruiting grafted orchard saplings cultivated in nutrient-rich bio-compost."
  }
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

const state = {
  filter: "all",
  cart: []
};

/* ---------- DOM References ---------- */
const siteHeader = document.getElementById("siteHeader");
const plantsGrid = document.getElementById("plantsGrid");
const filterPills = document.querySelectorAll(".filter-pill");
const cartCountEl = document.getElementById("cartCount");
const cartItemsList = document.getElementById("cartItemsList");
const cartTotalEl = document.getElementById("cartTotal");
const cartFooter = document.getElementById("cartFooter");

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

/* ---------- Header Scroll State ---------- */
window.addEventListener("scroll", () => {
  if (window.scrollY > 24) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }
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

  const items =
    filter === "all"
      ? PLANT_CATALOG
      : PLANT_CATALOG.filter((item) => item.category === filter);

  plantsGrid.innerHTML = items
    .map(
      (plant) => `
      <article class="plant-card">
        <div class="plant-card-media">
          <img src="${plant.image}" alt="${plant.name}" loading="lazy" />
          <span class="plant-tag">${plant.tag}</span>
        </div>
        <div class="plant-card-body">
          <span class="plant-category-label">${plant.categoryLabel}</span>
          <h3>${plant.name}</h3>
          <p>${plant.description}</p>
          <div class="plant-card-footer">
            <div class="plant-price">
              $${plant.price.toFixed(2)}
              <small>${plant.unit}</small>
            </div>
            <button class="add-cart-btn" type="button" data-add-id="${plant.id}">
              + Add to Cart
            </button>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

filterPills.forEach((pill) => {
  pill.addEventListener("click", () => renderPlants(pill.dataset.filter));
});

document.querySelectorAll("[data-category-jump], .dropdown-menu a[data-filter], .mobile-nav-drawer a[data-filter]").forEach((el) => {
  el.addEventListener("click", () => {
    const filter = el.dataset.categoryJump || el.dataset.filter || "all";
    renderPlants(filter);
  });
});

/* ---------- Cart Management ---------- */
function updateCartUI() {
  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  cartCountEl.textContent = String(totalQty);
  cartTotalEl.textContent = `$${totalAmount.toFixed(2)}`;

  if (state.cart.length === 0) {
    cartItemsList.innerHTML = `<p class="cart-empty">Your nursery basket is currently empty. Add plants from our catalog to begin an order or bulk quote.</p>`;
    cartFooter.hidden = true;
    return;
  }

  cartFooter.hidden = false;
  cartItemsList.innerHTML = state.cart
    .map(
      (item) => `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.name}" />
        <div class="cart-item-info">
          <strong>${item.name}</strong>
          <span>$${item.price.toFixed(2)} &times; ${item.qty}</span>
        </div>
        <div class="qty-controls">
          <button class="qty-btn" type="button" data-qty-id="${item.id}" data-delta="-1" aria-label="Decrease quantity">&minus;</button>
          <span>${item.qty}</span>
          <button class="qty-btn" type="button" data-qty-id="${item.id}" data-delta="1" aria-label="Increase quantity">+</button>
        </div>
      </div>
    `
    )
    .join("");
}

function addToCart(plantId) {
  const plant = PLANT_CATALOG.find((p) => p.id === plantId);
  if (!plant) return;

  const existing = state.cart.find((item) => item.id === plantId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ ...plant, qty: 1 });
  }
  updateCartUI();
}

document.addEventListener("click", (event) => {
  const addBtn = event.target.closest("[data-add-id]");
  if (addBtn) {
    addToCart(addBtn.dataset.addId);
    const originalText = addBtn.textContent;
    addBtn.textContent = "Added ✓";
    setTimeout(() => {
      addBtn.textContent = originalText;
    }, 900);
    return;
  }

  const qtyBtn = event.target.closest("[data-qty-id]");
  if (qtyBtn) {
    const id = qtyBtn.dataset.qtyId;
    const delta = Number(qtyBtn.dataset.delta);
    const idx = state.cart.findIndex((i) => i.id === id);
    if (idx !== -1) {
      state.cart[idx].qty += delta;
      if (state.cart[idx].qty <= 0) {
        state.cart.splice(idx, 1);
      }
      updateCartUI();
    }
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

[searchModal, cartDrawer, quoteModal, videoModal].forEach((overlay) => {
  overlay?.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal(overlay);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    [searchModal, cartDrawer, quoteModal, videoModal].forEach((m) => {
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
          <span>${p.categoryLabel} &bull; $${p.price.toFixed(2)}</span>
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
    .map((item) => `${item.qty}x ${item.name} ($${(item.price * item.qty).toFixed(2)})`)
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

[document.getElementById("watchNurseryBtn"), document.getElementById("heroExploreVideoBtn")].forEach(
  (trigger) => {
    trigger?.addEventListener("click", () => {
      setTourSlide(0);
      openModal(videoModal);
    });
  }
);

tourSteps.forEach((step) => {
  step.addEventListener("click", () => {
    setTourSlide(Number(step.dataset.slide));
  });
});

/* ---------- Initialize ---------- */
renderPlants("all");
updateCartUI();
