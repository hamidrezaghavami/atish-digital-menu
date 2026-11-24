(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerPolicy&&(t.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?t.credentials="include":i.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(i){if(i.ep)return;i.ep=!0;const t=s(i);fetch(i.href,t)}})();const P={brandTitle:"فست‌فود آتیش",brandSubtitle:"طعم اصیل و لذیذ فست‌فود آتیش",tagline:"منوی دیجیتال و سفارش دلیوری فست‌فود آتیش",phoneNumber:"02122561949",snappfoodUrl:"https://snappfood.ir/restaurant/menu/پیتزا_آتیش-r-p44gzx/",instagramUrl:"https://instagram.com/atishfood",workingHours:"همه روزه از ۱۱:۳۰ صبح تا ۲۳:۱۵ شب",address:"خیابان دولت تهران، محله دروس، خیابان کلاهدوز (دولت)، روبه‌روی بانک ملت بین کوچه خرداد و معتمدی، پلاک ۱۰۰"},me={name:"آتیش",brandTitle:"آتیش | Menu",brandSubtitle:"طعم اصیل و لذیذ رستوران آتیش",tagline:"منوی دیجیتال آتیش",phone:"02122561949",snappfoodUrl:"https://snappfood.ir/restaurant/menu/پیتزا_آتیش-r-p44gzx/",instagramUrl:"https://instagram.com/atishfood",workingHours:"همه روزه از ۱۱:۳۰ صبح تا ۲۳:۱۵ شب",address:"خیابان دولت تهران، محله دروس، خیابان کلاهدوز (دولت)، روبه‌روی بانک ملت بین کوچه خرداد و معتمدی، پلاک ۱۰۰",rating:"۴.۵"},be=[{id:"american-pizzas",name:"پیتزا آمریکایی",icon:"🍕",title:"پیتزاهای آمریکایی",subtitle:""},{id:"family-pizzas",name:"پیتزا خانواده",icon:"🍕",title:"پیتزاهای خانواده",subtitle:""},{id:"italian-pizzas",name:"پیتزا ایتالیایی",icon:"🍕",title:"پیتزاهای ایتالیایی",subtitle:""},{id:"burgers",name:"برگرها",icon:"🍔",title:"برگر",subtitle:""},{id:"sandwiches",name:"ساندویچ‌ها",icon:"🌭",title:"ساندویچ‌ها",subtitle:""},{id:"fried",name:"سوخاری‌ها",icon:"🍗",title:"مرغ و سوخاری",subtitle:""},{id:"sides",name:"پیش‌ غذا",icon:"🍟",title:"پیش‌ غذا",subtitle:""},{id:"drinks",name:"نوشیدنی‌ها",icon:"🥤",title:"نوشیدنی‌ها",subtitle:""}],ge=[{id:"ap-1",categoryId:"american-pizzas",isFeatured:!0,isChefRecommendation:!0,title:"پیتزا آمریکایی مخصوص",tag:null,badge:"دارای طرح قلبی ❤️",price:749e3,ingredients:"خمیر پیتزا پنجره ای آمریکایی، مرغ، ژامبون گوشت 90%، قارچ، فلفل دلمه ای، پنیر پیتزا",image:"./images/Makhsos-American.webp",placeholderIcon:"🍕",shapes:[{id:"normal",name:"مستطیل کلاسیک",shortName:"مستطیل",icon:"",image:"./images/Makhsos-American.webp",badge:null,price:749e3},{id:"heart",name:"طرح قلبی",shortName:"قلبی",icon:"",image:"images/heart-normal.webp",badge:"❤️ طرح قلبی",price:749e3}]},{id:"ap-2",categoryId:"american-pizzas",isFeatured:!1,isChefRecommendation:!0,title:"پیتزا پپرونی",tag:null,badge:"دارای طرح قلبی ❤️",price:739e3,ingredients:"خمیر پیتزا پنجره ای آمریکایی، پپرونی 90%، فلفل دلمه ای، پنیر پیتزا",image:"./images/Peperoni-American-Pizza.webp",placeholderIcon:"🍕",shapes:[{id:"normal",name:"مستطیل کلاسیک",shortName:"مستطیل",icon:"",image:"./images/Peperoni-American-Pizza.webp",badge:null,price:739e3},{id:"heart",name:"طرح قلبی",shortName:"قلبی",icon:"",image:"images/heart-peperoni.webp",badge:"❤️ طرح قلبی",price:739e3}]},{id:"ap-3",categoryId:"american-pizzas",isFeatured:!1,isChefRecommendation:!0,title:"پیتزا مرغ و قارچ",tag:null,badge:null,price:749e3,ingredients:"خمیر پیتزا پنجره ای آمریکایی، مرغ نگینی شده، قارچ، پنیر پیتزا",image:"./images/Chicken-American-Pizza.webp",placeholderIcon:"🍕"},{id:"ap-4",categoryId:"american-pizzas",isFeatured:!1,isChefRecommendation:!0,title:"پیتزا گوشت و قارچ",tag:null,badge:null,price:879e3,ingredients:"خمیر پیتزا پنجره ای آمریکایی، گوشت گوساله ریش ریش شده، قارچ، پنیر پیتزا",image:"./images/meat-American-Pizza.webp",placeholderIcon:"🍕"},{id:"ap-5",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا سبزیجات",tag:null,badge:null,price:599e3,ingredients:"خمیر پیتزا آمریکایی، ذرت، نخود فرنگی، هویج، قارچ، فلفل دلمه ای، پنیر پیتزا",image:"./images/Sabzi-American.webp",placeholderIcon:"🍕"},{id:"ap-6",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا قارچ و سوسیس",tag:null,badge:null,price:61e4,ingredients:"خمیر آمریکایی ، قارچ ، سوسیس اسلایس ، پنیر میکس ، سس مخصوص آتیش",image:"images/american-Sosis-mashroom.webp",placeholderIcon:"🍕"},{id:"ap-7",categoryId:"american-pizzas",isFeatured:!1,title:"پیتزا قارچ و پنیر",tag:null,badge:null,price:499e3,ingredients:"خمیر پیتزا آمریکایی، قارچ، پنیر پیتزا",image:"./images/Mashroom-Pizza.webp",placeholderIcon:"🍕"},{id:"fp-1",categoryId:"family-pizzas",isFeatured:!0,title:"پیتزا چهارطعم خانواده",tag:null,badge:null,price:1549e3,ingredients:"ترکیبی از چهار طعم مختلف پیتزا با قابلیت انتخاب و تغییر طعم‌ها به سلیقه شما.",image:"./images/4F-Family.webp",placeholderIcon:"🍕"},{id:"ip-1",categoryId:"italian-pizzas",isFeatured:!0,title:"پیتزا ایتالیایی آتیش",tag:null,badge:null,price:989e3,ingredients:"خمیر پیتزا ایتالیایی، مرغ، ژامبون گوشت 90%، قارچ، فلفل دلمه ای، زیتون، پنیر پیتزا",image:"./images/Atish-Italian.webp",placeholderIcon:"🍕"},{id:"ip-2",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا پپرونی ایتالیایی",tag:null,badge:null,price:989e3,ingredients:"خمیر پیتزا ایتالیایی، پپرونی 90%، فلفل دلمه ای، پنیر پیتزا",image:"./images/Peperoni-Italian.webp",placeholderIcon:"🍕"},{id:"ip-3",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا مرغ و قارچ ایتالیایی",tag:null,badge:null,price:979e3,ingredients:"خمیر پیتزا ایتالیایی، مرغ، قارچ، زیتون، فلفل دلمه ای، پنیر پیتزا",image:"./images/Chicken-Italian.webp",placeholderIcon:"🍕"},{id:"ip-5",categoryId:"italian-pizzas",isFeatured:!1,title:"پیتزا استیک ایتالیایی",tag:null,badge:null,price:1089e3,ingredients:"خمیر پیتزا ایتالیایی، گوشت گوساله تکه ای، قارچ، زیتون، فلفل دلمه ای، پنیر پیتزا",image:"images/Steak-Italian-Pizza.webp",placeholderIcon:"🍕"},{id:"b-1",categoryId:"burgers",isFeatured:!0,title:"همبرگر",tag:null,badge:null,price:629e3,ingredients:"یک عدد برگر دست ساز گوشت گوساله ۱۵۰ گرمی، گوجه، کاهو، خیارشور، پیاز، سس مخصوص، نان برگر",image:"images/burger.webp",placeholderIcon:"🍔"},{id:"b-2",categoryId:"burgers",isFeatured:!1,title:"چیزبرگر",tag:null,badge:null,price:649e3,ingredients:"یک عدد برگر دست ساز گوشت گوساله ۱۵۰ گرمی، پنیر گودا، خیارشور، گوجه، کاهو، سس مخصوص، نان برگر",image:"images/cheese-burger.webp",placeholderIcon:"🍔"},{id:"b-3",categoryId:"burgers",isFeatured:!1,title:"قارچ برگر",tag:null,badge:null,price:659e3,ingredients:"یک عدد برگر دست ساز گوشت گوساله ۱۵۰ گرمی، قارچ، پنیر، پیاز، گوجه، کاهو، خیارشور، نان برگر",image:"images/mashroom-burger.webp",placeholderIcon:"🍔"},{id:"b-4",categoryId:"burgers",isFeatured:!1,title:"دبل چیزبرگر",tag:null,badge:null,price:889e3,ingredients:"دو عدد گوشت برگر ۱۲۰ گرمی ، نان برگر ، پیاز ، کاهو ، گوجه ، خیار شور ، پنیر گودا ، سس ساندویچ",image:"images/double-cheese-burger.webp",placeholderIcon:"🍔"},{id:"b-5",categoryId:"burgers",isFeatured:!1,title:"دبل برگر",tag:null,badge:null,price:869e3,ingredients:"دو عدد برگر ۱۲۰ گرمی ، کاهو ، گوجه ، خیارشور ، نان برگر ، سس ساندویچ",image:"images/double-burger.webp",placeholderIcon:"🍔"},{id:"b-6",categoryId:"burgers",isFeatured:!1,title:"دبل ماشروم",tag:null,badge:null,price:899e3,ingredients:"دو عدد برگر ۱۲۰ گرمی ، پیاز ، قارچ ، پنیر گودا ، نان برگر ، سس مخصوص",image:"images/double-Mashroom-burger.webp",placeholderIcon:"🍔"},{id:"b-7",categoryId:"burgers",isFeatured:!1,title:"آتیش برگر",tag:null,badge:null,price:799e3,ingredients:"یک عدد برگر دست ساز گوشت گوساله ۱۵۰ گرمی، ۱۵۰ گرم فیله مرغ گریل، پنیر گودا، خیارشور، گوجه، کاهو، سس مخصوص، نان برگر",image:"images/atish-burger.webp",placeholderIcon:"🍔"},{id:"b-8",categoryId:"burgers",isFeatured:!1,title:"زینگر",tag:null,badge:null,price:599e3,ingredients:"۱۳۰ گرم فیله مرغ سوخاری تند، کاهو، گوجه، سس مخصوص، نان برگر",image:"images/Zinger.webp",placeholderIcon:"🍔"},{id:"b-9",categoryId:"sandwiches",isFeatured:!1,title:"گریل",tag:null,badge:null,price:649e3,ingredients:"۱۶۰ گرم فیله مرغ گریل شده، پنیر گودا، قارچ، گوجه، کاهو، نان باگت",image:"images/Giril.webp",placeholderIcon:"🌭"},{id:"b-10",categoryId:"sandwiches",isFeatured:!1,title:"رست بیف",tag:null,badge:null,price:699e3,ingredients:"کاهو ، گوجه ، خیارشور ، ۸۰ گرم گوشت گوساله مزه دار ، قارچ سس مخصوص و نان باگت",image:"images/RoastBeef.webp",placeholderIcon:"🌭"},{id:"sw-1",categoryId:"sandwiches",isFeatured:!0,title:"فیله سوخاری با پنیر",tag:null,badge:null,price:699e3,ingredients:"۱۲۰ گرم فیله مرغ سوخاری، پنیر گودا، گوجه، کاهو، نان باگت",image:"images/file.webp",placeholderIcon:"🌭"},{id:"sw-2",categoryId:"sandwiches",isFeatured:!1,title:"سوپرسوپریم",tag:null,badge:null,price:761e3,ingredients:"۱۲۰ گرم فیله مرغ سوخاری، ۲ ورق ژامبون گوشت ، پنیر گودا، کاهو، گوجه، نان باگت",image:"./images/jambon-sandwhich.webp",placeholderIcon:"🌭"},{id:"sw-3",categoryId:"sandwiches",isFeatured:!1,title:"هات داگ",tag:null,badge:null,price:529e3,ingredients:"یک عدد هات داگ ۹۰٪، قارچ، پنیر گودا، کاهو، گوجه، سس مخصوص، نان باگت",image:"images/Hotdog.webp",placeholderIcon:"🌭"},{id:"fr-1",categoryId:"fried",isFeatured:!0,title:"فیله سوخاری سه تیکه",tag:null,badge:null,price:789e3,ingredients:"۳ عدد فیله مرغ سوخاری، ۲۵۰ گرم سیب زمینی سرخ کرده، یک عدد نان بروتچن",image:"./images/Crispy-Chicken-Tenders.webp",placeholderIcon:"🍗"},{id:"fr-2",categoryId:"fried",isFeatured:!1,title:"فیله سوخاری چهار تیکه",tag:null,badge:null,price:899e3,ingredients:"۴ عدد فیله مرغ سوخاری، ۲۵۰ گرم سیب زمینی سرخ کرده، یک عدد نان بروتچن",image:"./images/4-Crispe.webp",placeholderIcon:"🍗"},{id:"fr-3",categoryId:"fried",isFeatured:!1,title:"قارچ سوخاری",tag:null,badge:null,price:349e3,ingredients:"۲۴۰ گرم قارچ سوخاری",image:"./images/Mashroom.webp",placeholderIcon:"🍄"},{id:"sd-1",categoryId:"sides",isFeatured:!0,title:"سیب زمینی سرخ‌کرده",tag:null,badge:null,price:339e3,ingredients:"۲۵۰ گرم سیب زمینی سرخ کرده",image:"./images/French-Fries.webp",placeholderIcon:"🍟"},{id:"sd-2",categoryId:"sides",isFeatured:!1,title:"سیب‌زمینی ویژه",tag:null,badge:null,price:469e3,ingredients:"۳۰۰ گرم سیب زمینی، ژامبون گوشت، قارچ، فلفل دلمه ای",image:"./images/Fries-Special.webp",placeholderIcon:"🍟"},{id:"dr-1",categoryId:"drinks",isFeatured:!0,title:"نوشابه خانواده",tag:null,badge:null,price:140400,ingredients:"",image:"./images/Big-Coke.webp",placeholderIcon:"🥤"},{id:"dr-2",categoryId:"drinks",isFeatured:!1,title:"نوشابه کوچک",tag:null,badge:null,price:92550,ingredients:"",image:"./images/Coke.webp",placeholderIcon:"🥤"},{id:"dr-3",categoryId:"drinks",isFeatured:!1,title:"دلستر",tag:null,badge:null,price:101e3,ingredients:"",image:"./images/Delester.webp",placeholderIcon:"🥤"},{id:"dr-4",categoryId:"drinks",isFeatured:!1,title:"دوغ",tag:null,badge:null,price:45e3,ingredients:"",image:"./images/Dogh.webp",placeholderIcon:"🥤"},{id:"dr-5",categoryId:"drinks",isFeatured:!1,title:"آب معدنی کوچک",tag:null,badge:null,price:25e3,ingredients:"",image:"./images/Water.webp",placeholderIcon:"💧"}],ue={restaurant:me,categories:be,items:ge},xe={cx:260,cy:210,radius:115},he={cx:260,cy:210,radius:185},fe=[{id:"dowlat",name:"دولت (کلاهدوز)",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۱۵ تا ۲۰ دقیقه",desc:"محل استقرار رستوران در خیابان کلاهدوز — سریع‌ترین ارسال با پیک مستقیم آتیش",x:175,y:205},{id:"dibaji",name:"دیباجی",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۱۵ تا ۲۰ دقیقه",desc:"محدوده همجوار رستوران (دیباجی جنوبی و شمالی) — ارسال مستقیم و فوق‌سریع با پیک اختصاصی",x:250,y:145},{id:"ekhtiarieh",name:"اختیاریه",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۱۵ تا ۲۰ دقیقه",desc:"محدوده شمالی کلاهدوز تا بزرگراه صدر — ارسال سریع و مستقیم با پیک اختصاصی",x:320,y:145},{id:"darrous",name:"دروس",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۲۰ تا ۲۵ دقیقه",desc:"محدوده جنوبی رستوران (پایین خیابان دولت) — ارسال مستقیم و گرم با پیک اختصاصی آتیش",x:260,y:285},{id:"pasdaran",name:"پاسداران",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۲۰ تا ۲۵ دقیقه",desc:"ضلع شرقی رستوران — در محدوده تحت پوشش سریع پیک مستقیم آتیش",x:360,y:215},{id:"gholhak",name:"قلهک",zone:"direct",badge:"پیک اختصاصی آتیش ⚡️",time:"۳۰ تا ۳۵ دقیقه",desc:"ضلع غربی و محدوده خیابان شریعتی — در محدوده پوشش سریع پیک مستقیم رستوران",x:160,y:245},{id:"qeytarieh",name:"قیطریه / اندرزگو",zone:"express",badge:"اسنپ‌فود / اکسپرس 🛵",time:"۳۰ تا ۳۵ دقیقه",desc:"بالای بزرگراه صدر و همجوار تجریش — سفارش آنلاین و تحویل اکسپرس در اسنپ‌فود",x:185,y:85},{id:"tajrish",name:"تجریش",zone:"express",badge:"اسنپ‌فود / اکسپرس 🛵",time:"۴۰ تا ۵۰ دقیقه",desc:"محدوده شمال‌غرب و میدان تجریش — سفارش آنلاین و ارسال از طریق اسنپ‌فود",x:130,y:95},{id:"niavaran",name:"نیاوران",zone:"express",badge:"اسنپ‌فود / اکسپرس 🛵",time:"۳۰ تا ۳۵ دقیقه",desc:"شعاع اکسپرس شمال تهران — سفارش آنلاین و ارسال در اسنپ‌فود",x:315,y:55},{id:"heravi",name:"هروی",zone:"express",badge:"اسنپ‌فود / اکسپرس 🛵",time:"۴۰ تا ۵۰ دقیقه",desc:"ضلع جنوب‌شرق پاسداران — سفارش آنلاین و ارسال اکسپرس در اسنپ‌فود",x:415,y:275},{id:"seyedkhandan",name:"سیدخندان",zone:"express",badge:"اسنپ‌فود / اکسپرس 🛵",time:"۴۰ تا ۵۰ دقیقه",desc:"شعاع اکسپرس جنوب — سفارش آنلاین و ارسال در اسنپ‌فود",x:215,y:375}],ve="این نقشه فقط نمایی تقریبی از محدوده ارسال است؛ مرزها و فاصله‌ها دقیق نیستند. برای استعلام دقیق آدرس خود، با شماره ۲۲۵۶۱۹۴۹ تماس حاصل فرمایید.",re={restaurantArea:xe,snappfoodArea:he,neighborhoods:fe,note:ve},ye="/images/logo.webp";let $=ue,K=$.categories?.[0]?.id||"american-pizzas",E="",O=!1,h=JSON.parse(localStorage.getItem("atish_order_tray")||"{}"),S=3,q="darrous",R=null;function g(e){if(e==null)return"";const n=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];return e.toString().replace(/\d/g,s=>n[parseInt(s,10)])}function V(e){return e?String(e).toLowerCase().replace(/[ي]/g,"ی").replace(/[ك]/g,"ک").replace(/[آأإ]/g,"ا").replace(/[ؤ]/g,"و").replace(/[ة]/g,"ه").replace(/[\u200c\s]+/g," ").trim():""}function te(e){return e?String(e).replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[n]):""}function G(){return Object.values(h).reduce((e,n)=>e+n,0)}function y(e){if(e==null||e===""||isNaN(e))return"";const n=Number(e);return n===0?"رایگان":`${g(n.toLocaleString("en-US"))} تومان`}function U(){return Object.entries(h).reduce((e,[n,s])=>{const r=Y(n);return e+(r&&r.price?Number(r.price)*s:0)},0)}function _(){localStorage.setItem("atish_order_tray",JSON.stringify(h)),le()}function ie(){const n=(typeof window<"u"?new URLSearchParams(window.location.search):null)?.get("theme")?.toLowerCase();let s,r,i,t=!1;if(typeof Temporal<"u"&&Temporal.Now&&Temporal.PlainMonthDay&&Temporal.PlainDate){const a=Temporal.Now.zonedDateTimeISO("Asia/Tehran").toPlainDate();s=a.year,r=a.month,i=a.day;const l=Temporal.PlainMonthDay.from({month:11,day:22,calendar:"iso8601"}).toPlainDate({year:s}),d=Temporal.PlainMonthDay.from({month:1,day:5,calendar:"iso8601"}).toPlainDate({year:s});t=Temporal.PlainDate.compare(a,l)>=0||Temporal.PlainDate.compare(a,d)<=0}else[s,r,i]=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Tehran"}).format(new Date).split("-").map(Number),t=r===11&&i>=22||r===12||r===1&&i<=5;n==="christmas"&&(t=!0),n==="normal"&&(t=!1);let o="جشنواره زمستانی و کریسمس آتیش";if(t){const a=Date.UTC(s,r-1,i);if(r===11&&i>=22||r===12&&i<25){const l=Date.UTC(s,11,25),d=Math.max(0,Math.round((l-a)/864e5));o=`تا کریسمس ${g(d)} روز مانده`}else if(r===12&&i===25)o="کریسمس مبارک! با طعم گرم آتیش";else if(r===12&&i>25){const l=Date.UTC(s+1,0,1),d=Math.max(1,Math.round((l-a)/864e5));o=`تا سال نو میلادی ${g(d)} روز مانده`}else if(r===1&&i<=5){const l=Date.UTC(s,0,5),d=Math.max(0,Math.round((l-a)/864e5));o=d===0?"سال نو میلادی مبارک! آخرین روز تم زمستانی":`سال نو میلادی مبارک · ${g(d)} روز تا پایان فصل جشن`}}return{isActive:t,year:s,month:r,day:i,countdownText:o}}let X=ie();const ae=`
  <svg viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10 38 C16 14, 38 6, 54 16 C48 16, 44 22, 46 30 C36 28, 22 31, 10 38 Z" fill="#dc2626"/>
    <path d="M18 35 C23 18, 38 11, 50 16 C42 14, 30 20, 24 34 Z" fill="#ef4444" opacity="0.65"/>
    <rect x="6" y="34" width="44" height="11" rx="5.5" fill="#f8fafc"/>
    <circle cx="55" cy="18" r="6" fill="#ffffff"/>
  </svg>
`;function we(){return`
    <div class="xmas-lights-bar" aria-hidden="true">
      <svg class="xmas-lights-svg" viewBox="0 0 1200 18" preserveAspectRatio="none">
        <path d="M0 3 Q75 14 150 4 T300 4 T450 4 T600 4 T750 4 T900 4 T1050 4 T1200 4" fill="none" stroke="rgba(161,161,170,0.42)" stroke-width="1.4"/>
        ${[{x:40,y:12,color:"#ef4444",cls:"xmas-bulb-a"},{x:110,y:14,color:"#fbbf24",cls:"xmas-bulb-b"},{x:185,y:11,color:"#22c55e",cls:"xmas-bulb-c"},{x:260,y:14,color:"#f97316",cls:"xmas-bulb-a"},{x:340,y:11,color:"#ef4444",cls:"xmas-bulb-b"},{x:420,y:14,color:"#fde047",cls:"xmas-bulb-c"},{x:500,y:11,color:"#22c55e",cls:"xmas-bulb-a"},{x:580,y:14,color:"#ef4444",cls:"xmas-bulb-b"},{x:660,y:11,color:"#fbbf24",cls:"xmas-bulb-c"},{x:740,y:14,color:"#22c55e",cls:"xmas-bulb-a"},{x:820,y:11,color:"#ef4444",cls:"xmas-bulb-b"},{x:900,y:14,color:"#fde047",cls:"xmas-bulb-c"},{x:980,y:11,color:"#22c55e",cls:"xmas-bulb-a"},{x:1060,y:14,color:"#ef4444",cls:"xmas-bulb-b"},{x:1140,y:11,color:"#fbbf24",cls:"xmas-bulb-c"}].map(n=>`
          <g class="xmas-bulb ${n.cls}">
            <circle cx="${n.x}" cy="${n.y}" r="5.5" fill="${n.color}" opacity="0.22"/>
            <circle cx="${n.x}" cy="${n.y}" r="2.8" fill="${n.color}"/>
            <circle cx="${n.x-.7}" cy="${n.y-.8}" r="0.9" fill="#ffffff" opacity="0.85"/>
          </g>
        `).join("")}
      </svg>
    </div>
  `}function ke(){const e=document.documentElement,n=document.querySelector('meta[name="theme-color"]');if(!X.isActive){e.classList.remove("theme-christmas"),document.getElementById("xmas-snow-layer")?.remove(),n&&n.setAttribute("content","#0e0e10");return}if(e.classList.add("theme-christmas"),n&&n.setAttribute("content","#0d1311"),!document.getElementById("xmas-snow-layer")){const s=document.createElement("div");s.id="xmas-snow-layer",s.className="xmas-snow-layer",s.setAttribute("aria-hidden","true");const r={crystal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/><path d="M9.5 4.5L12 7l2.5-2.5M9.5 19.5L12 17l2.5 2.5M4.5 9.5L7 12l-2.5 2.5M19.5 9.5L17 12l2.5 2.5"/></svg>',star:'<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 0L11.6 8.4L20 10L11.6 11.6L10 20L8.4 11.6L0 10L8.4 8.4Z"/></svg>',cross:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M3 3l10 10M13 3L3 13"/></svg>'},t=window.innerWidth<640?34:56,o=document.createDocumentFragment();for(let a=0;a<t;a++){const l=document.createElement("span"),d=a%10;let c="dot";d===0||d===4?c="crystal":d===2||d===7?c="star":d===5&&(c="cross"),l.className=`xmas-snowflake xmas-flake-${c}`;const b=(a*61.8034+7)%98+1,f=c==="dot"?13+a%7*2.1:c==="crystal"?11+a%5*2.2:10+a%6*1.9,u=-(a*1.37%f),x=(a%2===0?1:-1)*(12+a%5*7),z=(a%2===0?1:-1)*(120+a%4*60);let L,w;c==="crystal"?(L=10+a%4*2,w=.58+a%3*.14,l.innerHTML=r.crystal):c==="star"?(L=7+a%4*1.6,w=.52+a%3*.15,l.innerHTML=r.star):c==="cross"?(L=6.5+a%3*1.5,w=.45+a%3*.14,l.innerHTML=r.cross):(L=2.2+a%4*.9,w=.34+a%4*.14),l.style.setProperty("--x",`${b.toFixed(2)}%`),l.style.setProperty("--size",`${L.toFixed(1)}px`),l.style.setProperty("--dur",`${f.toFixed(1)}s`),l.style.setProperty("--delay",`${u.toFixed(2)}s`),l.style.setProperty("--drift",`${x}px`),l.style.setProperty("--rot",`${z}deg`),l.style.setProperty("--alpha",`${w.toFixed(2)}`),o.appendChild(l)}s.appendChild(o),document.body.appendChild(s)}}function oe(){try{const n=new Date().toLocaleTimeString("en-US",{timeZone:"Asia/Tehran",hour12:!1,hour:"2-digit",minute:"2-digit"}),[s,r]=n.split(":").map(Number),i=s*60+r;return i>=690&&i<1395?{isOpen:!0,text:"هم‌اکنون باز است",badgeClass:"bg-emerald-500/15 border-emerald-500/30 text-emerald-400",dotClass:"bg-emerald-400 animate-pulse",tooltip:"پذیرش سفارشات تلفنی و آنلاین اسنپ‌فود (۱۱:۳۰ تا ۲۳:۱۵)"}:{isOpen:!1,text:"هم‌اکنون بسته است",badgeClass:"bg-rose-500/15 border-rose-500/30 text-rose-400",dotClass:"bg-rose-400",tooltip:"ساعات کاری آتیش: همه روزه از ۱۱:۳۰ صبح تا ۲۳:۱۵ شب"}}catch{return{isOpen:!0,text:"هم‌اکنون باز است",badgeClass:"bg-emerald-500/15 border-emerald-500/30 text-emerald-400",dotClass:"bg-emerald-400 animate-pulse",tooltip:"پذیرش سفارشات تلفنی و آنلاین اسنپ‌فود"}}}const m={search:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>',phone:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',scooter:'<svg class="w-5 h-5 -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M14 9h4l4 4v5h-3"/><circle stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" cx="19" cy="18" r="2"/><circle stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" cx="7" cy="18" r="2"/></svg>',instagram:'<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',clock:'<svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',location:'<svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',close:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M6 18L18 6M6 6l12 12"/></svg>',menuIcon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M4 6h16M4 12h16M4 18h16"/></svg>',tray:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>',plus:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>',minus:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20 12H4"/></svg>',trash:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>',copy:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>'},A=[{title:"نان کنجدی تازه",desc:"نان لطیف و معطر دست‌ساز با کنجد درجه یک.",icon:"🍞"},{title:"سس مخصوص آتیش",desc:"فرمول انحصاری و دست‌ساز فست‌فود آتیش با عطر ادویه‌جات ویژه و چاشنی دلپذیر.",icon:"🍯"},{title:"پنیر گودا",desc:"ورقه‌های پنیر گودا روی برگر گرم با طعم اصیل و لذیذ.",icon:"🧀"},{title:"گوشت خالص برگر دست‌ساز",desc:"۱۰۰٪ گوشت خالص و گرم گوساله با طبخ مخصوص و حفظ کامل آبدار بودن گوشت.",icon:"🥩"},{title:"قارچ و پیاز",desc:"ترکیب قارچ تفت‌داده و پیاز که طعم فوق‌العاده‌ای به آتیش برگر می‌بخشد.",icon:"🍄"},{title:"خیارشور و سبزیجات تازه",desc:"خیارشور تازه، کاهو پیچ ترد و گوجه فرنگی به همراه نان تازه کنجدی.",icon:"🥒"}];function J(e){const n=$?.restaurant||P,{neighborhoods:s}=re,r=s.find(a=>a.id===e);if(!r)return;q=e;const i=r.zone==="direct";document.querySelectorAll(".delivery-chip-btn").forEach(a=>{const l=a.dataset.id===e,d=s.find(b=>b.id===a.dataset.id),c=d?d.name:"";a.className=`delivery-chip-btn text-[11px] px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${l?"bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-md shadow-orange-500/30 scale-105":"bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:bg-white/[0.08] hover:text-white"}`,a.innerHTML=`<span>${l?"✓":"📍"}</span><span>${c}</span>`});const t=document.getElementById("delivery-status-card");if(t){t.className=`p-4 rounded-2xl border transition-all duration-300 mb-4 ${i?"bg-gradient-to-br from-emerald-950/40 via-[#18181c] to-emerald-950/20 border-emerald-500/40 shadow-lg shadow-emerald-950/30":"bg-gradient-to-br from-pink-950/40 via-[#18181c] to-pink-950/20 border-pink-500/40 shadow-lg shadow-pink-950/30"}`;const a=document.getElementById("delivery-card-title");a&&(a.textContent=`ارسال به ${r.name}`);const l=document.getElementById("delivery-card-badge");l&&(l.textContent=r.badge,l.className=`text-[11px] font-bold px-2.5 py-1 rounded-full ${i?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-pink-500/20 text-pink-300 border border-pink-500/30"}`);const d=document.getElementById("delivery-card-time");d&&(d.textContent=r.time);const c=document.getElementById("delivery-card-desc");c&&(c.textContent=r.desc);const b=document.getElementById("delivery-card-actions");b&&(i?b.innerHTML=`
          <a id="delivery-action-link" href="tel:${n.phone||P.phoneNumber}" class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-xs sm:text-sm shadow-md transition active:scale-[0.98]">
            ${m.phone}
            <span>سفارش تلفنی به ${r.name}</span>
            <span dir="ltr" class="inline-flex items-center tracking-wider mr-1 text-[11px]">
              (<span>۰۲۱</span><span>-</span><span>۲۲۵۶۱۹۴۹</span>)
            </span>
          </a>
        `:b.innerHTML=`
          <a id="delivery-action-link" href="${n.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#ff00a6] hover:bg-[#e00092] text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-500/25 transition active:scale-[0.98]">
            ${m.scooter}
            <span>سفارش در اسنپ‌فود</span>
          </a>
        `)}const o=document.getElementById("delivery-active-pulse");o&&o.setAttribute("transform",`translate(${r.x} ${r.y})`),document.querySelectorAll("#delivery-map-text-labels text").forEach(a=>{const l=a.dataset.id===e;a.classList.toggle("active-place",l)}),document.querySelectorAll(".delivery-pin-group").forEach(a=>{const l=a.dataset.id===e,d=a.querySelector("circle");if(d){const c=s.find(b=>b.id===a.dataset.id);d.setAttribute("r",l?"9":"6"),d.setAttribute("stroke-width",l?"2.5":"1.5"),d.setAttribute("fill",l?"#f59e0b":c?.zone==="direct"?"#ef4444":"#ff00a6"),d.setAttribute("fill-opacity",l?"1":"0.85")}})}function $e(e){const{restaurantArea:n,snappfoodArea:s,neighborhoods:r,note:i}=re,t=r.find(a=>a.id===q)||r[0],o=t.zone==="direct";return`
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
              <circle cx="${s.cx}" cy="${s.cy}" r="${s.radius}" fill="#ff00a6" fill-opacity=".04" stroke="#ff00a6" stroke-width="2" stroke-dasharray="8 8"/>
              <!-- Direct Atish Delivery Zone Radius -->
              <circle cx="${n.cx}" cy="${n.cy}" r="${n.radius}" fill="#ef4444" fill-opacity=".12" stroke="#ef4444" stroke-width="2.5"/>
              
              <!-- Neighborhood Pin Markers -->
              <g id="delivery-map-pins">
                ${r.map(a=>{const l=a.id===q;return`
                    <g class="delivery-pin-group cursor-pointer" data-id="${a.id}" transform="translate(${a.x} ${a.y})">
                      <circle r="${l?"9":"6"}" fill="${l?"#f59e0b":a.zone==="direct"?"#ef4444":"#ff00a6"}" stroke="#ffffff" stroke-width="${l?"2.5":"1.5"}" fill-opacity="${l?"1":"0.85"}"/>
                    </g>
                  `}).join("")}
              </g>

              <!-- Active Highlight Pin Pulse -->
              <g id="delivery-active-pulse" transform="translate(${t.x} ${t.y})">
                <circle r="22" fill="#f59e0b" fill-opacity=".35" class="animate-ping"/>
              </g>

              <!-- Neighborhood Labels -->
              <g class="delivery-place-labels" id="delivery-map-text-labels">
                ${r.map(a=>{const l=a.id===q;return`<text x="${a.x}" y="${a.y-11}" text-anchor="middle" data-id="${a.id}" class="${l?"active-place":""}">${a.name}</text>`}).join("")}
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
            ${r.map(a=>{const l=a.id===q;return`
                <button 
                  type="button" 
                  data-id="${a.id}" 
                  class="delivery-chip-btn text-[11px] px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${l?"bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-md shadow-orange-500/30 scale-105":"bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:bg-white/[0.08] hover:text-white"}"
                >
                  <span>${l?"✓":"📍"}</span>
                  <span>${a.name}</span>
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
                <a id="delivery-action-link" href="tel:${e.phone||P.phoneNumber}" class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-xs sm:text-sm shadow-md transition active:scale-[0.98]">
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
            ${i}
          </p>
        </div>

      </div>
    </section>
  `}function Ie(){const e=document.getElementById("app");if(!e)return;X=ie(),ke();const n=$?.restaurant||P,s=$?.categories||[],r=G(),i=oe(),t=X.isActive;e.innerHTML=`
    <!-- Responsive Header (Mobile + Desktop) -->
    <header class="sticky top-0 z-40 glass-header border-b border-white/[0.08] px-4 sm:px-6 lg:px-8 py-3">
      ${t?we():""}
      <div class="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <!-- Logo & Title -->
        <a href="#" id="header-logo-link" class="flex items-center gap-2 min-w-0" title="آتیش">
          <div class="xmas-logo-wrap w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]">
            <img 
              src="${ye}" 
              alt="${n.name}" 
              class="w-full h-full object-contain cursor-pointer select-none"
            />
            ${t?`<span class="xmas-santa-hat">${ae}</span>`:""}
          </div>
          <div class="flex flex-col text-right min-w-0">
            <div class="text-xs sm:text-sm md:text-base font-black text-white tracking-tight flex items-center gap-1.5 truncate">
              <span>${n.brandTitle}</span>
              <span id="header-status-dot" class="w-2 h-2 rounded-full ${i.dotClass} flex-shrink-0" title="${i.text}"></span>
            </div>
            <div class="text-[10px] sm:text-[11px] md:text-xs text-amber-400 font-medium truncate hidden sm:block">
              ${t?"🎄 فصل جشن زمستانی و کریسمس آتیش":n.brandSubtitle}
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
              value="${E}"
              placeholder="جستجوی سریع (پیتزا، برگر، پپرونی، استیک...)" 
              class="w-full bg-[#18181c] border border-white/[0.1] hover:border-amber-500/40 text-white text-xs rounded-xl pr-10 pl-9 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-zinc-500 transition shadow-inner"
            />
            <button 
              id="clear-desktop-search-btn" 
              class="${E?"":"hidden"} absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-400 hover:text-white"
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
            href="tel:${n.phone}"
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
            href="${n.snappfoodUrl}"
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
            href="${n.instagramUrl||P.instagramUrl||"https://instagram.com/atishfood"}"
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
            <span id="header-tray-badge" class="${r>0?"":"hidden"} bg-amber-500 text-black font-black text-[10px] px-1.5 py-0.2 rounded-full min-w-[18px] text-center">
              ${g(r)}
            </span>
          </button>
        </div>
      </div>

      <!-- Mobile Expandable Search Input -->
      <div id="search-container" class="${O?"":"hidden"} md:hidden w-full max-w-md mx-auto pt-3">
        <div class="relative">
          <span class="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-zinc-400">
            ${m.search}
          </span>
          <input 
            type="text" 
            id="menu-search-input" 
            value="${E}"
            placeholder="جستجوی پیتزا، برگر، ساندویچ، سوخاری..." 
            class="w-full bg-[#18181c] border border-amber-500/50 text-white text-xs rounded-xl pr-10 pl-9 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-zinc-500 shadow-inner"
          />
          <button 
            id="clear-search-btn" 
            class="${E?"":"hidden"} absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-400 hover:text-white"
          >
            ${m.close}
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
            <!-- Badges Bar -->
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <span id="restaurant-status-badge" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${i.badgeClass}" title="${i.tooltip}">
                <span id="restaurant-status-dot" class="w-1.5 h-1.5 rounded-full ${i.dotClass}"></span>
                <span id="restaurant-status-text">${i.text}</span>
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-pink-500/15 border border-pink-500/30 text-pink-400">
                ⭐ ${n.rating||"۴.۵"} در اسنپ‌فود
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
      <nav class="sticky sticky-category-nav z-30 bg-[#0c0c0e]/95 backdrop-blur-md -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 border-y border-white/[0.08] mb-6">
        <div id="category-bar" class="w-full max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar md:flex-wrap md:justify-center">
          ${s.map(o=>{const a=K===o.id;return`
              <button 
                data-category="${o.id}" 
                class="cat-btn flex-shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${a?"cat-btn-active bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-black shadow-md shadow-orange-500/30":"bg-[#18181c] text-zinc-300 border border-white/[0.08] hover:bg-[#24242a] hover:text-white"}"
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
      ${$e(n)}

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
                <h3 class="text-sm md:text-base font-black text-white">${n.brandTitle}</h3>
                <span class="text-[11px] text-zinc-400">${t?"تم ویژه کریسمس و سال نو · فعال هر سال از ۲۲ نوامبر تا ۵ ژانویه":n.tagline}</span>
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
                <span class="text-zinc-100 font-bold mr-1">${g(n.workingHours)}</span>
              </div>
            </div>

            <div class="flex items-start gap-2">
              ${m.location}
              <div>
                <span class="text-zinc-400 font-normal">آدرس:</span>
                <span class="text-zinc-100 font-bold mr-1">${g(n.address)}</span>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>

    <!-- Floating Sticky Order Tray Bar (Responsive Mobile/Desktop) -->
    <div 
      id="floating-tray-bar" 
      class="${r>0?"":"hidden"} fixed bottom-20 md:bottom-6 inset-x-4 md:inset-x-auto md:left-6 max-w-sm md:w-80 z-40 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black px-4 py-2.5 rounded-2xl shadow-2xl flex items-center justify-between cursor-pointer animate-pulse-glow"
    >
      <div class="flex items-center gap-2">
        <span class="text-base">📋</span>
        <div class="flex flex-col text-right leading-tight">
          <span class="text-xs font-black">سفارش شما: <span id="floating-tray-count">${g(r)}</span> قلم</span>
          <span id="floating-tray-total" class="text-[10px] font-bold opacity-90">${U()>0?y(U()):""}</span>
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
        <a href="${n.instagramUrl||P.instagramUrl||"https://instagram.com/atishfood"}" target="_blank" rel="noopener noreferrer" class="contact-nav-item contact-nav-instagram" aria-label="اینستاگرام آتیش">
          ${m.instagram}<span>اینستاگرام</span>
        </a>
        <a href="tel:${n.phone}" class="contact-nav-item contact-nav-call" aria-label="تماس با آتیش">
          ${m.phone}<span>تماس</span>
        </a>
        <a href="${n.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="contact-nav-item contact-nav-snapp" aria-label="اسنپ‌فود">
          ${m.scooter}<span>اسنپ‌فود</span>
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
          ${t?`<span class="xmas-mascot-hat">${ae}</span>`:""}
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
          ${A.map((o,a)=>`
            <button 
              data-layer="${a}" 
              class="anatomy-tab-btn p-1.5 rounded-xl border text-center text-xs font-bold transition ${a===S?"bg-amber-500/20 border-amber-500 text-amber-300":"bg-white/[0.04] border-white/[0.08] text-zinc-400 hover:text-white"}"
            >
              <div class="text-sm mb-0.5">${o.icon}</div>
              <div class="truncate text-[9px]">لایه ${g(a+1)}</div>
            </button>
          `).join("")}
        </div>

        <!-- Layer Details Box -->
        <div id="anatomy-details-box" class="bg-[#1c1c22] border border-amber-500/20 rounded-xl p-3.5 mb-4">
          <div class="flex items-center gap-2 mb-1.5">
            <span id="anatomy-icon" class="text-xl">${A[S].icon}</span>
            <h3 id="anatomy-title" class="text-sm font-black text-amber-400">${A[S].title}</h3>
          </div>
          <p id="anatomy-desc" class="text-xs text-zinc-300 leading-relaxed font-light">
            ${A[S].desc}
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
  `,Ee(),Z()}function le(){const e=G(),n=document.getElementById("header-tray-badge");n&&(n.textContent=g(e),n.classList.toggle("hidden",e===0));const s=document.getElementById("floating-tray-bar"),r=document.getElementById("floating-tray-count"),i=document.getElementById("floating-tray-total"),t=U();s&&r&&(r.textContent=g(e),i&&(i.textContent=t>0?y(t):""),s.classList.toggle("hidden",e===0));const o=document.getElementById("atish-mascot-greeting");o&&(e>0?o.style.bottom="calc(140px + env(safe-area-inset-bottom, 0px))":o.style.bottom="");const a=document.getElementById("nav-tray-badge");a&&(a.textContent=g(e),a.classList.toggle("hidden",e===0)),$.items?.forEach(l=>{const d=document.getElementById(`card-tray-count-${l.id}`);if(d){const c=de(l);c>0?(d.textContent=g(c),d.classList.remove("hidden"),d.classList.add("flex")):(d.classList.add("hidden"),d.classList.remove("flex"))}})}function N(e){const n=document.getElementById("toast-notification"),s=document.getElementById("toast-text");!n||!s||(s.textContent=e,n.classList.remove("opacity-0","-translate-y-4"),n.classList.add("opacity-100","translate-y-0"),setTimeout(()=>{n.classList.add("opacity-0","-translate-y-4"),n.classList.remove("opacity-100","translate-y-0")},2200))}function Ee(){const e=document.getElementById("toggle-search-btn"),n=document.getElementById("search-container"),s=document.getElementById("menu-search-input"),r=document.getElementById("clear-search-btn"),i=document.getElementById("desktop-search-input"),t=document.getElementById("clear-desktop-search-btn");function o(p,I=!1){if(E=p,i&&(i.value=p,t&&t.classList.toggle("hidden",p.length===0)),s&&(s.value=p,r&&r.classList.toggle("hidden",p.length===0)),Z(),I&&p.length>0){const v=document.getElementById("categories-bar");if(v){const B=v.getBoundingClientRect();(B.top>250||B.bottom<0)&&v.scrollIntoView({behavior:"smooth",block:"start"})}}}function a(){o("",!1)}e&&n&&e.addEventListener("click",()=>{if(O=!O,n.classList.toggle("hidden",!O),O&&s){s.focus();const p=document.getElementById("categories-bar");p&&p.scrollIntoView({behavior:"smooth",block:"start"})}}),i&&i.addEventListener("input",p=>{o(p.target.value.trim(),!0)}),s&&s.addEventListener("input",p=>{o(p.target.value.trim(),!0)}),r&&r.addEventListener("click",()=>a()),t&&t.addEventListener("click",()=>a());const l=document.querySelectorAll(".cat-btn");l.forEach(p=>{p.addEventListener("click",()=>{l.forEach(v=>{v.className="cat-btn flex-shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 bg-[#18181c] text-zinc-300 border border-white/[0.08] hover:bg-[#24242a] hover:text-white"}),p.className="cat-btn cat-btn-active flex-shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-black shadow-md shadow-orange-500/30",E&&a(),K=p.dataset.category;const I=document.getElementById(`sec-${K}`);if(I){const B=document.body.getBoundingClientRect().top,j=I.getBoundingClientRect().top-B;window.scrollTo({top:j-120,behavior:"smooth"})}})});const d=document.getElementById("open-tray-btn"),c=document.getElementById("floating-tray-bar"),b=document.getElementById("tray-modal"),f=()=>{H(),b?.classList.remove("hidden")};d?.addEventListener("click",f),c?.addEventListener("click",f),setInterval(()=>{const p=document.getElementById("restaurant-status-badge"),I=document.getElementById("restaurant-status-text"),v=document.getElementById("restaurant-status-dot"),B=document.getElementById("header-status-dot");if(p&&I&&v){const C=oe();p.className=`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${C.badgeClass}`,p.title=C.tooltip,v.className=`w-1.5 h-1.5 rounded-full ${C.dotClass}`,I.textContent=C.text,B&&(B.className=`w-2 h-2 rounded-full ${C.dotClass} flex-shrink-0`,B.title=C.text)}},3e4);const u=document.getElementById("atish-mascot-greeting"),x=document.getElementById("mascot-speech-bubble"),z=document.getElementById("close-mascot-bubble-btn");if(u&&x){const p=x.querySelector("span"),I=X.isActive?["سلام! زمستون و کریسمستون گرم و دلچسب 🎄🔥","پیتزاهای داغ آتیش تو هوای سرد می‌چسبه ❄️🍕","برای سفارش گرم تلفنی یا اسنپ‌فود در خدمتیم 🎅🛵"]:["سلام! خوش اومدید 🔥","منوی تازه و داغ آتیش رو ببینید 🍕","برای سفارش تلفنی یا اسنپ‌فود در خدمتیم 🛵"],v=[],B=j=>{x.style.opacity="0",x.style.transform="scale(0.85)",setTimeout(()=>{p&&(p.textContent=j),x.style.opacity="1",x.style.transform="scale(1)"},200)};v.push(setTimeout(()=>{B(I[1])},4500)),v.push(setTimeout(()=>{B(I[2])},9e3));const C=()=>{v.forEach(j=>clearTimeout(j)),u.classList.add("mascot-leaving"),setTimeout(()=>{u.remove()},700)};v.push(setTimeout(()=>{C()},14500)),z?.addEventListener("click",j=>{j.stopPropagation(),C()}),u.addEventListener("click",C)}window.addEventListener("offline",()=>{document.getElementById("atish-mascot-greeting")?.remove()}),b?.addEventListener("click",p=>{p.target===b&&b.classList.add("hidden")});const L=document.getElementById("btn-open-anatomy"),w=document.getElementById("anatomy-modal"),W=document.getElementById("close-anatomy-btn");L?.addEventListener("click",()=>{w?.classList.remove("hidden")}),W?.addEventListener("click",()=>{w?.classList.add("hidden")}),w?.addEventListener("click",p=>{p.target===w&&w.classList.add("hidden")}),document.querySelectorAll(".anatomy-tab-btn").forEach(p=>{p.addEventListener("click",()=>{S=parseInt(p.dataset.layer,10),document.querySelectorAll(".anatomy-tab-btn").forEach((I,v)=>{I.className=`anatomy-tab-btn p-1.5 rounded-xl border text-center text-xs font-bold transition ${v===S?"bg-amber-500/20 border-amber-500 text-amber-300":"bg-white/[0.04] border-white/[0.08] text-zinc-400 hover:text-white"}`}),document.getElementById("anatomy-icon").textContent=A[S].icon,document.getElementById("anatomy-title").textContent=A[S].title,document.getElementById("anatomy-desc").textContent=A[S].desc})}),document.getElementById("anatomy-add-btn")?.addEventListener("click",()=>{Q("b-7"),w?.classList.add("hidden"),N("آتیش برگر به لیست اضافه شد")});const F=document.getElementById("item-modal");F?.addEventListener("click",p=>{p.target===F&&F.classList.add("hidden")}),document.getElementById("nav-menu-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),document.querySelectorAll(".delivery-chip-btn").forEach(p=>{p.addEventListener("click",()=>{J(p.dataset.id)})}),document.querySelectorAll(".delivery-pin-group").forEach(p=>{p.addEventListener("click",()=>{J(p.dataset.id)})}),document.querySelectorAll("#delivery-map-text-labels text").forEach(p=>{p.addEventListener("click",()=>{J(p.dataset.id)})});const k=document.querySelector("header"),T=()=>{k&&document.documentElement.style.setProperty("--header-height",`${Math.ceil(k.getBoundingClientRect().height)}px`)};T(),k&&typeof ResizeObserver<"u"&&new ResizeObserver(T).observe(k),window.addEventListener("resize",T,{passive:!0})}let D={};function de(e){if(!e)return 0;let n=h[e.id]||0;return e.shapes&&e.shapes.forEach(s=>{n+=h[`${e.id}:${s.id}`]||0}),n}function Y(e){if(!e)return null;if(e.includes(":")){const[s,r]=e.split(":"),i=$.items.find(o=>o.id===s);if(!i)return null;const t=i.shapes?.find(o=>o.id===r)||i.shapes?.[0];return{key:e,id:i.id,title:`${i.title} (${t?.name||"کلاسیک"})`,image:t?.image||i.image,ingredients:t?.id==="heart"?"خمیر پیتزا طرح قلبی، "+(i.ingredients||""):i.ingredients,placeholderIcon:"🍕",price:t?.price||i.price}}const n=$.items.find(s=>s.id===e);return n?{key:e,id:n.id,title:n.title,image:n.image,ingredients:n.ingredients,placeholderIcon:n.placeholderIcon,price:n.price}:null}function ce(e){const n=document.getElementById("tray-modal");if(!n||n.classList.contains("hidden"))return!1;const s=document.getElementById(`tray-item-qty-${e}`);if(!s)return!1;const r=Y(e);if(!r)return!1;const i=h[e]||0,t=r.price?Number(r.price):0,o=G(),a=U();s.textContent=g(i);const l=document.getElementById(`tray-item-subtotal-${e}`);l&&(t>0?l.innerHTML=`
        <span class="text-[11px] font-black text-amber-400 whitespace-nowrap">${y(t*i)}</span>
        ${i>1?`<span class="text-[9px] sm:text-[10px] text-zinc-400 whitespace-nowrap leading-tight">(${y(t)} هر عدد)</span>`:""}
      `:l.innerHTML=`<span class="text-[10px] text-zinc-400 font-light truncate max-w-[120px] block">${r.ingredients||"آتیش"}</span>`);const d=document.getElementById("tray-header-totals");d&&(d.textContent=`${g(o)} قلم غذا${a>0?` · ${y(a)}`:""}`);const c=document.getElementById("tray-total-card");c&&(c.className=`${a>0?"flex":"hidden"} mx-3 my-2 p-3 rounded-2xl bg-[#1b1b22] border border-amber-500/25 items-center justify-between shadow-md`);const b=document.getElementById("tray-total-card-count");b&&(b.textContent=`${g(o)} قلم غذا`);const f=document.getElementById("tray-total-card-price");return f&&(f.textContent=y(a)),!0}function Q(e){h[e]=(h[e]||0)+1,_();const n=document.getElementById("tray-modal");n&&!n.classList.contains("hidden")&&(ce(e)||H())}function Le(e){if(!h[e])return;if(h[e]-=1,h[e]<=0){delete h[e],_(),H();return}_(),ce(e)||H()}function Be(e){delete h[e],_(),H()}function Ce(){h={},_(),H()}function ze(){const e=Object.keys(h);let n=`📋 پیش‌فاکتور اقلام سفارش - رستوران آتیش:

`,s=0;return e.forEach((r,i)=>{const t=Y(r);if(t){const o=h[r],a=t.price?Number(t.price):0,l=a*o;s+=l;const d=a>0?` (${y(l)})`:"";n+=`${g(i+1)}. ${t.title} × ${g(o)}${d}
`}}),s>0&&(n+=`
💰 جمع کل سفارش: ${y(s)}
`),n+=`
📍 آدرس: خیابان دولت تهران، محله دروس، روبه‌روی بانک ملت بین کوچه خرداد و معتمدی، پلاک ۱۰۰
`,n+=`📞 تلفن سفارش مستقیم: ۰۲۱-۲۲۵۶۱۹۴۹
`,n+="🛵 سفارش آنلاین در اسنپ‌فود: https://snappfood.ir/restaurant/menu/پیتزا_آتیش-r-p44gzx/",n}function H(){const e=document.getElementById("tray-modal-box"),n=$?.restaurant||P;if(!e)return;const s=Object.keys(h),r=G();if(s.length===0){e.innerHTML=`
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
    `,document.getElementById("close-empty-tray-btn")?.addEventListener("click",()=>{document.getElementById("tray-modal")?.classList.add("hidden")});return}const i=U();e.innerHTML=`
    <!-- Modal Header -->
    <div class="p-4 border-b border-white/[0.08] flex items-center justify-between bg-[#18181c]">
      <div class="flex items-center gap-2">
        <span class="text-xl">📋</span>
        <div>
          <h2 class="text-sm font-black text-white">لیست سفارش شما</h2>
          <span id="tray-header-totals" class="text-[11px] text-amber-400 font-bold">${g(r)} قلم غذا${i>0?` · ${y(i)}`:""}</span>
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
      ${s.map(t=>{const o=Y(t);if(!o)return"";const a=h[t],l=M(o.image),d=o.price?Number(o.price):0;return`
          <div class="flex items-center justify-between p-2.5 rounded-xl bg-[#202026] border border-white/[0.06]">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-10 h-10 rounded-lg overflow-hidden bg-black/40 flex-shrink-0 border border-white/[0.08]">
                <img src="${l}" alt="${o.title}" class="w-full h-full object-cover" onerror="this.src='/images/atish-burger.jpg'" />
              </div>
              <div class="text-right min-w-0">
                <h4 class="text-xs font-bold text-white truncate">${o.title}</h4>
                <div id="tray-item-subtotal-${t}" class="flex flex-col sm:flex-row sm:items-center items-start gap-0.5 sm:gap-1.5 mt-0.5">
                  ${d>0?`
                    <span class="text-[11px] font-black text-amber-400 whitespace-nowrap">
                      ${y(d*a)}
                    </span>
                    ${a>1?`<span class="text-[9px] sm:text-[10px] text-zinc-400 whitespace-nowrap leading-tight">(${y(d)} هر عدد)</span>`:""}
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
                  ${g(a)}
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
    <div id="tray-total-card" class="${i>0?"flex":"hidden"} mx-3 my-2 p-3 rounded-2xl bg-[#1c1c22] border border-amber-500/30 items-center justify-between shadow-md">
      <div class="flex items-center gap-2">
        <span class="text-base">💳</span>
        <div>
          <span class="text-xs font-black text-white block">مجموع مبلغ سفارش:</span>
          <span id="tray-total-card-count" class="text-[10px] text-zinc-400 font-light">${g(r)} قلم غذا</span>
        </div>
      </div>
      <div class="text-left">
        <span id="tray-total-card-price" class="text-sm sm:text-base font-black text-amber-400">${y(i)}</span>
      </div>
    </div>

    <!-- Action Buttons: Solid grounded dark footer with no shifting borders -->
    <div class="p-3 mt-auto bg-[#131317] border-t border-white/[0.06] flex flex-col gap-2">
      <div class="grid grid-cols-2 gap-2">
        <a 
          href="tel:${n.phone}"
          class="py-2.5 px-2 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/25 active:scale-95 transition whitespace-nowrap"
        >
          ${m.phone}
          <span>تماس و سفارش</span>
        </a>

        <a 
          href="${n.snappfoodUrl}" 
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
  `,document.getElementById("close-tray-btn")?.addEventListener("click",()=>{document.getElementById("tray-modal")?.classList.add("hidden")}),e.querySelectorAll("button[data-action]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation(),o.preventDefault();const a=t.dataset.action,l=t.dataset.id;a==="increase"&&Q(l),a==="decrease"&&Le(l),a==="delete"&&Be(l)})}),document.getElementById("btn-copy-order")?.addEventListener("click",()=>{navigator.clipboard?.writeText(ze()).then(()=>{N("متن سفارش کپی شد")})}),document.getElementById("btn-clear-tray")?.addEventListener("click",()=>{Ce()})}function pe(e){return e?e.startsWith("./")?e.slice(1):e.startsWith("/")?e:"/"+e:""}function M(e){const n=pe(e);if(!n)return"";const s=n.split("/").pop();return s&&s!=="logo.webp"?`/images/thumbs/${s.replace(/\.(jpg|jpeg|png)$/i,".webp")}`:n}function ee(e,n){if(!e)return;D[e.id]=n;const s=e.shapes?.find(a=>a.id===n)||e.shapes?.[0];if(!s)return;const r=document.getElementById(`card-img-${e.id}`);r&&(r.style.opacity="0.3",setTimeout(()=>{r.src=M(s.image),r.style.opacity="1"},120));const i=document.getElementById(`card-badge-${e.id}`);if(i){const a=s.badge||e.badge||"";i.textContent=a,i.className=a?"bg-black/90 text-amber-300 border border-amber-500/30 text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-lg shadow-sm whitespace-nowrap":"hidden"}const t=document.getElementById(`card-btn-text-${e.id}`);t&&(t.textContent=`افزودن ${s.shortName||s.name}`);const o=document.getElementById(`card-price-${e.id}`);if(o){const a=s.price||e.price;a&&(o.textContent=y(a))}e.shapes?.forEach(a=>{const l=document.getElementById(`card-dot-${e.id}-${a.id}`);l&&(l.className=`h-1.5 rounded-full transition-all duration-300 ${a.id===n?"bg-amber-400 w-4 shadow":"bg-white/40 w-1.5"}`)})}function Se(e){const n=document.getElementById("item-modal"),s=document.getElementById("item-modal-box");if(!n||!s)return;const r=e.shapes&&e.shapes.length>1;let i=r?D[e.id]||"normal":null,t=r?e.shapes.find(d=>d.id===i)||e.shapes[0]:null;const o=t?t.image:e.image,a=M(o),l=t?.price||e.price;if(s.innerHTML=`
    <!-- Modal Photo Container with Touch Swipe and Arrow Controls -->
    <div class="relative w-full h-64 bg-gradient-to-b from-[#24242c] to-[#141417] overflow-hidden flex items-center justify-center select-none" id="modal-photo-container">
      <img 
        id="modal-main-img"
        src="${a}" 
        data-thumb="${a}"
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

      ${r?`
        <!-- Swipe Dots Indicator -->
        <div class="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5 z-20 pointer-events-none">
          ${e.shapes.map(d=>`
            <span 
              data-dot-shape="${d.id}"
              class="h-2 rounded-full transition-all duration-300 ${d.id===i?"bg-amber-400 w-5 shadow":"bg-white/40 w-2"}"
            ></span>
          `).join("")}
        </div>
      `:""}
    </div>

    <div class="p-4 text-right">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
        <h3 class="text-base sm:text-lg font-black text-white" id="modal-title-text">${e.title}</h3>
        <div class="flex items-center gap-1.5 flex-shrink-0">
          ${l?`
            <span id="modal-price-badge" class="text-xs sm:text-sm font-black text-amber-400 bg-amber-500/10 border border-amber-500/25 px-2.5 py-1 rounded-xl whitespace-nowrap">
              ${y(l)}
            </span>
          `:""}
          ${e.tag?`<span class="text-[10px] font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">${e.tag}</span>`:""}
        </div>
      </div>

      ${r?`
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
            ${e.shapes.map(d=>{const c=d.id===i;return`
                <button 
                  type="button" 
                  data-modal-shape-btn="${d.id}"
                  class="py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center border transition-all ${c?"bg-amber-500 text-black border-amber-400 shadow-lg":"bg-[#222228] text-zinc-300 border-white/[0.08] hover:text-white hover:bg-white/[0.08]"}"
                >
                  <span>${d.name}</span>
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
            ${r?`افزودن به لیست سفارش (${t.name})`:"افزودن به لیست سفارش"}
          </span>
        </button>
      </div>
    </div>
  `,n.classList.remove("hidden"),r&&e.shapes.forEach(d=>{const c=new Image;c.src=M(d.image)}),document.getElementById("close-item-modal-btn")?.addEventListener("click",()=>{n.classList.add("hidden")}),r){const d=u=>{i=u,D[e.id]=u,t=e.shapes.find(k=>k.id===u)||e.shapes[0];const x=document.getElementById("modal-main-img"),z=M(t.image);x&&(x.style.opacity="0.5",setTimeout(()=>{x.src=z,x.style.opacity="1"},50));const L=document.getElementById("modal-badge");if(L){const k=t.badge||e.badge||"";L.textContent=k,L.className=k?"bg-black/85 text-amber-300 border border-amber-500/30 text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap":"hidden"}document.querySelectorAll("[data-dot-shape]").forEach(k=>{const T=k.dataset.dotShape===u;k.className=`h-2 rounded-full transition-all duration-300 ${T?"bg-amber-400 w-5 shadow":"bg-white/40 w-2"}`}),document.querySelectorAll("[data-modal-shape-btn]").forEach(k=>{const T=k.dataset.modalShapeBtn===u;k.className=`py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 border transition-all ${T?"bg-amber-500 text-black border-amber-400 shadow-lg":"bg-[#222228] text-zinc-300 border-white/[0.08] hover:text-white hover:bg-white/[0.08]"}`});const w=document.getElementById("modal-btn-label");w&&(w.textContent=`افزودن به لیست سفارش (${t.name})`);const W=t.price||e.price,F=document.getElementById("modal-price-badge");F&&W&&(F.textContent=y(W)),ee(e,u)},c=()=>{const x=(e.shapes.findIndex(z=>z.id===i)+1)%e.shapes.length;d(e.shapes[x].id)};document.querySelectorAll("[data-modal-shape-btn]").forEach(u=>{u.addEventListener("click",x=>{x.stopPropagation(),d(u.dataset.modalShapeBtn)})});let b=0;const f=document.getElementById("modal-photo-container");f?.addEventListener("touchstart",u=>{b=u.changedTouches[0].screenX},{passive:!0}),f?.addEventListener("touchend",u=>{const x=u.changedTouches[0].screenX;Math.abs(x-b)>40&&c()},{passive:!0})}document.getElementById("modal-add-tray-btn")?.addEventListener("click",()=>{let d=e.id,c=e.title;r&&t&&(d=`${e.id}:${t.id}`,c=`${e.title} (${t.name})`),Q(d),n.classList.add("hidden"),N(`${c} به لیست اضافه شد`)})}function Z(){const e=document.getElementById("menu-container");if(!e||!$)return;const n=$.categories||[];let s=$.items||[];if(E){const r=V(E);if(s=s.filter(i=>{const t=V(i.title).includes(r),o=i.ingredients&&V(i.ingredients).includes(r),a=n.find(d=>d.id===i.categoryId),l=a&&V(a.name+" "+(a.title||"")).includes(r);return t||o||l}),s.length===0){e.innerHTML=`
        <div class="flex flex-col items-center justify-center py-16 text-center text-zinc-400 glass-card rounded-2xl p-6">
          <span class="text-5xl mb-3">🔍</span>
          <p class="text-base font-black text-white">غذایی مطابق «${te(E)}» پیدا نشد!</p>
          <p class="text-xs text-zinc-400 mt-1 mb-4">می‌توانید کلمه دیگری مانند «پیتزا»، «برگر»، «پپرونی» یا «سوخاری» را جستجو فرمایید.</p>
          <button id="reset-search-btn" class="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black text-xs font-black hover:opacity-90 transition shadow-md">
            نمایش کل منو
          </button>
        </div>
      `,document.getElementById("reset-search-btn")?.addEventListener("click",()=>{E="";const i=document.getElementById("desktop-search-input"),t=document.getElementById("menu-search-input"),o=document.getElementById("clear-search-btn"),a=document.getElementById("clear-desktop-search-btn");i&&(i.value=""),t&&(t.value=""),o&&o.classList.add("hidden"),a&&a.classList.add("hidden"),Z()});return}e.innerHTML=`
      <div class="flex items-center justify-between mb-4 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs">
        <div class="flex items-center gap-2 text-amber-300 font-bold">
          <span>🔍</span>
          <span>نتایج جستجو برای: «${te(E)}»</span>
          <span class="bg-amber-500 text-black font-black text-[10px] px-2 py-0.5 rounded-full mr-1">
            ${g(s.length)} غذا
          </span>
        </div>
        <button id="reset-search-btn-top" class="text-zinc-400 hover:text-white text-[11px] underline">
          پاک کردن جستجو ✕
        </button>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        ${s.map((i,t)=>ne(i,t<4)).join("")}
      </div>
    `,document.getElementById("reset-search-btn-top")?.addEventListener("click",()=>{E="";const i=document.getElementById("desktop-search-input"),t=document.getElementById("menu-search-input"),o=document.getElementById("clear-search-btn"),a=document.getElementById("clear-desktop-search-btn");i&&(i.value=""),t&&(t.value=""),o&&o.classList.add("hidden"),a&&a.classList.add("hidden"),Z()}),se();return}e.innerHTML=n.map((r,i)=>{const t=s.filter(o=>o.categoryId===r.id);return t.length===0?"":`
      <section class="mb-10 scroll-mt-28" id="sec-${r.id}">
        <!-- Section Header -->
        <div class="flex items-center justify-between mb-4 pb-2.5 border-b border-white/[0.08]">
          <div class="flex flex-col text-right">
            <h2 class="text-base sm:text-lg md:text-xl font-black text-white flex items-center gap-2">
              <span>${r.icon}</span>
              <span>${r.title||r.name}</span>
            </h2>
            ${r.subtitle?`<span class="text-xs text-zinc-400 font-light mt-0.5">${r.subtitle}</span>`:""}
          </div>
          <span class="bg-[#18181c] text-amber-400 border border-white/[0.08] text-[11px] font-black px-3 py-1 rounded-full flex-shrink-0">
            ${g(t.length)} غذا
          </span>
        </div>

        <!-- Food Grid (Responsive: 2 cols on mobile, 3 on tablet, 4 on desktop) -->
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          ${t.map((o,a)=>{const l=i===0&&a<4;return ne(o,l)}).join("")}
        </div>
      </section>
    `}).join(""),se()}function ne(e,n=!1){const s=de(e),r=e.shapes&&e.shapes.length>1,i=D[e.id]||"normal",t=r?e.shapes.find(b=>b.id===i)||e.shapes[0]:null,o=pe(t?t.image:e.image),a=M(t?t.image:e.image),l=t?.badge||e.badge,d=!!e.isChefRecommendation,c=n?'loading="eager" fetchpriority="high"':'loading="lazy"';return`
    <article 
      data-id="${e.id}" 
      class="food-card glass-card rounded-2xl overflow-hidden shadow-sm flex flex-col group transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1 hover:shadow-xl cursor-pointer text-right ${d?"border-amber-500/40 ring-1 ring-amber-500/25 shadow-amber-950/20":""}"
    >
      <!-- Food Image Container -->
      <div 
        class="compact-photo-frame relative w-full bg-[#1e1e24] overflow-hidden flex items-center justify-center select-none"
        data-photo-container="${e.id}"
      >
        ${a?`
          <img 
            id="card-img-${e.id}"
            src="${a}" 
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
          ${d?`
            <span class="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-[9px] md:text-[10px] px-2 py-0.5 rounded-lg shadow-md flex items-center gap-1 whitespace-nowrap">
              <span>⭐</span>
              <span>پیشنهاد سرآشپز</span>
            </span>
          `:""}
          <span 
            id="card-badge-${e.id}"
            class="${l?"":"hidden"} bg-black/90 text-amber-300 border border-amber-500/30 text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-lg shadow-sm whitespace-nowrap"
          >
            ${l||""}
          </span>
        </div>

        <div 
          id="card-tray-count-${e.id}" 
          class="${s>0?"flex":"hidden"} absolute top-2 left-2 bg-amber-500 text-black font-black text-[10px] md:text-xs w-5 h-5 md:w-6 md:h-6 rounded-full items-center justify-center shadow z-10 pointer-events-none"
        >
          ${g(s)}
        </div>

        ${r?`
          <!-- Minimal Dots Indicator showing available photo shapes -->
          <div class="absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-1.5 z-10 pointer-events-none">
            ${e.shapes.map(b=>`
              <span 
                id="card-dot-${e.id}-${b.id}"
                class="h-1.5 rounded-full transition-all duration-300 ${b.id===i?"bg-amber-400 w-4 shadow":"bg-white/40 w-1.5"}"
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
              ${y(e.price)}
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
              ${r?`افزودن ${t.shortName||t.name}`:"افزودن به لیست سفارش"}
            </span>
          </button>
        </div>
      </div>
    </article>
  `}function se(){document.querySelectorAll(".food-card").forEach(e=>{const n=e.dataset.id,s=$.items.find(t=>t.id===n);if(!s)return;let r=!1;if(e.addEventListener("click",t=>{if(r){r=!1;return}t.target.closest('button[data-action="add-tray"]')||t.target.closest("a")||Se(s)}),s.shapes&&s.shapes.length>1){let t=0,o=0;const a=e.querySelector(`[data-photo-container="${s.id}"]`);a?.addEventListener("touchstart",d=>{t=d.changedTouches[0].screenX,o=d.changedTouches[0].screenY,r=!1},{passive:!0}),a?.addEventListener("touchend",d=>{const c=d.changedTouches[0].screenX,b=d.changedTouches[0].screenY,f=c-t,u=b-o;if(Math.abs(f)>30&&Math.abs(f)>Math.abs(u)){r=!0;const z=(D[s.id]||"normal")==="normal"?"heart":"normal";ee(s,z),setTimeout(()=>{r=!1},200)}},{passive:!0});let l=!1;a?.addEventListener("mousedown",d=>{l=!0,t=d.screenX,r=!1}),a?.addEventListener("mouseup",d=>{if(!l)return;l=!1;const c=d.screenX;if(Math.abs(c-t)>30){r=!0;const f=(D[s.id]||"normal")==="normal"?"heart":"normal";ee(s,f),setTimeout(()=>{r=!1},200)}}),a?.addEventListener("mouseleave",()=>{l=!1})}e.querySelector('button[data-action="add-tray"]')?.addEventListener("click",t=>{t.stopPropagation();let o=n,a=s.title;if(s.shapes&&s.shapes.length>1){const l=D[s.id]||"normal",d=s.shapes.find(c=>c.id===l)||s.shapes[0];o=`${s.id}:${l}`,a=`${s.title} (${d.name})`}Q(o),N(`${a} به لیست اضافه شد`)})})}function Me(){if("serviceWorker"in navigator&&window.location.protocol.startsWith("http")&&(navigator.serviceWorker.addEventListener("controllerchange",()=>{window._swReloading||(window._swReloading=!0,window.location.reload())}),window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(c=>{c.update()}).catch(c=>{console.log("SW registration error:",c)})})),window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)return;const n=/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()),s=document.getElementById("btn-install-pwa"),r=document.getElementById("pwa-install-banner"),i=document.getElementById("pwa-banner-install-btn"),t=document.getElementById("pwa-banner-close-btn"),o=document.getElementById("ios-install-modal"),a=document.getElementById("close-ios-modal-btn"),l=document.getElementById("confirm-ios-modal-btn");n&&(s?.classList.remove("hidden"),s?.classList.add("flex"),r?.classList.remove("hidden")),window.addEventListener("beforeinstallprompt",c=>{c.preventDefault(),R=c,s?.classList.remove("hidden"),s?.classList.add("flex"),r?.classList.remove("hidden")});const d=async()=>{if(n){o?.classList.remove("hidden");return}if(R){R.prompt();const{outcome:c}=await R.userChoice;c==="accepted"&&(s?.classList.add("hidden"),r?.classList.add("hidden"),N("اپلیکیشن با موفقیت نصب شد")),R=null}else N("برای نصب، از منوی مرورگر گزینه Add to Home Screen را بزنید.")};s?.addEventListener("click",d),i?.addEventListener("click",d),t?.addEventListener("click",()=>{r?.classList.add("hidden")}),a?.addEventListener("click",()=>{o?.classList.add("hidden")}),l?.addEventListener("click",()=>{o?.classList.add("hidden")}),o?.addEventListener("click",c=>{c.target===o&&o.classList.add("hidden")})}function Te(){if(typeof window>"u")return;const e=[];($.items||[]).forEach(i=>{i.image&&e.push(M(i.image)),i.shapes&&i.shapes.forEach(t=>{t.image&&e.push(M(t.image))})});const n=[...new Set(e)];let s=0;function r(){if(s>=n.length)return;const i=n.slice(s,s+4);s+=4,i.forEach(t=>{const o=new Image;o.decoding="async",o.src=t}),s<n.length&&("requestIdleCallback"in window?requestIdleCallback(r,{timeout:1e3}):setTimeout(r,200))}"requestIdleCallback"in window?requestIdleCallback(r,{timeout:1500}):setTimeout(r,350)}Ie();le();Me();Te();
