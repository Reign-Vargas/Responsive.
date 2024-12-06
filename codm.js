document.addEventListener('DOMContentLoaded', () => {
    // Get all weapon cards
    const weaponCards = document.querySelectorAll('.weapon-card');

    // Add hover effect animation for each weapon card
    weaponCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.1)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });
});