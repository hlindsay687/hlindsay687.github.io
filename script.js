/**
 * Dr. Rubin Neurosurgery Website
 * Minimal JavaScript for interactivity
 */

(function() {
  'use strict';

  // DOM Elements
  const header = document.getElementById('header');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuLinks = mobileMenu.querySelectorAll('.mobile-menu__link');
  const faqItems = document.querySelectorAll('.faq-item');
  const contactForm = document.getElementById('contactForm');

  /**
   * Header scroll behavior
   * Adds shadow when scrolled
   */
  function handleHeaderScroll() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  /**
   * Mobile menu toggle
   */
  function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('active');
    
    mobileMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
    mobileMenuBtn.setAttribute('aria-expanded', !isOpen);
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  }

  /**
   * Close mobile menu
   */
  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  /**
   * FAQ accordion toggle
   */
  function toggleFaqItem(event) {
    const button = event.currentTarget;
    const item = button.closest('.faq-item');
    const isOpen = item.classList.contains('active');
    
    // Close all other items
    faqItems.forEach(function(faq) {
      if (faq !== item) {
        faq.classList.remove('active');
        faq.querySelector('.faq-item__question').setAttribute('aria-expanded', 'false');
      }
    });
    
    // Toggle current item
    item.classList.toggle('active');
    button.setAttribute('aria-expanded', !isOpen);
  }

  /**
   * Smooth scroll for anchor links
   */
  function handleSmoothScroll(event) {
    const href = event.currentTarget.getAttribute('href');
    
    if (href.startsWith('#') && href.length > 1) {
      const target = document.querySelector(href);
      
      if (target) {
        event.preventDefault();
        
        // Close mobile menu if open
        closeMobileMenu();
        
        // Calculate offset for fixed header
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  }

  /**
   * Form submission handler
   * Note: This is a placeholder. Connect to actual form handler for production.
   */
  function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.phone) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Show success message (replace with actual form submission)
    alert('Thank you for your inquiry! We will contact you within 1-2 business days.');
    contactForm.reset();
    
    // In production, you would send the data to a server:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // });
  }

  /**
   * Initialize event listeners
   */
  function init() {
    // Header scroll
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll(); // Check initial state
    
    // Mobile menu
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu on link click
    mobileMenuLinks.forEach(function(link) {
      link.addEventListener('click', handleSmoothScroll);
    });
    
    // Mobile menu CTA button
    const mobileCta = mobileMenu.querySelector('.btn--primary');
    if (mobileCta) {
      mobileCta.addEventListener('click', handleSmoothScroll);
    }
    
    // FAQ accordions
    faqItems.forEach(function(item) {
      const button = item.querySelector('.faq-item__question');
      button.addEventListener('click', toggleFaqItem);
    });
    
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(link) {
      link.addEventListener('click', handleSmoothScroll);
    });
    
    // Contact form
    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
      }
    });
    
    // Close mobile menu on resize to desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 768 && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
      }
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
