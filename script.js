document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const activityTypeFilter = document.getElementById("activityTypeFilter");
    const costFilter = document.getElementById("costFilter");
    const paxFilter = document.getElementById("paxFilter");
    const durationFilter = document.getElementById("durationFilter");
    const activityCards = document.querySelectorAll(".activity-card");

    function filterActivities() {
        const searchText = searchInput.value.toLowerCase();
        const selectedType = activityTypeFilter.value;
        const selectedCost = costFilter.value;
        const selectedPax = paxFilter.value;
        const selectedDuration = durationFilter.value;

        activityCards.forEach((card) => {
            const type = card.getAttribute("data-type");
            const cost = card.getAttribute("data-cost");
            const pax = card.getAttribute("data-pax");
            const duration = card.getAttribute("data-duration");

            // Check if the card matches the filters
            const matchesSearch = card.textContent.toLowerCase().includes(searchText);
            const matchesType = !selectedType || type === selectedType;
            const matchesCost = !selectedCost || cost === selectedCost;
            const matchesPax = !selectedPax || pax === selectedPax;
            const matchesDuration = !selectedDuration || duration === selectedDuration;

            // Show or hide the card based on filters
            if (matchesSearch && matchesType && matchesCost && matchesPax && matchesDuration) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    document.getElementById('resetFilters').addEventListener('click', () => {
        // Reset all select elements
        document.getElementById('activityTypeFilter').value = '';
        document.getElementById('costFilter').value = '';
        document.getElementById('paxFilter').value = '';
        document.getElementById('durationFilter').value = '';
    
        // Reset the search input
        document.getElementById('searchInput').value = '';
    
        // Optionally, trigger an update to show all activity cards
        updateActivityCards();
    });
    
    function updateActivityCards() {
        const cards = document.querySelectorAll('.activity-card');
        cards.forEach(card => {
            card.style.display = 'block'; // Show all cards
        });
    }
    

    // Add event listeners
    searchInput.addEventListener("input", filterActivities);
    activityTypeFilter.addEventListener("change", filterActivities);
    costFilter.addEventListener("change", filterActivities);
    paxFilter.addEventListener("change", filterActivities);
    durationFilter.addEventListener("change", filterActivities);
});
