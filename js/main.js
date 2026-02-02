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

    // suave y elegante
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

  // ✅ Solo escape para cerrar modal (NO Enter)
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // ====== PRODUCTOS (ejemplo) ======
  const products = [
    { id: 1, title: "Gucci GG Supreme Sneaker", price: "$390.000 CLP", state: "Disponible",
      img: "img/instagram/zapatillas gucci mujer{.PNG",
      desc: "Estado: Excelente condición • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en metros 🚇", sizes: ["37.5"]
    },
    { id: 2, title: "MCM Visetos Platform Sneakers Pink", price: "$260.000", state: "Disponible",
      img: "img/instagram/zapatillas burberri/Captura1.PNG",
      desc: "• Estado: Excelente condición • Para más información: contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas: en estaciones de metro 🚇 • Envíos: a todo Chile vía Starken 🚚 • Política: no aceptamos devoluciones ni cambios 🚨", sizes: ["37"]
    },
    { id: 3, title: "MCM Visetos Leather Tote / Shopper Pink", price: "$330.000", state: "Agotado",
      img: "img/instagram/cartera burrberry/1.PNG",
      desc: "• Estado: 10/10 Excelente condición Para más información: contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas: en estaciones de metro 🚇 • Envíos: a todo Chile (vía Starken) 🚚 • Política: no aceptamos devoluciones ni cambios 🚨", sizes: ["Mediana"]
    },
    { id: 4, title: "Chalas: Gucci Tobogán Jumbo GG Plataforma con monograma clásico", price: "$370.00", state: "Disponible",
      img: "img/instagram/chalas gucci/1.PNG",
      desc: "• Retail: +$550.000 💎 • Estado: 10/10 Excelente condición • Para más información contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en metros 🚇 • Envíos a todo Chile (vía Starken) 🚚 • No aceptamos devoluciones ni cambios 🚨", sizes: ["38"]
    },
    { id: 5, title: "Gucci Script Belt – Gucci Signature Leather", price: "$200.000", state: "Disponible",
      img: "img/instagram/cinturon gucci cafe/Captura.PNG",
      desc: "• Estado: 10/10 • Para más información: contáctanos al privado ✅ • Métodos de pago: transferencias o efectivo 💵 • Entregas en metros: 🚇 • Envíos a todo Chile: vía Starken 🚚 • No aceptamos devoluciones ni cambios: 🚨", sizes: ["100 cm"]
    },
    { id: 6, title: "Lentes de sol Gucci GG 2225/S HOMBRES Modelo: GG 2225/S", price: "$129.990", state: "Disponible",
      img: "img/instagram/lentes gucci hombre/Captura.PNG",
      desc: "• Color: Negro con franja verde/roja • Medidas: 63□14 – 130 • Hechos en Italia 🇮🇹 • Precio: $129.990💰 • Estado: 9/10 📩 Para más información: contáctanos al privado ✅ 💵 Métodos de pago: transferencias o efectivo 🚇 Entregas en metros 🚚 Envíos a todo Chile (vía Starken) 🚨 No aceptamos devoluciones ni cambios", sizes: ["M"]
    },
    { id: 7, title: "Lentes de sol Gucci Bamboo Cat Eye", price: "$100.000", state: "Disponible",
      img: "img/instagram/loentes gucci mujer/Captura.PNG",
      desc: "• Estado: 10/10 📩 Para más información: contáctanos al privado ✅ 💵 Métodos de pago: transferencias o efectivo 🚇 Entregas en metros 🚚 Envíos a todo Chile (vía Starken) 🚨 No aceptamos devoluciones ni cambios", sizes: ["S"]
    },
    { id: 8, title: "Zapatillas: Dolce & Gabbana Low Black / White", price: "$330.00", state: "Disponible",
      img: "img/instagram/dolce negra dylan/Captura.PNG",
      desc: "• Retail: $480.000 (con boleta) 🧾 • Estado: 9/10 Excelente condición 🔥 Incluyen boleta original Dolce & Gabbana 🔥 Diseño clásico y elegante 🔥 Stock limitado 📩 Para más información, contáctanos al privado ✅ 💳 Métodos de pago: transferencia o efectivo 📍 Entregas en metro 🚚 Envíos a todo Chile (vía Starken) ❌ No aceptamos devoluciones ni cambios", sizes: ["41"]
    },
  ];

  const grid = document.getElementById("productGrid");
  if (grid) {
    grid.innerHTML = products.map(p => `
      <article class="card" data-id="${p.id}">
        <div class="card-img" style="background-image:url('${p.img}')"></div>
        <div class="card-info">
          <h3 class="card-title">${p.title}</h3>
          <div class="card-price">
            <span class="price">${p.price}</span>
            <span class="badge">${p.state}</span>
          </div>
        </div>
      </article>
    `).join("");

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

    modalImage.style.backgroundImage = `url('${p.img}')`;
    modalTitle.textContent = p.title;
    modalPrice.textContent = p.price;
    modalDesc.textContent = p.desc;
    modalState.textContent = p.state;

    modalSizes.innerHTML = (p.sizes || ["U"]).map(s => `<span class="size">${s}</span>`).join("");
  }

  function closeModal(){
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }

  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);
  if (modalClose) modalClose.addEventListener("click", closeModal);
})();
