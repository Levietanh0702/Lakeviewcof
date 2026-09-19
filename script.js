/* ═══════════════════════════════════════════
   LAKE VIEW COFFEE — script.js
═══════════════════════════════════════════ */

/* ── 1. MODAL LOGIC ── */
function openModal(id) {
    document.getElementById(id).classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeModal(id) {
    document.getElementById(id).classList.remove('open');
    document.body.style.overflow = '';
}
function overlayClose(e, id) {
    if (e.target === document.getElementById(id)) closeModal(id);
}
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.open').forEach(function(m) {
            m.classList.remove('open');
            document.body.style.overflow = '';
        });
    }
});

/* ═══ 2. DỮ LIỆU SẢN PHẨM ═══ */
const products = [
    /* ── CÀ PHÊ TRUYỀN THỐNG ── */
    { name:"Bạc Xỉu", price:"32.000", sold:89,  img:"./img/bacxiu.jpg", category:"drink",
      ingredients:["Cà phê phin", "Sữa đặc Ông Thọ", "Đá viên"], flavor:"Ngọt béo, nhẹ nhàng, thơm cà phê dịu", rating:4.8 },
    { name:"Cà Phê Đen", price:"25.000", sold:150, img:"", category:"drink",
      ingredients:["Cà phê phin nguyên chất", "Đường (tùy chọn)", "Đá viên"], flavor:"Đậm đà, đắng nhẹ hậu ngọt, hương cà phê rang mộc", rating:4.6 },
    { name:"Cà Phê Nâu", price:"28.000", sold:130, img:"", category:"drink",
      ingredients:["Cà phê phin", "Sữa đặc", "Đá"], flavor:"Béo nhẹ, thơm cà phê hoà quyện sữa đặc truyền thống", rating:4.6 },
    { name:"Cà Phê Muối", price:"35.000", sold:120, img:"./img/Caffemuoi.jpg", category:"drink",
      ingredients:["Cà phê phin", "Kem muối handmade", "Đường", "Đá"], flavor:"Đậm đà, béo ngậy, hậu vị mặn ngọt lạ miệng", rating:4.9 },
    { name:"Cacao Sữa", price:"32.000", sold:70, img:"", category:"drink",
      ingredients:["Bột cacao nguyên chất", "Sữa tươi", "Đường"], flavor:"Ngọt béo, thơm socola đậm đà, dễ uống", rating:4.5 },

    /* ── CÀ PHÊ MÁY ── */
    { name:"Cà Phê Đen Máy", price:"42.000", sold:40, img:"", category:"drink",
      ingredients:["Cà phê espresso", "Nước nóng"], flavor:"Đậm, đắng thanh, hương thơm nồng đặc trưng máy pha", rating:4.5 },
    { name:"Cà Phê Nâu Máy", price:"45.000", sold:38, img:"", category:"drink",
      ingredients:["Espresso", "Sữa tươi", "Sữa đặc"], flavor:"Béo mịn, hậu ngọt êm, đậm vị cà phê máy", rating:4.6 },
    { name:"Cappuccino", price:"55.000", sold:55, img:"", category:"drink",
      ingredients:["Espresso", "Sữa tươi đánh bông", "Bột quế (tùy chọn)"], flavor:"Béo nhẹ, lớp bọt sữa mịn, thơm nồng espresso", rating:4.7 },
    { name:"Latte", price:"55.000", sold:60, img:"", category:"drink",
      ingredients:["Espresso", "Sữa tươi", "Syrup (tùy chọn)"], flavor:"Êm dịu, béo sữa nhẹ nhàng, dễ uống", rating:4.7 },
    { name:"A Me (Americano)", price:"48.000", sold:42, img:"", category:"drink",
      ingredients:["Espresso", "Nước nóng/đá"], flavor:"Nhẹ nhàng, thanh mảnh, giữ trọn hương cà phê nguyên bản", rating:4.5 },

    /* ── TRÀ HOA QUẢ / TRÀ ĐẶC BIỆT ── */
    { name:"Trà Hoa Quả Đặc Biệt", price:"42.000", sold:95, img:"", category:"drink",
      ingredients:["Trà ô long", "Thập cẩm trái cây theo mùa", "Đường phèn"], flavor:"Hương trái cây tổng hợp, chua ngọt hài hoà, đặc trưng riêng của quán", rating:4.7 },
    { name:"Trà Sen Vàng Lá Nếp", price:"40.000", sold:80, img:"", category:"drink",
      ingredients:["Trà sen vàng", "Lá nếp tươi", "Đường phèn"], flavor:"Thơm sen dịu nhẹ, thoang thoảng mùi lá nếp, thanh mát", rating:4.8 },
    { name:"Trà Gừng", price:"32.000", sold:60, img:"", category:"drink",
      ingredients:["Trà đen", "Gừng tươi", "Mật ong"], flavor:"Cay ấm nhẹ, ngọt dịu mật ong, tốt cho tiêu hoá", rating:4.5 },
    { name:"Trà Thạch Đào", price:"35.000", sold:210, img:"./img/TraThachDao.jpg", category:"drink",
      ingredients:["Trà xanh Thái Nguyên", "Đào tươi", "Thạch trái cây", "Đường phèn"], flavor:"Thanh mát, chua ngọt dịu, thơm đào tự nhiên", rating:4.7 },
    { name:"Trà Atiso Mận", price:"38.000", sold:55, img:"", category:"drink",
      ingredients:["Hoa atiso đỏ", "Mận tươi", "Đường phèn"], flavor:"Chua nhẹ, thơm hoa atiso, hậu vị mận đặc trưng", rating:4.6 },
    { name:"Lục Trà Vải", price:"38.000", sold:65, img:"", category:"drink",
      ingredients:["Lục trà Thái Nguyên", "Vải thiều", "Đá viên"], flavor:"Thanh mát vị trà xanh, ngọt thơm vải chín", rating:4.7 },
    { name:"Trà Đào Cam Sả", price:"40.000", sold:45, img:"./img/DaoCamSa.png", category:"drink",
      ingredients:["Trà đen", "Đào tươi", "Cam vắt", "Sả tươi", "Đường mía"], flavor:"Chua ngọt sảng khoái, thơm sả gừng ấm áp", rating:4.6 },
    { name:"Trà Hoa Cúc Táo Đỏ", price:"42.000", sold:50, img:"./img/TraHoaCuc.png", category:"drink",
      ingredients:["Hoa cúc khô", "Táo đỏ", "Kỷ tử", "Mật ong"], flavor:"Thanh nhẹ, ngọt dịu táo đỏ, thư giãn tinh thần", rating:4.8 },
    { name:"Lake View Mocktail", price:"55.000", sold:40, img:"", category:"drink",
      ingredients:["Syrup trái cây", "Soda", "Đá viên", "Lá bạc hà"], flavor:"Sảng khoái, sủi bọt nhẹ, tươi mát như gió hồ Ecopark", rating:4.8 },

    /* ── NƯỚC ÉP ── */
    { name:"Nước Ép Táo", price:"35.000", sold:210, img:"./img/EpTao.png", category:"drink",
      ingredients:["Táo Fuji", "Gừng tươi", "Chanh vắt", "Đá"], flavor:"Ngọt tươi, nhẹ chua, thanh lịch và tinh tế", rating:4.6 },
    { name:"Nước Ép Cóc", price:"35.000", sold:70, img:"", category:"drink",
      ingredients:["Cóc tươi", "Đường", "Muối ớt (tùy chọn)"], flavor:"Chua giòn đặc trưng, giải khát cực đã, hậu vị mặn ngọt", rating:4.5 },
    { name:"Nước Ép Ổi", price:"35.000", sold:45, img:"./img/EpOi.png", category:"drink",
      ingredients:["Ổi lê", "Đường phèn", "Muối", "Đá lạnh"], flavor:"Ngọt thơm đặc trưng, hậu vị dịu ngọt thoang thoảng", rating:4.4 },
    { name:"Nước Ép Dứa", price:"35.000", sold:500, img:"./img/EpDua.png", category:"drink",
      ingredients:["Dứa tươi 100%", "Đường thốt nốt", "Muối hồng"], flavor:"Chua ngọt nhiệt đới, sảng khoái, giải khát tuyệt vời", rating:4.7 },
    { name:"Nước Ép Dưa Hấu", price:"35.000", sold:89, img:"./img/EpDuaHau.png", category:"drink",
      ingredients:["Dưa hấu tươi", "Chanh vắt", "Đá lạnh"], flavor:"Ngọt mát thanh tao, nhẹ nhàng như gió hồ", rating:4.5 },

    /* ── HEALTHY ── */
    { name:"Healthy Ổi Cóc", price:"42.000", sold:45, img:"", category:"drink",
      ingredients:["Ổi", "Cóc", "Mật ong", "Đá xay"], flavor:"Chua ngọt hài hoà, thanh mát, giàu vitamin C", rating:4.6 },
    { name:"Healthy Hoàng Hôn", price:"45.000", sold:38, img:"", category:"drink",
      ingredients:["Cam", "Dứa", "Dâu tằm tạo màu", "Đá xay"], flavor:"Sắc màu hoàng hôn bắt mắt, vị ngọt thanh nhẹ nhàng", rating:4.7 },
    { name:"Healthy Thanh Mát", price:"42.000", sold:42, img:"", category:"drink",
      ingredients:["Dưa leo", "Bạc hà", "Chanh", "Mật ong"], flavor:"Mát lạnh sảng khoái, thanh lọc cơ thể tức thì", rating:4.6 },
    { name:"Healthy Thủy Chung", price:"45.000", sold:35, img:"", category:"drink",
      ingredients:["Táo", "Cà rốt", "Cần tây", "Mật ong"], flavor:"Ngọt dịu tự nhiên, tốt cho sức khoẻ, dễ uống", rating:4.5 },
    { name:"Sinh Tố Bơ", price:"48.000", sold:120, img:"./img/STBo.png", category:"drink",
      ingredients:["Bơ Đắk Lắk", "Sữa đặc", "Đá xay", "Cacao (tùy chọn)"], flavor:"Béo ngậy sánh mịn, ngọt dịu, bổ dưỡng cao", rating:4.9 },
    { name:"Detox Chanh Gừng", price:"42.000", sold:48, img:"", category:"drink",
      ingredients:["Chanh tươi", "Gừng", "Mật ong", "Nước ấm/đá"], flavor:"Chua cay nhẹ, thanh lọc cơ thể, tăng đề kháng", rating:4.5 },

    /* ── TRÀ SỮA & ĐÁ XAY ── */
    { name:"Trà Sữa Truyền Thống", price:"45.000", sold:100, img:"", category:"drink",
      ingredients:["Hồng trà", "Sữa tươi", "Trân châu đen"], flavor:"Béo thơm truyền thống, ngọt vừa, trân châu dai mềm", rating:4.6 },
    { name:"Trà Sữa Chân Trâu", price:"48.000", sold:110, img:"", category:"drink",
      ingredients:["Hồng trà", "Sữa tươi", "Trân châu đen", "Đường nâu"], flavor:"Đậm đà béo ngậy, trân châu dai giòn đặc trưng", rating:4.7 },
    { name:"Hồng Trà Macchiato", price:"48.000", sold:55, img:"", category:"drink",
      ingredients:["Hồng trà", "Kem macchiato phô mai", "Đá viên"], flavor:"Vị trà đậm kết hợp lớp kem mặn béo lạ miệng", rating:4.7 },
    { name:"Trà Sữa Socola", price:"48.000", sold:50, img:"", category:"drink",
      ingredients:["Bột cacao", "Sữa tươi", "Trân châu"], flavor:"Ngọt béo socola đậm đà, thơm ngậy khó cưỡng", rating:4.6 },
    { name:"Sữa Tươi Chân Trâu Đường Đen", price:"48.000", sold:90, img:"", category:"drink",
      ingredients:["Sữa tươi", "Đường đen thắng caramen", "Trân châu đen"], flavor:"Béo mịn sữa tươi, đậm vị đường đen caramen thơm nồng", rating:4.8 },
    { name:"Đá Xay Cookie & Cream", price:"55.000", sold:65, img:"", category:"drink",
      ingredients:["Bánh Oreo", "Sữa tươi", "Kem tươi", "Đá xay"], flavor:"Béo ngậy, giòn tan vị bánh quy, ngọt dịu hấp dẫn", rating:4.8 },
    { name:"Đá Xay Đậu Xanh Sen Vàng", price:"52.000", sold:40, img:"", category:"drink",
      ingredients:["Đậu xanh", "Sen vàng", "Sữa tươi", "Đá xay"], flavor:"Bùi béo đậu xanh, thơm sen vàng thanh mát", rating:4.6 },
    { name:"Matcha Đá Xay", price:"45.000", sold:45, img:"./img/MatchaDX.png", category:"drink",
      ingredients:["Matcha Uji Nhật Bản", "Sữa tươi", "Đường nâu", "Đá xay", "Whipping cream"], flavor:"Đắng nhẹ matcha, béo kem, ngọt hậu dài", rating:4.7 },
    { name:"Đá Xay Socola", price:"55.000", sold:58, img:"", category:"drink",
      ingredients:["Bột cacao", "Sữa tươi", "Kem tươi", "Đá xay"], flavor:"Đậm đà socola, béo mịn, ngọt vừa phải", rating:4.6 },
    { name:"Sinh Tố Xoài", price:"40.000", sold:89, img:"./img/STXoai.png", category:"drink",
      ingredients:["Xoài cát Hoà Lộc", "Sữa chua", "Mật ong", "Đá xay"], flavor:"Ngọt béo quyến rũ, thơm xoài chín đặc trưng", rating:4.8 },
    { name:"Sinh Tố Mãng Cầu", price:"40.000", sold:500, img:"./img/STMangCau.png", category:"drink",
      ingredients:["Mãng cầu xiêm", "Sữa tươi không đường", "Đường thốt nốt", "Đá xay"], flavor:"Sữa kem thơm, chua ngọt lạ, hương nhiệt đới độc đáo", rating:4.9 },
    { name:"Cà Phê Cốt Dừa", price:"45.000", sold:60, img:"", category:"drink",
      ingredients:["Cà phê phin", "Nước cốt dừa", "Đường", "Đá xay"], flavor:"Béo ngậy nước cốt dừa, đậm vị cà phê, lạ miệng hấp dẫn", rating:4.7 },

    /* ── ĐỒ UỐNG KHÁC ── */
    { name:"Dừa Tươi", price:"45.000", sold:120, img:"./img/Dua.png", category:"drink",
      ingredients:["Dừa xiêm tươi nguyên quả", "Thạch dừa (tùy chọn)"], flavor:"Ngọt thanh tự nhiên, béo nhẹ, mát lạnh", rating:4.8 },
    { name:"Trà Hoa Cúc", price:"120.000", sold:210, img:"./img/TraHoaCuc.png", category:"drink",
      ingredients:["Hoa cúc khô cao cấp", "Mật ong rừng", "Nước khoáng nóng"], flavor:"Thanh nhẹ, hoa cúc tinh khiết, thư giãn thần kinh", rating:5.0 },

    /* ── ĐỒ ĂN ── */
    { name:"Hotdog", price:"35.000", sold:500, img:"./img/Hotdog.png", category:"food",
      ingredients:["Xúc xích Đức", "Bánh mì mềm", "Sốt mù tạt", "Ketchup", "Hành phi"], flavor:"Nóng giòn, đậm đà, béo ngậy, thích hợp ăn kèm cà phê", rating:4.6 },
    { name:"Croissant", price:"25.000", sold:45, img:"./img/croisant.jpg", category:"food",
      ingredients:["Bột mì số 11", "Bơ Anchor", "Trứng gà", "Sữa tươi", "Men nở"], flavor:"Bơ thơm ngậy, vỏ giòn xốp, ruột mềm tan trong miệng", rating:4.8 },
];

/* ═══ 3. TOOLTIP DỮ LIỆU SẢN PHẨM ═══ */
let tooltipTimeout = null;
const tooltip = document.getElementById('product-tooltip');

function showTooltip(e, product) {
    clearTimeout(tooltipTimeout);
    // Fill content
    document.getElementById('tip-ingredients').innerHTML =
        product.ingredients.map(i => `<span class="tip-tag">${i}</span>`).join('');
    document.getElementById('tip-flavor').textContent = product.flavor;
    // Stars
    const fullStars = Math.floor(product.rating);
    const hasHalf = product.rating % 1 >= 0.5;
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) starsHTML += '<i class="fas fa-star tip-star filled"></i>';
        else if (i === fullStars && hasHalf) starsHTML += '<i class="fas fa-star-half-alt tip-star filled"></i>';
        else starsHTML += '<i class="far fa-star tip-star"></i>';
    }
    starsHTML += `<span class="tip-rating-num">${product.rating.toFixed(1)}</span>`;
    document.getElementById('tip-stars').innerHTML = starsHTML;

    tooltip.classList.add('visible');
    positionTooltip(e);
}

function positionTooltip(e) {
    const tw = tooltip.offsetWidth || 280;
    const th = tooltip.offsetHeight || 180;
    let x = e.clientX + 16;
    let y = e.clientY - th / 2;
    if (x + tw > window.innerWidth - 10) x = e.clientX - tw - 16;
    if (y < 8) y = 8;
    if (y + th > window.innerHeight - 8) y = window.innerHeight - th - 8;
    tooltip.style.left = x + 'px';
    tooltip.style.top  = y + 'px';
}

function hideTooltip() {
    tooltipTimeout = setTimeout(() => tooltip.classList.remove('visible'), 120);
}

document.addEventListener('mousemove', function(e) {
    if (tooltip.classList.contains('visible')) {
        positionTooltip(e);
    }
});

/* ═══ 4. SLIDER ═══ */
let slideIdx = 0;
const slides = document.querySelectorAll('.slide');
function nextSlide() {
    if (!slides.length) return;
    slides[slideIdx].classList.remove('active');
    slideIdx = (slideIdx + 1) % slides.length;
    slides[slideIdx].classList.add('active');
}
setInterval(nextSlide, 4500);

/* ═══ 5. COUNTERS ═══ */
document.querySelectorAll('.counter').forEach(function(counter) {
    const target = +counter.dataset.target;
    const inc = target / 200;
    var update = function() {
        const c = +counter.innerText;
        if (c < target) { counter.innerText = Math.ceil(c + inc); setTimeout(update, 1); }
        else counter.innerText = target;
    };
    update();
});

/* ═══ 6. RENDER SẢN PHẨM TRANG CHỦ ═══ */
let currentCategory = 'all';
let currentPage     = 1;
let searchQuery     = '';
let sortMode        = 'default';
const itemsPerPage  = 16;

function parsePrice(str) { return parseInt(str.replace(/\./g, ''), 10); }

function getFilteredItems() {
    let list = products.filter(item => {
        const mc = currentCategory === 'all' || item.category === currentCategory;
        const ms = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        return mc && ms;
    });
    if (sortMode === 'price-asc')  list = [...list].sort((a,b) => parsePrice(a.price) - parsePrice(b.price));
    if (sortMode === 'price-desc') list = [...list].sort((a,b) => parsePrice(b.price) - parsePrice(a.price));
    if (sortMode === 'bestseller') list = [...list].sort((a,b) => b.sold - a.sold);
    return list;
}

function getBestSellerThreshold(list) {
    if (!list.length) return Infinity;
    const sorted = [...list].sort((a,b) => b.sold - a.sold);
    return sorted[Math.min(2, sorted.length - 1)].sold;
}

function renderProducts(page) {
    const container = document.getElementById('product-list');
    if (!container) return;
    const filtered  = getFilteredItems();
    const start     = (page - 1) * itemsPerPage;
    const paginated = filtered.slice(start, start + itemsPerPage);
    const bsThreshold = getBestSellerThreshold(filtered);

    if (paginated.length === 0) {
        container.innerHTML = `<div class="no-result"><i class="fas fa-search"></i><p>Không tìm thấy "<strong>${searchQuery}</strong>"</p></div>`;
        document.getElementById('pagination').innerHTML = '';
        return;
    }

    container.innerHTML = paginated.map((item, idx) => {
        const isBest = item.sold >= bsThreshold && sortMode === 'bestseller';
        const badge  = isBest ? `<span class="badge-bestseller">🏆 Best Seller</span>` : '';
        const starsPreview = generateStarsHTML(item.rating);
        return `
        <div class="product-card" 
             data-idx="${filtered.indexOf(item)}"
             onmouseenter="showTooltip(event, products[${products.indexOf(item)}])"
             onmouseleave="hideTooltip()">
            ${badge}
            <div class="product-img-wrap">
                <img src="${item.img}" alt="${item.name}" 
                     onerror="this.src='https://via.placeholder.com/200x200/f0ede6/a0714f?text=${encodeURIComponent(item.name)}'">
                <div class="product-img-overlay">
                    <span class="hover-detail-hint"><i class="fas fa-info-circle"></i> Chi tiết</span>
                </div>
            </div>
            <h3>${item.name}</h3>
            <div class="product-rating-row">${starsPreview}<span class="rating-num">${item.rating.toFixed(1)}</span></div>
            <span class="price">${item.price} VNĐ</span>
            <span class="sold-count">Đã bán: ${item.sold}+</span>
            <button class="buy-btn" onclick="addToMiniCart('${item.name}', '${item.price} VNĐ', '${item.img}', '')">Mua ngay</button>
        </div>`;
    }).join('');

    renderPagination(filtered.length);
}

function generateStarsHTML(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    let html = '';
    for (let i = 0; i < 5; i++) {
        if (i < full) html += '<i class="fas fa-star mini-star"></i>';
        else if (i === full && half) html += '<i class="fas fa-star-half-alt mini-star"></i>';
        else html += '<i class="far fa-star mini-star empty"></i>';
    }
    return html;
}

function renderPagination(total) {
    const pc = document.getElementById('pagination');
    if (!pc) return;
    const pages = Math.ceil(total / itemsPerPage);
    pc.innerHTML = Array.from({length: pages}, (_,i) =>
        `<button class="page-btn ${i+1===currentPage?'active':''}" onclick="changePage(${i+1})">${i+1}</button>`
    ).join('');
}

function changePage(p) {
    currentPage = p;
    renderProducts(p);
    document.querySelector('.menu-title')?.scrollIntoView({behavior:'smooth'});
}

function filterCategory(cat, el) {
    currentCategory = cat; currentPage = 1; searchQuery = '';
    const si = document.getElementById('menu-search');
    if (si) si.value = '';
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    if (el) el.classList.add('active');
    renderProducts(currentPage);
}

function handleSearch(v) { searchQuery = v.trim(); currentPage = 1; renderProducts(currentPage); }
function clearSearch() {
    const i = document.getElementById('menu-search');
    i.value = '';
    handleSearch('');
}
function handleSort(value) { sortMode = value; currentPage = 1; renderProducts(currentPage); }

/* ═══ 7. DRINK / FOOD MODAL DATA ═══ */
const drinkData = [
    /* ── CÀ PHÊ TRUYỀN THỐNG ── */
    { name:"Bạc Xỉu", price:"32.000 VNĐ", cat:"cf-truyen-thong", img:"./img/bacxiu.jpg", emoji:"☕" },
    { name:"Cà Phê Đen", price:"25.000 VNĐ", cat:"cf-truyen-thong", img:"", emoji:"☕" },
    { name:"Cà Phê Nâu", price:"28.000 VNĐ", cat:"cf-truyen-thong", img:"", emoji:"☕" },
    { name:"Cà Phê Muối", price:"35.000 VNĐ", cat:"cf-truyen-thong", img:"./img/Caffemuoi.jpg", emoji:"☕" },
    { name:"Cacao Sữa", price:"32.000 VNĐ", cat:"cf-truyen-thong", img:"", emoji:"🍫" },

    /* ── CÀ PHÊ MÁY ── */
    { name:"Cà Phê Đen Máy", price:"42.000 VNĐ", cat:"cf-may", img:"", emoji:"☕" },
    { name:"Cà Phê Nâu Máy", price:"45.000 VNĐ", cat:"cf-may", img:"", emoji:"☕" },
    { name:"Cappuccino", price:"55.000 VNĐ", cat:"cf-may", img:"", emoji:"☕" },
    { name:"Latte", price:"55.000 VNĐ", cat:"cf-may", img:"", emoji:"☕" },
    { name:"A Me (Americano)", price:"48.000 VNĐ", cat:"cf-may", img:"", emoji:"☕" },

    /* ── TRÀ HOA QUẢ / TRÀ ĐẶC BIỆT ── */
    { name:"Trà Hoa Quả Đặc Biệt", price:"42.000 VNĐ", cat:"tra-hoa-qua", img:"", emoji:"🍹" },
    { name:"Trà Sen Vàng Lá Nếp", price:"40.000 VNĐ", cat:"tra-hoa-qua", img:"", emoji:"🪷" },
    { name:"Trà Gừng", price:"32.000 VNĐ", cat:"tra-hoa-qua", img:"", emoji:"🫚" },
    { name:"Trà Thạch Đào", price:"35.000 VNĐ", cat:"tra-hoa-qua", img:"./img/TraThachDao.jpg", emoji:"🍑" },
    { name:"Trà Atiso Mận", price:"38.000 VNĐ", cat:"tra-hoa-qua", img:"", emoji:"🌺" },
    { name:"Lục Trà Vải", price:"38.000 VNĐ", cat:"tra-hoa-qua", img:"", emoji:"🍵" },
    { name:"Trà Đào Cam Sả", price:"40.000 VNĐ", cat:"tra-hoa-qua", img:"./img/DaoCamSa.png", emoji:"🍑" },
    { name:"Trà Hoa Cúc Táo Đỏ", price:"42.000 VNĐ", cat:"tra-hoa-qua", img:"./img/TraHoaCuc.png", emoji:"🌼" },
    { name:"Lake View Mocktail", price:"55.000 VNĐ", cat:"tra-hoa-qua", img:"", emoji:"🍸" },

    /* ── NƯỚC ÉP ── */
    { name:"Nước Ép Táo", price:"35.000 VNĐ", cat:"nuoc-ep", img:"./img/EpTao.png", emoji:"🍎" },
    { name:"Nước Ép Cóc", price:"35.000 VNĐ", cat:"nuoc-ep", img:"", emoji:"🥭" },
    { name:"Nước Ép Ổi", price:"35.000 VNĐ", cat:"nuoc-ep", img:"./img/EpOi.png", emoji:"🍐" },
    { name:"Nước Ép Dứa", price:"38.000 VNĐ", cat:"nuoc-ep", img:"./img/EpDua.png", emoji:"🍍" },
    { name:"Nước Ép Dưa Hấu", price:"35.000 VNĐ", cat:"nuoc-ep", img:"./img/EpDuaHau.png", emoji:"🍉" },

    /* ── HEALTHY ── */
    { name:"Healthy Ổi Cóc", price:"42.000 VNĐ", cat:"healthy", img:"", emoji:"🥗" },
    { name:"Healthy Hoàng Hôn", price:"45.000 VNĐ", cat:"healthy", img:"", emoji:"🌅" },
    { name:"Healthy Thanh Mát", price:"42.000 VNĐ", cat:"healthy", img:"", emoji:"🌿" },
    { name:"Healthy Thủy Chung", price:"45.000 VNĐ", cat:"healthy", img:"", emoji:"💚" },
    { name:"Sinh Tố Bơ", price:"48.000 VNĐ", cat:"healthy", img:"./img/STBo.png", emoji:"🥑" },
    { name:"Detox Chanh Gừng", price:"42.000 VNĐ", cat:"healthy", img:"", emoji:"🫚" },

    /* ── TRÀ SỮA & ĐÁ XAY ── */
    { name:"Trà Sữa Truyền Thống", price:"45.000 VNĐ", cat:"tra-sua-da-xay", img:"", emoji:"🧋" },
    { name:"Trà Sữa Chân Trâu", price:"48.000 VNĐ", cat:"tra-sua-da-xay", img:"", emoji:"🧋" },
    { name:"Hồng Trà Macchiato", price:"48.000 VNĐ", cat:"tra-sua-da-xay", img:"", emoji:"🧋" },
    { name:"Trà Sữa Socola", price:"48.000 VNĐ", cat:"tra-sua-da-xay", img:"", emoji:"🍫" },
    { name:"Sữa Tươi Chân Trâu Đường Đen", price:"48.000 VNĐ", cat:"tra-sua-da-xay", img:"", emoji:"🥛" },
    { name:"Đá Xay Cookie & Cream", price:"55.000 VNĐ", cat:"tra-sua-da-xay", img:"", emoji:"🍪" },
    { name:"Đá Xay Đậu Xanh Sen Vàng", price:"52.000 VNĐ", cat:"tra-sua-da-xay", img:"", emoji:"🫘" },
    { name:"Matcha Đá Xay", price:"45.000 VNĐ", cat:"tra-sua-da-xay", img:"./img/MatchaDX.png", emoji:"🍵" },
    { name:"Đá Xay Socola", price:"55.000 VNĐ", cat:"tra-sua-da-xay", img:"", emoji:"🍫" },
    { name:"Sinh Tố Xoài", price:"40.000 VNĐ", cat:"tra-sua-da-xay", img:"./img/STXoai.png", emoji:"🥭" },
    { name:"Sinh Tố Mãng Cầu", price:"40.000 VNĐ", cat:"tra-sua-da-xay", img:"./img/STMangCau.png", emoji:"🍈" },
    { name:"Cà Phê Cốt Dừa", price:"45.000 VNĐ", cat:"tra-sua-da-xay", img:"", emoji:"🥥" },
];

const foodData = [
    /* ── BÁNH NGỌT ── */
    { name:"Tiramisu", price:"45.000 VNĐ", cat:"banh-ngot", img:"", emoji:"🍰" },
    { name:"Bánh Kem Gấu", price:"32.000 VNĐ", cat:"banh-ngot", img:"", emoji:"🧸" },
    { name:"Bánh Hạnh Nhân", price:"28.000 VNĐ", cat:"banh-ngot", img:"", emoji:"🌰" },
    { name:"Bánh Su Kem", price:"22.000 VNĐ", cat:"banh-ngot", img:"", emoji:"🍮" },
    { name:"Cheesecake Dâu", price:"48.000 VNĐ", cat:"banh-ngot", img:"", emoji:"🍰" },
    { name:"Macaron", price:"18.000 VNĐ", cat:"banh-ngot", img:"", emoji:"🍬" },

    /* ── BÁNH MẶN ── */
    { name:"Bông Lan Trứng Muối", price:"30.000 VNĐ", cat:"banh-man", img:"", emoji:"🍞" },
    { name:"Hotdog", price:"35.000 VNĐ", cat:"banh-man", img:"./img/Hotdog.png", emoji:"🌭" },
    { name:"Croissant", price:"25.000 VNĐ", cat:"banh-man", img:"./img/croissant.jpg", emoji:"🥐" },
    { name:"Bánh Mì Que", price:"15.000 VNĐ", cat:"banh-man", img:"./img/banhmique.jpg", emoji:"🥖" },
    { name:"Bánh Mì Thịt Nguội", price:"28.000 VNĐ", cat:"banh-man", img:"", emoji:"🥪" },
    { name:"Bánh Mặn Phomat", price:"32.000 VNĐ", cat:"banh-man", img:"", emoji:"🧀" },
    { name:"Bánh Crepe Mặn", price:"35.000 VNĐ", cat:"banh-man", img:"", emoji:"🫔" },

    /* ── ĂN NHẸ ── */
    { name:"Trứng Cuộn Rong Biển", price:"25.000 VNĐ", cat:"an-nhe", img:"", emoji:"🥚" },
    { name:"Bánh Tráng Trộn", price:"20.000 VNĐ", cat:"an-nhe", img:"", emoji:"🌮" },
    { name:"Salad Rau Củ", price:"38.000 VNĐ", cat:"an-nhe", img:"", emoji:"🥗" },

    /* ── NHÂM NHI ── */
    { name:"Khô Bò", price:"55.000 VNĐ", cat:"nham-nhi", img:"", emoji:"🥩" },
    { name:"Khô Gà", price:"45.000 VNĐ", cat:"nham-nhi", img:"", emoji:"🍗" },
    { name:"Khô Heo", price:"48.000 VNĐ", cat:"nham-nhi", img:"", emoji:"🥓" },
    { name:"Bỏng Ngô", price:"20.000 VNĐ", cat:"nham-nhi", img:"", emoji:"🍿" },
    { name:"Hướng Dương", price:"10.000 VNĐ", cat:"nham-nhi", img:"./img/huongduong.jpg", emoji:"🌻" },
    { name:"Hạt Macadamia", price:"35.000 VNĐ", cat:"nham-nhi", img:"", emoji:"🥜" },
    { name:"Kẹo Dẻo Mix Vị", price:"22.000 VNĐ", cat:"nham-nhi", img:"", emoji:"🍬" },
    { name:"Bơ Rang Muối", price:"18.000 VNĐ", cat:"nham-nhi", img:"", emoji:"🧈" },
];

function renderCatGrid(data, containerId) {
    const c = document.getElementById(containerId);
    if (!c) return;
    c.innerHTML = data.map(item => `
        <div class="cat-item">
            <div class="cat-item-img">
                ${item.img
                    ? `<img src="${item.img}" alt="${item.name}" onerror="this.parentElement.innerHTML='<span>${item.emoji}</span>'">`
                    : `<span>${item.emoji}</span>`}
            </div>
            <div class="cat-item-body">
                <h3>${item.name}</h3>
                <div class="price">${item.price}</div>
            </div>
            <button class="cat-btn" onclick="addToMiniCart('${item.name}', '${item.price}', '${item.img}', '${item.emoji}')">Mua ngay</button>
        </div>
    `).join('');
}

function filterDrink(cat, el) {
    document.querySelectorAll('#drink-tabs .cat-tab').forEach(t => t.classList.remove('active'));
    if (el) el.classList.add('active');
    renderCatGrid(cat === 'all' ? drinkData : drinkData.filter(d => d.cat === cat), 'drink-grid');
}

function filterFood(cat, el) {
    document.querySelectorAll('#food-tabs .cat-tab').forEach(t => t.classList.remove('active'));
    if (el) el.classList.add('active');
    renderCatGrid(cat === 'all' ? foodData : foodData.filter(d => d.cat === cat), 'food-grid');
}

/* ═══════════════════════════════════════════
   8. ĐẶT BÀN LOGIC
═══════════════════════════════════════════ */

const AREAS = [
    { id:'sau-quay',      label:'Sau Quầy',      icon:'🏠', desc:'Không gian ấm cúng, gần quầy pha chế' },
    { id:'bai-soi',       label:'Bãi Sỏi',       icon:'🪨', desc:'Không gian mở, thoáng đãng tự nhiên' },
    { id:'hang-o',        label:'Hàng Ô',         icon:'☂️', desc:'Có ô che mưa nắng, lý tưởng buổi trưa' },
    { id:'hang-gach',     label:'Hàng Gạch',      icon:'🧱', desc:'Lối đi gạch vintage, chụp ảnh đẹp' },
    { id:'cay-ben-ho',    label:'Cây Bên Hồ',     icon:'🌳', desc:'Dưới tán cây, view hồ tuyệt vời' },
    { id:'cay-ben-duong', label:'Cây Bên Đường',  icon:'🌲', desc:'Mát mẻ, gần đường đi dạo Ecopark' },
    { id:'choi-lon',      label:'Chòi Lớn',       icon:'🏕️', desc:'Sức chứa lớn, phù hợp nhóm đông' },
    { id:'choi-be',       label:'Chòi Bé',        icon:'⛺', desc:'Không gian riêng tư, lãng mạn' },
    { id:'den-chum',      label:'Đèn Chùm',       icon:'💡', desc:'Lung linh ánh đèn, tuyệt vời buổi tối' },
    { id:'bai-co',        label:'Bãi Cỏ',         icon:'🌿', desc:'Thảm cỏ xanh mướt, picnic phong cách' },
    { id:'ven-ho',        label:'Ven Hồ',          icon:'🌊', desc:'View hồ đẹp nhất, gió mát tự nhiên' },
];

// Menu đặt bàn — gộp tất cả đồ uống + đồ ăn
const orderMenuAll = [
    ...drinkData.map(d => ({ ...d, type:'drink', priceNum: parseInt(d.price.replace(/\./g,'').replace(' VNĐ','')) })),
    ...foodData.map(d => ({ ...d, type:'food', priceNum: parseInt(d.price.replace(/\./g,'').replace(' VNĐ','')) })),
];

const ORDER_CAT_LABELS = {
    'cf-truyen-thong': '☕ CF Truyền Thống',
    'cf-may': '☕ Cà Phê Máy',
    'tra-hoa-qua': '🍑 Trà Hoa Quả',
    'nuoc-ep': '🍊 Nước Ép',
    'healthy': '🥑 Healthy',
    'tra-sua-da-xay': '🧋 Trà Sữa & Đá Xay',
    'banh-ngot': '🥐 Bánh Ngọt',
    'banh-man': '🥪 Bánh Mặn',
    'an-nhe': '🥗 Ăn Nhẹ',
    'nham-nhi': '🌻 Nhâm Nhi',
};

let orderCart    = {}; // { itemName: { item, qty } }
let selectedArea = null;
let bookingTables = []; // array of booking summaries for multiple tables
let currentBookingData = null; // current table being booked
let orderMenuFilter = { cat: 'all', search: '' };

function initBookingUI() {
    // Render area grid
    const ag = document.getElementById('area-grid');
    if (ag) {
        ag.innerHTML = AREAS.map(a => `
            <div class="area-card" id="area-${a.id}" onclick="selectArea('${a.id}')">
                <div class="area-icon">${a.icon}</div>
                <div class="area-label">${a.label}</div>
                <div class="area-desc">${a.desc}</div>
            </div>
        `).join('');
    }

    // Render category tabs
    const tabs = document.getElementById('order-cat-tabs');
    if (tabs) {
        const cats = ['all', ...Object.keys(ORDER_CAT_LABELS)];
        tabs.innerHTML = cats.map(c => `
            <button class="order-cat-tab ${c==='all'?'active':''}" onclick="setOrderCat('${c}', this)">
                ${c === 'all' ? '🍽️ Tất cả' : ORDER_CAT_LABELS[c]}
            </button>
        `).join('');
    }

    renderOrderMenu();

    // Set default datetime (now + 1h)
    const dtInput = document.getElementById('booking-time');
    if (dtInput) {
        const now = new Date(Date.now() + 60 * 60 * 1000);
        const pad = n => String(n).padStart(2,'0');
        dtInput.value = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
    }
}

function selectArea(id) {
    selectedArea = id;
    document.querySelectorAll('.area-card').forEach(c => c.classList.remove('selected'));
    const el = document.getElementById('area-' + id);
    if (el) el.classList.add('selected');
}

function changeGuests(delta) {
    const input = document.getElementById('booking-guests');
    let val = parseInt(input.value) + delta;
    if (val < 1) val = 1;
    if (val > 50) val = 50;
    input.value = val;
}

function setOrderCat(cat, el) {
    orderMenuFilter.cat = cat;
    document.querySelectorAll('.order-cat-tab').forEach(t => t.classList.remove('active'));
    if (el) el.classList.add('active');
    renderOrderMenu();
}

function filterOrderMenu(v) {
    orderMenuFilter.search = v.trim().toLowerCase();
    renderOrderMenu();
}

function renderOrderMenu() {
    const grid = document.getElementById('order-menu-grid');
    if (!grid) return;
    let items = orderMenuAll;
    if (orderMenuFilter.cat !== 'all') items = items.filter(i => i.cat === orderMenuFilter.cat);
    if (orderMenuFilter.search) items = items.filter(i => i.name.toLowerCase().includes(orderMenuFilter.search));

    if (!items.length) {
        grid.innerHTML = `<div class="order-empty"><i class="fas fa-search"></i><p>Không tìm thấy món</p></div>`;
        return;
    }

    grid.innerHTML = items.map(item => {
        const qty = orderCart[item.name] ? orderCart[item.name].qty : 0;
        return `
        <div class="order-menu-item ${qty > 0 ? 'in-cart' : ''}">
            <div class="order-item-img">
                ${item.img
                    ? `<img src="${item.img}" alt="${item.name}" onerror="this.parentElement.innerHTML='<span style=font-size:1.6rem>${item.emoji}</span>'">`
                    : `<span style="font-size:1.6rem">${item.emoji}</span>`}
            </div>
            <div class="order-item-info">
                <div class="order-item-name">${item.name}</div>
                <div class="order-item-price">${item.price}</div>
            </div>
            <div class="order-item-qty">
                <button class="qty-btn minus" onclick="updateOrderQty('${item.name}', -1)">−</button>
                <span class="qty-val">${qty}</span>
                <button class="qty-btn plus" onclick="updateOrderQty('${item.name}', 1)">+</button>
            </div>
        </div>`;
    }).join('');
}

function updateOrderQty(name, delta) {
    const item = orderMenuAll.find(i => i.name === name);
    if (!item) return;
    if (!orderCart[name]) orderCart[name] = { item, qty: 0 };
    orderCart[name].qty += delta;
    if (orderCart[name].qty <= 0) delete orderCart[name];
    renderOrderMenu();
    renderOrderCart();
}

function renderOrderCart() {
    const cartEl = document.getElementById('order-cart');
    const cartItems = document.getElementById('order-cart-items');
    if (!cartEl || !cartItems) return;
    const entries = Object.values(orderCart);
    if (entries.length === 0) { cartEl.style.display = 'none'; return; }
    cartEl.style.display = 'block';
    cartItems.innerHTML = entries.map(e => `
        <div class="cart-item-row">
            <span class="cart-item-name">${e.item.emoji} ${e.item.name}</span>
            <span class="cart-item-qty">x${e.qty}</span>
            <span class="cart-item-sub">${(e.item.priceNum * e.qty).toLocaleString('vi-VN')} VNĐ</span>
        </div>
    `).join('') + `<div class="cart-total-row">
        <span>Tổng đồ uống/ăn:</span>
        <span class="cart-total-price">${getOrderTotal().toLocaleString('vi-VN')} VNĐ</span>
    </div>`;
}

function getOrderTotal() {
    return Object.values(orderCart).reduce((sum, e) => sum + e.item.priceNum * e.qty, 0);
}

function proceedBooking() {
    if (!selectedArea) {
        alert('⚠️ Vui lòng chọn khu vực ngồi!');
        return;
    }
    const timeInput = document.getElementById('booking-time');
    if (!timeInput.value) {
        alert('⚠️ Vui lòng chọn thời gian đến!');
        return;
    }

    const guests = document.getElementById('booking-guests').value;
    const note   = document.getElementById('booking-note').value;
    const areaObj = AREAS.find(a => a.id === selectedArea);
    const orderEntries = Object.values(orderCart);
    const tableBonus = bookingTables.length > 0 ? 50000 : 0;
    const drinkTotal = getOrderTotal();
    const grandTotal = drinkTotal + tableBonus;

    // Format time
    const dt = new Date(timeInput.value);
    const timeStr = dt.toLocaleString('vi-VN', { weekday:'long', year:'numeric', month:'long', day:'numeric', hour:'2-digit', minute:'2-digit' });

    currentBookingData = { guests, area: areaObj, time: timeStr, note, orderEntries, drinkTotal, tableBonus, grandTotal };

    // Build summary HTML
    let summaryHTML = `
    <div class="summary-section">
        <div class="summary-title"><i class="fas fa-info-circle"></i> Thông tin đặt bàn</div>
        <div class="summary-grid">
            <div class="summary-row"><span class="sum-label">👥 Số người</span><span class="sum-value">${guests} người</span></div>
            <div class="summary-row"><span class="sum-label">📍 Khu vực</span><span class="sum-value">${areaObj.icon} ${areaObj.label}</span></div>
            <div class="summary-row"><span class="sum-label">🕐 Thời gian</span><span class="sum-value">${timeStr}</span></div>
            ${note ? `<div class="summary-row"><span class="sum-label">📝 Ghi chú</span><span class="sum-value">${note}</span></div>` : ''}
        </div>
    </div>`;

    if (orderEntries.length) {
        summaryHTML += `<div class="summary-section">
            <div class="summary-title"><i class="fas fa-utensils"></i> Đồ uống / đồ ăn đã chọn</div>
            <div class="order-list-summary">
                ${orderEntries.map(e => `
                    <div class="order-sum-row">
                        <span>${e.item.emoji} ${e.item.name}</span>
                        <span>x${e.qty}</span>
                        <span>${(e.item.priceNum * e.qty).toLocaleString('vi-VN')} VNĐ</span>
                    </div>
                `).join('')}
            </div>
        </div>`;
    }

    document.getElementById('booking-summary').innerHTML = summaryHTML;

    // Total box
    let totalHTML = `<div class="total-breakdown">`;
    if (orderEntries.length) {
        totalHTML += `<div class="total-row"><span>🧋 Tổng đồ uống/ăn</span><span>${drinkTotal.toLocaleString('vi-VN')} VNĐ</span></div>`;
    } else {
        totalHTML += `<div class="total-row"><span>🧋 Đồ uống/ăn</span><span class="text-muted">Gọi tại quán</span></div>`;
    }
    if (tableBonus > 0) {
        totalHTML += `<div class="total-row surcharge"><span>🪑 Phụ phí thêm bàn</span><span>+ ${tableBonus.toLocaleString('vi-VN')} VNĐ</span></div>`;
    }
    totalHTML += `<div class="total-grand"><span>💰 TỔNG CỘNG</span><span class="grand-price">${grandTotal > 0 ? grandTotal.toLocaleString('vi-VN') + ' VNĐ' : 'Thanh toán tại quán'}</span></div>`;
    totalHTML += `</div>`;
    document.getElementById('booking-total-box').innerHTML = totalHTML;

    // Switch step
    document.getElementById('booking-step-1').style.display = 'none';
    document.getElementById('booking-step-2').style.display = 'block';
    document.querySelector('#modal-booking .modal-box').scrollTop = 0;
}

function backToBookingForm() {
    document.getElementById('booking-step-2').style.display = 'none';
    document.getElementById('booking-step-1').style.display = 'block';
}

function addAnotherTable() {
    if (!currentBookingData) return;
    bookingTables.push(currentBookingData);
    currentBookingData = null;

    // Reset form
    document.getElementById('booking-step-2').style.display = 'none';
    document.getElementById('booking-step-1').style.display = 'block';
    selectedArea = null;
    orderCart = {};
    document.querySelectorAll('.area-card').forEach(c => c.classList.remove('selected'));
    document.getElementById('booking-guests').value = 2;
    document.getElementById('booking-note').value = '';
    renderOrderMenu();
    renderOrderCart();

    const added = bookingTables.length;
    const notice = document.querySelector('.booking-notice span');
    if (notice) notice.innerHTML = `Đã thêm <strong>${added}</strong> bàn. Phụ phí mỗi bàn tiếp theo: <strong>50.000 VNĐ</strong>`;

    document.querySelector('#modal-booking .modal-box').scrollTop = 0;
    alert(`✅ Đã lưu bàn ${added}! Tiếp tục chọn thông tin bàn tiếp theo.`);
}

function confirmBooking() {
    if (!currentBookingData) return;
    bookingTables.push(currentBookingData);

    // Build final bill
    let billHTML = `
    <div class="bill-header">
        <div class="bill-logo">🌿 LAKE VIEW COFFEE</div>
        <div class="bill-sub">Ecopark, Văn Giang, Hưng Yên · 0987.888.8386</div>
        <div class="bill-divider"></div>
    </div>`;

    let grandAll = 0;

    bookingTables.forEach((t, idx) => {
        const isExtra = idx > 0;
        billHTML += `
        <div class="bill-table-block">
            <div class="bill-table-title">🪑 Bàn ${idx + 1}${isExtra ? ' <span class="surcharge-tag">+50k</span>' : ''}</div>
            <div class="bill-info-row"><i class="fas fa-users"></i> ${t.guests} người &nbsp;|&nbsp; ${t.area.icon} ${t.area.label}</div>
            <div class="bill-info-row"><i class="fas fa-clock"></i> ${t.time}</div>
            ${t.note ? `<div class="bill-info-row"><i class="fas fa-pen"></i> ${t.note}</div>` : ''}`;

        if (t.orderEntries.length) {
            billHTML += `<div class="bill-items">`;
            t.orderEntries.forEach(e => {
                billHTML += `<div class="bill-item-row">
                    <span>${e.item.emoji} ${e.item.name} x${e.qty}</span>
                    <span>${(e.item.priceNum * e.qty).toLocaleString('vi-VN')} VNĐ</span>
                </div>`;
            });
            billHTML += `</div>`;
        } else {
            billHTML += `<div class="bill-item-row"><span>🧋 Gọi đồ tại quán</span><span>—</span></div>`;
        }

        if (isExtra) {
            billHTML += `<div class="bill-item-row surcharge-row"><span>Phụ phí thêm bàn</span><span>50.000 VNĐ</span></div>`;
        }

        const tableTotal = t.grandTotal;
        grandAll += tableTotal;
        billHTML += `<div class="bill-table-sub">Bàn ${idx+1}: ${tableTotal > 0 ? tableTotal.toLocaleString('vi-VN') + ' VNĐ' : 'Thanh toán tại quán'}</div>`;
        billHTML += `</div>`;
    });

    billHTML += `
    <div class="bill-divider"></div>
    <div class="bill-grand">
        <span>TỔNG THANH TOÁN</span>
        <span class="bill-grand-price">${grandAll > 0 ? grandAll.toLocaleString('vi-VN') + ' VNĐ' : 'Thanh toán tại quán'}</span>
    </div>
    <div class="bill-footer">
        <p>📞 Liên hệ nếu cần điều chỉnh: <strong>0987.888.8386</strong></p>
        <p>Chúng tôi sẽ chuẩn bị không gian tốt nhất cho bạn! 🌿</p>
    </div>`;

    document.getElementById('final-bill').innerHTML = billHTML;

    document.getElementById('booking-step-2').style.display = 'none';
    document.getElementById('booking-step-3').style.display = 'block';
    document.querySelector('#modal-booking .modal-box').scrollTop = 0;
}

function resetBooking() {
    bookingTables = [];
    currentBookingData = null;
    selectedArea = null;
    orderCart = {};
    document.getElementById('booking-step-1').style.display = 'block';
    document.getElementById('booking-step-2').style.display = 'none';
    document.getElementById('booking-step-3').style.display = 'none';
    document.getElementById('booking-guests').value = 2;
    document.getElementById('booking-note').value = '';
    document.querySelectorAll('.area-card').forEach(c => c.classList.remove('selected'));
    renderOrderMenu();
    renderOrderCart();
}

/* ═══════════════════════════════════════════
   9. GIỎ HÀNG MINI (LAKE VIEW CART)
═══════════════════════════════════════════ */
let miniCart = {}; // { name: { name, priceNum, img, emoji, qty } }
let cartToastTimeout = null;

function loadMiniCart() {
    try {
        const saved = localStorage.getItem('lv_mini_cart');
        if (saved) miniCart = JSON.parse(saved) || {};
    } catch (e) { miniCart = {}; }
}

function saveMiniCart() {
    try { localStorage.setItem('lv_mini_cart', JSON.stringify(miniCart)); } catch (e) {}
}

function parseAnyPrice(str) {
    return parseInt(String(str).replace(/[^\d]/g, ''), 10) || 0;
}

function findMenuEmoji(name) {
    const found = (typeof orderMenuAll !== 'undefined') ? orderMenuAll.find(i => i.name === name) : null;
    return found ? found.emoji : '🥤';
}

function addToMiniCart(name, priceDisplay, img, emoji) {
    const priceNum = parseAnyPrice(priceDisplay);
    if (!miniCart[name]) {
        miniCart[name] = { name, priceNum, img: img || '', emoji: emoji || findMenuEmoji(name), qty: 0 };
    }
    miniCart[name].qty += 1;
    saveMiniCart();
    renderMiniCart();
    showCartToast(`Đã thêm <strong>${name}</strong> vào giỏ hàng!`);
    openMiniCart();
}

function changeMiniCartQty(name, delta) {
    if (!miniCart[name]) return;
    miniCart[name].qty += delta;
    if (miniCart[name].qty <= 0) delete miniCart[name];
    saveMiniCart();
    renderMiniCart();
}

function removeMiniCartItem(name) {
    delete miniCart[name];
    saveMiniCart();
    renderMiniCart();
}

function clearMiniCart() {
    if (Object.keys(miniCart).length === 0) return;
    if (!confirm('Xoá toàn bộ giỏ hàng?')) return;
    miniCart = {};
    saveMiniCart();
    renderMiniCart();
}

function getMiniCartCount() {
    return Object.values(miniCart).reduce((sum, e) => sum + e.qty, 0);
}

function getMiniCartTotal() {
    return Object.values(miniCart).reduce((sum, e) => sum + e.priceNum * e.qty, 0);
}

function escAttr(str) {
    return String(str).replace(/'/g, "\\'");
}

function renderMiniCart() {
    const badge = document.getElementById('lv-cart-badge');
    const count = getMiniCartCount();
    if (badge) {
        badge.textContent = count;
        badge.classList.toggle('hide', count === 0);
    }

    const itemsEl  = document.getElementById('lv-cart-items');
    const footerEl = document.getElementById('lv-cart-footer');
    if (!itemsEl) return;

    const entries = Object.values(miniCart);
    if (entries.length === 0) {
        itemsEl.innerHTML = `
            <div class="lv-cart-empty">
                <i class="fas fa-shopping-basket"></i>
                <p>Giỏ hàng đang trống</p>
                <p style="font-size:.85rem;">Hãy chọn vài món ngon nhé! 🌿</p>
            </div>`;
        if (footerEl) footerEl.style.display = 'none';
        return;
    }

    itemsEl.innerHTML = entries.map(e => `
        <div class="lv-cart-row">
            <div class="lv-cart-row-img">
                ${e.img
                    ? `<img src="${e.img}" alt="${e.name}" onerror="this.parentElement.innerHTML='${e.emoji}'">`
                    : e.emoji}
            </div>
            <div class="lv-cart-row-info">
                <div class="lv-cart-row-name">${e.name}</div>
                <div class="lv-cart-row-price">${(e.priceNum * e.qty).toLocaleString('vi-VN')} VNĐ</div>
            </div>
            <div class="lv-cart-qty">
                <button onclick="changeMiniCartQty('${escAttr(e.name)}', -1)">−</button>
                <span>${e.qty}</span>
                <button onclick="changeMiniCartQty('${escAttr(e.name)}', 1)">+</button>
            </div>
            <button class="lv-cart-remove" onclick="removeMiniCartItem('${escAttr(e.name)}')" title="Xoá món">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    `).join('');

    if (footerEl) {
        footerEl.style.display = 'block';
        document.getElementById('lv-cart-total').textContent =
            getMiniCartTotal().toLocaleString('vi-VN') + ' VNĐ';
    }
}

function toggleMiniCart() {
    const panel = document.getElementById('lv-cart-panel');
    if (panel && panel.classList.contains('open')) closeMiniCart();
    else openMiniCart();
}

function openMiniCart() {
    document.getElementById('lv-cart-panel')?.classList.add('open');
    document.getElementById('lv-cart-overlay')?.classList.add('open');
}

function closeMiniCart() {
    document.getElementById('lv-cart-panel')?.classList.remove('open');
    document.getElementById('lv-cart-overlay')?.classList.remove('open');
}

function showCartToast(msgHTML) {
    const t = document.getElementById('lv-cart-toast');
    if (!t) return;
    t.innerHTML = `<i class="fas fa-check-circle"></i> ${msgHTML}`;
    t.classList.add('show');
    clearTimeout(cartToastTimeout);
    cartToastTimeout = setTimeout(() => t.classList.remove('show'), 2200);
}

// Chuyển toàn bộ giỏ hàng mini sang giỏ đặt bàn (booking) để thanh toán/giao món
function proceedCartToBooking() {
    const entries = Object.values(miniCart);
    if (!entries.length) {
        showCartToast('Giỏ hàng đang trống!');
        return;
    }
    entries.forEach(e => {
        const menuItem = (typeof orderMenuAll !== 'undefined') ? orderMenuAll.find(i => i.name === e.name) : null;
        const item = menuItem || {
            name: e.name,
            price: e.priceNum.toLocaleString('vi-VN') + ' VNĐ',
            priceNum: e.priceNum,
            img: e.img,
            emoji: e.emoji,
            cat: 'khac',
            type: 'drink'
        };
        orderCart[e.name] = { item, qty: e.qty };
    });
    closeMiniCart();
    openModal('modal-booking');
    if (typeof renderOrderMenu === 'function') renderOrderMenu();
    if (typeof renderOrderCart === 'function') renderOrderCart();
}

// Đóng giỏ hàng khi nhấn Escape (dùng chung với modal)
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeMiniCart();
});

/* ═══ INIT ═══ */
window.addEventListener('load', function() {
    loadMiniCart();
    renderMiniCart();
    renderProducts(currentPage);
    renderCatGrid(drinkData, 'drink-grid');
    renderCatGrid(foodData, 'food-grid');
    initBookingUI();
});