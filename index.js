
  let lastScroll = 0;
  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
      header.classList.add("-translate-y-full");
    } else {
      header.classList.remove("-translate-y-full");
    }

    lastScroll = currentScroll;
  });
  const btn = document.getElementById("langBtn");
  const menu = document.getElementById("langMenu");
  const current = document.getElementById("currentLang");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  function setLang(lang) {
    current.textContent = lang;
    menu.classList.add("hidden");
  }

  document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.add("hidden");
    }
  });


  
window.addEventListener("DOMContentLoaded", () => {
  const nickname = localStorage.getItem("nickname");
  const email = localStorage.getItem("email");
  const image = localStorage.getItem("image");

  if (nickname && email && image) {
    document.getElementById("modalNick").textContent = nickname;
    document.getElementById("modalMail").textContent = email;
    document.getElementById("modalImg").src = image;

    document.getElementById("profileModal").classList.remove("hidden");
  }
});

function closeProfileModal() {
  document.getElementById("profileModal").classList.add("hidden");
}




  const nickname = localStorage.getItem("nickname");
  if (nickname) {
    document.getElementById("cardName").textContent = nickname;
  }




  