document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
  const yearEl = document.getElementById("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});

window.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    link.addEventListener("click", e => {
      const url = link.getAttribute("href");
      if(url && !url.startsWith("http") && !url.startsWith("#")) {
        e.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(() => window.location.href = url, 400);
      }
    });
  });
});

const btn = document.getElementById("toggleAchievements");
const section = document.getElementById("achievements");
if(btn && section) {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !expanded);
    section.hidden = expanded;
    btn.textContent = expanded ? "▼ 展開成就" : "▲ 收合成就";
  });
}
