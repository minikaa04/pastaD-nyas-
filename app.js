const products = [
    {
        id: 1,
        name: "Profesyonel Çikolata Seçenekleri",
        category: "chocolate",
        image: "Profesyonel Çikolata Seçenekleri.jpg",
        priceRange: "85 TL - 260 TL",
        rating: 4.8,
        reviewsCount: 124,
        description: "En kaliteli pasta ve tatlı yapımı için profesyonel kuvertür ve damla çikolatalar. Sütlü, bitter ve beyaz seçenekleriyle pastalarınıza lezzet katın.",
        variants: [
            { id: "1-1", name: "Beyaz Çikolata (250g)", price: 85, stock: 50 },
            { id: "1-2", name: "Sütlü Çikolata (500g)", price: 150, stock: 30 },
            { id: "1-3", name: "Bitter Çikolata (%70 Kakao 500g)", price: 160, stock: 20 },
            { id: "1-4", name: "Sütlü Kuvertür Çikolata (1kg)", price: 260, stock: 40 }
        ],
        specs: { "Marka": "ChocoMaster", "Menşei": "Belçika", "Tip": "Kuvertür / Damla", "Kullanım": "Eritme, Ganaj, Dekor" },
        reviews: [
            { user: "Deniz Y.", rating: 5, comment: "Harika bir dokusu var, beyaz çikolata favorim.", date: "15.02.2024" },
            { user: "Aras K.", rating: 4, comment: "Kaliteli ama kargo biraz geç geldi.", date: "20.03.2024" }
        ]
    },
    {
        id: 2,
        name: "Kelepçeli Metal Pasta Kalıpları",
        category: "molds",
        image: "Kelepçeli Metal Pasta Kalıpları.jpg",
        priceRange: "120 TL - 160 TL",
        rating: 4.9,
        reviewsCount: 89,
        description: "Paslanmaz çelikten üretilmiş, sızdırmaz kelepçeli pasta kalıpları. Eşit ısı dağılımı ile mükemmel kekler.",
        variants: [
            { id: "2-1", name: "Pasta Kalıbı 20 cm", price: 120, stock: 15 },
            { id: "2-2", name: "Pasta Kalıbı 24 cm", price: 130, stock: 25 },
            { id: "2-3", name: "Pasta Kalıbı 26 cm", price: 140, stock: 10 },
            { id: "2-4", name: "Pasta Kalıbı 30 cm", price: 160, stock: 5 }
        ],
        specs: { "Malzeme": "Paslanmaz Çelik", "Tip": "Kelepçeli", "Isı Dayanımı": "250°C", "Özellik": "Yapışmaz Yüzey" },
        reviews: [
            { user: "Selin G.", rating: 5, comment: "Kek kalıptan pürüzsüz çıkıyor, çok memnunum.", date: "10.01.2024" }
        ]
    },
    {
        id: 3,
        name: "Profesyonel Jel Gıda Boyaları",
        category: "coloring",
        image: "Profesyonel Jel Gıda Boyaları.jpeg",
        priceRange: "55 TL - 180 TL",
        rating: 4.7,
        reviewsCount: 210,
        description: "Yüksek konsantrasyonlu jel gıda boyaları. Şeker hamuru, krema ve hamur işleri için ideal canlı renkler.",
        variants: [
            { id: 301, name: "Jel Siyah (30ml)", price: 55, stock: 100 },
            { id: 302, name: "Jel Kırmızı (30ml)", price: 55, stock: 80 },
            { id: 303, name: "Jel Mavi (30ml)", price: 55, stock: 60 },
            { id: 304, name: "Altın Kandurin Toz (10g)", price: 85, stock: 45 },
            { id: 305, name: "12'li Profesyonel Set", price: 180, stock: 30 }
        ],
        specs: { "Tip": "Jel / Toz", "Hacim": "30ml", "Sertifika": "Gıda Onaylı", "Raf Ömrü": "24 Ay" },
        reviews: [
            { user: "Murat E.", rating: 5, comment: "Renkleri çok canlı, az miktar yetiyor.", date: "05.04.2024" }
        ]
    },
    {
        id: 4,
        name: "Silikon Turta ve Tart Kalıpları",
        category: "molds",
        image: "Silikon Turta ve Tart Kalıpları.jpg",
        priceRange: "85 TL - 115 TL",
        rating: 4.6,
        reviewsCount: 45,
        description: "Esnek ve dayanıklı silikon kalıplar. Fırın ve dondurucu kullanımı için uygun pratik çözümler.",
        variants: [
            { id: "4-1", name: "Yuvarlak Silikon 24cm", price: 85, stock: 20 },
            { id: "4-2", name: "Kare Silikon 22x22cm", price: 95, stock: 15 },
            { id: "4-3", name: "Mini Tart Seti (6'lı)", price: 115, stock: 25 }
        ],
        specs: { "Malzeme": "Gıda Sınıfı Silikon", "Sıcaklık": "-40 / +230 °C", "Uyum": "Fırın, Mikrodalga", "Yıkama": "Bulaşık Makinesi" },
        reviews: []
    },
    {
        id: 5,
        name: "Silikon Cupcake ve Muffin Kapları",
        category: "molds",
        image: "Silikon Cupcake ve Muffin Kapları.jpg",
        priceRange: "45 TL - 95 TL",
        rating: 4.9,
        reviewsCount: 156,
        description: "Renkli silikon muffin kapları. Yağlama gerektirmez, kolayca temizlenir ve tekrar kullanılabilir.",
        variants: [
            { id: "5-1", name: "12'li Standart Set", price: 85, stock: 40 },
            { id: "5-2", name: "6'lı Jumbo Set", price: 65, stock: 30 },
            { id: "5-3", name: "24'lü Mini Set", price: 95, stock: 10 }
        ],
        specs: { "Adet": "6 / 12 / 24", "Malzeme": "Platin Silikon", "Ömür": "Uzun Ömürlü", "BPA": "İçermez" },
        reviews: [
            { user: "Aylin H.", rating: 5, comment: "Kekler çok güzel kabarıyor ve yapışmıyor.", date: "12.03.2024" }
        ]
    },
    {
        id: 6,
        name: "Dayanıklı Krema Sıkma Torbaları",
        category: "equipment",
        image: "Dayanıklı Krema Sıkma Torbaları.jpg",
        priceRange: "35 TL - 95 TL",
        rating: 4.5,
        reviewsCount: 312,
        description: "Profesyonel kullanım için kaymaz yüzeyli yüksek kaliteli krema torbaları. Tek ve çok kullanımlık modeller.",
        variants: [
            { id: "6-1", name: "Tek Kullanımlık (100 adet)", price: 85, stock: 200 },
            { id: "6-2", name: "Silikon Yıkanabilir L", price: 45, stock: 150 },
            { id: "6-3", name: "Küçük Boy Set (50 adet)", price: 35, stock: 100 }
        ],
        specs: { "Tip": "PE Plastik / Silikon", "Boyut": "30cm - 45cm", "Yüzey": "Kaymaz Pütürlü", "Dayanıklılık": "Yüksek Basınç" },
        reviews: []
    },
    {
        id: 7,
        name: "Paslanmaz Çelik Duy Setleri",
        category: "nozzles",
        image: "Paslanmaz Çelik Duy Setleri.jpg",
        priceRange: "25 TL - 150 TL",
        rating: 4.8,
        reviewsCount: 420,
        description: "Pasta dekorasyonu için usta işi duy başlıkları. Yıldız, gül, yaprak ve daha fazlasını yaratın.",
        variants: [
            { id: "7-1", name: "1M Yıldız Başlık (Tekli)", price: 25, stock: 80 },
            { id: "7-2", name: "24'lü Profesyonel Set", price: 150, stock: 60 },
            { id: "7-3", name: "Rus Duy Seti (12'li)", price: 120, stock: 45 }
        ],
        specs: { "Malzeme": "304 Çelik", "Tip": "Dikişsiz", "Uyum": "Tüm Torbalar", "Paket": "Kutulu" },
        reviews: [
            { user: "Emel S.", rating: 5, comment: "Duy başlıkları çok kaliteli, dikiş izi yok.", date: "22.02.2024" }
        ]
    },
    {
        id: 8,
        name: "Hassas Dijital Mutfak Terazisi",
        category: "equipment",
        image: "Hassas Dijital Mutfak Terazisi.jpg",
        priceRange: "220 TL - 480 TL",
        rating: 4.9,
        reviewsCount: 175,
        description: "Doğru tarifler için hassas ölçüm. LCD ekranlı, dara fonksiyonlu ve şık tasarımlı mutfak terazileri.",
        variants: [
            { id: "8-1", name: "Dijital Standard (5kg)", price: 220, stock: 40 },
            { id: "8-2", name: "Hassas Kuyumcu Tipi (0.1g)", price: 350, stock: 25 },
            { id: "8-3", name: "USB Şarjlı Pro Model", price: 480, stock: 15 }
        ],
        specs: { "Kapasite": "5kg - 10kg", "Hassasiyet": "1g / 0.1g", "Ekran": "Mavi LCD", "Fonksiyon": "Dara Alma" },
        reviews: []
    },
    {
        id: 9,
        name: "Yenilebilir Dekoratif Süslemeler",
        category: "sprinkles",
        image: "Yenilebilir Dekoratif Süslemeler.jpg",
        priceRange: "40 TL - 75 TL",
        rating: 4.7,
        reviewsCount: 310,
        description: "Pastalarınıza ışıltı katan yenilebilir boncuklar ve konfetiler. Farklı renk ve şekil kombinasyonlarıyla.",
        variants: [
            { id: "9-1", name: "Altın/Gümüş Boncuk Seti", price: 65, stock: 100 },
            { id: "9-2", name: "Karışık Yıldız Konfeti", price: 40, stock: 120 },
            { id: "9-3", name: "Parlak Kristal Şeker", price: 45, stock: 80 },
            { id: "9-4", name: "Lüks Parti Karışımı", price: 75, stock: 50 }
        ],
        specs: { "Miktar": "100g", "İçerik": "Şeker Bazlı", "Sertifika": "Helal / Yerli Üretim", "Renk": "Gıda Boyalı" },
        reviews: []
    },
    {
        id: 10,
        name: "Pencereli Lüks Pasta Kutuları",
        category: "packaging",
        image: "Pencereli Lüks Pasta Kutuları.jpg",
        priceRange: "25 TL - 55 TL",
        rating: 4.8,
        reviewsCount: 112,
        description: "Emeğinizi koruyan ve şık sunan pencereli pasta kutuları. Farklı yüksekliklerde sağlam karton yapısı.",
        variants: [
            { id: "10-1", name: "Küçük (20x20x15cm)", price: 25, stock: 200 },
            { id: "10-2", name: "Orta (26x26x20cm)", price: 35, stock: 150 },
            { id: "10-3", name: "Büyük (30x30x25cm)", price: 45, stock: 80 },
            { id: "10-4", name: "Ekstra Yüksek Special", price: 55, stock: 40 }
        ],
        specs: { "Malzeme": "Gıda Kartonu", "Özellik": "Pencereli", "Kurulum": "Pratik Katlama", "Renk": "Beyaz / Kraft" },
        reviews: [
            { user: "Can S.", rating: 5, comment: "Kutular çok sağlam, yüksek pastalarım tam sığdı.", date: "05.06.2024" }
        ]
    }
];

// App State
let cart = JSON.parse(localStorage.getItem('bakery-cart')) || [];

// Cleanup Cart: Remove items that no longer exist in the products array
cart = cart.filter(item => products.some(p => p.id === item.productId));

let currentProduct = null;
let currentVariant = null;

// Cart Functions
function saveCart() {
    localStorage.setItem('bakery-cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const cartList = document.getElementById('cartItemsList');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');

    if (!cartList) return;

    cartList.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <h5>${item.name}</h5>
                <p style="font-size: 11px; color: #888;">${item.variantName}</p>
                <p style="font-weight: 600; color: #333;">${item.price} TL x ${item.quantity}</p>
                <small style="color:var(--primary); cursor:pointer; font-weight: 500;" onclick="removeFromCart('${item.cartId}')">Kaldır</small>
            </div>
        `;
        cartList.appendChild(div);
    });

    cartCount.innerText = count;
    cartTotal.innerText = `${total} TL`;
}

function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    saveCart();
}

function openCart() {
    document.getElementById('cartDrawer').classList.add('open');
    document.getElementById('cartOverlay').classList.add('show');
}

function closeCartDrawer() {
    document.getElementById('cartDrawer').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('show');
}

document.getElementById('cartBtn').onclick = openCart;
if (document.getElementById('closeCart')) document.getElementById('closeCart').onclick = closeCartDrawer;
if (document.getElementById('cartOverlay')) document.getElementById('cartOverlay').onclick = closeCartDrawer;

// Rendering Main Store
function renderProducts() {
    const grid = document.getElementById('main-products-grid');
    if (!grid) return;

    // Switch active view
    document.getElementById('productDetailsPage').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';

    const catFilters = document.querySelectorAll('.cat-filter');
    const selectedCats = Array.from(catFilters).filter(i => i.checked).map(i => i.value);

    // No complex filtering here as requested, just 10 products
    const filtered = products.filter(p => {
        return selectedCats.length === 0 || selectedCats.includes(p.category);
    });

    grid.innerHTML = '';

    filtered.forEach(p => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <img src="${p.image}" alt="${p.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${p.name}</h3>
                <div style="color: #f39c12; margin-bottom: 5px; font-size: 11px;">
                    <i class="fa-solid fa-star"></i> ${p.rating} | ${p.reviewsCount} Satış
                </div>
                <p class="product-price">${p.priceRange}</p>
                <div style="font-size: 11px; color: #00B69B; margin-bottom: 10px;">Ücretsiz Sevkiyat</div>
                <button class="btn-primary btn-card" onclick="showProductDetails(${p.id})">İncele</button>
            </div>
        `;
        grid.appendChild(div);
    });
}

const cFilters = document.querySelectorAll('.cat-filter');
cFilters.forEach(f => f.onchange = renderProducts);

function renderByCategory(cat) {
    cFilters.forEach(f => {
        f.checked = (f.value === cat);
    });
    renderProducts();
    scrollToProducts();
}

function scrollToProducts() {
    document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
}

// Product Details Page Logic
function showProductDetails(productId) {
    currentProduct = products.find(p => p.id === productId);
    if (!currentProduct) return;

    // View toggle
    document.getElementById('main-content').style.display = 'none';
    const dp = document.getElementById('productDetailsPage');
    dp.style.display = 'block';

    // Populate data
    document.getElementById('pd-image').src = currentProduct.image;
    document.getElementById('pd-title').innerText = currentProduct.name;
    document.getElementById('pd-rating').innerText = currentProduct.rating;
    document.getElementById('pd-reviews-count').innerText = currentProduct.reviewsCount;
    document.getElementById('pd-desc').innerText = currentProduct.description;

    const variantsContainer = document.getElementById('pd-variants');
    variantsContainer.innerHTML = '';

    currentVariant = currentProduct.variants[0];
    updateVariantDisplay();

    currentProduct.variants.forEach(v => {
        const btn = document.createElement('button');
        btn.className = v.id === currentVariant.id ? 'variant-btn active' : 'variant-btn';
        btn.innerText = v.name;
        btn.onclick = () => {
            currentVariant = v;
            updateVariantDisplay();
            Array.from(variantsContainer.children).forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        };
        variantsContainer.appendChild(btn);
    });

    // Populate Specs
    const specsBody = document.getElementById('pd-specs-body');
    specsBody.innerHTML = '';
    for (let key in currentProduct.specs) {
        specsBody.innerHTML += `
            <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px; font-weight: 600; width: 150px; color: #888; background:#fafafa;">${key}</td>
                <td style="padding: 12px; color: #333;">${currentProduct.specs[key]}</td>
            </tr>
        `;
    }

    // Populate Reviews
    const reviewsContainer = document.getElementById('pd-reviews-container');
    reviewsContainer.innerHTML = '';
    if (currentProduct.reviews.length === 0) {
        reviewsContainer.innerHTML = '<div style="padding: 20px; text-align: center; color: #999;">Henüz yorum yapılmamış.</div>';
    } else {
        currentProduct.reviews.forEach(r => {
            const stars = Array(r.rating).fill('<i class="fa-solid fa-star" style="color:#f39c12; font-size: 12px;"></i>').join('');
            reviewsContainer.innerHTML += `
                <div style="margin-bottom: 20px; padding: 20px; background: #fff; border-bottom: 1px solid #eee;">
                    <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 10px;">
                        <div style="width: 30px; height: 30px; background: #eee; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #888;">${r.user[0]}</div>
                        <span style="font-weight: 600; font-size: 14px;">${r.user}</span>
                        <span style="color: #bbb; font-size: 12px; margin-left: auto;">${r.date}</span>
                    </div>
                    <div style="margin-bottom: 8px;">${stars}</div>
                    <p style="color: #555; font-size: 14px; line-height: 1.5;">${r.comment}</p>
                </div>
            `;
        });
    }

    document.getElementById('pd-qty').value = 1;
    switchTab('specs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateVariantDisplay() {
    if (!currentVariant) return;
    document.getElementById('pd-price').innerText = currentVariant.price + ' TL';
}

function backToProducts() {
    document.getElementById('productDetailsPage').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}

function switchTab(tab) {
    document.getElementById('tab-specs').style.display = tab === 'specs' ? 'block' : 'none';
    document.getElementById('tab-reviews').style.display = tab === 'reviews' ? 'block' : 'none';

    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.tab-btn[onclick="switchTab('${tab}')"]`).classList.add('active');
}

function addActiveVariantToCart() {
    if (!currentProduct || !currentVariant) return;
    const qty = parseInt(document.getElementById('pd-qty').value) || 1;
    const cartId = currentProduct.id + "_" + currentVariant.id;
    const existing = cart.find(c => c.cartId === cartId);

    if (existing) {
        existing.quantity += qty;
    } else {
        cart.push({
            cartId: cartId,
            productId: currentProduct.id,
            variantId: currentVariant.id,
            name: currentProduct.name,
            variantName: currentVariant.name,
            price: currentVariant.price,
            image: currentProduct.image,
            quantity: qty
        });
    }
    saveCart();
    openCart();
}

function startCheckout() {
    if (cart.length === 0) {
        alert('Sepetiniz boş!');
        return;
    }
    document.getElementById('checkoutFlow').classList.add('active');
}

function closeCheckout() {
    document.getElementById('checkoutFlow').classList.remove('active');
}

function nextStep(n) {
    document.querySelectorAll('.checkout-step').forEach(s => s.style.display = 'none');
    document.getElementById('step' + n).style.display = 'block';
}

// Final verification of modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}

window.openModal = openModal;
window.closeModal = closeModal;
window.startCheckout = startCheckout;
window.closeCheckout = closeCheckout;
window.nextStep = nextStep;
window.backToProducts = backToProducts;
window.switchTab = switchTab;
window.addActiveVariantToCart = addActiveVariantToCart;
window.removeFromCart = removeFromCart;
window.renderByCategory = renderByCategory;
window.scrollToProducts = scrollToProducts;
window.showProductDetails = showProductDetails;

window.onload = () => {
    renderProducts();
    updateCartUI();
};
