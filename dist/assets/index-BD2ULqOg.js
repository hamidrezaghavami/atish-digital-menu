(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function l(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(t){if(t.ep)return;t.ep=!0;const n=l(t);fetch(t.href,n)}})();const o={brandTitle:"آتیش | Menu",brandSubtitle:"طعم اصیل و لذیذ رستوران آتیش",tagline:"منوی دیجیتال آتیش",statusBadge:"هم‌اکنون باز است",statusNote:"پذیرش سفارشات حضوری و آنلاین",phoneNumber:"02122561949",snappfoodUrl:"https://snappfood.ir/restaurant/menu/پیتزا_آتیش-r-p44gzx/",workingHours:"همه روزه از ۹ صبح تا ۱۲ شب",address:"خیابان دولت تهران، محله دروس، خیابان کلاهدوز (دولت)، نبش کوچه خرداد، پلاک ۱۰۰ است"},j={name:"آتیش",brandTitle:"آتیش | Menu",brandSubtitle:"طعم اصیل و لذیذ رستوران آتیش",tagline:"منوی دیجیتال آتیش",statusBadge:"هم‌اکنون باز است",statusNote:"پذیرش سفارشات حضوری و آنلاین",phone:"02122561949",snappfoodUrl:"https://snappfood.ir/restaurant/menu/پیتزا_آتیش-r-p44gzx/",workingHours:"همه روزه از ۹ صبح تا ۱۲ شب",address:"خیابان دولت تهران، محله دروس، خیابان کلاهدوز (دولت)، نبش کوچه خرداد، پلاک ۱۰۰"},E=[{id:"american-pizzas",name:"پیتزا آمریکایی",icon:"🍕",title:"پیتزاهای آمریکایی",subtitle:""},{id:"family-pizzas",name:"پیتزا خانواده",icon:"🍕",title:"پیتزاهای خانواده",subtitle:""},{id:"italian-pizzas",name:"پیتزا ایتالیایی",icon:"🍕",title:"پیتزاهای ایتالیایی",subtitle:""},{id:"burgers",name:"برگرها",icon:"🍔",title:"برگر",subtitle:""},{id:"sandwiches",name:"ساندویچ‌ها",icon:"🌭",title:"ساندویچ‌ها",subtitle:""},{id:"fried",name:"سوخاری‌ها",icon:"🍗",title:"مرغ و سوخاری",subtitle:""},{id:"sides",name:"پیش‌ غذا",icon:"🍟",title:"پیش‌ غذا",subtitle:""},{id:"drinks",name:"نوشیدنی‌ها",icon:"🥤",title:"نوشیدنی‌ها",subtitle:""}],S=[{id:"ap-1",categoryId:"american-pizzas",isFeatured:!0,title:"پیتزا آمریکایی مخصوص",tag:null,badge:null,price:null,ingredients:"",image:"./images/Makhsos-American.webp",placeholderIcon:"🍕"},{id:"ap-2",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا پپرونی",tag:null,badge:null,price:null,ingredients:"",image:"./images/Peperoni-American-Pizza.webp",placeholderIcon:"🍕"},{id:"ap-3",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا مرغ و قارچ",tag:null,badge:null,price:null,ingredients:"",image:"./images/Chicken-American-Pizza.webp",placeholderIcon:"🍕"},{id:"ap-4",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا گوشت و قارچ",tag:null,badge:null,price:null,ingredients:"",image:"./images/meat-American-Pizza.webp",placeholderIcon:"🍕"},{id:"ap-5",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا سبزیجات",tag:null,badge:null,price:null,ingredients:"",image:"./images/Sabzi-American.webp",placeholderIcon:"🍕"},{id:"ap-6",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا قارچ و سوسیس",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍕"},{id:"ap-7",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا قارچ و پنیر",tag:null,badge:null,price:null,ingredients:"",image:"./images/Mashroom-Pizza.webp",placeholderIcon:"🍕"},{id:"fp-1",categoryId:"family-pizzas",isFeatured:!0,title:"پیتزا چهارطعم خانواده",tag:null,badge:null,price:null,ingredients:"",image:"./images/4F-Family.webp",placeholderIcon:"🍕"},{id:"ip-1",categoryId:"italian-pizzas",isFeatured:!0,title:"پیتزا ایتالیایی آتیش",tag:null,badge:null,price:null,ingredients:"",image:"./images/Atish-Italian.webp",placeholderIcon:"🍕"},{id:"ip-2",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا پپرونی ایتالیایی",tag:null,badge:null,price:null,ingredients:"",image:"./images/Peperoni-Italian.webp",placeholderIcon:"🍕"},{id:"ip-3",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا مرغ و قارچ ایتالیایی",tag:null,badge:null,price:null,ingredients:"",image:"./images/Chicken-Italian.webp",placeholderIcon:"🍕"},{id:"ip-4",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا سبزیجات ایتالیایی",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍕"},{id:"ip-5",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا استیک ایتالیایی",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍕"},{id:"ip-6",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا قارچ و پنیر ایتالیایی",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍕"},{id:"b-1",categoryId:"burgers",isFeatured:!0,title:"همبرگر",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍔"},{id:"b-2",categoryId:"burgers",isFeatured:!1,title:"چیزبرگر",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍔"},{id:"b-3",categoryId:"burgers",isFeatured:!1,title:"قارچ برگر",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍔"},{id:"b-4",categoryId:"burgers",isFeatured:!1,title:"دبل چیزبرگر",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍔"},{id:"b-5",categoryId:"burgers",isFeatured:!1,title:"دبل برگر",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍔"},{id:"b-6",categoryId:"burgers",isFeatured:!1,title:"دبل ماشروم",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍔"},{id:"b-7",categoryId:"burgers",isFeatured:!1,title:"آتیش برگر",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍔"},{id:"b-8",categoryId:"burgers",isFeatured:!1,title:"زینگر",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍔"},{id:"b-9",categoryId:"burgers",isFeatured:!1,title:"گریل",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍔"},{id:"b-10",categoryId:"burgers",isFeatured:!1,title:"رست بیف",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍔"},{id:"sw-1",categoryId:"sandwiches",isFeatured:!0,title:"فیله سوخاری با پنیر",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🌭"},{id:"sw-2",categoryId:"sandwiches",isFeatured:!1,title:"سوپرسوپریم",tag:null,badge:null,price:null,ingredients:"",image:"./images/jambon-sandwhich.webp",placeholderIcon:"🌭"},{id:"sw-3",categoryId:"sandwiches",isFeatured:!1,title:"هات داگ",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🌭"},{id:"fr-1",categoryId:"fried",isFeatured:!0,title:"فیله سوخاری سه تیکه",tag:null,badge:null,price:null,ingredients:"",image:"./images/Crispy-Chicken-Tenders.webp",placeholderIcon:"🍗"},{id:"fr-2",categoryId:"fried",isFeatured:!1,title:"فیله سوخاری چهار تیکه",tag:null,badge:null,price:null,ingredients:"",image:"./images/4-Crispe.webp",placeholderIcon:"🍗"},{id:"fr-3",categoryId:"fried",isFeatured:!1,title:"قارچ سوخاری",tag:null,badge:null,price:null,ingredients:"",image:"./images/Mashroom.webp",placeholderIcon:"🍄"},{id:"sd-1",categoryId:"sides",isFeatured:!0,title:"سیب زمینی سرخ‌کرده",tag:null,badge:null,price:null,ingredients:"",image:"./images/French-Fries.webp",placeholderIcon:"🍟"},{id:"sd-2",categoryId:"sides",isFeatured:!1,title:"سیب‌زمینی ویژه",tag:null,badge:null,price:null,ingredients:"",image:"./images/Fries-Special.webp",placeholderIcon:"🍟"},{id:"dr-1",categoryId:"drinks",isFeatured:!0,title:"نوشابه خانواده",tag:null,badge:null,price:null,ingredients:"",image:"./images/Big-Coke.webp",placeholderIcon:"🥤"},{id:"dr-2",categoryId:"drinks",isFeatured:!1,title:"نوشابه کوچک",tag:null,badge:null,price:null,ingredients:"",image:"./images/Coke.webp",placeholderIcon:"🥤"},{id:"dr-3",categoryId:"drinks",isFeatured:!1,title:"دلستر",tag:null,badge:null,price:null,ingredients:"",image:"./images/Delester.webp",placeholderIcon:"🥤"},{id:"dr-4",categoryId:"drinks",isFeatured:!1,title:"دوغ",tag:null,badge:null,price:null,ingredients:"",image:"./images/Dogh.webp",placeholderIcon:"🥤"},{id:"dr-5",categoryId:"drinks",isFeatured:!1,title:"آب معدنی کوچک",tag:null,badge:null,price:null,ingredients:"",image:"./images/Water.webp",placeholderIcon:"💧"}],A={restaurant:j,categories:E,items:S},H={cx:260,cy:210,radius:116},N={cx:260,cy:210,radius:174},P=[{name:"تجریش",x:110,y:65},{name:"نیاوران",x:333,y:55},{name:"قلهک",x:179,y:143},{name:"دروس",x:316,y:192},{name:"پاسداران",x:410,y:255},{name:"سیدخندان",x:208,y:318},{name:"ونک",x:77,y:270},{name:"دولت",x:325,y:134}],T="این نقشه فقط نمایی تقریبی از محدوده ارسال است؛ مرزها و فاصله‌ها دقیق نیستند. برای تأیید ارسال به آدرس خود، با رستوران تماس بگیرید.",R={restaurantArea:H,snappfoodArea:N,neighborhoods:P,note:T},I="/images/logo.webp";let d=A;function b(i){if(i==null)return"";const a=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];return i.toString().replace(/\d/g,l=>a[parseInt(l,10)])}var z,$;let f=(($=(z=d.categories)==null?void 0:z[0])==null?void 0:$.id)||"",c="",p=!1;const g={search:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>',phone:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',scooter:'<svg class="w-6 h-6 -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M14 9h4l4 4v5h-3"/><circle stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" cx="19" cy="18" r="2"/><circle stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" cx="7" cy="18" r="2"/></svg>',instagram:'<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',clock:'<svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',location:'<svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',close:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>',menuIcon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>'};function O(i){const{restaurantArea:a,snappfoodArea:l,neighborhoods:e,note:t}=R;return`
    <section id="delivery-area" class="delivery-card" aria-labelledby="delivery-title">
      <div class="delivery-heading">
        <div><span class="delivery-eyebrow">از رستوران آتیش تا منزل شما</span>
          <h2 id="delivery-title">محدوده ارسال</h2></div>
        <span class="delivery-approx">تقریبی</span>
      </div>
      <p class="delivery-intro">در حوالی ما هستید؟ راه‌های ارسال را اینجا ببینید.</p>
      <div class="delivery-map">
        <svg viewBox="0 0 520 420" role="img" aria-labelledby="delivery-map-title delivery-map-desc">
          <title id="delivery-map-title">نمای تقریبی محدوده ارسال آتیش در شمال تهران</title>
          <desc id="delivery-map-desc">دایره قرمز محدوده تقریبی پیک رستوران و دایره خط‌چین محدوده فرضی و متغیر اسنپ‌فود را نشان می‌دهد. این نقشه برای تأیید پوشش یک آدرس قابل استفاده نیست.</desc>
          <defs>
            <pattern id="delivery-grid" width="42" height="42" patternUnits="userSpaceOnUse"><path d="M42 0H0V42" fill="none" stroke="#ffffff" stroke-opacity=".025"/></pattern>
          </defs>
          <rect width="520" height="420" fill="#171a1c"/>
          <rect width="520" height="420" fill="url(#delivery-grid)"/>
          <g fill="#21342e" opacity=".65"><path d="M0 0H177L160 35 100 54 59 102 0 83Z"/><path d="M360 0H520V100L476 85 438 36Z"/><path d="M16 330L81 317 114 377 83 420H0Z"/></g>
          <g fill="none" stroke="#33383b" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M-20 120L126 103 251 119 390 93 545 117"/>
            <path d="M-20 255L102 229 213 249 340 234 545 267"/>
            <path d="M75 -10L108 110 148 220 145 335 190 440"/>
            <path d="M385 -20L359 107 381 221 345 330 372 440"/>
            <path d="M-10 362L140 339 274 353 411 333 535 352"/>
          </g>
          <g fill="none" stroke="#292e31" stroke-width="3"><path d="M0 177L520 163M0 304L520 295M217 0L221 420M301 0L286 420M455 0L468 420M45 0L51 420"/></g>
          <circle cx="${l.cx}" cy="${l.cy}" r="${l.radius}" fill="#d5c7b2" fill-opacity=".035" stroke="#b8b0a4" stroke-width="2" stroke-dasharray="7 8"/>
          <circle cx="${a.cx}" cy="${a.cy}" r="${a.radius}" fill="#f05b62" fill-opacity=".12" stroke="#f05b62" stroke-width="2.5"/>
          <g class="delivery-place-labels">${e.map(n=>`<text x="${n.x}" y="${n.y}" text-anchor="middle">${n.name}</text>`).join("")}</g>
          <g transform="translate(260 210)"><circle r="27" fill="#f59e0b" fill-opacity=".12"/><circle r="15" fill="#ffc174" stroke="#171a1c" stroke-width="5"/><circle r="4" fill="#171a1c"/></g>
          <text x="260" y="252" class="delivery-brand-label" text-anchor="middle">آتیش</text>
          <text x="28" y="394" class="delivery-map-caption">نقشه تقریبی · بدون مقیاس</text>
        </svg>
      </div>
      <div class="delivery-legend">
        <div><span class="delivery-key delivery-key-direct" aria-hidden="true"></span><div><strong>پیک رستوران</strong><span>محدوده تقریبی ارسال مستقیم</span></div></div>
        <div><span class="delivery-key delivery-key-snapp" aria-hidden="true"></span><div><strong>اسنپ‌فود</strong><span>محدوده فرضی؛ پوشش آدرس متغیر است</span></div></div>
      </div>
      <p class="delivery-note">${t}</p>
      <div class="delivery-actions">
        <a href="tel:${i.phone||o.phoneNumber}">تماس برای تأیید محدوده</a>
      </div>
    </section>`}function _(){const i=document.getElementById("app");if(!i)return;const a=(d==null?void 0:d.restaurant)||o,l=(d==null?void 0:d.categories)||[];i.innerHTML=`
    <!-- Top Mini App Bar -->
    <header class="sticky top-0 z-40 glass-header border-b border-white/[0.06] px-4 py-3">
      <div class="max-w-xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-10 h-10 flex-shrink-0 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
            <img 
              src="${I}" 
              alt="${a.name}" 
              class="w-full h-full object-contain"
            />
          </div>
          <div class="flex flex-col text-right">
            <div class="text-sm font-extrabold text-white tracking-tight leading-tight">
              ${a.brandTitle||o.brandTitle}
            </div>
            <div class="text-[11px] text-amber-400 font-medium leading-tight">
              ${a.brandSubtitle||o.brandSubtitle}
            </div>
          </div>
        </div>

        <button 
          id="toggle-search-btn" 
          aria-label="جستجو"
          class="w-9 h-9 rounded-full bg-[#201f21] border border-white/[0.08] hover:border-amber-400/50 flex items-center justify-center text-zinc-300 hover:text-white transition"
        >
          ${g.search}
        </button>
      </div>

      <!-- Live Search Bar -->
      <div id="search-container" class="${p?"":"hidden"} max-w-xl mx-auto pt-3">
        <div class="relative">
          <span class="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-zinc-400">
            ${g.search}
          </span>
          <input 
            type="text" 
            id="menu-search-input" 
            value="${c}"
            placeholder="جستجوی غذا، برگر، پیتزا یا ترکیبات..." 
            class="w-full bg-[#1b1b1d] border border-amber-500/40 text-white text-xs sm:text-sm rounded-xl pr-10 pl-9 py-2.5 focus:outline-none focus:ring-1 focus:ring-amber-500 placeholder-zinc-500"
          />
          <button 
            id="clear-search-btn" 
            class="${c?"":"hidden"} absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-400 hover:text-white"
          >
            ${g.close}
          </button>
        </div>
      </div>
    </header>

    <div class="max-w-xl mx-auto px-4 pt-4 pb-36">
      <!-- Hero Restaurant Info Card -->
      <section class="bg-[#1b1b1d] border border-white/[0.08] rounded-2xl p-4 mb-5 relative overflow-hidden shadow-lg">
        <div class="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 blur-[40px] rounded-full pointer-events-none"></div>

        <div class="flex items-center gap-3.5 relative z-10">
          <div class="relative flex-shrink-0 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            <img 
              src="${I}" 
              alt="${a.name}" 
              class="w-16 h-16 object-contain"
            />
          </div>

          <div class="flex-grow text-right">
            <div class="flex items-center gap-2 mb-0.5">
              <h1 class="text-xl font-black text-white">${a.name}</h1>
              <span class="inline-flex items-center gap-1 bg-[#2a2a2c] text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>${a.statusBadge||o.statusBadge}</span>
              </span>
            </div>
            <p class="text-[11px] text-zinc-400 leading-snug font-light">${a.tagline||o.tagline}</p>
            <p class="text-[10px] text-zinc-500 mt-1 flex items-center gap-1">
              <span class="text-amber-400">●</span>
              <span>${a.statusNote||o.statusNote}</span>
            </p>
          </div>
        </div>
      </section>

      <!-- Sticky Category Filter Pills -->
      <nav class="category-nav sticky z-30 bg-[#0e0e10]/95 backdrop-blur-md -mx-4 px-4 py-2 border-b border-white/[0.06] mb-5">
        <div id="category-bar" class="flex items-center gap-2 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing">
          ${l.map(e=>{const t=f===e.id;return`
              <button 
                data-category="${e.id}" 
                class="cat-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${t?"bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 shadow-amber-pill":"bg-[#201f21] text-zinc-300 border border-white/[0.06] hover:bg-[#2a2a2c] hover:text-white"}"
              >
                <span>${e.icon}</span>
                <span>${e.name}</span>
              </button>
            `}).join("")}
        </div>
      </nav>

      <!-- Main Feed Section -->
      <main id="menu-container"></main>

      <!-- Restaurant Info Card (Footer Section) -->
      <footer id="about-section" class="bg-[#1b1b1d] border border-white/[0.08] rounded-2xl p-4 mt-8 text-right shadow-lg">
        <div class="flex items-center gap-2 mb-3 pb-2 border-b border-white/[0.06]">
          <span class="text-base">🏛️</span>
          <h3 class="text-sm font-extrabold text-white">اطلاعات رستوران آتیش</h3>
        </div>

        <div class="flex flex-col gap-2.5 text-xs text-zinc-300">
          <div class="flex items-start gap-2">
            ${g.clock}
            <div>
              <span class="text-zinc-400 font-normal">ساعات کاری:</span>
              <span class="text-zinc-200 font-medium mr-1">${b(a.workingHours||o.workingHours)}</span>
            </div>
          </div>

          <div class="flex items-start gap-2">
            ${g.location}
            <div>
              <span class="text-zinc-400 font-normal">آدرس:</span>
              <span class="text-zinc-200 font-medium mr-1">${b(a.address||o.address)}</span>
            </div>
          </div>

          <div class="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[11px] text-zinc-500">
            <span>طراحی شده برای اسکن سریع بارکد و منوی دیجیتال</span>
            <span class="text-orange-500">🔥 آتیش</span>
          </div>
        </div>
      </footer>

      ${O(a)}
    </div>

    <nav class="contact-nav fixed bottom-0 left-0 right-0 z-40 glass-nav-bar border-t border-white/[0.08]" aria-label="دسترسی سریع">
      <div class="contact-nav-inner">
        <button id="nav-menu-btn" class="contact-nav-item contact-nav-menu">
          ${g.menuIcon}<span>منو</span>
        </button>
        <a href="tel:${a.phone||o.phoneNumber}" class="contact-nav-item contact-nav-call" aria-label="تماس تلفنی با آتیش">
          ${g.phone}<span>تماس</span>
        </a>
        <a href="${a.snappfoodUrl||o.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="contact-nav-item contact-nav-snapp" aria-label="سفارش از اسنپ‌فود">
          ${g.scooter}<span>اسنپ‌فود</span>
        </a>
        <a href="https://instagram.com/atishfood" target="_blank" rel="noopener noreferrer" class="contact-nav-item contact-nav-instagram" aria-label="اینستاگرام آتیش">
          ${g.instagram}<span>اینستاگرام</span>
        </a>
      </div>
    </nav>

  `,D(),h()}function D(){var y;const i=document.getElementById("toggle-search-btn"),a=document.getElementById("search-container"),l=document.getElementById("menu-search-input"),e=document.getElementById("clear-search-btn");i&&a&&i.addEventListener("click",()=>{p=!p,a.classList.toggle("hidden",!p),p&&l&&l.focus()}),l&&l.addEventListener("input",s=>{c=s.target.value.trim().toLowerCase(),e&&e.classList.toggle("hidden",c.length===0),h()}),e&&e.addEventListener("click",()=>{l&&(l.value=""),c="",e.classList.add("hidden"),h()});const t=document.querySelectorAll(".cat-btn");t.forEach(s=>{s.addEventListener("click",()=>{t.forEach(m=>{m.className="cat-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 bg-[#201f21] text-zinc-300 border border-white/[0.06] hover:bg-[#2a2a2c] hover:text-white"}),s.className="cat-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 shadow-amber-pill",c&&(c="",l&&(l.value=""),e==null||e.classList.add("hidden"),h()),f=s.dataset.category;const w=document.getElementById(`sec-${f}`);if(w){const m=document.querySelector("header").getBoundingClientRect().height,L=r.closest("nav"),M=m+L.getBoundingClientRect().height+12,C=document.body.getBoundingClientRect().top,B=w.getBoundingClientRect().top-C;window.scrollTo({top:B-M,behavior:"smooth"})}})});const n=document.querySelector("header");if(n){const s=()=>{document.documentElement.style.setProperty("--header-height",`${n.getBoundingClientRect().height}px`)};new ResizeObserver(s).observe(n),s()}const r=document.getElementById("category-bar");let u=!1,v,x;r&&(r.addEventListener("mousedown",s=>{u=!0,v=s.pageX-r.offsetLeft,x=r.scrollLeft}),r.addEventListener("mouseleave",()=>u=!1),r.addEventListener("mouseup",()=>u=!1),r.addEventListener("mousemove",s=>{u&&(s.preventDefault(),r.scrollLeft=x-(s.pageX-r.offsetLeft-v)*2)})),(y=document.getElementById("nav-menu-btn"))==null||y.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}function h(){const i=document.getElementById("menu-container");if(!i||!d)return;const a=d.categories||[];let l=d.items||[];if(c){if(l=l.filter(e=>{const t=e.title.toLowerCase().includes(c),n=e.ingredients&&e.ingredients.toLowerCase().includes(c);return t||n}),l.length===0){i.innerHTML=`
        <div class="flex flex-col items-center justify-center py-16 text-center text-zinc-500">
          <span class="text-4xl mb-3">🔍</span>
          <p class="text-sm font-bold text-zinc-300">موردی یافت نشد!</p>
          <p class="text-xs text-zinc-500 mt-1">لطفاً عبارت دیگری را جستجو کنید.</p>
        </div>
      `;return}i.innerHTML=`
      <div class="grid grid-cols-2 gap-3">
        ${l.map(e=>k(e)).join("")}
      </div>
    `;return}i.innerHTML=a.map(e=>{const t=l.filter(n=>n.categoryId===e.id);return t.length===0?"":`
      <section class="mb-8 scroll-mt-28" id="sec-${e.id}">
        <div class="flex items-center justify-between mb-3.5 pb-2 border-b border-white/[0.06]">
          <div class="flex flex-col text-right">
            <h2 class="text-base font-extrabold text-white flex items-center gap-1.5">
              <span>${e.icon}</span>
              <span>${e.title||e.name}</span>
            </h2>
            ${e.subtitle?`<span class="text-[11px] text-zinc-400 font-light mt-0.5">${e.subtitle}</span>`:""}
          </div>
          <span class="bg-[#201f21] text-zinc-400 border border-white/[0.06] text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0">
            ${b(t.length)} آیتم
          </span>
        </div>

        ${e.id==="family-pizzas"&&t.length===1?U(t[0]):`<div class="grid grid-cols-2 gap-3">
              ${t.map(n=>k(n)).join("")}
            </div>`}
      </section>
    `}).join("")}function U(i){return`
    <article class="food-card family-pizza-card">
      <div class="family-pizza-photo relative overflow-hidden">
        ${F(i)}
      </div>
      <div class="family-pizza-copy">
        <h3>${i.title}</h3>
        <p>ترکیبی از طعم‌های مختلف</p>
      </div>
    </article>
  `}function k(i){return`
    <article class="food-card bg-[#1b1b1d] border border-white/[0.06] rounded-2xl flex flex-col overflow-hidden shadow-sm text-center">
      <div class="food-photo-frame compact-photo-frame relative w-full bg-[#2a2a2c] border-b border-white/[0.06] flex items-center justify-center overflow-hidden flex-shrink-0">
        ${F(i)}
      </div>
      <div class="px-2.5 py-2 flex items-center justify-center flex-grow min-h-[48px]">
        <h3 class="text-xs sm:text-sm font-bold text-white leading-snug w-full">${i.title}</h3>
      </div>
    </article>
  `}function F(i){return i.image?`
    <img src="${i.image}" alt="${i.title}" loading="lazy" class="absolute inset-0 w-full h-full object-contain" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
    <span style="display: none;" class="absolute inset-0 items-center justify-center text-4xl" aria-hidden="true">${i.placeholderIcon||"🍔"}</span>
  `:`<span class="text-5xl opacity-90" aria-hidden="true">${i.placeholderIcon||"🍔"}</span>`}_();
