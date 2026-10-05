(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll reveal
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".reveal, .reveal-up").forEach((el) => io.observe(el));

  // Hero elements animate on load without waiting for scroll
  requestAnimationFrame(() => {
    document.querySelectorAll(".hero .reveal, .hero .reveal-up").forEach((el) => el.classList.add("in"));
  });

  // Nav border + scroll progress
  const nav = document.querySelector(".nav");
  const root = document.documentElement;
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 24);
    const max = root.scrollHeight - window.innerHeight;
    root.style.setProperty("--p", max > 0 ? (y / max).toFixed(4) : 0);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Cursor spotlight + card glow
  if (!reduce && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener(
      "mousemove",
      (e) => {
        root.style.setProperty("--mx", e.clientX + "px");
        root.style.setProperty("--my", e.clientY + "px");
      },
      { passive: true }
    );
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--cx", e.clientX - r.left + "px");
        card.style.setProperty("--cy", e.clientY - r.top + "px");
      });
    });
  }

  // Count-up stats
  const counters = document.querySelectorAll(".stat-num");
  const cio = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseFloat(el.dataset.count);
        const dec = parseInt(el.dataset.decimals || "0", 10);
        const suffix = el.dataset.suffix || "";
        const prefix = el.dataset.prefix || "";
        const dur = reduce ? 0 : 1400;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / (dur || 1));
          const ease = 1 - Math.pow(1 - t, 4);
          el.textContent = prefix + (target * ease).toFixed(dec).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        cio.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => cio.observe(c));

  // Project slider
  const slider = document.getElementById("slider");
  if (slider) {
    const btns = document.querySelectorAll(".slider-btn");
    const step = () => (slider.querySelector(".card")?.getBoundingClientRect().width || 440) + 16;
    btns.forEach((b) =>
      b.addEventListener("click", () => slider.scrollBy({ left: step() * Number(b.dataset.dir), behavior: "smooth" }))
    );
    const sync = () => {
      const max = slider.scrollWidth - slider.clientWidth - 2;
      btns[0].disabled = slider.scrollLeft <= 2;
      btns[1].disabled = slider.scrollLeft >= max;
    };
    slider.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    sync();
  }

  // Toronto clock
  const clock = document.getElementById("clock");
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const tickClock = () => (clock.textContent = fmt.format(new Date()) + " EST");
  tickClock();
  setInterval(tickClock, 1000);

  document.getElementById("year").textContent = new Date().getFullYear();
})();
