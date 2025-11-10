function openMenu() {
  document.body.classList += "menu--open";
}
function closeMenu() {
  document.body.classList.remove("menu--open");
}

const observer__from__left = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide__from__left');
            entry.target.classList.remove('from__left--hidden');
        }
    });
});

const observer__from__right = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide__from__right');
            entry.target.classList.remove('from__right--hidden');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    ['#landing','#quality','#values','#testimonials','#ending'].forEach(id => {
        const el = document.querySelector(id);
        if (el) observer__from__left.observe(el);
    });

    ['#features','#steps','#pricing','#faqs','footer'].forEach(id => {
        const el = document.querySelector(id);
        if (el) observer__from__right.observe(el);
    });
});
