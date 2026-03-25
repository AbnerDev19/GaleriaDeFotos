const STORAGE_KEY = 'canon-sync-gallery-v2';
const IMPORT_HISTORY_KEY = 'canon-sync-imports-v2';

const seedPhotos = [
    {
        id: 'seed-1',
        name: 'IMG_2024_0812.CR3',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnA-hJeZ-VKyf3lBtj3wRaI54Atv6_YivnxHDbx0hZphYaeOacu91Fjo5NEVYTnaJYN4FaLZyJI8bLCH__R0dEe9HyRYNcn2E1HdOrUa_ewJK916m68FyXl8niHjXYQwI2KT2WAjsBc7eP1obxKiLyWU8hEeNZyCfEiXWFo0o1q72DkT-MlHSSQc6SwJqAw8B_6PBcGeCjbqdT4IsA6KSU2x3qjMLCg3H06v2J8dgUe8s9MhxiSlaiwTTOOF0NsjWlPI9pkNwE9EY',
        date: '2023-10-24',
        type: 'RAW',
        favorite: true,
        uploaded: false,
        camera: 'Canon EOS R5',
        lens: 'RF 24-70mm f/2.8L IS USM @ 50mm',
        shutter: '1/250',
        aperture: 'ƒ/4.0',
        iso: '100',
        exp: '−0.3',
        label: 'Vintage Lens'
    },
    {
        id: 'seed-2',
        name: 'MIST_DAWN_0098.JPG',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu9_wL1lRqtNxtrWII_e-mHWqwofm-gNNabkyGH-LlQYkSKVBkwPUGPgW7zjJ6lp_n8lDR5fMS0ZuXce2Qb4t3IA52LDH0hhs4et1PDpnifoYgDdhQjJcquIEFXg0qpYNrLSBles7FZs_efDPaRSkCSZGmmH47AIfp659fl2VRkA9UGaR0Dz_HmQeCYBn3h_UqiU8sayzjJcejp_ehoB3AqFpMHhs33mqDd_r_CB8p2noQqLz_kEBhT6IWZr8p40XV3oJ6gmYT8T0',
        date: '2023-10-24',
        type: 'JPG',
        favorite: false,
        uploaded: false,
        camera: 'Canon EOS R6',
        lens: 'RF 70-200mm f/4L IS USM @ 105mm',
        shutter: '1/320',
        aperture: 'ƒ/5.6',
        iso: '200',
        exp: '+0.0',
        label: 'Misty Dawn'
    },
    {
        id: 'seed-3',
        name: 'PARIS_FRAME_1202.CR3',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKe4HaL7F-Jt3Yf1s7CWy0g9ZT6Q9vW9GS19wiEAMoHPZJXlo2QwxJKmRJZhdY6bWdt7v3wKLVZn-tZSYXKmRLEFJ20ZflKOt74zdPh_qCOa1V7eT89nOBh-TL3hoD-JfLSx9S9eZTB-soeC0-RnGr0QoXoTCNWMH8xB8PeUmYFYaWL9f3JbSe77QWJQWVuByXbAlOtkOUh6WG3XT4iUNoU-wbjWky4J9Wl0SI_b-4B0AJw5NpIA5GskKqw-dzxZjA62vPVryTMW4',
        date: '2023-10-24',
        type: 'RAW',
        favorite: true,
        uploaded: false,
        camera: 'Canon EOS R5',
        lens: 'RF 35mm f/1.8 Macro IS STM @ 35mm',
        shutter: '1/500',
        aperture: 'ƒ/4.5',
        iso: '125',
        exp: '−0.7',
        label: 'Paris Frame'
    },
    {
        id: 'seed-4',
        name: 'JUNGLE_TRACK_0044.JPG',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3oRKgWYc99Gx5EIl0Exdbb0YAwDHahRFe5ZoClaU2r-x7mhlPZUbIGmgMGei6DJZXf0gaI_7gi6q0OJk2jtukCn5izxcrRB9sV3ord5HKbWXje2XCavpPzO3lZPEk9qnvjO3EhPPTJv-7AzNcwK1zUDc0M7Ua2lkVA4yQ4uZMFHEhhLZHMRaB28-6rpbH9f2s3J7Tsab74Yp9bGtyUO9Pz-9oKEYv9uqqcbDDbhhlBcIT5O4cvNXwGCX9T1MBAfxKK2qDIQa4iVQ',
        date: '2023-10-24',
        type: 'JPG',
        favorite: false,
        uploaded: false,
        camera: 'Canon EOS R7',
        lens: 'RF-S 18-150mm F3.5-6.3 IS STM @ 68mm',
        shutter: '1/1000',
        aperture: 'ƒ/6.3',
        iso: '400',
        exp: '+0.3',
        label: 'Jungle Track'
    },
    {
        id: 'seed-5',
        name: 'MEDITERRANEAN_001.CR3',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUYmNJLcPnF6jxqvcJKIOs0JgQR4FkDbPI2We3chjRc0C2NIlF08bXGkGzyFHFhvsP6tEK32rkXrcOfgom1TkgQbtFc-SpVS6_4jrakIaS2NC1yS55SuCoakpHbYRLN6v1U-j1m16qfoDuXAkHKJVS7HpTi79WFRflKLHj3apLQctS1BxFhDR809OeT2rXOYt3CrVRT2xdVeRr2V9z1zvyavXVfVMC4mb5alO9FcFJV5Df8N6vvA2N86TnV__w28IDaA1oqjC9j8c',
        date: '2023-10-24',
        type: 'RAW',
        favorite: false,
        uploaded: false,
        camera: 'Canon EOS R5',
        lens: 'RF 24-105mm f/4L IS USM @ 24mm',
        shutter: '1/640',
        aperture: 'ƒ/8.0',
        iso: '100',
        exp: '+0.2',
        label: 'Mediterranean Light'
    },
    {
        id: 'seed-6',
        name: 'REDWOOD_7721.JPG',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDat-PDRVy0uMgiIkUIxB-EL0IwdWpO4pAQY9dTRmrV75ypqcsJyJiPb36Kam-vgZm4V1SQ_6_hN7L90XS6t6TAa_RryTsvVqLMX14sZPudmOhB4I2tQtN5v0YTozJqIdWUR10tpo4IDhdYxsnk99HvJEDu8o6kM-eBdoJcDGqqZmtQ9Gn-z1lcvOFkPwbJPamHde3t79cjeI5suzFL2oU8gyBCN17LjMJOq82APu0S2BZJ8E_PsS3TgekAvuXTUTKy3Pajt6fiCzw',
        date: '2023-10-24',
        type: 'JPG',
        favorite: true,
        uploaded: false,
        camera: 'Canon EOS R6',
        lens: 'RF 16mm f/2.8 STM @ 16mm',
        shutter: '1/160',
        aperture: 'ƒ/3.5',
        iso: '320',
        exp: '+0.1',
        label: 'Redwood Rays'
    },
    {
        id: 'seed-7',
        name: 'ALPINE_GLOW_2201.CR3',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV-x7lf-MhK48-yFtS6X62DoQ5mGPJEakEDM-b8TrWjNAOB-nTf16K1wbMfXqr2fXoMbSq2NtOvBY9eP8MDc8vjII0iWJtOrIcIsZExsSH_B43KLaOCbleVns-cQG3TknSLhzy7PbB05toLTW3Drk7yyOnRrU8gUpkq86dZbmBft4MmQy5KcWNaEgzJ21z0GbjIwfAqrXmmsoTPOyXi1PMKNOaqqilC5fMVhWh5qb_8gwGcPRWdxDZ590tGrmCBdZImTOZe7dGwdw',
        date: '2023-10-23',
        type: 'RAW',
        favorite: true,
        uploaded: false,
        camera: 'Canon EOS R5',
        lens: 'RF 24-70mm f/2.8L IS USM @ 32mm',
        shutter: '1/200',
        aperture: 'ƒ/7.1',
        iso: '100',
        exp: '−0.1',
        label: 'Alpine Glow'
    },
    {
        id: 'seed-8',
        name: 'RIDGE_BLUE_4402.JPG',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaBC3rqL1VrC-yJ6Uc5mDpNhL2QTWfXIpT2klOAoNfh4X1__blkzFOyR7hcYGTBkrC2wu1xcEwj0P6rsfLD-CpKDLGOjotMSiueRHpX-iyHuC0JLbix9bEFbnfcWp3fimFUEH2mwdk1iW6Hpf1cjl11Uy2zwUCCoALEwpkcFJlOfjqsZq4nSgImmsMy0HpCK2OhtpzeqlQMDiiM56sqzGbfOczGz8iNMq7bonveHK2JtZf26s96vehyBPqm7AaBCva2G211Q7vq5A',
        date: '2023-10-23',
        type: 'JPG',
        favorite: false,
        uploaded: false,
        camera: 'Canon EOS R6 Mark II',
        lens: 'RF 70-200mm f/2.8L IS USM @ 110mm',
        shutter: '1/800',
        aperture: 'ƒ/5.0',
        iso: '125',
        exp: '+0.0',
        label: 'Blue Ridge'
    },
    {
        id: 'seed-9',
        name: 'LAKE_STILL_1197.JPG',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpCF2nKqNsjUx_lV_X9YvsP0LfFiCgW0Bq-C5nvgn07YuCosg7CWLQpkX4Ov7BvzU8_6dt8TNzoyUyFz-Y0gexMDdUqYi_Cqk6AYrhh4HC9UgJ6DqlVUIf1Es1idhcKY5kZZr4ugW6hcv05VKOa8CnwxtBPsFamHOp2bDYVhfwHAtVLZyLwZNRFcmsDXw2yqitDYYD6hS0JaoXal2M1LIdLyV5FLYtiHifkxBR2cicMjDv04laWYx06E3anWbZBZ501OXB7BfmAd4',
        date: '2023-10-23',
        type: 'JPG',
        favorite: false,
        uploaded: false,
        camera: 'Canon EOS R7',
        lens: 'RF 24-240mm f/4-6.3 IS USM @ 48mm',
        shutter: '1/160',
        aperture: 'ƒ/5.6',
        iso: '160',
        exp: '+0.0',
        label: 'Lake Still'
    },
    {
        id: 'seed-10',
        name: 'CITY_LIGHT_5050.CR3',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQRVRIynHyQH6XJMxnaLULVI6jq9AuNzknCKrNWNBhfNa5lIw1s5stpt3ouYefnIs9LEO8zmlBLEk--W6eIUutiVaWqaUGN0o4syroVLJuaBcH46DM-ZOdtRt94AuM6Z5NNR7D61gmuWNHDtmFxgENEQ66eb0g7rk9Rc9c8Xmwxuy8DvjAQYksjwyhwW2DLToqF6e4a-MGg7VNYhypUpJGNVClUAq0UaNtWf-kks2wfnP0ioVnIFA4RgOyuczhE8J_xPY-PX2Qxis',
        date: '2023-10-22',
        type: 'RAW',
        favorite: true,
        uploaded: false,
        camera: 'Canon EOS R5',
        lens: 'RF 15-35mm f/2.8L IS USM @ 28mm',
        shutter: '1/30',
        aperture: 'ƒ/2.8',
        iso: '640',
        exp: '+0.4',
        label: 'City of Light'
    },
    {
        id: 'seed-11',
        name: 'MONO_PEAK_1180.JPG',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM2Gu2VIy5CYoW6NrFmkso_uV-tOa2sZGpAGGts4RK1T5LLir_3dfcVWrS0KvUrYO9m26u9eGCUxa15Nk4uWLrzGRwPWXhhMw71-m5ymUFsJAglSr_nigLI5_n8OWZQEG4mKuGWXAqdXbGdTEMvsH1EgRbAh8RMBATu3fbH8xatsxwDnYlBlyCI4gNpPPrhYOE_7LxkpBhvENF6Skd3Qm7JrMPRxS4TRpiGZ1qgtj8s9YPx975Iim9i3wEaB6yGb2v4Ychx1eX5KQ',
        date: '2023-10-22',
        type: 'JPG',
        favorite: true,
        uploaded: false,
        camera: 'Canon EOS RP',
        lens: 'RF 85mm f/2 Macro IS STM @ 85mm',
        shutter: '1/400',
        aperture: 'ƒ/5.6',
        iso: '125',
        exp: '−0.5',
        label: 'Monochrome Peak'
    },
    {
        id: 'seed-12',
        name: 'FOREST_CROWN_7780.JPG',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmBcGOPU9cc0-r_umTgiIguoZEB1rwg8pjKQ98jtIBydeoCeCwUoXTdKPNxcgZ6sdUynGba4SJekTf_kLOSzUvPYbWhEP1OtkugtBF8BODz_S6_DoXzoJ_49tpFy9et0wu6RWwxDgVFO2nkTAAE68e1cViXx9wJ6TNghQwIB3tQW7GHgjXmOvNkvV3KnCOKK1SmHQ73nFnZXpx-Cl8sHTaB7BE62h47UblRT1PZiJrmCpk2SP2xY7yOMIs3VERoxLrfwFVP3c4gEY',
        date: '2023-10-22',
        type: 'JPG',
        favorite: false,
        uploaded: false,
        camera: 'Canon EOS R6',
        lens: 'RF 16mm f/2.8 STM @ 16mm',
        shutter: '1/125',
        aperture: 'ƒ/3.2',
        iso: '250',
        exp: '+0.2',
        label: 'Forest Crown'
    }
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
    import: document.getElementById('view-import')
};

const libraryGroups = document.getElementById('library-groups');
const libraryEmpty = document.getElementById('library-empty');
const favoritesGrid = document.getElementById('favorites-grid');
const favoritesEmpty = document.getElementById('favorites-empty');
const favoritesSubtitle = document.getElementById('favorites-subtitle');
const importHistory = document.getElementById('import-history');
const importStatus = document.getElementById('import-status');
const toast = document.getElementById('toast');
const detailView = document.getElementById('view-detail');
const bottomNav = document.getElementById('bottom-nav');
const mainHeader = document.getElementById('main-header');
const exifPanel = document.getElementById('exif-panel');

function loadState() {
    try {
        const savedPhotos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        const savedHistory = JSON.parse(localStorage.getItem(IMPORT_HISTORY_KEY) || '[]');
        state.photos = mergeSeedAndSaved(savedPhotos);
        state.importHistory = savedHistory;
    } catch {
        state.photos = [...seedPhotos];
        state.importHistory = [];
    }

    if (!state.photos.length) {
        state.photos = [...seedPhotos];
    }
}

function mergeSeedAndSaved(savedPhotos) {
    const seedMap = new Map(seedPhotos.map(photo => [photo.id, { ...photo }]));
    const uploaded = [];

    savedPhotos.forEach(photo => {
        if (seedMap.has(photo.id)) {
            seedMap.set(photo.id, { ...seedMap.get(photo.id), ...photo });
        } else {
            uploaded.push(photo);
        }
    });

    return [...seedMap.values(), ...uploaded];
}

function savePhotos() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.photos));
}

function saveImportHistory() {
    localStorage.setItem(IMPORT_HISTORY_KEY, JSON.stringify(state.importHistory.slice(0, 12)));
}

function formatLongDate(dateString) {
    return new Date(`${dateString}T12:00:00`).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}

function formatShortDate(dateString) {
    return new Date(`${dateString}T12:00:00`).toLocaleDateString('en-US', {
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
        case 'raw':
            return sorted.filter(photo => photo.type === 'RAW');
        case 'jpg':
            return sorted.filter(photo => photo.type === 'JPG');
        case 'favorites':
            return sorted.filter(photo => photo.favorite);
        case 'uploaded':
            return sorted.filter(photo => photo.uploaded);
        default:
            return sorted;
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
                <h2 class="font-headline text-lg font-bold text-on-surface">${formatLongDate(date)}</h2>
                <div class="h-px flex-grow bg-outline-variant opacity-20"></div>
                <span class="font-label text-xs text-on-surface-variant">${photos.length} Items</span>
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
        <div class="photo-overlay flex flex-col justify-between p-3">
            <div class="self-end bg-black/40 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold tracking-tighter uppercase text-white">${photo.type}</div>
            <div class="flex justify-between items-end gap-3 w-full">
                <div>
                    <div class="text-[10px] font-bold text-white uppercase tracking-widest">${formatShortDate(photo.date)}</div>
                    <div class="text-xs text-white/80 truncate max-w-[10rem]">${escapeHtml(photo.label || photo.name)}</div>
                </div>
                <button type="button" data-favorite-id="${photo.id}" class="favorite-toggle flex items-center justify-center text-white ${photo.favorite ? 'favorited' : ''}" aria-label="Favoritar">
                    <span class="material-symbols-outlined ${photo.favorite ? 'filled-icon text-primary-container' : ''}">favorite</span>
                </button>
            </div>
        </div>
    `;

    card.addEventListener('click', event => {
        if (event.target.closest('.favorite-toggle')) return;
        openDetailFromList(currentList, photo.id);
    });

    const favoriteButton = card.querySelector('.favorite-toggle');
    favoriteButton.addEventListener('click', event => {
        event.stopPropagation();
        toggleFavorite(photo.id);
    });

    return card;
}

function renderFavorites() {
    const favorites = state.photos.filter(photo => photo.favorite).sort((a, b) => new Date(b.date) - new Date(a.date));
    favoritesGrid.innerHTML = '';
    favoritesSubtitle.textContent = `Curated Selection • ${favorites.length} Items`;

    if (!favorites.length) {
        favoritesEmpty.classList.remove('hidden');
        favoritesGrid.classList.add('hidden');
        return;
    }

    favoritesEmpty.classList.add('hidden');
    favoritesGrid.classList.remove('hidden');

    const layoutClasses = [
        'md:col-span-8 aspect-[16/9]',
        'md:col-span-4 aspect-[3/4]',
        'md:col-span-4 aspect-square',
        'md:col-span-4 aspect-square',
        'md:col-span-4 aspect-square',
        'md:col-span-12 h-80'
    ];

    favorites.forEach((photo, index) => {
        const item = document.createElement('button');
        item.type = 'button';
        item.className = `${layoutClasses[index] || 'md:col-span-4 aspect-square'} group relative bg-surface-container overflow-hidden rounded-sm cursor-pointer text-left`;

        item.innerHTML = `
            <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="${photo.src}" alt="${escapeHtml(photo.name)}" loading="lazy" />
            <div class="absolute inset-0 ${index === 0 || index === 5 ? 'bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' : ''}"></div>
            <div class="absolute top-4 right-4">
                <button type="button" data-favorite-id="${photo.id}" class="favorite-toggle text-primary-container" aria-label="Remover dos favoritos">
                    <span class="material-symbols-outlined filled-icon">favorite</span>
                </button>
            </div>
            ${favoriteLabelMarkup(photo, index)}
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

function favoriteLabelMarkup(photo, index) {
    if (index === 0) {
        return `
            <div class="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p class="font-headline font-bold text-xl">${escapeHtml(photo.label || photo.name)}</p>
                <p class="font-label text-sm text-on-surface-variant">ISO ${escapeHtml(photo.iso)} • ${escapeHtml(photo.lens.split('@').pop()?.trim() || '50mm')} • ${escapeHtml(photo.aperture)}</p>
            </div>
        `;
    }
    if (index === 1) {
        return `
            <div class="absolute bottom-4 left-4 bg-surface-container/60 backdrop-blur-md p-3 rounded-sm border border-white/5">
                <p class="font-label text-xs font-bold uppercase tracking-tighter">${escapeHtml(photo.label || photo.name)}</p>
            </div>
        `;
    }
    if (index === 5) {
        return `
            <div class="absolute bottom-8 left-8">
                <h3 class="font-headline font-bold text-3xl uppercase tracking-tighter">${escapeHtml(photo.label || photo.name)}</h3>
                <div class="flex gap-4 mt-2">
                    <span class="font-label text-xs bg-primary-container text-white px-2 py-1">${escapeHtml(photo.type)}</span>
                    <span class="font-label text-xs bg-surface-variant px-2 py-1">${photo.uploaded ? 'IMPORT' : 'SYNC'}</span>
                </div>
            </div>
        `;
    }
    return '';
}

function renderImportHistory() {
    const history = [...state.importHistory].slice(0, 6);
    importHistory.innerHTML = '';

    if (!history.length) {
        importHistory.innerHTML = `
            <div class="md:col-span-3 bg-surface-container p-8 text-center border border-outline-variant/10">
                <span class="material-symbols-outlined text-5xl text-surface-variant mb-4">history</span>
                <p class="font-headline text-2xl font-bold mb-2">No imports yet</p>
                <p class="text-sm text-on-surface-variant">As suas importações aparecerão aqui assim que você enviar imagens para a biblioteca.</p>
            </div>
        `;
        return;
    }

    history.forEach(entry => {
        const card = document.createElement('div');
        card.className = 'bg-surface-container p-6 flex flex-col justify-between h-48 hover:bg-surface-container-high transition-colors group';
        card.innerHTML = `
            <div class="flex justify-between items-start gap-3">
                <span class="font-label text-[10px] text-on-surface-variant uppercase">${formatShortDate(entry.date)}</span>
                <span class="material-symbols-outlined ${entry.status === 'verified' ? 'text-primary-container filled-icon' : 'text-on-surface-variant'}">${entry.status === 'verified' ? 'verified' : 'history'}</span>
            </div>
            <div>
                <p class="font-headline text-3xl font-black mb-1">${entry.count} <span class="text-sm font-normal text-on-surface-variant">${entry.type}</span></p>
                <p class="text-xs font-label text-on-surface-variant uppercase tracking-widest">${escapeHtml(entry.label)}</p>
            </div>
        `;
        importHistory.appendChild(card);
    });
}

function switchTab(target) {
    state.currentTab = target;
    Object.entries(views).forEach(([key, view]) => {
        view.classList.toggle('active', key === target);
    });

    document.querySelectorAll('.nav-tab').forEach(tab => {
        const isActive = tab.dataset.tab === target;
        tab.classList.toggle('text-primary-container', isActive);
        tab.classList.toggle('text-on-surface-variant', !isActive);
        tab.querySelector('.material-symbols-outlined').classList.toggle('filled-icon', isActive);
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
    const rawCount = files.filter(file => getFileType(file.name) === 'RAW').length;
    const jpgCount = files.length - rawCount;
    state.importHistory.unshift({
        date: new Date().toISOString().slice(0, 10),
        count: files.length,
        type: rawCount >= jpgCount ? 'RAW' : 'JPG',
        label: files.length === 1 ? files[0].name : `${files[0].name} + ${files.length - 1}`,
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
            id: `upload-${crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`}`,
            name: file.name,
            src,
            date: date.toISOString().slice(0, 10),
            type: getFileType(file.name),
            favorite: false,
            uploaded: true,
            camera: 'Imported from device',
            lens: 'Local media upload',
            shutter: '1/125',
            aperture: 'ƒ/4.0',
            iso: '200',
            exp: '+0.0',
            label: file.name.replace(/\.[^.]+$/, '')
        });
    }

    state.photos = [...newPhotos, ...state.photos];
    addImportHistory(imageFiles);
    savePhotos();
    renderAll();
    switchTab('library');
    showToast(`${imageFiles.length} arquivo(s) importado(s) com sucesso.`);
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
    document.getElementById('detail-camera').textContent = photo.camera;
    document.getElementById('detail-lens').textContent = photo.lens;
    document.getElementById('detail-shutter').innerHTML = `${escapeHtml(photo.shutter)} <span class="text-sm font-medium opacity-50">S</span>`;
    document.getElementById('detail-aperture').textContent = photo.aperture;
    document.getElementById('detail-iso').textContent = photo.iso;
    document.getElementById('detail-exp').textContent = photo.exp;

    document.getElementById('exif-aperture').textContent = photo.aperture;
    document.getElementById('exif-shutter').textContent = `${photo.shutter}s`;
    document.getElementById('exif-iso').textContent = photo.iso;
    document.getElementById('exif-type').textContent = photo.type;
    document.getElementById('exif-name').textContent = photo.name;
    document.getElementById('exif-date').textContent = formatLongDate(photo.date);
    document.getElementById('exif-camera').textContent = photo.camera;
    document.getElementById('exif-lens').textContent = photo.lens;
    document.getElementById('exif-origin').textContent = photo.uploaded ? 'Imported' : 'Seed Library';

    updateDetailFavoriteUI(photo.favorite);
    document.getElementById('detail-prev').disabled = state.detailIndex === 0;
    document.getElementById('detail-next').disabled = state.detailIndex === state.detailList.length - 1;

    renderHistogram();
}

function renderHistogram() {
    const histogram = document.getElementById('detail-histogram');
    const values = [20, 35, 60, 85, 95, 70, 40, 25, 15, 5];
    histogram.innerHTML = values.map(value => `<div class="bg-on-surface w-full" style="height:${value}%"></div>`).join('');
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
        showToast('Foto removida da biblioteca.');
        return;
    }

    if (state.detailIndex >= state.detailList.length) {
        state.detailIndex = state.detailList.length - 1;
    }

    renderDetail();
    showToast('Foto removida da biblioteca.');
}

async function shareCurrentPhoto() {
    const current = state.detailList[state.detailIndex];
    if (!current) return;

    const shareData = { title: current.name, text: current.label || current.name };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
            return;
        }
        await navigator.clipboard.writeText(current.name);
        showToast('Nome da foto copiado para a área de transferência.');
    } catch {
        showToast('Não foi possível compartilhar esta foto.');
    }
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
        .replaceAll("'", '&#39;');
}

function bindEvents() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => setFilter(chip.dataset.filter));
    });

    document.getElementById('file-upload').addEventListener('change', handleUpload);
    document.getElementById('wifi-button').addEventListener('click', () => {
        importStatus.textContent = 'Wi-Fi mode ready';
        showToast('Modo Wi-Fi em demonstração. Use USB-C para importar arquivos reais.');
    });
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
    document.getElementById('detail-share').addEventListener('click', shareCurrentPhoto);
    document.getElementById('detail-develop').addEventListener('click', () => showToast('Modo Develop preparado como ação visual.'));
    document.getElementById('detail-focus').addEventListener('click', () => showToast('Focus tool pronto para expansão futura.'));
    document.getElementById('menu-button').addEventListener('click', () => showToast('Menu preparado.'));
    document.getElementById('settings-button').addEventListener('click', () => showToast('Configurações preparadas.'));

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
