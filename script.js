// Collapsible sections functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all section headers
    const sectionHeaders = document.querySelectorAll('.section-header');

    // Load saved collapse states from localStorage
    const savedStates = JSON.parse(localStorage.getItem('sectionStates') || '{}');

    // Initialize each section
    sectionHeaders.forEach((header, index) => {
        const section = header.parentElement;
        const content = header.nextElementSibling;
        const sectionName = header.textContent.trim();

        // Set initial state (default to expanded)
        const isCollapsed = savedStates[sectionName] === true;

        if (isCollapsed) {
            section.classList.add('collapsed');
            content.style.maxHeight = '0';
            content.style.opacity = '0';
        } else {
            section.classList.remove('collapsed');
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = '1';
        }

        // Make header clickable
        header.style.cursor = 'pointer';

        // Add click handler
        header.addEventListener('click', function() {
            const isCurrentlyCollapsed = section.classList.contains('collapsed');

            if (isCurrentlyCollapsed) {
                // Expand
                section.classList.remove('collapsed');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = '1';
                savedStates[sectionName] = false;
            } else {
                // Collapse
                section.classList.add('collapsed');
                content.style.maxHeight = '0';
                content.style.opacity = '0';
                savedStates[sectionName] = true;
            }

            // Save state to localStorage
            localStorage.setItem('sectionStates', JSON.stringify(savedStates));
        });

        // Handle window resize to recalculate max-height
        window.addEventListener('resize', function() {
            if (!section.classList.contains('collapsed')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});
