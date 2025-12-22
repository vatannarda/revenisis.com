const observer2 = new IntersectionObserver(async (entries) => {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        const processEntry = async (entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add("show-st");
            }
            await sleep(50);
        };
    
        for (const entry of entries) {
          await processEntry(entry);
        }
});

const hiddenElements2 = document.querySelectorAll(".hidden-st");
hiddenElements2.forEach((el) => observer2.observe(el));

//section divisor

var imageElement = document.getElementById('logo');

imageElement.addEventListener('click', function() {
  window.location.href = 'https://revenisis.com/';
});