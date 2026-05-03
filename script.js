const products = [
  {
    cat:'Serum', name:'Rose Petal Serum', price:'$48',
    img:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=750&fit=crop&q=80',
    desc:'A luxurious hydrating serum infused with cold-pressed Damascena rose extract and hyaluronic acid. This lightweight formula penetrates deep to deliver intense moisture, leaving skin plump, radiant, and petal-soft.',
    howTo:['Cleanse and tone your face as usual.','Apply 3–4 drops onto your fingertips.','Gently press and pat the serum across your face and neck — avoid rubbing.','Allow 30 seconds to absorb before applying moisturizer.'],
    when:['Morning','Evening','Daily'],
    ingredients:['Damascena Rose','Hyaluronic Acid','Vitamin E','Rosehip Oil','Aloe Vera'],
    skinType:['All Skin Types','Dry Skin','Mature Skin']
  },
  {
    cat:'Cleanser', name:'Chamomile Milk Cleanser', price:'$36',
    img:'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=750&fit=crop&q=80',
    desc:'A soothing milk cleanser formulated for sensitive and reactive skin. Chamomile and oat extract calm irritation while gently dissolving makeup, SPF, and daily impurities without disrupting your skin barrier.',
    howTo:['Dampen your face with lukewarm water.','Pump a coin-sized amount into your palms.','Massage in circular motions for 30–60 seconds.','Rinse thoroughly or wipe away with a damp cloth.'],
    when:['Morning','Evening','Daily'],
    ingredients:['Chamomile Extract','Oat Kernel','Coconut Milk','Calendula','Glycerin'],
    skinType:['Sensitive Skin','Dry Skin','Normal Skin']
  },
  {
    cat:'Moisturizer', name:'Olive Leaf Day Cream', price:'$42',
    img:'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&h=750&fit=crop&q=80',
    desc:'A lightweight, fast-absorbing day cream enriched with olive leaf polyphenols and SPF 15. Provides all-day hydration while protecting against environmental stressors and early signs of aging.',
    howTo:['Apply as the last step of your morning skincare routine.','Take a pea-sized amount and dot across forehead, cheeks, nose, and chin.','Blend outward in gentle upward strokes.','Reapply SPF protection if exposed to direct sunlight for extended periods.'],
    when:['Morning Only','Daily','Before Makeup'],
    ingredients:['Olive Leaf Extract','SPF 15','Squalane','Green Tea','Vitamin C'],
    skinType:['All Skin Types','Combination Skin','Oily Skin']
  },
  {
    cat:'Treatment', name:'Botanical Night Mask', price:'$54',
    img:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=750&fit=crop&q=80',
    desc:'An overnight treatment mask that works while you sleep. Lavender essential oil promotes relaxation while jojoba and bakuchiol repair and rejuvenate skin overnight, revealing a refreshed complexion by morning.',
    howTo:['Apply after your evening serum on clean skin.','Use the spatula to scoop a generous amount.','Spread an even layer across face and neck, avoiding the eye area.','Leave on overnight — rinse off in the morning with your cleanser.'],
    when:['Evening Only','2–3x Per Week','Overnight'],
    ingredients:['Lavender Oil','Jojoba Oil','Bakuchiol','Shea Butter','Ceramides'],
    skinType:['All Skin Types','Dry Skin','Dull Skin']
  }
];

function openModal(i){
  const p=products[i];
  document.getElementById('modalImg').src=p.img;
  document.getElementById('modalCat').textContent=p.cat;
  document.getElementById('modalTitle').textContent=p.name;
  document.getElementById('modalPrice').textContent=p.price;
  document.getElementById('modalDesc').textContent=p.desc;
  document.getElementById('modalHowTo').innerHTML=p.howTo.map((s,j)=>`<div class="modal-step"><div class="modal-step-num">${j+1}</div><p>${s}</p></div>`).join('');
  document.getElementById('modalWhen').innerHTML=p.when.map(t=>`<span class="when-tag">${t}</span>`).join('');
  document.getElementById('modalIngredients').innerHTML=p.ingredients.map(x=>`<span class="ingredient-tag">${x}</span>`).join('');
  document.getElementById('modalSkinType').innerHTML=p.skinType.map(x=>`<span class="skin-tag">${x}</span>`).join('');
  document.getElementById('productModal').classList.add('active');
  document.body.style.overflow='hidden';
}

function closeModal(){
  document.getElementById('productModal').classList.remove('active');
  document.body.style.overflow='';
}

document.getElementById('productModal').addEventListener('click',function(e){ if(e.target===this) closeModal(); });
document.addEventListener('keydown',function(e){ if(e.key==='Escape') closeModal(); });

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:0.1});
document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));
