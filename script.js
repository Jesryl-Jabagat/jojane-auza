// Contact form functionality
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Simple form validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        // In a real application, you would send this data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});

// Cupcake data
const cupcakes = [
    {
        id: 1,
        name: "Classic Vanilla",
        description: "Light and fluffy vanilla cupcake with vanilla buttercream",
        price: "$3.50",
        image: "asset/1.avif"
    },
    {
        id: 2,
        name: "Double Chocolate",
        description: "Rich chocolate cupcake with chocolate ganache",
        price: "$3.75",
        image: "asset/2.avif"
    },
    {
        id: 3,
        name: "Red Velvet",
        description: "Classic red velvet with cream cheese frosting",
        price: "$4.00",
        image: "asset/3.avif"
    },
    {
        id: 4,
        name: "Strawberry Dream",
        description: "Fresh strawberry cupcake with strawberry buttercream",
        price: "$4.00",
        image: "asset/4.avif"
    },
    {
        id: 5,
        name: "Salted Caramel",
        description: "Vanilla cupcake with salted caramel filling and frosting",
        price: "$4.25",
        image: "asset/5.avif"},
    {
        id: 6,
        name: "Lemon Bliss",
        description: "Tangy lemon cupcake with lemon cream cheese frosting",
        price: "$3.75",
        image: "asset/6.avif"}
];
// Menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const cupcakeGrid = document.getElementById('cupcake-grid');

    // Render cupcakes
    function renderCupcakes() {
        cupcakeGrid.innerHTML = cupcakes.map(cupcake => `
            <div class="cupcake-card">
                <img src="${cupcake.image}" alt="${cupcake.name}" class="cupcake-image">
                <div class="cupcake-info">
                    <h3>${cupcake.name}</h3>
                    <p>${cupcake.description}</p>
                    <span class="price">${cupcake.price}</span>
                </div>
            </div>
        `).join('');
    }

    renderCupcakes();
});
// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navLinks.classList.remove('active');
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hide mobile menu on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll) {
            navLinks.classList.remove('active');
        }
        lastScroll = currentScroll;
    });
});



// login function

function openLogin(){
    event.preventDefault(); 
    document.querySelector('.login-container').style.visibility = 'visible';
    document.querySelector('.signup-container').style.visibility = 'hidden';
    
  }
  function openSignup(){
    event.preventDefault(); 
    document.querySelector('.signup-container').style.visibility = 'visible';
    document.querySelector('.login-container').style.visibility = 'hidden';
    
  }
  function close() {
    document.querySelector('.login-container').style.visibility = 'hidden';
    document.querySelector('.signup-container').style.visibility = 'hidden';
    
  }
  
  // Adding the event listener to call the close function when #close-btn is clicked
  document.querySelector('#close-btn').addEventListener('click', close);
  document.querySelector('#close-btn1').addEventListener('click', close);

  // Adding the event listener to custom-signup-btn to open function openSignup()
  

  
// Adding the event listener to custom-signup-btn to open function openSignup()


document.getElementById('signin').addEventListener('click', function(event) {
  event.preventDefault();  
  openLogin();
});

document.getElementById('signup').addEventListener('click', function(event) {
  event.preventDefault();  
  openSignup();
});