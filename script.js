const toast = document.querySelector("#toast");
document.querySelector(".demo-grid").addEventListener("click", async event => {
  const button = event.target.closest(".copy");
  if (!button) return;
  try {
    await navigator.clipboard.writeText(button.dataset.code);
    toast.textContent = "CSS copied to clipboard";
  } catch {
    const field = document.createElement("textarea");
    field.value = button.dataset.code;
    document.body.appendChild(field);
    field.select();
    document.execCommand("copy");
    field.remove();
    toast.textContent = "CSS copied to clipboard";
  }
  toast.classList.add("show");
  clearTimeout(window.copyTimer);
  window.copyTimer = setTimeout(() => toast.classList.remove("show"), 1500);
});

document.querySelector("#replay").addEventListener("click", () => {
  const auto = document.querySelector(".auto");
  auto.style.animation = "none";
  void auto.offsetWidth;
  auto.style.animation = "";
});
