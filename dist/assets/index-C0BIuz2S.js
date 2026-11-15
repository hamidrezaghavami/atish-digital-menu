(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const j={brandTitle:"فست‌فود آتیش",brandSubtitle:"طعم اصیل و لذیذ فست‌فود آتیش",tagline:"منوی دیجیتال و سفارش دلیوری فست‌فود آتیش",phoneNumber:"02122561949",snappfoodUrl:"https://snappfood.ir/restaurant/menu/پیتزا_آتیش-r-p44gzx/",instagramUrl:"https://instagram.com/atishfood",workingHours:"همه روزه از ۱۱:۳۰ صبح تا ۲۳:۱۵ شب",address:"خیابان دولت تهران، محله دروس، خیابان کلاهدوز (دولت)، روبه‌روی بانک ملت بین کوچه خرداد و معتمدی، پلاک ۱۰۰"},se={name:"آتیش",brandTitle:"آتیش | Menu",brandSubtitle:"طعم اصیل و لذیذ رستوران آتیش",tagline:"منوی دیجیتال آتیش",phone:"02122561949",snappfoodUrl:"https://snappfood.ir/restaurant/menu/پیتزا_آتیش-r-p44gzx/",instagramUrl:"https://instagram.com/atishfood",workingHours:"همه روزه از ۱۱:۳۰ صبح تا ۲۳:۱۵ شب",address:"خیابان دولت تهران، محله دروس، خیابان کلاهدوز (دولت)، روبه‌روی بانک ملت بین کوچه خرداد و معتمدی، پلاک ۱۰۰",rating:"۴.۴"},re=[{id:"american-pizzas",name:"پیتزا آمریکایی",icon:"🍕",title:"پیتزاهای آمریکایی",subtitle:""},{id:"family-pizzas",name:"پیتزا خانواده",icon:"🍕",title:"پیتزاهای خانواده",subtitle:""},{id:"italian-pizzas",name:"پیتزا ایتالیایی",icon:"🍕",title:"پیتزاهای ایتالیایی",subtitle:""},{id:"burgers",name:"برگرها",icon:"🍔",title:"برگر",subtitle:""},{id:"sandwiches",name:"ساندویچ‌ها",icon:"🌭",title:"ساندویچ‌ها",subtitle:""},{id:"fried",name:"سوخاری‌ها",icon:"🍗",title:"مرغ و سوخاری",subtitle:""},{id:"sides",name:"پیش‌ غذا",icon:"🍟",title:"پیش‌ غذا",subtitle:""},{id:"drinks",name:"نوشیدنی‌ها",icon:"🥤",title:"نوشیدنی‌ها",subtitle:""}],ie=[{id:"ap-1",categoryId:"american-pizzas",isFeatured:!0,isChefRecommendation:!0,title:"پیتزا آمریکایی مخصوص",tag:null,badge:"دارای طرح قلبی ❤️",price:749e3,ingredients:"خمیر پیتزا پنجره ای آمریکایی، مرغ، ژامبون گوشت 90%، قارچ، فلفل دلمه ای، پنیر پیتزا",image:"./images/Makhsos-American.webp",placeholderIcon:"🍕",shapes:[{id:"normal",name:"مستطیل کلاسیک",shortName:"مستطیل",icon:"",image:"./images/Makhsos-American.webp",badge:null,price:749e3},{id:"heart",name:"طرح قلبی",shortName:"قلبی",icon:"",image:"images/heart-normal.webp",badge:"❤️ طرح قلبی",price:749e3}]},{id:"ap-2",categoryId:"american-pizzas",isFeatured:!1,isChefRecommendation:!0,title:"پیتزا پپرونی",tag:null,badge:"دارای طرح قلبی ❤️",price:739e3,ingredients:"خمیر پیتزا پنجره ای آمریکایی، پپرونی 90%، فلفل دلمه ای، پنیر پیتزا",image:"./images/Peperoni-American-Pizza.webp",placeholderIcon:"🍕",shapes:[{id:"normal",name:"مستطیل کلاسیک",shortName:"مستطیل",icon:"",image:"./images/Peperoni-American-Pizza.webp",badge:null,price:739e3},{id:"heart",name:"طرح قلبی",shortName:"قلبی",icon:"",image:"images/heart-peperoni.webp",badge:"❤️ طرح قلبی",price:739e3}]},{id:"ap-3",categoryId:"american-pizzas",isFeatured:!1,isChefRecommendation:!0,title:"پیتزا مرغ و قارچ",tag:null,badge:null,price:749e3,ingredients:"خمیر پیتزا پنجره ای آمریکایی، مرغ نگینی شده، قارچ، پنیر پیتزا",image:"./images/Chicken-American-Pizza.webp",placeholderIcon:"🍕"},{id:"ap-4",categoryId:"american-pizzas",isFeatured:!1,isChefRecommendation:!0,title:"پیتزا گوشت و قارچ",tag:null,badge:null,price:879e3,ingredients:"خمیر پیتزا پنجره ای آمریکایی، گوشت گوساله ریش ریش شده، قارچ، پنیر پیتزا",image:"./images/meat-American-Pizza.webp",placeholderIcon:"🍕"},{id:"ap-5",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا سبزیجات",tag:null,badge:null,price:599e3,ingredients:"خمیر پیتزا آمریکایی، ذرت، نخود فرنگی، هویج، قارچ، فلفل دلمه ای، پنیر پیتزا",image:"./images/Sabzi-American.webp",placeholderIcon:"🍕"},{id:"ap-6",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا قارچ و سوسیس",tag:null,badge:null,price:61e4,ingredients:"خمیر آمریکایی ، قارچ ، سوسیس اسلایس ، پنیر میکس ، سس مخصوص آتیش",image:"images/american-Sosis-mashroom.webp",placeholderIcon:"🍕"},{id:"ap-7",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا قارچ و پنیر",tag:null,badge:null,price:499e3,ingredients:"خمیر پیتزا آمریکایی، قارچ، پنیر پیتزا",image:"./images/Mashroom-Pizza.webp",placeholderIcon:"🍕"},{id:"fp-1",categoryId:"family-pizzas",isFeatured:!0,title:"پیتزا چهارطعم خانواده",tag:null,badge:null,price:1549e3,ingredients:"ترکیبی از چهار طعم مختلف پیتزا با قابلیت انتخاب و تغییر طعم‌ها به سلیقه شما.",image:"./images/4F-Family.webp",placeholderIcon:"🍕"},{id:"ip-1",categoryId:"italian-pizzas",isFeatured:!0,title:"پیتزا ایتالیایی آتیش",tag:null,badge:null,price:989e3,ingredients:"خمیر پیتزا ایتالیایی، مرغ، ژامبون گوشت 90%، قارچ، فلفل دلمه ای، زیتون، پنیر پیتزا",image:"./images/Atish-Italian.webp",placeholderIcon:"🍕"},{id:"ip-2",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا پپرونی ایتالیایی",tag:null,badge:null,price:989e3,ingredients:"خمیر پیتزا ایتالیایی، پپرونی 90%، فلفل دلمه ای، پنیر پیتزا",image:"./images/Peperoni-Italian.webp",placeholderIcon:"🍕"},{id:"ip-3",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا مرغ و قارچ ایتالیایی",tag:null,badge:null,price:979e3,ingredients:"خمیر پیتزا ایتالیایی، مرغ، قارچ، زیتون، فلفل دلمه ای، پنیر پیتزا",image:"./images/Chicken-Italian.webp",placeholderIcon:"🍕"},{id:"ip-5",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا استیک ایتالیایی",tag:null,badge:null,price:1089e3,ingredients:"خمیر پیتزا ایتالیایی، گوشت گوساله تکه ای، قارچ، زیتون، فلفل دلمه ای، پنیر پیتزا",image:"images/Steak-Italian-Pizza.webp",placeholderIcon:"🍕"},{id:"b-1",categoryId:"burgers",isFeatured:!0,title:"همبرگر",tag:null,badge:null,price:549e3,ingredients:"یک عدد برگر دست ساز گوشت گوساله ۱۵۰ گرمی، گوجه، کاهو، خیارشور، پیاز، سس مخصوص، نان برگر",image:"images/burger.webp",placeholderIcon:"🍔"},{id:"b-2",categoryId:"burgers",isFeatured:!1,title:"چیزبرگر",tag:null,badge:null,price:599e3,ingredients:"یک عدد برگر دست ساز گوشت گوساله ۱۵۰ گرمی، پنیر گودا، خیارشور، گوجه، کاهو، سس مخصوص، نان برگر",image:"images/cheese-burger.webp",placeholderIcon:"🍔"},{id:"b-3",categoryId:"burgers",isFeatured:!1,title:"قارچ برگر",tag:null,badge:null,price:639e3,ingredients:"یک عدد برگر دست ساز گوشت گوساله ۱۵۰ گرمی، قارچ، پنیر، پیاز، گوجه، کاهو، خیارشور، نان برگر",image:"images/mashroom-burger.webp",placeholderIcon:"🍔"},{id:"b-4",categoryId:"burgers",isFeatured:!1,title:"دبل چیزبرگر",tag:null,badge:null,price:889e3,ingredients:"دو عدد گوشت برگر ۱۲۰ گرمی ، نان برگر ، پیاز ، کاهو ، گوجه ، خیار شور ، پنیر گودا ، سس ساندویچ",image:"images/double-cheese-burger.webp",placeholderIcon:"🍔"},{id:"b-5",categoryId:"burgers",isFeatured:!1,title:"دبل برگر",tag:null,badge:null,price:849e3,ingredients:"دو عدد برگر ۱۲۰ گرمی ، کاهو ، گوجه ، خیارشور ، نان برگر ، سس ساندویچ",image:"images/double-burger.webp",placeholderIcon:"🍔"},{id:"b-6",categoryId:"burgers",isFeatured:!1,title:"دبل ماشروم",tag:null,badge:null,price:899e3,ingredients:"دو عدد برگر ۱۲۰ گرمی ، پیاز ، قارچ ، پنیر گودا ، نان برگر ، سس مخصوص",image:"images/double-Mashroom-burger.webp",placeholderIcon:"🍔"},{id:"b-7",categoryId:"burgers",isFeatured:!1,title:"آتیش برگر",tag:null,badge:null,price:689e3,ingredients:"یک عدد برگر دست ساز گوشت گوساله ۱۵۰ گرمی، ۱۵۰ گرم فیله مرغ گریل، پنیر گودا، خیارشور، گوجه، کاهو، سس مخصوص، نان برگر",image:"images/atish-burger.webp",placeholderIcon:"🍔"},{id:"b-8",categoryId:"burgers",isFeatured:!1,title:"زینگر",tag:null,badge:null,price:619e3,ingredients:"۱۳۰ گرم فیله مرغ سوخاری تند، کاهو، گوجه، سس مخصوص، نان برگر",image:"images/Zinger.webp",placeholderIcon:"🍔"},{id:"b-9",categoryId:"sandwiches",isFeatured:!1,title:"گریل",tag:null,badge:null,price:649e3,ingredients:"۱۶۰ گرم فیله مرغ گریل شده، پنیر گودا، قارچ، گوجه، کاهو، نان باگت",image:"images/Giril.webp",placeholderIcon:"🌭"},{id:"b-10",categoryId:"sandwiches",isFeatured:!1,title:"رست بیف",tag:null,badge:null,price:699e3,ingredients:"کاهو ، گوجه ، خیارشور ، ۸۰ گرم گوشت گوساله مزه دار ، قارچ سس مخصوص و نان باگت",image:"images/RoastBeef.webp",placeholderIcon:"🌭"},{id:"sw-1",categoryId:"sandwiches",isFeatured:!0,title:"فیله سوخاری با پنیر",tag:null,badge:null,price:699e3,ingredients:"۱۲۰ گرم فیله مرغ سوخاری، پنیر گودا، گوجه، کاهو، نان باگت",image:"images/file.webp",placeholderIcon:"🌭"},{id:"sw-2",categoryId:"sandwiches",isFeatured:!1,title:"سوپرسوپریم",tag:null,badge:null,price:71e4,ingredients:"۱۲۰ گرم فیله مرغ سوخاری، ۲ ورق ژامبون گوشت ، پنیر گودا، کاهو، گوجه، نان باگت",image:"./images/jambon-sandwhich.webp",placeholderIcon:"🌭"},{id:"sw-3",categoryId:"sandwiches",isFeatured:!1,title:"هات داگ",tag:null,badge:null,price:529e3,ingredients:"یک عدد هات داگ ۹۰٪، قارچ، پنیر گودا، کاهو، گوجه، سس مخصوص، نان باگت",image:"images/Hotdog.webp",placeholderIcon:"🌭"},{id:"fr-1",categoryId:"fried",isFeatured:!0,title:"فیله سوخاری سه تیکه",tag:null,badge:null,price:789e3,ingredients:"۳ عدد فیله مرغ سوخاری، ۲۵۰ گرم سیب زمینی سرخ کرده، یک عدد نان بروتچن",image:"./images/Crispy-Chicken-Tenders.webp",placeholderIcon:"🍗"},{id:"fr-2",categoryId:"fried",isFeatured:!1,title:"فیله سوخاری چهار تیکه",tag:null,badge:null,price:899e3,ingredients:"۴ عدد فیله مرغ سوخاری، ۲۵۰ گرم سیب زمینی سرخ کرده، یک عدد نان بروتچن",image:"./images/4-Crispe.webp",placeholderIcon:"🍗"},{id:"fr-3",categoryId:"fried",isFeatured:!1,title:"قارچ سوخاری",tag:null,badge:null,price:349e3,ingredients:"۲۴۰ گرم قارچ سوخاری",image:"./images/Mashroom.webp",placeholderIcon:"🍄"},{id:"sd-1",categoryId:"sides",isFeatured:!0,title:"سیب زمینی سرخ‌کرده",tag:null,badge:null,price:339e3,ingredients:"۲۵۰ گرم سیب زمینی سرخ کرده",image:"./images/French-Fries.webp",placeholderIcon:"🍟"},{id:"sd-2",categoryId:"sides",isFeatured:!1,title:"سیب‌زمینی ویژه",tag:null,badge:null,price:469e3,ingredients:"۳۰۰ گرم سیب زمینی، ژامبون گوشت، قارچ، فلفل دلمه ای",image:"./images/Fries-Special.webp",placeholderIcon:"🍟"},{id:"dr-1",categoryId:"drinks",isFeatured:!0,title:"نوشابه خانواده",tag:null,badge:null,price:122e3,ingredients:"",image:"./images/Big-Coke.webp",placeholderIcon:"🥤"},{id:"dr-2",categoryId:"drinks",isFeatured:!1,title:"نوشابه کوچک",tag:null,badge:null,price:92500,ingredients:"",image:"./images/Coke.webp",placeholderIcon:"🥤"},{id:"dr-3",categoryId:"drinks",isFeatured:!1,title:"دلستر",tag:null,badge:null,price:101e3,ingredients:"",image:"./images/Delester.webp",placeholderIcon:"🥤"},{id:"dr-4",categoryId:"drinks",isFeatured:!1,title:"دوغ",tag:null,badge:null,price:45e3,ingredients:"",image:"./images/Dogh.webp",placeholderIcon:"🥤"},{id:"dr-5",categoryId:"drinks",isFeatured:!1,title:"آب معدنی کوچک",tag:null,badge:null,price:25e3,ingredients:"",image:"./images/Water.webp",placeholderIcon:"💧"}],oe={restaurant:se,categories:re,items:ie},de={cx:260,cy:210,radius:115},le={cx:260,cy:210,radius:185},ce=[{id:"dowlat",name:"دولت (کلاهدوز)",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۱۵ تا ۲۰ دقیقه",desc:"محل استقرار رستوران در خیابان کلاهدوز — سریع‌ترین ارسال با پیک مستقیم آتیش",x:175,y:205},{id:"dibaji",name:"دیباجی",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۱۵ تا ۲۰ دقیقه",desc:"محدوده همجوار رستوران (دیباجی جنوبی و شمالی) — ارسال مستقیم و فوق‌سریع با پیک اختصاصی",x:250,y:145},{id:"ekhtiarieh",name:"اختیاریه",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۱۵ تا ۲۰ دقیقه",desc:"محدوده شمالی کلاهدوز تا بزرگراه صدر — ارسال سریع و مستقیم با پیک اختصاصی",x:320,y:145},{id:"darrous",name:"دروس",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۲۰ تا ۲۵ دقیقه",desc:"محدوده جنوبی رستوران (پایین خیابان دولت) — ارسال مستقیم و گرم با پیک اختصاصی آتیش",x:260,y:285},{id:"pasdaran",name:"پاسداران",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۲۰ تا ۲۵ دقیقه",desc:"ضلع شرقی رستوران — در محدوده تحت پوشش سریع پیک مستقیم آتیش",x:360,y:215},{id:"gholhak",name:"قلهک",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۳۰ تا ۳۵ دقیقه",desc:"ضلع غربی و محدوده خیابان شریعتی — در محدوده پوشش سریع پیک مستقیم رستوران",x:160,y:245},{id:"qeytarieh",name:"قیطریه / اندرزگو",zone:"express",badge:"اسنپ‌فود / اکسپرس 🛵",time:"۳۰ تا ۳۵ دقیقه",desc:"بالای بزرگراه صدر و همجوار تجریش — سفارش آنلاین و تحویل اکسپرس در اسنپ‌فود",x:185,y:85},{id:"tajrish",name:"تجریش",zone:"express",badge:"اسنپ‌فود / اکسپرس 🛵",time:"۴۰ تا ۵۰ دقیقه",desc:"محدوده شمال‌غرب و میدان تجریش — سفارش آنلاین و ارسال از طریق اسنپ‌فود",x:130,y:95},{id:"niavaran",name:"نیاوران",zone:"express",badge:"اسنپ‌فود / اکسپرس 🛵",time:"۳۰ تا ۳۵ دقیقه",desc:"شعاع اکسپرس شمال تهران — سفارش آنلاین و ارسال در اسنپ‌فود",x:315,y:55},{id:"heravi",name:"هروی",zone:"express",badge:"اسنپ‌فود / اکسپرس 🛵",time:"۴۰ تا ۵۰ دقیقه",desc:"ضلع جنوب‌شرق پاسداران — سفارش آنلاین و ارسال اکسپرس در اسنپ‌فود",x:415,y:275},{id:"seyedkhandan",name:"سیدخندان",zone:"express",badge:"اسنپ‌فود / اکسپرس 🛵",time:"۴۰ تا ۵۰ دقیقه",desc:"شعاع اکسپرس جنوب — سفارش آنلاین و ارسال در اسنپ‌فود",x:215,y:375}],pe="این نقشه فقط نمایی تقریبی از محدوده ارسال است؛ مرزها و فاصله‌ها دقیق نیستند. برای استعلام دقیق آدرس خود، با شماره ۲۲۵۶۱۹۴۹ تماس حاصل فرمایید.",J={restaurantArea:de,snappfoodArea:le,neighborhoods:ce,note:pe},me="/images/logo.webp";let I=oe,V=I.categories?.[0]?.id||"american-pizzas",$="",N=!1,f=JSON.parse(localStorage.getItem("atish_order_tray")||"{}"),L=3,P="darrous",F=null;function b(e){if(e==null)return"";const a=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];return e.toString().replace(/\d/g,n=>a[parseInt(n,10)])}function R(e){return e?String(e).toLowerCase().replace(/[ي]/g,"ی").replace(/[ك]/g,"ک").replace(/[آأإ]/g,"ا").replace(/[ؤ]/g,"و").replace(/[ة]/g,"ه").replace(/[\u200c\s]+/g," ").trim():""}function G(e){return e?String(e).replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[a]):""}function q(){return Object.values(f).reduce((e,a)=>e+a,0)}function v(e){if(e==null||e===""||isNaN(e))return"";const a=Number(e);return a===0?"رایگان":`${b(a.toLocaleString("en-US"))} تومان`}function D(){return Object.entries(f).reduce((e,[a,n])=>{const s=_(a);return e+(s&&s.price?Number(s.price)*n:0)},0)}function H(){localStorage.setItem("atish_order_tray",JSON.stringify(f)),K()}function Q(){try{const a=new Date().toLocaleTimeString("en-US",{timeZone:"Asia/Tehran",hour12:!1,hour:"2-digit",minute:"2-digit"}),[n,s]=a.split(":").map(Number),r=n*60+s;return r>=690&&r<1395?{isOpen:!0,text:"هم‌اکنون باز است",badgeClass:"bg-emerald-500/15 border-emerald-500/30 text-emerald-400",dotClass:"bg-emerald-400 animate-pulse",tooltip:"پذیرش سفارشات تلفنی و آنلاین اسنپ‌فود (۱۱:۳۰ تا ۲۳:۱۵)"}:{isOpen:!1,text:"هم‌اکنون بسته است",badgeClass:"bg-rose-500/15 border-rose-500/30 text-rose-400",dotClass:"bg-rose-400",tooltip:"ساعات کاری آتیش: همه روزه از ۱۱:۳۰ صبح تا ۲۳:۱۵ شب"}}catch{return{isOpen:!0,text:"هم‌اکنون باز است",badgeClass:"bg-emerald-500/15 border-emerald-500/30 text-emerald-400",dotClass:"bg-emerald-400 animate-pulse",tooltip:"پذیرش سفارشات تلفنی و آنلاین اسنپ‌فود"}}}const m={search:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>',phone:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',scooter:'<svg class="w-5 h-5 -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M14 9h4l4 4v5h-3"/><circle stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" cx="19" cy="18" r="2"/><circle stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" cx="7" cy="18" r="2"/></svg>',instagram:'<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',clock:'<svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',location:'<svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',close:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M6 18L18 6M6 6l12 12"/></svg>',menuIcon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M4 6h16M4 12h16M4 18h16"/></svg>',tray:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>',plus:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>',minus:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20 12H4"/></svg>',trash:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>',copy:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>'},C=[{title:"نان کنجدی تازه",desc:"نان لطیف و معطر دست‌ساز با کنجد درجه یک.",icon:"🍞"},{title:"سس مخصوص آتیش",desc:"فرمول انحصاری و دست‌ساز فست‌فود آتیش با عطر ادویه‌جات ویژه و چاشنی دلپذیر.",icon:"🍯"},{title:"پنیر گودا",desc:"ورقه‌های پنیر گودا روی برگر گرم با طعم اصیل و لذیذ.",icon:"🧀"},{title:"گوشت خالص برگر دست‌ساز",desc:"۱۰۰٪ گوشت خالص و گرم گوساله با طبخ مخصوص و حفظ کامل آبدار بودن گوشت.",icon:"🥩"},{title:"قارچ و پیاز",desc:"ترکیب قارچ تفت‌داده و پیاز که طعم فوق‌العاده‌ای به آتیش برگر می‌بخشد.",icon:"🍄"},{title:"خیارشور و سبزیجات تازه",desc:"خیارشور تازه، کاهو پیچ ترد و گوجه فرنگی به همراه نان تازه کنجدی.",icon:"🥒"}];function W(e){const a=I?.restaurant||j,{neighborhoods:n}=J,s=n.find(i=>i.id===e);if(!s)return;P=e;const r=s.zone==="direct";document.querySelectorAll(".delivery-chip-btn").forEach(i=>{const d=i.dataset.id===e,l=n.find(g=>g.id===i.dataset.id),p=l?l.name:"";i.className=`delivery-chip-btn text-[11px] px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${d?"bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-md shadow-orange-500/30 scale-105":"bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:bg-white/[0.08] hover:text-white"}`,i.innerHTML=`<span>${d?"✓":"📍"}</span><span>${p}</span>`});const t=document.getElementById("delivery-status-card");if(t){t.className=`p-4 rounded-2xl border transition-all duration-300 mb-4 ${r?"bg-gradient-to-br from-emerald-950/40 via-[#18181c] to-emerald-950/20 border-emerald-500/40 shadow-lg shadow-emerald-950/30":"bg-gradient-to-br from-pink-950/40 via-[#18181c] to-pink-950/20 border-pink-500/40 shadow-lg shadow-pink-950/30"}`;const i=document.getElementById("delivery-card-title");i&&(i.textContent=`ارسال به ${s.name}`);const d=document.getElementById("delivery-card-badge");d&&(d.textContent=s.badge,d.className=`text-[11px] font-bold px-2.5 py-1 rounded-full ${r?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-pink-500/20 text-pink-300 border border-pink-500/30"}`);const l=document.getElementById("delivery-card-time");l&&(l.textContent=s.time);const p=document.getElementById("delivery-card-desc");p&&(p.textContent=s.desc);const g=document.getElementById("delivery-card-actions");g&&(r?g.innerHTML=`
          <a id="delivery-action-link" href="tel:${a.phone||j.phoneNumber}" class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-xs sm:text-sm shadow-md transition active:scale-[0.98]">
            ${m.phone}
            <span>سفارش تلفنی به ${s.name}</span>
            <span dir="ltr" class="inline-flex items-center tracking-wider mr-1 text-[11px]">
              (<span>۰۲۱</span><span>-</span><span>۲۲۵۶۱۹۴۹</span>)
            </span>
          </a>
        `:g.innerHTML=`
          <a id="delivery-action-link" href="${a.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#ff00a6] hover:bg-[#e00092] text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-500/25 transition active:scale-[0.98]">
            ${m.scooter}
            <span>سفارش در اسنپ‌فود</span>
          </a>
        `)}const o=document.getElementById("delivery-active-pulse");o&&o.setAttribute("transform",`translate(${s.x} ${s.y})`),document.querySelectorAll("#delivery-map-text-labels text").forEach(i=>{const d=i.dataset.id===e;i.classList.toggle("active-place",d)}),document.querySelectorAll(".delivery-pin-group").forEach(i=>{const d=i.dataset.id===e,l=i.querySelector("circle");if(l){const p=n.find(g=>g.id===i.dataset.id);l.setAttribute("r",d?"9":"6"),l.setAttribute("stroke-width",d?"2.5":"1.5"),l.setAttribute("fill",d?"#f59e0b":p?.zone==="direct"?"#ef4444":"#ff00a6"),l.setAttribute("fill-opacity",d?"1":"0.85")}})}function ge(e){const{restaurantArea:a,snappfoodArea:n,neighborhoods:s,note:r}=J,t=s.find(i=>i.id===P)||s[0],o=t.zone==="direct";return`
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
              <circle cx="${a.cx}" cy="${a.cy}" r="${a.radius}" fill="#ef4444" fill-opacity=".12" stroke="#ef4444" stroke-width="2.5"/>
              
              <!-- Neighborhood Pin Markers -->
              <g id="delivery-map-pins">
                ${s.map(i=>{const d=i.id===P;return`
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
                ${s.map(i=>{const d=i.id===P;return`<text x="${i.x}" y="${i.y-11}" text-anchor="middle" data-id="${i.id}" class="${d?"active-place":""}">${i.name}</text>`}).join("")}
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
            ${s.map(i=>{const d=i.id===P;return`
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
                <a id="delivery-action-link" href="tel:${e.phone||j.phoneNumber}" class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-xs sm:text-sm shadow-md transition active:scale-[0.98]">
                  ${m.phone}
                  <span>سفارش تلفنی به ${t.name}</span>
                  <span dir="ltr" class="inline-flex items-center tracking-wider mr-1 text-[11px]">
                    (<span>۰۲۱</span><span>-</span><span>۲۲۵۶۱۹۴۹</span>)
                  </span>
                </a>
              `:`
                <a id="delivery-action-link" href="${e.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#ff00a6] hover:bg-[#e00092] text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-500/25 transition active:scale-[0.98]">
                  ${m.scooter}
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
  `}function be(){const e=document.getElementById("app");if(!e)return;const a=I?.restaurant||j,n=I?.categories||[],s=q(),r=Q();e.innerHTML=`
    <!-- Responsive Header (Mobile + Desktop) -->
    <header class="sticky top-0 z-40 glass-header border-b border-white/[0.08] px-4 sm:px-6 lg:px-8 py-3">
      <div class="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <!-- Logo & Title -->
        <a href="#" class="flex items-center gap-2 min-w-0">
          <div class="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]">
            <img 
              src="${me}" 
              alt="${a.name}" 
              class="w-full h-full object-contain"
            />
          </div>
          <div class="flex flex-col text-right min-w-0">
            <div class="text-xs sm:text-sm md:text-base font-black text-white tracking-tight flex items-center gap-1.5 truncate">
              <span>${a.brandTitle}</span>
              <span id="header-status-dot" class="w-2 h-2 rounded-full ${r.dotClass} flex-shrink-0" title="${r.text}"></span>
            </div>
            <div class="text-[10px] sm:text-[11px] md:text-xs text-amber-400 font-medium truncate hidden sm:block">
              ${a.brandSubtitle}
            </div>
          </div>
        </a>

        <!-- Desktop Persistent Search Bar (Visible on md and up) -->
        <div class="hidden md:flex flex-1 max-w-md mx-4">
          <div class="relative w-full">
            <span class="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-zinc-400">
              ${m.search}
            </span>
            <input 
              type="text" 
              id="desktop-search-input" 
              value="${$}"
              placeholder="جستجوی سریع (پیتزا، برگر، پپرونی، استیک...)" 
              class="w-full bg-[#18181c] border border-white/[0.1] hover:border-amber-500/40 text-white text-xs rounded-xl pr-10 pl-9 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-zinc-500 transition shadow-inner"
            />
            <button 
              id="clear-desktop-search-btn" 
              class="${$?"":"hidden"} absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-400 hover:text-white"
              aria-label="پاک کردن جستجو"
            >
              ${m.close}
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
            ${m.phone}
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
            ${m.scooter}
            <span>اسنپ‌فود</span>
          </a>

          <!-- Desktop Instagram Button -->
          <a 
            href="${a.instagramUrl||j.instagramUrl||"https://instagram.com/atishfood"}"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-500/15 border border-purple-500/30 text-pink-400 hover:bg-purple-500/25 text-xs font-bold transition flex-shrink-0"
            title="صفحه رسمی اینستاگرام آتیش"
          >
            ${m.instagram}
            <span>اینستاگرام</span>
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
            ${m.search}
          </button>

          <!-- Order Tray (List) Button -->
          <button 
            id="open-tray-btn" 
            aria-label="سبد سفارش"
            class="relative px-2.5 sm:px-3.5 h-9 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 hover:text-white flex items-center gap-1.5 text-xs font-bold transition hover:bg-amber-500/30 flex-shrink-0"
          >
            ${m.tray}
            <span class="text-[11px] sm:text-xs">پیش‌فاکتور</span>
            <span id="header-tray-badge" class="${s>0?"":"hidden"} bg-amber-500 text-black font-black text-[10px] px-1.5 py-0.2 rounded-full min-w-[18px] text-center">
              ${b(s)}
            </span>
          </button>
        </div>
      </div>

      <!-- Mobile Expandable Search Input -->
      <div id="search-container" class="${N?"":"hidden"} md:hidden w-full max-w-md mx-auto pt-3">
        <div class="relative">
          <span class="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-zinc-400">
            ${m.search}
          </span>
          <input 
            type="text" 
            id="menu-search-input" 
            value="${$}"
            placeholder="جستجوی پیتزا، برگر، ساندویچ، سوخاری..." 
            class="w-full bg-[#18181c] border border-amber-500/50 text-white text-xs rounded-xl pr-10 pl-9 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-zinc-500 shadow-inner"
          />
          <button 
            id="clear-search-btn" 
            class="${$?"":"hidden"} absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-400 hover:text-white"
          >
            ${m.close}
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
              <span id="restaurant-status-badge" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${r.badgeClass}" title="${r.tooltip}">
                <span id="restaurant-status-dot" class="w-1.5 h-1.5 rounded-full ${r.dotClass}"></span>
                <span id="restaurant-status-text">${r.text}</span>
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-pink-500/15 border border-pink-500/30 text-pink-400">
                ⭐ ${a.rating||"۴.۴"} در اسنپ‌فود
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500/15 border border-amber-500/30 text-amber-300">
                🛵 ارسال سریع دروس و دولت
              </span>
            </div>

            <!-- Big Title -->
            <h1 class="text-xl sm:text-2xl lg:text-4xl font-black text-white leading-tight mb-2.5">
              طعم اصیل و لذیذ <span class="text-gradient-fire">پیتزا آتیش</span>
            </h1>
            
            <p class="text-zinc-300 text-xs sm:text-sm lg:text-base leading-relaxed font-light max-w-2xl">
              پیتزاهای پرملات آمریکایی و ایتالیایی پخته‌شده در فر لینکولن و برگرهای دست‌ساز با گوشت خالص. سفارش آنلاین دلیوری با اسنپ‌فود یا سفارش مستقیم تلفنی با پیک گرم.
            </p>
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
          ${n.map(t=>{const o=V===t.id;return`
              <button 
                data-category="${t.id}" 
                class="cat-btn flex-shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${o?"bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-black shadow-md shadow-orange-500/30":"bg-[#18181c] text-zinc-300 border border-white/[0.08] hover:bg-[#24242a] hover:text-white"}"
              >
                <span>${t.icon}</span>
                <span>${t.name}</span>
              </button>
            `}).join("")}
        </div>
      </nav>

      <!-- Main Food Menu Container (Responsive Grid: 2 cols mobile, 3 tablet, 4 desktop) -->
      <main id="menu-container"></main>

      <!-- Delivery Area Radar Section (Responsive Split Card) -->
      ${ge(a)}

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
                <h3 class="text-sm md:text-base font-black text-white">${a.brandTitle}</h3>
                <span class="text-[11px] text-zinc-400">${a.tagline}</span>
              </div>
            </div>
            <p class="text-xs text-zinc-400 leading-relaxed font-light">
              منوی دیجیتال رستوران آتیش. ارائه پیتزاها و برگرهای باکیفیت و تازه در محله‌های شمال تهران با امکان سفارش آنلاین در اسنپ‌فود و سفارش تلفنی.
            </p>
          </div>

          <!-- Column 2: Hours & Address -->
          <div class="flex flex-col gap-2.5 text-xs text-zinc-300">
            <div class="flex items-start gap-2">
              ${m.clock}
              <div>
                <span class="text-zinc-400 font-normal">ساعات کاری:</span>
                <span class="text-zinc-100 font-bold mr-1">${b(a.workingHours)}</span>
              </div>
            </div>

            <div class="flex items-start gap-2">
              ${m.location}
              <div>
                <span class="text-zinc-400 font-normal">آدرس:</span>
                <span class="text-zinc-100 font-bold mr-1">${b(a.address)}</span>
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
        <div class="flex flex-col text-right leading-tight">
          <span class="text-xs font-black">سفارش شما: <span id="floating-tray-count">${b(s)}</span> قلم</span>
          <span id="floating-tray-total" class="text-[10px] font-bold opacity-90">${D()>0?v(D()):""}</span>
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
          ${m.menuIcon}<span>منو</span>
        </button>
        <a href="${a.instagramUrl||j.instagramUrl||"https://instagram.com/atishfood"}" target="_blank" rel="noopener noreferrer" class="contact-nav-item contact-nav-instagram" aria-label="اینستاگرام آتیش">
          ${m.instagram}<span>اینستاگرام</span>
        </a>
        <a href="tel:${a.phone}" class="contact-nav-item contact-nav-call" aria-label="تماس با آتیش">
          ${m.phone}<span>تماس</span>
        </a>
        <a href="${a.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="contact-nav-item contact-nav-snapp" aria-label="اسنپ‌فود">
          ${m.scooter}<span>اسنپ‌فود</span>
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
            ${m.close}
          </button>
        </div>

        <div class="mb-4 text-center">
          <div class="inline-block relative rounded-xl overflow-hidden border border-white/[0.1] shadow-lg max-h-48">
            <img src="/images/atish-hero-3d.jpg" alt="برگر آتیش" class="w-full h-auto object-cover max-w-xs mx-auto" />
          </div>
        </div>

        <!-- Layer Selector Tabs -->
        <div class="grid grid-cols-3 sm:grid-cols-6 gap-1 mb-4" id="anatomy-layers-tabs">
          ${C.map((t,o)=>`
            <button 
              data-layer="${o}" 
              class="anatomy-tab-btn p-1.5 rounded-xl border text-center text-xs font-bold transition ${o===L?"bg-amber-500/20 border-amber-500 text-amber-300":"bg-white/[0.04] border-white/[0.08] text-zinc-400 hover:text-white"}"
            >
              <div class="text-sm mb-0.5">${t.icon}</div>
              <div class="truncate text-[9px]">لایه ${b(o+1)}</div>
            </button>
          `).join("")}
        </div>

        <!-- Layer Details Box -->
        <div id="anatomy-details-box" class="bg-[#1c1c22] border border-amber-500/20 rounded-xl p-3.5 mb-4">
          <div class="flex items-center gap-2 mb-1.5">
            <span id="anatomy-icon" class="text-xl">${C[L].icon}</span>
            <h3 id="anatomy-title" class="text-sm font-black text-amber-400">${C[L].title}</h3>
          </div>
          <p id="anatomy-desc" class="text-xs text-zinc-300 leading-relaxed font-light">
            ${C[L].desc}
          </p>
        </div>

        <button 
          id="anatomy-add-btn"
          class="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-xs shadow-md shadow-orange-500/30 flex items-center justify-center gap-1.5"
        >
          ${m.plus}
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
  `,ue(),O()}function K(){const e=q(),a=document.getElementById("header-tray-badge");a&&(a.textContent=b(e),a.classList.toggle("hidden",e===0));const n=document.getElementById("floating-tray-bar"),s=document.getElementById("floating-tray-count"),r=document.getElementById("floating-tray-total"),t=D();n&&s&&(s.textContent=b(e),r&&(r.textContent=t>0?v(t):""),n.classList.toggle("hidden",e===0));const o=document.getElementById("nav-tray-badge");o&&(o.textContent=b(e),o.classList.toggle("hidden",e===0)),I.items?.forEach(i=>{const d=document.getElementById(`card-tray-count-${i.id}`);if(d){const l=ee(i);l>0?(d.textContent=b(l),d.classList.remove("hidden"),d.classList.add("flex")):(d.classList.add("hidden"),d.classList.remove("flex"))}})}function T(e){const a=document.getElementById("toast-notification"),n=document.getElementById("toast-text");!a||!n||(n.textContent=e,a.classList.remove("opacity-0","-translate-y-4"),a.classList.add("opacity-100","translate-y-0"),setTimeout(()=>{a.classList.add("opacity-0","-translate-y-4"),a.classList.remove("opacity-100","translate-y-0")},2200))}function ue(){const e=document.getElementById("toggle-search-btn"),a=document.getElementById("search-container"),n=document.getElementById("menu-search-input"),s=document.getElementById("clear-search-btn"),r=document.getElementById("desktop-search-input"),t=document.getElementById("clear-desktop-search-btn");function o(c,k=!1){if($=c,r&&(r.value=c,t&&t.classList.toggle("hidden",c.length===0)),n&&(n.value=c,s&&s.classList.toggle("hidden",c.length===0)),O(),k&&c.length>0){const y=document.getElementById("categories-bar");if(y){const u=y.getBoundingClientRect();(u.top>250||u.bottom<0)&&y.scrollIntoView({behavior:"smooth",block:"start"})}}}function i(){o("",!1)}e&&a&&e.addEventListener("click",()=>{if(N=!N,a.classList.toggle("hidden",!N),N&&n){n.focus();const c=document.getElementById("categories-bar");c&&c.scrollIntoView({behavior:"smooth",block:"start"})}}),r&&r.addEventListener("input",c=>{o(c.target.value.trim(),!0)}),n&&n.addEventListener("input",c=>{o(c.target.value.trim(),!0)}),s&&s.addEventListener("click",()=>i()),t&&t.addEventListener("click",()=>i());const d=document.querySelectorAll(".cat-btn");d.forEach(c=>{c.addEventListener("click",()=>{d.forEach(y=>{y.className="cat-btn flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 bg-[#18181c] text-zinc-300 border border-white/[0.08] hover:bg-[#24242a] hover:text-white"}),c.className="cat-btn flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-black shadow-md shadow-orange-500/30",$&&i(),V=c.dataset.category;const k=document.getElementById(`sec-${V}`);if(k){const u=document.body.getBoundingClientRect().top,ne=k.getBoundingClientRect().top-u;window.scrollTo({top:ne-120,behavior:"smooth"})}})});const l=document.getElementById("open-tray-btn"),p=document.getElementById("floating-tray-bar"),g=document.getElementById("tray-modal"),w=()=>{A(),g?.classList.remove("hidden")};l?.addEventListener("click",w),p?.addEventListener("click",w),setInterval(()=>{const c=document.getElementById("restaurant-status-badge"),k=document.getElementById("restaurant-status-text"),y=document.getElementById("restaurant-status-dot"),u=document.getElementById("header-status-dot");if(c&&k&&y){const E=Q();c.className=`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${E.badgeClass}`,c.title=E.tooltip,y.className=`w-1.5 h-1.5 rounded-full ${E.dotClass}`,k.textContent=E.text,u&&(u.className=`w-2 h-2 rounded-full ${E.dotClass} flex-shrink-0`,u.title=E.text)}},3e4),g?.addEventListener("click",c=>{c.target===g&&g.classList.add("hidden")});const x=document.getElementById("btn-open-anatomy"),h=document.getElementById("anatomy-modal"),z=document.getElementById("close-anatomy-btn");x?.addEventListener("click",()=>{h?.classList.remove("hidden")}),z?.addEventListener("click",()=>{h?.classList.add("hidden")}),h?.addEventListener("click",c=>{c.target===h&&h.classList.add("hidden")}),document.querySelectorAll(".anatomy-tab-btn").forEach(c=>{c.addEventListener("click",()=>{L=parseInt(c.dataset.layer,10),document.querySelectorAll(".anatomy-tab-btn").forEach((k,y)=>{k.className=`anatomy-tab-btn p-1.5 rounded-xl border text-center text-xs font-bold transition ${y===L?"bg-amber-500/20 border-amber-500 text-amber-300":"bg-white/[0.04] border-white/[0.08] text-zinc-400 hover:text-white"}`}),document.getElementById("anatomy-icon").textContent=C[L].icon,document.getElementById("anatomy-title").textContent=C[L].title,document.getElementById("anatomy-desc").textContent=C[L].desc})}),document.getElementById("anatomy-add-btn")?.addEventListener("click",()=>{U("b-7"),h?.classList.add("hidden"),T("آتیش برگر به لیست اضافه شد")});const S=document.getElementById("item-modal");S?.addEventListener("click",c=>{c.target===S&&S.classList.add("hidden")}),document.getElementById("nav-menu-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),document.querySelectorAll(".delivery-chip-btn").forEach(c=>{c.addEventListener("click",()=>{W(c.dataset.id)})}),document.querySelectorAll(".delivery-pin-group").forEach(c=>{c.addEventListener("click",()=>{W(c.dataset.id)})}),document.querySelectorAll("#delivery-map-text-labels text").forEach(c=>{c.addEventListener("click",()=>{W(c.dataset.id)})})}let M={};function ee(e){if(!e)return 0;let a=f[e.id]||0;return e.shapes&&e.shapes.forEach(n=>{a+=f[`${e.id}:${n.id}`]||0}),a}function _(e){if(!e)return null;if(e.includes(":")){const[n,s]=e.split(":"),r=I.items.find(o=>o.id===n);if(!r)return null;const t=r.shapes?.find(o=>o.id===s)||r.shapes?.[0];return{key:e,id:r.id,title:`${r.title} (${t?.name||"کلاسیک"})`,image:t?.image||r.image,ingredients:t?.id==="heart"?"خمیر پیتزا طرح قلبی، "+(r.ingredients||""):r.ingredients,placeholderIcon:"🍕",price:t?.price||r.price}}const a=I.items.find(n=>n.id===e);return a?{key:e,id:a.id,title:a.title,image:a.image,ingredients:a.ingredients,placeholderIcon:a.placeholderIcon,price:a.price}:null}function te(e){const a=document.getElementById("tray-modal");if(!a||a.classList.contains("hidden"))return!1;const n=document.getElementById(`tray-item-qty-${e}`);if(!n)return!1;const s=_(e);if(!s)return!1;const r=f[e]||0,t=s.price?Number(s.price):0,o=q(),i=D();n.textContent=b(r);const d=document.getElementById(`tray-item-subtotal-${e}`);d&&(t>0?d.innerHTML=`
        <span class="text-[11px] font-black text-amber-400 whitespace-nowrap">${v(t*r)}</span>
        ${r>1?`<span class="text-[9px] sm:text-[10px] text-zinc-400 whitespace-nowrap leading-tight">(${v(t)} هر عدد)</span>`:""}
      `:d.innerHTML=`<span class="text-[10px] text-zinc-400 font-light truncate max-w-[120px] block">${s.ingredients||"آتیش"}</span>`);const l=document.getElementById("tray-header-totals");l&&(l.textContent=`${b(o)} قلم غذا${i>0?` · ${v(i)}`:""}`);const p=document.getElementById("tray-total-card");p&&(p.className=`${i>0?"flex":"hidden"} mx-3 my-2 p-3 rounded-2xl bg-[#1b1b22] border border-amber-500/25 items-center justify-between shadow-md`);const g=document.getElementById("tray-total-card-count");g&&(g.textContent=`${b(o)} قلم غذا`);const w=document.getElementById("tray-total-card-price");return w&&(w.textContent=v(i)),!0}function U(e){f[e]=(f[e]||0)+1,H();const a=document.getElementById("tray-modal");a&&!a.classList.contains("hidden")&&(te(e)||A())}function xe(e){if(!f[e])return;if(f[e]-=1,f[e]<=0){delete f[e],H(),A();return}H(),te(e)||A()}function he(e){delete f[e],H(),A()}function fe(){f={},H(),A()}function ve(){const e=Object.keys(f);let a=`📋 پیش‌فاکتور اقلام سفارش - فست‌فود و گریل آتیش:

`,n=0;return e.forEach((s,r)=>{const t=_(s);if(t){const o=f[s],i=t.price?Number(t.price):0,d=i*o;n+=d;const l=i>0?` (${v(d)})`:"";a+=`${b(r+1)}. ${t.title} × ${b(o)}${l}
`}}),n>0&&(a+=`
💰 جمع کل سفارش: ${v(n)}
`),a+=`
📍 آدرس: خیابان دولت تهران، محله دروس، روبه‌روی بانک ملت بین کوچه خرداد و معتمدی، پلاک ۱۰۰
`,a+=`📞 تلفن سفارش مستقیم: ۰۲۱-۲۲۵۶۱۹۴۹
`,a+="🛵 سفارش آنلاین در اسنپ‌فود: https://snappfood.ir/restaurant/menu/پیتزا_آتیش-r-p44gzx/",a}function A(){const e=document.getElementById("tray-modal-box"),a=I?.restaurant||j;if(!e)return;const n=Object.keys(f),s=q();if(n.length===0){e.innerHTML=`
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
    `,document.getElementById("close-empty-tray-btn")?.addEventListener("click",()=>{document.getElementById("tray-modal")?.classList.add("hidden")});return}const r=D();e.innerHTML=`
    <!-- Modal Header -->
    <div class="p-4 border-b border-white/[0.08] flex items-center justify-between bg-[#18181c]">
      <div class="flex items-center gap-2">
        <span class="text-xl">📋</span>
        <div>
          <h2 class="text-sm font-black text-white">لیست سفارش شما</h2>
          <span id="tray-header-totals" class="text-[11px] text-amber-400 font-bold">${b(s)} قلم غذا${r>0?` · ${v(r)}`:""}</span>
        </div>
      </div>
      <button id="close-tray-btn" class="w-7 h-7 rounded-full bg-[#24242c] flex items-center justify-center text-zinc-400 hover:text-white transition">
        ${m.close}
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
      ${n.map(t=>{const o=_(t);if(!o)return"";const i=f[t],d=B(o.image),l=o.price?Number(o.price):0;return`
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
                      ${v(l*i)}
                    </span>
                    ${i>1?`<span class="text-[9px] sm:text-[10px] text-zinc-400 whitespace-nowrap leading-tight">(${v(l)} هر عدد)</span>`:""}
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
                  <span class="pointer-events-none">${m.minus}</span>
                </button>
                <span id="tray-item-qty-${t}" class="text-xs sm:text-sm font-black text-amber-400 px-1.5 min-w-[20px] text-center select-none pointer-events-none">
                  ${b(i)}
                </span>
                <button 
                  type="button"
                  data-action="increase" 
                  data-id="${t}" 
                  class="w-7 h-7 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 active:scale-90 flex items-center justify-center text-amber-300 hover:text-white transition"
                  aria-label="افزایش تعداد"
                >
                  <span class="pointer-events-none">${m.plus}</span>
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
                <span class="pointer-events-none">${m.trash}</span>
              </button>
            </div>
          </div>
        `}).join("")}
    </div>

    <!-- Total Price Summary Box: Solid dark theme with zero flicker -->
    <div id="tray-total-card" class="${r>0?"flex":"hidden"} mx-3 my-2 p-3 rounded-2xl bg-[#1c1c22] border border-amber-500/30 items-center justify-between shadow-md">
      <div class="flex items-center gap-2">
        <span class="text-base">💳</span>
        <div>
          <span class="text-xs font-black text-white block">مجموع مبلغ سفارش:</span>
          <span id="tray-total-card-count" class="text-[10px] text-zinc-400 font-light">${b(s)} قلم غذا</span>
        </div>
      </div>
      <div class="text-left">
        <span id="tray-total-card-price" class="text-sm sm:text-base font-black text-amber-400">${v(r)}</span>
      </div>
    </div>

    <!-- Action Buttons: Solid grounded dark footer with no shifting borders -->
    <div class="p-3 mt-auto bg-[#131317] border-t border-white/[0.06] flex flex-col gap-2">
      <div class="grid grid-cols-2 gap-2">
        <a 
          href="tel:${a.phone}"
          class="py-2.5 px-2 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/25 active:scale-95 transition whitespace-nowrap"
        >
          ${m.phone}
          <span>تماس و سفارش</span>
        </a>

        <a 
          href="${a.snappfoodUrl}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="py-2.5 px-2 rounded-xl bg-[#ff00a6] hover:bg-[#e00092] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-pink-500/25 active:scale-95 transition whitespace-nowrap"
        >
          ${m.scooter}
          <span>سفارش اسنپ‌فود</span>
        </a>
      </div>

      <div class="grid grid-cols-2 gap-2 pt-0.5">
        <button 
          id="btn-copy-order" 
          class="py-2 rounded-xl bg-[#202028] hover:bg-[#282834] border border-white/[0.08] text-[11px] font-bold text-zinc-300 hover:text-white flex items-center justify-center gap-1 active:scale-95 transition"
        >
          ${m.copy}
          <span>کپی لیست سفارش</span>
        </button>

        <button 
          id="btn-clear-tray"
          class="py-2 rounded-xl bg-[#202028] hover:bg-red-500/10 border border-white/[0.08] hover:border-red-500/30 text-[11px] font-bold text-red-400 hover:text-red-300 flex items-center justify-center gap-1 active:scale-95 transition"
        >
          ${m.trash}
          <span>خالی کردن لیست</span>
        </button>
      </div>
    </div>
  `,document.getElementById("close-tray-btn")?.addEventListener("click",()=>{document.getElementById("tray-modal")?.classList.add("hidden")}),e.querySelectorAll("button[data-action]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation(),o.preventDefault();const i=t.dataset.action,d=t.dataset.id;i==="increase"&&U(d),i==="decrease"&&xe(d),i==="delete"&&he(d)})}),document.getElementById("btn-copy-order")?.addEventListener("click",()=>{navigator.clipboard?.writeText(ve()).then(()=>{T("متن سفارش کپی شد")})}),document.getElementById("btn-clear-tray")?.addEventListener("click",()=>{fe()})}function ae(e){return e?e.startsWith("./")?e.slice(1):e.startsWith("/")?e:"/"+e:""}function B(e){const a=ae(e);if(!a)return"";const n=a.split("/").pop();return n&&n!=="logo.webp"?`/images/thumbs/${n.replace(/\.(jpg|jpeg|png)$/i,".webp")}`:a}function X(e,a){if(!e)return;M[e.id]=a;const n=e.shapes?.find(i=>i.id===a)||e.shapes?.[0];if(!n)return;const s=document.getElementById(`card-img-${e.id}`);s&&(s.style.opacity="0.3",setTimeout(()=>{s.src=B(n.image),s.style.opacity="1"},120));const r=document.getElementById(`card-badge-${e.id}`);if(r){const i=n.badge||e.badge||"";r.textContent=i,r.className=i?"bg-black/90 text-amber-300 border border-amber-500/30 text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-lg shadow-sm whitespace-nowrap":"hidden"}const t=document.getElementById(`card-btn-text-${e.id}`);t&&(t.textContent=`افزودن ${n.shortName||n.name}`);const o=document.getElementById(`card-price-${e.id}`);if(o){const i=n.price||e.price;i&&(o.textContent=v(i))}e.shapes?.forEach(i=>{const d=document.getElementById(`card-dot-${e.id}-${i.id}`);d&&(d.className=`h-1.5 rounded-full transition-all duration-300 ${i.id===a?"bg-amber-400 w-4 shadow":"bg-white/40 w-1.5"}`)})}function ye(e){const a=document.getElementById("item-modal"),n=document.getElementById("item-modal-box");if(!a||!n)return;const s=e.shapes&&e.shapes.length>1;let r=s?M[e.id]||"normal":null,t=s?e.shapes.find(l=>l.id===r)||e.shapes[0]:null;const o=t?t.image:e.image,i=B(o),d=t?.price||e.price;if(n.innerHTML=`
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
        ${m.close}
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

      ${s?`
        <!-- Swipe Dots Indicator -->
        <div class="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5 z-20 pointer-events-none">
          ${e.shapes.map(l=>`
            <span 
              data-dot-shape="${l.id}"
              class="h-2 rounded-full transition-all duration-300 ${l.id===r?"bg-amber-400 w-5 shadow":"bg-white/40 w-2"}"
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
              ${v(d)}
            </span>
          `:""}
          ${e.tag?`<span class="text-[10px] font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">${e.tag}</span>`:""}
        </div>
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
            ${e.shapes.map(l=>{const p=l.id===r;return`
                <button 
                  type="button" 
                  data-modal-shape-btn="${l.id}"
                  class="py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center border transition-all ${p?"bg-amber-500 text-black border-amber-400 shadow-lg":"bg-[#222228] text-zinc-300 border-white/[0.08] hover:text-white hover:bg-white/[0.08]"}"
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
          ${m.plus}
          <span id="modal-btn-label">
            ${s?`افزودن به لیست سفارش (${t.name})`:"افزودن به لیست سفارش"}
          </span>
        </button>
      </div>
    </div>
  `,a.classList.remove("hidden"),s&&e.shapes.forEach(l=>{const p=new Image;p.src=B(l.image)}),document.getElementById("close-item-modal-btn")?.addEventListener("click",()=>{a.classList.add("hidden")}),s){const l=x=>{r=x,M[e.id]=x,t=e.shapes.find(u=>u.id===x)||e.shapes[0];const h=document.getElementById("modal-main-img"),z=B(t.image);h&&(h.style.opacity="0.5",setTimeout(()=>{h.src=z,h.style.opacity="1"},50));const S=document.getElementById("modal-badge");if(S){const u=t.badge||e.badge||"";S.textContent=u,S.className=u?"bg-black/85 text-amber-300 border border-amber-500/30 text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap":"hidden"}document.querySelectorAll("[data-dot-shape]").forEach(u=>{const E=u.dataset.dotShape===x;u.className=`h-2 rounded-full transition-all duration-300 ${E?"bg-amber-400 w-5 shadow":"bg-white/40 w-2"}`}),document.querySelectorAll("[data-modal-shape-btn]").forEach(u=>{const E=u.dataset.modalShapeBtn===x;u.className=`py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 border transition-all ${E?"bg-amber-500 text-black border-amber-400 shadow-lg":"bg-[#222228] text-zinc-300 border-white/[0.08] hover:text-white hover:bg-white/[0.08]"}`});const c=document.getElementById("modal-btn-label");c&&(c.textContent=`افزودن به لیست سفارش (${t.name})`);const k=t.price||e.price,y=document.getElementById("modal-price-badge");y&&k&&(y.textContent=v(k)),X(e,x)},p=()=>{const h=(e.shapes.findIndex(z=>z.id===r)+1)%e.shapes.length;l(e.shapes[h].id)};document.querySelectorAll("[data-modal-shape-btn]").forEach(x=>{x.addEventListener("click",h=>{h.stopPropagation(),l(x.dataset.modalShapeBtn)})});let g=0;const w=document.getElementById("modal-photo-container");w?.addEventListener("touchstart",x=>{g=x.changedTouches[0].screenX},{passive:!0}),w?.addEventListener("touchend",x=>{const h=x.changedTouches[0].screenX;Math.abs(h-g)>40&&p()},{passive:!0})}document.getElementById("modal-add-tray-btn")?.addEventListener("click",()=>{let l=e.id,p=e.title;s&&t&&(l=`${e.id}:${t.id}`,p=`${e.title} (${t.name})`),U(l),a.classList.add("hidden"),T(`${p} به لیست اضافه شد`)})}function O(){const e=document.getElementById("menu-container");if(!e||!I)return;const a=I.categories||[];let n=I.items||[];if($){const s=R($);if(n=n.filter(r=>{const t=R(r.title).includes(s),o=r.ingredients&&R(r.ingredients).includes(s),i=a.find(l=>l.id===r.categoryId),d=i&&R(i.name+" "+(i.title||"")).includes(s);return t||o||d}),n.length===0){e.innerHTML=`
        <div class="flex flex-col items-center justify-center py-16 text-center text-zinc-400 glass-card rounded-2xl p-6">
          <span class="text-5xl mb-3">🔍</span>
          <p class="text-base font-black text-white">غذایی مطابق «${G($)}» پیدا نشد!</p>
          <p class="text-xs text-zinc-400 mt-1 mb-4">می‌توانید کلمه دیگری مانند «پیتزا»، «برگر»، «پپرونی» یا «سوخاری» را جستجو فرمایید.</p>
          <button id="reset-search-btn" class="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black text-xs font-black hover:opacity-90 transition shadow-md">
            نمایش کل منو
          </button>
        </div>
      `,document.getElementById("reset-search-btn")?.addEventListener("click",()=>{$="";const r=document.getElementById("desktop-search-input"),t=document.getElementById("menu-search-input"),o=document.getElementById("clear-search-btn"),i=document.getElementById("clear-desktop-search-btn");r&&(r.value=""),t&&(t.value=""),o&&o.classList.add("hidden"),i&&i.classList.add("hidden"),O()});return}e.innerHTML=`
      <div class="flex items-center justify-between mb-4 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs">
        <div class="flex items-center gap-2 text-amber-300 font-bold">
          <span>🔍</span>
          <span>نتایج جستجو برای: «${G($)}»</span>
          <span class="bg-amber-500 text-black font-black text-[10px] px-2 py-0.5 rounded-full mr-1">
            ${b(n.length)} غذا
          </span>
        </div>
        <button id="reset-search-btn-top" class="text-zinc-400 hover:text-white text-[11px] underline">
          پاک کردن جستجو ✕
        </button>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        ${n.map((r,t)=>Y(r,t<4)).join("")}
      </div>
    `,document.getElementById("reset-search-btn-top")?.addEventListener("click",()=>{$="";const r=document.getElementById("desktop-search-input"),t=document.getElementById("menu-search-input"),o=document.getElementById("clear-search-btn"),i=document.getElementById("clear-desktop-search-btn");r&&(r.value=""),t&&(t.value=""),o&&o.classList.add("hidden"),i&&i.classList.add("hidden"),O()}),Z();return}e.innerHTML=a.map((s,r)=>{const t=n.filter(o=>o.categoryId===s.id);return t.length===0?"":`
      <section class="mb-10 scroll-mt-28" id="sec-${s.id}">
        <!-- Section Header -->
        <div class="flex items-center justify-between mb-4 pb-2.5 border-b border-white/[0.08]">
          <div class="flex flex-col text-right">
            <h2 class="text-base sm:text-lg md:text-xl font-black text-white flex items-center gap-2">
              <span>${s.icon}</span>
              <span>${s.title||s.name}</span>
            </h2>
            ${s.subtitle?`<span class="text-xs text-zinc-400 font-light mt-0.5">${s.subtitle}</span>`:""}
          </div>
          <span class="bg-[#18181c] text-amber-400 border border-white/[0.08] text-[11px] font-black px-3 py-1 rounded-full flex-shrink-0">
            ${b(t.length)} غذا
          </span>
        </div>

        <!-- Food Grid (Responsive: 2 cols on mobile, 3 on tablet, 4 on desktop) -->
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          ${t.map((o,i)=>{const d=r===0&&i<4;return Y(o,d)}).join("")}
        </div>
      </section>
    `}).join(""),Z()}function Y(e,a=!1){const n=ee(e),s=e.shapes&&e.shapes.length>1,r=M[e.id]||"normal",t=s?e.shapes.find(g=>g.id===r)||e.shapes[0]:null,o=ae(t?t.image:e.image),i=B(t?t.image:e.image),d=t?.badge||e.badge,l=!!e.isChefRecommendation,p=a?'loading="eager" fetchpriority="high"':'loading="lazy"';return`
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
            ${p}
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
          class="${n>0?"flex":"hidden"} absolute top-2 left-2 bg-amber-500 text-black font-black text-[10px] md:text-xs w-5 h-5 md:w-6 md:h-6 rounded-full items-center justify-center shadow z-10 pointer-events-none"
        >
          ${b(n)}
        </div>

        ${s?`
          <!-- Minimal Dots Indicator showing available photo shapes -->
          <div class="absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-1.5 z-10 pointer-events-none">
            ${e.shapes.map(g=>`
              <span 
                id="card-dot-${e.id}-${g.id}"
                class="h-1.5 rounded-full transition-all duration-300 ${g.id===r?"bg-amber-400 w-4 shadow":"bg-white/40 w-1.5"}"
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
              ${v(e.price)}
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
            ${m.plus}
            <span id="card-btn-text-${e.id}">
              ${s?`افزودن ${t.shortName||t.name}`:"افزودن به لیست سفارش"}
            </span>
          </button>
        </div>
      </div>
    </article>
  `}function Z(){document.querySelectorAll(".food-card").forEach(e=>{const a=e.dataset.id,n=I.items.find(t=>t.id===a);if(!n)return;let s=!1;if(e.addEventListener("click",t=>{if(s){s=!1;return}t.target.closest('button[data-action="add-tray"]')||t.target.closest("a")||ye(n)}),n.shapes&&n.shapes.length>1){let t=0,o=0;const i=e.querySelector(`[data-photo-container="${n.id}"]`);i?.addEventListener("touchstart",l=>{t=l.changedTouches[0].screenX,o=l.changedTouches[0].screenY,s=!1},{passive:!0}),i?.addEventListener("touchend",l=>{const p=l.changedTouches[0].screenX,g=l.changedTouches[0].screenY,w=p-t,x=g-o;if(Math.abs(w)>30&&Math.abs(w)>Math.abs(x)){s=!0;const z=(M[n.id]||"normal")==="normal"?"heart":"normal";X(n,z),setTimeout(()=>{s=!1},200)}},{passive:!0});let d=!1;i?.addEventListener("mousedown",l=>{d=!0,t=l.screenX,s=!1}),i?.addEventListener("mouseup",l=>{if(!d)return;d=!1;const p=l.screenX;if(Math.abs(p-t)>30){s=!0;const w=(M[n.id]||"normal")==="normal"?"heart":"normal";X(n,w),setTimeout(()=>{s=!1},200)}}),i?.addEventListener("mouseleave",()=>{d=!1})}e.querySelector('button[data-action="add-tray"]')?.addEventListener("click",t=>{t.stopPropagation();let o=a,i=n.title;if(n.shapes&&n.shapes.length>1){const d=M[n.id]||"normal",l=n.shapes.find(p=>p.id===d)||n.shapes[0];o=`${n.id}:${d}`,i=`${n.title} (${l.name})`}U(o),T(`${i} به لیست اضافه شد`)})})}function we(){if("serviceWorker"in navigator&&window.location.protocol.startsWith("http")&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(p=>{console.log("SW registration error:",p)})}),window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)return;const a=/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()),n=document.getElementById("btn-install-pwa"),s=document.getElementById("pwa-install-banner"),r=document.getElementById("pwa-banner-install-btn"),t=document.getElementById("pwa-banner-close-btn"),o=document.getElementById("ios-install-modal"),i=document.getElementById("close-ios-modal-btn"),d=document.getElementById("confirm-ios-modal-btn");a&&(n?.classList.remove("hidden"),n?.classList.add("flex"),s?.classList.remove("hidden")),window.addEventListener("beforeinstallprompt",p=>{p.preventDefault(),F=p,n?.classList.remove("hidden"),n?.classList.add("flex"),s?.classList.remove("hidden")});const l=async()=>{if(a){o?.classList.remove("hidden");return}if(F){F.prompt();const{outcome:p}=await F.userChoice;p==="accepted"&&(n?.classList.add("hidden"),s?.classList.add("hidden"),T("اپلیکیشن با موفقیت نصب شد")),F=null}else T("برای نصب، از منوی مرورگر گزینه Add to Home Screen را بزنید.")};n?.addEventListener("click",l),r?.addEventListener("click",l),t?.addEventListener("click",()=>{s?.classList.add("hidden")}),i?.addEventListener("click",()=>{o?.classList.add("hidden")}),d?.addEventListener("click",()=>{o?.classList.add("hidden")}),o?.addEventListener("click",p=>{p.target===o&&o.classList.add("hidden")})}function ke(){if(typeof window>"u")return;const e=[];(restaurantMenuData.items||[]).forEach(r=>{r.image&&e.push(B(r.image)),r.shapes&&r.shapes.forEach(t=>{t.image&&e.push(B(t.image))})});const a=[...new Set(e)];let n=0;function s(){if(n>=a.length)return;const r=a.slice(n,n+4);n+=4,r.forEach(t=>{const o=new Image;o.decoding="async",o.src=t}),n<a.length&&("requestIdleCallback"in window?requestIdleCallback(s,{timeout:1e3}):setTimeout(s,200))}"requestIdleCallback"in window?requestIdleCallback(s,{timeout:1500}):setTimeout(s,350)}function $e(){typeof navigator<"u"&&!navigator.onLine||sessionStorage.getItem("atish_mascot_shown")||setTimeout(()=>{if(!navigator.onLine)return;const e=document.createElement("div");e.id="atish-mascot-greeting",e.className="mascot-container",e.setAttribute("aria-label","خوش‌آمدگویی آتیش"),e.innerHTML=`
      <img src="/images/atish-mascot.webp" alt="آتیش" class="mascot-avatar select-none" draggable="false" />
      <div class="mascot-bubble select-none">
        سلام! خوش اومدید 🔥
      </div>
    `,document.body.appendChild(e),requestAnimationFrame(()=>{e.classList.add("mascot-visible")}),sessionStorage.setItem("atish_mascot_shown","true");const a=setTimeout(()=>{n()},3800);function n(){clearTimeout(a),e.classList.remove("mascot-visible"),e.classList.add("mascot-leaving"),setTimeout(()=>{e.remove()},600)}e.addEventListener("click",n)},1200)}be();K();we();ke();$e();
