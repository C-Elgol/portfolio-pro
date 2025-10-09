// Create floating particles
        function createParticles() {
            const container = document.getElementById('particles-container');
            const particleCount = 15;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random size between 5 and 15px
                const size = Math.random() * 10 + 5;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Random position
                particle.style.left = `${Math.random() * 100}%`;
                
                // Random animation delay
                particle.style.animationDelay = `${Math.random() * 15}s`;
                
                container.appendChild(particle);
            }
        }
        
        // Custom cursor
        document.addEventListener('mousemove', (e) => {
            const cursor = document.querySelector('.cursor-follower');
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        // Initialize animations when page loads
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            
            // Animate skill bars on scroll
            gsap.registerPlugin(ScrollTrigger);
            
            gsap.utils.toArray('.skill-progress').forEach(bar => {
                gsap.fromTo(bar, 
                    { width: '0%' }, 
                    { 
                        width: bar.style.width, 
                        duration: 1.5, 
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: bar,
                            start: 'top 80%',
                            end: 'bottom 20%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });
            
            // Animate project cards on scroll
            gsap.utils.toArray('.project-card').forEach(card => {
                gsap.fromTo(card, 
                    { opacity: 0, y: 50 }, 
                    { 
                        opacity: 1, 
                        y: 0, 
                        duration: 0.8, 
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            end: 'bottom 20%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
    