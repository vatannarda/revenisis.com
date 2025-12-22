const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    })
});

const hiddenElements3 = document.querySelectorAll(".hidden");
hiddenElements3.forEach((el) => observer.observe(el));