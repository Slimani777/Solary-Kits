// Catalogue étendu — supplier_price_eur = estimation fournisseur
// sale_price_eur est calculé automatiquement plus bas
const PRODUCTS = [
  // Panneaux
  { id:'p001', title:'Panneau monocristallin 400W', category:'panneau', supplier_price_eur:40, img:'https://via.placeholder.com/600x400?text=Panel+400W' },
  { id:'p002', title:'Panneau monocristallin 550W', category:'panneau', supplier_price_eur:55, img:'https://via.placeholder.com/600x400?text=Panel+550W' },
  { id:'p003', title:'Panneau polycristallin 300W', category:'panneau', supplier_price_eur:28, img:'https://via.placeholder.com/600x400?text=Panel+300W' },
  { id:'p004', title:'Panneau bifacial 500W', category:'panneau', supplier_price_eur:65, img:'https://via.placeholder.com/600x400?text=Panel+Bifacial+500W' },
  { id:'p005', title:'Panneau souple 200W', category:'panneau', supplier_price_eur:72, img:'https://via.placeholder.com/600x400?text=Panel+Flexible+200W' },

  // Onduleurs
  { id:'o101', title:'Onduleur hybride 5kW', category:'onduleur', supplier_price_eur:380, img:'https://via.placeholder.com/600x400?text=Inverter+5kW' },
  { id:'o102', title:'Micro-onduleur 600W', category:'onduleur', supplier_price_eur:110, img:'https://via.placeholder.com/600x400?text=Microinverter+600W' },
  { id:'o103', title:'Onduleur string 10kW', category:'onduleur', supplier_price_eur:920, img:'https://via.placeholder.com/600x400?text=Inverter+10kW' },
  { id:'o104', title:'Onduleur off-grid 3kW', category:'onduleur', supplier_price_eur:260, img:'https://via.placeholder.com/600x400?text=Offgrid+3kW' },

  // Régulateurs
  { id:'r201', title:'MPPT 40A', category:'regulateur', supplier_price_eur:38, img:'https://via.placeholder.com/600x400?text=MPPT+40A' },
  { id:'r202', title:'MPPT 60A', category:'regulateur', supplier_price_eur:68, img:'https://via.placeholder.com/600x400?text=MPPT+60A' },
  { id:'r203', title:'PWM 30A', category:'regulateur', supplier_price_eur:22, img:'https://via.placeholder.com/600x400?text=PWM+30A' },

  // Batteries
  { id:'b301', title:'LiFePO4 12.8V 200Ah', category:'batterie', supplier_price_eur:210, img:'https://via.placeholder.com/600x400?text=LiFePO4+200Ah' },
  { id:'b302', title:'LiFePO4 48V 100Ah', category:'batterie', supplier_price_eur:900, img:'https://via.placeholder.com/600x400?text=LiFePO4+48V+100Ah' },
  { id:'b303', title:'AGM 12V 250Ah', category:'batterie', supplier_price_eur:380, img:'https://via.placeholder.com/600x400?text=AGM+250Ah' },
  { id:'b304', title:'Gel 12V 200Ah', category:'batterie', supplier_price_eur:300, img:'https://via.placeholder.com/600x400?text=Gel+200Ah' },

  // Structures / fixations
  { id:'s401', title:'Structure toit plat (2 panneaux)', category:'structure', supplier_price_eur:45, img:'https://via.placeholder.com/600x400?text=Montage+Toit+Plat' },
  { id:'s402', title:'Structure toit incliné (2 panneaux)', category:'structure', supplier_price_eur:35, img:'https://via.placeholder.com/600x400?text=Toit+Incline' },
  { id:'s403', title:'Kit fixation camping-car', category:'structure', supplier_price_eur:22, img:'https://via.placeholder.com/600x400?text=Fixation+CampingCar' },
  { id:'s404', title:'Suiveur solaire 1 axe (petit)', category:'structure', supplier_price_eur:450, img:'https://via.placeholder.com/600x400?text=Suiveur+1Axe' },

  // Câbles & connecteurs
  { id:'c501', title:'Connecteurs MC4 (paire)', category:'cable', supplier_price_eur:2.8, img:'https://via.placeholder.com/600x400?text=MC4' },
  { id:'c502', title:'Câble solaire 4mm² (50m)', category:'cable', supplier_price_eur:28, img:'https://via.placeholder.com/600x400?text=Cable+50m' },
  { id:'c503', title:'Coffret DC avec parafoudre', category:'cable', supplier_price_eur:58, img:'https://via.placeholder.com/600x400?text=Coffret+DC' },
  { id:'c504', title:'Coffret AC avec disjoncteur', category:'cable', supplier_price_eur:65, img:'https://via.placeholder.com/600x400?text=Coffret+AC' },

  // Accessoires
  { id:'a601', title:'Boîte de jonction étanche', category:'accessoire', supplier_price_eur:14, img:'https://via.placeholder.com/600x400?text=Boite+Jonction' },
  { id:'a602', title:'Fusible DC 32A', category:'accessoire', supplier_price_eur:4.2, img:'https://via.placeholder.com/600x400?text=Fusible+32A' },
  { id:'a603', title:'Parafoudre AC', category:'accessoire', supplier_price_eur:18, img:'https://via.placeholder.com/600x400?text=Parafoudre' },
  { id:'a604', title:'Compteur d\'energie WiFi', category:'accessoire', supplier_price_eur:36, img:'https://via.placeholder.com/600x400?text=Compteur+WiFi' },

  // Kits complets
  { id:'k701', title:'Kit résidentiel 3kW (panneaux + onduleur)', category:'kit', supplier_price_eur:750, img:'https://via.placeholder.com/600x400?text=Kit+3kW' },
  { id:'k702', title:'Kit résidentiel 5kW (panneaux + onduleur)', category:'kit', supplier_price_eur:1200, img:'https://via.placeholder.com/600x400?text=Kit+5kW' },
  { id:'k703', title:'Kit camping-car 400W', category:'kit', supplier_price_eur:220, img:'https://via.placeholder.com/600x400?text=Kit+Camping' },
  { id:'k704', title:'Kit site isolé 1kW', category:'kit', supplier_price_eur:480, img:'https://via.placeholder.com/600x400?text=Kit+1kW' }
];

// Pricing rule : vente = max(supplier + 40, supplier * 1.6) rounded
function computeSalePrice(supplier){
  const fromPlus40 = supplier + 40;
  const fromMult = supplier * 1.6;
  return Math.round(Math.max(fromPlus40, fromMult));
}

// Attach sale_price and margin to product objects
PRODUCTS.forEach(p=>{
  p.sale_price_eur = computeSalePrice(p.supplier_price_eur);
  p.margin_eur = Math.round(p.sale_price_eur - p.supplier_price_eur);
});

/* --- Rest of app: rendering, panier, filtres --- */

// Utilities
const $ = sel => document.querySelector(sel);

function formatPrice(n){ return n.toLocaleString('fr-FR', {style:'currency', currency:'EUR'}); }

// Render products
function renderProducts(list){
  const root = $('#products');
  root.innerHTML = '';
  if(list.length === 0){ root.innerHTML = '<p>Aucun produit trouvé.</p>'; return; }
  list.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}" loading="lazy" />
      <h3>${p.title}</h3>
      <div class="price">${formatPrice(p.sale_price_eur)}</div>
      <div style="color:var(--muted);font-size:0.85rem">Marge estimée : ${formatPrice(p.margin_eur)}</div>
      <div style="margin-top:auto;display:flex;gap:8px">
        <button class="btn" data-id="${p.id}" data-action="view">Voir</button>
        <button class="btn primary" data-id="${p.id}" data-action="add">Ajouter</button>
      </div>
    `;
    root.appendChild(card);
  });
}

// Cart (localStorage)
const CART_KEY = 'solaire_cart_v1';
let cart = JSON.parse(localStorage.getItem(CART_KEY) || '[]');

function saveCart(){ localStorage.setItem(CART_KEY, JSON.stringify(cart)); renderCart(); updateCartCount(); }
function addToCart(id, qty=1){
  const prod = PRODUCTS.find(p=>p.id===id);
  if(!prod) return;
  const item = cart.find(i=>i.id===id);
  if(item) item.qty += qty;
  else cart.push({id:prod.id, title:prod.title, price:prod.sale_price_eur, img:prod.img, qty});
  saveCart();
}
function removeFromCart(id){ cart = cart.filter(i=>i.id !== id); saveCart(); }
function changeQty(id, qty){ const item = cart.find(i=>i.id===id); if(!item) return; item.qty = Math.max(1, qty); saveCart(); }
function cartTotal(){ return cart.reduce((s,i)=>s + i.price * i.qty, 0); }
function updateCartCount(){ const count = cart.reduce((s,i)=>s + i.qty, 0); $('#cart-count').textContent = count; $('#cart-total').textContent = formatPrice(cartTotal()); }

function renderCart(){
  const root = $('#cart-items');
  root.innerHTML = '';
  if(cart.length === 0){ root.innerHTML = '<p>Panier vide.</p>'; updateCartCount(); return; }
  cart.forEach(i=>{
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <img src="${i.img}" alt="${i.title}" />
      <div style="flex:1">
        <div style="font-size:0.95rem">${i.title}</div>
        <div style="color:var(--muted);font-size:0.9rem">${formatPrice(i.price)} x <input type="number" min="1" value="${i.qty}" data-id="${i.id}" class="qty-input" style="width:56px;border-radius:6px;border:1px solid #ddd;padding:4px" /></div>
      </div>
      <div style="text-align:right">
        <div style="font-weight:700">${formatPrice(i.price * i.qty)}</div>
        <button class="btn" data-id="${i.id}" data-action="remove" style="margin-top:8px">Retirer</button>
      </div>
    `;
    root.appendChild(el);
  });
  updateCartCount();
}

// Product modal
function showProduct(id){
  const p = PRODUCTS.find(x=>x.id===id); if(!p) return;
  const modal = $('#product-modal');
  $('#modal-body').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div><img src="${p.img}" alt="${p.title}" style="width:100%;height:auto;border-radius:8px" /></div>
      <div>
        <h2>${p.title}</h2>
        <p class="price">${formatPrice(p.sale_price_eur)}</p>
        <p style="color:var(--muted)">Prix fournisseur estimé : ${formatPrice(p.supplier_price_eur)} — Marge estimée : ${formatPrice(p.margin_eur)}.</p>
        <p style="color:var(--muted)">Description courte : produit de qualité sourcé internationalement. Garantie et fiches techniques à demander au fournisseur.</p>
        <div style="margin-top:16px;display:flex;gap:8px">
          <button class="btn primary" id="modal-add" data-id="${p.id}">Ajouter au panier</button>
          <button class="btn" id="modal-close">Fermer</button>
        </div>
      </div>
    </div>
  `;
  modal.setAttribute('aria-hidden','false');
  modal.style.display = 'flex';
}

/* --- Events --- */
document.addEventListener('DOMContentLoaded', ()=>{
  renderProducts(PRODUCTS);
  renderCart();
  updateCartCount();
  $('#year').textContent = new Date().getFullYear();

  $('#search').addEventListener('input', () => applyFilters());
  $('#filter').addEventListener('change', () => applyFilters());

  $('#products').addEventListener('click', e=>{
    const btn = e.target.closest('button');
    if(!btn) return;
    const id = btn.dataset.id;
    const action = btn.dataset.action;
    if(action === 'add') { addToCart(id); openCart(); }
    if(action === 'view') showProduct(id);
  });

  $('#cart-button').addEventListener('click', openCart);
  $('#close-cart').addEventListener('click', closeCart);
  function openCart(){ $('#cart').classList.add('open'); $('#cart').setAttribute('aria-hidden','false'); }
  function closeCart(){ $('#cart').classList.remove('open'); $('#cart').setAttribute('aria-hidden','true'); }

  $('#cart-items').addEventListener('click', e=>{
    const btn = e.target.closest('button');
    if(!btn) return;
    const id = btn.dataset.id;
    if(btn.dataset.action === 'remove'){ removeFromCart(id); }
  });
  $('#cart-items').addEventListener('change', e=>{
    if(e.target.matches('.qty-input')){
      const id = e.target.dataset.id;
      const val = parseInt(e.target.value,10)||1;
      changeQty(id, val);
    }
  });

  $('#checkout').addEventListener('click', ()=>{
    if(cart.length===0){ alert("Le panier est vide."); return; }
    cart = [];
    saveCart();
    alert('Paiement simulé — intégrer Stripe/PayPal côté serveur pour production.');
    closeCart();
  });

  $('#product-modal').addEventListener('click', e=>{
    if(e.target.id === 'product-modal' || e.target.id === 'close-modal' || e.target.id === 'modal-close'){
      $('#product-modal').setAttribute('aria-hidden','true');
      $('#product-modal').style.display = 'none';
    }
  });
  document.body.addEventListener('click', e=>{
    if(e.target && e.target.id === 'modal-add'){
      const id = e.target.dataset.id;
      addToCart(id); $('#product-modal').setAttribute('aria-hidden','true'); $('#product-modal').style.display = 'none'; openCart();
    }
  });

  $('#contact-form').addEventListener('submit', e=>{
    e.preventDefault();
    $('#contact-result').textContent = 'Merci, votre message a été reçu. Nous vous contacterons sous 48h.';
    e.target.reset();
  });

  document.addEventListener('keydown', (ev)=>{
    if(ev.key === 'Escape'){ $('#product-modal').setAttribute('aria-hidden','true'); $('#product-modal').style.display = 'none'; closeCart(); }
  });
});

// Filter implementation
function applyFilters(){
  const q = $('#search').value.trim().toLowerCase();
  const f = $('#filter').value;
  const filtered = PRODUCTS.filter(p=>{
    if(f !== 'all' && p.category !== f) return false;
    if(q && !(p.title.toLowerCase().includes(q))) return false;
    return true;
  });
  renderProducts(filtered);
}
