document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            document.body.classList.toggle('overflow-hidden'); // Prevent scrolling when menu is open
        });

        // Close mobile menu when a link is clicked
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                document.body.classList.remove('overflow-hidden');
            });
        });
    }

    // Team Carousel Logic
    const teamMembers = [
        {
            name: 'Wuender Bueno',
            role: 'Especialista em IA & Machine Learning',
            description: 'Apaixonado por Inteligência Artificial e Machine Learning, com foco em desenvolver soluções inovadoras que transformam dados em insights acionáveis. Experiência em modelos preditivos, NLP e visão computacional.',
            image: './assets/wuender.png',
            github: 'https://github.com/WuenderVoidrel',
            linkedin: 'https://www.linkedin.com/in/wuender-martins-450b41385/',
        },
        {
            name: 'João Leal',
            role: 'Engenheiro de Software & DevOps',
            description: 'Especialista em desenvolvimento de software robusto e escalável, com foco em práticas DevOps para entrega contínua e otimização de infraestrutura. Experiência em sistemas distribuídos e arquiteturas de microsserviços.',
            image: './assets/joao.png', // Adicione a imagem do João
            github: 'https://github.com/joaolealdev',
            linkedin: 'https://www.linkedin.com/in/joao-leal1/',
        },
        {
            name: 'Kaique Alves',
            role: 'Cientista de Dados & Analista de Negócios',
            description: 'Profissional com expertise em análise de dados, modelagem estatística e machine learning para extrair valor de grandes volumes de dados. Atua na ponte entre tecnologia e negócios, transformando dados em estratégias.',
            image: './assets/kaique.jpeg', // Adicione a imagem do Kaique
            github: 'https://github.com/kaiquedev027',
            linkedin: 'https://www.linkedin.com/in/kaique-alves-fernandes-27656b207/',
        },
    ];

    let currentIndex = 0;

    const updateTeamCarousel = () => {
        const leftIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
        const rightIndex = (currentIndex + 1) % teamMembers.length;

        // Update featured member
        document.getElementById('team-member-center').querySelector('img').src = teamMembers[currentIndex].image;
        document.getElementById('featured-name').textContent = teamMembers[currentIndex].name;
        document.getElementById('featured-role').textContent = teamMembers[currentIndex].role;
        document.getElementById('featured-description').textContent = teamMembers[currentIndex].description;

        // Update social links for featured member
        const socialLinksContainer = document.getElementById('featured-social-links');
        socialLinksContainer.innerHTML = ''; // Clear existing links
        if (teamMembers[currentIndex].github) {
            socialLinksContainer.innerHTML += `
                <a href="${teamMembers[currentIndex].github}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
                    <i data-lucide="github" class="w-5 h-5"></i>
                </a>
            `;
        }
        if (teamMembers[currentIndex].linkedin) {
            socialLinksContainer.innerHTML += `
                <a href="${teamMembers[currentIndex].linkedin}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
                    <i data-lucide="linkedin" class="w-5 h-5"></i>
                </a>
            `;
        }
        lucide.createIcons(); // Re-render lucide icons after updating innerHTML

        // Update left member
        document.getElementById('team-member-left').querySelector('img').src = teamMembers[leftIndex].image;

        // Update right member
        document.getElementById('team-member-right').querySelector('img').src = teamMembers[rightIndex].image;
    };

    document.getElementById('team-prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
        updateTeamCarousel();
    });

    document.getElementById('team-next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % teamMembers.length;
        updateTeamCarousel();
    });

    // Initial load
    updateTeamCarousel();

    // Lottie animation logic
    const lottieContainer = document.getElementById('lottie-container');
    const fallbackImage = document.getElementById('fallback-image');

    if (lottieContainer) {
        const lottiePlayer = document.createElement('lottie-player');
    lottiePlayer.setAttribute(\'src\', \'./assets/loop-header.lottie\'); // Path to your Lottie JSON file
        lottiePlayer.setAttribute('background', 'transparent');
        lottiePlayer.setAttribute('speed', '1');
        lottiePlayer.setAttribute('style', 'width: 100%; height: 100%;');
        lottiePlayer.setAttribute('loop', '');
        lottiePlayer.setAttribute('autoplay', '');
        lottiePlayer.setAttribute('aria-label', 'Animação de inteligência artificial');

        lottiePlayer.addEventListener('error', () => {
            console.warn('Lottie animation failed to load, using fallback image.');
            lottieContainer.style.display = 'none';
            fallbackImage.style.display = 'block';
        });

        lottieContainer.appendChild(lottiePlayer);
    }
});
