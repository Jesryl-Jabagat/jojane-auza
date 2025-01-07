// UI related functions
class UI {
    static displayCars() {
        const carGrid = document.querySelector('.car-grid');
        let carsHTML = '';

        carInventory.forEach(car => {
            carsHTML += `
                <div class="car-card">
                    <img src="${car.image}" alt="${car.name}" class="car-image">
                    <div class="car-details">
                        <h3>${car.name}</h3>
                        <p>${car.description}</p>
                        <p class="car-price">$${car.price.toLocaleString()}</p>
                        <button class="cta-button" onclick="UI.inquireCar(${car.id})">Inquire Now</button>
                    </div>
                </div>
            `;
        });

        carGrid.innerHTML = carsHTML;
    }

    static inquireCar(carId) {
        const car = carInventory.find(car => car.id === carId);
        const contactForm = document.querySelector('#contact-form');
        contactForm.scrollIntoView({ behavior: 'smooth' });
        alert(`Thank you for your interest in the ${car.name}! Please fill out the contact form below and we'll get back to you shortly.`);
    }

    static toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    }

    static handleContactForm(e) {
        e.preventDefault();
        const form = e.target;
        const name = form.querySelector('input[type="text"]').value;
        alert(`Thank you ${name}! We'll get back to you soon.`);
        form.reset();
    }
}