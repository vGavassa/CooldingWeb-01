document.addEventListener("DOMContentLoaded", function() {
    
    const links = document.querySelectorAll('#info a');

    
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
});