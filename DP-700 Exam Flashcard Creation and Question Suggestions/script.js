// Flashcard Application JavaScript
class FlashcardApp {
    constructor() {
        this.currentCardIndex = 0;
        this.isFlipped = false;
        this.cardsStudied = new Set();
        this.startTime = Date.now();
        this.sessionTimer = null;
        this.cardOrder = [];
        
        this.initializeElements();
        this.initializeCardOrder();
        this.bindEvents();
        this.updateDisplay();
        this.startSessionTimer();
    }

    initializeElements() {
        // Flashcard elements
        this.flashcard = document.getElementById('flashcard');
        this.questionText = document.getElementById('question-text');
        this.answerText = document.getElementById('answer-text');
        
        // Navigation elements
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.shuffleBtn = document.getElementById('shuffle-btn');
        this.resetBtn = document.getElementById('reset-btn');
        
        // Progress elements
        this.currentCardSpan = document.getElementById('current-card');
        this.totalCardsSpan = document.getElementById('total-cards');
        this.progressPercentage = document.getElementById('progress-percentage');
        this.progressFill = document.getElementById('progress-fill');
        
        // Stats elements
        this.cardsStudiedSpan = document.getElementById('cards-studied');
        this.sessionTimeSpan = document.getElementById('session-time');
    }

    initializeCardOrder() {
        this.cardOrder = Array.from({ length: flashcards.length }, (_, i) => i);
        this.totalCardsSpan.textContent = flashcards.length;
    }

    bindEvents() {
        // Flashcard click to flip
        this.flashcard.addEventListener('click', () => this.flipCard());
        
        // Navigation buttons
        this.prevBtn.addEventListener('click', () => this.previousCard());
        this.nextBtn.addEventListener('click', () => this.nextCard());
        this.shuffleBtn.addEventListener('click', () => this.shuffleCards());
        this.resetBtn.addEventListener('click', () => this.resetProgress());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
        
        // Prevent context menu on flashcard for better mobile experience
        this.flashcard.addEventListener('contextmenu', (e) => e.preventDefault());
    }

    handleKeyPress(event) {
        switch(event.code) {
            case 'Space':
                event.preventDefault();
                this.flipCard();
                break;
            case 'ArrowLeft':
                event.preventDefault();
                this.previousCard();
                break;
            case 'ArrowRight':
                event.preventDefault();
                this.nextCard();
                break;
            case 'KeyR':
                if (event.ctrlKey || event.metaKey) {
                    event.preventDefault();
                    this.resetProgress();
                }
                break;
            case 'KeyS':
                if (event.ctrlKey || event.metaKey) {
                    event.preventDefault();
                    this.shuffleCards();
                }
                break;
        }
    }

    flipCard() {
        this.isFlipped = !this.isFlipped;
        this.flashcard.classList.toggle('flipped', this.isFlipped);
        
        // Add current card to studied set when flipped to answer
        if (this.isFlipped) {
            this.cardsStudied.add(this.currentCardIndex);
            this.updateStats();
        }
        
        // Add subtle haptic feedback for mobile devices
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }

    nextCard() {
        if (this.currentCardIndex < this.cardOrder.length - 1) {
            this.currentCardIndex++;
            this.showCard();
        }
    }

    previousCard() {
        if (this.currentCardIndex > 0) {
            this.currentCardIndex--;
            this.showCard();
        }
    }

    showCard() {
        // Reset flip state
        this.isFlipped = false;
        this.flashcard.classList.remove('flipped');
        
        // Get current card data
        const cardData = flashcards[this.cardOrder[this.currentCardIndex]];
        
        // Update card content
        this.questionText.textContent = cardData.question;
        this.answerText.textContent = cardData.answer;
        
        // Update display
        this.updateDisplay();
        
        // Add slide animation
        this.flashcard.style.animation = 'none';
        this.flashcard.offsetHeight; // Trigger reflow
        this.flashcard.style.animation = 'slideIn 0.3s ease-out';
    }

    shuffleCards() {
        // Fisher-Yates shuffle algorithm
        for (let i = this.cardOrder.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cardOrder[i], this.cardOrder[j]] = [this.cardOrder[j], this.cardOrder[i]];
        }
        
        // Reset to first card in new order
        this.currentCardIndex = 0;
        this.showCard();
        
        // Visual feedback
        this.shuffleBtn.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            this.shuffleBtn.style.transform = '';
        }, 300);
    }

    resetProgress() {
        // Reset all progress
        this.currentCardIndex = 0;
        this.cardsStudied.clear();
        this.startTime = Date.now();
        
        // Reset card order to original
        this.initializeCardOrder();
        
        // Show first card
        this.showCard();
        
        // Update stats
        this.updateStats();
        
        // Visual feedback
        this.resetBtn.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            this.resetBtn.style.transform = '';
        }, 300);
    }

    updateDisplay() {
        // Update card counter
        this.currentCardSpan.textContent = this.currentCardIndex + 1;
        
        // Update progress bar
        const progress = ((this.currentCardIndex + 1) / this.cardOrder.length) * 100;
        this.progressPercentage.textContent = `${Math.round(progress)}%`;
        this.progressFill.style.width = `${progress}%`;
        
        // Update navigation button states
        this.prevBtn.disabled = this.currentCardIndex === 0;
        this.nextBtn.disabled = this.currentCardIndex === this.cardOrder.length - 1;
        
        // Update button text for last card
        if (this.currentCardIndex === this.cardOrder.length - 1) {
            this.nextBtn.innerHTML = `
                Complete
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6L9 17l-5-5"/>
                </svg>
            `;
        } else {
            this.nextBtn.innerHTML = `
                Next
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 18l6-6-6-6"/>
                </svg>
            `;
        }
    }

    updateStats() {
        this.cardsStudiedSpan.textContent = this.cardsStudied.size;
    }

    startSessionTimer() {
        this.sessionTimer = setInterval(() => {
            const elapsed = Date.now() - this.startTime;
            const minutes = Math.floor(elapsed / 60000);
            const seconds = Math.floor((elapsed % 60000) / 1000);
            this.sessionTimeSpan.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    // Method to handle completion
    completeSession() {
        if (this.sessionTimer) {
            clearInterval(this.sessionTimer);
        }
        
        // Show completion message
        const completionTime = this.sessionTimeSpan.textContent;
        const studiedCount = this.cardsStudied.size;
        
        setTimeout(() => {
            alert(`🎉 Congratulations! You've completed the flashcard session!\n\nCards studied: ${studiedCount}/${flashcards.length}\nTime spent: ${completionTime}\n\nGood luck with your DP-700 exam!`);
        }, 500);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if flashcards data is available
    if (typeof flashcards === 'undefined') {
        console.error('Flashcards data not found. Make sure flashcards.js is loaded.');
        return;
    }
    
    // Initialize the flashcard application
    window.flashcardApp = new FlashcardApp();
    
    // Add completion detection
    const originalNextCard = window.flashcardApp.nextCard;
    window.flashcardApp.nextCard = function() {
        originalNextCard.call(this);
        if (this.currentCardIndex === this.cardOrder.length - 1 && this.isFlipped) {
            this.completeSession();
        }
    };
});

// Add touch gesture support for mobile devices
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // Swipe right - previous card
            window.flashcardApp?.previousCard();
        } else {
            // Swipe left - next card
            window.flashcardApp?.nextCard();
        }
    }
}

// Add service worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

