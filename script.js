// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
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

// Set current dates in note cards (no longer needed with chronological system)
function setCurrentDates() {
    // This function is no longer needed with the new chronological notes system
    // Notes now have their own dates that are set when created
}

// Set last updated date in footer
function setLastUpdated() {
    const now = new Date();
    const lastUpdated = now.toLocaleDateString('en-US', {
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
    const cards = document.querySelectorAll('.card, .resource-card, .note-entry');
    
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
    
    // Setup note form functionality
    setupNoteForm();
    
    // Setup filter functionality
    setupFilterFunctionality();
    
    // Sort notes chronologically
    sortNotesChronologically();
    
    // Initialize existing notes with proper timestamps
    initializeExistingNotes();
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
    // Search functionality is now handled by the HTML form
    const searchInput = document.getElementById('search-notes');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const noteEntries = document.querySelectorAll('.note-entry');
            
            noteEntries.forEach(entry => {
                const text = entry.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    entry.style.display = 'block';
                    entry.style.opacity = '1';
                } else {
                    entry.style.display = 'none';
                    entry.style.opacity = '0';
                }
            });
        });
    }
}

// Setup note form functionality
function setupNoteForm() {
    const noteForm = document.getElementById('note-form');
    if (noteForm) {
        // Set default date to today
        const dateInput = document.getElementById('note-date');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.value = today;
        }
        
        noteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = document.getElementById('note-title').value;
            const date = document.getElementById('note-date').value;
            const content = document.getElementById('note-content').value;
            const tags = document.getElementById('note-tags').value;
            
            if (title && date && content) {
                addNewNote(title, date, content, tags);
                
                // Reset form
                noteForm.reset();
                dateInput.value = today;
                
                showToast('Note added successfully!');
            }
        });
    }
}

// Add new note to the chronological list
function addNewNote(title, date, content, tags) {
    const notesContainer = document.getElementById('chronological-notes');
    if (!notesContainer) return;
    
    // Create timestamp for sorting
    const timestamp = new Date(date).getTime();
    
    // Create note entry
    const noteEntry = document.createElement('div');
    noteEntry.className = 'note-entry';
    noteEntry.setAttribute('data-date', date);
    noteEntry.setAttribute('data-timestamp', timestamp);
    
    // Format date for display
    const displayDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Create note HTML
    noteEntry.innerHTML = `
        <div class="note-header">
            <h4>${title}</h4>
            <span class="note-date">${displayDate}</span>
        </div>
        <div class="note-content">
            <p>${content}</p>
        </div>
        <div class="note-tags">
            ${tags ? tags.split(',').map(tag => `<span class="tag">${tag.trim()}</span>`).join('') : ''}
        </div>
    `;
    
    // Add hover effects
    noteEntry.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    noteEntry.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    // Insert at the beginning (most recent first)
    notesContainer.insertBefore(noteEntry, notesContainer.firstChild);
    
    // Re-sort notes
    sortNotesChronologically();
}

// Sort notes chronologically (newest first)
function sortNotesChronologically() {
    const notesContainer = document.getElementById('chronological-notes');
    if (!notesContainer) return;
    
    const noteEntries = Array.from(notesContainer.querySelectorAll('.note-entry'));
    
    // Sort by timestamp (newest first)
    noteEntries.sort((a, b) => {
        const timestampA = parseInt(a.getAttribute('data-timestamp'));
        const timestampB = parseInt(b.getAttribute('data-timestamp'));
        return timestampB - timestampA;
    });
    
    // Re-append in sorted order
    noteEntries.forEach(entry => {
        notesContainer.appendChild(entry);
    });
}

// Setup filter functionality
function setupFilterFunctionality() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterNotes(filter);
        });
    });
}

// Initialize existing notes with proper timestamps
function initializeExistingNotes() {
    const noteEntries = document.querySelectorAll('.note-entry');
    
    noteEntries.forEach(entry => {
        const dateAttr = entry.getAttribute('data-date');
        if (dateAttr && !entry.hasAttribute('data-timestamp')) {
            const timestamp = new Date(dateAttr).getTime();
            entry.setAttribute('data-timestamp', timestamp);
        }
    });
}

// Filter notes based on selected filter
function filterNotes(filter) {
    const noteEntries = document.querySelectorAll('.note-entry');
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    
    noteEntries.forEach(entry => {
        const noteDate = entry.getAttribute('data-date');
        const noteTimestamp = parseInt(entry.getAttribute('data-timestamp'));
        const noteDateObj = new Date(noteTimestamp);
        
        let show = true;
        
        switch (filter) {
            case 'recent':
                // Show notes from last 7 days
                const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
                show = noteDateObj >= weekAgo;
                break;
            case 'today':
                // Show only today's notes
                show = noteDate === todayStr;
                break;
            case 'week':
                // Show notes from this week (Monday to Sunday)
                const startOfWeek = new Date(today);
                startOfWeek.setDate(today.getDate() - today.getDay() + 1);
                startOfWeek.setHours(0, 0, 0, 0);
                show = noteDateObj >= startOfWeek;
                break;
            case 'month':
                // Show notes from this month
                const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
                show = noteDateObj >= startOfMonth;
                break;
            case 'all':
            default:
                show = true;
                break;
        }
        
        if (show) {
            entry.style.display = 'block';
            entry.style.opacity = '1';
        } else {
            entry.style.display = 'none';
            entry.style.opacity = '0';
        }
    });
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
        margin-bottom: 0;
        max-width: 400px;
        margin-left: 0;
        margin-right: 0;
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
