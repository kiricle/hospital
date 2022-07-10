export function findCurrentLink() {
  const currentPlace = `./${location.pathname.split('/')[2]}`
  const link = document.querySelector(`a[href="${currentPlace}"]`);
  link.closest('.links-list__item').classList.add('links-list__item_active');
}