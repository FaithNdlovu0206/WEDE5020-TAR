console.log("Tembisa Part 3 Loaded");
document.addEventListener('DOMContentLoaded', function(){
  // 1. Accordion - home.html
  document.querySelectorAll('.accordion-header').forEach(h=>{
    h.addEventListener('click',()=>{
      let c=h.nextElementSibling;
      c.style.display=c.style.display==='block'?'none':'block';
    });
  });
  // 1b. Donate button - Can I donate FAQ
  const donateBtn=document.getElementById('donateBtn');
  const donateMsg=document.getElementById('donateMessage');
  if(donateBtn){
    donateBtn.addEventListener('click',()=>{
      donateMsg.textContent="Thank you! ❤️ Redirecting to donation... EFT: Capitec 1234567890 Ref: DONATE. Your R100 will feed 2 dogs for a week!";
      donateBtn.textContent="Thank You For Donating!";
      donateBtn.style.background="#ff9f1c";
      setTimeout(()=>{donateMsg.textContent="";},5000);
    });
  }
  // 2. Dynamic load pets - adopt.html
  const pets=[
    {name:"Rocky - Available Now - Fee R650", img:"Images/logo.png.jpeg", alt:"Rocky rescue dog Tembisa adoption"},
    {name:"Bella & Kitty - Bonded Pair - Fee R650", img:"Images/logo.png.jpeg", alt:"Bella and Kitty cats adoption Tembisa"},
    {name:"Max and Bob - Available - Fee R650", img:"Images/logo.png.jpeg", alt:"Max and Bob dogs adoption Tembisa Gauteng"}
  ];
  const gallery=document.getElementById('petGallery');
  if(gallery){
    pets.forEach(p=>{
      let div=document.createElement('div'); div.className='gallery-item';
      div.innerHTML=`<img src="${p.img}" alt="${p.alt}" loading="lazy"><h4>${p.name}</h4>`;
      gallery.appendChild(div);
    });
    gallery.addEventListener('click',e=>{
      if(e.target.tagName==='IMG'){
        document.getElementById('lightboxImg').src=e.target.src;
        document.getElementById('lightbox').style.display='flex';
      }
    });
  }
  // 3. Search filter
  const search=document.getElementById('searchAnimals');
  if(search){search.addEventListener('input',()=>{
    let term=search.value.toLowerCase();
    document.querySelectorAll('.gallery-item').forEach(i=>{
      i.style.display=i.textContent.toLowerCase().includes(term)?'':'none';
    });
  });}
  // 4. Enquiry validation + cost/availability
  const form=document.getElementById('enquiryForm');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      let phone=document.getElementById('phone').value;
      let err=document.getElementById('enquiryError');
      let info=document.getElementById('costInfo');
      if(!/^[0-9]{10}$/.test(phone)){err.textContent="Phone must be 10 digits: 0721234567";return;}
      err.textContent="";
      let animal=document.getElementById('animal').value;
      info.innerHTML=`<h3>Adoption Details for ${animal}</h3><p><strong>Fee: R650</strong> includes sterilization, microchip, vaccines, starter pack.</p><p><strong>Availability: Available Now</strong> - Ready for viewing in Tembisa, 123 Rescue Street.</p><p>We will contact you within 24 hours!</p>`;
      let data=new FormData(form);
      fetch(form.action,{method:'POST',body:data,headers:{'Accept':'application/json'}}).catch(()=>{});
      form.reset();
        // Dynamic Services - services.html
  const upcoming=document.getElementById('upcomingServices');
  if(upcoming){
    const servicesList=[
      {title:"4. Mobile Vet Clinic - NEW!", desc:"Free vaccines every Saturday at Tembisa Plaza - 09:00-12:00", cost:"Free"},
      {title:"5. Dog Training Classes", desc:"Every Sunday 10:00 - Learn obedience, R100 per session", cost:"R100"},
      {title:"6. Community Education", desc:"School visits in Tembisa - Teaching kids animal care - Book now", cost:"Free"},
      {title:"7. Emergency Rescue 24/7", desc:"Call 0721234567 for injured strays - We respond in 1 hour in Tembisa", cost:"Donation-based"}
    ];
    upcoming.innerHTML="";
    servicesList.forEach(s=>{
      let d=document.createElement('div');
      d.style="padding:12px;margin:8px 0;background:#fdfaf6;border-radius:10px;border:1px solid #ff9f1c;";
      d.innerHTML=`<strong>${s.title}</strong><br>${s.desc}<br><span style="color:#1a4d2e;font-weight:bold;">Cost: ${s.cost}</span>`;
      upcoming.appendChild(d);
    });
  }
    });
  }
});