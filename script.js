const STORAGE_KEY = 'canon-sync-gallery-v3';
const IMPORT_HISTORY_KEY = 'canon-sync-imports-v3';

const seedPhotos = [];

const popularCameras = [
    { name: 'Canon EOS R5', type: 'Mirrorless Profissional', sensor: 'Full-Frame 45.0MP', mount: 'RF' },
    { name: 'Canon EOS R6 Mark II', type: 'Mirrorless Híbrida', sensor: 'Full-Frame 24.2MP', mount: 'RF' },
    { name: 'Canon EOS R7', type: 'Mirrorless APS-C', sensor: 'APS-C 32.5MP', mount: 'RF' },
    { name: 'Canon EOS R8', type: 'Mirrorless de Entrada', sensor: 'Full-Frame 24.2MP', mount: 'RF' },
    { name: 'Canon EOS 5D Mark IV', type: 'DSLR Clássica', sensor: 'Full-Frame 30.4MP', mount: 'EF' },
    { name: 'Canon EOS 90D', type: 'DSLR Avançada', sensor: 'APS-C 32.5MP', mount: 'EF' }
];

const state = {
    photos: [],
    importHistory: [],
    currentTab: 'library',
    currentFilter: 'all',
    detailList: [],
    detailIndex: 0
};

const views = {
    library: document.getElementById('view-library'),
    favorites: document.getElementById('view-favorites'),
    cameras: document.getElementById('view-cameras'),
    import: document.getElementById('view-import')
};

const libraryGroups = document.getElementById('library-groups');
const libraryEmpty = document.getElementById('library-empty');
const favoritesGrid = document.getElementById('favorites-grid');
const favoritesEmpty = document.getElementById('favorites-empty');
const importHistory = document.getElementById('import-history');
const toast = document.getElementById('toast');
const detailView = document.getElementById('view-detail');
const bottomNav = document.getElementById('bottom-nav');
const mainHeader = document.getElementById('main-header');
const exifPanel = document.getElementById('exif-panel');

function loadState() {
    try {
        const savedPhotos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        const savedHistory = JSON.parse(localStorage.getItem(IMPORT_HISTORY_KEY) || '[]');
        state.photos = savedPhotos;
        state.importHistory = savedHistory;
    } catch {
        state.photos = [];
        state.importHistory = [];
    }
}

function savePhotos() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.photos));
}

function saveImportHistory() {
    localStorage.setItem(IMPORT_HISTORY_KEY, JSON.stringify(state.importHistory.slice(0, 12)));
}

function formatLongDate(dateString) {
    return new Date(`${dateString}T12:00:00`).toLocaleDateString('pt-BR', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}

function formatShortDate(dateString) {
    return new Date(`${dateString}T12:00:00`).toLocaleDateString('pt-BR', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    }).toUpperCase();
}

function groupByDate(photos) {
    return photos.reduce((acc, photo) => {
        acc[photo.date] = acc[photo.date] || [];
        acc[photo.date].push(photo);
        return acc;
    }, {});
}

function getFilteredPhotos() {
    const sorted = [...state.photos].sort((a, b) => new Date(b.date) - new Date(a.date));

    switch (state.currentFilter) {
        case 'raw': return sorted.filter(p => p.type === 'RAW');
        case 'jpg': return sorted.filter(p => p.type === 'JPG');
        case 'favorites': return sorted.filter(p => p.favorite);
        default: return sorted;
    }
}

function renderLibrary() {
    const filteredPhotos = getFilteredPhotos();
    const groups = groupByDate(filteredPhotos);
    const orderedDates = Object.keys(groups).sort((a, b) => new Date(b) - new Date(a));

    libraryGroups.innerHTML = '';

    if (!filteredPhotos.length) {
        libraryEmpty.classList.remove('hidden');
        return;
    }

    libraryEmpty.classList.add('hidden');

    orderedDates.forEach(date => {
        const photos = groups[date];
        const section = document.createElement('section');
        section.innerHTML = `
            <div class="flex items-center gap-4 mb-4">
                <h2 class="font-headline text-base md:text-lg font-bold text-on-surface capitalize">${formatLongDate(date)}</h2>
                <div class="h-px flex-grow bg-outline-variant opacity-20"></div>
                <span class="font-label text-[10px] md:text-xs text-on-surface-variant">${photos.length} item(s)</span>
            </div>
            <div class="library-grid"></div>
        `;

        const grid = section.querySelector('.library-grid');
        photos.forEach(photo => grid.appendChild(createPhotoCard(photo, filteredPhotos)));
        libraryGroups.appendChild(section);
    });
}

function createPhotoCard(photo, currentList) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'photo-card aspect-square text-left';
    card.innerHTML = `
        <img src="${photo.src}" alt="${escapeHtml(photo.name)}" loading="lazy" />
        <div class="photo-overlay flex flex-col justify-between p-2 md:p-3">
            <div class="self-end bg-black/40 backdrop-blur-md px-1.5 md:px-2 py-0.5 md:py-1 rounded text-[8px] md:text-[10px] font-bold tracking-tighter uppercase text-white">${photo.type}</div>
            <div class="flex justify-between items-end gap-2 w-full">
                <div class="overflow-hidden">
                    <div class="text-[8px] md:text-[10px] font-bold text-white uppercase tracking-widest">${formatShortDate(photo.date)}</div>
                    <div class="text-[10px] md:text-xs text-white/80 truncate w-full">${escapeHtml(photo.label || photo.name)}</div>
                </div>
                <button type="button" class="favorite-toggle flex items-center justify-center text-white ${photo.favorite ? 'favorited' : ''} p-1" aria-label="Favoritar">
                    <span class="material-symbols-outlined text-lg md:text-xl ${photo.favorite ? 'filled-icon text-primary-container' : ''}">favorite</span>
                </button>
            </div>
        </div>
    `;

    card.addEventListener('click', event => {
        if (event.target.closest('.favorite-toggle')) return;
        openDetailFromList(currentList, photo.id);
    });

    card.querySelector('.favorite-toggle').addEventListener('click', event => {
        event.stopPropagation();
        toggleFavorite(photo.id);
    });

    return card;
}

function renderFavorites() {
    const favorites = state.photos.filter(p => p.favorite).sort((a, b) => new Date(b.date) - new Date(a.date));
    favoritesGrid.innerHTML = '';

    if (!favorites.length) {
        favoritesEmpty.classList.remove('hidden');
        favoritesGrid.classList.add('hidden');
        return;
    }

    favoritesEmpty.classList.add('hidden');
    favoritesGrid.classList.remove('hidden');

    favorites.forEach(photo => {
        const item = document.createElement('button');
        item.type = 'button';
        // Col-span-1 garante 2 por linha no celular (pois o grid tem 2 colunas)
        item.className = `col-span-1 md:col-span-4 aspect-square group relative bg-surface-container overflow-hidden rounded-sm cursor-pointer text-left`;
        item.innerHTML = `
            <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="${photo.src}" alt="${escapeHtml(photo.name)}" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-2 right-2 md:top-4 md:right-4">
                <button type="button" class="favorite-toggle text-primary-container p-1">
                    <span class="material-symbols-outlined filled-icon text-xl md:text-2xl">favorite</span>
                </button>
            </div>
        `;

        item.addEventListener('click', event => {
            if (event.target.closest('.favorite-toggle')) return;
            openDetailFromList(favorites, photo.id);
        });

        item.querySelector('.favorite-toggle').addEventListener('click', event => {
            event.stopPropagation();
            toggleFavorite(photo.id);
        });

        favoritesGrid.appendChild(item);
    });
}

function renderCameras() {
    const grid = document.getElementById('cameras-grid');
    if (!grid) return;
    grid.innerHTML = popularCameras.map(cam => `
        <div class="bg-surface-container p-5 md:p-6 rounded-lg border border-outline-variant/20 hover:border-primary-container transition-colors duration-300">
            <div class="flex items-center justify-between mb-3 md:mb-4">
                <span class="material-symbols-outlined text-3xl md:text-4xl text-surface-variant">photo_camera</span>
                <span class="inline-block bg-surface-container-high px-2 py-1 rounded text-[9px] md:text-[10px] font-label uppercase tracking-widest text-primary">Montagem ${cam.mount}</span>
            </div>
            <h3 class="font-headline text-lg md:text-xl font-bold mb-1">${cam.name}</h3>
            <p class="text-xs md:text-sm text-on-surface-variant mb-1 md:mb-2">${cam.type}</p>
            <p class="text-[10px] md:text-xs font-mono text-on-surface/60">${cam.sensor}</p>
        </div>
    `).join('');
}

function renderImportHistory() {
    const history = [...state.importHistory].slice(0, 6);
    importHistory.innerHTML = '';

    if (!history.length) {
        importHistory.innerHTML = `
            <div class="col-span-1 sm:col-span-2 md:col-span-3 bg-surface-container p-6 md:p-8 text-center border border-outline-variant/10 rounded-lg">
                <span class="material-symbols-outlined text-4xl md:text-5xl text-surface-variant mb-3">history</span>
                <p class="font-headline text-lg md:text-xl font-bold mb-1">Sem importações</p>
                <p class="text-xs md:text-sm text-on-surface-variant">Suas importações aparecerão aqui.</p>
            </div>
        `;
        return;
    }

    history.forEach(entry => {
        const card = document.createElement('div');
        card.className = 'bg-surface-container p-5 md:p-6 flex flex-col justify-between h-32 md:h-40 rounded-lg hover:bg-surface-container-high transition-colors group';
        card.innerHTML = `
            <div class="flex justify-between items-start gap-3">
                <span class="font-label text-[9px] md:text-[10px] text-on-surface-variant uppercase">${formatShortDate(entry.date)}</span>
                <span class="material-symbols-outlined text-primary-container filled-icon text-lg md:text-xl">verified</span>
            </div>
            <div>
                <p class="font-headline text-xl md:text-2xl font-black mb-1">${entry.count} <span class="text-[10px] md:text-xs font-normal text-on-surface-variant">${entry.type}</span></p>
            </div>
        `;
        importHistory.appendChild(card);
    });
}

function switchTab(target) {
    state.currentTab = target;
    Object.entries(views).forEach(([key, view]) => {
        if (view) view.classList.toggle('active', key === target);
    });

    document.querySelectorAll('.nav-tab').forEach(tab => {
        const isActive = tab.dataset.tab === target;
        tab.classList.toggle('text-primary-container', isActive);
        tab.classList.toggle('text-on-surface-variant', !isActive);
        const icon = tab.querySelector('.material-symbols-outlined');
        if(icon) icon.classList.toggle('filled-icon', isActive);
    });
}

function setFilter(filter) {
    state.currentFilter = filter;
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.toggle('active-chip', chip.dataset.filter === filter);
    });
    renderLibrary();
}

function toggleFavorite(photoId) {
    const photo = state.photos.find(item => item.id === photoId);
    if (!photo) return;
    photo.favorite = !photo.favorite;
    savePhotos();
    renderAll();

    if (!detailView.classList.contains('hidden')) {
        const currentPhoto = state.detailList[state.detailIndex];
        if (currentPhoto && currentPhoto.id === photoId) {
            state.detailList[state.detailIndex] = { ...currentPhoto, favorite: photo.favorite };
            updateDetailFavoriteUI(photo.favorite);
        }
    }
}

function addImportHistory(files) {
    if (!files.length) return;
    const rawCount = files.filter(f => getFileType(f.name) === 'RAW').length;
    const jpgCount = files.length - rawCount;
    state.importHistory.unshift({
        date: new Date().toISOString().slice(0, 10),
        count: files.length,
        type: rawCount >= jpgCount ? 'ARQUIVOS' : 'JPG',
        status: 'verified'
    });
    state.importHistory = state.importHistory.slice(0, 12);
    saveImportHistory();
}

async function handleUpload(event) {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;

    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    const newPhotos = [];

    for (const file of imageFiles) {
        const src = await fileToDataUrl(file);
        const date = new Date(file.lastModified || Date.now());
        newPhotos.unshift({
            id: `upload-${Date.now()}-${Math.random().toString(16).slice(2)}`,
            name: file.name,
            src,
            date: date.toISOString().slice(0, 10),
            type: getFileType(file.name),
            favorite: false,
            uploaded: true,
            label: file.name.replace(/\.[^.]+$/, '')
        });
    }

    state.photos = [...newPhotos, ...state.photos];
    addImportHistory(imageFiles);
    savePhotos();
    renderAll();
    switchTab('library');
    showToast(`${imageFiles.length} foto(s) importada(s)`);
    event.target.value = '';
}

function openDetailFromList(list, photoId) {
    const safeList = list.length ? list : getFilteredPhotos();
    const index = safeList.findIndex(item => item.id === photoId);
    if (index === -1) return;

    state.detailList = safeList;
    state.detailIndex = index;
    renderDetail();

    detailView.classList.remove('hidden');
    detailView.classList.add('flex');
    bottomNav.classList.add('translate-y-full');
    mainHeader.classList.add('-translate-y-full');
    document.body.classList.add('overflow-hidden');
}

function renderDetail() {
    const photo = state.detailList[state.detailIndex];
    if (!photo) return;

    document.getElementById('detail-image').src = photo.src;
    document.getElementById('detail-filename').textContent = photo.name;
    document.getElementById('exif-name').textContent = photo.name;
    document.getElementById('exif-date').textContent = formatLongDate(photo.date);

    updateDetailFavoriteUI(photo.favorite);
    document.getElementById('detail-prev').disabled = state.detailIndex === 0;
    document.getElementById('detail-next').disabled = state.detailIndex === state.detailList.length - 1;
}

function updateDetailFavoriteUI(isFavorite) {
    const icon = document.getElementById('detail-favorite-rail-icon');
    icon.classList.toggle('filled-icon', isFavorite);
    icon.classList.toggle('text-primary-container', isFavorite);
}

function closeDetail() {
    detailView.classList.add('hidden');
    detailView.classList.remove('flex');
    bottomNav.classList.remove('translate-y-full');
    mainHeader.classList.remove('-translate-y-full');
    exifPanel.classList.add('translate-x-full');
    document.body.classList.remove('overflow-hidden');
}

function toggleExif() {
    exifPanel.classList.toggle('translate-x-full');
}

function showNextPhoto() {
    if (state.detailIndex >= state.detailList.length - 1) return;
    state.detailIndex += 1;
    renderDetail();
}

function showPrevPhoto() {
    if (state.detailIndex <= 0) return;
    state.detailIndex -= 1;
    renderDetail();
}

function deleteCurrentPhoto() {
    const current = state.detailList[state.detailIndex];
    if (!current) return;

    state.photos = state.photos.filter(photo => photo.id !== current.id);
    state.detailList = state.detailList.filter(photo => photo.id !== current.id);
    savePhotos();
    renderAll();

    if (!state.detailList.length) {
        closeDetail();
        showToast('Foto removida');
        return;
    }

    if (state.detailIndex >= state.detailList.length) {
        state.detailIndex = state.detailList.length - 1;
    }

    renderDetail();
    showToast('Foto removida');
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('toast-visible');
    clearTimeout(showToast.timeout);
    showToast.timeout = setTimeout(() => {
        toast.classList.remove('toast-visible');
    }, 2600);
}

function renderAll() {
    renderLibrary();
    renderFavorites();
    renderCameras();
    renderImportHistory();
}

function fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

function getFileType(fileName) {
    const extension = fileName.split('.').pop()?.toLowerCase() || '';
    return ['cr2', 'cr3', 'raw', 'nef', 'arw', 'dng'].includes(extension) ? 'RAW' : 'JPG';
}

function escapeHtml(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

function bindEvents() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => setFilter(chip.dataset.filter));
    });

    document.getElementById('file-upload').addEventListener('change', handleUpload);
    document.getElementById('favorites-explore').addEventListener('click', () => switchTab('library'));
    document.getElementById('detail-back').addEventListener('click', closeDetail);
    document.getElementById('detail-info').addEventListener('click', toggleExif);
    document.getElementById('close-exif').addEventListener('click', toggleExif);
    document.getElementById('detail-prev').addEventListener('click', showPrevPhoto);
    document.getElementById('detail-next').addEventListener('click', showNextPhoto);
    document.getElementById('detail-favorite-rail').addEventListener('click', () => {
        const current = state.detailList[state.detailIndex];
        if (current) toggleFavorite(current.id);
    });
    document.getElementById('detail-delete').addEventListener('click', deleteCurrentPhoto);
    document.getElementById('menu-button').addEventListener('click', () => showToast('Menu'));
    document.getElementById('settings-button').addEventListener('click', () => showToast('Configurações'));

    document.addEventListener('keydown', event => {
        if (detailView.classList.contains('hidden')) return;
        if (event.key === 'Escape') closeDetail();
        if (event.key === 'ArrowRight') showNextPhoto();
        if (event.key === 'ArrowLeft') showPrevPhoto();
    });
}

loadState();
bindEvents();
renderAll();
switchTab('library');
