(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const A={brandTitle:"فست‌فود آتیش",brandSubtitle:"طعم اصیل و لذیذ فست‌فود آتیش",tagline:"منوی دیجیتال و سفارش دلیوری فست‌فود آتیش",statusBadge:"هم‌اکنون باز است",phoneNumber:"02122561949",snappfoodUrl:"https://snappfood.ir/restaurant/menu/پیتزا_آتیش-r-p44gzx/",workingHours:"همه روزه از ۹ صبح تا ۱۲ شب",address:"تهران، خیابان دولت (کلاهدوز)، محله دروس، نبش کوچه خرداد، پلاک ۱۰۰"},K={name:"آتیش",brandTitle:"آتیش | Menu",brandSubtitle:"طعم اصیل و لذیذ رستوران آتیش",tagline:"منوی دیجیتال آتیش",statusBadge:"هم‌اکنون باز است",phone:"02122561949",snappfoodUrl:"https://snappfood.ir/restaurant/menu/پیتزا_آتیش-r-p44gzx/",workingHours:"همه روزه از ۹ صبح تا ۱۲ شب",address:"خیابان دولت تهران، محله دروس، خیابان کلاهدوز (دولت)، نبش کوچه خرداد، پلاک ۱۰۰"},ee=[{id:"american-pizzas",name:"پیتزا آمریکایی",icon:"🍕",title:"پیتزاهای آمریکایی",subtitle:""},{id:"family-pizzas",name:"پیتزا خانواده",icon:"🍕",title:"پیتزاهای خانواده",subtitle:""},{id:"italian-pizzas",name:"پیتزا ایتالیایی",icon:"🍕",title:"پیتزاهای ایتالیایی",subtitle:""},{id:"burgers",name:"برگرها",icon:"🍔",title:"برگر",subtitle:""},{id:"sandwiches",name:"ساندویچ‌ها",icon:"🌭",title:"ساندویچ‌ها",subtitle:""},{id:"fried",name:"سوخاری‌ها",icon:"🍗",title:"مرغ و سوخاری",subtitle:""},{id:"sides",name:"پیش‌ غذا",icon:"🍟",title:"پیش‌ غذا",subtitle:""},{id:"drinks",name:"نوشیدنی‌ها",icon:"🥤",title:"نوشیدنی‌ها",subtitle:""}],te=[{id:"ap-1",categoryId:"american-pizzas",isFeatured:!0,title:"پیتزا آمریکایی مخصوص",tag:null,badge:"دارای طرح قلبی ❤️",price:null,ingredients:"خمیر پیتزا پنجره ای آمریکایی، مرغ، ژامبون گوشت 90%، قارچ، فلفل دلمه ای، پنیر پیتزا",image:"./images/Makhsos-American.webp",placeholderIcon:"🍕",shapes:[{id:"normal",name:"مستطیل کلاسیک",shortName:"مستطیل",icon:"",image:"./images/Makhsos-American.webp",badge:null},{id:"heart",name:"طرح قلبی",shortName:"قلبی",icon:"",image:"images/heart-normal.webp",badge:"❤️ طرح قلبی"}]},{id:"ap-2",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا پپرونی",tag:null,badge:"دارای طرح قلبی ❤️",price:null,ingredients:"خمیر پیتزا پنجره ای آمریکایی، پپرونی 90%، فلفل دلمه ای، پنیر پیتزا",image:"./images/Peperoni-American-Pizza.webp",placeholderIcon:"🍕",shapes:[{id:"normal",name:"مستطیل کلاسیک",shortName:"مستطیل",icon:"",image:"./images/Peperoni-American-Pizza.webp",badge:null},{id:"heart",name:"طرح قلبی",shortName:"قلبی",icon:"",image:"images/heart-peperoni.webp",badge:"❤️ طرح قلبی"}]},{id:"ap-3",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا مرغ و قارچ",tag:null,badge:null,price:null,ingredients:"خمیر پیتزا پنجره ای آمریکایی، مرغ نگینی شده، قارچ، پنیر پیتزا",image:"./images/Chicken-American-Pizza.webp",placeholderIcon:"🍕"},{id:"ap-4",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا گوشت و قارچ",tag:null,badge:null,price:null,ingredients:"خمیر پیتزا پنجره ای آمریکایی، گوشت گوساله ریش ریش شده، قارچ، پنیر پیتزا",image:"./images/meat-American-Pizza.webp",placeholderIcon:"🍕"},{id:"ap-5",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا سبزیجات",tag:null,badge:null,price:null,ingredients:"خمیر پیتزا آمریکایی، ذرت، نخود فرنگی، هویج، قارچ، فلفل دلمه ای، پنیر پیتزا",image:"./images/Sabzi-American.webp",placeholderIcon:"🍕"},{id:"ap-6",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا قارچ و سوسیس",tag:null,badge:null,price:null,ingredients:"خمیر آمریکایی ، قارچ ، سوسیس اسلایس ، پنیر میکس ، سس مخصوص آتیش",image:"images/american-Sosis-mashroom.webp",placeholderIcon:"🍕"},{id:"ap-7",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا قارچ و پنیر",tag:null,badge:null,price:null,ingredients:"خمیر پیتزا آمریکایی، قارچ، پنیر پیتزا",image:"./images/Mashroom-Pizza.webp",placeholderIcon:"🍕"},{id:"fp-1",categoryId:"family-pizzas",isFeatured:!0,title:"پیتزا چهارطعم خانواده",tag:null,badge:null,price:null,ingredients:"ترکیبی از چهار طعم مختلف پیتزا با قابلیت انتخاب و تغییر طعم‌ها به سلیقه شما.",image:"./images/4F-Family.webp",placeholderIcon:"🍕"},{id:"ip-1",categoryId:"italian-pizzas",isFeatured:!0,title:"پیتزا ایتالیایی آتیش",tag:null,badge:null,price:null,ingredients:"خمیر پیتزا ایتالیایی، مرغ، ژامبون گوشت 90%، قارچ، فلفل دلمه ای، زیتون، پنیر پیتزا",image:"./images/Atish-Italian.webp",placeholderIcon:"🍕"},{id:"ip-2",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا پپرونی ایتالیایی",tag:null,badge:null,price:null,ingredients:"خمیر پیتزا ایتالیایی، پپرونی 90%، فلفل دلمه ای، پنیر پیتزا",image:"./images/Peperoni-Italian.webp",placeholderIcon:"🍕"},{id:"ip-3",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا مرغ و قارچ ایتالیایی",tag:null,badge:null,price:null,ingredients:"خمیر پیتزا ایتالیایی، مرغ، قارچ، زیتون، فلفل دلمه ای، پنیر پیتزا",image:"./images/Chicken-Italian.webp",placeholderIcon:"🍕"},{id:"ip-5",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا استیک ایتالیایی",tag:null,badge:null,price:null,ingredients:"خمیر پیتزا ایتالیایی، گوشت گوساله تکه ای، قارچ، زیتون، فلفل دلمه ای، پنیر پیتزا",image:"images/Steak-Italian-Pizza.webp",placeholderIcon:"🍕"},{id:"b-1",categoryId:"burgers",isFeatured:!0,title:"همبرگر",tag:null,badge:null,price:null,ingredients:"یک عدد برگر دست ساز گوشت گوساله ۱۵۰ گرمی، گوجه، کاهو، خیارشور، پیاز، سس مخصوص، نان برگر",image:"images/burger.webp",placeholderIcon:"🍔"},{id:"b-2",categoryId:"burgers",isFeatured:!1,title:"چیزبرگر",tag:null,badge:null,price:null,ingredients:"یک عدد برگر دست ساز گوشت گوساله ۱۵۰ گرمی، پنیر گودا، خیارشور، گوجه، کاهو، سس مخصوص، نان برگر",image:"images/cheese-burger.webp",placeholderIcon:"🍔"},{id:"b-3",categoryId:"burgers",isFeatured:!1,title:"قارچ برگر",tag:null,badge:null,price:null,ingredients:"یک عدد برگر دست ساز گوشت گوساله ۱۵۰ گرمی، قارچ، پنیر، پیاز، گوجه، کاهو، خیارشور، نان برگر",image:"images/mashroom-burger.webp",placeholderIcon:"🍔"},{id:"b-4",categoryId:"burgers",isFeatured:!1,title:"دبل چیزبرگر",tag:null,badge:null,price:null,ingredients:"دو عدد گوشت برگر ۱۲۰ گرمی ، نان برگر ، پیاز ، کاهو ، گوجه ، خیار شور ، پنیر گودا ، سس ساندویچ",image:"images/double-cheese-burger.webp",placeholderIcon:"🍔"},{id:"b-5",categoryId:"burgers",isFeatured:!1,title:"دبل برگر",tag:null,badge:null,price:null,ingredients:"دو عدد برگر ۱۲۰ گرمی ، کاهو ، گوجه ، خیارشور ، نان برگر ، سس ساندویچ",image:"images/double-burger.webp",placeholderIcon:"🍔"},{id:"b-6",categoryId:"burgers",isFeatured:!1,title:"دبل ماشروم",tag:null,badge:null,price:null,ingredients:"دو عدد برگر ۱۲۰ گرمی ، پیاز ، قارچ ، پنیر گودا ، نان برگر ، سس مخصوص",image:"images/double-Mashroom-burger.webp",placeholderIcon:"🍔"},{id:"b-7",categoryId:"burgers",isFeatured:!1,title:"آتیش برگر",tag:null,badge:null,price:null,ingredients:"یک عدد برگر دست ساز گوشت گوساله ۱۵۰ گرمی، ۱۵۰ گرم فیله مرغ گریل، پنیر گودا، خیارشور، گوجه، کاهو، سس مخصوص، نان برگر",image:"images/atish-burger.webp",placeholderIcon:"🍔"},{id:"b-8",categoryId:"burgers",isFeatured:!1,title:"زینگر",tag:null,badge:null,price:null,ingredients:"۱۳۰ گرم فیله مرغ سوخاری تند، کاهو، گوجه، سس مخصوص، نان برگر",image:"images/Zinger.webp",placeholderIcon:"🍔"},{id:"b-9",categoryId:"sandwiches",isFeatured:!1,title:"گریل",tag:null,badge:null,price:null,ingredients:"۱۶۰ گرم فیله مرغ گریل شده، پنیر گودا، قارچ، گوجه، کاهو، نان باگت",image:"images/Giril.webp",placeholderIcon:"🌭"},{id:"b-10",categoryId:"sandwiches",isFeatured:!1,title:"رست بیف",tag:null,badge:null,price:null,ingredients:"کاهو ، گوجه ، خیارشور ، ۸۰ گرم گوشت گوساله مزه دار ، قارچ سس مخصوص و نان باگت",image:"images/RoastBeef.webp",placeholderIcon:"🌭"},{id:"sw-1",categoryId:"sandwiches",isFeatured:!0,title:"فیله سوخاری با پنیر",tag:null,badge:null,price:null,ingredients:"۱۲۰ گرم فیله مرغ سوخاری، پنیر گودا، گوجه، کاهو، نان باگت",image:"images/file.webp",placeholderIcon:"🌭"},{id:"sw-2",categoryId:"sandwiches",isFeatured:!1,title:"سوپرسوپریم",tag:null,badge:null,price:null,ingredients:"۱۲۰ گرم فیله مرغ سوخاری، ۲ ورق ژامبون گوشت ، پنیر گودا، کاهو، گوجه، نان باگت",image:"./images/jambon-sandwhich.webp",placeholderIcon:"🌭"},{id:"sw-3",categoryId:"sandwiches",isFeatured:!1,title:"هات داگ",tag:null,badge:null,price:null,ingredients:"یک عدد هات داگ ۹۰٪، قارچ، پنیر گودا، کاهو، گوجه، سس مخصوص، نان باگت",image:"images/Hotdog.webp",placeholderIcon:"🌭"},{id:"fr-1",categoryId:"fried",isFeatured:!0,title:"فیله سوخاری سه تیکه",tag:null,badge:null,price:null,ingredients:"۳ عدد فیله مرغ سوخاری، ۲۵۰ گرم سیب زمینی سرخ کرده، یک عدد نان بروتچن",image:"./images/Crispy-Chicken-Tenders.webp",placeholderIcon:"🍗"},{id:"fr-2",categoryId:"fried",isFeatured:!1,title:"فیله سوخاری چهار تیکه",tag:null,badge:null,price:null,ingredients:"۴ عدد فیله مرغ سوخاری، ۲۵۰ گرم سیب زمینی سرخ کرده، یک عدد نان بروتچن",image:"./images/4-Crispe.webp",placeholderIcon:"🍗"},{id:"fr-3",categoryId:"fried",isFeatured:!1,title:"قارچ سوخاری",tag:null,badge:null,price:null,ingredients:"۲۴۰ گرم قارچ سوخاری",image:"./images/Mashroom.webp",placeholderIcon:"🍄"},{id:"sd-1",categoryId:"sides",isFeatured:!0,title:"سیب زمینی سرخ‌کرده",tag:null,badge:null,price:null,ingredients:"۲۵۰ گرم سیب زمینی سرخ کرده",image:"./images/French-Fries.webp",placeholderIcon:"🍟"},{id:"sd-2",categoryId:"sides",isFeatured:!1,title:"سیب‌زمینی ویژه",tag:null,badge:null,price:null,ingredients:"۳۰۰ گرم سیب زمینی، ژامبون گوشت، قارچ، فلفل دلمه ای",image:"./images/Fries-Special.webp",placeholderIcon:"🍟"},{id:"dr-1",categoryId:"drinks",isFeatured:!0,title:"نوشابه خانواده",tag:null,badge:null,price:null,ingredients:"",image:"./images/Big-Coke.webp",placeholderIcon:"🥤"},{id:"dr-2",categoryId:"drinks",isFeatured:!1,title:"نوشابه کوچک",tag:null,badge:null,price:null,ingredients:"",image:"./images/Coke.webp",placeholderIcon:"🥤"},{id:"dr-3",categoryId:"drinks",isFeatured:!1,title:"دلستر",tag:null,badge:null,price:null,ingredients:"",image:"./images/Delester.webp",placeholderIcon:"🥤"},{id:"dr-4",categoryId:"drinks",isFeatured:!1,title:"دوغ",tag:null,badge:null,price:null,ingredients:"",image:"./images/Dogh.webp",placeholderIcon:"🥤"},{id:"dr-5",categoryId:"drinks",isFeatured:!1,title:"آب معدنی کوچک",tag:null,badge:null,price:null,ingredients:"",image:"./images/Water.webp",placeholderIcon:"💧"}],ae={restaurant:K,categories:ee,items:te},ne={cx:260,cy:210,radius:115},se={cx:260,cy:210,radius:185},re=[{id:"dowlat",name:"دولت (کلاهدوز)",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۱۵ تا ۲۵ دقیقه",desc:"محل استقرار رستوران در خیابان کلاهدوز — سریع‌ترین ارسال با پیک مستقیم آتیش",x:195,y:205},{id:"dibaji",name:"دیباجی",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۱۵ تا ۲۵ دقیقه",desc:"محدوده همجوار رستوران (خیابان دیباجی جنوبی و شمالی) — ارسال مستقیم و فوق‌سریع با پیک اختصاصی",x:250,y:145},{id:"ekhtiarieh",name:"اختیاریه",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۲۰ تا ۳۰ دقیقه",desc:"محدوده شمالی کلاهدوز تا بزرگراه صدر — ارسال سریع و مستقیم با پیک اختصاصی",x:320,y:145},{id:"darrous",name:"دروس",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۲۰ تا ۳۰ دقیقه",desc:"محدوده مرکزی و جنوبی رستوران (پایین خیابان دولت) — ارسال مستقیم و گرم با پیک اختصاصی آتیش",x:260,y:285},{id:"pasdaran",name:"پاسداران",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۲۰ تا ۳۰ دقیقه",desc:"ضلع شرقی رستوران — در محدوده تحت پوشش سریع پیک مستقیم آتیش",x:360,y:215},{id:"gholhak",name:"قلهک",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۲۵ تا ۳۵ دقیقه",desc:"ضلع غربی و محدوده خیابان شریعتی — در محدوده پوشش سریع پیک مستقیم رستوران",x:160,y:245},{id:"qeytarieh",name:"قیطریه / اندرزگو",zone:"express",badge:"اسنپ‌فود / پیک اکسپرس 🛵",time:"۳۰ تا ۴۰ دقیقه",desc:"بالای بزرگراه صدر — ارسال با پیک اکسپرس رستوران یا سفارش مستقیم از طریق اسنپ‌فود",x:175,y:90},{id:"tajrish",name:"تجریش",zone:"express",badge:"اسنپ‌فود / پیک اکسپرس 🛵",time:"۳۵ تا ۴۵ دقیقه",desc:"شعاع اکسپرس شمال غرب تهران — سفارش تلفنی یا در اسنپ‌فود",x:105,y:65},{id:"niavaran",name:"نیاوران",zone:"express",badge:"اسنپ‌فود / پیک اکسپرس 🛵",time:"۳۵ تا ۴۵ دقیقه",desc:"شعاع اکسپرس شمال تهران — سفارش تلفنی یا در اسنپ‌فود",x:315,y:55},{id:"heravi",name:"هروی",zone:"express",badge:"اسنپ‌فود / پیک اکسپرس 🛵",time:"۳۰ تا ۴۰ دقیقه",desc:"ضلع جنوب‌شرق پاسداران — ارسال با پیک اکسپرس رستوران یا اسنپ‌فود",x:415,y:275},{id:"mirdamad",name:"میرداماد / ظفر",zone:"express",badge:"اسنپ‌فود / پیک اکسپرس 🛵",time:"۳۰ تا ۴۰ دقیقه",desc:"جنوب قلهک و شریعتی — شعاع تحت پوشش با پیک اکسپرس و اسنپ‌فود",x:135,y:310},{id:"vanak",name:"ونک",zone:"express",badge:"اسنپ‌فود / پیک اکسپرس 🛵",time:"۳۵ تا ۴۵ دقیقه",desc:"شعاع اکسپرس جنوب‌غرب — سفارش آنلاین در اسنپ‌فود یا تلفنی",x:90,y:345},{id:"seyedkhandan",name:"سیدخندان",zone:"express",badge:"اسنپ‌فود / پیک اکسپرس 🛵",time:"۳۵ تا ۴۵ دقیقه",desc:"شعاع اکسپرس جنوب — سفارش آنلاین در اسنپ‌فود یا تلفنی",x:215,y:375}],ie="این نقشه فقط نمایی تقریبی از محدوده ارسال است؛ مرزها و فاصله‌ها دقیق نیستند. برای استعلام دقیق آدرس خود، با شماره ۲۲۵۶۱۹۴۹ تماس حاصل فرمایید.",G={restaurantArea:ne,snappfoodArea:se,neighborhoods:re,note:ie},de="/images/logo.webp";let x=ae;var X,Y;let q=((Y=(X=x.categories)==null?void 0:X[0])==null?void 0:Y.id)||"american-pizzas",y="",C=!1,f=JSON.parse(localStorage.getItem("atish_order_tray")||"{}"),L=3,M="darrous",B=null;function h(e){if(e==null)return"";const i=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];return e.toString().replace(/\d/g,t=>i[parseInt(t,10)])}function _(){return Object.values(f).reduce((e,i)=>e+i,0)}function P(){localStorage.setItem("atish_order_tray",JSON.stringify(f)),Z()}const b={search:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>',phone:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',scooter:'<svg class="w-5 h-5 -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M14 9h4l4 4v5h-3"/><circle stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" cx="19" cy="18" r="2"/><circle stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" cx="7" cy="18" r="2"/></svg>',instagram:'<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',clock:'<svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',location:'<svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',close:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M6 18L18 6M6 6l12 12"/></svg>',menuIcon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M4 6h16M4 12h16M4 18h16"/></svg>',tray:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>',plus:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>',minus:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20 12H4"/></svg>',trash:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>',layers:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>',copy:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>'},E=[{title:"نان کنجدی تازه",desc:"نان لطیف و معطر دست‌ساز با کنجد درجه یک.",icon:"🍞"},{title:"سس مخصوص آتیش",desc:"فرمول انحصاری و دست‌ساز فست‌فود آتیش با عطر ادویه‌جات ویژه و چاشنی دلپذیر.",icon:"🍯"},{title:"پنیر گودا",desc:"ورقه‌های پنیر گودا روی برگر گرم با طعم اصیل و لذیذ.",icon:"🧀"},{title:"گوشت خالص برگر دست‌ساز",desc:"۱۰۰٪ گوشت خالص و گرم گوساله با طبخ مخصوص و حفظ کامل آبدار بودن گوشت.",icon:"🥩"},{title:"قارچ و پیاز",desc:"ترکیب قارچ تفت‌داده و پیاز که طعم فوق‌العاده‌ای به آتیش برگر می‌بخشد.",icon:"🍄"},{title:"خیارشور و سبزیجات تازه",desc:"خیارشور تازه، کاهو پیچ ترد و گوجه فرنگی به همراه نان تازه کنجدی.",icon:"🥒"}];function R(e){const i=(x==null?void 0:x.restaurant)||A,{neighborhoods:t}=G,a=t.find(n=>n.id===e);if(!a)return;M=e;const r=a.zone==="direct";document.querySelectorAll(".delivery-chip-btn").forEach(n=>{const o=n.dataset.id===e,d=t.find(g=>g.id===n.dataset.id),c=d?d.name:"";n.className=`delivery-chip-btn text-[11px] px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${o?"bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-md shadow-orange-500/30 scale-105":"bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:bg-white/[0.08] hover:text-white"}`,n.innerHTML=`<span>📍</span><span>${c}</span>${o?'<span class="text-xs">✓</span>':""}`});const s=document.getElementById("delivery-status-card");if(s){s.className=`p-4 rounded-2xl border transition-all duration-300 mb-4 ${r?"bg-gradient-to-br from-emerald-950/40 via-[#18181c] to-emerald-950/20 border-emerald-500/40 shadow-lg shadow-emerald-950/30":"bg-gradient-to-br from-pink-950/40 via-[#18181c] to-pink-950/20 border-pink-500/40 shadow-lg shadow-pink-950/30"}`;const n=document.getElementById("delivery-card-title");n&&(n.textContent=`ارسال به ${a.name}`);const o=document.getElementById("delivery-card-badge");o&&(o.textContent=a.badge,o.className=`text-[11px] font-bold px-2.5 py-1 rounded-full ${r?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-pink-500/20 text-pink-300 border border-pink-500/30"}`);const d=document.getElementById("delivery-card-time");d&&(d.textContent=a.time);const c=document.getElementById("delivery-card-desc");c&&(c.textContent=a.desc);const g=document.getElementById("delivery-card-actions");g&&(g.innerHTML=`
        <a id="delivery-call-link" href="tel:${i.phone||A.phoneNumber}" class="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-xs shadow-md transition">
          ${b.phone}
          <span>سفارش تلفنی به ${a.name}</span>
          <span dir="ltr" class="inline-flex items-center tracking-wider mr-1 text-[11px]">
            (<span>۰۲۱</span><span>-</span><span>۲۲۵۶۱۹۴۹</span>)
          </span>
        </a>
        ${r?"":`
          <a href="${i.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-pink-500/15 border border-pink-500/30 text-pink-400 hover:bg-pink-500/25 font-bold text-xs transition">
            ${b.scooter}
            <span>سفارش در اسنپ‌فود</span>
          </a>
        `}
      `)}const l=document.getElementById("delivery-active-pulse");l&&l.setAttribute("transform",`translate(${a.x} ${a.y})`),document.querySelectorAll("#delivery-map-text-labels text").forEach(n=>{const o=n.dataset.id===e;n.classList.toggle("active-place",o)}),document.querySelectorAll(".delivery-pin-group").forEach(n=>{const o=n.dataset.id===e,d=n.querySelector("circle");if(d){const c=t.find(g=>g.id===n.dataset.id);d.setAttribute("r",o?"9":"6"),d.setAttribute("stroke-width",o?"2.5":"1.5"),d.setAttribute("fill",o?"#f59e0b":(c==null?void 0:c.zone)==="direct"?"#ef4444":"#ff00a6"),d.setAttribute("fill-opacity",o?"1":"0.85")}})}function le(e){const{restaurantArea:i,snappfoodArea:t,neighborhoods:a,note:r}=G,s=a.find(n=>n.id===M)||a[0],l=s.zone==="direct";return`
    <section id="delivery-area" class="w-full max-w-7xl mx-auto rounded-3xl glass-card overflow-hidden mt-10 p-4 sm:p-6 lg:p-8 border border-white/[0.08] shadow-2xl text-right" aria-labelledby="delivery-title">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        <!-- Radar Map (6 cols on lg desktop) -->
        <div class="lg:col-span-6 w-full flex justify-center">
          <div class="relative w-full max-w-[500px] rounded-2xl overflow-hidden border border-white/[0.1] bg-[#16181b] shadow-xl">
            <svg id="delivery-radar-svg" viewBox="0 0 520 420" class="w-full h-auto block select-none" role="img" aria-labelledby="delivery-map-title delivery-map-desc">
              <title id="delivery-map-title">نمای هوشمند محدوده ارسال آتیش</title>
              <desc id="delivery-map-desc">دایره قرمز محدوده پیک مستقیم و خط‌چین صورتی محدوده اسنپ‌فود است.</desc>
              <defs>
                <pattern id="delivery-grid" width="42" height="42" patternUnits="userSpaceOnUse">
                  <path d="M42 0H0V42" fill="none" stroke="#ffffff" stroke-opacity=".03"/>
                </pattern>
              </defs>
              <rect width="520" height="420" fill="#14171a"/>
              <rect width="520" height="420" fill="url(#delivery-grid)"/>
              <g fill="#1a2822" opacity=".65">
                <path d="M0 0H177L160 35 100 54 59 102 0 83Z"/>
                <path d="M360 0H520V100L476 85 438 36Z"/>
                <path d="M16 330L81 317 114 377 83 420H0Z"/>
              </g>
              <g fill="none" stroke="#2b3135" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
                <!-- بزرگراه صدر (Sadr Expressway) -->
                <path d="M-20 115 L145 108 L260 116 L380 98 L545 115"/>
                <!-- خیابان شهید کلاهدوز / دولت (Dowlat Street) -->
                <path d="M-20 208 L140 206 L260 210 L370 212 L545 218"/>
                <!-- خیابان شریعتی (Shariati Street) -->
                <path d="M145 -10 L145 108 L140 206 L135 315 L130 430"/>
                <!-- خیابان دیباجی (Dibaji Street) -->
                <path d="M255 116 L255 210"/>
                <!-- خیابان پاسداران (Pasdaran Avenue) -->
                <path d="M375 -10 L375 100 L370 212 L365 315 L360 430"/>
                <!-- بزرگراه همت / میرداماد (Southern Corridor) -->
                <path d="M-20 345 L135 335 L260 348 L390 340 L545 352"/>
              </g>
              <!-- Snappfood Zone Radius -->
              <circle cx="${t.cx}" cy="${t.cy}" r="${t.radius}" fill="#ff00a6" fill-opacity=".04" stroke="#ff00a6" stroke-width="2" stroke-dasharray="8 8"/>
              <!-- Direct Atish Delivery Zone Radius -->
              <circle cx="${i.cx}" cy="${i.cy}" r="${i.radius}" fill="#ef4444" fill-opacity=".12" stroke="#ef4444" stroke-width="2.5"/>
              
              <!-- Neighborhood Pin Markers -->
              <g id="delivery-map-pins">
                ${a.map(n=>{const o=n.id===M;return`
                    <g class="delivery-pin-group cursor-pointer" data-id="${n.id}" transform="translate(${n.x} ${n.y})">
                      <circle r="${o?"9":"6"}" fill="${o?"#f59e0b":n.zone==="direct"?"#ef4444":"#ff00a6"}" stroke="#ffffff" stroke-width="${o?"2.5":"1.5"}" fill-opacity="${o?"1":"0.85"}"/>
                    </g>
                  `}).join("")}
              </g>

              <!-- Active Highlight Pin Pulse -->
              <g id="delivery-active-pulse" transform="translate(${s.x} ${s.y})">
                <circle r="22" fill="#f59e0b" fill-opacity=".35" class="animate-ping"/>
              </g>

              <!-- Neighborhood Labels -->
              <g class="delivery-place-labels" id="delivery-map-text-labels">
                ${a.map(n=>{const o=n.id===M;return`<text x="${n.x}" y="${n.y-11}" text-anchor="middle" data-id="${n.id}" class="${o?"active-place":""}">${n.name}</text>`}).join("")}
              </g>

              <!-- Restaurant Center Marker -->
              <g transform="translate(260 210)">
                <circle r="32" fill="#f59e0b" fill-opacity=".15" class="animate-pulse"/>
                <circle r="16" fill="#f59e0b" stroke="#14171a" stroke-width="4"/>
                <circle r="5" fill="#14171a"/>
              </g>
              <text x="260" y="196" class="delivery-brand-label" text-anchor="middle">🔥 آتیش</text>
              <text x="28" y="394" class="delivery-map-caption">نقشه تعاملی دلیوری · کلیک روی محله</text>
            </svg>
          </div>
        </div>

        <!-- Info & Actions (6 cols on lg desktop) -->
        <div class="lg:col-span-6 flex flex-col justify-center">
          <div class="flex items-center justify-between gap-3 mb-2">
            <span class="text-xs font-bold text-amber-400">🛵 استعلام هوشمند محدوده پیک</span>
            <span class="text-[11px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded-full">شمال تهران</span>
          </div>
          <h2 id="delivery-title" class="text-xl lg:text-2xl font-black text-white mb-2">محله خود را انتخاب کنید</h2>
          <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-3 font-light">
            با لمس هر محله، وضعیت ارسال، زمان تقریبی و نوع پیک (پیک مستقیم یا اسنپ‌فود) را استعلام کنید:
          </p>

          <!-- Interactive Neighborhood Filter Chips -->
          <div class="flex flex-wrap gap-1.5 mb-4 max-h-36 overflow-y-auto p-1.5 rounded-2xl bg-black/30 border border-white/[0.06]" id="delivery-chips-container">
            ${a.map(n=>{const o=n.id===M;return`
                <button 
                  type="button" 
                  data-id="${n.id}" 
                  class="delivery-chip-btn text-[11px] px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${o?"bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-md shadow-orange-500/30 scale-105":"bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:bg-white/[0.08] hover:text-white"}"
                >
                  <span>📍</span>
                  <span>${n.name}</span>
                  ${o?'<span class="text-xs">✓</span>':""}
                </button>
              `}).join("")}
          </div>

          <!-- Dynamic Result Card -->
          <div id="delivery-status-card" class="p-4 rounded-2xl border transition-all duration-300 mb-4 ${l?"bg-gradient-to-br from-emerald-950/40 via-[#18181c] to-emerald-950/20 border-emerald-500/40 shadow-lg shadow-emerald-950/30":"bg-gradient-to-br from-pink-950/40 via-[#18181c] to-pink-950/20 border-pink-500/40 shadow-lg shadow-pink-950/30"}">
            <div class="flex items-center justify-between gap-2 mb-2">
              <div class="flex items-center gap-2">
                <span class="text-base">${l?"⚡️":"🛵"}</span>
                <h3 class="text-sm sm:text-base font-black text-white" id="delivery-card-title">ارسال به ${s.name}</h3>
              </div>
              <span id="delivery-card-badge" class="text-[11px] font-bold px-2.5 py-1 rounded-full ${l?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-pink-500/20 text-pink-300 border border-pink-500/30"}">
                ${s.badge}
              </span>
            </div>
            
            <div class="flex items-center gap-2 text-xs font-bold text-amber-400 mb-2">
              <span>⏱ زمان تقریبی تحویل:</span>
              <span class="text-white" id="delivery-card-time">${s.time}</span>
            </div>

            <p class="text-xs text-zinc-300 leading-relaxed font-light mb-3" id="delivery-card-desc">
              ${s.desc}
            </p>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row gap-2" id="delivery-card-actions">
              <a id="delivery-call-link" href="tel:${e.phone||A.phoneNumber}" class="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-xs shadow-md transition">
                ${b.phone}
                <span>سفارش تلفنی به ${s.name}</span>
                <span dir="ltr" class="inline-flex items-center tracking-wider mr-1 text-[11px]">
                  (<span>۰۲۱</span><span>-</span><span>۲۲۵۶۱۹۴۹</span>)
                </span>
              </a>
              ${l?"":`
                <a href="${e.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-pink-500/15 border border-pink-500/30 text-pink-400 hover:bg-pink-500/25 font-bold text-xs transition">
                  ${b.scooter}
                  <span>سفارش در اسنپ‌فود</span>
                </a>
              `}
            </div>
          </div>

          <!-- Legend -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-3 text-xs">
            <div class="flex items-center gap-2.5">
              <span class="w-3.5 h-3.5 rounded-full border-2 border-red-500 bg-red-500/20 flex-shrink-0"></span>
              <div>
                <strong class="text-white block font-bold text-[11px]">پیک اختصاصی رستوران</strong>
                <span class="text-zinc-400 text-[10px]">دروس، دولت، قلهک، پاسداران</span>
              </div>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="w-3.5 h-3.5 rounded-full border-2 border-dashed border-pink-500 bg-pink-500/20 flex-shrink-0"></span>
              <div>
                <strong class="text-white block font-bold text-[11px]">اسنپ‌فود و اکسپرس</strong>
                <span class="text-zinc-400 text-[10px]">شعاع گسترده‌تر شمال تهران</span>
              </div>
            </div>
          </div>

          <p class="text-[11px] text-zinc-400 leading-relaxed border-t border-white/[0.06] pt-2.5">
            ${r}
          </p>
        </div>

      </div>
    </section>
  `}function oe(){const e=document.getElementById("app");if(!e)return;const i=(x==null?void 0:x.restaurant)||A,t=(x==null?void 0:x.categories)||[],a=_();e.innerHTML=`
    <!-- Responsive Header (Mobile + Desktop) -->
    <header class="sticky top-0 z-40 glass-header border-b border-white/[0.08] px-4 sm:px-6 lg:px-8 py-3">
      <div class="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <!-- Logo & Title -->
        <a href="#" class="flex items-center gap-2.5 flex-shrink-0">
          <div class="w-10 h-10 md:w-11 md:h-11 flex-shrink-0 drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]">
            <img 
              src="${de}" 
              alt="${i.name}" 
              class="w-full h-full object-contain"
            />
          </div>
          <div class="flex flex-col text-right">
            <div class="text-sm md:text-base font-black text-white tracking-tight flex items-center gap-1.5">
              <span>${i.brandTitle}</span>
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <div class="text-[11px] md:text-xs text-amber-400 font-medium">
              ${i.brandSubtitle}
            </div>
          </div>
        </a>

        <!-- Desktop Persistent Search Bar (Visible on md and up) -->
        <div class="hidden md:flex flex-1 max-w-md mx-4">
          <div class="relative w-full">
            <span class="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-zinc-400">
              ${b.search}
            </span>
            <input 
              type="text" 
              id="desktop-search-input" 
              value="${y}"
              placeholder="جستجوی پیتزا، برگر، ساندویچ، سوخاری..." 
              class="w-full bg-[#18181c] border border-white/[0.1] hover:border-amber-500/40 text-white text-xs rounded-xl pr-10 pl-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-zinc-500 transition shadow-inner"
            />
          </div>
        </div>

        <!-- Header Actions -->
        <div class="flex items-center gap-2">
          
          <!-- Desktop Call Button (021 on left) -->
          <a 
            href="tel:${i.phone}"
            class="hidden lg:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25 text-xs font-bold transition"
            title="تماس تلفنی"
          >
            ${b.phone}
            <span class="flex items-center gap-1">
              <span>سفارش:</span>
              <span dir="ltr" class="inline-flex items-center tracking-wider font-semibold">
                <span>۰۲۱</span><span>-</span><span>۲۲۵۶۱۹۴۹</span>
              </span>
            </span>
          </a>

          <!-- Desktop SnappFood Button -->
          <a 
            href="${i.snappfoodUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-pink-500/15 border border-pink-500/30 text-pink-400 hover:bg-pink-500/25 text-xs font-bold transition"
            title="سفارش در اسنپ‌فود"
          >
            ${b.scooter}
            <span>اسنپ‌فود</span>
          </a>

          <!-- PWA Install Button -->
          <button 
            id="btn-install-pwa" 
            class="hidden items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25 text-xs font-bold transition"
            title="نصب اپلیکیشن منوی آتیش"
          >
            <span>📲</span>
            <span class="hidden sm:inline">نصب اپلیکیشن</span>
            <span class="sm:hidden">نصب</span>
          </button>

          <!-- Mobile Search Toggle Button -->
          <button 
            id="toggle-search-btn" 
            aria-label="جستجوی غذا"
            class="md:hidden w-9 h-9 rounded-full bg-[#1e1e24] border border-white/[0.1] hover:border-amber-400/50 flex items-center justify-center text-zinc-300 hover:text-white transition"
          >
            ${b.search}
          </button>

          <!-- Order Tray (List) Button -->
          <button 
            id="open-tray-btn" 
            aria-label="سبد سفارش"
            class="relative px-3.5 h-9 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 hover:text-white flex items-center gap-1.5 text-xs font-bold transition hover:bg-amber-500/30"
          >
            ${b.tray}
            <span>پیش‌فاکتور</span>
            <span id="header-tray-badge" class="${a>0?"":"hidden"} bg-amber-500 text-black font-black text-[10px] px-1.5 py-0.2 rounded-full min-w-[18px] text-center">
              ${h(a)}
            </span>
          </button>
        </div>
      </div>

      <!-- Mobile Expandable Search Input -->
      <div id="search-container" class="${C?"":"hidden"} md:hidden w-full max-w-md mx-auto pt-3">
        <div class="relative">
          <span class="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-zinc-400">
            ${b.search}
          </span>
          <input 
            type="text" 
            id="menu-search-input" 
            value="${y}"
            placeholder="جستجوی پیتزا، برگر، ساندویچ، سوخاری..." 
            class="w-full bg-[#18181c] border border-amber-500/50 text-white text-xs rounded-xl pr-10 pl-9 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-zinc-500 shadow-inner"
          />
          <button 
            id="clear-search-btn" 
            class="${y?"":"hidden"} absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-400 hover:text-white"
          >
            ${b.close}
          </button>
        </div>
      </div>
    </header>

    <!-- Main Responsive Container (Mobile Phone + Desktop) -->
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-28 md:pb-16">

      <!-- Hero Section (Clean & Responsive: 2 cols on Desktop, NO duplicate call/snapp buttons) -->
      <section class="relative rounded-3xl overflow-hidden glass-card p-4 sm:p-6 lg:p-8 mb-6 border border-white/[0.08] shadow-2xl text-right">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          <!-- Hero Text & Concept Info (7 cols on desktop, RTL Right) -->
          <div class="md:col-span-7 flex flex-col justify-center order-2 md:order-1">
            <!-- Badges Bar -->
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>${i.statusBadge}</span>
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-pink-500/15 border border-pink-500/30 text-pink-400">
                ⭐ ۴.۸ در اسنپ‌فود
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500/15 border border-amber-500/30 text-amber-300">
                🛵 ارسال سریع دروس و دولت
              </span>
            </div>

            <!-- Big Title -->
            <h1 class="text-xl sm:text-2xl lg:text-4xl font-black text-white leading-tight mb-2.5">
              طعم اصیل و لذیذ <span class="text-gradient-fire">پیتزا آتیش</span>
            </h1>
            
            <p class="text-zinc-300 text-xs sm:text-sm lg:text-base leading-relaxed mb-5 font-light max-w-2xl">
              پیتزاهای پرملات آمریکایی و ایتالیایی پخته‌شده در فر لینکولن و برگرهای دست‌ساز با گوشت خالص. سفارش آنلاین دلیوری با اسنپ‌فود یا سفارش مستقیم تلفنی با پیک گرم.
            </p>

            <!-- Signature Buttons in First Panel (3D Anatomy + Prominent Instagram) -->
            <div class="flex flex-wrap items-center gap-3">
              <button 
                id="btn-open-anatomy"
                class="py-3 px-5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 hover:from-amber-500/30 hover:to-red-500/30 text-amber-300 hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-amber-500/40 hover:border-amber-400 transition shadow-lg shadow-amber-500/10"
              >
                ${b.layers}
                <span>آناتومی ۳ بعدی آتیش برگر ✨</span>
              </button>

              <a 
                href="https://instagram.com/atishfood" 
                target="_blank" 
                rel="noopener noreferrer"
                class="py-3 px-5 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/35 hover:to-pink-600/35 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 border border-purple-500/40 hover:border-pink-400 transition shadow-lg shadow-pink-500/10"
                title="صفحه رسمی اینستاگرام فست‌فود آتیش"
              >
                <span class="text-zinc-200 text-xs sm:text-sm font-bold">اینستاگرام آتیش</span>
                <span dir="ltr" class="inline-flex items-center gap-1.5 text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded-lg border border-pink-500/20">
                  <span class="w-4 h-4 flex items-center justify-center text-pink-400">${b.instagram}</span>
                  <span class="font-bold tracking-wide text-white">@atishfood</span>
                </span>
              </a>
            </div>
          </div>

          <!-- 3D Burger Artwork Showcase (5 cols on desktop, Left Side) -->
          <div class="md:col-span-5 order-1 md:order-2">
            <div class="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/[0.1] aspect-[16/10] md:aspect-square bg-black group">
              <img 
                src="/images/atish-hero-3d.jpg" 
                alt="کانسپت سه بعدی آتیش برگر"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4">
                <div class="text-right">
                  <span class="text-[11px] font-bold text-amber-400">امضای فست‌فود آتیش</span>
                  <p class="text-sm md:text-base font-black text-white">راز طعم برگر با پنیر گودا</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- Sticky Category Bar (Responsive: scrollable on mobile, centered/wrap on desktop) -->
      <nav class="sticky top-[58px] md:top-[65px] z-30 bg-[#0c0c0e]/95 backdrop-blur-md -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 border-y border-white/[0.08] mb-6">
        <div id="category-bar" class="w-full max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar md:flex-wrap md:justify-center">
          ${t.map(r=>{const s=q===r.id;return`
              <button 
                data-category="${r.id}" 
                class="cat-btn flex-shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${s?"bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-black shadow-md shadow-orange-500/30":"bg-[#18181c] text-zinc-300 border border-white/[0.08] hover:bg-[#24242a] hover:text-white"}"
              >
                <span>${r.icon}</span>
                <span>${r.name}</span>
              </button>
            `}).join("")}
        </div>
      </nav>

      <!-- Main Food Menu Container (Responsive Grid: 2 cols mobile, 3 tablet, 4 desktop) -->
      <main id="menu-container"></main>

      <!-- Delivery Area Radar Section (Responsive Split Card) -->
      ${le(i)}

      <!-- PWA Dedicated Install Banner -->
      <div id="pwa-install-banner" class="w-full max-w-7xl mx-auto rounded-3xl p-5 sm:p-6 bg-gradient-to-r from-amber-500/10 via-[#18181c] to-orange-500/10 border border-amber-500/20 shadow-xl mt-8 text-right">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="flex items-center gap-3.5">
            <div class="w-12 h-12 rounded-2xl bg-black/70 border border-amber-500/30 p-2 flex-shrink-0 shadow-lg flex items-center justify-center">
              <img src="/icons/icon-192.png" alt="آتیش" class="w-full h-full object-contain" />
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-sm sm:text-base font-black text-white">نصب وب‌اپلیکیشن منوی آتیش</h3>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">PWA</span>
              </div>
              <p class="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                دسترسی فوق‌سریع بدون فیلترشکن، عملکرد آفلاین و دسترسی مستقیم با یک لمس روی صفحه گوشی
              </p>
            </div>
          </div>
          <div class="flex items-center gap-2 w-full sm:w-auto">
            <button id="pwa-banner-install-btn" class="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-black font-black text-xs shadow-md shadow-orange-500/30 flex items-center justify-center gap-2 hover:opacity-95 transition">
              <span>📲</span>
              <span>نصب آسان روی صفحه اصلی</span>
            </button>
            <button id="pwa-banner-close-btn" class="w-8 h-8 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white flex items-center justify-center text-xs transition" title="بستن">
              ✕
            </button>
          </div>
        </div>
      </div>

      <!-- Restaurant Info Card (Responsive Footer Section) -->
      <footer id="about-section" class="w-full max-w-7xl mx-auto bg-[#141417] border border-white/[0.08] rounded-3xl p-6 lg:p-8 mt-10 text-right shadow-xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          <!-- Column 1: Brand & Bio -->
          <div>
            <div class="flex items-center gap-2.5 mb-2.5">
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-black font-black text-base shadow-md">
                🔥
              </div>
              <div>
                <h3 class="text-sm md:text-base font-black text-white">${i.brandTitle}</h3>
                <span class="text-[11px] text-zinc-400">${i.tagline}</span>
              </div>
            </div>
            <p class="text-xs text-zinc-400 leading-relaxed font-light">
              منوی دیجیتال رستوران آتیش. ارائه پیتزاها و برگرهای باکیفیت و تازه در محله‌های شمال تهران با امکان سفارش آنلاین در اسنپ‌فود و سفارش تلفنی.
            </p>
          </div>

          <!-- Column 2: Hours & Address -->
          <div class="flex flex-col gap-2.5 text-xs text-zinc-300">
            <div class="flex items-start gap-2">
              ${b.clock}
              <div>
                <span class="text-zinc-400 font-normal">ساعات کاری:</span>
                <span class="text-zinc-100 font-bold mr-1">${h(i.workingHours)}</span>
              </div>
            </div>

            <div class="flex items-start gap-2">
              ${b.location}
              <div>
                <span class="text-zinc-400 font-normal">آدرس:</span>
                <span class="text-zinc-100 font-bold mr-1">${h(i.address)}</span>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>

    <!-- Floating Sticky Order Tray Bar (Responsive Mobile/Desktop) -->
    <div 
      id="floating-tray-bar" 
      class="${a>0?"":"hidden"} fixed bottom-20 md:bottom-6 inset-x-4 md:inset-x-auto md:left-6 max-w-sm md:w-80 z-40 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black px-4 py-2.5 rounded-2xl shadow-2xl flex items-center justify-between cursor-pointer animate-pulse-glow"
    >
      <div class="flex items-center gap-2">
        <span class="text-base">📋</span>
        <span class="text-xs font-black">سفارش شما: <span id="floating-tray-count">${h(a)}</span> قلم</span>
      </div>
      <div class="flex items-center gap-1 text-[11px] bg-black/20 px-2.5 py-1 rounded-xl">
        <span>مشاهده و تماس</span>
        <span>←</span>
      </div>
    </div>

    <!-- Floating Contact Bottom Pill Bar (MOBILE ONLY: md:hidden) -->
    <nav class="contact-nav md:hidden" aria-label="دسترسی سریع">
      <div class="contact-nav-inner">
        <button id="nav-menu-btn" class="contact-nav-item contact-nav-menu">
          ${b.menuIcon}<span>منو</span>
        </button>
        <button id="nav-tray-btn" class="contact-nav-item contact-nav-tray relative">
          ${b.tray}<span>پیش‌فاکتور</span>
          <span id="nav-tray-badge" class="${a>0?"":"hidden"} absolute top-1 right-3 bg-amber-400 text-black text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center">
            ${h(a)}
          </span>
        </button>
        <a href="tel:${i.phone}" class="contact-nav-item contact-nav-call" aria-label="تماس با آتیش">
          ${b.phone}<span>تماس</span>
        </a>
        <a href="${i.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="contact-nav-item contact-nav-snapp" aria-label="اسنپ‌فود">
          ${b.scooter}<span>اسنپ‌فود</span>
        </a>
      </div>
    </nav>

    <!-- Item Detail Sheet Modal -->
    <div id="item-modal" class="fixed inset-0 z-50 hidden bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity">
      <div id="item-modal-box" class="w-full max-w-md bg-[#18181c] border-t sm:border border-white/[0.1] rounded-t-3xl sm:rounded-3xl max-h-[90vh] overflow-y-auto shadow-2xl transform transition-transform">
      </div>
    </div>

    <!-- Order Tray Drawer Modal -->
    <div id="tray-modal" class="fixed inset-0 z-50 hidden bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity">
      <div id="tray-modal-box" class="w-full max-w-md bg-[#18181c] border-t sm:border border-white/[0.12] rounded-t-3xl sm:rounded-3xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col text-right">
      </div>
    </div>

    <!-- 3D Burger Anatomy Explorer Modal -->
    <div id="anatomy-modal" class="fixed inset-0 z-50 hidden bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity">
      <div class="w-full max-w-md bg-[#141417] border-t sm:border border-amber-500/30 rounded-t-3xl sm:rounded-3xl max-h-[90vh] overflow-y-auto shadow-2xl p-5 text-right">
        <div class="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
          <div class="flex items-center gap-2">
            <span class="text-xl">✨</span>
            <h2 class="text-sm font-black text-white">آناتومی و راز طعم آتیش برگر</h2>
          </div>
          <button id="close-anatomy-btn" class="w-7 h-7 rounded-full bg-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white">
            ${b.close}
          </button>
        </div>

        <div class="mb-4 text-center">
          <div class="inline-block relative rounded-xl overflow-hidden border border-white/[0.1] shadow-lg max-h-48">
            <img src="/images/atish-hero-3d.jpg" alt="برگر آتیش" class="w-full h-auto object-cover max-w-xs mx-auto" />
          </div>
        </div>

        <!-- Layer Selector Tabs -->
        <div class="grid grid-cols-3 sm:grid-cols-6 gap-1 mb-4" id="anatomy-layers-tabs">
          ${E.map((r,s)=>`
            <button 
              data-layer="${s}" 
              class="anatomy-tab-btn p-1.5 rounded-xl border text-center text-xs font-bold transition ${s===L?"bg-amber-500/20 border-amber-500 text-amber-300":"bg-white/[0.04] border-white/[0.08] text-zinc-400 hover:text-white"}"
            >
              <div class="text-sm mb-0.5">${r.icon}</div>
              <div class="truncate text-[9px]">لایه ${h(s+1)}</div>
            </button>
          `).join("")}
        </div>

        <!-- Layer Details Box -->
        <div id="anatomy-details-box" class="bg-[#1c1c22] border border-amber-500/20 rounded-xl p-3.5 mb-4">
          <div class="flex items-center gap-2 mb-1.5">
            <span id="anatomy-icon" class="text-xl">${E[L].icon}</span>
            <h3 id="anatomy-title" class="text-sm font-black text-amber-400">${E[L].title}</h3>
          </div>
          <p id="anatomy-desc" class="text-xs text-zinc-300 leading-relaxed font-light">
            ${E[L].desc}
          </p>
        </div>

        <button 
          id="anatomy-add-btn"
          class="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-xs shadow-md shadow-orange-500/30 flex items-center justify-center gap-1.5"
        >
          ${b.plus}
          <span>افزودن آتیش برگر به لیست سفارش</span>
        </button>
      </div>
    </div>

    <!-- iOS PWA Install Guide Modal -->
    <div id="ios-install-modal" class="fixed inset-0 z-50 hidden bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity">
      <div class="w-full max-w-md bg-[#18181c] border-t sm:border border-white/[0.12] rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl text-right">
        <div class="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
          <div class="flex items-center gap-2">
            <span class="text-xl">📲</span>
            <h3 class="text-sm font-black text-white">راهنمای نصب در آیفون (iOS)</h3>
          </div>
          <button id="close-ios-modal-btn" class="w-7 h-7 rounded-full bg-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white">
            ✕
          </button>
        </div>
        <div class="space-y-3 mb-5 text-xs text-zinc-300">
          <div class="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold flex-shrink-0 text-xs">۱</span>
            <p class="leading-relaxed">در پایین مرورگر Safari، دکمه اشتراک‌گذاری <strong class="text-white">Share (⎋)</strong> را بزنید.</p>
          </div>
          <div class="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold flex-shrink-0 text-xs">۲</span>
            <p class="leading-relaxed">در منوی باز شده به پایین اسکرول کرده و گزینه <strong class="text-white">«Add to Home Screen» (افزودن به صفحه اصلی)</strong> را انتخاب کنید.</p>
          </div>
          <div class="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold flex-shrink-0 text-xs">۳</span>
            <p class="leading-relaxed">در بالای صفحه روی گزینه <strong class="text-amber-400 font-bold">Add</strong> ضربه بزنید تا آیکون به صفحه اصلی گوشی اضافه شود.</p>
          </div>
        </div>
        <button id="confirm-ios-modal-btn" class="w-full py-2.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold text-xs hover:bg-amber-500/30 transition">
          متوجه شدم
        </button>
      </div>
    </div>

    <!-- Toast Notification -->
    <div id="toast-notification" class="fixed top-16 left-1/2 -translate-x-1/2 z-50 pointer-events-none opacity-0 -translate-y-4 bg-emerald-500 text-white font-black text-xs px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-1.5">
      <span>✓</span>
      <span id="toast-text">به لیست سفارش اضافه شد</span>
    </div>
  `,ce(),T()}function Z(){var s;const e=_(),i=document.getElementById("header-tray-badge");i&&(i.textContent=h(e),i.classList.toggle("hidden",e===0));const t=document.getElementById("floating-tray-bar"),a=document.getElementById("floating-tray-count");t&&a&&(a.textContent=h(e),t.classList.toggle("hidden",e===0));const r=document.getElementById("nav-tray-badge");r&&(r.textContent=h(e),r.classList.toggle("hidden",e===0)),(s=x.items)==null||s.forEach(l=>{const n=document.getElementById(`card-tray-count-${l.id}`);if(n){const o=J(l);o>0?(n.textContent=h(o),n.classList.remove("hidden"),n.classList.add("flex")):(n.classList.add("hidden"),n.classList.remove("flex"))}})}function S(e){const i=document.getElementById("toast-notification"),t=document.getElementById("toast-text");!i||!t||(t.textContent=e,i.classList.remove("opacity-0","-translate-y-4"),i.classList.add("opacity-100","translate-y-0"),setTimeout(()=>{i.classList.add("opacity-0","-translate-y-4"),i.classList.remove("opacity-100","translate-y-0")},2200))}function ce(){var k,u;const e=document.getElementById("toggle-search-btn"),i=document.getElementById("search-container"),t=document.getElementById("menu-search-input"),a=document.getElementById("clear-search-btn");e&&i&&e.addEventListener("click",()=>{C=!C,i.classList.toggle("hidden",!C),C&&t&&t.focus()});const r=document.getElementById("desktop-search-input");r&&r.addEventListener("input",p=>{y=p.target.value.trim().toLowerCase(),t&&(t.value=y),T()}),t&&t.addEventListener("input",p=>{y=p.target.value.trim().toLowerCase(),r&&(r.value=y),a&&a.classList.toggle("hidden",y.length===0),T()}),a&&a.addEventListener("click",()=>{t&&(t.value=""),y="",a.classList.add("hidden"),T()});const s=document.querySelectorAll(".cat-btn");s.forEach(p=>{p.addEventListener("click",()=>{s.forEach(z=>{z.className="cat-btn flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 bg-[#18181c] text-zinc-300 border border-white/[0.08] hover:bg-[#24242a] hover:text-white"}),p.className="cat-btn flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-black shadow-md shadow-orange-500/30",y&&(y="",t&&(t.value=""),a==null||a.classList.add("hidden"),T()),q=p.dataset.category;const $=document.getElementById(`sec-${q}`);if($){const w=document.body.getBoundingClientRect().top,Q=$.getBoundingClientRect().top-w;window.scrollTo({top:Q-120,behavior:"smooth"})}})});const l=document.getElementById("open-tray-btn"),n=document.getElementById("floating-tray-bar"),o=document.getElementById("nav-tray-btn"),d=document.getElementById("tray-modal"),c=()=>{D(),d==null||d.classList.remove("hidden")};l==null||l.addEventListener("click",c),n==null||n.addEventListener("click",c),o==null||o.addEventListener("click",c),d==null||d.addEventListener("click",p=>{p.target===d&&d.classList.add("hidden")});const g=document.getElementById("btn-open-anatomy"),m=document.getElementById("anatomy-modal"),v=document.getElementById("close-anatomy-btn");g==null||g.addEventListener("click",()=>{m==null||m.classList.remove("hidden")}),v==null||v.addEventListener("click",()=>{m==null||m.classList.add("hidden")}),m==null||m.addEventListener("click",p=>{p.target===m&&m.classList.add("hidden")}),document.querySelectorAll(".anatomy-tab-btn").forEach(p=>{p.addEventListener("click",()=>{L=parseInt(p.dataset.layer,10),document.querySelectorAll(".anatomy-tab-btn").forEach(($,z)=>{$.className=`anatomy-tab-btn p-1.5 rounded-xl border text-center text-xs font-bold transition ${z===L?"bg-amber-500/20 border-amber-500 text-amber-300":"bg-white/[0.04] border-white/[0.08] text-zinc-400 hover:text-white"}`}),document.getElementById("anatomy-icon").textContent=E[L].icon,document.getElementById("anatomy-title").textContent=E[L].title,document.getElementById("anatomy-desc").textContent=E[L].desc})}),(k=document.getElementById("anatomy-add-btn"))==null||k.addEventListener("click",()=>{H("b-7"),m==null||m.classList.add("hidden"),S("آتیش برگر به لیست اضافه شد")});const I=document.getElementById("item-modal");I==null||I.addEventListener("click",p=>{p.target===I&&I.classList.add("hidden")}),(u=document.getElementById("nav-menu-btn"))==null||u.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),document.querySelectorAll(".delivery-chip-btn").forEach(p=>{p.addEventListener("click",()=>{R(p.dataset.id)})}),document.querySelectorAll(".delivery-pin-group").forEach(p=>{p.addEventListener("click",()=>{R(p.dataset.id)})}),document.querySelectorAll("#delivery-map-text-labels text").forEach(p=>{p.addEventListener("click",()=>{R(p.dataset.id)})})}let j={};function J(e){if(!e)return 0;let i=f[e.id]||0;return e.shapes&&e.shapes.forEach(t=>{i+=f[`${e.id}:${t.id}`]||0}),i}function V(e){var t,a;if(!e)return null;if(e.includes(":")){const[r,s]=e.split(":"),l=x.items.find(o=>o.id===r);if(!l)return null;const n=((t=l.shapes)==null?void 0:t.find(o=>o.id===s))||((a=l.shapes)==null?void 0:a[0]);return{key:e,id:l.id,title:`${l.title} (${(n==null?void 0:n.name)||"کلاسیک"})`,image:(n==null?void 0:n.image)||l.image,ingredients:(n==null?void 0:n.id)==="heart"?"خمیر پیتزا طرح قلبی، "+(l.ingredients||""):l.ingredients,placeholderIcon:"🍕"}}const i=x.items.find(r=>r.id===e);return i?{key:e,id:i.id,title:i.title,image:i.image,ingredients:i.ingredients,placeholderIcon:i.placeholderIcon}:null}function H(e){f[e]=(f[e]||0)+1,P()}function pe(e){f[e]&&(f[e]-=1,f[e]<=0&&delete f[e],P(),D())}function me(e){delete f[e],P(),D()}function be(){f={},P(),D()}function D(){var s,l,n,o;const e=document.getElementById("tray-modal-box"),i=(x==null?void 0:x.restaurant)||A;if(!e)return;const t=Object.keys(f),a=_();if(t.length===0){e.innerHTML=`
      <div class="p-6 text-center">
        <div class="w-14 h-14 mx-auto rounded-full bg-white/[0.05] flex items-center justify-center text-2xl mb-3">
          📋
        </div>
        <h3 class="text-sm font-black text-white mb-1.5">لیست سفارش شما خالی است</h3>
        <p class="text-xs text-zinc-400 mb-5">غذاهای مورد علاقه خود را با کلیک روی علامت (+) اضافه کنید.</p>
        <button 
          id="close-empty-tray-btn"
          class="w-full py-2.5 rounded-xl bg-amber-500 text-black font-black text-xs"
        >
          مشاهده منو و افزودن غذا
        </button>
      </div>
    `,(s=document.getElementById("close-empty-tray-btn"))==null||s.addEventListener("click",()=>{var d;(d=document.getElementById("tray-modal"))==null||d.classList.add("hidden")});return}let r=`سلام، سفارش من از منوی دیجیتال آتیش:
`;t.forEach(d=>{const c=V(d);c&&(r+=`• ${c.title} (${h(f[d])} عدد)
`)}),r+=`
لطفاً هزینه و زمان ارسال را تأیید فرمایید.`,e.innerHTML=`
    <!-- Modal Header -->
    <div class="p-4 border-b border-white/[0.08] flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="text-xl">📋</span>
        <div>
          <h2 class="text-sm font-black text-white">لیست سفارش شما</h2>
          <span class="text-[11px] text-amber-400">${h(a)} قلم غذا آماده سفارش</span>
        </div>
      </div>
      <button id="close-tray-btn" class="w-7 h-7 rounded-full bg-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white">
        ${b.close}
      </button>
    </div>

    <!-- Friendly Non-Payment Notice for Iranian Customers -->
    <div class="m-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300 leading-relaxed flex items-start gap-2">
      <span class="text-sm flex-shrink-0">💡</span>
      <p>
        این لیست برای راحتی شما در آماده‌سازی سفارش ایجاد شده است. سفارش نهایی به صورت مستقیم از طریق تماس تلفنی یا اسنپ‌فود ثبت می‌شود.
      </p>
    </div>

    <!-- Items List -->
    <div class="px-3 py-1 flex flex-col gap-2 max-h-60 overflow-y-auto">
      ${t.map(d=>{const c=V(d);if(!c)return"";const g=f[d];return`
          <div class="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div class="flex items-center gap-2.5">
              <div class="w-10 h-10 rounded-lg overflow-hidden bg-black/40 flex-shrink-0 border border-white/[0.08]">
                <img src="${F(c.image)}" alt="${c.title}" class="w-full h-full object-cover" onerror="this.src='/images/atish-burger.jpg'" />
              </div>
              <div class="text-right">
                <h4 class="text-xs font-bold text-white">${c.title}</h4>
                <span class="text-[10px] text-zinc-400 font-light truncate max-w-[120px] block">${c.ingredients||"آتیش"}</span>
              </div>
            </div>

            <!-- Quantity Counter Controls -->
            <div class="flex items-center gap-1.5 bg-[#222228] border border-white/[0.1] rounded-lg px-1.5 py-1">
              <button data-action="decrease" data-id="${d}" class="w-5 h-5 rounded bg-white/[0.06] flex items-center justify-center text-zinc-300 hover:text-white">
                ${b.minus}
              </button>
              <span class="text-xs font-black text-amber-400 px-1 min-w-[16px] text-center">${h(g)}</span>
              <button data-action="increase" data-id="${d}" class="w-5 h-5 rounded bg-white/[0.06] flex items-center justify-center text-zinc-300 hover:text-white">
                ${b.plus}
              </button>
              <button data-action="delete" data-id="${d}" class="w-5 h-5 rounded text-red-400 hover:text-red-300 ml-0.5">
                ${b.trash}
              </button>
            </div>
          </div>
        `}).join("")}
    </div>

    <!-- Action Buttons (021 on LEFT) -->
    <div class="p-3 mt-auto border-t border-white/[0.08] flex flex-col gap-2">
      <a 
        href="tel:${i.phone}"
        class="w-full py-3 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/25"
      >
        ${b.phone}
        <span class="flex items-center gap-1">
          <span>تماس تلفنی و ثبت سفارش</span>
          <span dir="ltr" class="inline-flex items-center font-bold tracking-wider">
            (<span>۰۲۱</span><span>-</span><span>۲۲۵۶۱۹۴۹</span>)
          </span>
        </span>
      </a>

      <a 
        href="${i.snappfoodUrl}" 
        target="_blank" 
        rel="noopener noreferrer"
        class="w-full py-2.5 rounded-xl bg-[#ff00a6] hover:bg-[#e00092] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-pink-500/25"
      >
        ${b.scooter}
        <span>مشاهده قیمت روز و سفارش در اسنپ‌فود</span>
      </a>

      <div class="grid grid-cols-2 gap-2 pt-0.5">
        <button 
          id="btn-copy-order" 
          class="py-2 rounded-lg glass-pill text-[11px] font-bold text-zinc-300 hover:text-white flex items-center justify-center gap-1"
        >
          ${b.copy}
          <span>کپی متن اقلام</span>
        </button>

        <button 
          id="btn-clear-tray"
          class="py-2 rounded-lg glass-pill text-[11px] font-bold text-red-400 hover:text-red-300 flex items-center justify-center gap-1"
        >
          ${b.trash}
          <span>خالی کردن لیست</span>
        </button>
      </div>
    </div>
  `,(l=document.getElementById("close-tray-btn"))==null||l.addEventListener("click",()=>{var d;(d=document.getElementById("tray-modal"))==null||d.classList.add("hidden")}),e.querySelectorAll("button[data-action]").forEach(d=>{d.addEventListener("click",()=>{const c=d.dataset.action,g=d.dataset.id;c==="increase"&&H(g),c==="decrease"&&pe(g),c==="delete"&&me(g)})}),(n=document.getElementById("btn-copy-order"))==null||n.addEventListener("click",()=>{var d;(d=navigator.clipboard)==null||d.writeText(r).then(()=>{S("متن سفارش کپی شد")})}),(o=document.getElementById("btn-clear-tray"))==null||o.addEventListener("click",()=>{be()})}function F(e){return e?e.startsWith("./")?e.slice(1):e.startsWith("/")?e:"/"+e:""}function O(e,i){var l,n,o;if(!e)return;j[e.id]=i;const t=((l=e.shapes)==null?void 0:l.find(d=>d.id===i))||((n=e.shapes)==null?void 0:n[0]);if(!t)return;const a=document.getElementById(`card-img-${e.id}`);a&&(a.style.opacity="0.3",setTimeout(()=>{a.src=F(t.image),a.style.opacity="1"},120));const r=document.getElementById(`card-badge-${e.id}`);if(r){const d=t.badge||e.badge||"";r.textContent=d,r.className=d?"bg-black/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-lg shadow-sm":"hidden"}const s=document.getElementById(`card-btn-text-${e.id}`);s&&(s.textContent=`افزودن ${t.shortName||t.name}`),(o=e.shapes)==null||o.forEach(d=>{const c=document.getElementById(`card-dot-${e.id}-${d.id}`);c&&(c.className=`h-1.5 rounded-full transition-all duration-300 ${d.id===i?"bg-amber-400 w-4 shadow":"bg-white/40 w-1.5"}`)})}function ge(e){var o,d,c,g;const i=document.getElementById("item-modal"),t=document.getElementById("item-modal-box");if(!i||!t)return;const a=e.shapes&&e.shapes.length>1;let r=a?j[e.id]||"normal":null,s=a?e.shapes.find(m=>m.id===r)||e.shapes[0]:null;const l=s?s.image:e.image,n=F(l);if(t.innerHTML=`
    <!-- Modal Photo Container with Touch Swipe and Arrow Controls -->
    <div class="relative w-full h-64 bg-gradient-to-b from-[#24242c] to-[#141417] overflow-hidden flex items-center justify-center select-none" id="modal-photo-container">
      <img 
        id="modal-main-img"
        src="${n}" 
        alt="${e.title}" 
        class="w-full h-full object-cover transition-opacity duration-300"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
      />
      <div style="display:none;" class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#24242c] to-[#141417]">
        <span class="text-6xl filter drop-shadow-lg">${e.placeholderIcon||"🍔"}</span>
      </div>

      <button 
        id="close-item-modal-btn" 
        class="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/[0.15] z-30"
      >
        ${b.close}
      </button>

      <!-- Badge -->
      <span 
        id="modal-badge"
        class="${s!=null&&s.badge||e.badge?"":"hidden"} absolute top-3 right-3 bg-amber-500/90 text-black font-black text-[11px] px-2.5 py-0.5 rounded-full shadow-lg backdrop-blur-sm z-30"
      >
        ${(s==null?void 0:s.badge)||e.badge||""}
      </span>

      ${a?`
        <!-- Next / Prev Arrows for 1-click Swapping -->
        <button 
          id="modal-prev-shape-btn" 
          type="button" 
          aria-label="عکس قبلی"
          class="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center border border-white/[0.2] shadow-lg z-20 backdrop-blur-sm transition"
        >
          ❮
        </button>
        <button 
          id="modal-next-shape-btn" 
          type="button" 
          aria-label="عکس بعدی"
          class="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center border border-white/[0.2] shadow-lg z-20 backdrop-blur-sm transition"
        >
          ❯
        </button>

        <!-- Swipe Dots Indicator -->
        <div class="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5 z-20 pointer-events-none">
          ${e.shapes.map(m=>`
            <span 
              data-dot-shape="${m.id}"
              class="h-2 rounded-full transition-all duration-300 ${m.id===r?"bg-amber-400 w-5 shadow":"bg-white/40 w-2"}"
            ></span>
          `).join("")}
        </div>
      `:""}
    </div>

    <div class="p-4 text-right">
      <div class="flex items-center justify-between gap-2 mb-2">
        <h3 class="text-base font-black text-white" id="modal-title-text">${e.title}</h3>
        ${e.tag?`<span class="text-[10px] font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">${e.tag}</span>`:""}
      </div>

      ${a?`
        <!-- Interactive Shape Selector Buttons (Swipe or Click) -->
        <div class="mb-4 bg-white/[0.03] p-2.5 rounded-2xl border border-white/[0.08]">
          <div class="flex items-center justify-between mb-2">
            <span class="text-[11px] text-amber-300 font-bold flex items-center gap-1">
              <span>✨</span>
              <span>انتخاب مدل و شکل پیتزا:</span>
            </span>
            <span class="text-[10px] text-zinc-400 font-light">با کشیدن عکس هم تغییر می‌کند</span>
          </div>
          <div class="grid grid-cols-2 gap-2" id="modal-shapes-group">
            ${e.shapes.map(m=>{const v=m.id===r;return`
                <button 
                  type="button" 
                  data-modal-shape-btn="${m.id}"
                  class="py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center border transition-all ${v?"bg-amber-500 text-black border-amber-400 shadow-lg":"bg-[#222228] text-zinc-300 border-white/[0.08] hover:text-white hover:bg-white/[0.08]"}"
                >
                  <span>${m.name}</span>
                </button>
              `}).join("")}
          </div>
        </div>
      `:""}

      ${e.ingredients&&e.categoryId!=="drinks"?`
        <div class="mb-4">
          <span class="text-[11px] text-zinc-400 font-bold block mb-1">توضیحات و ترکیبات:</span>
          <p class="text-xs text-zinc-200 leading-relaxed font-light bg-white/[0.03] p-3 rounded-xl border border-white/[0.06]">
            ${e.ingredients}
          </p>
        </div>
      `:""}

      <div class="flex flex-col gap-2 mt-4">
        <button 
          id="modal-add-tray-btn"
          class="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-black text-sm flex items-center justify-center gap-1.5 shadow-md shadow-orange-500/25 transition"
        >
          ${b.plus}
          <span id="modal-btn-label">
            ${a?`افزودن به لیست سفارش (${s.name})`:"افزودن به لیست سفارش"}
          </span>
        </button>
      </div>
    </div>
  `,i.classList.remove("hidden"),(o=document.getElementById("close-item-modal-btn"))==null||o.addEventListener("click",()=>{i.classList.add("hidden")}),a){const m=u=>{r=u,j[e.id]=u,s=e.shapes.find(w=>w.id===u)||e.shapes[0];const p=document.getElementById("modal-main-img");p&&(p.style.opacity="0.3",setTimeout(()=>{p.src=F(s.image),p.style.opacity="1"},120));const $=document.getElementById("modal-badge");if($){const w=s.badge||e.badge||"";$.textContent=w,$.className=w?"absolute top-3 right-3 bg-amber-500/90 text-black font-black text-[11px] px-2.5 py-0.5 rounded-full shadow-lg backdrop-blur-sm z-30":"hidden"}document.querySelectorAll("[data-dot-shape]").forEach(w=>{const N=w.dataset.dotShape===u;w.className=`h-2 rounded-full transition-all duration-300 ${N?"bg-amber-400 w-5 shadow":"bg-white/40 w-2"}`}),document.querySelectorAll("[data-modal-shape-btn]").forEach(w=>{const N=w.dataset.modalShapeBtn===u;w.className=`py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 border transition-all ${N?"bg-amber-500 text-black border-amber-400 shadow-lg":"bg-[#222228] text-zinc-300 border-white/[0.08] hover:text-white hover:bg-white/[0.08]"}`});const z=document.getElementById("modal-btn-label");z&&(z.textContent=`افزودن به لیست سفارش (${s.name})`),O(e,u)},v=()=>{const p=(e.shapes.findIndex($=>$.id===r)+1)%e.shapes.length;m(e.shapes[p].id)};(d=document.getElementById("modal-next-shape-btn"))==null||d.addEventListener("click",u=>{u.stopPropagation(),v()}),(c=document.getElementById("modal-prev-shape-btn"))==null||c.addEventListener("click",u=>{u.stopPropagation(),v()}),document.querySelectorAll("[data-modal-shape-btn]").forEach(u=>{u.addEventListener("click",p=>{p.stopPropagation(),m(u.dataset.modalShapeBtn)})});let I=0;const k=document.getElementById("modal-photo-container");k==null||k.addEventListener("touchstart",u=>{I=u.changedTouches[0].screenX},{passive:!0}),k==null||k.addEventListener("touchend",u=>{const p=u.changedTouches[0].screenX;Math.abs(p-I)>40&&v()},{passive:!0})}(g=document.getElementById("modal-add-tray-btn"))==null||g.addEventListener("click",()=>{let m=e.id,v=e.title;a&&s&&(m=`${e.id}:${s.id}`,v=`${e.title} (${s.name})`),H(m),i.classList.add("hidden"),S(`${v} به لیست اضافه شد`)})}function T(){const e=document.getElementById("menu-container");if(!e||!x)return;const i=x.categories||[];let t=x.items||[];if(y){if(t=t.filter(a=>{const r=a.title.toLowerCase().includes(y),s=a.ingredients&&a.ingredients.toLowerCase().includes(y);return r||s}),t.length===0){e.innerHTML=`
        <div class="flex flex-col items-center justify-center py-16 text-center text-zinc-500 glass-card rounded-2xl">
          <span class="text-4xl mb-2">🔍</span>
          <p class="text-sm font-bold text-zinc-200">غذایی پیدا نشد!</p>
          <p class="text-xs text-zinc-400 mt-1">لطفاً عنوان دیگری جستجو فرمایید.</p>
        </div>
      `;return}e.innerHTML=`
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        ${t.map(a=>U(a)).join("")}
      </div>
    `,W();return}e.innerHTML=i.map(a=>{const r=t.filter(s=>s.categoryId===a.id);return r.length===0?"":`
      <section class="mb-10 scroll-mt-28" id="sec-${a.id}">
        <!-- Section Header -->
        <div class="flex items-center justify-between mb-4 pb-2.5 border-b border-white/[0.08]">
          <div class="flex flex-col text-right">
            <h2 class="text-base sm:text-lg md:text-xl font-black text-white flex items-center gap-2">
              <span>${a.icon}</span>
              <span>${a.title||a.name}</span>
            </h2>
            ${a.subtitle?`<span class="text-xs text-zinc-400 font-light mt-0.5">${a.subtitle}</span>`:""}
          </div>
          <span class="bg-[#18181c] text-amber-400 border border-white/[0.08] text-[11px] font-black px-3 py-1 rounded-full flex-shrink-0">
            ${h(r.length)} غذا
          </span>
        </div>

        <!-- Food Grid (Responsive: 2 cols on mobile, 3 on tablet, 4 on desktop) -->
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          ${r.map(s=>U(s)).join("")}
        </div>
      </section>
    `}).join(""),W()}function U(e){const i=J(e),t=e.shapes&&e.shapes.length>1,a=j[e.id]||"normal",r=t?e.shapes.find(n=>n.id===a)||e.shapes[0]:null,s=F(r?r.image:e.image),l=(r==null?void 0:r.badge)||e.badge;return`
    <article 
      data-id="${e.id}" 
      class="food-card glass-card rounded-2xl overflow-hidden shadow-sm flex flex-col group transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1 hover:shadow-xl cursor-pointer text-right"
    >
      <!-- Food Image Container -->
      <div 
        class="compact-photo-frame relative w-full bg-[#1e1e24] overflow-hidden flex items-center justify-center select-none"
        data-photo-container="${e.id}"
      >
        ${s?`
          <img 
            id="card-img-${e.id}"
            src="${s}" 
            alt="${e.title}" 
            loading="lazy" 
            class="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
          />
          <div style="display:none;" class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#222228] to-[#16161a]">
            <span class="text-3xl filter drop-shadow">${e.placeholderIcon||"🍔"}</span>
          </div>
        `:`
          <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#24242c] to-[#161619] relative">
            <div class="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl md:text-4xl filter drop-shadow">${e.placeholderIcon||"🍔"}</span>
            </div>
          </div>
        `}

        <!-- Top Badges -->
        <div class="absolute top-2 right-2 flex flex-col gap-1 items-end pointer-events-none z-10">
          <span 
            id="card-badge-${e.id}"
            class="${l?"":"hidden"} bg-black/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-lg shadow-sm"
          >
            ${l||""}
          </span>
        </div>

        <div 
          id="card-tray-count-${e.id}" 
          class="${i>0?"flex":"hidden"} absolute top-2 left-2 bg-amber-500 text-black font-black text-[10px] md:text-xs w-5 h-5 md:w-6 md:h-6 rounded-full items-center justify-center shadow z-10 pointer-events-none"
        >
          ${h(i)}
        </div>

        ${t?`
          <!-- Minimal Dots Indicator showing available photo shapes -->
          <div class="absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-1.5 z-10 pointer-events-none">
            ${e.shapes.map(n=>`
              <span 
                id="card-dot-${e.id}-${n.id}"
                class="h-1.5 rounded-full transition-all duration-300 ${n.id===a?"bg-amber-400 w-4 shadow":"bg-white/40 w-1.5"}"
              ></span>
            `).join("")}
          </div>
        `:""}
      </div>

      <!-- Card Body (title + action) -->
      <div class="p-2.5 sm:p-3.5 flex flex-col flex-grow text-right">
        <h3 class="text-xs sm:text-sm md:text-base font-black text-white group-hover:text-amber-400 transition-colors mb-2 truncate">
          ${e.title}
        </h3>

        <!-- Single "افزودن به لیست سفارش" button only -->
        <div class="mt-auto pt-2 border-t border-white/[0.06]">
          <button 
            data-action="add-tray" 
            data-id="${e.id}"
            class="w-full py-2 px-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-black text-[11px] sm:text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
          >
            ${b.plus}
            <span id="card-btn-text-${e.id}">
              ${t?`افزودن ${r.shortName||r.name}`:"افزودن به لیست سفارش"}
            </span>
          </button>
        </div>
      </div>
    </article>
  `}function W(){document.querySelectorAll(".food-card").forEach(e=>{const i=e.dataset.id,t=x.items.find(s=>s.id===i);if(!t)return;let a=!1;if(e.addEventListener("click",s=>{if(a){a=!1;return}s.target.closest('button[data-action="add-tray"]')||s.target.closest("a")||ge(t)}),t.shapes&&t.shapes.length>1){let s=0,l=0;const n=e.querySelector(`[data-photo-container="${t.id}"]`);n==null||n.addEventListener("touchstart",d=>{s=d.changedTouches[0].screenX,l=d.changedTouches[0].screenY,a=!1},{passive:!0}),n==null||n.addEventListener("touchend",d=>{const c=d.changedTouches[0].screenX,g=d.changedTouches[0].screenY,m=c-s,v=g-l;if(Math.abs(m)>30&&Math.abs(m)>Math.abs(v)){a=!0;const k=(j[t.id]||"normal")==="normal"?"heart":"normal";O(t,k),setTimeout(()=>{a=!1},200)}},{passive:!0});let o=!1;n==null||n.addEventListener("mousedown",d=>{o=!0,s=d.screenX,a=!1}),n==null||n.addEventListener("mouseup",d=>{if(!o)return;o=!1;const c=d.screenX;if(Math.abs(c-s)>30){a=!0;const m=(j[t.id]||"normal")==="normal"?"heart":"normal";O(t,m),setTimeout(()=>{a=!1},200)}}),n==null||n.addEventListener("mouseleave",()=>{o=!1})}const r=e.querySelector('button[data-action="add-tray"]');r==null||r.addEventListener("click",s=>{s.stopPropagation();let l=i,n=t.title;if(t.shapes&&t.shapes.length>1){const o=j[t.id]||"normal",d=t.shapes.find(c=>c.id===o)||t.shapes[0];l=`${t.id}:${o}`,n=`${t.title} (${d.name})`}H(l),S(`${n} به لیست اضافه شد`)})})}function ue(){if("serviceWorker"in navigator&&window.location.protocol.startsWith("http")&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(c=>{console.log("SW registration error:",c)})}),window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)return;const i=/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()),t=document.getElementById("btn-install-pwa"),a=document.getElementById("pwa-install-banner"),r=document.getElementById("pwa-banner-install-btn"),s=document.getElementById("pwa-banner-close-btn"),l=document.getElementById("ios-install-modal"),n=document.getElementById("close-ios-modal-btn"),o=document.getElementById("confirm-ios-modal-btn");i&&(t==null||t.classList.remove("hidden"),t==null||t.classList.add("flex"),a==null||a.classList.remove("hidden")),window.addEventListener("beforeinstallprompt",c=>{c.preventDefault(),B=c,t==null||t.classList.remove("hidden"),t==null||t.classList.add("flex"),a==null||a.classList.remove("hidden")});const d=async()=>{if(i){l==null||l.classList.remove("hidden");return}if(B){B.prompt();const{outcome:c}=await B.userChoice;c==="accepted"&&(t==null||t.classList.add("hidden"),a==null||a.classList.add("hidden"),S("اپلیکیشن با موفقیت نصب شد")),B=null}else S("برای نصب، از منوی مرورگر گزینه Add to Home Screen را بزنید.")};t==null||t.addEventListener("click",d),r==null||r.addEventListener("click",d),s==null||s.addEventListener("click",()=>{a==null||a.classList.add("hidden")}),n==null||n.addEventListener("click",()=>{l==null||l.classList.add("hidden")}),o==null||o.addEventListener("click",()=>{l==null||l.classList.add("hidden")}),l==null||l.addEventListener("click",c=>{c.target===l&&l.classList.add("hidden")})}oe();Z();ue();
