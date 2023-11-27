const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");

        // Assuming 'icon' and 'answer' are child elements of 'faq'
        const icon = faq.querySelector('.icon'); // Replace 'icon' with the actual class or selector
        const answer = faq.querySelector('.answer'); // Replace 'answer' with the actual class or selector

        if (icon && answer) {
            icon.classList.toggle('active');
            answer.classList.toggle('active');
        }
    });
});
