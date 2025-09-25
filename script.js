  // Small script: update year dynamically
        document.getElementById('year').textContent = new Date().getFullYear();

        // Optional: keyboard accessibility hint (example)
        // Adds a tiny focus outline for keyboard users when navigating via tab
        document.body.addEventListener('keyup', (e) => {
            if (e.key === 'Tab') document.documentElement.style.setProperty('--outline', '2px solid rgba(124,92,255,0.28)');
        }, { once: true });