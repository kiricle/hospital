export function findCurrentLink() {
  const activeLink = document.querySelector('[name="activeLink"]');
  document.querySelector(`[href="${activeLink.value}"]`).closest('li').classList.add('links-list__item_active')
}