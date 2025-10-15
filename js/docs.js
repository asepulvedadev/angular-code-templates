// Documentation Page JavaScript

// Smooth scrolling for sidebar links
document.addEventListener('DOMContentLoaded', function() {
    initializeSidebarNavigation();
    initializeCodeCopyButtons();
    initializeMobileMenu();
    highlightActiveSection();
});

// Initialize sidebar navigation
function initializeSidebarNavigation() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Scroll to section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerOffset = 100;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize code copy buttons
function initializeCodeCopyButtons() {
    // Copy button functionality is already defined in copyCode function below
    console.log('Code copy buttons initialized');
}

// Copy code to clipboard
function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const codeElement = codeBlock.querySelector('code');
    const code = codeElement.textContent;

    // Copy to clipboard
    navigator.clipboard.writeText(code).then(() => {
        // Change button text temporarily
        const originalHTML = button.innerHTML;
        button.innerHTML = '<span class="copy-icon">✓</span>Copied!';
        button.style.background = '#4caf50';

        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy code:', err);
        alert('Failed to copy code to clipboard');
    });
}

// Initialize mobile menu
function initializeMobileMenu() {
    // Check if we're on mobile
    if (window.innerWidth <= 1024) {
        const sidebar = document.querySelector('.docs-sidebar');
        const sidebarLinks = document.querySelectorAll('.sidebar-link');

        // Close sidebar after clicking a link on mobile
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    // Collapse sidebar on mobile after navigation
                    setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, 100);
                }
            });
        });
    }
}

// Highlight active section based on scroll position
function highlightActiveSection() {
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.doc-section');
        const sidebarLinks = document.querySelectorAll('.sidebar-link');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - 150) {
                currentSection = section.getAttribute('id');
            }
        });

        sidebarLinks.forEach(link => {
            link.classList.remove('active');

            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    });
}

// Table of contents generation (optional - if you want to auto-generate TOC)
function generateTableOfContents() {
    const headings = document.querySelectorAll('.doc-section h2');
    const tocContainer = document.getElementById('tableOfContents');

    if (!tocContainer) return;

    let tocHTML = '<ul>';

    headings.forEach((heading, index) => {
        const id = heading.id || `heading-${index}`;
        heading.id = id;

        tocHTML += `<li><a href="#${id}">${heading.textContent}</a></li>`;
    });

    tocHTML += '</ul>';
    tocContainer.innerHTML = tocHTML;
}

// Search functionality for documentation (optional enhancement)
function searchDocumentation(query) {
    const sections = document.querySelectorAll('.doc-section');
    const searchQuery = query.toLowerCase();

    sections.forEach(section => {
        const sectionText = section.textContent.toLowerCase();

        if (sectionText.includes(searchQuery)) {
            section.style.display = 'block';
            highlightSearchTerm(section, searchQuery);
        } else {
            section.style.display = 'none';
        }
    });
}

// Highlight search terms in documentation
function highlightSearchTerm(element, term) {
    // This is a simplified version - you might want a more robust solution
    const innerHTML = element.innerHTML;
    const regex = new RegExp(term, 'gi');

    element.innerHTML = innerHTML.replace(regex, match => {
        return `<mark style="background-color: rgba(221, 0, 49, 0.3); padding: 2px 4px; border-radius: 2px;">${match}</mark>`;
    });
}

// Print documentation (optional feature)
function printDocumentation() {
    window.print();
}

// Copy command to clipboard (for installation commands)
function copyCommand(command) {
    navigator.clipboard.writeText(command).then(() => {
        console.log('Command copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy command:', err);
    });
}

// Expand/collapse sections (optional feature)
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.classList.toggle('collapsed');
    }
}

// Dark mode toggle (if you want to add this feature)
function toggleDarkMode() {
    document.body.classList.toggle('light-mode');

    const isDarkMode = !document.body.classList.contains('light-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Load dark mode preference
function loadDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode');

    if (darkMode === 'false') {
        document.body.classList.add('light-mode');
    }
}

// Keyboard shortcuts for documentation navigation
document.addEventListener('keydown', function(e) {
    // Press 's' to focus search
    if (e.key === 's' && !e.ctrlKey && !e.metaKey) {
        const searchInput = document.getElementById('docSearch');
        if (searchInput && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
    }

    // Press 'Escape' to clear search
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('docSearch');
        if (searchInput) {
            searchInput.value = '';
            searchDocumentation('');
        }
    }
});

// Scroll to top button (optional)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollToTopBtn');

    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    }
});

// Analytics tracking for documentation sections (optional)
function trackDocSection(sectionName) {
    // If you have analytics setup, track which sections are viewed
    if (typeof gtag !== 'undefined') {
        gtag('event', 'view_doc_section', {
            'section_name': sectionName
        });
    }
}

// Initialize on page load
window.addEventListener('load', function() {
    loadDarkModePreference();

    // Track initial page view
    trackDocSection(window.location.hash || '#getting-started');
});

// Handle anchor links from external pages
if (window.location.hash) {
    setTimeout(() => {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            const headerOffset = 100;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }, 100);
}

// Export functions for global use
window.copyCode = copyCode;
window.printDocumentation = printDocumentation;
window.toggleDarkMode = toggleDarkMode;
window.scrollToTop = scrollToTop;

console.log('Angular Code Templates Documentation - Ready');
