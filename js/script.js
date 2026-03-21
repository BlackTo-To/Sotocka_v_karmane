// Интерактивность для карточек
document.querySelectorAll('.card, .goodies-block, .referral-card, .other-subjects, .promo-block, .premium-banner, .stats-container').forEach(el => {
    el.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
        console.log('Clicked:', this.innerText.slice(0, 30));
    });
});

// Поддержка клавиши ESC для возврата
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        goBack();
    }
});
