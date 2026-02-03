(() => {
  const root = document.documentElement;

  const intro = document.getElementById("intro");
  const enterBtn = document.getElementById("enterBtn");
  const enterTextBtn = document.getElementById("enterTextBtn");

  const shop = document.getElementById("shop");
  const topMarquee = document.getElementById("topMarquee");

  // Modal
  const modal = document.getElementById("modal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalClose = document.getElementById("modalClose");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalPrice = document.getElementById("modalPrice");
  const modalDesc = document.getElementById("modalDesc");
  const modalSizes = document.getElementById("modalSizes");
  const modalState = document.getElementById("modalState");

  // ✅ Slider controls
  const modalPrev = document.getElementById("modalPrev");
  const modalNext = document.getElementById("modalNext");
  const modalDots = document.getElementById("modalDots");

  let modalImgs = [];
  let modalIdx = 0;

  // 1) Glow global siguiendo mouse
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    root.style.setProperty("--mouse-x", `${x}%`);
    root.style.setProperty("--mouse-y", `${y}%`);
  }, { passive: true });

  // 2) Logo “volando” con mouse (solo en intro)
  let kick = 0;
  window.addEventListener("mousemove", (e) => {
    if (!enterBtn || intro.classList.contains("is-hidden")) return;

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;

    const rotY = dx * 10;
    const rotX = -dy * 8;

    enterBtn.style.transform =
      `perspective(900px) rotateX(${rotX * 0.7}deg) rotateY(${rotY * 0.7}deg) translateY(${kick}px)`;
  }, { passive: true });

  // ✅ Entrar SOLO por click (logo o ENTER)
  function enterSite(){
    if (!intro || intro.classList.contains("is-hidden")) return;

    intro.classList.add("is-hidden");
    intro.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");

    topMarquee.classList.add("is-visible");
    topMarquee.setAttribute("aria-hidden", "false");

    shop.classList.add("is-visible");
    shop.setAttribute("aria-hidden", "false");
  }

  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      kick = -6;
      setTimeout(() => (kick = 0), 120);
      enterSite();
    });
  }

  if (enterTextBtn) {
    enterTextBtn.addEventListener("click", () => {
      enterSite();
    });
  }

  // ✅ Solo escape para cerrar modal
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // ====== TUS PRODUCTOS ======
  const products = [
    {
  id: 1,
  title: "Gucci GG Supreme Sneaker",
  price: "$390.000 CLP",
  state: "Disponible",

  images: [
    "img/instagram/zapatillas gucci con plata/IMG_4316.jpg",
    "img/instagram/zapatillas gucci con plata/IMG_4317.jpg",
    "img/instagram/zapatillas gucci con plata/IMG_4318.jpg",
    "img/instagram/zapatillas gucci con plata/IMG_4319.jpg",
    "img/instagram/zapatillas gucci con plata/IMG_4320.jpg",
    "img/instagram/zapatillas gucci con plata/IMG_4321.jpg",
    "img/instagram/zapatillas gucci con plata/IMG_4322.jpg",
    "img/instagram/zapatillas gucci con plata/IMG_4323.jpg",
    "img/instagram/zapatillas gucci con plata/IMG_4324.jpg",
    "img/instagram/zapatillas gucci con plata/IMG_4325.jpg",
    "img/instagram/zapatillas gucci con plata/IMG_4326.jpg",
    "img/instagram/zapatillas gucci con plata/IMG_4327.jpg",
    "img/instagram/zapatillas gucci con plata/IMG_4329.jpg",
    "img/instagram/zapatillas gucci con plata/IMG_4330.jpg",
    "img/instagram/zapatillas gucci con plata/IMG_4331.jpg",
    "img/instagram/zapatillas gucci con plata/IMG_4332.jpg",
    "img/instagram/zapatillas gucci con plata/IMG_4333.jpg",
    "img/instagram/zapatillas gucci con plata/IMG_4334.jpg",
    "img/instagram/zapatillas gucci con plata/IMG_4335.jpg",
    "img/instagram/zapatillas gucci con plata/IMG_4336.jpg"
  ],

  desc: "Estado: Excelente condición • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en metros 🚇",
  sizes: ["37.5"]
},


{
  id: 2,
  title: "MCM Visetos Platform Sneakers Pink",
  price: "$260.000",
  state: "Disponible",

  images: [
    "img/instagram/zapatillas burberri/IMG_4337.jpg",
    "img/instagram/zapatillas burberri/IMG_4343.jpg",
    "img/instagram/zapatillas burberri/IMG_4344.jpg",
    "img/instagram/zapatillas burberri/IMG_4345.jpg",
    "img/instagram/zapatillas burberri/IMG_4346.jpg",
    "img/instagram/zapatillas burberri/IMG_4347.jpg"
  ],

  desc: "Estado: Excelente condición • Para más información: contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇",
  sizes: ["37"]
},







{
  id: 3,
  title: "MCM Visetos Leather Tote / Shopper Pink",
  price: "$330.000",
  state: "Agotado",

  // ✅ Galería completa (cartera burberry)
  images: [
    "img/instagram/cartera burrberry/IMG_4380.jpg",
    "img/instagram/cartera burrberry/IMG_4381.jpg",
    "img/instagram/cartera burrberry/IMG_4382.jpg",
    "img/instagram/cartera burrberry/IMG_4383.jpg",
    "img/instagram/cartera burrberry/IMG_4384.jpg",
    "img/instagram/cartera burrberry/IMG_4385.jpg",
    "img/instagram/cartera burrberry/IMG_4386.jpg",
    "img/instagram/cartera burrberry/IMG_4387.jpg",
    "img/instagram/cartera burrberry/IMG_4388.jpg",
    "img/instagram/cartera burrberry/IMG_4389.jpg",
    "img/instagram/cartera burrberry/IMG_4390.jpg"
  ],

  desc: "Estado: 10/10 Excelente condición • Para más información: contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • Envíos a todo Chile vía Starken 🚚 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["media"]
},



{
  id: 4,
  title: "Cinturón Gucci Café",
  price: "$370.000", // cambia si quieres
  state: "Disponible",

  // ✅ Galería completa (cinturón gucci café)
  images: [
    "img/instagram/cinturon gucci cafe/IMG_4496.jpg",
    "img/instagram/cinturon gucci cafe/IMG_4497.jpg",
    "img/instagram/cinturon gucci cafe/IMG_4498.jpg",
    "img/instagram/cinturon gucci cafe/IMG_4499.jpg",
    "img/instagram/cinturon gucci cafe/IMG_4500.jpg"
  ],

  desc: "Retail: +$550.000 💎 • Estado: 10/10 Excelente condición • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • Envíos a todo Chile vía Starken 🚚 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["U"]
},






{
  id: 5,
  title: "Gucci Script Belt – Gucci Signature Leather",
  price: "$200.000", // cambia si quieres
  state: "Disponible",

  // ✅ Galería completa (cinturón gg cuero)
  images: [
    "img/instagram/cinturon gg cuero/IMG_4501.jpg",
    "img/instagram/cinturon gg cuero/IMG_4502.jpg",
    "img/instagram/cinturon gg cuero/IMG_4503.jpg",
    "img/instagram/cinturon gg cuero/IMG_4504.jpg",
    "img/instagram/cinturon gg cuero/IMG_4505.jpg",
    "img/instagram/cinturon gg cuero/IMG_4506.jpg",
    "img/instagram/cinturon gg cuero/IMG_4507.jpg",
    "img/instagram/cinturon gg cuero/IMG_4508.jpg",
    "img/instagram/cinturon gg cuero/IMG_4509.jpg"
  ],

  desc: "Estado: 10/10 • Para más información: contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • Envíos a todo Chile vía Starken 🚚 • Política: no aceptamos devoluciones ni cambios 🚨",
  sizes: ["U"]
},








    // ✅ EJEMPLO: aquí puedes poner 5 fotos usando "images"
{
  id: 6,
  title: "Lentes de sol Gucci GG 2225/S HOMBRES Modelo: GG 2225/S",
  price: "$129.990",
  state: "Disponible",

  // ✅ Galería completa (lentes gucci hombre)
  images: [
    "img/instagram/lentes gucci hombre/IMG_5463.jpg",
    "img/instagram/lentes gucci hombre/IMG_5464.jpg",
    "img/instagram/lentes gucci hombre/IMG_5465.jpg",
    "img/instagram/lentes gucci hombre/IMG_5466.jpg",
    "img/instagram/lentes gucci hombre/IMG_5467.jpg",
    "img/instagram/lentes gucci hombre/IMG_5468.jpg",
    "img/instagram/lentes gucci hombre/IMG_5469.jpg",
    "img/instagram/lentes gucci hombre/IMG_5470.jpg",
    "img/instagram/lentes gucci hombre/IMG_5481.jpg"
  ],

  desc: "Color: Negro con franja verde/roja • Medidas: 63□14 – 130 • Hechos en Italia 🇮🇹 • Estado: Excelente condición • Para más información: contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • Envíos a todo Chile vía Starken 🚚 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["M"]
},









{
  id: 7,
  title: "Lentes de sol Gucci Bamboo Cat Eye",
  price: "$100.000",
  state: "Disponible",

  // ✅ Galería completa (lentes gucci mujer)
  images: [
    "img/instagram/lentes gucci mujer/IMG_5471.jpg",
    "img/instagram/lentes gucci mujer/IMG_5472.jpg",
    "img/instagram/lentes gucci mujer/IMG_5473.jpg",
    "img/instagram/lentes gucci mujer/IMG_5474.jpg",
    "img/instagram/lentes gucci mujer/IMG_5475.jpg",
    "img/instagram/lentes gucci mujer/IMG_5476.jpg",
    "img/instagram/lentes gucci mujer/IMG_5477.jpg",
    "img/instagram/lentes gucci mujer/IMG_5478.jpg",
    "img/instagram/lentes gucci mujer/IMG_5479.jpg",
    "img/instagram/lentes gucci mujer/IMG_5480.jpg"
  ],

  desc: "Estado: 10/10 • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["U"]
},




{
  id: 8,
  title: "Zapatillas: Dolce & Gabbana Low Black / White",
  price: "$330.000",
  state: "Disponible",

  // ✅ Galería correcta (dolce negra dylan)
  images: [
    "img/instagram/dolce negra dylan/IMG_3698.jpg",
    "img/instagram/dolce negra dylan/IMG_3699.jpg",
    "img/instagram/dolce negra dylan/IMG_3700.jpg",
    "img/instagram/dolce negra dylan/IMG_3701.jpg",
    "img/instagram/dolce negra dylan/IMG_3705.jpg",
    "img/instagram/dolce negra dylan/IMG_3706.jpg"
  ],

  desc: "Retail: $480.000 (con boleta) 🧾 • Estado: 9/10 Excelente condición 🔥 • Incluyen boleta original Dolce & Gabbana • Para más información contáctanos al privado ✅ • Métodos de pago: transferencia o efectivo 💵 • Entregas en metro 🚇 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["41"]
},






{
  id: 9,
  title: "Chalas: Gucci Tobogán Jumbo GG Plataforma con monograma clásico",
  price: "$370.000",
  state: "Disponible", // o "Agotado"

  // ✅ Galería completa (chalas gucci)
  images: [
    "img/instagram/chalas gucci/IMG_4348.jpg",
    "img/instagram/chalas gucci/IMG_4349.jpg",
    "img/instagram/chalas gucci/IMG_4350.jpg",
    "img/instagram/chalas gucci/IMG_4351.jpg",
    "img/instagram/chalas gucci/IMG_4352.jpg",
    "img/instagram/chalas gucci/IMG_4355.jpg",
    "img/instagram/chalas gucci/IMG_4356.jpg",
    "img/instagram/chalas gucci/IMG_4357.jpg",
    "img/instagram/chalas gucci/IMG_4359.jpg",
    "img/instagram/chalas gucci/IMG_4360.jpg",
    "img/instagram/chalas gucci/IMG_4362.jpg",
    "img/instagram/chalas gucci/IMG_4364.jpg"
  ],

  desc: "Retail: +$550.000 💎 • Estado: 10/10 Excelente condición • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • Envíos a todo Chile vía Starken 🚚 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["38 europeo"]
},










{
  id: 10,
  title: "Zapatillas: Gucci Ace GG Supreme Bee",
  price: "$380.000",
  state: "AGOTADO",

  // ✅ Galería completa (gucci abeja mujer)
  images: [
    "img/instagram/gucci abeja mujer/IMG_4291.jpg",
    "img/instagram/gucci abeja mujer/IMG_4292.jpg",
    "img/instagram/gucci abeja mujer/IMG_4293.jpg",
    "img/instagram/gucci abeja mujer/IMG_4294.jpg",
    "img/instagram/gucci abeja mujer/IMG_4295.jpg",
    "img/instagram/gucci abeja mujer/IMG_4296.jpg",
    "img/instagram/gucci abeja mujer/IMG_4298.jpg",
    "img/instagram/gucci abeja mujer/IMG_4299.jpg",
    "img/instagram/gucci abeja mujer/IMG_4300.jpg",
    "img/instagram/gucci abeja mujer/IMG_4301.jpg",
    "img/instagram/gucci abeja mujer/IMG_4302.jpg",
    "img/instagram/gucci abeja mujer/IMG_4303.jpg",
    "img/instagram/gucci abeja mujer/IMG_4304.jpg",
    "img/instagram/gucci abeja mujer/IMG_4305.jpg",
    "img/instagram/gucci abeja mujer/IMG_4306.jpg"
  ],

  desc: "Retail aproximado: $800.000 • Estado: Buen estado general • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • Envíos a todo Chile vía Starken 🚚 • No aceptamos devoluciones ni cambios 🚨",
  sizes: [" Talla: 37 EU"]
},






  {
    id: 11,
    title: "Dolce & Gabbana Plataforma",
    price: "$220.000",
    state: "AGOTADO",
  images: [
    "img/instagram/dolce subidas de precio/IMG_4471.jpg",
    "img/instagram/dolce subidas de precio/IMG_4472.jpg",
    "img/instagram/dolce subidas de precio/IMG_4473.jpg",
    "img/instagram/dolce subidas de precio/IMG_4474.jpg",
    "img/instagram/dolce subidas de precio/IMG_4475.jpg",
    "img/instagram/dolce subidas de precio/IMG_4476.jpg",
    "img/instagram/dolce subidas de precio/IMG_4478.jpg",
    "img/instagram/dolce subidas de precio/IMG_4479.jpg"
  ],
    desc: "• Estado: 7/10Buen estado (detalles visibles por uso, ver fotos) • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en metros 🚇 • Envíos a todo Chile (vía Starken) 🚚 • No aceptamos devoluciones ni cambios 🚨",
    sizes: [" Talla: 37.5 europeo"]
  },







{
  id: 12,
  title: "Gucci Ace GG Supreme Bee",
  price: "$280.000",
  state: "AGOTADO",

  images: [
    
    "img/instagram/gucci hombre abejas/IMG_4309.jpg",
    "img/instagram/gucci hombre abejas/IMG_4310.jpg",
    "img/instagram/gucci hombre abejas/IMG_4311.jpg",
    "img/instagram/gucci hombre abejas/IMG_4312.jpg",
    "img/instagram/gucci hombre abejas/IMG_4313.jpg",
    "img/instagram/gucci hombre abejas/IMG_4314.jpg",
    "img/instagram/gucci hombre abejas/IMG_4315.jpg"
  ],

  desc: "Retail aproximado: $800.000 • Estado: 7/10 ⭐ • Made in Italy 🇮🇹 • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["Talla 6 (fit 40–41)"]
},









{
  id: 13,
  title: "Dolce & Gabbana Daymaster Purple / White",
  price: "$340.000",
  state: "AGOTADO",

  images: [
    "img/instagram/dolce rosadas/IMG_4480.jpg",
    "img/instagram/dolce rosadas/IMG_4482.jpg",
    "img/instagram/dolce rosadas/IMG_4483.jpg",
    "img/instagram/dolce rosadas/IMG_4484.jpg",
    "img/instagram/dolce rosadas/IMG_4485.jpg",
    "img/instagram/dolce rosadas/IMG_4486.jpg",
    "img/instagram/dolce rosadas/IMG_4487.jpg",
    "img/instagram/dolce rosadas/IMG_4488.jpg"
  ],

  desc: "Estado: 8/10 • Buen estado general (detalles por uso visibles en fotos) • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["37 europeo"]
},









 {
  id: 14,
  title: "Gucci Re-Web Sneaker Mujer",
  price: "$330.000",
  state: "AGOTADO",

  // ✅ Galería completa (gucci gamusa)
  images: [
    "img/instagram/gucci gamusa/IMG_4610.jpg",
    "img/instagram/gucci gamusa/IMG_4611.jpg",
    "img/instagram/gucci gamusa/IMG_4612.jpg",
    "img/instagram/gucci gamusa/IMG_4613.jpg",
    "img/instagram/gucci gamusa/IMG_4614.jpg",
    "img/instagram/gucci gamusa/IMG_4615.jpg",
    "img/instagram/gucci gamusa/IMG_4616.jpg",
    "img/instagram/gucci gamusa/IMG_4617.jpg",
    "img/instagram/gucci gamusa/IMG_4618.jpg",
    "img/instagram/gucci gamusa/IMG_4619.jpg",
    "img/instagram/gucci gamusa/IMG_4620.jpg"
  ],

  desc: "Estado: Muy buen estado (detalles mínimos por uso visibles en fotos) • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["37 europeo"]
},










{
  id: 15,
  title: "Louis Vuitton LV Trainer Pink & White",
  price: "$900.000",
  state: "AGOTADO",

  // ✅ Galería completa (lv rosadas)
  images: [
    "img/instagram/lv rosadas/IMG_4621.jpg",
    "img/instagram/lv rosadas/IMG_4622.jpg",
    "img/instagram/lv rosadas/IMG_4624.jpg",
    "img/instagram/lv rosadas/IMG_4625.jpg",
    "img/instagram/lv rosadas/IMG_4626.jpg",
    "img/instagram/lv rosadas/IMG_4627.jpg",
    "img/instagram/lv rosadas/IMG_4628.jpg",
    "img/instagram/lv rosadas/IMG_4629.jpg"
  ],

  desc: "Estado: 10/10 • Muy buen estado (detalles mínimos por uso, ver fotos) • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["37.5 europeo"]
},










{
  id: 16,
  title: "Louis Vuitton LV Trainer Low",
  price: "$950.000",
  state: "AGOTADO",

  // ✅ Galería completa (lv negras)
  images: [
    "img/instagram/lv negras/IMG_4630.jpg",
    "img/instagram/lv negras/IMG_4631.jpg",
    "img/instagram/lv negras/IMG_4633.jpg",
    "img/instagram/lv negras/IMG_4634.jpg",
    "img/instagram/lv negras/IMG_4635.jpg"
  ],

  desc: "Estado: 10/10 • Muy buen estado (detalles mínimos por uso, ver fotos) • Fabricación: Made in Italy 🇮🇹 • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["37.5 europeo"]
},







{
  id: 17,
  title: "Dolce & Gabbana Daymaster Sneakers con cristales",
  price: "$1.200.000",
  state: "AGOTADO",

  // ✅ Galería completa (dolce brillos)
  images: [
    "img/instagram/dolce  brillos/IMG_4636.jpg",
    "img/instagram/dolce  brillos/IMG_4637.jpg",
    "img/instagram/dolce  brillos/IMG_4639.jpg",
    "img/instagram/dolce  brillos/IMG_4640.jpg",
    "img/instagram/dolce  brillos/IMG_4641.jpg",
    "img/instagram/dolce  brillos/IMG_4642.jpg"
  ],

  desc: "Para más información: contáctanos por mensaje privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["38 europeo"]
},











{
  id: 18,
  title: "Gucci Cinturón GG Interlocking Web",
  price: "$230.000",
  state: "AGOTADO",

  // ✅ Galería completa (cinturon gucci tela)
  images: [
    "img/instagram/cinturon gucci tela/IMG_4489.jpg",
    "img/instagram/cinturon gucci tela/IMG_4490.jpg",
    "img/instagram/cinturon gucci tela/IMG_4491.jpg",
    "img/instagram/cinturon gucci tela/IMG_4492.jpg",
    "img/instagram/cinturon gucci tela/IMG_4493.jpg",
    "img/instagram/cinturon gucci tela/IMG_4494.jpg",
    "img/instagram/cinturon gucci tela/IMG_4495.jpg"
  ],
  desc: "Estado: 9/10 • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["100 cm"]
},










{
  id: 19,
  title: "Gorra Gucci GG Canvas Baseball Cap – Made in Italy",
  price: "$280.000",
  state: "AGOTADO",

  // ✅ Galería completa (gucci gorro mitico)
  images: [
    "img/instagram/gucci gorro mitico/IMG_4518.jpg",
    "img/instagram/gucci gorro mitico/IMG_4519.jpg",
    "img/instagram/gucci gorro mitico/IMG_4520.jpg",
    "img/instagram/gucci gorro mitico/IMG_4521.jpg",
    "img/instagram/gucci gorro mitico/IMG_4522.jpg",
    "img/instagram/gucci gorro mitico/IMG_4523.jpg",
    "img/instagram/gucci gorro mitico/IMG_4524.jpg"
  ],
  desc: "Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["M"]
},











{
  id: 20,
  title: "Gucci GG Supreme Canvas Baseball Cap",
  price: "$230.000",
  state: "AGOTADO",

  // ✅ Galería completa (gorro gg tela)
  images: [
    "img/instagram/gorro gg tela/IMG_4510.jpg",
    "img/instagram/gorro gg tela/IMG_4511.jpg",
    "img/instagram/gorro gg tela/IMG_4512.jpg",
    "img/instagram/gorro gg tela/IMG_4513.jpg",
    "img/instagram/gorro gg tela/IMG_4514.jpg",
    "img/instagram/gorro gg tela/IMG_4515.jpg",
    "img/instagram/gorro gg tela/IMG_4516.jpg",
    "img/instagram/gorro gg tela/IMG_4517.jpg"
  ],

  desc: "Estado: 10/10 • Material: Lona GG Supreme beige/ébano • Detalle icónico: franja web verde/roja • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["M"]
},








{
  id: 21,
  title: "Gucci Royal Blue ECONYL GG Nylon Cap",
  price: "$380.000",
  state: "AGOTADO",

  // ✅ Galería completa (gorro gg azul)
  images: [
    "img/instagram/gorro gg azul/IMG_4525.jpg",
    "img/instagram/gorro gg azul/IMG_4526.jpg",
    "img/instagram/gorro gg azul/IMG_4527.jpg",
    "img/instagram/gorro gg azul/IMG_4528.jpg",
    "img/instagram/gorro gg azul/IMG_4529.jpg"
  ],

  desc: "Estado: 10/10 • Muy buen estado • Material ECONYL® GG Nylon • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["M"]
},






{
  id: 22,
  title: "Gorro Gucci GG Supreme Tiger Print Baseball Cap (Beige / Ébano)",
  price: "$400.000",
  state: "AGOTADO",

  // ✅ Galería completa (gorro gg leom)
  images: [
    "img/instagram/gorro gg leom/IMG_4533.jpg",
    "img/instagram/gorro gg leom/IMG_4534.jpg",
    "img/instagram/gorro gg leom/IMG_4535.jpg",
    "img/instagram/gorro gg leom/IMG_4536.jpg",
    "img/instagram/gorro gg leom/IMG_4537.jpg",
    "img/instagram/gorro gg leom/IMG_4538.jpg",
    "img/instagram/gorro gg leom/IMG_4539.jpg"
  ],

  desc: "Estado: 10/10 • Muy buen estado • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["L"]
},









{
  id: 23,
  title: "Gucci GG Supreme Baseball Cap Mint Green / Beige",
  price: "$390.000",
  state: "AGOTADO",

  // ✅ Galería completa (gorro celeste)
  images: [
    "img/instagram/gorro celeste/IMG_4541.jpg",
    "img/instagram/gorro celeste/IMG_4542.jpg",
    "img/instagram/gorro celeste/IMG_4543.jpg",
    "img/instagram/gorro celeste/IMG_4544.jpg",
    "img/instagram/gorro celeste/IMG_4545.jpg",
    "img/instagram/gorro celeste/IMG_4546.jpg",
    "img/instagram/gorro celeste/IMG_4547.jpg"
  ],

  desc: "Estado: 10/10 • Muy buen estado • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["M"]
},








{
  id: 24,
  title: "Gucci GG Supreme Track Pants / Jogger GG Supreme Web Stripe",
  price: "$780.000",
  state: "AGOTADO",

  // ✅ Galería completa (pantalon gg)
  images: [
    "img/instagram/pantalkon gg/IMG_4549.jpg",
    "img/instagram/pantalKon gg/IMG_4550.jpg",
    "img/instagram/pantalKon gg/IMG_4551.jpg",
    "img/instagram/pantalKon gg/IMG_4552.jpg",
    "img/instagram/pantalKon gg/IMG_4553.jpg",
    "img/instagram/pantalKon gg/IMG_4554.jpg",
    "img/instagram/pantalKon gg/IMG_4555.jpg",
    "img/instagram/pantalKon gg/IMG_4556.jpg",
    "img/instagram/pantalKon gg/IMG_4557.jpg",
    "img/instagram/pantalKon gg/IMG_4558.jpg",
    "img/instagram/pantalKon gg/IMG_4559.jpg"
  ],

  desc: "Estado: Muy buen estado (ver fotos reales) 🧾 • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["M"]
},





{
  id: 25,
  title: "Dolce & Gabbana Portofino White & Black",
  price: "$350.000",
  state: "Disponible",

  // ✅ Galería completa (dolce blancas)
  images: [
    "img/instagram/dolce blancas/IMG_4561.jpg",
    "img/instagram/dolce blancas/IMG_4562.jpg",
    "img/instagram/dolce blancas/IMG_4563.jpg"
  ],

  desc: "Estado: 10/10 • Muy buen estado • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["8"]
},






{
  id: 26,
  title: "Dolce & Gabbana Portofino “Royals” White / Blue",
  price: "$450.000",
  state: "AGOTADO",

  // ✅ Galería completa (dolce azules)
  images: [
    "img/instagram/dolce azules/IMG_4575.jpg",
    "img/instagram/dolce azules/IMG_4576.jpg",
    "img/instagram/dolce azules/IMG_4577.jpg",
    "img/instagram/dolce azules/IMG_4579.jpg",
    "img/instagram/dolce azules/IMG_4580.jpg",
    "img/instagram/dolce azules/IMG_4581.jpg",
    "img/instagram/dolce azules/IMG_4582.jpg",
    "img/instagram/dolce azules/IMG_4583.jpg",
    "img/instagram/dolce azules/IMG_4584.jpg",
    "img/instagram/dolce azules/IMG_4585.jpg"
  ],

  desc: "Retail aproximado: $1.000.000 • Estado: Excelente condición / Como nuevas 🧾 • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["40"]
},





{
  id: 27,
  title: "Dolce & Gabbana Super King",
  price: "$390.000",
  state: "Disponible",

  // ✅ Galería completa (dolce plateadas)
  images: [
    "img/instagram/dolce plateadas/IMG_4586.jpg",
    "img/instagram/dolce plateadas/IMG_4587.jpg",
    "img/instagram/dolce plateadas/IMG_4588.jpg",
    "img/instagram/dolce plateadas/IMG_4589.jpg",
    "img/instagram/dolce plateadas/IMG_4590.jpg",
    "img/instagram/dolce plateadas/IMG_4591.jpg",
    "img/instagram/dolce plateadas/IMG_4592.jpg",
    "img/instagram/dolce plateadas/IMG_4593.jpg",
    "img/instagram/dolce plateadas/IMG_4594.jpg",
    "img/instagram/dolce plateadas/IMG_4595.jpg"
  ],

  desc: "Estado: 9/10 🧾 • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["41 eur"]
},






{
  id: 28,
  title: "Philipp Plein Black Patent Skull",
  price: "$400.000",
  state: "Disponible",

  // ✅ Galería completa (philipp plein negras)
  images: [
    "img/instagram/philipplein negras/IMG_4596.jpg",
    "img/instagram/philipplein negras/IMG_4597.jpg",
    "img/instagram/philipplein negras/IMG_4598.jpg",
    "img/instagram/philipplein negras/IMG_4599.jpg",
    "img/instagram/philipplein negras/IMG_4601.jpg",
    "img/instagram/philipplein negras/IMG_4602.jpg",
    "img/instagram/philipplein negras/IMG_4603.jpg"
  ],

  desc: "Estado: 8.5/10 • Muy buen estado general (leves marcas propias del uso) 🧾 • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["39 EU (fit 41)"]
},







 {
  id: 29,
  title: "Nike Air Force 1 Low '07 QS Skeleton Halloween Violet (2021)",
  price: "$70.000",
  state: "Disponible",

  // ✅ Galería completa (nike skeleton)
  images: [
    "img/instagram/nike skeleton/IMG_3711.jpg",
    "img/instagram/nike skeleton/IMG_3712.jpg",
    "img/instagram/nike skeleton/IMG_3713.jpg",
    "img/instagram/nike skeleton/IMG_3714.jpg",
    "img/instagram/nike skeleton/IMG_3715.jpg",
    "img/instagram/nike skeleton/IMG_3716.jpg",
    "img/instagram/nike skeleton/IMG_3717.jpg",
    "img/instagram/nike skeleton/IMG_3718.jpg",
    "img/instagram/nike skeleton/IMG_3719.jpg",
    "img/instagram/nike skeleton/IMG_3720.jpg",
    "img/instagram/nike skeleton/IMG_3721.jpg"
  ],

  desc: "Estado: Excelente condición • Edición especial Halloween 2021 🎃 • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en estaciones de metro 🚇 • No aceptamos devoluciones ni cambios 🚨",
  sizes: ["40"]
},





  {
    id: 30,
    title: "disponible para mas",
    price: "$0",
    state: "Disponible",
    images: [
      // AGREGAR FOTOS: "img/instagram/gucci hombres/1.PNG",
    ],
    desc: "Agrega aquí la descripción.",
    sizes: ["U"]
  },




  ];

  const grid = document.getElementById("productGrid");
  if (grid) {
    grid.innerHTML = products.map(p => {
      const st = (p.state || "").toLowerCase();
      const isSoldOut = st.includes("agot");
      const badgeClass = isSoldOut ? "badge is-soldout" : "badge is-available";

      const cover = (p.images && p.images.length) ? p.images[0] : p.img;

      return `
        <article class="card" data-id="${p.id}">
          <div class="card-img" style="background-image:url('${cover}')"></div>
          <div class="card-info">
            <h3 class="card-title">${p.title}</h3>
            <div class="card-price">
              <span class="price">${p.price}</span>
              <span class="${badgeClass}">${p.state}</span>
            </div>
          </div>
        </article>
      `;
    }).join("");

    const cards = grid.querySelectorAll(".card");
    cards.forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        card.style.setProperty("--mouse-x", `${x}%`);
        card.style.setProperty("--mouse-y", `${y}%`);
      }, { passive: true });

      card.addEventListener("mouseleave", () => {
        card.style.setProperty("--mouse-x", `50%`);
        card.style.setProperty("--mouse-y", `50%`);
      });

      card.addEventListener("click", () => {
        const id = Number(card.dataset.id);
        const p = products.find(x => x.id === id);
        if (p) openModal(p);
      });
    });
  }

  function openModal(p){
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    modalTitle.textContent = p.title;
    modalPrice.textContent = p.price;
    modalDesc.textContent = p.desc;
    modalState.textContent = p.state;

    modalSizes.innerHTML = (p.sizes || ["U"]).map(s => `<span class="size">${s}</span>`).join("");

    modalImgs = (p.images && p.images.length) ? p.images.slice() : [p.img].filter(Boolean);
    modalIdx = 0;

    renderDots();
    renderModalImage();
  }

  function renderModalImage(){
    if (!modalImgs.length) return;

    modalImage.style.backgroundImage = `url('${modalImgs[modalIdx]}')`;

    const many = modalImgs.length > 1;
    if (modalPrev) modalPrev.style.display = many ? "grid" : "none";
    if (modalNext) modalNext.style.display = many ? "grid" : "none";
    if (modalDots) modalDots.style.display = many ? "flex" : "none";

    if (modalDots && many){
      [...modalDots.children].forEach((d, i) => {
        d.classList.toggle("is-active", i === modalIdx);
      });
    }
  }

  function renderDots(){
    if (!modalDots) return;

    if (modalImgs.length <= 1){
      modalDots.innerHTML = "";
      return;
    }

    modalDots.innerHTML = modalImgs.map((_, i) => `
      <button class="modal-dot ${i === modalIdx ? "is-active" : ""}" data-i="${i}" aria-label="Imagen ${i+1}"></button>
    `).join("");

    modalDots.querySelectorAll(".modal-dot").forEach(btn => {
      btn.addEventListener("click", () => {
        modalIdx = Number(btn.dataset.i);
        renderModalImage();
      });
    });
  }

  if (modalPrev) modalPrev.addEventListener("click", () => {
    if (modalImgs.length <= 1) return;
    modalIdx = (modalIdx - 1 + modalImgs.length) % modalImgs.length;
    renderModalImage();
  });

  if (modalNext) modalNext.addEventListener("click", () => {
    if (modalImgs.length <= 1) return;
    modalIdx = (modalIdx + 1) % modalImgs.length;
    renderModalImage();
  });

  // Teclado dentro del modal
  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-open")) return;

    if (e.key === "ArrowLeft") {
      if (modalImgs.length <= 1) return;
      modalIdx = (modalIdx - 1 + modalImgs.length) % modalImgs.length;
      renderModalImage();
    }
    if (e.key === "ArrowRight") {
      if (modalImgs.length <= 1) return;
      modalIdx = (modalIdx + 1) % modalImgs.length;
      renderModalImage();
    }
  });

  function closeModal(){
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }

  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);
  if (modalClose) modalClose.addEventListener("click", closeModal);
})();
