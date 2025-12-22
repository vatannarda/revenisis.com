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

const hiddenElements = document.querySelectorAll(".hidden-st");
hiddenElements.forEach((el) => observer2.observe(el));

//section divisor

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add("show-h");
      }
  })
});

const hiddenElements2 = document.querySelectorAll(".hidden-h");
hiddenElements2.forEach((el) => observer3.observe(el));

//section divisor

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add("show-cs");
      }
  })
});

const hiddenElements4 = document.querySelectorAll(".hidden-cs");
hiddenElements4.forEach((el) => observer4.observe(el));

const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add("show-cs2");
      }
  })
});

const hiddenElements5 = document.querySelectorAll(".hidden-cs2");
hiddenElements5.forEach((el) => observer5.observe(el));

//section divisor

var imageElement = document.getElementById('logo');

imageElement.addEventListener('click', function() {
  window.location.href = 'https://revenisis.com/';
});