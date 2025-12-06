// about review open 

const track = document.querySelector(".review-track");
const cards = document.querySelectorAll(".review-card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("dots");

let index = 0;
let cardWidth = cards[0].offsetWidth + 30; // card + gap

// Generate dots
cards.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);

  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
  });
});

function updateSlider() {
  track.style.transform = `translateX(${-index * cardWidth}px)`;

  document
    .querySelectorAll(".dots button")
    .forEach((d, i) => d.classList.toggle("active", i === index));
}

// Next Button
nextBtn.addEventListener("click", () => {
  if (index < cards.length - 1) {
    index++;
    updateSlider();
  }
});

// Previous Button
prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});


//  about review close

// about number counting open


const counters = document.querySelectorAll('.counter');
const speed = 150; // Speed of animation

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target + " +";
        }
    };

    updateCount();
});
// about numbers counting closing

// about close
// SErvice form Q/A open and close js open

    // Select all FAQ items
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            // Close all other items
            faqItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove("active");
                }
            });

            // Toggle current item
            item.classList.toggle("active");
        });
    });

// SErvice form Q/A open and close js close


