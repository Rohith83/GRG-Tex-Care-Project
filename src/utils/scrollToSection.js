export function scrollToSection(id) {
  const element = document.getElementById(id);

  if (!element) return;

  const header = document.querySelector('header');
  const headerHeight = header?.getBoundingClientRect().height || 64;

  const extraGap = 12;

  const elementTop =
    element.getBoundingClientRect().top +
    window.scrollY;

  const targetPosition =
    elementTop - headerHeight - extraGap;

  window.scrollTo({
    top: Math.max(0, targetPosition),
    behavior: 'smooth',
  });
}