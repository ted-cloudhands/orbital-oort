export const ITEM_ASSETS = {
    bao: `<svg viewBox="0 0 100 100" class="item-svg"><path d="M10,85 Q10,20 50,20 Q90,20 90,85 Q90,95 50,95 Q10,95 10,85" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/><path d="M50,20 Q60,50 50,55 Q40,50 50,20" fill="none" stroke="#e2e8f0" stroke-width="2"/><circle cx="35" cy="70" r="3" fill="#333"/><circle cx="65" cy="70" r="3" fill="#333"/><path d="M45,75 Q50,80 55,75" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/><circle cx="20" cy="75" r="4" fill="#fecaca" opacity="0.6"/><circle cx="80" cy="75" r="4" fill="#fecaca" opacity="0.6"/></svg>`,

    siumai: `<svg viewBox="0 0 100 100" class="item-svg"><path d="M20,90 L15,40 Q15,30 25,30 L75,30 Q85,30 85,40 L80,90 Q80,95 50,95 Q20,95 20,90" fill="#fcd34d" stroke="#f59e0b" stroke-width="3"/><ellipse cx="50" cy="35" rx="30" ry="10" fill="#fca5a5"/><circle cx="50" cy="35" r="6" fill="#4ade80" stroke="#16a34a" stroke-width="1"/><circle cx="35" cy="65" r="3" fill="#333"/><circle cx="65" cy="65" r="3" fill="#333"/><path d="M45,68 Q50,65 55,68" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/></svg>`,

    hargow: `<svg viewBox="0 0 100 100" class="item-svg"><path d="M15,85 Q15,20 50,20 Q85,20 85,85 Q85,95 50,95 Q15,95 15,85" fill="rgba(255,255,255,0.8)" stroke="#e2e8f0" stroke-width="2"/><path d="M25,80 Q35,40 50,40 Q65,40 75,80" fill="#fecaca" opacity="0.5"/><path d="M20,70 Q50,60 80,70" fill="none" stroke="white" stroke-width="2" opacity="0.6"/><path d="M25,50 Q50,40 75,50" fill="none" stroke="white" stroke-width="2" opacity="0.6"/><circle cx="40" cy="65" r="3" fill="#333" opacity="0.8"/><circle cx="60" cy="65" r="3" fill="#333" opacity="0.8"/><path d="M45,72 Q50,75 55,72" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" opacity="0.8"/></svg>`,

    eggtart: `<svg viewBox="0 0 100 100" class="item-svg"><path d="M10,40 L20,90 Q50,100 80,90 L90,40" fill="#fcd34d" stroke="#d97706" stroke-width="3"/><ellipse cx="50" cy="40" rx="40" ry="15" fill="#fbbf24" stroke="#d97706" stroke-width="2"/><circle cx="40" cy="65" r="3" fill="#333"/><circle cx="60" cy="65" r="3" fill="#333"/><path d="M45,70 Q50,73 55,70" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/></svg>`,

    teapot: `<svg viewBox="0 0 100 100" class="item-svg"><path d="M25,85 Q20,30 50,25 Q80,30 75,85 L25,85 Z" fill="#fff" stroke="#94a3b8" stroke-width="2"/><path d="M75,50 Q95,40 95,60 Q95,80 75,70" fill="none" stroke="#94a3b8" stroke-width="4"/><path d="M25,50 Q5,30 5,20" fill="none" stroke="#94a3b8" stroke-width="4"/><ellipse cx="50" cy="25" rx="15" ry="5" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/><circle cx="50" cy="20" r="3" fill="#94a3b8"/><circle cx="40" cy="60" r="3" fill="#333"/><circle cx="60" cy="60" r="3" fill="#333"/><path d="M45,65 Q50,68 55,65" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/></svg>`,

    chickenfeet: `<svg viewBox="0 0 100 100" class="item-svg"><path d="M30,80 Q30,40 50,30 Q70,40 70,80" fill="#b91c1c" stroke="#7f1d1d" stroke-width="3"/><path d="M50,30 L40,10" stroke="#7f1d1d" stroke-width="3"/><path d="M50,30 L60,10" stroke="#7f1d1d" stroke-width="3"/><path d="M50,30 L50,5" stroke="#7f1d1d" stroke-width="3"/><circle cx="42" cy="50" r="2" fill="#fff"/><circle cx="58" cy="50" r="2" fill="#fff"/><path d="M45,60 Q50,55 55,60" fill="none" stroke="#fff" stroke-width="1"/></svg>`
};

export const ITEMS = [
    { id: 'bao', name: 'Char Siu Bao', price: 5, asset: ITEM_ASSETS.bao },
    { id: 'siumai', name: 'Siu Mai', price: 8, asset: ITEM_ASSETS.siumai },
    { id: 'hargow', name: 'Har Gow', price: 10, asset: ITEM_ASSETS.hargow },
    { id: 'eggtart', name: 'Egg Tart', price: 6, asset: ITEM_ASSETS.eggtart },
    { id: 'teapot', name: 'Tea Pot', price: 15, asset: ITEM_ASSETS.teapot },
    { id: 'chickenfeet', name: 'Chicken Feet', price: 12, asset: ITEM_ASSETS.chickenfeet }
];
