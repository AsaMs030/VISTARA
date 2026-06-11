// ============================================
// VISTARA Main Application Logic
// ============================================

// ============================================
// Global Variables
// ============================================

let tilesData = [];
let colorsData = [];
let currentPage = 'home';
let selectedTile = null;
let selectedColor = null;

// ============================================
// Initialize App
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    loadTilesData();
    loadColorsData();
    updatePageTranslations();
}

// ============================================
// Event Listeners
// ============================================

function setupEventListeners() {
    // Sidebar Menu
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }

    // Navigation Buttons
    const tilesBtn = document.getElementById('tilesBtn');
    const colorsBtn = document.getElementById('colorsBtn');
    const designBtn = document.getElementById('designBtn');

    if (tilesBtn) tilesBtn.addEventListener('click', () => showPage('tiles'));
    if (colorsBtn) colorsBtn.addEventListener('click', () => showPage('colors'));
    if (designBtn) designBtn.addEventListener('click', () => showPage('design'));

    // Hero Buttons
    const heroBTiles = document.getElementById('heroBtiles');
    const heroBColors = document.getElementById('heroBcolors');
    const heroBDesign = document.getElementById('heroBdesign');

    if (heroBTiles) heroBTiles.addEventListener('click', () => showPage('tiles'));
    if (heroBColors) heroBColors.addEventListener('click', () => showPage('colors'));
    if (heroBDesign) heroBDesign.addEventListener('click', () => showPage('design'));

    // Sidebar Links
    const homeLink = document.getElementById('homeLink');
    const tilesLink = document.getElementById('tilesLink');
    const colorsLink = document.getElementById('colorsLink');
    const designCornerLink = document.getElementById('designCornerLink');
    const favoritesLink = document.getElementById('favoritesLink');
    const myDesignLink = document.getElementById('myDesignLink');

    if (homeLink) homeLink.addEventListener('click', (e) => { e.preventDefault(); showPage('home'); closeSidebar(); });
    if (tilesLink) tilesLink.addEventListener('click', (e) => { e.preventDefault(); showPage('tiles'); closeSidebar(); });
    if (colorsLink) colorsLink.addEventListener('click', (e) => { e.preventDefault(); showPage('colors'); closeSidebar(); });
    if (designCornerLink) designCornerLink.addEventListener('click', (e) => { e.preventDefault(); showPage('design'); closeSidebar(); });
    if (favoritesLink) favoritesLink.addEventListener('click', (e) => { e.preventDefault(); showPage('favorites'); closeSidebar(); });
    if (myDesignLink) myDesignLink.addEventListener('click', (e) => { e.preventDefault(); showPage('myDesigns'); closeSidebar(); });

    // Profile Button
    const profileBtn = document.getElementById('profileBtn');
    if (profileBtn) {
        profileBtn.addEventListener('click', openProfileModal);
    }

    // Language Select
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function(e) {
            setLanguage(e.target.value);
        });
    }
}

// ============================================
// Page Navigation
// ============================================

function showPage(page) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');

    const homeSection = document.getElementById('homeSection');
    if (homeSection) homeSection.style.display = 'none';

    // Show selected page
    currentPage = page;

    switch(page) {
        case 'home':
            if (homeSection) homeSection.style.display = 'block';
            break;
        case 'tiles':
            document.getElementById('tilesPage').style.display = 'block';
            displayTiles();
            break;
        case 'colors':
            document.getElementById('colorsPage').style.display = 'block';
            displayColors();
            break;
        case 'design':
            document.getElementById('designPage').style.display = 'block';
            initializeDesignPage();
            break;
        case 'favorites':
            showFavoritesPage();
            break;
        case 'myDesigns':
            showMyDesignsPage();
            break;
    }

    // Close sidebar
    closeSidebar();
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.remove('active');
    }
}

// ============================================
// Tiles Management
// ============================================

function loadTilesData() {
    // Sample tiles data - Replace with Firebase data later
    tilesData = [
        {
            id: 1,
            name: t('tiles'),
            type: 'Ceramic',
            size: '30x30',
            color: 'White',
            price: '$15-20',
            description: 'بلاط سيراميك عالي الجودة مناسب للمطابخ والحمامات',
            advantages: ['سهل التنظيف', 'مقاوم للرطوبة', 'تصميم حديث'],
            disadvantages: ['قد ينزلق عندما يكون مبللاً', 'سعر مرتفع قليلاً'],
            bestFor: ['bathroom', 'kitchen', 'livingRoom'],
            image: 'https://via.placeholder.com/300'
        },
        {
            id: 2,
            name: 'Porcelain',
            type: 'Porcelain',
            size: '60x60',
            color: 'Beige',
            price: '$20-25',
            description: 'بلاط بورسلين متينة ومقاومة للخدوش',
            advantages: ['متينة جداً', 'مقاومة للخدوش', 'سهلة التنظيف'],
            disadvantages: ['ثقيلة', 'سعر مرتفع'],
            bestFor: ['bathroom', 'kitchen', 'hallway'],
            image: 'https://via.placeholder.com/300'
        },
        {
            id: 3,
            name: 'Stone',
            type: 'Natural Stone',
            size: '60x120',
            color: 'Gray',
            price: '$25-35',
            description: 'بلاط حجر طبيعي فاخر وأنيق',
            advantages: ['مظهر فاخر', 'متينة', 'فريدة من نوعها'],
            disadvantages: ['يتطلب صيانة منتظمة', 'سعر جداً مرتفع', 'تمتص الماء'],
            bestFor: ['livingRoom', 'bedroom', 'hallway'],
            image: 'https://via.placeholder.com/300'
        }
    ];

    console.log('Tiles data loaded:', tilesData);
}

function displayTiles() {
    const tileList = document.getElementById('tileList');
    if (!tileList) return;

    tileList.innerHTML = '';

    tilesData.forEach(tile => {
        const tileCard = document.createElement('div');
        tileCard.className = 'tile-card';
        tileCard.innerHTML = `
            <div class="tile-image">
                <img src="${tile.image}" alt="${tile.name}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="tile-info">
                <h4>${tile.name}</h4>
                <p>${tile.description}</p>
                <p><strong>${t('type')}:</strong> ${tile.type}</p>
                <p><strong>${t('color')}:</strong> ${tile.color}</p>
                <p><strong>${t('price')}:</strong> ${tile.price}</p>
                <button class="discover-btn" data-i18n="discoverMore" onclick="openTileModal(${tile.id})">اكتشف المزيد</button>
            </div>
        `;
        tileList.appendChild(tileCard);
    });

    updatePageTranslations();
}

function openTileModal(tileId) {
    const tile = tilesData.find(t => t.id === tileId);
    if (!tile) return;

    selectedTile = tile;

    // Update modal content
    document.getElementById('tileName').textContent = tile.name;
    document.getElementById('tileDescription').textContent = tile.description;
    document.getElementById('tileType').textContent = tile.type;
    document.getElementById('tileSize').textContent = tile.size;
    document.getElementById('tileColor').textContent = tile.color;
    document.getElementById('tilePrice').textContent = tile.price;

    // Update advantages
    const advantagesList = document.getElementById('tileAdvantages');
    advantagesList.innerHTML = '';
    tile.advantages.forEach(adv => {
        const li = document.createElement('li');
        li.textContent = adv;
        advantagesList.appendChild(li);
    });

    // Update disadvantages
    const disadvantagesList = document.getElementById('tileDisadvantages');
    disadvantagesList.innerHTML = '';
    tile.disadvantages.forEach(dis => {
        const li = document.createElement('li');
        li.textContent = dis;
        disadvantagesList.appendChild(li);
    });

    // Update best for
    const bestForDiv = document.getElementById('bestFor');
    bestForDiv.innerHTML = '';
    tile.bestFor.forEach(room => {
        const badge = document.createElement('span');
        badge.className = 'best-for-badge';
        badge.textContent = t(room);
        bestForDiv.appendChild(badge);
    });

    // Show modal
    document.getElementById('tileModal').style.display = 'block';
    updatePageTranslations();
}

function closeTileModal() {
    document.getElementById('tileModal').style.display = 'none';
}

function updateTileSize() {
    const sizeSelect = document.getElementById('sizeSelect');
    if (selectedTile && sizeSelect) {
        selectedTile.size = sizeSelect.value;
        document.getElementById('tileSize').textContent = sizeSelect.value;
    }
}

// ============================================
// Colors Management
// ============================================

function loadColorsData() {
    colorsData = [
        { id: 1, name: 'White', code: '#FFFFFF', hex: '#FFFFFF' },
        { id: 2, name: 'Black', code: '#000000', hex: '#000000' },
        { id: 3, name: 'Red', code: '#FF0000', hex: '#FF0000' },
        { id: 4, name: 'Blue', code: '#0000FF', hex: '#0000FF' },
        { id: 5, name: 'Green', code: '#008000', hex: '#008000' },
        { id: 6, name: 'Yellow', code: '#FFFF00', hex: '#FFFF00' },
        { id: 7, name: 'Orange', code: '#FFA500', hex: '#FFA500' },
        { id: 8, name: 'Purple', code: '#800080', hex: '#800080' },
        { id: 9, name: 'Pink', code: '#FFC0CB', hex: '#FFC0CB' },
        { id: 10, name: 'Brown', code: '#A52A2A', hex: '#A52A2A' },
        { id: 11, name: 'Gray', code: '#808080', hex: '#808080' },
        { id: 12, name: 'Cyan', code: '#00FFFF', hex: '#00FFFF' }
    ];

    console.log('Colors data loaded:', colorsData);
}

function displayColors() {
    const colorsGrid = document.getElementById('colorsGrid');
    if (!colorsGrid) return;

    colorsGrid.innerHTML = '';

    colorsData.forEach(color => {
        const colorCard = document.createElement('div');
        colorCard.className = 'color-card';
        colorCard.innerHTML = `
            <div class="color-sample" style="background-color: ${color.hex};"></div>
            <div class="color-info">
                <div class="color-name">${color.name}</div>
                <div class="color-code">${color.code}</div>
                <button class="add-color-btn" onclick="mixColorWithThis('${color.hex}')">+</button>
            </div>
        `;
        colorsGrid.appendChild(colorCard);
    });

    updatePageTranslations();
}

function mixColorWithThis(colorHex) {
    console.log('Mix color:', colorHex);
    // TODO: Implement color mixing functionality
    alert(t('mixColors') + ': ' + colorHex);
}

// ============================================
// Design Your Corner Page
// ============================================

function initializeDesignPage() {
    // Populate color selector
    const colorSelect = document.getElementById('designColorSelect');
    if (colorSelect) {
        colorSelect.innerHTML = '<option value="">Select a color...</option>';
        colorsData.forEach(color => {
            const option = document.createElement('option');
            option.value = color.hex;
            option.textContent = color.name;
            colorSelect.appendChild(option);
        });
    }

    // Populate tile selector
    const tileSelect = document.getElementById('designTileSelect');
    if (tileSelect) {
        tileSelect.innerHTML = '<option value="">Select a tile...</option>';
        tilesData.forEach(tile => {
            const option = document.createElement('option');
            option.value = tile.id;
            option.textContent = tile.name;
            tileSelect.appendChild(option);
        });
    }

    // Handle corner upload
    const cornerUpload = document.getElementById('cornerUpload');
    if (cornerUpload) {
        cornerUpload.addEventListener('change', handleCornerUpload);
    }

    updatePageTranslations();
}

function handleCornerUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        const preview = document.getElementById('cornerPreview');
        preview.innerHTML = `<img src="${event.target.result}" alt="Corner Preview">`;
    };
    reader.readAsDataURL(file);
}

function designCorner() {
    const colorSelect = document.getElementById('designColorSelect');
    const tileSelect = document.getElementById('designTileSelect');
    const cornerUpload = document.getElementById('cornerUpload');

    if (!colorSelect.value || !tileSelect.value || !cornerUpload.files[0]) {
        alert('Please select color, tile, and upload corner image');
        return;
    }

    // TODO: Implement AR/preview functionality
    const result = document.getElementById('designResult');
    result.innerHTML = '<p>Design preview coming soon...</p>';
}

// ============================================
// Favorites
// ============================================

async function showFavoritesPage() {
    const user = getCurrentUser();
    if (!user) {
        alert(t('login'));
        openProfileModal();
        return;
    }

    try {
        const favorites = await getFavorites(user.uid);
        // TODO: Display favorites
        console.log('Favorites:', favorites);
    } catch (error) {
        console.error('Error loading favorites:', error);
    }
}

// ============================================
// My Designs
// ============================================

async function showMyDesignsPage() {
    const user = getCurrentUser();
    if (!user) {
        alert(t('login'));
        openProfileModal();
        return;
    }

    try {
        const designs = await getDesigns(user.uid);
        // TODO: Display designs
        console.log('Designs:', designs);
    } catch (error) {
        console.error('Error loading designs:', error);
    }
}

// ============================================
// Profile Modal
// ============================================

function openProfileModal() {
    const modal = document.getElementById('profileModal');
    const authContent = document.getElementById('authContent');
    const user = getCurrentUser();

    if (user) {
        // User is logged in
        authContent.innerHTML = `
            <h3>${t('profile')}</h3>
            <p>${t('email')}: ${user.email}</p>
            <button onclick="logout()" class="profile-btn" data-i18n="logout">تسجيل الخروج</button>
        `;
    } else {
        // User is not logged in
        authContent.innerHTML = `
            <h3>${t('login')}</h3>
            <div style="margin-bottom: 15px;">
                <input type="email" id="loginEmail" placeholder="${t('email')}" style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 5px;">
                <input type="password" id="loginPassword" placeholder="${t('password')}" style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 5px;">
                <button onclick="handleLogin()" class="profile-btn" data-i18n="login">تسجيل الدخول</button>
                <button onclick="toggleToSignUp()" style="width: 100%; background: #f0f0f0; color: #333; border: 1px solid #ddd; padding: 10px; margin-top: 10px; border-radius: 5px; cursor: pointer;" data-i18n="register">إنشاء حساب</button>
            </div>
        `;
    }

    updatePageTranslations();
    modal.style.display = 'block';
}

function closeProfileModal() {
    document.getElementById('profileModal').style.display = 'none';
}

function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        alert('Please enter email and password');
        return;
    }

    login(email, password)
        .then(() => {
            closeProfileModal();
            openProfileModal();
        })
        .catch(error => {
            alert('Login failed: ' + error.message);
        });
}

function toggleToSignUp() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        alert('Please enter email and password');
        return;
    }

    signUp(email, password)
        .then(() => {
            closeProfileModal();
            openProfileModal();
        })
        .catch(error => {
            alert('Sign up failed: ' + error.message);
        });
}

async function handleLogout() {
    try {
        await logout();
        openProfileModal();
    } catch (error) {
        console.error('Logout error:', error);
    }
}

// ============================================
// Utility Functions
// ============================================

// Close modals when clicking outside
window.onclick = function(event) {
    const tileModal = document.getElementById('tileModal');
    const profileModal = document.getElementById('profileModal');

    if (event.target === tileModal) {
        tileModal.style.display = 'none';
    }
    if (event.target === profileModal) {
        profileModal.style.display = 'none';
    }
}

console.log('App initialized successfully!');
