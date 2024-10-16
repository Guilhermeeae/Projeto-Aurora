// main.js

// IIFE (Immediately Invoked Function Expression) para evitar poluição do escopo global
(() => {
    // Seleciona elementos do DOM
    const form = document.querySelector('.contact-form');
    const btnPrimary = document.querySelectorAll('.btn-primary');
    const navLinks = document.querySelectorAll('nav a');
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    // Função para validar o formulário
    const validateForm = () => {
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                input.classList.add('error');
                isValid = false;
            } else {
                input.classList.remove('error');
            }
        });

        return isValid;
    };

    // Função para enviar o formulário
    const submitForm = (event) => {
        event.preventDefault();

        if (validateForm()) {
            // Simula o envio do formulário
            alert('Formulário enviado com sucesso!');
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    };

    // Função para adicionar efeitos de rolagem suave
    const smoothScroll = (target) => {
        const element = document.querySelector(target);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    // Adiciona evento de clique para o botão de envio do formulário
    form.addEventListener('submit', submitForm);

    // Adiciona eventos de clique para links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            smoothScroll(targetId);
        });
    });

    // Função para mostrar/ocultar o botão de rolar para o topo
    const toggleScrollToTopBtn = () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    };

    // Função para rolar suavemente para o topo da página
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Adiciona evento de rolagem para mostrar o botão de rolar para o topo
    window.addEventListener('scroll', toggleScrollToTopBtn);

    // Adiciona evento de clique para o botão de rolar para o topo
    scrollToTopBtn.addEventListener('click', scrollToTop);

    // Função para animações em elementos visíveis na tela
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate');

        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                el.classList.add('fade-in');
            }
        });
    };

    // Adiciona evento de rolagem para animações
    window.addEventListener('scroll', animateOnScroll);

    // Inicializa animações ao carregar a página
    window.addEventListener('load', animateOnScroll);

})();

// CSS para o botão de rolar para o topo
const style = document.createElement('style');
style.innerHTML = `
    .scroll-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    .scroll-to-top.visible {
        display: flex;
        opacity: 1;
    }
`;
document.head.appendChild(style);

// Cria o botão de rolar para o topo
const btnScrollToTop = document.createElement('button');
btnScrollToTop.classList.add('scroll-to-top');
btnScrollToTop.innerHTML = '↑';
document.body.appendChild(btnScrollToTop);
