//  =====service carte princing=======
document.addEventListener('DOMContentLoaded', function () {
    // Toggle entre À la carte et Forfaits
    const alaCarteBtn = document.getElementById('alaCarteBtn');
    const forfaitBtn = document.getElementById('forfaitBtn');
    const alaCartePricing = document.getElementById('alaCartePricing');
    const forfaitPricing = document.getElementById('forfaitPricing');

    forfaitBtn.addEventListener('click', function () {
        alaCarteBtn.classList.remove('active');
        forfaitBtn.classList.add('active');
        alaCartePricing.style.display = 'none';
        forfaitPricing.style.display = 'flex';
    });

    alaCarteBtn.addEventListener('click', function () {
        forfaitBtn.classList.remove('active');
        alaCarteBtn.classList.add('active');
        forfaitPricing.style.display = 'none';
        alaCartePricing.style.display = 'flex';
    });

    // Animation des cartes au survol
    const cards = document.querySelectorAll('.pricing-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    // Fonctionnalité FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function () {
            const isActive = item.classList.contains('active');

            // Fermer tous les autres items FAQ
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });

            // Ouvrir l'item cliqué s'il n'était pas actif
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Animation des boutons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px)';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });
});