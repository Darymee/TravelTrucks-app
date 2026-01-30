// Calculate header height and keep CSS variable `--header-height` in sync.
export function initHeaderHeight() {
  const docEl = document.documentElement;

  function update() {
    const header = document.querySelector('.header');
    if (!header) return;
    const height = Math.ceil(header.getBoundingClientRect().height);
    docEl.style.setProperty('--header-height', `${height}px`);
  }

  // Initial update
  update();

  // Observe header size changes
  if (window.ResizeObserver) {
    const ro = new ResizeObserver(() => update());
    const header = document.querySelector('.header');
    if (header) ro.observe(header);
  } else {
    window.addEventListener('resize', update);
  }

  // Also update on page show (bfcache) and load
  window.addEventListener('pageshow', update);
  window.addEventListener('load', update);
}

export default initHeaderHeight;
