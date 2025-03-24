// Main JavaScript for NGOConnect Website

document.addEventListener('DOMContentLoaded', function() {
    console.log('NGOConnect Website Loaded');
    
    // Initialize search functionality
    initSearch();
    
    // Initialize filter functionality
    initFilters();
    
    // Initialize donation buttons
    initDonateButtons();
});

// Search functionality for NGO Directory
function initSearch() {
    const searchInput = document.querySelector('input[placeholder="Search NGOs..."]');
    if (!searchInput)
