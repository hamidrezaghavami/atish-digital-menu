(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const t of l)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const t={};return l.integrity&&(t.integrity=l.integrity),l.referrerPolicy&&(t.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?t.credentials="include":l.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(l){if(l.ep)return;l.ep=!0;const t=n(l);fetch(l.href,t)}})();const P={brandTitle:"فست‌فود آتیش",brandSubtitle:"طعم اصیل و لذیذ فست‌فود آتیش",tagline:"منوی دیجیتال و سفارش دلیوری فست‌فود آتیش",statusBadge:"هم‌اکنون باز است",phoneNumber:"02122561949",snappfoodUrl:"https://snappfood.ir/restaurant/menu/پیتزا_آتیش-r-p44gzx/",workingHours:"همه روزه از ۹ صبح تا ۱۲ شب",address:"تهران، خیابان دولت (کلاهدوز)، محله دروس، نبش کوچه خرداد، پلاک ۱۰۰"},ne={name:"آتیش",brandTitle:"آتیش | Menu",brandSubtitle:"طعم اصیل و لذیذ رستوران آتیش",tagline:"منوی دیجیتال آتیش",statusBadge:"هم‌اکنون باز است",phone:"02122561949",snappfoodUrl:"https://snappfood.ir/restaurant/menu/پیتزا_آتیش-r-p44gzx/",workingHours:"همه روزه از ۹ صبح تا ۱۲ شب",address:"خیابان دولت تهران، محله دروس، خیابان کلاهدوز (دولت)، نبش کوچه خرداد، پلاک ۱۰۰",rating:"۴.۴"},se=[{id:"american-pizzas",name:"پیتزا آمریکایی",icon:"🍕",title:"پیتزاهای آمریکایی",subtitle:""},{id:"family-pizzas",name:"پیتزا خانواده",icon:"🍕",title:"پیتزاهای خانواده",subtitle:""},{id:"italian-pizzas",name:"پیتزا ایتالیایی",icon:"🍕",title:"پیتزاهای ایتالیایی",subtitle:""},{id:"burgers",name:"برگرها",icon:"🍔",title:"برگر",subtitle:""},{id:"sandwiches",name:"ساندویچ‌ها",icon:"🌭",title:"ساندویچ‌ها",subtitle:""},{id:"fried",name:"سوخاری‌ها",icon:"🍗",title:"مرغ و سوخاری",subtitle:""},{id:"sides",name:"پیش‌ غذا",icon:"🍟",title:"پیش‌ غذا",subtitle:""},{id:"drinks",name:"نوشیدنی‌ها",icon:"🥤",title:"نوشیدنی‌ها",subtitle:""}],re=[{id:"ap-1",categoryId:"american-pizzas",isFeatured:!0,isChefRecommendation:!0,title:"پیتزا آمریکایی مخصوص",tag:null,badge:"دارای طرح قلبی ❤️",price:null,ingredients:"خمیر پیتزا پنجره ای آمریکایی، مرغ، ژامبون گوشت 90%، قارچ، فلفل دلمه ای، پنیر پیتزا",image:"./images/Makhsos-American.webp",placeholderIcon:"🍕",shapes:[{id:"normal",name:"مستطیل کلاسیک",shortName:"مستطیل",icon:"",image:"./images/Makhsos-American.webp",badge:null},{id:"heart",name:"طرح قلبی",shortName:"قلبی",icon:"",image:"images/heart-normal.webp",badge:"❤️ طرح قلبی"}]},{id:"ap-2",categoryId:"american-pizzas",isFeatured:!1,isChefRecommendation:!0,title:"پیتزا پپرونی",tag:null,badge:"دارای طرح قلبی ❤️",price:null,ingredients:"خمیر پیتزا پنجره ای آمریکایی، پپرونی 90%، فلفل دلمه ای، پنیر پیتزا",image:"./images/Peperoni-American-Pizza.webp",placeholderIcon:"🍕",shapes:[{id:"normal",name:"مستطیل کلاسیک",shortName:"مستطیل",icon:"",image:"./images/Peperoni-American-Pizza.webp",badge:null},{id:"heart",name:"طرح قلبی",shortName:"قلبی",icon:"",image:"images/heart-peperoni.webp",badge:"❤️ طرح قلبی"}]},{id:"ap-3",categoryId:"american-pizzas",isFeatured:!1,isChefRecommendation:!0,title:"پیتزا مرغ و قارچ",tag:null,badge:null,price:null,ingredients:"خمیر پیتزا پنجره ای آمریکایی، مرغ نگینی شده، قارچ، پنیر پیتزا",image:"./images/Chicken-American-Pizza.webp",placeholderIcon:"🍕"},{id:"ap-4",categoryId:"american-pizzas",isFeatured:!1,isChefRecommendation:!0,title:"پیتزا گوشت و قارچ",tag:null,badge:null,price:null,ingredients:"خمیر پیتزا پنجره ای آمریکایی، گوشت گوساله ریش ریش شده، قارچ، پنیر پیتزا",image:"./images/meat-American-Pizza.webp",placeholderIcon:"🍕"},{id:"ap-5",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا سبزیجات",tag:null,badge:null,price:null,ingredients:"خمیر پیتزا آمریکایی، ذرت، نخود فرنگی، هویج، قارچ، فلفل دلمه ای، پنیر پیتزا",image:"./images/Sabzi-American.webp",placeholderIcon:"🍕"},{id:"ap-6",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا قارچ و سوسیس",tag:null,badge:null,price:null,ingredients:"خمیر آمریکایی ، قارچ ، سوسیس اسلایس ، پنیر میکس ، سس مخصوص آتیش",image:"images/american-Sosis-mashroom.webp",placeholderIcon:"🍕"},{id:"ap-7",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا قارچ و پنیر",tag:null,badge:null,price:null,ingredients:"خمیر پیتزا آمریکایی، قارچ، پنیر پیتزا",image:"./images/Mashroom-Pizza.webp",placeholderIcon:"🍕"},{id:"fp-1",categoryId:"family-pizzas",isFeatured:!0,title:"پیتزا چهارطعم خانواده",tag:null,badge:null,price:null,ingredients:"ترکیبی از چهار طعم مختلف پیتزا با قابلیت انتخاب و تغییر طعم‌ها به سلیقه شما.",image:"./images/4F-Family.webp",placeholderIcon:"🍕"},{id:"ip-1",categoryId:"italian-pizzas",isFeatured:!0,title:"پیتزا ایتالیایی آتیش",tag:null,badge:null,price:null,ingredients:"خمیر پیتزا ایتالیایی، مرغ، ژامبون گوشت 90%، قارچ، فلفل دلمه ای، زیتون، پنیر پیتزا",image:"./images/Atish-Italian.webp",placeholderIcon:"🍕"},{id:"ip-2",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا پپرونی ایتالیایی",tag:null,badge:null,price:null,ingredients:"خمیر پیتزا ایتالیایی، پپرونی 90%، فلفل دلمه ای، پنیر پیتزا",image:"./images/Peperoni-Italian.webp",placeholderIcon:"🍕"},{id:"ip-3",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا مرغ و قارچ ایتالیایی",tag:null,badge:null,price:null,ingredients:"خمیر پیتزا ایتالیایی، مرغ، قارچ، زیتون، فلفل دلمه ای، پنیر پیتزا",image:"./images/Chicken-Italian.webp",placeholderIcon:"🍕"},{id:"ip-5",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا استیک ایتالیایی",tag:null,badge:null,price:null,ingredients:"خمیر پیتزا ایتالیایی، گوشت گوساله تکه ای، قارچ، زیتون، فلفل دلمه ای، پنیر پیتزا",image:"images/Steak-Italian-Pizza.webp",placeholderIcon:"🍕"},{id:"b-1",categoryId:"burgers",isFeatured:!0,title:"همبرگر",tag:null,badge:null,price:null,ingredients:"یک عدد برگر دست ساز گوشت گوساله ۱۵۰ گرمی، گوجه، کاهو، خیارشور، پیاز، سس مخصوص، نان برگر",image:"images/burger.webp",placeholderIcon:"🍔"},{id:"b-2",categoryId:"burgers",isFeatured:!1,title:"چیزبرگر",tag:null,badge:null,price:null,ingredients:"یک عدد برگر دست ساز گوشت گوساله ۱۵۰ گرمی، پنیر گودا، خیارشور، گوجه، کاهو، سس مخصوص، نان برگر",image:"images/cheese-burger.webp",placeholderIcon:"🍔"},{id:"b-3",categoryId:"burgers",isFeatured:!1,title:"قارچ برگر",tag:null,badge:null,price:null,ingredients:"یک عدد برگر دست ساز گوشت گوساله ۱۵۰ گرمی، قارچ، پنیر، پیاز، گوجه، کاهو، خیارشور، نان برگر",image:"images/mashroom-burger.webp",placeholderIcon:"🍔"},{id:"b-4",categoryId:"burgers",isFeatured:!1,title:"دبل چیزبرگر",tag:null,badge:null,price:null,ingredients:"دو عدد گوشت برگر ۱۲۰ گرمی ، نان برگر ، پیاز ، کاهو ، گوجه ، خیار شور ، پنیر گودا ، سس ساندویچ",image:"images/double-cheese-burger.webp",placeholderIcon:"🍔"},{id:"b-5",categoryId:"burgers",isFeatured:!1,title:"دبل برگر",tag:null,badge:null,price:null,ingredients:"دو عدد برگر ۱۲۰ گرمی ، کاهو ، گوجه ، خیارشور ، نان برگر ، سس ساندویچ",image:"images/double-burger.webp",placeholderIcon:"🍔"},{id:"b-6",categoryId:"burgers",isFeatured:!1,title:"دبل ماشروم",tag:null,badge:null,price:null,ingredients:"دو عدد برگر ۱۲۰ گرمی ، پیاز ، قارچ ، پنیر گودا ، نان برگر ، سس مخصوص",image:"images/double-Mashroom-burger.webp",placeholderIcon:"🍔"},{id:"b-7",categoryId:"burgers",isFeatured:!1,title:"آتیش برگر",tag:null,badge:null,price:null,ingredients:"یک عدد برگر دست ساز گوشت گوساله ۱۵۰ گرمی، ۱۵۰ گرم فیله مرغ گریل، پنیر گودا، خیارشور، گوجه، کاهو، سس مخصوص، نان برگر",image:"images/atish-burger.webp",placeholderIcon:"🍔"},{id:"b-8",categoryId:"burgers",isFeatured:!1,title:"زینگر",tag:null,badge:null,price:null,ingredients:"۱۳۰ گرم فیله مرغ سوخاری تند، کاهو، گوجه، سس مخصوص، نان برگر",image:"images/Zinger.webp",placeholderIcon:"🍔"},{id:"b-9",categoryId:"sandwiches",isFeatured:!1,title:"گریل",tag:null,badge:null,price:null,ingredients:"۱۶۰ گرم فیله مرغ گریل شده، پنیر گودا، قارچ، گوجه، کاهو، نان باگت",image:"images/Giril.webp",placeholderIcon:"🌭"},{id:"b-10",categoryId:"sandwiches",isFeatured:!1,title:"رست بیف",tag:null,badge:null,price:null,ingredients:"کاهو ، گوجه ، خیارشور ، ۸۰ گرم گوشت گوساله مزه دار ، قارچ سس مخصوص و نان باگت",image:"images/RoastBeef.webp",placeholderIcon:"🌭"},{id:"sw-1",categoryId:"sandwiches",isFeatured:!0,title:"فیله سوخاری با پنیر",tag:null,badge:null,price:null,ingredients:"۱۲۰ گرم فیله مرغ سوخاری، پنیر گودا، گوجه، کاهو، نان باگت",image:"images/file.webp",placeholderIcon:"🌭"},{id:"sw-2",categoryId:"sandwiches",isFeatured:!1,title:"سوپرسوپریم",tag:null,badge:null,price:null,ingredients:"۱۲۰ گرم فیله مرغ سوخاری، ۲ ورق ژامبون گوشت ، پنیر گودا، کاهو، گوجه، نان باگت",image:"./images/jambon-sandwhich.webp",placeholderIcon:"🌭"},{id:"sw-3",categoryId:"sandwiches",isFeatured:!1,title:"هات داگ",tag:null,badge:null,price:null,ingredients:"یک عدد هات داگ ۹۰٪، قارچ، پنیر گودا، کاهو، گوجه، سس مخصوص، نان باگت",image:"images/Hotdog.webp",placeholderIcon:"🌭"},{id:"fr-1",categoryId:"fried",isFeatured:!0,title:"فیله سوخاری سه تیکه",tag:null,badge:null,price:null,ingredients:"۳ عدد فیله مرغ سوخاری، ۲۵۰ گرم سیب زمینی سرخ کرده، یک عدد نان بروتچن",image:"./images/Crispy-Chicken-Tenders.webp",placeholderIcon:"🍗"},{id:"fr-2",categoryId:"fried",isFeatured:!1,title:"فیله سوخاری چهار تیکه",tag:null,badge:null,price:null,ingredients:"۴ عدد فیله مرغ سوخاری، ۲۵۰ گرم سیب زمینی سرخ کرده، یک عدد نان بروتچن",image:"./images/4-Crispe.webp",placeholderIcon:"🍗"},{id:"fr-3",categoryId:"fried",isFeatured:!1,title:"قارچ سوخاری",tag:null,badge:null,price:null,ingredients:"۲۴۰ گرم قارچ سوخاری",image:"./images/Mashroom.webp",placeholderIcon:"🍄"},{id:"sd-1",categoryId:"sides",isFeatured:!0,title:"سیب زمینی سرخ‌کرده",tag:null,badge:null,price:null,ingredients:"۲۵۰ گرم سیب زمینی سرخ کرده",image:"./images/French-Fries.webp",placeholderIcon:"🍟"},{id:"sd-2",categoryId:"sides",isFeatured:!1,title:"سیب‌زمینی ویژه",tag:null,badge:null,price:null,ingredients:"۳۰۰ گرم سیب زمینی، ژامبون گوشت، قارچ، فلفل دلمه ای",image:"./images/Fries-Special.webp",placeholderIcon:"🍟"},{id:"dr-1",categoryId:"drinks",isFeatured:!0,title:"نوشابه خانواده",tag:null,badge:null,price:null,ingredients:"",image:"./images/Big-Coke.webp",placeholderIcon:"🥤"},{id:"dr-2",categoryId:"drinks",isFeatured:!1,title:"نوشابه کوچک",tag:null,badge:null,price:null,ingredients:"",image:"./images/Coke.webp",placeholderIcon:"🥤"},{id:"dr-3",categoryId:"drinks",isFeatured:!1,title:"دلستر",tag:null,badge:null,price:null,ingredients:"",image:"./images/Delester.webp",placeholderIcon:"🥤"},{id:"dr-4",categoryId:"drinks",isFeatured:!1,title:"دوغ",tag:null,badge:null,price:null,ingredients:"",image:"./images/Dogh.webp",placeholderIcon:"🥤"},{id:"dr-5",categoryId:"drinks",isFeatured:!1,title:"آب معدنی کوچک",tag:null,badge:null,price:null,ingredients:"",image:"./images/Water.webp",placeholderIcon:"💧"}],ie={restaurant:ne,categories:se,items:re},oe={cx:260,cy:210,radius:115},le={cx:260,cy:210,radius:185},de=[{id:"dowlat",name:"دولت (کلاهدوز)",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۱۵ تا ۲۰ دقیقه",desc:"محل استقرار رستوران در خیابان کلاهدوز — سریع‌ترین ارسال با پیک مستقیم آتیش",x:175,y:205},{id:"dibaji",name:"دیباجی",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۱۵ تا ۲۰ دقیقه",desc:"محدوده همجوار رستوران (دیباجی جنوبی و شمالی) — ارسال مستقیم و فوق‌سریع با پیک اختصاصی",x:250,y:145},{id:"ekhtiarieh",name:"اختیاریه",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۱۵ تا ۲۰ دقیقه",desc:"محدوده شمالی کلاهدوز تا بزرگراه صدر — ارسال سریع و مستقیم با پیک اختصاصی",x:320,y:145},{id:"darrous",name:"دروس",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۲۰ تا ۲۵ دقیقه",desc:"محدوده جنوبی رستوران (پایین خیابان دولت) — ارسال مستقیم و گرم با پیک اختصاصی آتیش",x:260,y:285},{id:"pasdaran",name:"پاسداران",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۲۰ تا ۲۵ دقیقه",desc:"ضلع شرقی رستوران — در محدوده تحت پوشش سریع پیک مستقیم آتیش",x:360,y:215},{id:"gholhak",name:"قلهک",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۳۰ تا ۳۵ دقیقه",desc:"ضلع غربی و محدوده خیابان شریعتی — در محدوده پوشش سریع پیک مستقیم رستوران",x:160,y:245},{id:"qeytarieh",name:"قیطریه / اندرزگو",zone:"express",badge:"اسنپ‌فود / اکسپرس 🛵",time:"۳۰ تا ۳۵ دقیقه",desc:"بالای بزرگراه صدر و همجوار تجریش — سفارش آنلاین و تحویل اکسپرس در اسنپ‌فود",x:185,y:85},{id:"tajrish",name:"تجریش",zone:"express",badge:"اسنپ‌فود / اکسپرس 🛵",time:"۴۰ تا ۵۰ دقیقه",desc:"محدوده شمال‌غرب و میدان تجریش — سفارش آنلاین و ارسال از طریق اسنپ‌فود",x:130,y:95},{id:"niavaran",name:"نیاوران",zone:"express",badge:"اسنپ‌فود / اکسپرس 🛵",time:"۳۰ تا ۳۵ دقیقه",desc:"شعاع اکسپرس شمال تهران — سفارش آنلاین و ارسال در اسنپ‌فود",x:315,y:55},{id:"heravi",name:"هروی",zone:"express",badge:"اسنپ‌فود / اکسپرس 🛵",time:"۴۰ تا ۵۰ دقیقه",desc:"ضلع جنوب‌شرق پاسداران — سفارش آنلاین و ارسال اکسپرس در اسنپ‌فود",x:415,y:275},{id:"seyedkhandan",name:"سیدخندان",zone:"express",badge:"اسنپ‌فود / اکسپرس 🛵",time:"۴۰ تا ۵۰ دقیقه",desc:"شعاع اکسپرس جنوب — سفارش آنلاین و ارسال در اسنپ‌فود",x:215,y:375}],ce="این نقشه فقط نمایی تقریبی از محدوده ارسال است؛ مرزها و فاصله‌ها دقیق نیستند. برای استعلام دقیق آدرس خود، با شماره ۲۲۵۶۱۹۴۹ تماس حاصل فرمایید.",K={restaurantArea:oe,snappfoodArea:le,neighborhoods:de,note:ce},pe="/images/logo.webp";let h=ie;var J,Q;let V=((Q=(J=h.categories)==null?void 0:J[0])==null?void 0:Q.id)||"american-pizzas",k="",A=!1,w=JSON.parse(localStorage.getItem("atish_order_tray")||"{}"),I=3,F="darrous",T=null;function v(e){if(e==null)return"";const r=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];return e.toString().replace(/\d/g,n=>r[parseInt(n,10)])}function D(e){return e?String(e).toLowerCase().replace(/[ي]/g,"ی").replace(/[ك]/g,"ک").replace(/[آأإ]/g,"ا").replace(/[ؤ]/g,"و").replace(/[ة]/g,"ه").replace(/[\u200c\s]+/g," ").trim():""}function X(e){return e?String(e).replace(/[&<>"']/g,r=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[r]):""}function W(){return Object.values(w).reduce((e,r)=>e+r,0)}function q(){localStorage.setItem("atish_order_tray",JSON.stringify(w)),ee()}const b={search:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>',phone:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',scooter:'<svg class="w-5 h-5 -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M14 9h4l4 4v5h-3"/><circle stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" cx="19" cy="18" r="2"/><circle stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" cx="7" cy="18" r="2"/></svg>',instagram:'<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',clock:'<svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',location:'<svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',close:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M6 18L18 6M6 6l12 12"/></svg>',menuIcon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M4 6h16M4 12h16M4 18h16"/></svg>',tray:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>',plus:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>',minus:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20 12H4"/></svg>',trash:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>',layers:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>',copy:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>'},B=[{title:"نان کنجدی تازه",desc:"نان لطیف و معطر دست‌ساز با کنجد درجه یک.",icon:"🍞"},{title:"سس مخصوص آتیش",desc:"فرمول انحصاری و دست‌ساز فست‌فود آتیش با عطر ادویه‌جات ویژه و چاشنی دلپذیر.",icon:"🍯"},{title:"پنیر گودا",desc:"ورقه‌های پنیر گودا روی برگر گرم با طعم اصیل و لذیذ.",icon:"🧀"},{title:"گوشت خالص برگر دست‌ساز",desc:"۱۰۰٪ گوشت خالص و گرم گوساله با طبخ مخصوص و حفظ کامل آبدار بودن گوشت.",icon:"🥩"},{title:"قارچ و پیاز",desc:"ترکیب قارچ تفت‌داده و پیاز که طعم فوق‌العاده‌ای به آتیش برگر می‌بخشد.",icon:"🍄"},{title:"خیارشور و سبزیجات تازه",desc:"خیارشور تازه، کاهو پیچ ترد و گوجه فرنگی به همراه نان تازه کنجدی.",icon:"🥒"}];function _(e){const r=(h==null?void 0:h.restaurant)||P,{neighborhoods:n}=K,s=n.find(a=>a.id===e);if(!s)return;F=e;const l=s.zone==="direct";document.querySelectorAll(".delivery-chip-btn").forEach(a=>{const d=a.dataset.id===e,o=n.find(g=>g.id===a.dataset.id),c=o?o.name:"";a.className=`delivery-chip-btn text-[11px] px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${d?"bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-md shadow-orange-500/30 scale-105":"bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:bg-white/[0.08] hover:text-white"}`,a.innerHTML=`<span>📍</span><span>${c}</span>${d?'<span class="text-xs">✓</span>':""}`});const t=document.getElementById("delivery-status-card");if(t){t.className=`p-4 rounded-2xl border transition-all duration-300 mb-4 ${l?"bg-gradient-to-br from-emerald-950/40 via-[#18181c] to-emerald-950/20 border-emerald-500/40 shadow-lg shadow-emerald-950/30":"bg-gradient-to-br from-pink-950/40 via-[#18181c] to-pink-950/20 border-pink-500/40 shadow-lg shadow-pink-950/30"}`;const a=document.getElementById("delivery-card-title");a&&(a.textContent=`ارسال به ${s.name}`);const d=document.getElementById("delivery-card-badge");d&&(d.textContent=s.badge,d.className=`text-[11px] font-bold px-2.5 py-1 rounded-full ${l?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-pink-500/20 text-pink-300 border border-pink-500/30"}`);const o=document.getElementById("delivery-card-time");o&&(o.textContent=s.time);const c=document.getElementById("delivery-card-desc");c&&(c.textContent=s.desc);const g=document.getElementById("delivery-card-actions");g&&(l?g.innerHTML=`
          <a id="delivery-action-link" href="tel:${r.phone||P.phoneNumber}" class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-xs sm:text-sm shadow-md transition active:scale-[0.98]">
            ${b.phone}
            <span>سفارش تلفنی به ${s.name}</span>
            <span dir="ltr" class="inline-flex items-center tracking-wider mr-1 text-[11px]">
              (<span>۰۲۱</span><span>-</span><span>۲۲۵۶۱۹۴۹</span>)
            </span>
          </a>
        `:g.innerHTML=`
          <a id="delivery-action-link" href="${r.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#ff00a6] hover:bg-[#e00092] text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-500/25 transition active:scale-[0.98]">
            ${b.scooter}
            <span>سفارش در اسنپ‌فود</span>
          </a>
        `)}const i=document.getElementById("delivery-active-pulse");i&&i.setAttribute("transform",`translate(${s.x} ${s.y})`),document.querySelectorAll("#delivery-map-text-labels text").forEach(a=>{const d=a.dataset.id===e;a.classList.toggle("active-place",d)}),document.querySelectorAll(".delivery-pin-group").forEach(a=>{const d=a.dataset.id===e,o=a.querySelector("circle");if(o){const c=n.find(g=>g.id===a.dataset.id);o.setAttribute("r",d?"9":"6"),o.setAttribute("stroke-width",d?"2.5":"1.5"),o.setAttribute("fill",d?"#f59e0b":(c==null?void 0:c.zone)==="direct"?"#ef4444":"#ff00a6"),o.setAttribute("fill-opacity",d?"1":"0.85")}})}function me(e){const{restaurantArea:r,snappfoodArea:n,neighborhoods:s,note:l}=K,t=s.find(a=>a.id===F)||s[0],i=t.zone==="direct";return`
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
              <circle cx="${n.cx}" cy="${n.cy}" r="${n.radius}" fill="#ff00a6" fill-opacity=".04" stroke="#ff00a6" stroke-width="2" stroke-dasharray="8 8"/>
              <!-- Direct Atish Delivery Zone Radius -->
              <circle cx="${r.cx}" cy="${r.cy}" r="${r.radius}" fill="#ef4444" fill-opacity=".12" stroke="#ef4444" stroke-width="2.5"/>
              
              <!-- Neighborhood Pin Markers -->
              <g id="delivery-map-pins">
                ${s.map(a=>{const d=a.id===F;return`
                    <g class="delivery-pin-group cursor-pointer" data-id="${a.id}" transform="translate(${a.x} ${a.y})">
                      <circle r="${d?"9":"6"}" fill="${d?"#f59e0b":a.zone==="direct"?"#ef4444":"#ff00a6"}" stroke="#ffffff" stroke-width="${d?"2.5":"1.5"}" fill-opacity="${d?"1":"0.85"}"/>
                    </g>
                  `}).join("")}
              </g>

              <!-- Active Highlight Pin Pulse -->
              <g id="delivery-active-pulse" transform="translate(${t.x} ${t.y})">
                <circle r="22" fill="#f59e0b" fill-opacity=".35" class="animate-ping"/>
              </g>

              <!-- Neighborhood Labels -->
              <g class="delivery-place-labels" id="delivery-map-text-labels">
                ${s.map(a=>{const d=a.id===F;return`<text x="${a.x}" y="${a.y-11}" text-anchor="middle" data-id="${a.id}" class="${d?"active-place":""}">${a.name}</text>`}).join("")}
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
            ${s.map(a=>{const d=a.id===F;return`
                <button 
                  type="button" 
                  data-id="${a.id}" 
                  class="delivery-chip-btn text-[11px] px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${d?"bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-md shadow-orange-500/30 scale-105":"bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:bg-white/[0.08] hover:text-white"}"
                >
                  <span>📍</span>
                  <span>${a.name}</span>
                  ${d?'<span class="text-xs">✓</span>':""}
                </button>
              `}).join("")}
          </div>

          <!-- Dynamic Result Card -->
          <div id="delivery-status-card" class="p-4 rounded-2xl border transition-all duration-300 mb-4 ${i?"bg-gradient-to-br from-emerald-950/40 via-[#18181c] to-emerald-950/20 border-emerald-500/40 shadow-lg shadow-emerald-950/30":"bg-gradient-to-br from-pink-950/40 via-[#18181c] to-pink-950/20 border-pink-500/40 shadow-lg shadow-pink-950/30"}">
            <div class="flex items-center justify-between gap-2 mb-2">
              <div class="flex items-center gap-2">
                <span class="text-base">${i?"⚡️":"🛵"}</span>
                <h3 class="text-sm sm:text-base font-black text-white" id="delivery-card-title">ارسال به ${t.name}</h3>
              </div>
              <span id="delivery-card-badge" class="text-[11px] font-bold px-2.5 py-1 rounded-full ${i?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-pink-500/20 text-pink-300 border border-pink-500/30"}">
                ${t.badge}
              </span>
            </div>
            
            <div class="flex items-center gap-2 text-xs font-bold text-amber-400 mb-2">
              <span>⏱ زمان تقریبی تحویل:</span>
              <span class="text-white" id="delivery-card-time">${t.time}</span>
            </div>

            <p class="text-xs text-zinc-300 leading-relaxed font-light mb-3" id="delivery-card-desc">
              ${t.desc}
            </p>

            <!-- Actions (Single Contextual Button: Green Phone for Direct, Pink Snappfood for Express) -->
            <div class="flex gap-2" id="delivery-card-actions">
              ${i?`
                <a id="delivery-action-link" href="tel:${e.phone||P.phoneNumber}" class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-xs sm:text-sm shadow-md transition active:scale-[0.98]">
                  ${b.phone}
                  <span>سفارش تلفنی به ${t.name}</span>
                  <span dir="ltr" class="inline-flex items-center tracking-wider mr-1 text-[11px]">
                    (<span>۰۲۱</span><span>-</span><span>۲۲۵۶۱۹۴۹</span>)
                  </span>
                </a>
              `:`
                <a id="delivery-action-link" href="${e.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#ff00a6] hover:bg-[#e00092] text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-500/25 transition active:scale-[0.98]">
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
            ${l}
          </p>
        </div>

      </div>
    </section>
  `}function be(){const e=document.getElementById("app");if(!e)return;const r=(h==null?void 0:h.restaurant)||P,n=(h==null?void 0:h.categories)||[],s=W();e.innerHTML=`
    <!-- Responsive Header (Mobile + Desktop) -->
    <header class="sticky top-0 z-40 glass-header border-b border-white/[0.08] px-4 sm:px-6 lg:px-8 py-3">
      <div class="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <!-- Logo & Title -->
        <a href="#" class="flex items-center gap-2 min-w-0">
          <div class="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]">
            <img 
              src="${pe}" 
              alt="${r.name}" 
              class="w-full h-full object-contain"
            />
          </div>
          <div class="flex flex-col text-right min-w-0">
            <div class="text-xs sm:text-sm md:text-base font-black text-white tracking-tight flex items-center gap-1.5 truncate">
              <span>${r.brandTitle}</span>
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
            </div>
            <div class="text-[10px] sm:text-[11px] md:text-xs text-amber-400 font-medium truncate hidden sm:block">
              ${r.brandSubtitle}
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
              value="${k}"
              placeholder="جستجوی سریع (پیتزا، برگر، پپرونی، استیک...)" 
              class="w-full bg-[#18181c] border border-white/[0.1] hover:border-amber-500/40 text-white text-xs rounded-xl pr-10 pl-9 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-zinc-500 transition shadow-inner"
            />
            <button 
              id="clear-desktop-search-btn" 
              class="${k?"":"hidden"} absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-400 hover:text-white"
              aria-label="پاک کردن جستجو"
            >
              ${b.close}
            </button>
          </div>
        </div>

        <!-- Header Actions -->
        <div class="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          
          <!-- Desktop Call Button (021 on left) -->
          <a 
            href="tel:${r.phone}"
            class="hidden lg:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25 text-xs font-bold transition flex-shrink-0"
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
            href="${r.snappfoodUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-pink-500/15 border border-pink-500/30 text-pink-400 hover:bg-pink-500/25 text-xs font-bold transition flex-shrink-0"
            title="سفارش در اسنپ‌فود"
          >
            ${b.scooter}
            <span>اسنپ‌فود</span>
          </a>

          <!-- PWA Install Button -->
          <button 
            id="btn-install-pwa" 
            class="hidden items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25 text-xs font-bold transition flex-shrink-0"
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
            class="md:hidden w-9 h-9 rounded-full bg-[#1e1e24] border border-white/[0.1] hover:border-amber-400/50 flex items-center justify-center text-zinc-300 hover:text-white transition flex-shrink-0"
          >
            ${b.search}
          </button>

          <!-- Order Tray (List) Button -->
          <button 
            id="open-tray-btn" 
            aria-label="سبد سفارش"
            class="relative px-2.5 sm:px-3.5 h-9 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 hover:text-white flex items-center gap-1.5 text-xs font-bold transition hover:bg-amber-500/30 flex-shrink-0"
          >
            ${b.tray}
            <span class="text-[11px] sm:text-xs">پیش‌فاکتور</span>
            <span id="header-tray-badge" class="${s>0?"":"hidden"} bg-amber-500 text-black font-black text-[10px] px-1.5 py-0.2 rounded-full min-w-[18px] text-center">
              ${v(s)}
            </span>
          </button>
        </div>
      </div>

      <!-- Mobile Expandable Search Input -->
      <div id="search-container" class="${A?"":"hidden"} md:hidden w-full max-w-md mx-auto pt-3">
        <div class="relative">
          <span class="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-zinc-400">
            ${b.search}
          </span>
          <input 
            type="text" 
            id="menu-search-input" 
            value="${k}"
            placeholder="جستجوی پیتزا، برگر، ساندویچ، سوخاری..." 
            class="w-full bg-[#18181c] border border-amber-500/50 text-white text-xs rounded-xl pr-10 pl-9 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-zinc-500 shadow-inner"
          />
          <button 
            id="clear-search-btn" 
            class="${k?"":"hidden"} absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-400 hover:text-white"
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
                <span>${r.statusBadge}</span>
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-pink-500/15 border border-pink-500/30 text-pink-400">
                ⭐ ${r.rating||"۴.۴"} در اسنپ‌فود
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
          ${n.map(l=>{const t=V===l.id;return`
              <button 
                data-category="${l.id}" 
                class="cat-btn flex-shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${t?"bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-black shadow-md shadow-orange-500/30":"bg-[#18181c] text-zinc-300 border border-white/[0.08] hover:bg-[#24242a] hover:text-white"}"
              >
                <span>${l.icon}</span>
                <span>${l.name}</span>
              </button>
            `}).join("")}
        </div>
      </nav>

      <!-- Main Food Menu Container (Responsive Grid: 2 cols mobile, 3 tablet, 4 desktop) -->
      <main id="menu-container"></main>

      <!-- Delivery Area Radar Section (Responsive Split Card) -->
      ${me(r)}

      <!-- PWA Dedicated Install Banner -->
      <div id="pwa-install-banner" class="w-full max-w-7xl mx-auto rounded-3xl p-5 sm:p-6 bg-gradient-to-r from-amber-500/10 via-[#18181c] to-orange-500/10 border border-amber-500/20 shadow-xl mt-8 text-right">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="flex items-center gap-3.5">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0e0e10] border border-amber-500/30 p-2 flex-shrink-0 shadow-lg flex items-center justify-center">
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
                <h3 class="text-sm md:text-base font-black text-white">${r.brandTitle}</h3>
                <span class="text-[11px] text-zinc-400">${r.tagline}</span>
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
                <span class="text-zinc-100 font-bold mr-1">${v(r.workingHours)}</span>
              </div>
            </div>

            <div class="flex items-start gap-2">
              ${b.location}
              <div>
                <span class="text-zinc-400 font-normal">آدرس:</span>
                <span class="text-zinc-100 font-bold mr-1">${v(r.address)}</span>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>

    <!-- Floating Sticky Order Tray Bar (Responsive Mobile/Desktop) -->
    <div 
      id="floating-tray-bar" 
      class="${s>0?"":"hidden"} fixed bottom-20 md:bottom-6 inset-x-4 md:inset-x-auto md:left-6 max-w-sm md:w-80 z-40 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black px-4 py-2.5 rounded-2xl shadow-2xl flex items-center justify-between cursor-pointer animate-pulse-glow"
    >
      <div class="flex items-center gap-2">
        <span class="text-base">📋</span>
        <span class="text-xs font-black">سفارش شما: <span id="floating-tray-count">${v(s)}</span> قلم</span>
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
          <span id="nav-tray-badge" class="${s>0?"":"hidden"} absolute top-1 right-3 bg-amber-400 text-black text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center">
            ${v(s)}
          </span>
        </button>
        <a href="tel:${r.phone}" class="contact-nav-item contact-nav-call" aria-label="تماس با آتیش">
          ${b.phone}<span>تماس</span>
        </a>
        <a href="${r.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="contact-nav-item contact-nav-snapp" aria-label="اسنپ‌فود">
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
          ${B.map((l,t)=>`
            <button 
              data-layer="${t}" 
              class="anatomy-tab-btn p-1.5 rounded-xl border text-center text-xs font-bold transition ${t===I?"bg-amber-500/20 border-amber-500 text-amber-300":"bg-white/[0.04] border-white/[0.08] text-zinc-400 hover:text-white"}"
            >
              <div class="text-sm mb-0.5">${l.icon}</div>
              <div class="truncate text-[9px]">لایه ${v(t+1)}</div>
            </button>
          `).join("")}
        </div>

        <!-- Layer Details Box -->
        <div id="anatomy-details-box" class="bg-[#1c1c22] border border-amber-500/20 rounded-xl p-3.5 mb-4">
          <div class="flex items-center gap-2 mb-1.5">
            <span id="anatomy-icon" class="text-xl">${B[I].icon}</span>
            <h3 id="anatomy-title" class="text-sm font-black text-amber-400">${B[I].title}</h3>
          </div>
          <p id="anatomy-desc" class="text-xs text-zinc-300 leading-relaxed font-light">
            ${B[I].desc}
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
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-[#0e0e10] border border-amber-500/30 p-1 shadow-md flex items-center justify-center">
              <img src="/icons/icon-192.png" alt="آیکون آتیش" class="w-full h-full object-contain" />
            </div>
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
  `,ge(),R()}function ee(){var t;const e=W(),r=document.getElementById("header-tray-badge");r&&(r.textContent=v(e),r.classList.toggle("hidden",e===0));const n=document.getElementById("floating-tray-bar"),s=document.getElementById("floating-tray-count");n&&s&&(s.textContent=v(e),n.classList.toggle("hidden",e===0));const l=document.getElementById("nav-tray-badge");l&&(l.textContent=v(e),l.classList.toggle("hidden",e===0)),(t=h.items)==null||t.forEach(i=>{const a=document.getElementById(`card-tray-count-${i.id}`);if(a){const d=te(i);d>0?(a.textContent=v(d),a.classList.remove("hidden"),a.classList.add("flex")):(a.classList.add("hidden"),a.classList.remove("flex"))}})}function C(e){const r=document.getElementById("toast-notification"),n=document.getElementById("toast-text");!r||!n||(n.textContent=e,r.classList.remove("opacity-0","-translate-y-4"),r.classList.add("opacity-100","translate-y-0"),setTimeout(()=>{r.classList.add("opacity-0","-translate-y-4"),r.classList.remove("opacity-100","translate-y-0")},2200))}function ge(){var E,M;const e=document.getElementById("toggle-search-btn"),r=document.getElementById("search-container"),n=document.getElementById("menu-search-input"),s=document.getElementById("clear-search-btn"),l=document.getElementById("desktop-search-input"),t=document.getElementById("clear-desktop-search-btn");function i(p,$=!1){if(k=p,l&&(l.value=p,t&&t.classList.toggle("hidden",p.length===0)),n&&(n.value=p,s&&s.classList.toggle("hidden",p.length===0)),R(),$&&p.length>0){const L=document.getElementById("categories-bar");if(L){const H=L.getBoundingClientRect();(H.top>250||H.bottom<0)&&L.scrollIntoView({behavior:"smooth",block:"start"})}}}function a(){i("",!1)}e&&r&&e.addEventListener("click",()=>{if(A=!A,r.classList.toggle("hidden",!A),A&&n){n.focus();const p=document.getElementById("categories-bar");p&&p.scrollIntoView({behavior:"smooth",block:"start"})}}),l&&l.addEventListener("input",p=>{i(p.target.value.trim(),!0)}),n&&n.addEventListener("input",p=>{i(p.target.value.trim(),!0)}),s&&s.addEventListener("click",()=>a()),t&&t.addEventListener("click",()=>a());const d=document.querySelectorAll(".cat-btn");d.forEach(p=>{p.addEventListener("click",()=>{d.forEach(L=>{L.className="cat-btn flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 bg-[#18181c] text-zinc-300 border border-white/[0.08] hover:bg-[#24242a] hover:text-white"}),p.className="cat-btn flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-black shadow-md shadow-orange-500/30",k&&a(),V=p.dataset.category;const $=document.getElementById(`sec-${V}`);if($){const H=document.body.getBoundingClientRect().top,ae=$.getBoundingClientRect().top-H;window.scrollTo({top:ae-120,behavior:"smooth"})}})});const o=document.getElementById("open-tray-btn"),c=document.getElementById("floating-tray-bar"),g=document.getElementById("nav-tray-btn"),m=document.getElementById("tray-modal"),y=()=>{N(),m==null||m.classList.remove("hidden")};o==null||o.addEventListener("click",y),c==null||c.addEventListener("click",y),g==null||g.addEventListener("click",y),m==null||m.addEventListener("click",p=>{p.target===m&&m.classList.add("hidden")});const z=document.getElementById("btn-open-anatomy"),u=document.getElementById("anatomy-modal"),x=document.getElementById("close-anatomy-btn");z==null||z.addEventListener("click",()=>{u==null||u.classList.remove("hidden")}),x==null||x.addEventListener("click",()=>{u==null||u.classList.add("hidden")}),u==null||u.addEventListener("click",p=>{p.target===u&&u.classList.add("hidden")}),document.querySelectorAll(".anatomy-tab-btn").forEach(p=>{p.addEventListener("click",()=>{I=parseInt(p.dataset.layer,10),document.querySelectorAll(".anatomy-tab-btn").forEach(($,L)=>{$.className=`anatomy-tab-btn p-1.5 rounded-xl border text-center text-xs font-bold transition ${L===I?"bg-amber-500/20 border-amber-500 text-amber-300":"bg-white/[0.04] border-white/[0.08] text-zinc-400 hover:text-white"}`}),document.getElementById("anatomy-icon").textContent=B[I].icon,document.getElementById("anatomy-title").textContent=B[I].title,document.getElementById("anatomy-desc").textContent=B[I].desc})}),(E=document.getElementById("anatomy-add-btn"))==null||E.addEventListener("click",()=>{O("b-7"),u==null||u.classList.add("hidden"),C("آتیش برگر به لیست اضافه شد")});const f=document.getElementById("item-modal");f==null||f.addEventListener("click",p=>{p.target===f&&f.classList.add("hidden")}),(M=document.getElementById("nav-menu-btn"))==null||M.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),document.querySelectorAll(".delivery-chip-btn").forEach(p=>{p.addEventListener("click",()=>{_(p.dataset.id)})}),document.querySelectorAll(".delivery-pin-group").forEach(p=>{p.addEventListener("click",()=>{_(p.dataset.id)})}),document.querySelectorAll("#delivery-map-text-labels text").forEach(p=>{p.addEventListener("click",()=>{_(p.dataset.id)})})}let j={};function te(e){if(!e)return 0;let r=w[e.id]||0;return e.shapes&&e.shapes.forEach(n=>{r+=w[`${e.id}:${n.id}`]||0}),r}function G(e){var n,s;if(!e)return null;if(e.includes(":")){const[l,t]=e.split(":"),i=h.items.find(d=>d.id===l);if(!i)return null;const a=((n=i.shapes)==null?void 0:n.find(d=>d.id===t))||((s=i.shapes)==null?void 0:s[0]);return{key:e,id:i.id,title:`${i.title} (${(a==null?void 0:a.name)||"کلاسیک"})`,image:(a==null?void 0:a.image)||i.image,ingredients:(a==null?void 0:a.id)==="heart"?"خمیر پیتزا طرح قلبی، "+(i.ingredients||""):i.ingredients,placeholderIcon:"🍕"}}const r=h.items.find(l=>l.id===e);return r?{key:e,id:r.id,title:r.title,image:r.image,ingredients:r.ingredients,placeholderIcon:r.placeholderIcon}:null}function O(e){w[e]=(w[e]||0)+1,q();const r=document.getElementById("tray-modal");r&&!r.classList.contains("hidden")&&N()}function ue(e){w[e]&&(w[e]-=1,w[e]<=0&&delete w[e],q(),N())}function xe(e){delete w[e],q(),N()}function he(){w={},q(),N()}function N(){var t,i,a,d;const e=document.getElementById("tray-modal-box"),r=(h==null?void 0:h.restaurant)||P;if(!e)return;const n=Object.keys(w),s=W();if(n.length===0){e.innerHTML=`
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
    `,(t=document.getElementById("close-empty-tray-btn"))==null||t.addEventListener("click",()=>{var o;(o=document.getElementById("tray-modal"))==null||o.classList.add("hidden")});return}let l=`📋 لیست اقلام سفارش - فست‌فود آتیش:
`;n.forEach(o=>{const c=G(o);c&&(l+=`• ${c.title} (${v(w[o])} عدد)
`)}),l+=`
📞 تلفن سفارش مستقیم: ۰۲۱-۲۲۵۶۱۹۴۹
📍 دروس، خیابان شهید کلاهدوز (دولت)`,e.innerHTML=`
    <!-- Modal Header -->
    <div class="p-4 border-b border-white/[0.08] flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="text-xl">📋</span>
        <div>
          <h2 class="text-sm font-black text-white">لیست سفارش شما</h2>
          <span class="text-[11px] text-amber-400">${v(s)} قلم غذا آماده سفارش</span>
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
      ${n.map(o=>{const c=G(o);if(!c)return"";const g=w[o];return`
          <div class="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div class="flex items-center gap-2.5">
              <div class="w-10 h-10 rounded-lg overflow-hidden bg-black/40 flex-shrink-0 border border-white/[0.08]">
                <img src="${S(c.image)}" alt="${c.title}" class="w-full h-full object-cover" onerror="this.src='/images/atish-burger.jpg'" />
              </div>
              <div class="text-right">
                <h4 class="text-xs font-bold text-white">${c.title}</h4>
                <span class="text-[10px] text-zinc-400 font-light truncate max-w-[120px] block">${c.ingredients||"آتیش"}</span>
              </div>
            </div>

            <!-- Quantity Counter Controls -->
            <div class="flex items-center gap-1.5 flex-shrink-0">
              <div class="flex items-center bg-[#222228] border border-white/[0.12] rounded-xl p-1 gap-1">
                <button 
                  type="button"
                  data-action="decrease" 
                  data-id="${o}" 
                  class="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/[0.15] active:scale-90 flex items-center justify-center text-zinc-300 hover:text-white transition"
                  aria-label="کاهش تعداد"
                >
                  <span class="pointer-events-none">${b.minus}</span>
                </button>
                <span class="text-xs sm:text-sm font-black text-amber-400 px-1.5 min-w-[20px] text-center select-none pointer-events-none">
                  ${v(g)}
                </span>
                <button 
                  type="button"
                  data-action="increase" 
                  data-id="${o}" 
                  class="w-7 h-7 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 active:scale-90 flex items-center justify-center text-amber-300 hover:text-white transition"
                  aria-label="افزایش تعداد"
                >
                  <span class="pointer-events-none">${b.plus}</span>
                </button>
              </div>

              <!-- Delete (Trash) Button -->
              <button 
                type="button"
                data-action="delete" 
                data-id="${o}" 
                class="w-8 h-8 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/25 active:scale-90 flex items-center justify-center text-red-400 hover:text-red-300 transition"
                aria-label="حذف این آیتم"
              >
                <span class="pointer-events-none">${b.trash}</span>
              </button>
            </div>
          </div>
        `}).join("")}
    </div>

    <!-- Action Buttons (021 on LEFT) -->
    <div class="p-3 mt-auto border-t border-white/[0.08] flex flex-col gap-2">
      <a 
        href="tel:${r.phone}"
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
        href="${r.snappfoodUrl}" 
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
          <span>کپی لیست سفارش</span>
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
  `,(i=document.getElementById("close-tray-btn"))==null||i.addEventListener("click",()=>{var o;(o=document.getElementById("tray-modal"))==null||o.classList.add("hidden")}),e.querySelectorAll("button[data-action]").forEach(o=>{o.addEventListener("click",c=>{c.stopPropagation(),c.preventDefault();const g=o.dataset.action,m=o.dataset.id;g==="increase"&&O(m),g==="decrease"&&ue(m),g==="delete"&&xe(m)})}),(a=document.getElementById("btn-copy-order"))==null||a.addEventListener("click",()=>{var o;(o=navigator.clipboard)==null||o.writeText(l).then(()=>{C("متن سفارش کپی شد")})}),(d=document.getElementById("btn-clear-tray"))==null||d.addEventListener("click",()=>{he()})}function S(e){return e?e.startsWith("./")?e.slice(1):e.startsWith("/")?e:"/"+e:""}function U(e,r){var i,a,d;if(!e)return;j[e.id]=r;const n=((i=e.shapes)==null?void 0:i.find(o=>o.id===r))||((a=e.shapes)==null?void 0:a[0]);if(!n)return;const s=document.getElementById(`card-img-${e.id}`);s&&(s.style.opacity="0.3",setTimeout(()=>{s.src=S(n.image),s.style.opacity="1"},120));const l=document.getElementById(`card-badge-${e.id}`);if(l){const o=n.badge||e.badge||"";l.textContent=o,l.className=o?"bg-black/90 text-amber-300 border border-amber-500/30 text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-lg shadow-sm whitespace-nowrap":"hidden"}const t=document.getElementById(`card-btn-text-${e.id}`);t&&(t.textContent=`افزودن ${n.shortName||n.name}`),(d=e.shapes)==null||d.forEach(o=>{const c=document.getElementById(`card-dot-${e.id}-${o.id}`);c&&(c.className=`h-1.5 rounded-full transition-all duration-300 ${o.id===r?"bg-amber-400 w-4 shadow":"bg-white/40 w-1.5"}`)})}function fe(e){var d,o,c,g;const r=document.getElementById("item-modal"),n=document.getElementById("item-modal-box");if(!r||!n)return;const s=e.shapes&&e.shapes.length>1;let l=s?j[e.id]||"normal":null,t=s?e.shapes.find(m=>m.id===l)||e.shapes[0]:null;const i=t?t.image:e.image,a=S(i);if(n.innerHTML=`
    <!-- Modal Photo Container with Touch Swipe and Arrow Controls -->
    <div class="relative w-full h-64 bg-gradient-to-b from-[#24242c] to-[#141417] overflow-hidden flex items-center justify-center select-none" id="modal-photo-container">
      <img 
        id="modal-main-img"
        src="${a}" 
        alt="${e.title}" 
        decoding="async"
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

      <!-- Badges in Photo Top-Right -->
      <div class="absolute top-3 right-3 flex flex-col gap-2 items-end z-30 pointer-events-none">
        ${e.isChefRecommendation?`
          <span class="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-[10px] sm:text-[11px] px-2.5 py-1 rounded-lg shadow-lg flex items-center gap-1 whitespace-nowrap">
            <span>⭐</span>
            <span>پیشنهاد سرآشپز</span>
          </span>
        `:""}
        <span 
          id="modal-badge"
          class="${t!=null&&t.badge||e.badge?"":"hidden"} bg-black/85 text-amber-300 border border-amber-500/30 text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap"
        >
          ${(t==null?void 0:t.badge)||e.badge||""}
        </span>
      </div>

      ${s?`
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
              class="h-2 rounded-full transition-all duration-300 ${m.id===l?"bg-amber-400 w-5 shadow":"bg-white/40 w-2"}"
            ></span>
          `).join("")}
        </div>
      `:""}
    </div>

    <div class="p-4 text-right">
      <div class="flex items-center justify-between gap-2 mb-2">
        <h3 class="text-base sm:text-lg font-black text-white" id="modal-title-text">${e.title}</h3>
        ${e.tag?`<span class="text-[10px] font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">${e.tag}</span>`:""}
      </div>

      ${s?`
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
            ${e.shapes.map(m=>{const y=m.id===l;return`
                <button 
                  type="button" 
                  data-modal-shape-btn="${m.id}"
                  class="py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center border transition-all ${y?"bg-amber-500 text-black border-amber-400 shadow-lg":"bg-[#222228] text-zinc-300 border-white/[0.08] hover:text-white hover:bg-white/[0.08]"}"
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
            ${s?`افزودن به لیست سفارش (${t.name})`:"افزودن به لیست سفارش"}
          </span>
        </button>
      </div>
    </div>
  `,r.classList.remove("hidden"),(d=document.getElementById("close-item-modal-btn"))==null||d.addEventListener("click",()=>{r.classList.add("hidden")}),s){const m=x=>{l=x,j[e.id]=x,t=e.shapes.find(p=>p.id===x)||e.shapes[0];const f=document.getElementById("modal-main-img");f&&(f.style.opacity="0.3",setTimeout(()=>{f.src=S(t.image),f.style.opacity="1"},120));const E=document.getElementById("modal-badge");if(E){const p=t.badge||e.badge||"";E.textContent=p,E.className=p?"bg-black/85 text-amber-300 border border-amber-500/30 text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap":"hidden"}document.querySelectorAll("[data-dot-shape]").forEach(p=>{const $=p.dataset.dotShape===x;p.className=`h-2 rounded-full transition-all duration-300 ${$?"bg-amber-400 w-5 shadow":"bg-white/40 w-2"}`}),document.querySelectorAll("[data-modal-shape-btn]").forEach(p=>{const $=p.dataset.modalShapeBtn===x;p.className=`py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 border transition-all ${$?"bg-amber-500 text-black border-amber-400 shadow-lg":"bg-[#222228] text-zinc-300 border-white/[0.08] hover:text-white hover:bg-white/[0.08]"}`});const M=document.getElementById("modal-btn-label");M&&(M.textContent=`افزودن به لیست سفارش (${t.name})`),U(e,x)},y=()=>{const f=(e.shapes.findIndex(E=>E.id===l)+1)%e.shapes.length;m(e.shapes[f].id)};(o=document.getElementById("modal-next-shape-btn"))==null||o.addEventListener("click",x=>{x.stopPropagation(),y()}),(c=document.getElementById("modal-prev-shape-btn"))==null||c.addEventListener("click",x=>{x.stopPropagation(),y()}),document.querySelectorAll("[data-modal-shape-btn]").forEach(x=>{x.addEventListener("click",f=>{f.stopPropagation(),m(x.dataset.modalShapeBtn)})});let z=0;const u=document.getElementById("modal-photo-container");u==null||u.addEventListener("touchstart",x=>{z=x.changedTouches[0].screenX},{passive:!0}),u==null||u.addEventListener("touchend",x=>{const f=x.changedTouches[0].screenX;Math.abs(f-z)>40&&y()},{passive:!0})}(g=document.getElementById("modal-add-tray-btn"))==null||g.addEventListener("click",()=>{let m=e.id,y=e.title;s&&t&&(m=`${e.id}:${t.id}`,y=`${e.title} (${t.name})`),O(m),r.classList.add("hidden"),C(`${y} به لیست اضافه شد`)})}function R(){var s,l;const e=document.getElementById("menu-container");if(!e||!h)return;const r=h.categories||[];let n=h.items||[];if(k){const t=D(k);if(n=n.filter(i=>{const a=D(i.title).includes(t),d=i.ingredients&&D(i.ingredients).includes(t),o=r.find(g=>g.id===i.categoryId),c=o&&D(o.name+" "+(o.title||"")).includes(t);return a||d||c}),n.length===0){e.innerHTML=`
        <div class="flex flex-col items-center justify-center py-16 text-center text-zinc-400 glass-card rounded-2xl p-6">
          <span class="text-5xl mb-3">🔍</span>
          <p class="text-base font-black text-white">غذایی مطابق «${X(k)}» پیدا نشد!</p>
          <p class="text-xs text-zinc-400 mt-1 mb-4">می‌توانید کلمه دیگری مانند «پیتزا»، «برگر»، «پپرونی» یا «سوخاری» را جستجو فرمایید.</p>
          <button id="reset-search-btn" class="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black text-xs font-black hover:opacity-90 transition shadow-md">
            نمایش کل منو
          </button>
        </div>
      `,(s=document.getElementById("reset-search-btn"))==null||s.addEventListener("click",()=>{k="";const i=document.getElementById("desktop-search-input"),a=document.getElementById("menu-search-input"),d=document.getElementById("clear-search-btn"),o=document.getElementById("clear-desktop-search-btn");i&&(i.value=""),a&&(a.value=""),d&&d.classList.add("hidden"),o&&o.classList.add("hidden"),R()});return}e.innerHTML=`
      <div class="flex items-center justify-between mb-4 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs">
        <div class="flex items-center gap-2 text-amber-300 font-bold">
          <span>🔍</span>
          <span>نتایج جستجو برای: «${X(k)}»</span>
          <span class="bg-amber-500 text-black font-black text-[10px] px-2 py-0.5 rounded-full mr-1">
            ${v(n.length)} غذا
          </span>
        </div>
        <button id="reset-search-btn-top" class="text-zinc-400 hover:text-white text-[11px] underline">
          پاک کردن جستجو ✕
        </button>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        ${n.map((i,a)=>Y(i,a<4)).join("")}
      </div>
    `,(l=document.getElementById("reset-search-btn-top"))==null||l.addEventListener("click",()=>{k="";const i=document.getElementById("desktop-search-input"),a=document.getElementById("menu-search-input"),d=document.getElementById("clear-search-btn"),o=document.getElementById("clear-desktop-search-btn");i&&(i.value=""),a&&(a.value=""),d&&d.classList.add("hidden"),o&&o.classList.add("hidden"),R()}),Z();return}e.innerHTML=r.map((t,i)=>{const a=n.filter(d=>d.categoryId===t.id);return a.length===0?"":`
      <section class="mb-10 scroll-mt-28" id="sec-${t.id}">
        <!-- Section Header -->
        <div class="flex items-center justify-between mb-4 pb-2.5 border-b border-white/[0.08]">
          <div class="flex flex-col text-right">
            <h2 class="text-base sm:text-lg md:text-xl font-black text-white flex items-center gap-2">
              <span>${t.icon}</span>
              <span>${t.title||t.name}</span>
            </h2>
            ${t.subtitle?`<span class="text-xs text-zinc-400 font-light mt-0.5">${t.subtitle}</span>`:""}
          </div>
          <span class="bg-[#18181c] text-amber-400 border border-white/[0.08] text-[11px] font-black px-3 py-1 rounded-full flex-shrink-0">
            ${v(a.length)} غذا
          </span>
        </div>

        <!-- Food Grid (Responsive: 2 cols on mobile, 3 on tablet, 4 on desktop) -->
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          ${a.map((d,o)=>{const c=i===0&&o<4;return Y(d,c)}).join("")}
        </div>
      </section>
    `}).join(""),Z()}function Y(e,r=!1){const n=te(e),s=e.shapes&&e.shapes.length>1,l=j[e.id]||"normal",t=s?e.shapes.find(c=>c.id===l)||e.shapes[0]:null,i=S(t?t.image:e.image),a=(t==null?void 0:t.badge)||e.badge,d=!!e.isChefRecommendation,o=r?'loading="eager" fetchpriority="high"':'loading="lazy"';return`
    <article 
      data-id="${e.id}" 
      class="food-card glass-card rounded-2xl overflow-hidden shadow-sm flex flex-col group transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1 hover:shadow-xl cursor-pointer text-right ${d?"border-amber-500/40 ring-1 ring-amber-500/25 shadow-amber-950/20":""}"
    >
      <!-- Food Image Container -->
      <div 
        class="compact-photo-frame relative w-full bg-[#1e1e24] overflow-hidden flex items-center justify-center select-none"
        data-photo-container="${e.id}"
      >
        ${i?`
          <img 
            id="card-img-${e.id}"
            src="${i}" 
            alt="${e.title}" 
            ${o}
            decoding="async"
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
        <div class="absolute top-2 right-2 flex flex-col gap-2 items-end pointer-events-none z-10">
          ${d?`
            <span class="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-[9px] md:text-[10px] px-2 py-0.5 rounded-lg shadow-md flex items-center gap-1 whitespace-nowrap">
              <span>⭐</span>
              <span>پیشنهاد سرآشپز</span>
            </span>
          `:""}
          <span 
            id="card-badge-${e.id}"
            class="${a?"":"hidden"} bg-black/90 text-amber-300 border border-amber-500/30 text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-lg shadow-sm whitespace-nowrap"
          >
            ${a||""}
          </span>
        </div>

        <div 
          id="card-tray-count-${e.id}" 
          class="${n>0?"flex":"hidden"} absolute top-2 left-2 bg-amber-500 text-black font-black text-[10px] md:text-xs w-5 h-5 md:w-6 md:h-6 rounded-full items-center justify-center shadow z-10 pointer-events-none"
        >
          ${v(n)}
        </div>

        ${s?`
          <!-- Minimal Dots Indicator showing available photo shapes -->
          <div class="absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-1.5 z-10 pointer-events-none">
            ${e.shapes.map(c=>`
              <span 
                id="card-dot-${e.id}-${c.id}"
                class="h-1.5 rounded-full transition-all duration-300 ${c.id===l?"bg-amber-400 w-4 shadow":"bg-white/40 w-1.5"}"
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
              ${s?`افزودن ${t.shortName||t.name}`:"افزودن به لیست سفارش"}
            </span>
          </button>
        </div>
      </div>
    </article>
  `}function Z(){document.querySelectorAll(".food-card").forEach(e=>{const r=e.dataset.id,n=h.items.find(t=>t.id===r);if(!n)return;let s=!1;if(e.addEventListener("click",t=>{if(s){s=!1;return}t.target.closest('button[data-action="add-tray"]')||t.target.closest("a")||fe(n)}),n.shapes&&n.shapes.length>1){let t=0,i=0;const a=e.querySelector(`[data-photo-container="${n.id}"]`);a==null||a.addEventListener("touchstart",o=>{t=o.changedTouches[0].screenX,i=o.changedTouches[0].screenY,s=!1},{passive:!0}),a==null||a.addEventListener("touchend",o=>{const c=o.changedTouches[0].screenX,g=o.changedTouches[0].screenY,m=c-t,y=g-i;if(Math.abs(m)>30&&Math.abs(m)>Math.abs(y)){s=!0;const u=(j[n.id]||"normal")==="normal"?"heart":"normal";U(n,u),setTimeout(()=>{s=!1},200)}},{passive:!0});let d=!1;a==null||a.addEventListener("mousedown",o=>{d=!0,t=o.screenX,s=!1}),a==null||a.addEventListener("mouseup",o=>{if(!d)return;d=!1;const c=o.screenX;if(Math.abs(c-t)>30){s=!0;const m=(j[n.id]||"normal")==="normal"?"heart":"normal";U(n,m),setTimeout(()=>{s=!1},200)}}),a==null||a.addEventListener("mouseleave",()=>{d=!1})}const l=e.querySelector('button[data-action="add-tray"]');l==null||l.addEventListener("click",t=>{t.stopPropagation();let i=r,a=n.title;if(n.shapes&&n.shapes.length>1){const d=j[n.id]||"normal",o=n.shapes.find(c=>c.id===d)||n.shapes[0];i=`${n.id}:${d}`,a=`${n.title} (${o.name})`}O(i),C(`${a} به لیست اضافه شد`)})})}function ve(){if("serviceWorker"in navigator&&window.location.protocol.startsWith("http")&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(c=>{console.log("SW registration error:",c)})}),window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)return;const r=/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()),n=document.getElementById("btn-install-pwa"),s=document.getElementById("pwa-install-banner"),l=document.getElementById("pwa-banner-install-btn"),t=document.getElementById("pwa-banner-close-btn"),i=document.getElementById("ios-install-modal"),a=document.getElementById("close-ios-modal-btn"),d=document.getElementById("confirm-ios-modal-btn");r&&(n==null||n.classList.remove("hidden"),n==null||n.classList.add("flex"),s==null||s.classList.remove("hidden")),window.addEventListener("beforeinstallprompt",c=>{c.preventDefault(),T=c,n==null||n.classList.remove("hidden"),n==null||n.classList.add("flex"),s==null||s.classList.remove("hidden")});const o=async()=>{if(r){i==null||i.classList.remove("hidden");return}if(T){T.prompt();const{outcome:c}=await T.userChoice;c==="accepted"&&(n==null||n.classList.add("hidden"),s==null||s.classList.add("hidden"),C("اپلیکیشن با موفقیت نصب شد")),T=null}else C("برای نصب، از منوی مرورگر گزینه Add to Home Screen را بزنید.")};n==null||n.addEventListener("click",o),l==null||l.addEventListener("click",o),t==null||t.addEventListener("click",()=>{s==null||s.classList.add("hidden")}),a==null||a.addEventListener("click",()=>{i==null||i.classList.add("hidden")}),d==null||d.addEventListener("click",()=>{i==null||i.classList.add("hidden")}),i==null||i.addEventListener("click",c=>{c.target===i&&i.classList.add("hidden")})}function we(){if(typeof window>"u")return;const e=[];(restaurantMenuData.items||[]).forEach(l=>{l.image&&e.push(S(l.image)),l.shapes&&l.shapes.forEach(t=>{t.image&&e.push(S(t.image))})});const r=[...new Set(e)];let n=0;function s(){if(n>=r.length)return;const l=r.slice(n,n+4);n+=4,l.forEach(t=>{const i=new Image;i.decoding="async",i.src=t}),n<r.length&&("requestIdleCallback"in window?requestIdleCallback(s,{timeout:1200}):setTimeout(s,250))}"requestIdleCallback"in window?requestIdleCallback(s,{timeout:2e3}):setTimeout(s,500)}be();ee();ve();we();
