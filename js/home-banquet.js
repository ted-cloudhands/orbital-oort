
import { ITEM_ASSETS, ITEMS } from '../games/canto-feud/js/items.js';

// Random Background Dim Sums
function initBackground() {
    const container = document.querySelector('.dimsum-bg-container');
    if (!container) return;

    // Pick random assets
    const assets = Object.values(ITEM_ASSETS);
    const count = 10;

    for (let i = 0; i < count; i++) {
        const div = document.createElement('div');
        div.className = 'floating-dimsum';

        // Random asset
        const asset = assets[Math.floor(Math.random() * assets.length)];
        div.innerHTML = asset;

        // Random horizontal start
        div.style.left = `${Math.random() * 95}%`;

        // Random duration/delay
        const duration = 15 + Math.random() * 20;
        const delay = Math.random() * -20; // Start midway
        div.style.animationDuration = `${duration}s`;
        div.style.animationDelay = `${delay}s`;

        container.appendChild(div);
    }
}

// Logic to load saved banquet
function loadBanquet() {
    const raw = localStorage.getItem('dimSumData');
    if (!raw) {
        console.log("No saved banquet found, using static image.");
        return;
    }

    try {
        const data = JSON.parse(raw);
        if (!data.placedItems || data.placedItems.length === 0) {
            console.log("Banquet empty, staying static.");
            return;
        }

        renderBanquet(data.placedItems);

        // Hide static image
        const staticImg = document.querySelector('.banquet-table-bg');
        if (staticImg) staticImg.classList.add('hidden');

    } catch (e) {
        console.error("Failed to load banquet:", e);
    }
}

// Simplified Renderer (Read-Only)
function renderBanquet(placedItems) {
    const container = document.querySelector('.banquet-table-container');
    if (!container) return;

    // Clear static content (if we are replacing completely, or append?)
    // We want to keep the container size/position but fill it.
    // The Container size is fixed in CSS (60% width etc).
    // The coordinates stored are relative to center 300,300 in a 600x600 space?
    // In game: table is likely centered.
    // Here we need to map those coordinates to our container.
    // Let's assume a 600x600 coordinate space and scale it to fit the container.

    // Create a scaling wrapper to maintain aspect ratio
    const wrapper = document.createElement('div');
    wrapper.style.position = 'absolute';
    wrapper.style.width = '600px';
    wrapper.style.height = '600px';
    // Center it in the container?
    // The container is rotated -15deg. 
    // We just fill 100%?
    wrapper.style.width = '100%';
    wrapper.style.height = '100%';
    // But coordinates are absolute pixel values (e.g. left: 350px).
    // If container calculates to 800px wide, items will shift.
    // We should probably normalize or just center a 600x600 box inside the container.

    const scaleBox = document.createElement('div');
    scaleBox.style.position = 'relative'; // Or absolute center
    scaleBox.style.width = '600px';
    scaleBox.style.height = '600px';
    scaleBox.style.margin = '0 auto';
    // Scale transformation to fit?
    // Let's just let it overflow or fit naturally. 
    // If user made a huge table, it might clip.
    // Let's rely on standard pixel rendering for fidelity.

    container.appendChild(scaleBox);


    placedItems.forEach(entity => {
        if (entity.type === 'basket') {
            renderBasket(scaleBox, entity);
        } else {
            renderLooseItem(scaleBox, entity);
        }
    });
}

function renderBasket(container, basketData) {
    const wrapper = document.createElement('div');
    wrapper.className = 'placed-item basket-wrapper';

    // Position (Original game logic: 300 + x - 50)
    // We use same logic relative to our 600x600 scaleBox
    const left = 300 + basketData.x - 50;
    const top = 300 + basketData.y - 50;

    wrapper.style.left = `${left}px`;
    wrapper.style.top = `${top}px`;
    wrapper.style.width = '100px';
    wrapper.style.height = '100px';
    wrapper.style.transform = `rotate(${basketData.rotation}deg)`;

    // Basket SVG
    wrapper.innerHTML = ITEM_ASSETS.basket;

    // Contents
    const contentContainer = document.createElement('div');
    contentContainer.style.position = 'absolute';
    contentContainer.style.top = '0';
    contentContainer.style.left = '0';
    contentContainer.style.width = '100%';
    contentContainer.style.height = '100%';

    basketData.contents.forEach((c, index) => {
        const itemDef = ITEMS.find(i => i.id === c.itemId);
        if (!itemDef) return;

        const itemEl = document.createElement('div');
        itemEl.style.position = 'absolute';
        itemEl.style.width = '60px';
        itemEl.style.height = '60px';

        // Triforce pattern
        let dx = 0, dy = 0;
        const dist = 20;
        if (index === 0) { dx = 0; dy = -dist; }
        else if (index === 1) { dx = dist; dy = dist / 2; }
        else if (index === 2) { dx = -dist; dy = dist / 2; }

        const ix = 50 + dx - 30;
        const iy = 50 + dy - 30;

        itemEl.style.left = `${ix}px`;
        itemEl.style.top = `${iy}px`;
        itemEl.style.transform = `rotate(${c.rotation}deg)`;
        itemEl.innerHTML = itemDef.asset;

        contentContainer.appendChild(itemEl);
    });

    wrapper.appendChild(contentContainer);
    container.appendChild(wrapper);
}

function renderLooseItem(container, itemData) {
    const itemDef = ITEMS.find(i => i.id === itemData.itemId);
    if (!itemDef) return;

    const el = document.createElement('div');
    el.className = 'placed-item';
    el.innerHTML = itemDef.asset;

    const size = 80;
    const offset = size / 2;
    const left = 300 + itemData.x - offset;
    const top = 300 + itemData.y - offset;

    el.style.left = `${left}px`;
    el.style.top = `${top}px`;
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.transform = `rotate(${itemData.rotation}deg)`;

    container.appendChild(el);
}


// Init
document.addEventListener('DOMContentLoaded', () => {
    initBackground();
    loadBanquet();
});
