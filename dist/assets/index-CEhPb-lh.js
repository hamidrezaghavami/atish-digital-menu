(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=i(a);fetch(a.href,l)}})();const o={brandTitle:"آتیش | Menu",brandSubtitle:"طعم اصیل و لذیذ رستوران آتیش",tagline:"منوی دیجیتال آتیش",statusBadge:"هم‌اکنون باز است",statusNote:"پذیرش سفارشات حضوری و آنلاین",phoneNumber:"02122561949",snappfoodUrl:"https://snappfood.irhttps://snappfood.ir/restaurant/menu/پیتزا_آتیش-r-p44gzx/",workingHours:"همه روزه از ۹ صبح تا ۱۲ شب",address:"خیابان دولت تهران، محله دروس، خیابان کلاهدوز (دولت)، نبش کوچه خرداد، پلاک ۱۰۰ است"},C={name:"آتیش",brandTitle:"آتیش | Menu",brandSubtitle:"طعم اصیل و لذیذ رستوران آتیش",tagline:"منوی دیجیتال آتیش",statusBadge:"هم‌اکنون باز است",statusNote:"پذیرش سفارشات حضوری و آنلاین",phone:"02122561949",snappfoodUrl:"https://snappfood.ir/restaurant/menu/پیتزا_آتیش-r-p44gzx/",workingHours:"همه روزه از ۹ صبح تا ۱۲ شب",address:"خیابان دولت تهران، محله دروس، خیابان کلاهدوز (دولت)، نبش کوچه خرداد، پلاک ۱۰۰",currency:"تومان"},E=[{id:"american-pizzas",name:"پیتزا آمریکایی",icon:"🍕",title:"پیتزاهای آمریکایی",subtitle:""},{id:"family-pizzas",name:"پیتزا خانواده",icon:"🍕",title:"پیتزاهای خانواده",subtitle:""},{id:"italian-pizzas",name:"پیتزا ایتالیایی",icon:"🍕",title:"پیتزاهای ایتالیایی",subtitle:""},{id:"burgers",name:"برگرها",icon:"🍔",title:"برگر",subtitle:""},{id:"sandwiches",name:"ساندویچ‌ها",icon:"🌭",title:"ساندویچ‌ها",subtitle:""},{id:"fried",name:"سوخاری‌ها",icon:"🍗",title:"مرغ و سوخاری",subtitle:""},{id:"sides",name:"پیش‌ غذا",icon:"🍟",title:"پیش‌ غذا",subtitle:""},{id:"drinks",name:"نوشیدنی‌ها",icon:"🥤",title:"نوشیدنی‌ها",subtitle:""}],M=[{id:"ap-1",categoryId:"american-pizzas",isFeatured:!0,title:"پیتزا آمریکایی مخصوص",tag:null,badge:null,price:null,ingredients:"",image:"./images/Makhsos-American.webp",placeholderIcon:"🍕"},{id:"ap-2",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا پپرونی",tag:null,badge:null,price:null,ingredients:"",image:"./images/Peperoni-American-Pizza.webp",placeholderIcon:"🍕"},{id:"ap-3",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا مرغ و قارچ",tag:null,badge:null,price:null,ingredients:"",image:"./images/Chicken-American-Pizza.webp",placeholderIcon:"🍕"},{id:"ap-4",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا گوشت و قارچ",tag:null,badge:null,price:null,ingredients:"meat-American-Pizza.webp",image:"",placeholderIcon:"🍕"},{id:"ap-5",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا سبزیجات",tag:null,badge:null,price:null,ingredients:"./images/Sabzi-American.webp",image:"",placeholderIcon:"🍕"},{id:"ap-6",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا قارچ و سوسیس",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍕"},{id:"ap-7",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا قارچ و پنیر",tag:null,badge:null,price:null,ingredients:"",image:"./images/Mashroom-Pizza.webp",placeholderIcon:"🍕"},{id:"fp-1",categoryId:"family-pizzas",isFeatured:!0,title:"پیتزا چهارطعم خانواده",tag:null,badge:null,price:null,ingredients:"./images/4F-Family.webp",image:"",placeholderIcon:"🍕"},{id:"ip-1",categoryId:"italian-pizzas",isFeatured:!0,title:"پیتزا ایتالیایی آتیش",tag:null,badge:null,price:null,ingredients:"",image:"./images/Atish-Italian.webp",placeholderIcon:"🍕"},{id:"ip-2",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا پپرونی ایتالیایی",tag:null,badge:null,price:null,ingredients:"",image:"./images/Peperoni-Italian.webp",placeholderIcon:"🍕"},{id:"ip-3",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا مرغ و قارچ ایتالیایی",tag:null,badge:null,price:null,ingredients:"",image:"./images/Chicken-Italian.webp",placeholderIcon:"🍕"},{id:"ip-4",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا سبزیجات ایتالیایی",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍕"},{id:"ip-5",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا استیک ایتالیایی",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍕"},{id:"ip-6",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا قارچ و پنیر ایتالیایی",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍕"},{id:"b-1",categoryId:"burgers",isFeatured:!0,title:"همبرگر",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍔"},{id:"b-2",categoryId:"burgers",isFeatured:!1,title:"چیزبرگر",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍔"},{id:"b-3",categoryId:"burgers",isFeatured:!1,title:"قارچ برگر",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍔"},{id:"b-4",categoryId:"burgers",isFeatured:!1,title:"دبل چیزبرگر",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍔"},{id:"b-5",categoryId:"burgers",isFeatured:!1,title:"دبل برگر",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍔"},{id:"b-6",categoryId:"burgers",isFeatured:!1,title:"دبل ماشروم",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍔"},{id:"b-7",categoryId:"burgers",isFeatured:!1,title:"آتیش برگر",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍔"},{id:"b-8",categoryId:"burgers",isFeatured:!1,title:"زینگر",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍔"},{id:"b-9",categoryId:"burgers",isFeatured:!1,title:"گریل",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍔"},{id:"b-10",categoryId:"burgers",isFeatured:!1,title:"رست بیف",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🍔"},{id:"sw-1",categoryId:"sandwiches",isFeatured:!0,title:"فیله سوخاری با پنیر",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🌭"},{id:"sw-2",categoryId:"sandwiches",isFeatured:!1,title:"سوپرسوپریم",tag:null,badge:null,price:null,ingredients:"",image:"./images/jambon-sandwich.webp",placeholderIcon:"🌭"},{id:"sw-3",categoryId:"sandwiches",isFeatured:!1,title:"هات داگ",tag:null,badge:null,price:null,ingredients:"",image:"",placeholderIcon:"🌭"},{id:"fr-1",categoryId:"fried",isFeatured:!0,title:"فیله سوخاری سه تیکه",tag:null,badge:null,price:null,ingredients:"",image:"./images/Crispy-Chicken-Tenders.webp",placeholderIcon:"🍗"},{id:"fr-2",categoryId:"fried",isFeatured:!1,title:"فیله سوخاری چهار تیکه",tag:null,badge:null,price:null,ingredients:"",image:"./images/4-Crispe.webp",placeholderIcon:"🍗"},{id:"fr-3",categoryId:"fried",isFeatured:!1,title:"قارچ سوخاری",tag:null,badge:null,price:null,ingredients:"",image:"./images/Mashroom.webp",placeholderIcon:"🍄"},{id:"sd-1",categoryId:"sides",isFeatured:!0,title:"سیب زمینی سرخ‌کرده",tag:null,badge:null,price:null,ingredients:"",image:"./images/French-Fries.webp",placeholderIcon:"🍟"},{id:"sd-2",categoryId:"sides",isFeatured:!1,title:"سیب‌زمینی ویژه",tag:null,badge:null,price:null,ingredients:"",image:"./images/Fries-Special.webp",placeholderIcon:"🍟"},{id:"dr-1",categoryId:"drinks",isFeatured:!0,title:"نوشابه خانواده",tag:null,badge:null,price:null,ingredients:"",image:"./images/Big-Coke.webp",placeholderIcon:"🥤"},{id:"dr-2",categoryId:"drinks",isFeatured:!1,title:"نوشابه کوچک",tag:null,badge:null,price:null,ingredients:"",image:"./images/Coke.webp",placeholderIcon:"🥤"},{id:"dr-3",categoryId:"drinks",isFeatured:!1,title:"دلستر",tag:null,badge:null,price:null,ingredients:"",image:"./images/Delester.webp",placeholderIcon:"🥤"},{id:"dr-4",categoryId:"drinks",isFeatured:!1,title:"دوغ",tag:null,badge:null,price:null,ingredients:"",image:"./images/Dogh.webp",placeholderIcon:"🥤"},{id:"dr-5",categoryId:"drinks",isFeatured:!1,title:"آب معدنی کوچک",tag:null,badge:null,price:null,ingredients:"",image:"./images/Water.webp",placeholderIcon:"💧"}],S={restaurant:C,categories:E,items:M},z="/images/logo.webp";let s=S;function p(e){if(e==null)return"";const t=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];return e.toString().replace(/\d/g,i=>t[parseInt(i,10)])}function x(e){var n;if(!e&&e!==0)return"";const t=e.toLocaleString("en-US"),i=(n=s==null?void 0:s.restaurant)==null?void 0:n.currency;return`${p(t)} ${i}`}let m="burgers",g="",b=!1;const d={search:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>',phone:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',scooter:'<svg class="w-6 h-6 -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M14 9h4l4 4v5h-3"/><circle stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" cx="19" cy="18" r="2"/><circle stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" cx="7" cy="18" r="2"/></svg>',instagram:'<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',clock:'<svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',location:'<svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',close:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>',menuIcon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>',infoIcon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>'};function A(){const e=document.getElementById("app");if(!e)return;const t=(s==null?void 0:s.restaurant)||o,i=(s==null?void 0:s.categories)||[];e.innerHTML=`
    <!-- Top Mini App Bar -->
    <header class="sticky top-0 z-40 glass-header border-b border-white/[0.06] px-4 py-3">
      <div class="max-w-xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-10 h-10 flex-shrink-0 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
            <img 
              src="${z}" 
              alt="${t.name}" 
              class="w-full h-full object-contain"
            />
          </div>
          <div class="flex flex-col text-right">
            <div class="text-sm font-extrabold text-white tracking-tight leading-tight">
              ${t.brandTitle||o.brandTitle}
            </div>
            <div class="text-[11px] text-amber-400 font-medium leading-tight">
              ${t.brandSubtitle||o.brandSubtitle}
            </div>
          </div>
        </div>

        <button 
          id="toggle-search-btn" 
          aria-label="جستجو"
          class="w-9 h-9 rounded-full bg-[#201f21] border border-white/[0.08] hover:border-amber-400/50 flex items-center justify-center text-zinc-300 hover:text-white transition"
        >
          ${d.search}
        </button>
      </div>

      <!-- Live Search Bar -->
      <div id="search-container" class="${b?"":"hidden"} max-w-xl mx-auto pt-3">
        <div class="relative">
          <span class="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-zinc-400">
            ${d.search}
          </span>
          <input 
            type="text" 
            id="menu-search-input" 
            value="${g}"
            placeholder="جستجوی غذا، برگر، پیتزا یا ترکیبات..." 
            class="w-full bg-[#1b1b1d] border border-amber-500/40 text-white text-xs sm:text-sm rounded-xl pr-10 pl-9 py-2.5 focus:outline-none focus:ring-1 focus:ring-amber-500 placeholder-zinc-500"
          />
          <button 
            id="clear-search-btn" 
            class="${g?"":"hidden"} absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-400 hover:text-white"
          >
            ${d.close}
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
              src="${z}" 
              alt="${t.name}" 
              class="w-16 h-16 object-contain"
            />
          </div>

          <div class="flex-grow text-right">
            <div class="flex items-center gap-2 mb-0.5">
              <h1 class="text-xl font-black text-white">${t.name}</h1>
              <span class="inline-flex items-center gap-1 bg-[#2a2a2c] text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>${t.statusBadge||o.statusBadge}</span>
              </span>
            </div>
            <p class="text-[11px] text-zinc-400 leading-snug font-light">${t.tagline||o.tagline}</p>
            <p class="text-[10px] text-zinc-500 mt-1 flex items-center gap-1">
              <span class="text-amber-400">●</span>
              <span>${t.statusNote||o.statusNote}</span>
            </p>
          </div>
        </div>
      </section>

      <!-- Sticky Category Filter Pills -->
      <nav class="sticky top-[58px] z-30 bg-[#0e0e10]/95 backdrop-blur-md -mx-4 px-4 py-2 border-b border-white/[0.06] mb-5">
        <div id="category-bar" class="flex items-center gap-2 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing">
          ${i.map(n=>{const a=m===n.id;return`
              <button 
                data-category="${n.id}" 
                class="cat-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${a?"bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 shadow-amber-pill":"bg-[#201f21] text-zinc-300 border border-white/[0.06] hover:bg-[#2a2a2c] hover:text-white"}"
              >
                <span>${n.icon}</span>
                <span>${n.name}</span>
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
            ${d.clock}
            <div>
              <span class="text-zinc-400 font-normal">ساعات کاری:</span>
              <span class="text-zinc-200 font-medium mr-1">${p(t.workingHours||o.workingHours)}</span>
            </div>
          </div>

          <div class="flex items-start gap-2">
            ${d.location}
            <div>
              <span class="text-zinc-400 font-normal">آدرس:</span>
              <span class="text-zinc-200 font-medium mr-1">${p(t.address||o.address)}</span>
            </div>
          </div>

          <div class="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[11px] text-zinc-500">
            <span>طراحی شده برای اسکن سریع بارکد و منوی دیجیتال</span>
            <span class="text-orange-500">🔥 آتیش</span>
          </div>
        </div>
      </footer>
    </div>

    <!-- Floating Action Bubbles (FABs) -->
    <aside class="fixed bottom-20 right-4 z-40 flex flex-col gap-3 items-end">
      <!-- FAB 3: Instagram Button -->
      <a 
        href="https://instagram.com/atishfood" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="اینستاگرام آتیش"
        class="fab-bounce w-13 h-13 p-3.5 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-[0_0_15px_rgba(220,39,67,0.4)] flex items-center justify-center focus:outline-none"
      >
        ${d.instagram}
      </a>

      <!-- FAB 2: SnappFood Pink Button -->
      <a 
        href="${t.snappfoodUrl||o.snappfoodUrl}" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="سفارش آنلاین از اسنپ‌فود"
        class="fab-bounce w-13 h-13 p-3.5 rounded-full bg-[#FF00A6] hover:bg-[#e00092] text-white shadow-fab-pink flex items-center justify-center focus:outline-none"
      >
        ${d.scooter}
      </a>

      <!-- FAB 1: Call Green Button -->
      <a 
        href="tel:${t.phone||o.phoneNumber}" 
        title="تماس تلفنی با آتیش"
        class="fab-bounce w-13 h-13 p-3.5 rounded-full bg-[#22C55E] hover:bg-[#16a34a] text-white shadow-fab-green flex items-center justify-center focus:outline-none"
      >
        ${d.phone}
      </a>
    </aside>

    <!-- Bottom Navigation Bar (Centered Gap-24) -->
    <nav class="fixed bottom-0 left-0 right-0 z-40 glass-nav-bar border-t border-white/[0.08] h-16">
      <div class="max-w-xl mx-auto h-full flex items-center justify-center gap-24">
        <button id="nav-menu-btn" class="flex flex-col items-center justify-center gap-1 text-amber-400 transition">
          ${d.menuIcon}
          <span class="text-[10px] font-bold">منو</span>
        </button>

        <button id="nav-about-btn" class="flex flex-col items-center justify-center gap-1 text-zinc-400 hover:text-amber-400 transition">
          ${d.infoIcon}
          <span class="text-[10px] font-bold">درباره ما</span>
        </button>
      </div>
    </nav>

    <!-- Modal for Item Details -->
    <div id="item-modal" style="display: none;" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity duration-300 opacity-0">
      <div id="modal-content" class="w-full max-w-lg bg-[#18181c] border-t sm:border border-white/[0.08] rounded-t-3xl sm:rounded-2xl max-h-[90vh] overflow-y-auto transform translate-y-full sm:translate-y-0 transition-transform duration-300">
      </div>
    </div>
  `,T(),h()}function T(){var w,y;const e=document.getElementById("toggle-search-btn"),t=document.getElementById("search-container"),i=document.getElementById("menu-search-input"),n=document.getElementById("clear-search-btn");e&&t&&e.addEventListener("click",()=>{b=!b,t.classList.toggle("hidden",!b),b&&i&&i.focus()}),i&&i.addEventListener("input",r=>{g=r.target.value.trim().toLowerCase(),n&&n.classList.toggle("hidden",g.length===0),h()}),n&&n.addEventListener("click",()=>{i&&(i.value=""),g="",n.classList.add("hidden"),h()});const a=document.querySelectorAll(".cat-btn");a.forEach(r=>{r.addEventListener("click",()=>{a.forEach(k=>{k.className="cat-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 bg-[#201f21] text-zinc-300 border border-white/[0.06] hover:bg-[#2a2a2c] hover:text-white"}),r.className="cat-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 shadow-amber-pill",m=r.dataset.category;const I=document.getElementById(`sec-${m}`);if(I){const L=document.body.getBoundingClientRect().top,j=I.getBoundingClientRect().top-L;window.scrollTo({top:j-120,behavior:"smooth"})}})});const l=document.getElementById("category-bar");let c=!1,u,v;l&&(l.addEventListener("mousedown",r=>{c=!0,u=r.pageX-l.offsetLeft,v=l.scrollLeft}),l.addEventListener("mouseleave",()=>c=!1),l.addEventListener("mouseup",()=>c=!1),l.addEventListener("mousemove",r=>{c&&(r.preventDefault(),l.scrollLeft=v-(r.pageX-l.offsetLeft-u)*2)})),(w=document.getElementById("nav-menu-btn"))==null||w.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),(y=document.getElementById("nav-about-btn"))==null||y.addEventListener("click",()=>{const r=document.getElementById("about-section");r&&r.scrollIntoView({behavior:"smooth",block:"center"})});const f=document.getElementById("item-modal");f&&f.addEventListener("click",r=>{r.target===f&&B()})}function h(){const e=document.getElementById("menu-container");if(!e||!s)return;const t=s.categories||[];let i=s.items||[];if(g){if(i=i.filter(n=>{const a=n.title.toLowerCase().includes(g),l=n.ingredients&&n.ingredients.toLowerCase().includes(g);return a||l}),i.length===0){e.innerHTML=`
        <div class="flex flex-col items-center justify-center py-16 text-center text-zinc-500">
          <span class="text-4xl mb-3">🔍</span>
          <p class="text-sm font-bold text-zinc-300">موردی یافت نشد!</p>
          <p class="text-xs text-zinc-500 mt-1">لطفاً عبارت دیگری را جستجو کنید.</p>
        </div>
      `;return}e.innerHTML=`
      <div class="grid grid-cols-2 gap-3">
        ${i.map(n=>$(n)).join("")}
      </div>
    `,F();return}e.innerHTML=t.map(n=>{const a=i.filter(u=>u.categoryId===n.id);if(a.length===0)return"";const l=a.find(u=>u.isFeatured),c=a.filter(u=>!u.isFeatured);return`
      <section class="mb-8 scroll-mt-28" id="sec-${n.id}">
        <div class="flex items-center justify-between mb-3.5 pb-2 border-b border-white/[0.06]">
          <div class="flex flex-col text-right">
            <h2 class="text-base font-extrabold text-white flex items-center gap-1.5">
              <span>${n.icon}</span>
              <span>${n.title||n.name}</span>
            </h2>
            ${n.subtitle?`<span class="text-[11px] text-zinc-400 font-light mt-0.5">${n.subtitle}</span>`:""}
          </div>
          <span class="bg-[#201f21] text-zinc-400 border border-white/[0.06] text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0">
            ${p(a.length)} آیتم
          </span>
        </div>

        <div class="flex flex-col gap-3 mb-3">
          ${l?N(l):""}
        </div>
        
        ${c.length>0?`
        <!-- Fixed Grid Layout -->
        <div class="grid grid-cols-2 gap-3">
          ${c.map(u=>$(u)).join("")}
        </div>
        `:""}
      </section>
    `}).join(""),F()}function N(e){const t=!!e.image;return`
    <article data-id="${e.id}" class="hero-featured-card food-card bg-[#1b1b1d] border border-white/[0.06] rounded-2xl overflow-hidden cursor-pointer shadow-lg group text-right flex flex-col">
      <div class="relative w-full h-48 sm:h-56 bg-[#201f21] overflow-hidden flex flex-col items-center justify-center">
        ${t?`
          <img src="${e.image}" alt="${e.title}" loading="lazy" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#1b1b1d] via-[#1b1b1d]/20 to-transparent pointer-events-none"></div>
          <div style="display: none;" class="w-full h-full items-center justify-center bg-[#201f21] text-4xl text-amber-500/50">${e.placeholderIcon||"🍔"}</div>
        `:`
          <span class="text-5xl mb-2 opacity-90">${e.placeholderIcon||"🍔"}</span>
          <span class="text-[11px] text-zinc-500 font-mono tracking-wider">[عکس غذای ویژه آتیش]</span>
        `}

        ${e.tag?`<span class="absolute top-3 right-3 bg-red-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md z-10">${e.tag}</span>`:""}

        ${e.price?`
        <div class="absolute bottom-3 left-3 bg-[#0e0e10]/85 border border-amber-500/40 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg z-10">
          <span class="text-xs font-black text-amber-400">${x(e.price)}</span>
        </div>
        `:""}
      </div>

      <div class="p-4 relative z-10 text-center">
        <h3 class="text-base font-extrabold text-white group-hover:text-amber-400 transition-colors">${e.title}</h3>
        ${e.badge?`<span class="inline-flex text-amber-400 text-xs font-bold items-center gap-1 mt-1">${e.badge}</span>`:""}
        ${e.ingredients?`<p class="text-xs text-zinc-400 mt-2 leading-relaxed font-light">${p(e.ingredients)}</p>`:""}
      </div>
    </article>
  `}function $(e){const t=!!e.image;return`
    <article data-id="${e.id}" class="food-card bg-[#1b1b1d] border border-white/[0.06] hover:border-amber-500/30 rounded-2xl flex flex-col overflow-hidden cursor-pointer transition shadow-sm text-center group">
      <div class="relative w-full h-36 sm:h-40 bg-[#2a2a2c] border-b border-white/[0.06] flex items-center justify-center overflow-hidden flex-shrink-0">
        ${t?`
          <img src="${e.image}" alt="${e.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
          <span class="hidden text-4xl">${e.placeholderIcon||"🍔"}</span>
        `:`
          <span class="text-4xl opacity-90">${e.placeholderIcon||"🍔"}</span>
        `}
        ${e.tag?`<span class="absolute top-2 right-2 bg-red-950/80 backdrop-blur-sm text-red-400 border border-red-500/30 text-[10px] font-bold px-2 py-0.5 rounded-md z-10">${e.tag}</span>`:""}
      </div>

      <div class="p-3 flex flex-col items-center justify-between flex-grow min-h-[60px]">
        <h3 class="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug w-full">${e.title}</h3>
        ${e.ingredients?`<p class="text-[10px] text-zinc-400 line-clamp-1 mt-1 font-light w-full">${p(e.ingredients)}</p>`:""}
        ${e.price?`<span class="text-xs font-black text-amber-400 mt-1.5">${x(e.price)}</span>`:""}
      </div>
    </article>
  `}function F(){document.querySelectorAll(".food-card").forEach(e=>{e.addEventListener("click",()=>{var n;const t=e.dataset.id,i=(n=s==null?void 0:s.items)==null?void 0:n.find(a=>a.id===t);i&&P(i)})})}function P(e){var l;const t=document.getElementById("item-modal"),i=document.getElementById("modal-content");if(!t||!i)return;const n=(s==null?void 0:s.restaurant)||o,a=!!e.image;i.innerHTML=`
    <div class="relative text-right">
      <button id="close-modal-btn" class="absolute top-4 left-4 z-20 bg-black/70 hover:bg-black text-white p-2 rounded-full backdrop-blur-md transition">
        ${d.close}
      </button>

      <div class="relative w-full h-56 sm:h-64 bg-[#201f21] overflow-hidden">
        ${a?`
          <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
          <div style="display: none;" class="w-full h-full items-center justify-center bg-[#201f21] text-5xl">${e.placeholderIcon||"🍔"}</div>
        `:`
          <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#2a2a2c] to-[#18181c]">
            <span class="text-6xl mb-2 opacity-90">${e.placeholderIcon||"🍔"}</span>
            <span class="text-xs text-zinc-500 font-mono">[محل قرارگیری عکس غذا]</span>
          </div>
        `}
        <div class="absolute inset-0 bg-gradient-to-t from-[#18181c] via-transparent to-black/30"></div>
      </div>

      <div class="p-5 sm:p-6 -mt-6 relative z-10 bg-[#18181c] rounded-t-3xl sm:rounded-none">
        <div class="flex items-center justify-between gap-2 mb-2">
          <div class="flex items-center gap-1.5">
            ${e.tag?`<span class="bg-red-600/90 text-white text-xs font-bold px-2.5 py-1 rounded-md">${e.tag}</span>`:""}
            ${e.badge?`<span class="text-amber-400 text-xs font-bold">${e.badge}</span>`:""}
          </div>
        </div>

        <h2 class="text-xl font-black text-white mb-2">${e.title}</h2>

        ${e.ingredients?`
        <div class="my-4 p-3.5 bg-[#201f21] border border-white/[0.06] rounded-xl">
          <h4 class="text-xs font-bold text-zinc-300 mb-1.5 flex items-center gap-1">
            <span>🥗 ترکیبات و محتویات:</span>
          </h4>
          <p class="text-xs text-zinc-300 leading-relaxed">${p(e.ingredients)}</p>
        </div>
        `:""}

        ${e.price?`
        <div class="flex items-center justify-between py-3 border-y border-white/[0.06] my-4">
          <span class="text-xs text-zinc-400">قیمت واحد:</span>
          <span class="text-base font-black text-amber-400">${x(e.price)}</span>
        </div>
        `:""}

        <div class="grid grid-cols-2 gap-3 mt-4">
          <a href="tel:${n.phone||o.phoneNumber}" class="flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#16a34a] text-white py-3 px-4 rounded-xl text-xs font-bold transition shadow-fab-green">
            ${d.phone}
            <span>سفارش تلفنی</span>
          </a>
          <a href="${n.snappfoodUrl||o.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 bg-[#FF00A6] hover:bg-[#e00092] text-white py-3 px-4 rounded-xl text-xs font-bold transition shadow-fab-pink">
            ${d.scooter}
            <span>اسنپ‌فود</span>
          </a>
        </div>
      </div>
    </div>
  `,t.style.display="flex",setTimeout(()=>{t.classList.remove("opacity-0"),i.classList.remove("translate-y-full")},10),(l=document.getElementById("close-modal-btn"))==null||l.addEventListener("click",B)}function B(){const e=document.getElementById("item-modal"),t=document.getElementById("modal-content");!e||!t||(e.classList.add("opacity-0"),t.classList.add("translate-y-full"),setTimeout(()=>{e.style.display="none"},300))}A();
