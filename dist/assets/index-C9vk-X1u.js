(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(s){if(s.ep)return;s.ep=!0;const t=r(s);fetch(s.href,t)}})();const F={brandTitle:"فست‌فود آتیش",brandSubtitle:"طعم اصیل و لذیذ فست‌فود آتیش",tagline:"منوی دیجیتال و سفارش دلیوری فست‌فود آتیش",phoneNumber:"02122561949",snappfoodUrl:"https://snappfood.ir/restaurant/menu/پیتزا_آتیش-r-p44gzx/",instagramUrl:"https://instagram.com/atishfood",workingHours:"همه روزه از ۱۱:۳۰ صبح تا ۲۳:۱۵ شب",address:"خیابان دولت تهران، محله دروس، خیابان کلاهدوز (دولت)، روبه‌روی بانک ملت بین کوچه خرداد و معتمدی، پلاک ۱۰۰"},fe={name:"آتیش",brandTitle:"آتیش | Menu",brandSubtitle:"طعم اصیل و لذیذ رستوران آتیش",tagline:"منوی دیجیتال آتیش",phone:"02122561949",snappfoodUrl:"https://snappfood.ir/restaurant/menu/پیتزا_آتیش-r-p44gzx/",instagramUrl:"https://instagram.com/atishfood",workingHours:"همه روزه از ۱۱:۳۰ صبح تا ۲۳:۱۵ شب",address:"خیابان دولت تهران، محله دروس، خیابان کلاهدوز (دولت)، روبه‌روی بانک ملت بین کوچه خرداد و معتمدی، پلاک ۱۰۰",rating:"۴.۵"},he=[{id:"american-pizzas",name:"پیتزا آمریکایی",icon:"🍕",title:"پیتزاهای آمریکایی",subtitle:""},{id:"family-pizzas",name:"پیتزا خانواده",icon:"🍕",title:"پیتزاهای خانواده",subtitle:""},{id:"italian-pizzas",name:"پیتزا ایتالیایی",icon:"🍕",title:"پیتزاهای ایتالیایی",subtitle:""},{id:"burgers",name:"برگرها",icon:"🍔",title:"برگر",subtitle:""},{id:"sandwiches",name:"ساندویچ‌ها",icon:"🌭",title:"ساندویچ‌ها",subtitle:""},{id:"fried",name:"سوخاری‌ها",icon:"🍗",title:"مرغ و سوخاری",subtitle:""},{id:"sides",name:"پیش‌ غذا",icon:"🍟",title:"پیش‌ غذا",subtitle:""},{id:"drinks",name:"نوشیدنی‌ها",icon:"🥤",title:"نوشیدنی‌ها",subtitle:""}],ve=[{id:"ap-1",categoryId:"american-pizzas",isFeatured:!0,isChefRecommendation:!0,title:"پیتزا آمریکایی مخصوص",tag:null,badge:"دارای طرح قلبی ❤️",price:749e3,ingredients:"خمیر پیتزا پنجره ای آمریکایی، مرغ، ژامبون گوشت 90%، قارچ، فلفل دلمه ای، پنیر پیتزا",image:"./images/Makhsos-American.webp",placeholderIcon:"🍕",shapes:[{id:"normal",name:"مستطیل کلاسیک",shortName:"مستطیل",icon:"",image:"./images/Makhsos-American.webp",badge:null,price:749e3},{id:"heart",name:"طرح قلبی",shortName:"قلبی",icon:"",image:"images/heart-normal.webp",badge:"❤️ طرح قلبی",price:749e3}]},{id:"ap-2",categoryId:"american-pizzas",isFeatured:!1,isChefRecommendation:!0,title:"پیتزا پپرونی",tag:null,badge:"دارای طرح قلبی ❤️",price:739e3,ingredients:"خمیر پیتزا پنجره ای آمریکایی، پپرونی 90%، فلفل دلمه ای، پنیر پیتزا",image:"./images/Peperoni-American-Pizza.webp",placeholderIcon:"🍕",shapes:[{id:"normal",name:"مستطیل کلاسیک",shortName:"مستطیل",icon:"",image:"./images/Peperoni-American-Pizza.webp",badge:null,price:739e3},{id:"heart",name:"طرح قلبی",shortName:"قلبی",icon:"",image:"images/heart-peperoni.webp",badge:"❤️ طرح قلبی",price:739e3}]},{id:"ap-3",categoryId:"american-pizzas",isFeatured:!1,isChefRecommendation:!0,title:"پیتزا مرغ و قارچ",tag:null,badge:null,price:749e3,ingredients:"خمیر پیتزا پنجره ای آمریکایی، مرغ نگینی شده، قارچ، پنیر پیتزا",image:"./images/Chicken-American-Pizza.webp",placeholderIcon:"🍕"},{id:"ap-4",categoryId:"american-pizzas",isFeatured:!1,isChefRecommendation:!0,title:"پیتزا گوشت و قارچ",tag:null,badge:null,price:879e3,ingredients:"خمیر پیتزا پنجره ای آمریکایی، گوشت گوساله ریش ریش شده، قارچ، پنیر پیتزا",image:"./images/meat-American-Pizza.webp",placeholderIcon:"🍕"},{id:"ap-5",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا سبزیجات",tag:null,badge:null,price:599e3,ingredients:"خمیر پیتزا آمریکایی، ذرت، نخود فرنگی، هویج، قارچ، فلفل دلمه ای، پنیر پیتزا",image:"./images/Sabzi-American.webp",placeholderIcon:"🍕"},{id:"ap-6",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا قارچ و سوسیس",tag:null,badge:null,price:61e4,ingredients:"خمیر آمریکایی ، قارچ ، سوسیس اسلایس ، پنیر میکس ، سس مخصوص آتیش",image:"images/american-Sosis-mashroom.webp",placeholderIcon:"🍕"},{id:"ap-7",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا قارچ و پنیر",tag:null,badge:null,price:499e3,ingredients:"خمیر پیتزا آمریکایی، قارچ، پنیر پیتزا",image:"./images/Mashroom-Pizza.webp",placeholderIcon:"🍕"},{id:"fp-1",categoryId:"family-pizzas",isFeatured:!0,title:"پیتزا چهارطعم خانواده",tag:null,badge:null,price:1549e3,ingredients:"ترکیبی از چهار طعم مختلف پیتزا با قابلیت انتخاب و تغییر طعم‌ها به سلیقه شما.",image:"./images/4F-Family.webp",placeholderIcon:"🍕"},{id:"ip-1",categoryId:"italian-pizzas",isFeatured:!0,title:"پیتزا ایتالیایی آتیش",tag:null,badge:null,price:989e3,ingredients:"خمیر پیتزا ایتالیایی، مرغ، ژامبون گوشت 90%، قارچ، فلفل دلمه ای، زیتون، پنیر پیتزا",image:"./images/Atish-Italian.webp",placeholderIcon:"🍕"},{id:"ip-2",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا پپرونی ایتالیایی",tag:null,badge:null,price:989e3,ingredients:"خمیر پیتزا ایتالیایی، پپرونی 90%، فلفل دلمه ای، پنیر پیتزا",image:"./images/Peperoni-Italian.webp",placeholderIcon:"🍕"},{id:"ip-3",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا مرغ و قارچ ایتالیایی",tag:null,badge:null,price:979e3,ingredients:"خمیر پیتزا ایتالیایی، مرغ، قارچ، زیتون، فلفل دلمه ای، پنیر پیتزا",image:"./images/Chicken-Italian.webp",placeholderIcon:"🍕"},{id:"ip-5",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا استیک ایتالیایی",tag:null,badge:null,price:1089e3,ingredients:"خمیر پیتزا ایتالیایی، گوشت گوساله تکه ای، قارچ، زیتون، فلفل دلمه ای، پنیر پیتزا",image:"images/Steak-Italian-Pizza.webp",placeholderIcon:"🍕"},{id:"b-1",categoryId:"burgers",isFeatured:!0,title:"همبرگر",tag:null,badge:null,price:629e3,ingredients:"یک عدد برگر دست ساز گوشت گوساله ۱۵۰ گرمی، گوجه، کاهو، خیارشور، پیاز، سس مخصوص، نان برگر",image:"images/burger.webp",placeholderIcon:"🍔"},{id:"b-2",categoryId:"burgers",isFeatured:!1,title:"چیزبرگر",tag:null,badge:null,price:649e3,ingredients:"یک عدد برگر دست ساز گوشت گوساله ۱۵۰ گرمی، پنیر گودا، خیارشور، گوجه، کاهو، سس مخصوص، نان برگر",image:"images/cheese-burger.webp",placeholderIcon:"🍔"},{id:"b-3",categoryId:"burgers",isFeatured:!1,title:"قارچ برگر",tag:null,badge:null,price:659e3,ingredients:"یک عدد برگر دست ساز گوشت گوساله ۱۵۰ گرمی، قارچ، پنیر، پیاز، گوجه، کاهو، خیارشور، نان برگر",image:"images/mashroom-burger.webp",placeholderIcon:"🍔"},{id:"b-4",categoryId:"burgers",isFeatured:!1,title:"دبل چیزبرگر",tag:null,badge:null,price:889e3,ingredients:"دو عدد گوشت برگر ۱۲۰ گرمی ، نان برگر ، پیاز ، کاهو ، گوجه ، خیار شور ، پنیر گودا ، سس ساندویچ",image:"images/double-cheese-burger.webp",placeholderIcon:"🍔"},{id:"b-5",categoryId:"burgers",isFeatured:!1,title:"دبل برگر",tag:null,badge:null,price:869e3,ingredients:"دو عدد برگر ۱۲۰ گرمی ، کاهو ، گوجه ، خیارشور ، نان برگر ، سس ساندویچ",image:"images/double-burger.webp",placeholderIcon:"🍔"},{id:"b-6",categoryId:"burgers",isFeatured:!1,title:"دبل ماشروم",tag:null,badge:null,price:899e3,ingredients:"دو عدد برگر ۱۲۰ گرمی ، پیاز ، قارچ ، پنیر گودا ، نان برگر ، سس مخصوص",image:"images/double-Mashroom-burger.webp",placeholderIcon:"🍔"},{id:"b-7",categoryId:"burgers",isFeatured:!1,title:"آتیش برگر",tag:null,badge:null,price:799e3,ingredients:"یک عدد برگر دست ساز گوشت گوساله ۱۵۰ گرمی، ۱۵۰ گرم فیله مرغ گریل، پنیر گودا، خیارشور، گوجه، کاهو، سس مخصوص، نان برگر",image:"images/atish-burger.webp",placeholderIcon:"🍔"},{id:"b-8",categoryId:"burgers",isFeatured:!1,title:"زینگر",tag:null,badge:null,price:599e3,ingredients:"۱۳۰ گرم فیله مرغ سوخاری تند، کاهو، گوجه، سس مخصوص، نان برگر",image:"images/Zinger.webp",placeholderIcon:"🍔"},{id:"b-9",categoryId:"sandwiches",isFeatured:!1,title:"گریل",tag:null,badge:null,price:649e3,ingredients:"۱۶۰ گرم فیله مرغ گریل شده، پنیر گودا، قارچ، گوجه، کاهو، نان باگت",image:"images/Giril.webp",placeholderIcon:"🌭"},{id:"b-10",categoryId:"sandwiches",isFeatured:!1,title:"رست بیف",tag:null,badge:null,price:699e3,ingredients:"کاهو ، گوجه ، خیارشور ، ۸۰ گرم گوشت گوساله مزه دار ، قارچ سس مخصوص و نان باگت",image:"images/RoastBeef.webp",placeholderIcon:"🌭"},{id:"sw-1",categoryId:"sandwiches",isFeatured:!0,title:"فیله سوخاری با پنیر",tag:null,badge:null,price:699e3,ingredients:"۱۲۰ گرم فیله مرغ سوخاری، پنیر گودا، گوجه، کاهو، نان باگت",image:"images/file.webp",placeholderIcon:"🌭"},{id:"sw-2",categoryId:"sandwiches",isFeatured:!1,title:"سوپرسوپریم",tag:null,badge:null,price:761e3,ingredients:"۱۲۰ گرم فیله مرغ سوخاری، ۲ ورق ژامبون گوشت ، پنیر گودا، کاهو، گوجه، نان باگت",image:"./images/jambon-sandwhich.webp",placeholderIcon:"🌭"},{id:"sw-3",categoryId:"sandwiches",isFeatured:!1,title:"هات داگ",tag:null,badge:null,price:529e3,ingredients:"یک عدد هات داگ ۹۰٪، قارچ، پنیر گودا، کاهو، گوجه، سس مخصوص، نان باگت",image:"images/Hotdog.webp",placeholderIcon:"🌭"},{id:"fr-1",categoryId:"fried",isFeatured:!0,title:"فیله سوخاری سه تیکه",tag:null,badge:null,price:789e3,ingredients:"۳ عدد فیله مرغ سوخاری، ۲۵۰ گرم سیب زمینی سرخ کرده، یک عدد نان بروتچن",image:"./images/Crispy-Chicken-Tenders.webp",placeholderIcon:"🍗"},{id:"fr-2",categoryId:"fried",isFeatured:!1,title:"فیله سوخاری چهار تیکه",tag:null,badge:null,price:899e3,ingredients:"۴ عدد فیله مرغ سوخاری، ۲۵۰ گرم سیب زمینی سرخ کرده، یک عدد نان بروتچن",image:"./images/4-Crispe.webp",placeholderIcon:"🍗"},{id:"fr-3",categoryId:"fried",isFeatured:!1,title:"قارچ سوخاری",tag:null,badge:null,price:349e3,ingredients:"۲۴۰ گرم قارچ سوخاری",image:"./images/Mashroom.webp",placeholderIcon:"🍄"},{id:"sd-1",categoryId:"sides",isFeatured:!0,title:"سیب زمینی سرخ‌کرده",tag:null,badge:null,price:339e3,ingredients:"۲۵۰ گرم سیب زمینی سرخ کرده",image:"./images/French-Fries.webp",placeholderIcon:"🍟"},{id:"sd-2",categoryId:"sides",isFeatured:!1,title:"سیب‌زمینی ویژه",tag:null,badge:null,price:469e3,ingredients:"۳۰۰ گرم سیب زمینی، ژامبون گوشت، قارچ، فلفل دلمه ای",image:"./images/Fries-Special.webp",placeholderIcon:"🍟"},{id:"dr-1",categoryId:"drinks",isFeatured:!0,title:"نوشابه خانواده",tag:null,badge:null,price:140400,ingredients:"",image:"./images/Big-Coke.webp",placeholderIcon:"🥤"},{id:"dr-2",categoryId:"drinks",isFeatured:!1,title:"نوشابه کوچک",tag:null,badge:null,price:92550,ingredients:"",image:"./images/Coke.webp",placeholderIcon:"🥤"},{id:"dr-3",categoryId:"drinks",isFeatured:!1,title:"دلستر",tag:null,badge:null,price:101e3,ingredients:"",image:"./images/Delester.webp",placeholderIcon:"🥤"},{id:"dr-4",categoryId:"drinks",isFeatured:!1,title:"دوغ",tag:null,badge:null,price:45e3,ingredients:"",image:"./images/Dogh.webp",placeholderIcon:"🥤"},{id:"dr-5",categoryId:"drinks",isFeatured:!1,title:"آب معدنی کوچک",tag:null,badge:null,price:25e3,ingredients:"",image:"./images/Water.webp",placeholderIcon:"💧"}],ye={restaurant:fe,categories:he,items:ve},we={cx:260,cy:210,radius:115},ke={cx:260,cy:210,radius:185},$e=[{id:"dowlat",name:"دولت (کلاهدوز)",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۱۵ تا ۲۰ دقیقه",desc:"محل استقرار رستوران در خیابان کلاهدوز — سریع‌ترین ارسال با پیک مستقیم آتیش",x:175,y:205},{id:"dibaji",name:"دیباجی",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۱۵ تا ۲۰ دقیقه",desc:"محدوده همجوار رستوران (دیباجی جنوبی و شمالی) — ارسال مستقیم و فوق‌سریع با پیک اختصاصی",x:250,y:145},{id:"ekhtiarieh",name:"اختیاریه",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۱۵ تا ۲۰ دقیقه",desc:"محدوده شمالی کلاهدوز تا بزرگراه صدر — ارسال سریع و مستقیم با پیک اختصاصی",x:320,y:145},{id:"darrous",name:"دروس",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۲۰ تا ۲۵ دقیقه",desc:"محدوده جنوبی رستوران (پایین خیابان دولت) — ارسال مستقیم و گرم با پیک اختصاصی آتیش",x:260,y:285},{id:"pasdaran",name:"پاسداران",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۲۰ تا ۲۵ دقیقه",desc:"ضلع شرقی رستوران — در محدوده تحت پوشش سریع پیک مستقیم آتیش",x:360,y:215},{id:"gholhak",name:"قلهک",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۳۰ تا ۳۵ دقیقه",desc:"ضلع غربی و محدوده خیابان شریعتی — در محدوده پوشش سریع پیک مستقیم رستوران",x:160,y:245},{id:"qeytarieh",name:"قیطریه / اندرزگو",zone:"express",badge:"اسنپ‌فود / اکسپرس 🛵",time:"۳۰ تا ۳۵ دقیقه",desc:"بالای بزرگراه صدر و همجوار تجریش — سفارش آنلاین و تحویل اکسپرس در اسنپ‌فود",x:185,y:85},{id:"tajrish",name:"تجریش",zone:"express",badge:"اسنپ‌فود / اکسپرس 🛵",time:"۴۰ تا ۵۰ دقیقه",desc:"محدوده شمال‌غرب و میدان تجریش — سفارش آنلاین و ارسال از طریق اسنپ‌فود",x:130,y:95},{id:"niavaran",name:"نیاوران",zone:"express",badge:"اسنپ‌فود / اکسپرس 🛵",time:"۳۰ تا ۳۵ دقیقه",desc:"شعاع اکسپرس شمال تهران — سفارش آنلاین و ارسال در اسنپ‌فود",x:315,y:55},{id:"heravi",name:"هروی",zone:"express",badge:"اسنپ‌فود / اکسپرس 🛵",time:"۴۰ تا ۵۰ دقیقه",desc:"ضلع جنوب‌شرق پاسداران — سفارش آنلاین و ارسال اکسپرس در اسنپ‌فود",x:415,y:275},{id:"seyedkhandan",name:"سیدخندان",zone:"express",badge:"اسنپ‌فود / اکسپرس 🛵",time:"۴۰ تا ۵۰ دقیقه",desc:"شعاع اکسپرس جنوب — سفارش آنلاین و ارسال در اسنپ‌فود",x:215,y:375}],Ie="این نقشه فقط نمایی تقریبی از محدوده ارسال است؛ مرزها و فاصله‌ها دقیق نیستند. برای استعلام دقیق آدرس خود، با شماره ۲۲۵۶۱۹۴۹ تماس حاصل فرمایید.",ce={restaurantArea:we,snappfoodArea:ke,neighborhoods:$e,note:Ie},X=["20dfd61e0cb3cd451d11597151d787b13f6ff0483cf1159cce00210c89921842","6c851276bdba79736d4dc111ba6061b77d862ed581c3657e170aee12631f5220","404d07aa99a8feec84c26688ce08d8454528e044dddce2ca8798d119c2d8bacd","d83d1f4e0c61d3274ad6608cd4e69f496eca6f1102a492fc75d697eefd3eec98","a6a7f34209fcc9b9fefc32580bca1741d5b780ec3d78a02ceb17c33fda347830","2eff9dea1c0ee35c7d0fe28f3af26c8562299fd417cd1e71a89188ae5bda364d","3dabf32eef9da2caf285ecc8221ef90c2a3d3309ebfdb38aa6e9fd33bd46d8c6","417c08b211db4425c5aeb5f0a0f90050aa5aa1c0b9f10475d8197f5d479345aa","df7cf129978c548b43d778f7b42da50370023c8bdeeabf1036071bf3fdf73bee","6dcc41265fc65b2b669f21237026a8bbda77bc37cde1590caf59159ab03520f0","6fcda36417001f8c5d74644427d99634b9a7185576443f5b73f887fbccdad74d","a2d6ea8c502784370e6bfa622d76ce95807c04a45d19546f7dd0e88eb847204b","2b11c2050ec85002d3c02f50a023579b64d0e1b835eadcce5623256750186d12","180d786fbd2a58c70c23efe68acc6f4d12bd63f2778d8f94e6a3e27e2f956172","163eb985597045d293af032488d44a37213ceb82966a9229b3cf35c624301a6f"],Ee="/images/logo.webp";let z=ye,ae=z.categories?.[0]?.id||"american-pizzas",M="",O=!1,B=JSON.parse(localStorage.getItem("atish_order_tray")||"{}"),A=3,U="darrous",_=null;function w(e){if(e==null)return"";const a=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];return e.toString().replace(/\d/g,r=>a[parseInt(r,10)])}function Z(e){return e?String(e).toLowerCase().replace(/[ي]/g,"ی").replace(/[ك]/g,"ک").replace(/[آأإ]/g,"ا").replace(/[ؤ]/g,"و").replace(/[ة]/g,"ه").replace(/[\u200c\s]+/g," ").trim():""}function re(e){return e?String(e).replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[a]):""}function J(){return Object.values(B).reduce((e,a)=>e+a,0)}function S(e){if(e==null||e===""||isNaN(e))return"";const a=Number(e);return a===0?"رایگان":`${w(a.toLocaleString("en-US"))} تومان`}function V(){return Object.entries(B).reduce((e,[a,r])=>{const n=Q(a);return e+(n&&n.price?Number(n.price)*r:0)},0)}function W(){localStorage.setItem("atish_order_tray",JSON.stringify(B)),be()}function pe(){const a=(typeof window<"u"?new URLSearchParams(window.location.search):null)?.get("theme")?.toLowerCase();let r,n,s,t=!1;if(typeof Temporal<"u"&&Temporal.Now&&Temporal.PlainMonthDay&&Temporal.PlainDate){const i=Temporal.Now.zonedDateTimeISO("Asia/Tehran").toPlainDate();r=i.year,n=i.month,s=i.day;const d=Temporal.PlainMonthDay.from({month:11,day:22,calendar:"iso8601"}).toPlainDate({year:r}),l=Temporal.PlainMonthDay.from({month:1,day:5,calendar:"iso8601"}).toPlainDate({year:r});t=Temporal.PlainDate.compare(i,d)>=0||Temporal.PlainDate.compare(i,l)<=0}else[r,n,s]=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Tehran"}).format(new Date).split("-").map(Number),t=n===11&&s>=22||n===12||n===1&&s<=5;a==="christmas"&&(t=!0),a==="normal"&&(t=!1);let o="جشنواره زمستانی و کریسمس آتیش";if(t){const i=Date.UTC(r,n-1,s);if(n===11&&s>=22||n===12&&s<25){const d=Date.UTC(r,11,25),l=Math.max(0,Math.round((d-i)/864e5));o=`تا کریسمس ${w(l)} روز مانده`}else if(n===12&&s===25)o="کریسمس مبارک! با طعم گرم آتیش";else if(n===12&&s>25){const d=Date.UTC(r+1,0,1),l=Math.max(1,Math.round((d-i)/864e5));o=`تا سال نو میلادی ${w(l)} روز مانده`}else if(n===1&&s<=5){const d=Date.UTC(r,0,5),l=Math.max(0,Math.round((d-i)/864e5));o=l===0?"سال نو میلادی مبارک! آخرین روز تم زمستانی":`سال نو میلادی مبارک · ${w(l)} روز تا پایان فصل جشن`}}return{isActive:t,year:r,month:n,day:s,countdownText:o}}let q=pe(),C=localStorage.getItem("atish_xmas_motion_paused")==="true";const ie=`
  <svg viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10 38 C16 14, 38 6, 54 16 C48 16, 44 22, 46 30 C36 28, 22 31, 10 38 Z" fill="#dc2626"/>
    <path d="M18 35 C23 18, 38 11, 50 16 C42 14, 30 20, 24 34 Z" fill="#ef4444" opacity="0.65"/>
    <rect x="6" y="34" width="44" height="11" rx="5.5" fill="#f8fafc"/>
    <circle cx="55" cy="18" r="6" fill="#ffffff"/>
  </svg>
`;function Le(){return`
    <div class="xmas-lights-bar" aria-hidden="true">
      <svg class="xmas-lights-svg" viewBox="0 0 1200 18" preserveAspectRatio="none">
        <path d="M0 3 Q75 14 150 4 T300 4 T450 4 T600 4 T750 4 T900 4 T1050 4 T1200 4" fill="none" stroke="rgba(161,161,170,0.42)" stroke-width="1.4"/>
        ${[{x:40,y:12,color:"#ef4444",cls:"xmas-bulb-a"},{x:110,y:14,color:"#fbbf24",cls:"xmas-bulb-b"},{x:185,y:11,color:"#22c55e",cls:"xmas-bulb-c"},{x:260,y:14,color:"#f97316",cls:"xmas-bulb-a"},{x:340,y:11,color:"#ef4444",cls:"xmas-bulb-b"},{x:420,y:14,color:"#fde047",cls:"xmas-bulb-c"},{x:500,y:11,color:"#22c55e",cls:"xmas-bulb-a"},{x:580,y:14,color:"#ef4444",cls:"xmas-bulb-b"},{x:660,y:11,color:"#fbbf24",cls:"xmas-bulb-c"},{x:740,y:14,color:"#22c55e",cls:"xmas-bulb-a"},{x:820,y:11,color:"#ef4444",cls:"xmas-bulb-b"},{x:900,y:14,color:"#fde047",cls:"xmas-bulb-c"},{x:980,y:11,color:"#22c55e",cls:"xmas-bulb-a"},{x:1060,y:14,color:"#ef4444",cls:"xmas-bulb-b"},{x:1140,y:11,color:"#fbbf24",cls:"xmas-bulb-c"}].map(a=>`
          <g class="xmas-bulb ${a.cls}">
            <circle cx="${a.x}" cy="${a.y}" r="5.5" fill="${a.color}" opacity="0.22"/>
            <circle cx="${a.x}" cy="${a.y}" r="2.8" fill="${a.color}"/>
            <circle cx="${a.x-.7}" cy="${a.y-.8}" r="0.9" fill="#ffffff" opacity="0.85"/>
          </g>
        `).join("")}
      </svg>
    </div>
  `}function Be(){const e=document.documentElement,a=document.querySelector('meta[name="theme-color"]');if(!q.isActive){e.classList.remove("theme-christmas","xmas-motion-paused"),document.getElementById("xmas-snow-layer")?.remove(),a&&a.setAttribute("content","#0e0e10");return}if(e.classList.add("theme-christmas"),e.classList.toggle("xmas-motion-paused",C),a&&a.setAttribute("content","#0d1311"),!document.getElementById("xmas-snow-layer")){const r=document.createElement("div");r.id="xmas-snow-layer",r.className="xmas-snow-layer",r.setAttribute("aria-hidden","true");const n=window.innerWidth<640?18:26,s=document.createDocumentFragment();for(let t=0;t<n;t++){const o=document.createElement("span");o.className="xmas-snowflake";const i=(t*37+11)%98+1,d=3+t%4*1.4,l=9+t%6*2.2,c=-(t*1.7%14),x=(t%2===0?1:-1)*(14+t%4*8),$=.4+t%4*.14;o.style.setProperty("--x",`${i}%`),o.style.setProperty("--size",`${d}px`),o.style.setProperty("--dur",`${l}s`),o.style.setProperty("--delay",`${c}s`),o.style.setProperty("--drift",`${x}px`),o.style.setProperty("--alpha",`${$.toFixed(2)}`),s.appendChild(o)}r.appendChild(s),document.body.appendChild(r)}}function me(){try{const a=new Date().toLocaleTimeString("en-US",{timeZone:"Asia/Tehran",hour12:!1,hour:"2-digit",minute:"2-digit"}),[r,n]=a.split(":").map(Number),s=r*60+n;return s>=690&&s<1395?{isOpen:!0,text:"هم‌اکنون باز است",badgeClass:"bg-emerald-500/15 border-emerald-500/30 text-emerald-400",dotClass:"bg-emerald-400 animate-pulse",tooltip:"پذیرش سفارشات تلفنی و آنلاین اسنپ‌فود (۱۱:۳۰ تا ۲۳:۱۵)"}:{isOpen:!1,text:"هم‌اکنون بسته است",badgeClass:"bg-rose-500/15 border-rose-500/30 text-rose-400",dotClass:"bg-rose-400",tooltip:"ساعات کاری آتیش: همه روزه از ۱۱:۳۰ صبح تا ۲۳:۱۵ شب"}}catch{return{isOpen:!0,text:"هم‌اکنون باز است",badgeClass:"bg-emerald-500/15 border-emerald-500/30 text-emerald-400",dotClass:"bg-emerald-400 animate-pulse",tooltip:"پذیرش سفارشات تلفنی و آنلاین اسنپ‌فود"}}}const f={search:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>',phone:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',scooter:'<svg class="w-5 h-5 -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M14 9h4l4 4v5h-3"/><circle stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" cx="19" cy="18" r="2"/><circle stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" cx="7" cy="18" r="2"/></svg>',instagram:'<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',clock:'<svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',location:'<svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',close:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M6 18L18 6M6 6l12 12"/></svg>',menuIcon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M4 6h16M4 12h16M4 18h16"/></svg>',tray:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>',plus:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>',minus:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20 12H4"/></svg>',trash:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>',copy:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>'},N=[{title:"نان کنجدی تازه",desc:"نان لطیف و معطر دست‌ساز با کنجد درجه یک.",icon:"🍞"},{title:"سس مخصوص آتیش",desc:"فرمول انحصاری و دست‌ساز فست‌فود آتیش با عطر ادویه‌جات ویژه و چاشنی دلپذیر.",icon:"🍯"},{title:"پنیر گودا",desc:"ورقه‌های پنیر گودا روی برگر گرم با طعم اصیل و لذیذ.",icon:"🧀"},{title:"گوشت خالص برگر دست‌ساز",desc:"۱۰۰٪ گوشت خالص و گرم گوساله با طبخ مخصوص و حفظ کامل آبدار بودن گوشت.",icon:"🥩"},{title:"قارچ و پیاز",desc:"ترکیب قارچ تفت‌داده و پیاز که طعم فوق‌العاده‌ای به آتیش برگر می‌بخشد.",icon:"🍄"},{title:"خیارشور و سبزیجات تازه",desc:"خیارشور تازه، کاهو پیچ ترد و گوجه فرنگی به همراه نان تازه کنجدی.",icon:"🥒"}];function ee(e){const a=z?.restaurant||F,{neighborhoods:r}=ce,n=r.find(i=>i.id===e);if(!n)return;U=e;const s=n.zone==="direct";document.querySelectorAll(".delivery-chip-btn").forEach(i=>{const d=i.dataset.id===e,l=r.find(x=>x.id===i.dataset.id),c=l?l.name:"";i.className=`delivery-chip-btn text-[11px] px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${d?"bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-md shadow-orange-500/30 scale-105":"bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:bg-white/[0.08] hover:text-white"}`,i.innerHTML=`<span>${d?"✓":"📍"}</span><span>${c}</span>`});const t=document.getElementById("delivery-status-card");if(t){t.className=`p-4 rounded-2xl border transition-all duration-300 mb-4 ${s?"bg-gradient-to-br from-emerald-950/40 via-[#18181c] to-emerald-950/20 border-emerald-500/40 shadow-lg shadow-emerald-950/30":"bg-gradient-to-br from-pink-950/40 via-[#18181c] to-pink-950/20 border-pink-500/40 shadow-lg shadow-pink-950/30"}`;const i=document.getElementById("delivery-card-title");i&&(i.textContent=`ارسال به ${n.name}`);const d=document.getElementById("delivery-card-badge");d&&(d.textContent=n.badge,d.className=`text-[11px] font-bold px-2.5 py-1 rounded-full ${s?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-pink-500/20 text-pink-300 border border-pink-500/30"}`);const l=document.getElementById("delivery-card-time");l&&(l.textContent=n.time);const c=document.getElementById("delivery-card-desc");c&&(c.textContent=n.desc);const x=document.getElementById("delivery-card-actions");x&&(s?x.innerHTML=`
          <a id="delivery-action-link" href="tel:${a.phone||F.phoneNumber}" class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-xs sm:text-sm shadow-md transition active:scale-[0.98]">
            ${f.phone}
            <span>سفارش تلفنی به ${n.name}</span>
            <span dir="ltr" class="inline-flex items-center tracking-wider mr-1 text-[11px]">
              (<span>۰۲۱</span><span>-</span><span>۲۲۵۶۱۹۴۹</span>)
            </span>
          </a>
        `:x.innerHTML=`
          <a id="delivery-action-link" href="${a.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#ff00a6] hover:bg-[#e00092] text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-500/25 transition active:scale-[0.98]">
            ${f.scooter}
            <span>سفارش در اسنپ‌فود</span>
          </a>
        `)}const o=document.getElementById("delivery-active-pulse");o&&o.setAttribute("transform",`translate(${n.x} ${n.y})`),document.querySelectorAll("#delivery-map-text-labels text").forEach(i=>{const d=i.dataset.id===e;i.classList.toggle("active-place",d)}),document.querySelectorAll(".delivery-pin-group").forEach(i=>{const d=i.dataset.id===e,l=i.querySelector("circle");if(l){const c=r.find(x=>x.id===i.dataset.id);l.setAttribute("r",d?"9":"6"),l.setAttribute("stroke-width",d?"2.5":"1.5"),l.setAttribute("fill",d?"#f59e0b":c?.zone==="direct"?"#ef4444":"#ff00a6"),l.setAttribute("fill-opacity",d?"1":"0.85")}})}function Se(e){const{restaurantArea:a,snappfoodArea:r,neighborhoods:n,note:s}=ce,t=n.find(i=>i.id===U)||n[0],o=t.zone==="direct";return`
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
              <circle cx="${r.cx}" cy="${r.cy}" r="${r.radius}" fill="#ff00a6" fill-opacity=".04" stroke="#ff00a6" stroke-width="2" stroke-dasharray="8 8"/>
              <!-- Direct Atish Delivery Zone Radius -->
              <circle cx="${a.cx}" cy="${a.cy}" r="${a.radius}" fill="#ef4444" fill-opacity=".12" stroke="#ef4444" stroke-width="2.5"/>
              
              <!-- Neighborhood Pin Markers -->
              <g id="delivery-map-pins">
                ${n.map(i=>{const d=i.id===U;return`
                    <g class="delivery-pin-group cursor-pointer" data-id="${i.id}" transform="translate(${i.x} ${i.y})">
                      <circle r="${d?"9":"6"}" fill="${d?"#f59e0b":i.zone==="direct"?"#ef4444":"#ff00a6"}" stroke="#ffffff" stroke-width="${d?"2.5":"1.5"}" fill-opacity="${d?"1":"0.85"}"/>
                    </g>
                  `}).join("")}
              </g>

              <!-- Active Highlight Pin Pulse -->
              <g id="delivery-active-pulse" transform="translate(${t.x} ${t.y})">
                <circle r="22" fill="#f59e0b" fill-opacity=".35" class="animate-ping"/>
              </g>

              <!-- Neighborhood Labels -->
              <g class="delivery-place-labels" id="delivery-map-text-labels">
                ${n.map(i=>{const d=i.id===U;return`<text x="${i.x}" y="${i.y-11}" text-anchor="middle" data-id="${i.id}" class="${d?"active-place":""}">${i.name}</text>`}).join("")}
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
            ${n.map(i=>{const d=i.id===U;return`
                <button 
                  type="button" 
                  data-id="${i.id}" 
                  class="delivery-chip-btn text-[11px] px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${d?"bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-md shadow-orange-500/30 scale-105":"bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:bg-white/[0.08] hover:text-white"}"
                >
                  <span>${d?"✓":"📍"}</span>
                  <span>${i.name}</span>
                </button>
              `}).join("")}
          </div>

          <!-- Dynamic Result Card -->
          <div id="delivery-status-card" class="p-4 rounded-2xl border transition-all duration-300 mb-4 ${o?"bg-gradient-to-br from-emerald-950/40 via-[#18181c] to-emerald-950/20 border-emerald-500/40 shadow-lg shadow-emerald-950/30":"bg-gradient-to-br from-pink-950/40 via-[#18181c] to-pink-950/20 border-pink-500/40 shadow-lg shadow-pink-950/30"}">
            <div class="flex items-center justify-between gap-2 mb-2">
              <div class="flex items-center gap-2">
                <span class="text-base">${o?"⚡️":"🛵"}</span>
                <h3 class="text-sm sm:text-base font-black text-white" id="delivery-card-title">ارسال به ${t.name}</h3>
              </div>
              <span id="delivery-card-badge" class="text-[11px] font-bold px-2.5 py-1 rounded-full ${o?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-pink-500/20 text-pink-300 border border-pink-500/30"}">
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
              ${o?`
                <a id="delivery-action-link" href="tel:${e.phone||F.phoneNumber}" class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-xs sm:text-sm shadow-md transition active:scale-[0.98]">
                  ${f.phone}
                  <span>سفارش تلفنی به ${t.name}</span>
                  <span dir="ltr" class="inline-flex items-center tracking-wider mr-1 text-[11px]">
                    (<span>۰۲۱</span><span>-</span><span>۲۲۵۶۱۹۴۹</span>)
                  </span>
                </a>
              `:`
                <a id="delivery-action-link" href="${e.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#ff00a6] hover:bg-[#e00092] text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-500/25 transition active:scale-[0.98]">
                  ${f.scooter}
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
            ${s}
          </p>
        </div>

      </div>
    </section>
  `}function Ce(){const e=document.getElementById("app");if(!e)return;q=pe(),Be();const a=z?.restaurant||F,r=z?.categories||[],n=J(),s=me(),t=q.isActive;e.innerHTML=`
    <!-- Responsive Header (Mobile + Desktop) -->
    <header class="sticky top-0 z-40 glass-header border-b border-white/[0.08] px-4 sm:px-6 lg:px-8 py-3">
      ${t?Le():""}
      <div class="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <!-- Logo & Title -->
        <a href="#" id="header-logo-link" class="flex items-center gap-2 min-w-0" title="آتیش">
          <div class="xmas-logo-wrap w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]">
            <img 
              src="${Ee}" 
              alt="${a.name}" 
              class="w-full h-full object-contain cursor-pointer select-none"
            />
            ${t?`<span class="xmas-santa-hat">${ie}</span>`:""}
          </div>
          <div class="flex flex-col text-right min-w-0">
            <div class="text-xs sm:text-sm md:text-base font-black text-white tracking-tight flex items-center gap-1.5 truncate">
              <span>${a.brandTitle}</span>
              <span id="header-status-dot" class="w-2 h-2 rounded-full ${s.dotClass} flex-shrink-0" title="${s.text}"></span>
            </div>
            <div class="text-[10px] sm:text-[11px] md:text-xs text-amber-400 font-medium truncate hidden sm:block">
              ${t?"🎄 فصل جشن زمستانی و کریسمس آتیش":a.brandSubtitle}
            </div>
          </div>
        </a>

        <!-- Desktop Persistent Search Bar (Visible on md and up) -->
        <div class="hidden md:flex flex-1 max-w-md mx-4">
          <div class="relative w-full">
            <span class="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-zinc-400">
              ${f.search}
            </span>
            <input 
              type="text" 
              id="desktop-search-input" 
              value="${M}"
              placeholder="جستجوی سریع (پیتزا، برگر، پپرونی، استیک...)" 
              class="w-full bg-[#18181c] border border-white/[0.1] hover:border-amber-500/40 text-white text-xs rounded-xl pr-10 pl-9 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-zinc-500 transition shadow-inner"
            />
            <button 
              id="clear-desktop-search-btn" 
              class="${M?"":"hidden"} absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-400 hover:text-white"
              aria-label="پاک کردن جستجو"
            >
              ${f.close}
            </button>
          </div>
        </div>

        <!-- Header Actions -->
        <div class="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          
          <!-- Desktop Call Button (021 on left) -->
          <a 
            href="tel:${a.phone}"
            class="hidden lg:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25 text-xs font-bold transition flex-shrink-0"
            title="تماس تلفنی"
          >
            ${f.phone}
            <span class="flex items-center gap-1">
              <span>سفارش:</span>
              <span dir="ltr" class="inline-flex items-center tracking-wider font-semibold">
                <span>۰۲۱</span><span>-</span><span>۲۲۵۶۱۹۴۹</span>
              </span>
            </span>
          </a>

          <!-- Desktop SnappFood Button -->
          <a 
            href="${a.snappfoodUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-pink-500/15 border border-pink-500/30 text-pink-400 hover:bg-pink-500/25 text-xs font-bold transition flex-shrink-0"
            title="سفارش در اسنپ‌فود"
          >
            ${f.scooter}
            <span>اسنپ‌فود</span>
          </a>

          <!-- Desktop Instagram Button -->
          <a 
            href="${a.instagramUrl||F.instagramUrl||"https://instagram.com/atishfood"}"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-500/15 border border-purple-500/30 text-pink-400 hover:bg-purple-500/25 text-xs font-bold transition flex-shrink-0"
            title="صفحه رسمی اینستاگرام آتیش"
          >
            ${f.instagram}
            <span>اینستاگرام</span>
          </a>

          ${t?`
          <!-- Christmas Snow & Lights Pause/Play Control (WCAG 2.2.2) -->
          <button
            type="button"
            id="btn-toggle-xmas-motion"
            aria-label="${C?"پخش افکت برف و چراغ‌های کریسمس":"توقف افکت برف و چراغ‌های کریسمس"}"
            title="${C?"پخش برف و چراغانی":"توقف برف و چراغانی"}"
            class="h-9 px-2.5 rounded-full bg-red-500/15 border border-amber-400/35 text-amber-200 hover:bg-red-500/25 hover:text-white flex items-center gap-1 text-[11px] font-bold transition flex-shrink-0"
          >
            <span aria-hidden="true">${C?"❄️":"✨"}</span>
            <span class="hidden sm:inline" id="xmas-motion-label">${C?"پخش برف":"توقف برف"}</span>
          </button>
          `:""}

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
            ${f.search}
          </button>

          <!-- Order Tray (List) Button -->
          <button 
            id="open-tray-btn" 
            aria-label="سبد سفارش"
            class="relative px-2.5 sm:px-3.5 h-9 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 hover:text-white flex items-center gap-1.5 text-xs font-bold transition hover:bg-amber-500/30 flex-shrink-0"
          >
            ${f.tray}
            <span class="text-[11px] sm:text-xs">پیش‌فاکتور</span>
            <span id="header-tray-badge" class="${n>0?"":"hidden"} bg-amber-500 text-black font-black text-[10px] px-1.5 py-0.2 rounded-full min-w-[18px] text-center">
              ${w(n)}
            </span>
          </button>
        </div>
      </div>

      <!-- Mobile Expandable Search Input -->
      <div id="search-container" class="${O?"":"hidden"} md:hidden w-full max-w-md mx-auto pt-3">
        <div class="relative">
          <span class="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-zinc-400">
            ${f.search}
          </span>
          <input 
            type="text" 
            id="menu-search-input" 
            value="${M}"
            placeholder="جستجوی پیتزا، برگر، ساندویچ، سوخاری..." 
            class="w-full bg-[#18181c] border border-amber-500/50 text-white text-xs rounded-xl pr-10 pl-9 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-zinc-500 shadow-inner"
          />
          <button 
            id="clear-search-btn" 
            class="${M?"":"hidden"} absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-400 hover:text-white"
          >
            ${f.close}
          </button>
        </div>
      </div>
    </header>

    <!-- Main Responsive Container (Mobile Phone + Desktop) -->
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-28 md:pb-16">

      <!-- Hero Section (Clean & Responsive: 2 cols on Desktop, NO duplicate call/snapp buttons) -->
      <section class="relative rounded-3xl overflow-hidden glass-card ${t?"xmas-hero-card":""} p-4 sm:p-6 lg:p-8 mb-6 border border-white/[0.08] shadow-2xl text-right">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          <!-- Hero Text & Concept Info (7 cols on desktop, RTL Right) -->
          <div class="md:col-span-7 flex flex-col justify-center order-2 md:order-1">
            ${t?`
            <!-- Yearly Christmas Season Banner (Auto-Active: Nov 22 – Jan 5) -->
            <div class="xmas-season-banner inline-flex flex-wrap items-center gap-2 self-start px-3.5 py-1.5 rounded-2xl mb-3">
              <span class="text-sm" aria-hidden="true">🎄</span>
              <span class="text-[11px] sm:text-xs font-black text-amber-200">${q.countdownText}</span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/25 border border-red-400/35 text-red-200">۱ آذر تا ۱۵ دی</span>
            </div>
            `:""}

            <!-- Badges Bar -->
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <span id="restaurant-status-badge" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${s.badgeClass}" title="${s.tooltip}">
                <span id="restaurant-status-dot" class="w-1.5 h-1.5 rounded-full ${s.dotClass}"></span>
                <span id="restaurant-status-text">${s.text}</span>
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-pink-500/15 border border-pink-500/30 text-pink-400">
                ⭐ ${a.rating||"۴.۵"} در اسنپ‌فود
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500/15 border border-amber-500/30 text-amber-300">
                🛵 ارسال سریع دروس و دولت
              </span>
            </div>

            <!-- Big Title -->
            <h1 class="text-xl sm:text-2xl lg:text-4xl font-black text-white leading-tight mb-2.5">
              ${t?'گرمای زمستون با <span class="text-gradient-fire">پیتزا آتیش</span> ❄️':'طعم اصیل و لذیذ <span class="text-gradient-fire">پیتزا آتیش</span>'}
            </h1>
            
            <p class="text-zinc-300 text-xs sm:text-sm lg:text-base leading-relaxed font-light max-w-2xl">
              پیتزاهای پرملات آمریکایی و ایتالیایی پخته‌شده در فر لینکولن و برگرهای دست‌ساز با گوشت خالص. سفارش آنلاین دلیوری با اسنپ‌فود یا سفارش مستقیم تلفنی با پیک گرم.
            </p>
          </div>

          <!-- 3D Burger Artwork Showcase (5 cols on desktop, Left Side) -->
          <div class="md:col-span-5 order-1 md:order-2">
            <div class="relative w-full rounded-2xl overflow-hidden shadow-2xl border ${t?"border-amber-400/25":"border-white/[0.1]"} aspect-[16/10] md:aspect-square bg-black group">
              <img 
                src="/images/atish-hero-3d.jpg" 
                alt="کانسپت سه بعدی آتیش برگر"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              ${t?`
                <div class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-red-600/85 border border-amber-300/45 text-white text-[10px] font-black shadow-lg backdrop-blur-sm">
                  🎄 ویژه شب‌های زمستانی
                </div>
              `:""}
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
          ${r.map(o=>{const i=ae===o.id;return`
              <button 
                data-category="${o.id}" 
                class="cat-btn flex-shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${i?"cat-btn-active bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-black shadow-md shadow-orange-500/30":"bg-[#18181c] text-zinc-300 border border-white/[0.08] hover:bg-[#24242a] hover:text-white"}"
              >
                <span>${o.icon}</span>
                <span>${o.name}</span>
              </button>
            `}).join("")}
        </div>
      </nav>

      <!-- Main Food Menu Container (Responsive Grid: 2 cols mobile, 3 tablet, 4 desktop) -->
      <main id="menu-container"></main>

      <!-- Delivery Area Radar Section (Responsive Split Card) -->
      ${Se(a)}

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
              <div class="w-9 h-9 rounded-xl ${t?"bg-gradient-to-br from-red-600 via-red-700 to-emerald-700 text-white":"bg-gradient-to-br from-amber-500 to-orange-600 text-black"} flex items-center justify-center font-black text-base shadow-md">
                ${t?"🎄":"🔥"}
              </div>
              <div>
                <h3 class="text-sm md:text-base font-black text-white">${a.brandTitle}</h3>
                <span class="text-[11px] text-zinc-400">${t?"تم ویژه کریسمس و سال نو · فعال هر سال از ۲۲ نوامبر تا ۵ ژانویه":a.tagline}</span>
              </div>
            </div>
            <p class="text-xs text-zinc-400 leading-relaxed font-light">
              منوی دیجیتال رستوران آتیش. ارائه پیتزاها و برگرهای باکیفیت و تازه در محله‌های شمال تهران با امکان سفارش آنلاین در اسنپ‌فود و سفارش تلفنی.
            </p>
          </div>

          <!-- Column 2: Hours & Address -->
          <div class="flex flex-col gap-2.5 text-xs text-zinc-300">
            <div class="flex items-start gap-2">
              ${f.clock}
              <div>
                <span class="text-zinc-400 font-normal">ساعات کاری:</span>
                <span class="text-zinc-100 font-bold mr-1">${w(a.workingHours)}</span>
              </div>
            </div>

            <div class="flex items-start gap-2">
              ${f.location}
              <div>
                <span class="text-zinc-400 font-normal">آدرس:</span>
                <span class="text-zinc-100 font-bold mr-1">${w(a.address)}</span>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>

    <!-- Floating Sticky Order Tray Bar (Responsive Mobile/Desktop) -->
    <div 
      id="floating-tray-bar" 
      class="${n>0?"":"hidden"} fixed bottom-20 md:bottom-6 inset-x-4 md:inset-x-auto md:left-6 max-w-sm md:w-80 z-40 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black px-4 py-2.5 rounded-2xl shadow-2xl flex items-center justify-between cursor-pointer animate-pulse-glow"
    >
      <div class="flex items-center gap-2">
        <span class="text-base">📋</span>
        <div class="flex flex-col text-right leading-tight">
          <span class="text-xs font-black">سفارش شما: <span id="floating-tray-count">${w(n)}</span> قلم</span>
          <span id="floating-tray-total" class="text-[10px] font-bold opacity-90">${V()>0?S(V()):""}</span>
        </div>
      </div>
      <div class="flex items-center gap-1 text-[11px] bg-black/20 px-2.5 py-1 rounded-xl">
        <span>مشاهده لیست</span>
        <span>←</span>
      </div>
    </div>

    <!-- Floating Contact Bottom Pill Bar (MOBILE ONLY: md:hidden) -->
    <nav class="contact-nav md:hidden" aria-label="دسترسی سریع">
      <div class="contact-nav-inner">
        <button id="nav-menu-btn" class="contact-nav-item contact-nav-menu" aria-label="منوی غذاها">
          ${f.menuIcon}<span>منو</span>
        </button>
        <a href="${a.instagramUrl||F.instagramUrl||"https://instagram.com/atishfood"}" target="_blank" rel="noopener noreferrer" class="contact-nav-item contact-nav-instagram" aria-label="اینستاگرام آتیش">
          ${f.instagram}<span>اینستاگرام</span>
        </a>
        <a href="tel:${a.phone}" class="contact-nav-item contact-nav-call" aria-label="تماس با آتیش">
          ${f.phone}<span>تماس</span>
        </a>
        <a href="${a.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="contact-nav-item contact-nav-snapp" aria-label="اسنپ‌فود">
          ${f.scooter}<span>اسنپ‌فود</span>
        </a>
      </div>
    </nav>

    <!-- Waving Mascot (Online Only) -->
    ${typeof navigator>"u"||navigator.onLine!==!1?`
      <div id="atish-mascot-greeting" class="mascot-container" aria-label="شخصیت آتیش">
        <div id="mascot-speech-bubble" class="mascot-bubble">
          <span>${t?"سلام! زمستون و کریسمستون گرم و دلچسب 🎄🔥":"سلام! خوش اومدید 🔥"}</span>
          <button id="close-mascot-bubble-btn" class="mascot-bubble-close" aria-label="بستن پیام">✕</button>
        </div>
        <div class="relative">
          <img src="/images/atish-mascot.webp" alt="شخصیت آتیش" class="mascot-avatar" draggable="false" />
          ${t?`<span class="xmas-mascot-hat">${ie}</span>`:""}
        </div>
      </div>
    `:""}

    <!-- Item Detail Sheet Modal -->
    <div id="item-modal" class="fixed inset-0 z-50 hidden bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity">
      <div id="item-modal-box" class="w-full max-w-md bg-[#18181c] border-t sm:border border-white/[0.1] rounded-t-3xl sm:rounded-3xl max-h-[90vh] overflow-y-auto shadow-2xl transform transition-transform">
      </div>
    </div>

    <!-- Order Tray Drawer Modal -->
    <div id="tray-modal" class="fixed inset-0 z-50 hidden bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity">
      <div id="tray-modal-box" class="w-full max-w-md bg-[#18181c] border-t sm:border border-white/[0.12] rounded-t-3xl sm:rounded-3xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col text-right select-none" style="-webkit-tap-highlight-color: transparent;">
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
            ${f.close}
          </button>
        </div>

        <div class="mb-4 text-center">
          <div class="inline-block relative rounded-xl overflow-hidden border border-white/[0.1] shadow-lg max-h-48">
            <img src="/images/atish-hero-3d.jpg" alt="برگر آتیش" class="w-full h-auto object-cover max-w-xs mx-auto" />
          </div>
        </div>

        <!-- Layer Selector Tabs -->
        <div class="grid grid-cols-3 sm:grid-cols-6 gap-1 mb-4" id="anatomy-layers-tabs">
          ${N.map((o,i)=>`
            <button 
              data-layer="${i}" 
              class="anatomy-tab-btn p-1.5 rounded-xl border text-center text-xs font-bold transition ${i===A?"bg-amber-500/20 border-amber-500 text-amber-300":"bg-white/[0.04] border-white/[0.08] text-zinc-400 hover:text-white"}"
            >
              <div class="text-sm mb-0.5">${o.icon}</div>
              <div class="truncate text-[9px]">لایه ${w(i+1)}</div>
            </button>
          `).join("")}
        </div>

        <!-- Layer Details Box -->
        <div id="anatomy-details-box" class="bg-[#1c1c22] border border-amber-500/20 rounded-xl p-3.5 mb-4">
          <div class="flex items-center gap-2 mb-1.5">
            <span id="anatomy-icon" class="text-xl">${N[A].icon}</span>
            <h3 id="anatomy-title" class="text-sm font-black text-amber-400">${N[A].title}</h3>
          </div>
          <p id="anatomy-desc" class="text-xs text-zinc-300 leading-relaxed font-light">
            ${N[A].desc}
          </p>
        </div>

        <button 
          id="anatomy-add-btn"
          class="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-xs shadow-md shadow-orange-500/30 flex items-center justify-center gap-1.5"
        >
          ${f.plus}
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

    <!-- VIP 20% Surprise Offer Modal -->
    <div id="vip-offer-modal" class="fixed inset-0 z-50 hidden bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity">
      <div class="w-full max-w-md bg-[#141417] border-t sm:border border-amber-500/40 rounded-t-3xl sm:rounded-3xl max-h-[92vh] overflow-y-auto shadow-2xl p-5 sm:p-6 text-right">
        
        <!-- Modal Header -->
        <div class="flex items-center justify-between pb-3.5 border-b border-white/[0.08] mb-4">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 flex items-center justify-center text-black font-black text-sm shadow-md">
              ٪
            </div>
            <div>
              <h2 class="text-sm sm:text-base font-black text-white">کارت هدیه غافلگیری سرآشپز</h2>
              <span class="text-[10px] text-amber-400 font-medium">۲۰٪ تخفیف ویژه سفارش بعدی</span>
            </div>
          </div>
          <button id="close-vip-modal-btn" class="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white transition" aria-label="بستن">
            ✕
          </button>
        </div>

        <!-- Dynamic Container (Switches between Unclaimed & Active Ticket) -->
        <div id="vip-modal-content"></div>

      </div>
    </div>

    <!-- Hidden Cashier Verification Modal -->
    <div id="cashier-modal" class="fixed inset-0 z-50 hidden bg-black/90 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity">
      <div class="w-full max-w-md bg-[#16161a] border-t sm:border border-emerald-500/40 rounded-t-3xl sm:rounded-3xl max-h-[92vh] overflow-y-auto shadow-2xl p-5 sm:p-6 text-right">
        <div class="flex items-center justify-between pb-3.5 border-b border-white/[0.08] mb-4">
          <div class="flex items-center gap-2">
            <span class="text-lg">🛡️</span>
            <div>
              <h3 class="text-sm font-black text-white">پنل صندوق‌دار | تایید کد تخفیف ۲۰٪</h3>
              <span class="text-[10px] text-emerald-400">سیستم تایید اختصاصی پرسنل آتیش</span>
            </div>
          </div>
          <button id="close-cashier-modal-btn" class="w-7 h-7 rounded-full bg-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white">
            ✕
          </button>
        </div>
        
        <div id="cashier-modal-body"></div>
      </div>
    </div>

    <!-- Toast Notification -->
    <div id="toast-notification" class="fixed top-16 left-1/2 -translate-x-1/2 z-50 pointer-events-none opacity-0 -translate-y-4 bg-emerald-500 text-white font-black text-xs px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-1.5">
      <span>✓</span>
      <span id="toast-text">به لیست سفارش اضافه شد</span>
    </div>
  `,ze(),Y()}function be(){const e=J(),a=document.getElementById("header-tray-badge");a&&(a.textContent=w(e),a.classList.toggle("hidden",e===0));const r=document.getElementById("floating-tray-bar"),n=document.getElementById("floating-tray-count"),s=document.getElementById("floating-tray-total"),t=V();r&&n&&(n.textContent=w(e),s&&(s.textContent=t>0?S(t):""),r.classList.toggle("hidden",e===0));const o=document.getElementById("atish-mascot-greeting");o&&(e>0?o.style.bottom="calc(140px + env(safe-area-inset-bottom, 0px))":o.style.bottom="");const i=document.getElementById("nav-tray-badge");i&&(i.textContent=w(e),i.classList.toggle("hidden",e===0)),z.items?.forEach(d=>{const l=document.getElementById(`card-tray-count-${d.id}`);if(l){const c=ue(d);c>0?(l.textContent=w(c),l.classList.remove("hidden"),l.classList.add("flex")):(l.classList.add("hidden"),l.classList.remove("flex"))}})}function j(e){const a=document.getElementById("toast-notification"),r=document.getElementById("toast-text");!a||!r||(r.textContent=e,a.classList.remove("opacity-0","-translate-y-4"),a.classList.add("opacity-100","translate-y-0"),setTimeout(()=>{a.classList.add("opacity-0","-translate-y-4"),a.classList.remove("opacity-100","translate-y-0")},2200))}function ze(){const e=document.getElementById("toggle-search-btn"),a=document.getElementById("search-container"),r=document.getElementById("menu-search-input"),n=document.getElementById("clear-search-btn"),s=document.getElementById("desktop-search-input"),t=document.getElementById("clear-desktop-search-btn");function o(p,y=!1){if(M=p,s&&(s.value=p,t&&t.classList.toggle("hidden",p.length===0)),r&&(r.value=p,n&&n.classList.toggle("hidden",p.length===0)),Y(),y&&p.length>0){const I=document.getElementById("categories-bar");if(I){const h=I.getBoundingClientRect();(h.top>250||h.bottom<0)&&I.scrollIntoView({behavior:"smooth",block:"start"})}}}function i(){o("",!1)}e&&a&&e.addEventListener("click",()=>{if(O=!O,a.classList.toggle("hidden",!O),O&&r){r.focus();const p=document.getElementById("categories-bar");p&&p.scrollIntoView({behavior:"smooth",block:"start"})}}),s&&s.addEventListener("input",p=>{o(p.target.value.trim(),!0)}),r&&r.addEventListener("input",p=>{o(p.target.value.trim(),!0)}),n&&n.addEventListener("click",()=>i()),t&&t.addEventListener("click",()=>i());const d=document.querySelectorAll(".cat-btn");d.forEach(p=>{p.addEventListener("click",()=>{d.forEach(I=>{I.className="cat-btn flex-shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 bg-[#18181c] text-zinc-300 border border-white/[0.08] hover:bg-[#24242a] hover:text-white"}),p.className="cat-btn cat-btn-active flex-shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-black shadow-md shadow-orange-500/30",M&&i(),ae=p.dataset.category;const y=document.getElementById(`sec-${ae}`);if(y){const h=document.body.getBoundingClientRect().top,D=y.getBoundingClientRect().top-h;window.scrollTo({top:D-120,behavior:"smooth"})}})});const l=document.getElementById("btn-toggle-xmas-motion");l?.addEventListener("click",()=>{C=!C;try{localStorage.setItem("atish_xmas_motion_paused",String(C))}catch{}document.documentElement.classList.toggle("xmas-motion-paused",C);const p=l.querySelector('span[aria-hidden="true"]'),y=document.getElementById("xmas-motion-label");p&&(p.textContent=C?"❄️":"✨"),y&&(y.textContent=C?"پخش برف":"توقف برف"),l.setAttribute("aria-label",C?"پخش افکت برف و چراغ‌های کریسمس":"توقف افکت برف و چراغ‌های کریسمس"),l.setAttribute("title",C?"پخش برف و چراغانی":"توقف برف و چراغانی"),j(C?"افکت برف و چراغانی متوقف شد":"افکت برف و چراغانی فعال شد ❄️")});const c=document.getElementById("open-tray-btn"),x=document.getElementById("floating-tray-bar"),$=document.getElementById("tray-modal"),v=()=>{R(),$?.classList.remove("hidden")};c?.addEventListener("click",v),x?.addEventListener("click",v),setInterval(()=>{const p=document.getElementById("restaurant-status-badge"),y=document.getElementById("restaurant-status-text"),I=document.getElementById("restaurant-status-dot"),h=document.getElementById("header-status-dot");if(p&&y&&I){const T=me();p.className=`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${T.badgeClass}`,p.title=T.tooltip,I.className=`w-1.5 h-1.5 rounded-full ${T.dotClass}`,y.textContent=T.text,h&&(h.className=`w-2 h-2 rounded-full ${T.dotClass} flex-shrink-0`,h.title=T.text)}},3e4);const b=document.getElementById("atish-mascot-greeting"),L=document.getElementById("mascot-speech-bubble"),m=document.getElementById("close-mascot-bubble-btn");if(b&&L){const p=L.querySelector("span"),y=q.isActive?["سلام! زمستون و کریسمستون گرم و دلچسب 🎄🔥","پیتزاهای داغ آتیش تو هوای سرد می‌چسبه ❄️🍕","برای سفارش گرم تلفنی یا اسنپ‌فود در خدمتیم 🎅🛵"]:["سلام! خوش اومدید 🔥","منوی تازه و داغ آتیش رو ببینید 🍕","برای سفارش تلفنی یا اسنپ‌فود در خدمتیم 🛵"],I=[],h=D=>{L.style.opacity="0",L.style.transform="scale(0.85)",setTimeout(()=>{p&&(p.textContent=D),L.style.opacity="1",L.style.transform="scale(1)"},200)};I.push(setTimeout(()=>{h(y[1])},4500)),I.push(setTimeout(()=>{h(y[2])},9e3));const T=()=>{I.forEach(D=>clearTimeout(D)),b.classList.add("mascot-leaving"),setTimeout(()=>{b.remove()},700)};I.push(setTimeout(()=>{T()},14500)),m?.addEventListener("click",D=>{D.stopPropagation(),T()}),b.addEventListener("click",T)}window.addEventListener("offline",()=>{document.getElementById("atish-mascot-greeting")?.remove()}),$?.addEventListener("click",p=>{p.target===$&&$.classList.add("hidden")});const k=document.getElementById("btn-open-anatomy"),g=document.getElementById("anatomy-modal"),E=document.getElementById("close-anatomy-btn");k?.addEventListener("click",()=>{g?.classList.remove("hidden")}),E?.addEventListener("click",()=>{g?.classList.add("hidden")}),g?.addEventListener("click",p=>{p.target===g&&g.classList.add("hidden")}),document.querySelectorAll(".anatomy-tab-btn").forEach(p=>{p.addEventListener("click",()=>{A=parseInt(p.dataset.layer,10),document.querySelectorAll(".anatomy-tab-btn").forEach((y,I)=>{y.className=`anatomy-tab-btn p-1.5 rounded-xl border text-center text-xs font-bold transition ${I===A?"bg-amber-500/20 border-amber-500 text-amber-300":"bg-white/[0.04] border-white/[0.08] text-zinc-400 hover:text-white"}`}),document.getElementById("anatomy-icon").textContent=N[A].icon,document.getElementById("anatomy-title").textContent=N[A].title,document.getElementById("anatomy-desc").textContent=N[A].desc})}),document.getElementById("anatomy-add-btn")?.addEventListener("click",()=>{K("b-7"),g?.classList.add("hidden"),j("آتیش برگر به لیست اضافه شد")});const u=document.getElementById("item-modal");u?.addEventListener("click",p=>{p.target===u&&u.classList.add("hidden")}),document.getElementById("nav-menu-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),document.querySelectorAll(".delivery-chip-btn").forEach(p=>{p.addEventListener("click",()=>{ee(p.dataset.id)})}),document.querySelectorAll(".delivery-pin-group").forEach(p=>{p.addEventListener("click",()=>{ee(p.dataset.id)})}),document.querySelectorAll("#delivery-map-text-labels text").forEach(p=>{p.addEventListener("click",()=>{ee(p.dataset.id)})}),Ae()}const Te="48d3007452360e9b7e6b8ed5c7eab72c2e738bb48c43ffdbcb73ecc8550fd937";let G=null;function ne(e){function a(b,L){return b>>>L|b<<32-L}const r=Math.pow,n=r(2,32);let s="length",t,o,i="";const d=[],l=e[s]*8;let c=[];const x=[];let $=0;const v={};for(let b=2;$<64;b++)if(!v[b]){for(t=b;t<313;t+=b)v[t]=b;c[$]=r(b,.5)*n|0,x[$++]=r(b,1/3)*n|0}for(e+="";e[s]%64-56;)e+="\0";for(t=0;t<e[s];t++)o=e.charCodeAt(t),d[t>>2]|=o<<(3-t)%4*8;for(d[d[s]]=l/n|0,d[d[s]]=l,o=0;o<d[s];){const b=d.slice(o,o+=16),L=c.slice(0);for(t=0;t<64;t++){const m=b[t-15],k=b[t-2],g=a(m,7)^a(m,18)^m>>>3,E=a(k,17)^a(k,19)^k>>>10,u=c[4]&c[5]^~c[4]&c[6],p=c[7]+(a(c[4],6)^a(c[4],11)^a(c[4],25))+u+x[t]+(b[t]=t<16?b[t]:b[t-16]+g+b[t-7]+E|0),y=c[0]&c[1]^c[0]&c[2]^c[1]&c[2],I=(a(c[0],2)^a(c[0],13)^a(c[0],22))+y;c=[p+I|0,c[0],c[1],c[2],c[3]+p|0,c[4],c[5],c[6]]}for(t=0;t<8;t++)c[t]=c[t]+L[t]|0}for(t=0;t<8;t++)for(o=3;o>=0;o--){const b=c[t]>>o*8&255;i+=(b<16?"0":"")+b.toString(16)}return i}const Me="430802b15c708a5315088e1bfa96046983a92af6ff3a558b";function je(e){let a=2166136261;const r=`${e.toUpperCase()}_${Me}`;for(let n=0;n<r.length;n++)a^=r.charCodeAt(n),a=Math.imul(a,16777619);return String(Math.abs(a)%1e3).padStart(3,"0")}function te(e){if(!e)return{valid:!1,reason:"کدی وارد نشده است."};const a=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];let r=String(e).trim().toUpperCase();for(let s=0;s<10;s++)r=r.replace(new RegExp(a[s],"g"),String(s));const n=r.replace(/[^A-Z0-9]/g,"");if(n.length===9&&/^[A-Z][0-9]{8}$/.test(n)){const s=`${n.slice(0,3)}-${n.slice(3,6)}-${n.slice(6,9)}`,t=ne(s);if(X&&X.includes(t))return{valid:!0,code:s};const o=n.slice(0,6),i=n.slice(6,9);if(je(o)===i)return{valid:!0,code:s}}if(n.length===6&&/^[0-9]{6}$/.test(n)){const s=`${n.slice(0,3)}-${n.slice(3,6)}`,t=ne(s);if(X&&X.includes(t))return{valid:!0,code:s}}return{valid:!1,reason:"کد نامعتبر یا اشتباه است. (فرمت صحیح: ۹ کاراکتر مانند A01-101-830)"}}function oe(e){const a=e-Date.now();if(a<=0)return{expired:!0,text:"منقضی شده"};const r=Math.floor(a/1e3),n=Math.floor(r/3600),s=Math.floor(r%3600/60),t=r%60,o=i=>String(i).padStart(2,"0");return{expired:!1,text:w(`${o(n)}:${o(s)}:${o(t)}`),detail:w(`${n} ساعت و ${s} دقیقه`)}}function Ae(){const e=document.getElementById("vip-offer-modal"),a=document.getElementById("close-vip-modal-btn"),r=document.getElementById("vip-modal-content"),n=document.getElementById("cashier-modal"),s=document.getElementById("close-cashier-modal-btn"),t=document.getElementById("cashier-modal-body"),o=document.getElementById("header-logo-link");let i=sessionStorage.getItem("atish_cashier_auth")==="true",d=0,l=null;function c(m,k){if(!r)return;clearInterval(G);const g=oe(k),E=z?.restaurant?.phone;r.innerHTML=`
      <div class="space-y-4">
        <!-- Active Ticket Card -->
        <div class="relative p-5 rounded-2xl bg-gradient-to-b from-[#1c1c22] to-[#121215] border-2 border-dashed border-amber-500/40 text-center shadow-2xl overflow-hidden">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 text-[11px] font-black mb-2.5">
            <span>🔥</span>
            <span>۲۰٪ تخفیف ویژه شما فعال است</span>
          </div>

          <div class="text-xs text-zinc-300 font-light mb-1">کد اختصاصی سفارش بعدی:</div>
          
          <!-- Code Display Box -->
          <div class="my-3 p-3.5 rounded-xl bg-black/80 border border-amber-500/40 flex items-center justify-between gap-2 max-w-xs mx-auto shadow-inner">
            <span id="vip-code-text" class="text-xl sm:text-2xl font-black text-amber-300 tracking-widest font-mono select-all">
              ${m}
            </span>
            <button 
              id="copy-vip-btn" 
              type="button"
              class="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-black font-black text-xs hover:from-amber-300 hover:to-orange-400 transition flex items-center gap-1 shadow-md"
            >
              <span>کپی</span>
            </button>
          </div>

          <!-- Live Countdown Timer -->
          <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 max-w-xs mx-auto mb-1">
            <div class="text-[10px] text-amber-300/80 mb-0.5">زمان باقی‌مانده تا پایان اعتبار:</div>
            <div id="vip-timer-display" class="text-lg sm:text-xl font-black text-white font-mono tracking-wider">
              ${g.text}
            </div>
          </div>
        </div>

        <!-- Usage Instructions -->
        <div class="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-right space-y-1.5 text-xs">
          <div class="font-bold text-white flex items-center gap-1.5">
            <span>📌</span>
            <span>نحوه اعمال تخفیف در سفارش:</span>
          </div>
          <p class="text-zinc-300 text-[11px] leading-relaxed">
            هنگام تماس تلفنی (<strong class="text-amber-300 font-bold">۰۲۱-۲۲۵۶۱۹۴۹</strong>) یا مراجعه حضوری، این کد را به صندوق‌دار اعلام فرمایید تا ۲۰٪ تخفیف فاکتور اعمال گردد.
          </p>
        </div>

        <!-- Screenshot & Save Reminder -->
        <div class="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-right flex items-start gap-2.5 shadow-sm">
          <span class="text-lg flex-shrink-0">📸</span>
          <div class="text-[11px] leading-relaxed">
            <strong class="text-white block font-bold mb-0.5">اسکرین‌شات بگیرید یا کد را ذخیره فرمایید:</strong>
            این صفحه موقت است و در صورت بستن مرورگر ممکن است پاک شود. لطفاً حتماً همین الان از این صفحه اسکرین‌شات گرفته یا کد را ذخیره فرمایید.
          </div>
        </div>

        <div class="flex items-center justify-end text-xs pt-1">
          <a href="tel:${E}" class="w-full py-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold text-xs hover:bg-emerald-500/30 transition flex items-center justify-center gap-1.5">
            <span>📞</span>
            <span>سفارش تلفنی مستقیم</span>
          </a>
        </div>
      </div>
    `,G=setInterval(()=>{const u=document.getElementById("vip-timer-display");if(!u){clearInterval(G);return}const p=oe(k);p.expired?(clearInterval(G),u.textContent="منقضی شده"):u.textContent=p.text},1e3),document.getElementById("copy-vip-btn")?.addEventListener("click",()=>{navigator.clipboard?.writeText(`کد تخفیف ۲۰٪ آتیش: ${m}`).then(()=>{j("کد تخفیف کپی شد")}).catch(()=>{j(`کد: ${m}`)})})}a?.addEventListener("click",()=>{e?.classList.add("hidden")}),e?.addEventListener("click",m=>{m.target===e&&e.classList.add("hidden")});const x=new URLSearchParams(window.location.search),$=x.get("gift")||x.get("code")||x.get("vip")||(window.location.hash.startsWith("#gift=")?window.location.hash.replace("#gift=",""):null);if($){const m=te($);if(m.valid){let k=null;try{const E=localStorage.getItem("atish_vip_offer");E&&(k=JSON.parse(E))}catch{}let g;if(k&&k.code===m.code&&k.expiresAt>Date.now())g=k.expiresAt;else{g=Date.now()+48*3600*1e3;try{localStorage.setItem("atish_vip_offer",JSON.stringify({code:m.code,expiresAt:g}))}catch{}}c(m.code,g),e?.classList.remove("hidden")}else j("کد اسکن شده نامعتبر است")}else try{const m=localStorage.getItem("atish_vip_offer");if(m){const k=JSON.parse(m);k&&k.expiresAt>Date.now()}}catch{}function v(){b(),n?.classList.remove("hidden")}function b(){if(t)if(!i)t.innerHTML=`
        <div class="space-y-4 text-center">
          <p class="text-xs text-zinc-300">برای ورود به پنل تایید کدهای تخفیف، رمز عبور ۴ رقمی پرسنل را وارد کنید:</p>
          <form id="cashier-login-form" class="space-y-3 max-w-xs mx-auto">
            <input 
              type="password" 
              id="cashier-pin-input" 
              maxlength="4" 
              placeholder="••••" 
              class="w-full bg-[#202028] border border-emerald-500/40 text-white text-center font-mono font-black text-xl rounded-xl py-2.5 tracking-widest focus:outline-none focus:ring-2 focus:ring-emerald-500" 
              required
              autofocus
            />
            <p id="cashier-pin-error" class="hidden text-rose-400 text-xs font-bold">رمز عبور اشتباه است</p>
            <button type="submit" class="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs transition">
              ورود به سیستم صندوق
            </button>
          </form>
        </div>
      `,document.getElementById("cashier-login-form")?.addEventListener("submit",m=>{m.preventDefault();let g=document.getElementById("cashier-pin-input")?.value||"";const E=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];for(let u=0;u<10;u++)g=g.replace(new RegExp(E[u],"g"),String(u));if(ne(g)===Te){i=!0;try{sessionStorage.setItem("atish_cashier_auth","true")}catch{}b()}else document.getElementById("cashier-pin-error")?.classList.remove("hidden")});else{t.innerHTML=`
        <div class="space-y-4">
          <div class="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-right">
            <label class="block text-xs font-bold text-emerald-300 mb-1.5">کد تخفیف ارائه‌شده توسط مشتری را وارد کنید:</label>
            <div class="flex items-center gap-2">
              <input 
                type="text" 
                id="cashier-search-code" 
                placeholder="A01-101-830" 
                dir="ltr"
                maxlength="11"
                autocomplete="off"
                autocorrect="off"
                spellcheck="false"
                class="flex-1 bg-[#1a1a20] border border-white/[0.15] text-white text-center font-mono font-black text-sm uppercase tracking-wider rounded-xl py-2 focus:outline-none focus:border-emerald-400"
              />
              <button 
                id="cashier-verify-btn" 
                type="button" 
                class="px-4 py-2 rounded-xl bg-emerald-500 text-black font-black text-xs hover:bg-emerald-400 transition"
              >
                بررسی
              </button>
            </div>
          </div>

          <div id="cashier-result-box" class="hidden p-4 rounded-xl bg-[#1f1f26] border border-white/[0.08] text-right space-y-3">
          </div>

          <div class="border-t border-white/[0.08] pt-3 flex items-center justify-between text-xs text-zinc-400">
            <button id="cashier-logout-btn" class="hover:text-white transition">خروج از سیستم صندوق</button>
            <span>رستوران آتیش</span>
          </div>
        </div>
      `,document.getElementById("cashier-logout-btn")?.addEventListener("click",()=>{i=!1;try{sessionStorage.removeItem("atish_cashier_auth")}catch{}b()});const m=document.getElementById("cashier-search-code"),k=document.getElementById("cashier-verify-btn"),g=document.getElementById("cashier-result-box");m?.addEventListener("input",()=>{const u=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];let p=m.value.toUpperCase();for(let h=0;h<10;h++)p=p.replace(new RegExp(u[h],"g"),String(h));const y=p.replace(/[^A-Z0-9]/g,"").slice(0,9);let I="";for(let h=0;h<y.length;h+=3)h>0&&(I+="-"),I+=y.slice(h,h+3);m.value=I});const E=()=>{const u=m?.value||"",p=te(u);let y=[];try{y=JSON.parse(localStorage.getItem("atish_cashier_redeemed")||"[]")}catch{}if(g.classList.remove("hidden"),!p.valid){g.innerHTML=`
            <div class="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-center space-y-1">
              <div class="text-base font-black">❌ غیر معتبر / نامعتبر</div>
              <p class="text-xs">${p.reason}</p>
            </div>
          `;return}if(y.some(h=>h.code===p.code)){const h=y.find(T=>T.code===p.code);g.innerHTML=`
            <div class="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-center space-y-1">
              <div class="text-base font-black">⚠️ این کد قبلاً استفاده شده است!</div>
              <p class="text-xs">کد: <span class="font-mono font-bold">${p.code}</span></p>
              <p class="text-[10px] text-zinc-400">زمان استفاده: ${h?.time||"نامشخص"}</p>
            </div>
          `;return}g.innerHTML=`
          <div class="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 space-y-2 text-right">
            <div class="flex items-center justify-between border-b border-emerald-500/30 pb-2">
              <span class="text-xs">نتیجه بررسی:</span>
              <span class="text-xs font-black text-emerald-400">تایید شد (معتبر و اصل) ✅</span>
            </div>
            <div class="flex items-center justify-between border-b border-emerald-500/30 pb-2">
              <span class="text-xs">کد تخفیف:</span>
              <span dir="ltr" class="font-mono font-black text-white text-base">${p.code}</span>
            </div>
            <div class="flex items-center justify-between border-b border-emerald-500/30 pb-2">
              <span class="text-xs">میزان تخفیف:</span>
              <span class="text-xs font-black text-amber-300">۲۰٪ کسر از فاکتور</span>
            </div>
            <button 
              id="cashier-mark-used-btn" 
              type="button" 
              class="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-black text-xs hover:opacity-90 transition mt-2 shadow-lg"
            >
              ✓ اعمال ۲۰٪ تخفیف و علامت‌گذاری به عنوان استفاده شده
            </button>
          </div>
        `,document.getElementById("cashier-mark-used-btn")?.addEventListener("click",()=>{y.push({code:p.code,time:new Date().toLocaleTimeString("fa-IR")+" - "+new Date().toLocaleDateString("fa-IR")});try{localStorage.setItem("atish_cashier_redeemed",JSON.stringify(y))}catch{}j(`تخفیف ۲۰٪ برای ${p.code} اعمال شد.`),E()})};k?.addEventListener("click",E),m?.addEventListener("keydown",u=>{u.key==="Enter"&&(u.preventDefault(),E())})}}s?.addEventListener("click",()=>{n?.classList.add("hidden")}),n?.addEventListener("click",m=>{m.target===n&&n.classList.add("hidden")}),o?.addEventListener("click",m=>{d++,clearTimeout(l),d>=5?(m.preventDefault(),d=0,v()):l=setTimeout(()=>{d=0},3e3)});const L=()=>{const m=window.location.hash;if(m==="#cashier"||m==="#cashier-tool")m==="#cashier-tool"&&(i=!0),v();else if(m.startsWith("#cashier-verify=")){i=!0,v();const k=m.replace("#cashier-verify=",""),g=document.getElementById("cashier-search-code");if(g){g.value=k,g.dispatchEvent(new Event("input"));const E=te(g.value),u=document.getElementById("cashier-result-box");u&&E.valid&&(u.classList.remove("hidden"),u.innerHTML=`
            <div class="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 space-y-2 text-right">
              <div class="flex items-center justify-between border-b border-emerald-500/30 pb-2">
                <span class="text-xs">نتیجه بررسی:</span>
                <span class="text-xs font-black text-emerald-400">تایید شد (معتبر و اصل) ✅</span>
              </div>
              <div class="flex items-center justify-between border-b border-emerald-500/30 pb-2">
                <span class="text-xs">کد تخفیف:</span>
                <span dir="ltr" class="font-mono font-black text-white text-base">${E.code}</span>
              </div>
              <div class="flex items-center justify-between border-b border-emerald-500/30 pb-2">
                <span class="text-xs">میزان تخفیف:</span>
                <span class="text-xs font-black text-amber-300">۲۰٪ کسر از فاکتور</span>
              </div>
              <button 
                id="cashier-mark-used-btn" 
                type="button" 
                class="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-black text-xs hover:opacity-90 transition mt-2 shadow-lg"
              >
                ✓ اعمال ۲۰٪ تخفیف و علامت‌گذاری به عنوان استفاده شده
              </button>
            </div>
          `)}}};L(),window.addEventListener("hashchange",L)}let H={};function ue(e){if(!e)return 0;let a=B[e.id]||0;return e.shapes&&e.shapes.forEach(r=>{a+=B[`${e.id}:${r.id}`]||0}),a}function Q(e){if(!e)return null;if(e.includes(":")){const[r,n]=e.split(":"),s=z.items.find(o=>o.id===r);if(!s)return null;const t=s.shapes?.find(o=>o.id===n)||s.shapes?.[0];return{key:e,id:s.id,title:`${s.title} (${t?.name||"کلاسیک"})`,image:t?.image||s.image,ingredients:t?.id==="heart"?"خمیر پیتزا طرح قلبی، "+(s.ingredients||""):s.ingredients,placeholderIcon:"🍕",price:t?.price||s.price}}const a=z.items.find(r=>r.id===e);return a?{key:e,id:a.id,title:a.title,image:a.image,ingredients:a.ingredients,placeholderIcon:a.placeholderIcon,price:a.price}:null}function xe(e){const a=document.getElementById("tray-modal");if(!a||a.classList.contains("hidden"))return!1;const r=document.getElementById(`tray-item-qty-${e}`);if(!r)return!1;const n=Q(e);if(!n)return!1;const s=B[e]||0,t=n.price?Number(n.price):0,o=J(),i=V();r.textContent=w(s);const d=document.getElementById(`tray-item-subtotal-${e}`);d&&(t>0?d.innerHTML=`
        <span class="text-[11px] font-black text-amber-400 whitespace-nowrap">${S(t*s)}</span>
        ${s>1?`<span class="text-[9px] sm:text-[10px] text-zinc-400 whitespace-nowrap leading-tight">(${S(t)} هر عدد)</span>`:""}
      `:d.innerHTML=`<span class="text-[10px] text-zinc-400 font-light truncate max-w-[120px] block">${n.ingredients||"آتیش"}</span>`);const l=document.getElementById("tray-header-totals");l&&(l.textContent=`${w(o)} قلم غذا${i>0?` · ${S(i)}`:""}`);const c=document.getElementById("tray-total-card");c&&(c.className=`${i>0?"flex":"hidden"} mx-3 my-2 p-3 rounded-2xl bg-[#1b1b22] border border-amber-500/25 items-center justify-between shadow-md`);const x=document.getElementById("tray-total-card-count");x&&(x.textContent=`${w(o)} قلم غذا`);const $=document.getElementById("tray-total-card-price");return $&&($.textContent=S(i)),!0}function K(e){B[e]=(B[e]||0)+1,W();const a=document.getElementById("tray-modal");a&&!a.classList.contains("hidden")&&(xe(e)||R())}function Pe(e){if(!B[e])return;if(B[e]-=1,B[e]<=0){delete B[e],W(),R();return}W(),xe(e)||R()}function De(e){delete B[e],W(),R()}function Ne(){B={},W(),R()}function Fe(){const e=Object.keys(B);let a=`📋 پیش‌فاکتور اقلام سفارش - رستوران آتیش:

`,r=0;return e.forEach((n,s)=>{const t=Q(n);if(t){const o=B[n],i=t.price?Number(t.price):0,d=i*o;r+=d;const l=i>0?` (${S(d)})`:"";a+=`${w(s+1)}. ${t.title} × ${w(o)}${l}
`}}),r>0&&(a+=`
💰 جمع کل سفارش: ${S(r)}
`),a+=`
📍 آدرس: خیابان دولت تهران، محله دروس، روبه‌روی بانک ملت بین کوچه خرداد و معتمدی، پلاک ۱۰۰
`,a+=`📞 تلفن سفارش مستقیم: ۰۲۱-۲۲۵۶۱۹۴۹
`,a+="🛵 سفارش آنلاین در اسنپ‌فود: https://snappfood.ir/restaurant/menu/پیتزا_آتیش-r-p44gzx/",a}function R(){const e=document.getElementById("tray-modal-box"),a=z?.restaurant||F;if(!e)return;const r=Object.keys(B),n=J();if(r.length===0){e.innerHTML=`
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
    `,document.getElementById("close-empty-tray-btn")?.addEventListener("click",()=>{document.getElementById("tray-modal")?.classList.add("hidden")});return}const s=V();e.innerHTML=`
    <!-- Modal Header -->
    <div class="p-4 border-b border-white/[0.08] flex items-center justify-between bg-[#18181c]">
      <div class="flex items-center gap-2">
        <span class="text-xl">📋</span>
        <div>
          <h2 class="text-sm font-black text-white">لیست سفارش شما</h2>
          <span id="tray-header-totals" class="text-[11px] text-amber-400 font-bold">${w(n)} قلم غذا${s>0?` · ${S(s)}`:""}</span>
        </div>
      </div>
      <button id="close-tray-btn" class="w-7 h-7 rounded-full bg-[#24242c] flex items-center justify-center text-zinc-400 hover:text-white transition">
        ${f.close}
      </button>
    </div>

    <!-- Friendly Notice for Iranian Customers -->
    <div class="m-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300 leading-relaxed flex items-start gap-2">
      <span class="text-sm flex-shrink-0">💡</span>
      <p>
        لیست و قیمت‌های زیر برای آماده‌سازی سریع سفارش شماست. می‌توانید لیست را کپی کرده یا مستقیماً تماس بگیرید.
      </p>
    </div>

    <!-- Items List -->
    <div class="px-3 py-1 flex flex-col gap-2 max-h-60 overflow-y-auto">
      ${r.map(t=>{const o=Q(t);if(!o)return"";const i=B[t],d=P(o.image),l=o.price?Number(o.price):0;return`
          <div class="flex items-center justify-between p-2.5 rounded-xl bg-[#202026] border border-white/[0.06]">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-10 h-10 rounded-lg overflow-hidden bg-black/40 flex-shrink-0 border border-white/[0.08]">
                <img src="${d}" alt="${o.title}" class="w-full h-full object-cover" onerror="this.src='/images/atish-burger.jpg'" />
              </div>
              <div class="text-right min-w-0">
                <h4 class="text-xs font-bold text-white truncate">${o.title}</h4>
                <div id="tray-item-subtotal-${t}" class="flex flex-col sm:flex-row sm:items-center items-start gap-0.5 sm:gap-1.5 mt-0.5">
                  ${l>0?`
                    <span class="text-[11px] font-black text-amber-400 whitespace-nowrap">
                      ${S(l*i)}
                    </span>
                    ${i>1?`<span class="text-[9px] sm:text-[10px] text-zinc-400 whitespace-nowrap leading-tight">(${S(l)} هر عدد)</span>`:""}
                  `:`
                    <span class="text-[10px] text-zinc-400 font-light truncate max-w-[120px] block">${o.ingredients||"آتیش"}</span>
                  `}
                </div>
              </div>
            </div>

            <!-- Quantity Counter Controls -->
            <div class="flex items-center gap-1.5 flex-shrink-0">
              <div class="flex items-center bg-[#282832] border border-white/[0.12] rounded-xl p-1 gap-1">
                <button 
                  type="button"
                  data-action="decrease" 
                  data-id="${t}" 
                  class="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/[0.15] active:scale-90 flex items-center justify-center text-zinc-300 hover:text-white transition"
                  aria-label="کاهش تعداد"
                >
                  <span class="pointer-events-none">${f.minus}</span>
                </button>
                <span id="tray-item-qty-${t}" class="text-xs sm:text-sm font-black text-amber-400 px-1.5 min-w-[20px] text-center select-none pointer-events-none">
                  ${w(i)}
                </span>
                <button 
                  type="button"
                  data-action="increase" 
                  data-id="${t}" 
                  class="w-7 h-7 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 active:scale-90 flex items-center justify-center text-amber-300 hover:text-white transition"
                  aria-label="افزایش تعداد"
                >
                  <span class="pointer-events-none">${f.plus}</span>
                </button>
              </div>

              <!-- Delete (Trash) Button -->
              <button 
                type="button"
                data-action="delete" 
                data-id="${t}" 
                class="w-8 h-8 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/25 active:scale-90 flex items-center justify-center text-red-400 hover:text-red-300 transition"
                aria-label="حذف این آیتم"
              >
                <span class="pointer-events-none">${f.trash}</span>
              </button>
            </div>
          </div>
        `}).join("")}
    </div>

    <!-- Total Price Summary Box: Solid dark theme with zero flicker -->
    <div id="tray-total-card" class="${s>0?"flex":"hidden"} mx-3 my-2 p-3 rounded-2xl bg-[#1c1c22] border border-amber-500/30 items-center justify-between shadow-md">
      <div class="flex items-center gap-2">
        <span class="text-base">💳</span>
        <div>
          <span class="text-xs font-black text-white block">مجموع مبلغ سفارش:</span>
          <span id="tray-total-card-count" class="text-[10px] text-zinc-400 font-light">${w(n)} قلم غذا</span>
        </div>
      </div>
      <div class="text-left">
        <span id="tray-total-card-price" class="text-sm sm:text-base font-black text-amber-400">${S(s)}</span>
      </div>
    </div>

    <!-- Action Buttons: Solid grounded dark footer with no shifting borders -->
    <div class="p-3 mt-auto bg-[#131317] border-t border-white/[0.06] flex flex-col gap-2">
      <div class="grid grid-cols-2 gap-2">
        <a 
          href="tel:${a.phone}"
          class="py-2.5 px-2 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/25 active:scale-95 transition whitespace-nowrap"
        >
          ${f.phone}
          <span>تماس و سفارش</span>
        </a>

        <a 
          href="${a.snappfoodUrl}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="py-2.5 px-2 rounded-xl bg-[#ff00a6] hover:bg-[#e00092] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-pink-500/25 active:scale-95 transition whitespace-nowrap"
        >
          ${f.scooter}
          <span>سفارش اسنپ‌فود</span>
        </a>
      </div>

      <div class="grid grid-cols-2 gap-2 pt-0.5">
        <button 
          id="btn-copy-order" 
          class="py-2 rounded-xl bg-[#202028] hover:bg-[#282834] border border-white/[0.08] text-[11px] font-bold text-zinc-300 hover:text-white flex items-center justify-center gap-1 active:scale-95 transition"
        >
          ${f.copy}
          <span>کپی لیست سفارش</span>
        </button>

        <button 
          id="btn-clear-tray"
          class="py-2 rounded-xl bg-[#202028] hover:bg-red-500/10 border border-white/[0.08] hover:border-red-500/30 text-[11px] font-bold text-red-400 hover:text-red-300 flex items-center justify-center gap-1 active:scale-95 transition"
        >
          ${f.trash}
          <span>خالی کردن لیست</span>
        </button>
      </div>
    </div>
  `,document.getElementById("close-tray-btn")?.addEventListener("click",()=>{document.getElementById("tray-modal")?.classList.add("hidden")}),e.querySelectorAll("button[data-action]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation(),o.preventDefault();const i=t.dataset.action,d=t.dataset.id;i==="increase"&&K(d),i==="decrease"&&Pe(d),i==="delete"&&De(d)})}),document.getElementById("btn-copy-order")?.addEventListener("click",()=>{navigator.clipboard?.writeText(Fe()).then(()=>{j("متن سفارش کپی شد")})}),document.getElementById("btn-clear-tray")?.addEventListener("click",()=>{Ne()})}function ge(e){return e?e.startsWith("./")?e.slice(1):e.startsWith("/")?e:"/"+e:""}function P(e){const a=ge(e);if(!a)return"";const r=a.split("/").pop();return r&&r!=="logo.webp"?`/images/thumbs/${r.replace(/\.(jpg|jpeg|png)$/i,".webp")}`:a}function se(e,a){if(!e)return;H[e.id]=a;const r=e.shapes?.find(i=>i.id===a)||e.shapes?.[0];if(!r)return;const n=document.getElementById(`card-img-${e.id}`);n&&(n.style.opacity="0.3",setTimeout(()=>{n.src=P(r.image),n.style.opacity="1"},120));const s=document.getElementById(`card-badge-${e.id}`);if(s){const i=r.badge||e.badge||"";s.textContent=i,s.className=i?"bg-black/90 text-amber-300 border border-amber-500/30 text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-lg shadow-sm whitespace-nowrap":"hidden"}const t=document.getElementById(`card-btn-text-${e.id}`);t&&(t.textContent=`افزودن ${r.shortName||r.name}`);const o=document.getElementById(`card-price-${e.id}`);if(o){const i=r.price||e.price;i&&(o.textContent=S(i))}e.shapes?.forEach(i=>{const d=document.getElementById(`card-dot-${e.id}-${i.id}`);d&&(d.className=`h-1.5 rounded-full transition-all duration-300 ${i.id===a?"bg-amber-400 w-4 shadow":"bg-white/40 w-1.5"}`)})}function He(e){const a=document.getElementById("item-modal"),r=document.getElementById("item-modal-box");if(!a||!r)return;const n=e.shapes&&e.shapes.length>1;let s=n?H[e.id]||"normal":null,t=n?e.shapes.find(l=>l.id===s)||e.shapes[0]:null;const o=t?t.image:e.image,i=P(o),d=t?.price||e.price;if(r.innerHTML=`
    <!-- Modal Photo Container with Touch Swipe and Arrow Controls -->
    <div class="relative w-full h-64 bg-gradient-to-b from-[#24242c] to-[#141417] overflow-hidden flex items-center justify-center select-none" id="modal-photo-container">
      <img 
        id="modal-main-img"
        src="${i}" 
        data-thumb="${i}"
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
        ${f.close}
      </button>

      <!-- Badges in Photo Top-Right -->
      <div class="absolute top-3 right-3 flex flex-col gap-2 items-start z-30 pointer-events-none">
        ${e.isChefRecommendation?`
          <span class="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-[10px] sm:text-[11px] px-2.5 py-1 rounded-lg shadow-lg flex items-center gap-1 whitespace-nowrap">
            <span>⭐</span>
            <span>پیشنهاد سرآشپز</span>
          </span>
        `:""}
        <span 
          id="modal-badge"
          class="${t?.badge||e.badge?"":"hidden"} bg-black/85 text-amber-300 border border-amber-500/30 text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap"
        >
          ${t?.badge||e.badge||""}
        </span>
      </div>

      ${n?`
        <!-- Swipe Dots Indicator -->
        <div class="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5 z-20 pointer-events-none">
          ${e.shapes.map(l=>`
            <span 
              data-dot-shape="${l.id}"
              class="h-2 rounded-full transition-all duration-300 ${l.id===s?"bg-amber-400 w-5 shadow":"bg-white/40 w-2"}"
            ></span>
          `).join("")}
        </div>
      `:""}
    </div>

    <div class="p-4 text-right">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
        <h3 class="text-base sm:text-lg font-black text-white" id="modal-title-text">${e.title}</h3>
        <div class="flex items-center gap-1.5 flex-shrink-0">
          ${d?`
            <span id="modal-price-badge" class="text-xs sm:text-sm font-black text-amber-400 bg-amber-500/10 border border-amber-500/25 px-2.5 py-1 rounded-xl whitespace-nowrap">
              ${S(d)}
            </span>
          `:""}
          ${e.tag?`<span class="text-[10px] font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">${e.tag}</span>`:""}
        </div>
      </div>

      ${n?`
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
            ${e.shapes.map(l=>{const c=l.id===s;return`
                <button 
                  type="button" 
                  data-modal-shape-btn="${l.id}"
                  class="py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center border transition-all ${c?"bg-amber-500 text-black border-amber-400 shadow-lg":"bg-[#222228] text-zinc-300 border-white/[0.08] hover:text-white hover:bg-white/[0.08]"}"
                >
                  <span>${l.name}</span>
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
          ${f.plus}
          <span id="modal-btn-label">
            ${n?`افزودن به لیست سفارش (${t.name})`:"افزودن به لیست سفارش"}
          </span>
        </button>
      </div>
    </div>
  `,a.classList.remove("hidden"),n&&e.shapes.forEach(l=>{const c=new Image;c.src=P(l.image)}),document.getElementById("close-item-modal-btn")?.addEventListener("click",()=>{a.classList.add("hidden")}),n){const l=v=>{s=v,H[e.id]=v,t=e.shapes.find(u=>u.id===v)||e.shapes[0];const b=document.getElementById("modal-main-img"),L=P(t.image);b&&(b.style.opacity="0.5",setTimeout(()=>{b.src=L,b.style.opacity="1"},50));const m=document.getElementById("modal-badge");if(m){const u=t.badge||e.badge||"";m.textContent=u,m.className=u?"bg-black/85 text-amber-300 border border-amber-500/30 text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap":"hidden"}document.querySelectorAll("[data-dot-shape]").forEach(u=>{const p=u.dataset.dotShape===v;u.className=`h-2 rounded-full transition-all duration-300 ${p?"bg-amber-400 w-5 shadow":"bg-white/40 w-2"}`}),document.querySelectorAll("[data-modal-shape-btn]").forEach(u=>{const p=u.dataset.modalShapeBtn===v;u.className=`py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 border transition-all ${p?"bg-amber-500 text-black border-amber-400 shadow-lg":"bg-[#222228] text-zinc-300 border-white/[0.08] hover:text-white hover:bg-white/[0.08]"}`});const k=document.getElementById("modal-btn-label");k&&(k.textContent=`افزودن به لیست سفارش (${t.name})`);const g=t.price||e.price,E=document.getElementById("modal-price-badge");E&&g&&(E.textContent=S(g)),se(e,v)},c=()=>{const b=(e.shapes.findIndex(L=>L.id===s)+1)%e.shapes.length;l(e.shapes[b].id)};document.querySelectorAll("[data-modal-shape-btn]").forEach(v=>{v.addEventListener("click",b=>{b.stopPropagation(),l(v.dataset.modalShapeBtn)})});let x=0;const $=document.getElementById("modal-photo-container");$?.addEventListener("touchstart",v=>{x=v.changedTouches[0].screenX},{passive:!0}),$?.addEventListener("touchend",v=>{const b=v.changedTouches[0].screenX;Math.abs(b-x)>40&&c()},{passive:!0})}document.getElementById("modal-add-tray-btn")?.addEventListener("click",()=>{let l=e.id,c=e.title;n&&t&&(l=`${e.id}:${t.id}`,c=`${e.title} (${t.name})`),K(l),a.classList.add("hidden"),j(`${c} به لیست اضافه شد`)})}function Y(){const e=document.getElementById("menu-container");if(!e||!z)return;const a=z.categories||[];let r=z.items||[];if(M){const n=Z(M);if(r=r.filter(s=>{const t=Z(s.title).includes(n),o=s.ingredients&&Z(s.ingredients).includes(n),i=a.find(l=>l.id===s.categoryId),d=i&&Z(i.name+" "+(i.title||"")).includes(n);return t||o||d}),r.length===0){e.innerHTML=`
        <div class="flex flex-col items-center justify-center py-16 text-center text-zinc-400 glass-card rounded-2xl p-6">
          <span class="text-5xl mb-3">🔍</span>
          <p class="text-base font-black text-white">غذایی مطابق «${re(M)}» پیدا نشد!</p>
          <p class="text-xs text-zinc-400 mt-1 mb-4">می‌توانید کلمه دیگری مانند «پیتزا»، «برگر»، «پپرونی» یا «سوخاری» را جستجو فرمایید.</p>
          <button id="reset-search-btn" class="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black text-xs font-black hover:opacity-90 transition shadow-md">
            نمایش کل منو
          </button>
        </div>
      `,document.getElementById("reset-search-btn")?.addEventListener("click",()=>{M="";const s=document.getElementById("desktop-search-input"),t=document.getElementById("menu-search-input"),o=document.getElementById("clear-search-btn"),i=document.getElementById("clear-desktop-search-btn");s&&(s.value=""),t&&(t.value=""),o&&o.classList.add("hidden"),i&&i.classList.add("hidden"),Y()});return}e.innerHTML=`
      <div class="flex items-center justify-between mb-4 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs">
        <div class="flex items-center gap-2 text-amber-300 font-bold">
          <span>🔍</span>
          <span>نتایج جستجو برای: «${re(M)}»</span>
          <span class="bg-amber-500 text-black font-black text-[10px] px-2 py-0.5 rounded-full mr-1">
            ${w(r.length)} غذا
          </span>
        </div>
        <button id="reset-search-btn-top" class="text-zinc-400 hover:text-white text-[11px] underline">
          پاک کردن جستجو ✕
        </button>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        ${r.map((s,t)=>de(s,t<4)).join("")}
      </div>
    `,document.getElementById("reset-search-btn-top")?.addEventListener("click",()=>{M="";const s=document.getElementById("desktop-search-input"),t=document.getElementById("menu-search-input"),o=document.getElementById("clear-search-btn"),i=document.getElementById("clear-desktop-search-btn");s&&(s.value=""),t&&(t.value=""),o&&o.classList.add("hidden"),i&&i.classList.add("hidden"),Y()}),le();return}e.innerHTML=a.map((n,s)=>{const t=r.filter(o=>o.categoryId===n.id);return t.length===0?"":`
      <section class="mb-10 scroll-mt-28" id="sec-${n.id}">
        <!-- Section Header -->
        <div class="flex items-center justify-between mb-4 pb-2.5 border-b border-white/[0.08]">
          <div class="flex flex-col text-right">
            <h2 class="text-base sm:text-lg md:text-xl font-black text-white flex items-center gap-2">
              <span>${n.icon}</span>
              <span>${n.title||n.name}</span>
            </h2>
            ${n.subtitle?`<span class="text-xs text-zinc-400 font-light mt-0.5">${n.subtitle}</span>`:""}
          </div>
          <span class="bg-[#18181c] text-amber-400 border border-white/[0.08] text-[11px] font-black px-3 py-1 rounded-full flex-shrink-0">
            ${w(t.length)} غذا
          </span>
        </div>

        <!-- Food Grid (Responsive: 2 cols on mobile, 3 on tablet, 4 on desktop) -->
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          ${t.map((o,i)=>{const d=s===0&&i<4;return de(o,d)}).join("")}
        </div>
      </section>
    `}).join(""),le()}function de(e,a=!1){const r=ue(e),n=e.shapes&&e.shapes.length>1,s=H[e.id]||"normal",t=n?e.shapes.find(x=>x.id===s)||e.shapes[0]:null,o=ge(t?t.image:e.image),i=P(t?t.image:e.image),d=t?.badge||e.badge,l=!!e.isChefRecommendation,c=a?'loading="eager" fetchpriority="high"':'loading="lazy"';return`
    <article 
      data-id="${e.id}" 
      class="food-card glass-card rounded-2xl overflow-hidden shadow-sm flex flex-col group transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1 hover:shadow-xl cursor-pointer text-right ${l?"border-amber-500/40 ring-1 ring-amber-500/25 shadow-amber-950/20":""}"
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
            ${c}
            decoding="async"
            class="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
            onerror="this.src='${o}';this.onerror=null;"
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
        <div class="absolute top-2 right-2 flex flex-col gap-1.5 items-start pointer-events-none z-10">
          ${l?`
            <span class="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-[9px] md:text-[10px] px-2 py-0.5 rounded-lg shadow-md flex items-center gap-1 whitespace-nowrap">
              <span>⭐</span>
              <span>پیشنهاد سرآشپز</span>
            </span>
          `:""}
          <span 
            id="card-badge-${e.id}"
            class="${d?"":"hidden"} bg-black/90 text-amber-300 border border-amber-500/30 text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-lg shadow-sm whitespace-nowrap"
          >
            ${d||""}
          </span>
        </div>

        <div 
          id="card-tray-count-${e.id}" 
          class="${r>0?"flex":"hidden"} absolute top-2 left-2 bg-amber-500 text-black font-black text-[10px] md:text-xs w-5 h-5 md:w-6 md:h-6 rounded-full items-center justify-center shadow z-10 pointer-events-none"
        >
          ${w(r)}
        </div>

        ${n?`
          <!-- Minimal Dots Indicator showing available photo shapes -->
          <div class="absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-1.5 z-10 pointer-events-none">
            ${e.shapes.map(x=>`
              <span 
                id="card-dot-${e.id}-${x.id}"
                class="h-1.5 rounded-full transition-all duration-300 ${x.id===s?"bg-amber-400 w-4 shadow":"bg-white/40 w-1.5"}"
              ></span>
            `).join("")}
          </div>
        `:""}
      </div>

      <!-- Card Body (title + price + action) -->
      <div class="p-2.5 sm:p-3.5 flex flex-col flex-grow text-right">
        <!-- Title: up to 2 lines, full card width, no overlap with price -->
        <h3 
          class="card-title-clamp text-xs sm:text-sm font-black text-white group-hover:text-amber-400 transition-colors min-h-[2rem] sm:min-h-[2.25rem] leading-snug mb-1.5"
          title="${e.title}"
        >
          ${e.title}
        </h3>

        <!-- Dedicated Price Row: clean separation, fully visible -->
        <div class="flex items-center justify-between gap-1 mb-2">
          ${e.price?`
            <span class="text-xs sm:text-sm font-black text-amber-400 whitespace-nowrap">
              ${S(e.price)}
            </span>
          `:'<span class="text-[10px] text-zinc-500">-</span>'}
          ${e.tag?`<span class="text-[9px] font-bold text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded-full border border-red-500/20">${e.tag}</span>`:""}
        </div>

        <!-- Single "افزودن به لیست سفارش" button only -->
        <div class="mt-auto pt-2 border-t border-white/[0.06]">
          <button 
            data-action="add-tray" 
            data-id="${e.id}"
            class="w-full py-2 px-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-black text-[11px] sm:text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
          >
            ${f.plus}
            <span id="card-btn-text-${e.id}">
              ${n?`افزودن ${t.shortName||t.name}`:"افزودن به لیست سفارش"}
            </span>
          </button>
        </div>
      </div>
    </article>
  `}function le(){document.querySelectorAll(".food-card").forEach(e=>{const a=e.dataset.id,r=z.items.find(t=>t.id===a);if(!r)return;let n=!1;if(e.addEventListener("click",t=>{if(n){n=!1;return}t.target.closest('button[data-action="add-tray"]')||t.target.closest("a")||He(r)}),r.shapes&&r.shapes.length>1){let t=0,o=0;const i=e.querySelector(`[data-photo-container="${r.id}"]`);i?.addEventListener("touchstart",l=>{t=l.changedTouches[0].screenX,o=l.changedTouches[0].screenY,n=!1},{passive:!0}),i?.addEventListener("touchend",l=>{const c=l.changedTouches[0].screenX,x=l.changedTouches[0].screenY,$=c-t,v=x-o;if(Math.abs($)>30&&Math.abs($)>Math.abs(v)){n=!0;const L=(H[r.id]||"normal")==="normal"?"heart":"normal";se(r,L),setTimeout(()=>{n=!1},200)}},{passive:!0});let d=!1;i?.addEventListener("mousedown",l=>{d=!0,t=l.screenX,n=!1}),i?.addEventListener("mouseup",l=>{if(!d)return;d=!1;const c=l.screenX;if(Math.abs(c-t)>30){n=!0;const $=(H[r.id]||"normal")==="normal"?"heart":"normal";se(r,$),setTimeout(()=>{n=!1},200)}}),i?.addEventListener("mouseleave",()=>{d=!1})}e.querySelector('button[data-action="add-tray"]')?.addEventListener("click",t=>{t.stopPropagation();let o=a,i=r.title;if(r.shapes&&r.shapes.length>1){const d=H[r.id]||"normal",l=r.shapes.find(c=>c.id===d)||r.shapes[0];o=`${r.id}:${d}`,i=`${r.title} (${l.name})`}K(o),j(`${i} به لیست اضافه شد`)})})}function Re(){if("serviceWorker"in navigator&&window.location.protocol.startsWith("http")&&(navigator.serviceWorker.addEventListener("controllerchange",()=>{window._swReloading||(window._swReloading=!0,window.location.reload())}),window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(c=>{c.update()}).catch(c=>{console.log("SW registration error:",c)})})),window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)return;const a=/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()),r=document.getElementById("btn-install-pwa"),n=document.getElementById("pwa-install-banner"),s=document.getElementById("pwa-banner-install-btn"),t=document.getElementById("pwa-banner-close-btn"),o=document.getElementById("ios-install-modal"),i=document.getElementById("close-ios-modal-btn"),d=document.getElementById("confirm-ios-modal-btn");a&&(r?.classList.remove("hidden"),r?.classList.add("flex"),n?.classList.remove("hidden")),window.addEventListener("beforeinstallprompt",c=>{c.preventDefault(),_=c,r?.classList.remove("hidden"),r?.classList.add("flex"),n?.classList.remove("hidden")});const l=async()=>{if(a){o?.classList.remove("hidden");return}if(_){_.prompt();const{outcome:c}=await _.userChoice;c==="accepted"&&(r?.classList.add("hidden"),n?.classList.add("hidden"),j("اپلیکیشن با موفقیت نصب شد")),_=null}else j("برای نصب، از منوی مرورگر گزینه Add to Home Screen را بزنید.")};r?.addEventListener("click",l),s?.addEventListener("click",l),t?.addEventListener("click",()=>{n?.classList.add("hidden")}),i?.addEventListener("click",()=>{o?.classList.add("hidden")}),d?.addEventListener("click",()=>{o?.classList.add("hidden")}),o?.addEventListener("click",c=>{c.target===o&&o.classList.add("hidden")})}function _e(){if(typeof window>"u")return;const e=[];(z.items||[]).forEach(s=>{s.image&&e.push(P(s.image)),s.shapes&&s.shapes.forEach(t=>{t.image&&e.push(P(t.image))})});const a=[...new Set(e)];let r=0;function n(){if(r>=a.length)return;const s=a.slice(r,r+4);r+=4,s.forEach(t=>{const o=new Image;o.decoding="async",o.src=t}),r<a.length&&("requestIdleCallback"in window?requestIdleCallback(n,{timeout:1e3}):setTimeout(n,200))}"requestIdleCallback"in window?requestIdleCallback(n,{timeout:1500}):setTimeout(n,350)}Ce();be();Re();_e();
