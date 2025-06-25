// Navbar
window.addEventListener("scroll", () => {
    const header = document.querySelector(".custum-navbar,.nav-link");
    window.scrollY > 100
      ? header.classList.add("scrolled")
      : header.classList.remove("scrolled");
  });
  // Ajoutez ce code JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner tous les liens du dropdown
  const dropdownItems = document.querySelectorAll('.dropdown-menu a');
  
  // Fermer le menu au clic sur mobile
  function handleDropdownClick() {
    if(window.innerWidth < 992) { // Seulement pour mobile
      const navbarCollapse = document.getElementById('navbarNavDropdown');
      const dropdownToggle = document.querySelector('.dropdown-toggle');
      
      // Fermer le dropdown
      if(dropdownToggle) {
        dropdownToggle.classList.remove('show');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
      
      // Fermer le menu principal
      if(navbarCollapse) {
        navbarCollapse.classList.remove('show');
        navbarCollapse.style.display = 'none';
      }
      
      // Réinitialiser le toggler
      const toggler = document.querySelector('.navbar-toggler');
      if(toggler) {
        toggler.setAttribute('aria-expanded', 'false');
        toggler.classList.remove('collapsed');
      }
    }
  }

  // Ajouter l'événement à tous les liens
  dropdownItems.forEach(item => {
    item.addEventListener('click', handleDropdownClick);
  });

  // Gestion du resize
  window.addEventListener('resize', function() {
    if(window.innerWidth >= 992) {
      const navbarCollapse = document.getElementById('navbarNavDropdown');
      if(navbarCollapse) navbarCollapse.style.display = '';
    }
  });
});
  // progress bar
  // Animation des barres de compétences
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-bar');
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const progressBar = entry.target;
              const targetWidth = progressBar.style.width;
              const percentageElement = progressBar.closest('.skill-item').querySelector('span:last-child');
              const targetPercentage = parseInt(percentageElement.textContent.replace('%', ''));

              let currentWidth = 0;
              let currentPercentage = 0;
              
              progressBar.style.width = '0%';
              percentageElement.textContent = '0%';

              const animate = () => {
                  if (currentWidth < targetPercentage) {
                      currentWidth += 1;
                      currentPercentage += 1;
                      
                      progressBar.style.width = `${currentWidth}%`;
                      percentageElement.textContent = `${currentPercentage}%`;
                      
                      requestAnimationFrame(animate);
                  }
              };

              requestAnimationFrame(animate);
              observer.unobserve(progressBar);
          }
      });
  }, { threshold: 0.5 });

  progressBars.forEach(bar => observer.observe(bar));
}

// Initialiser l'animation au chargement
document.addEventListener('DOMContentLoaded', () => {
  animateProgressBars();
});

// carousel BLOG
const articlesData = {
  1: [
      {
          id: 1,
          title: "Optimiser ses anciens contenus : la méthode complète",
          image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
          alt: "Optimisation SEO",
          time: "5 min",
          date: "12 Mai 2024",
          description: "Guide étape par étape pour redonner vie à vos anciens articles et améliorer leur performance SEO."
      },
      {
          id: 2,
          title: "Rédaction e-commerce : boostez vos conversions",
          image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
          alt: "Rédaction e-commerce",
          time: "8 min",
          date: "8 Mai 2024",
          description: "Les techniques éprouvées pour des fiches produits qui vendent et convertissent les visiteurs en clients."
      },
      {
          id: 3,
          title: "SEO multilingue : stratégies gagnantes",
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
          alt: "SEO multilingue",
          time: "6 min",
          date: "2 Mai 2024",
          description: "Comment adapter son contenu pour un public international et améliorer votre visibilité à l'échelle mondiale."
      }
  ],
  2: [
      {
          id: 4,
          title: "Les secrets du copywriting persuasif",
          image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
          alt: "Copywriting",
          time: "7 min",
          date: "28 Avril 2024",
          description: "Techniques avancées pour écrire des textes qui convertissent et persuadent."
      },
      {
          id: 5,
          title: "SEO technique : les fondamentaux",
          image: "https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
          alt: "SEO technique",
          time: "9 min",
          date: "22 Avril 2024",
          description: "Comprendre et mettre en œuvre les bases du SEO technique pour un site performant."
      },
      {
          id: 6,
          title: "Référencement naturel : tendances 2024",
          image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
          alt: "Tendances SEO",
          time: "6 min",
          date: "15 Avril 2024",
          description: "Les nouvelles tendances du SEO à adopter dès maintenant pour rester compétitif."
      }
  ],
  3: [
      {
          id: 7,
          title: "Rédaction web : les erreurs à éviter",
          image: "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
          alt: "Erreurs rédaction",
          time: "4 min",
          date: "10 Avril 2024",
          description: "Les pièges courants de la rédaction web et comment les éviter pour un contenu optimal."
      },
      {
          id: 8,
          title: "Blogging efficace : guide complet",
          image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
          alt: "Blogging",
          time: "10 min",
          date: "5 Avril 2024",
          description: "Comment créer et maintenir un blog qui génère du trafic et des leads."
      },
      {
          id: 9,
          title: "Les mots-clés longue traîne : votre atout SEO",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
          alt: "Mots-clés",
          time: "5 min",
          date: "1 Avril 2024",
          description: "Découvrez comment utiliser les mots-clés longue traîne pour un référencement efficace."
      }
  ]
};

// Fonction pour afficher les articles d'une page spécifique
function renderArticles(page) {
  const container = document.getElementById('articlesContainer');
  container.innerHTML = '';
  
  articlesData[page].forEach((article, index) => {
      const articleHTML = `
          <div class="col-md-6 col-lg-4">
              <article class="blog-card">
                  <div class="card border-0 shadow-sm h-100">
                      <div class="card-img-top overflow-hidden">
                          <img src="${article.image}" class="zoom-effect" alt="${article.alt}">
                      </div>
                      <div class="card-body p-4">
                          <div class="post-meta d-flex align-items-center gap-3 mb-3">
                              <span class="text-primary"><i class="far fa-clock me-1"></i>${article.time}</span>
                              <span class="text-muted">${article.date}</span>
                          </div>
                          <h4 class="h5 mb-3">${article.title}</h4>
                          <p class="text-secondary mb-4">${article.description}</p>
                          <a href="#" class="stretched-link"></a>
                      </div>
                  </div>
              </article>
          </div>
      `;
      
      container.innerHTML += articleHTML;
  });
  
  // Réappliquer les animations au survol
  const cards = document.querySelectorAll('.blog-card');
  cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-8px)';
      });
      
      card.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
      });
  });
}

// Fonction pour mettre à jour la pagination
function updatePagination(activePage) {
  const pageLinks = document.querySelectorAll('.page-link[data-page]');
  pageLinks.forEach(link => {
      link.classList.remove('active');
      if (parseInt(link.dataset.page) === activePage) {
          link.classList.add('active');
      }
  });
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
  // Afficher la première page d'articles
  renderArticles(1);
  
  // Gestion de la pagination
  const pageLinks = document.querySelectorAll('.page-link[data-page]');
  pageLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const page = parseInt(this.dataset.page);
          renderArticles(page);
          updatePagination(page);
      });
  });
  
  // Boutons précédent/suivant
  document.querySelector('.prev-page').addEventListener('click', function(e) {
      e.preventDefault();
      const activePage = document.querySelector('.page-link.active[data-page]');
      let page = parseInt(activePage.dataset.page);
      page = page > 1 ? page - 1 : 1;
      
      if (page !== parseInt(activePage.dataset.page)) {
          renderArticles(page);
          updatePagination(page);
      }
  });
  
  document.querySelector('.next-page').addEventListener('click', function(e) {
      e.preventDefault();
      const activePage = document.querySelector('.page-link.active[data-page]');
      let page = parseInt(activePage.dataset.page);
      const maxPage = Object.keys(articlesData).length;
      page = page < maxPage ? page + 1 : maxPage;
      
      if (page !== parseInt(activePage.dataset.page)) {
          renderArticles(page);
          updatePagination(page);
      }
  });
  
  // Animation du carousel
  const carousel = document.querySelector('#featuredCarousel');
  
  // Animation au changement de slide
  carousel.addEventListener('slide.bs.carousel', function(e) {
      const nextItem = e.relatedTarget;
      nextItem.classList.add('animate__animated', 'animate__fadeIn');
      
      setTimeout(() => {
          nextItem.classList.remove('animate__animated', 'animate__fadeIn');
      }, 1000);
  });
  
  // Animation du badge "Nouveau"
  const badge = document.querySelector('.featured-badge');
  setInterval(() => {
      badge.classList.toggle('animate__pulse');
  }, 3000);
  
  // Animation au survol des articles
  const cards = document.querySelectorAll('.blog-card');
  cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-8px)';
      });
      
      card.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
      });
  });
});
// topbtn
document.addEventListener("DOMContentLoaded", function () {
  let toTopBtn = document.getElementById("toTopBtn");

  if (!toTopBtn) {
    console.error("Erreur : #toTopBtn non trouvé dans le DOM !");
    return;
  }

  // Afficher ou masquer le bouton selon le scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      // Se déclenche après 200px
      toTopBtn.style.display = "flex";
    } else {
      toTopBtn.style.display = "none";
    }
  });

  // Défilement fluide vers le haut
  toTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
// Send mail
function sendMail() {
  emailjs.init("4iF--6Qa2-Mz5Dihp");

  var submitBtn = document.getElementById("submitBtn");
  var spinner = document.getElementById("spinner");
  var buttonText = document.querySelector(".button-content");
  var statusMessage = document.getElementById("statusMessage");

  var name = document.querySelector("#name").value.trim();
  var email = document.querySelector("#email").value.trim();
  var subject = document.querySelector("#subject").value.trim();
  var message = document.querySelector("#message").value.trim();

  if (!name || !email || !message) {
    statusMessage.textContent = "Veuillez remplir tous les champs obligatoires.";
    statusMessage.className = "error";
    statusMessage.classList.remove("d-none");
    return;
  }

  submitBtn.disabled = true;
  spinner.classList.remove("d-none");
  buttonText.style.display = "none";

  // Paramètres avec informations expéditeur
  var params = {
    sender_name: name, // Nom brut de l'expéditeur
    sender_email: email, // Email brut de l'expéditeur
    formatted_sender: `${name} <${email}>`, // Format "Nom <email>"
    subject: subject,
    message: message,
    reply_to: email
  };

  var serviceID = "service_jjhd14n";
  var templateID = "template_l3gcf0h";

  emailjs
    .send(serviceID, templateID, params)
    .then(() => {
      statusMessage.textContent = "Message envoyé avec succès !";
      statusMessage.className = "success";
      statusMessage.classList.remove("d-none");
      document.getElementById("contactForm").reset();
    })
    .catch((err) => {
      console.error(err);
      statusMessage.textContent = "Erreur lors de l'envoi du message.";
      statusMessage.className = "error";
      statusMessage.classList.remove("d-none");
    })
    .finally(() => {
      submitBtn.disabled = false;
      spinner.classList.add("d-none");
      buttonText.style.display = "inline";
      setTimeout(() => {
        statusMessage.classList.add("d-none");
      }, 5000);
    });
}