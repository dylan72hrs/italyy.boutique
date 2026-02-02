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
    { id: 1, title: "GAFAS BLACK LUX", price: "$39.990", state: "Disponible",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200",
      desc: "Modelo premium • Solo información. Consulta disponibilidad y entrega por mensaje.", sizes: ["U"]
    },
    { id: 2, title: "ZAPATILLAS WHITE", price: "$89.990", state: "Disponible",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200",
      desc: "Selección curada • Entrega presencial. Coordinación por Instagram/WhatsApp.", sizes: ["39","40","41","42"]
    },
    { id: 3, title: "BOLSO GOLD EDITION", price: "$149.990", state: "Disponible",
      img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200",
      desc: "Editorial • Material premium. Solo promoción y catálogo.", sizes: ["U"]
    },
    { id: 4, title: "POLERA LUX LOGO", price: "$34.990", state: "Disponible",
      img: "https://images.unsplash.com/photo-1520975958225-2b3b8f1a5d17?q=80&w=1200",
      desc: "Fit cómodo • Info y promoción. Venta solo por mensajes.", sizes: ["S","M","L","XL"]
    },
    { id: 5, title: "CINTURÓN CLASSIC", price: "$59.990", state: "Disponible",
      img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200",
      desc: "Detalles premium • Coordinación por mensaje.", sizes: ["U"]
    },
    { id: 6, title: "CHAQUETA BLACK", price: "$129.990", state: "Disponible",
      img: "https://images.unsplash.com/photo-1520975682071-ae4a31eebde3?q=80&w=1200",
      desc: "Luxury minimal • Solo información.", sizes: ["M","L","XL"]
    },
    { id: 7, title: "RELOJ SILVER", price: "$99.990", state: "Disponible",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200",
      desc: "Modelo elegante • Consulta por mensaje.", sizes: ["U"]
    },
    { id: 8, title: "ZAPATILLAS DARK", price: "$89.990", state: "Disponible",
      img: "https://images.unsplash.com/photo-1528701800489-20be9c1cb46a?q=80&w=1200",
      desc: "Editorial • Solo catálogo.", sizes: ["39","40","41","42","43"]
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
