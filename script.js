const menu = document.getElementById("menu");
const sidebar = document.querySelector(".sidebar");
const close = document.getElementById("close");
const slider = document.querySelector('.list'); 
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const eventTitle = document.getElementById('event-title');
const eventDescription = document.getElementById('event-description');

menu.onclick = function () {
    sidebar.style.display = "flex";
};

close.onclick = function () {
    sidebar.style.display = "none";
};

const events = [
    { title: "Intro to Git/GitHub", description: "Intro to git/Github was conducted to introduce students to the open-source community and provide them with all the knowledge required to get started with open-source contributions.The event mainly focused on introduction on Git and Github.", image: "event (1).jpg" },
    { title: "GENESIS", description: "FOSS MEC, Computer and Signal Processing societies of IEEE MEC SB in collaboration with Polygon Guild Kochi brings to you Gen3sis, your portal to explore the Block-Verse.", image: "event (1).png" },
    { title: "Code-A-Pookalam", description: "FOSSMEC in collaboration with TinkerHub MEC presents yet another season of Code-a-Pookalam this Onam season. Grab your laptops and get your thinking hats on from the 28th of August to the 10th of September to win AMAZING PRIZES!", image: "event (2).jpg" },
    { title: "DEVSPRINT", description: "The power of open source is the power of the people. Excel invites you to dive into the world of open source! Explore fascinating projects created by brilliant organizations, with Devsprint, a developer's paradise that invites you to contribute and make an impact!", image: "event (3).jpg" },
];

let index = 0;

function updateContent() {
    slider.innerHTML = `<div class="item"><img src="${events[index].image}" alt="${events[index].title}"></div>`;
    
    eventTitle.textContent = events[index].title;
    eventDescription.textContent = events[index].description;
}

function moveSlide(direction) {
    if (direction === 'next') {
        index = (index + 1) % events.length;
    } else {
        index = (index - 1 + events.length) % events.length;
    }
    updateContent();
}

updateContent();

next.addEventListener('click', () => moveSlide('next'));
prev.addEventListener('click', () => moveSlide('prev'));

// Prevent scrolling when clicking anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor scroll behavior
        const targetId = this.getAttribute('href').substring(1); // Get target ID
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start'
            });
        }
    });
});
