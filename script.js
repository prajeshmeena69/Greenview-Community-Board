// Global Variables
let isAdminLoggedIn = false;
const ADMIN_PASSWORD = 'greenview2025'; // change to something secure in real deployment

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeCommonFeatures();
    initializePageSpecificFeatures();
});

// Initialize Common Features (used across all pages)
function initializeCommonFeatures() {
    // Admin Panel Toggle
    const adminBtn = document.getElementById('adminBtn');
    const adminPanel = document.getElementById('adminPanel');
    
    if (adminBtn && adminPanel) {
        adminBtn.addEventListener('click', toggleAdminPanel);
    }
    
    // Contact buttons functionality
    const contactBtns = document.querySelectorAll('.contact-btn');
    contactBtns.forEach(btn => {
        btn.addEventListener('click', handleContactClick);
    });
    
    // Phone number click tracking
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            console.log('Calling:', this.href);
            // Analytics hook could go here
        });
    });

    // Service tabs (if present)
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', handleTabSwitch);
    });

    // Contact form (admin)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleNewContactSubmission);
    }
}

// Initialize Page-Specific Features
function initializePageSpecificFeatures() {
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'index':
            initializeHomePage();
            break;
        case 'events':
            initializeEventsPage();
            break;
        case 'marketplace':
            initializeMarketplacePage();
            break;
        case 'contacts':
            initializeContactsPage();
            break;
        default:
            // fallback or shared behavior
            break;
    }
}

// Utility to derive current page from URL
function getCurrentPage() {
    const path = window.location.pathname;
    const file = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    const name = file.split('.')[0];
    return name.toLowerCase();
}

// Admin panel toggle with simple authentication
function toggleAdminPanel() {
    const adminPanel = document.getElementById('adminPanel');
    if (!isAdminLoggedIn) {
        const pwd = prompt('Enter admin password:');
        if (pwd === null) return; // user cancelled
        if (pwd === ADMIN_PASSWORD) {
            isAdminLoggedIn = true;
            showAdminPanel();
        } else {
            alert('Incorrect password.');
        }
    } else {
        // toggle visibility
        if (adminPanel.classList.contains('hidden')) {
            showAdminPanel();
        } else {
            hideAdminPanel();
        }
    }
}

function showAdminPanel() {
    const adminPanel = document.getElementById('adminPanel');
    if (adminPanel) adminPanel.classList.remove('hidden');
}

function hideAdminPanel() {
    const adminPanel = document.getElementById('adminPanel');
    if (adminPanel) adminPanel.classList.add('hidden');
}

// Handle contact button click
function handleContactClick(event) {
    const btn = event.currentTarget;
    // If it is supposed to trigger a call, we can simulate or log
    // If additional behavior needed, extend here.
    const parent = btn.closest('.contact-item');
    if (parent) {
        const phoneLink = parent.querySelector('a[href^="tel:"]');
        if (phoneLink) {
            // On mobile this would open dialer; here we'll just log
            console.log('User clicked call for', phoneLink.href);
        }
    }
}

// Tab switching logic for service providers
function handleTabSwitch(event) {
    const clicked = event.currentTarget;
    const targetTab = clicked.dataset.tab;
    if (!targetTab) return;

    // Deactivate all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));

    // Activate clicked
    clicked.classList.add('active');
    const content = document.getElementById(targetTab);
    if (content) content.classList.add('active');
}

// Handle adding new contact via admin form
function handleNewContactSubmission(event) {
    event.preventDefault();
    if (!isAdminLoggedIn) {
        alert('You must be logged in as admin to add contacts.');
        return;
    }

    const nameInput = document.getElementById('contactName');
    const phoneInput = document.getElementById('contactPhone');
    const emailInput = document.getElementById('contactEmail');
    const categorySelect = document.getElementById('contactCategory');
    const notesTextarea = document.getElementById('contactNotes');

    const name = nameInput?.value.trim();
    const phone = phoneInput?.value.trim();
    const email = emailInput?.value.trim();
    const category = categorySelect?.value;
    const notes = notesTextarea?.value.trim();

    if (!name || !phone || !category) {
        alert('Please fill in required fields: name, phone, and category.');
        return;
    }

    // Build contact item DOM
    const contactItem = document.createElement('div');
    contactItem.className = 'contact-item';

    const infoDiv = document.createElement('div');
    infoDiv.className = 'contact-info';

    const title = document.createElement('h3');
    title.textContent = name;

    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'contact-details';

    const phoneSpan = document.createElement('span');
    phoneSpan.className = 'phone';
    phoneSpan.innerHTML = `📞 <a href="tel:${phone}">${formatPhoneDisplay(phone)}</a>`;
    detailsDiv.appendChild(phoneSpan);

    if (email) {
        const emailSpan = document.createElement('span');
        emailSpan.className = 'email';
        emailSpan.innerHTML = `✉️ ${email}`;
        detailsDiv.appendChild(emailSpan);
    }

    const timingP = document.createElement('p');
    timingP.className = 'timing';
    if (notes) {
        timingP.textContent = notes;
    }

    infoDiv.appendChild(title);
    infoDiv.appendChild(detailsDiv);
    if (notes) infoDiv.appendChild(timingP);

    const callBtn = document.createElement('button');
    callBtn.className = 'contact-btn';
    callBtn.textContent = 'Call Now';
    callBtn.addEventListener('click', handleContactClick);

    contactItem.appendChild(infoDiv);
    contactItem.appendChild(callBtn);

    // Decide insertion point based on category
    if (category === 'management') {
        const container = document.getElementById('managementContacts');
        if (container) container.appendChild(contactItem);
    } else if (['utilities', 'medical', 'delivery'].includes(category)) {
        const tabContent = document.getElementById(category);
        if (tabContent) {
            const list = tabContent.querySelector('.contacts-list');
            if (list) list.appendChild(contactItem);
        }
    } else if (category === 'security' || category === 'maintenance') {
        // Fallback to community management if no dedicated area
        const container = document.getElementById('managementContacts');
        if (container) container.appendChild(contactItem);
    } else if (category === 'emergency') {
        const grid = document.querySelector('.contacts-grid.emergency');
        if (grid) {
            const card = document.createElement('div');
            card.className = 'contact-card urgent';
            const iconDiv = document.createElement('div');
            iconDiv.className = 'contact-icon';
            iconDiv.textContent = 'ℹ️';
            const h3 = document.createElement('h3');
            h3.textContent = name;
            const details = document.createElement('div');
            details.className = 'contact-details';
            const phoneLink = document.createElement('a');
            phoneLink.href = `tel:${phone}`;
            phoneLink.className = 'phone-number';
            phoneLink.textContent = phone;
            details.appendChild(phoneLink);
            if (email) {
                const pEmail = document.createElement('p');
                pEmail.textContent = email;
                details.appendChild(pEmail);
            }
            const pNotes = document.createElement('p');
            pNotes.textContent = notes || '';
            card.appendChild(iconDiv);
            card.appendChild(h3);
            card.appendChild(details);
            if (notes) card.appendChild(pNotes);
            grid.appendChild(card);
        }
    } else {
        // Generic fallback: append to service contacts utilities
        const utilities = document.getElementById('utilities');
        if (utilities) {
            const list = utilities.querySelector('.contacts-list');
            if (list) list.appendChild(contactItem);
        }
    }

    // Clear form
    event.target.reset();
    alert('Contact added successfully.');
}

// Helper to prettify phone display (basic)
function formatPhoneDisplay(raw) {
    // Remove non-digits, then format loosely
    const digits = raw.replace(/\D/g, '');
    if (digits.length === 10) {
        return `+91 ${digits.slice(0,3)}-${digits.slice(3,6)}-${digits.slice(6)}`;
    }
    return raw;
}

// Page-specific stub functions
function initializeHomePage() {
    // e.g., load featured events, welcome banner logic
    console.log('Home page initialized.');
}

function initializeEventsPage() {
    // e.g., filter/sort events, calendar hookup
    console.log('Events page initialized.');
}

function initializeMarketplacePage() {
    // e.g., load listings, search filter binding
    console.log('Marketplace page initialized.');
}

function initializeContactsPage() {
    // Any contacts-page-specific initialization
    console.log('Contacts page initialized.');
}

document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    if (postForm) {
        postForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;
            const category = document.getElementById('category').value;

            console.log(`New Post Created -> Title: ${title}, Description: ${description}, Category: ${category}`);
            alert('Post Submitted Successfully (Demo Mode)');
            postForm.reset();
        });
    }
});