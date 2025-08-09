// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current dates
    setCurrentDates();
    
    // Set last updated date
    setLastUpdated();
    
    // Add smooth scrolling for navigation links
    setupSmoothScrolling();
    
    // Add progress bar animations
    animateProgressBars();
    
    // Add scroll-triggered animations
    setupScrollAnimations();
    
    // Add interactive features
    setupInteractiveFeatures();
});

// Set current dates in note cards
function setCurrentDates() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const dateElements = document.querySelectorAll('#current-date, #current-date-2, #current-date-3');
    dateElements.forEach(element => {
        element.textContent = currentDate;
    });
}

// Set last updated date in footer
function setLastUpdated() {
    const lastUpdated = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = lastUpdated;
    }
}

// Setup smooth scrolling for navigation
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active navigation state
                updateActiveNavigation(targetId);
            }
        });
    });
}

// Update active navigation state
function updateActiveNavigation(activeId) {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === activeId) {
            link.classList.add('active');
        }
    });
}

// Animate progress bars on scroll
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.style.width;
                
                // Reset width to 0 for animation
                progressBar.style.width = '0%';
                
                // Animate to target width
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 300);
                
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Setup scroll-triggered animations
function setupScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Setup interactive features
function setupInteractiveFeatures() {
    // Add hover effects for cards
    const cards = document.querySelectorAll('.card, .resource-card, .note-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click to copy functionality for code snippets (if any)
    setupCopyToClipboard();
    
    // Add search functionality for notes
    setupSearchFunctionality();
}

// Setup copy to clipboard functionality
function setupCopyToClipboard() {
    const codeBlocks = document.querySelectorAll('code, pre');
    
    codeBlocks.forEach(block => {
        block.addEventListener('click', function() {
            const text = this.textContent;
            
            navigator.clipboard.writeText(text).then(() => {
                showToast('Copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
        
        // Add visual indicator
        block.style.cursor = 'pointer';
        block.title = 'Click to copy';
    });
}

// Setup search functionality for notes
function setupSearchFunctionality() {
    // Create search input
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <input type="text" id="search-notes" placeholder="Search notes..." class="search-input">
        <i class="fas fa-search search-icon"></i>
    `;
    
    const notesSection = document.querySelector('#notes');
    if (notesSection) {
        notesSection.insertBefore(searchContainer, notesSection.querySelector('.notes-container'));
    }
    
    // Add search functionality
    const searchInput = document.getElementById('search-notes');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const noteCards = document.querySelectorAll('.note-card');
            
            noteCards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });
        });
    }
}

// Show toast notification
function showToast(message) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    // Style the toast
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #667eea;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.transform = 'translateY(100px)';
        toast.style.opacity = '0';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 300);
    }, 3000);
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key to close any open modals or search
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('search-notes');
        if (searchInput && document.activeElement === searchInput) {
            searchInput.blur();
            searchInput.value = '';
            // Trigger search to show all notes
            searchInput.dispatchEvent(new Event('input'));
        }
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('search-notes');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// Add CSS for search functionality
const searchStyles = `
    .search-container {
        position: relative;
        margin-bottom: 30px;
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .search-input {
        width: 100%;
        padding: 12px 45px 12px 15px;
        border: 2px solid #e2e8f0;
        border-radius: 25px;
        font-size: 16px;
        transition: all 0.3s ease;
        background: white;
    }
    
    .search-input:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    
    .search-icon {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        color: #9ca3af;
        pointer-events: none;
    }
    
    .search-input:focus + .search-icon {
        color: #667eea;
    }
    
    .toast {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
    }
`;

// Inject search styles
const styleSheet = document.createElement('style');
styleSheet.textContent = searchStyles;
document.head.appendChild(styleSheet);

// Add loading animation for better UX
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add a subtle entrance animation for the header
    const header = document.querySelector('.header');
    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 100);
    }
});

// Add CSS for loading state
const loadingStyles = `
    body:not(.loaded) .main-content {
        opacity: 0;
    }
    
    body.loaded .main-content {
        opacity: 1;
        transition: opacity 0.5s ease;
    }
`;

const loadingStyleSheet = document.createElement('style');
loadingStyleSheet.textContent = loadingStyles;
document.head.appendChild(loadingStyleSheet);
