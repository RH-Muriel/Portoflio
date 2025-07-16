 // Spinner
 // var spinner = function () {
 //     setTimeout(function () {
 //         if ($('#spinner').length > 0) {
 //             $('#spinner').removeClass('show');
 //         }
 //     }, 1);
 // };
 // spinner();

 // Navbar
 window.addEventListener("scroll", () => {
   const header = document.querySelector(".custum-navbar,.nav-link");
   window.scrollY > 100 ?
     header.classList.add("scrolled") :
     header.classList.remove("scrolled");
 });
 // Ajoutez ce code JavaScript
 document.addEventListener('DOMContentLoaded', function () {
   // Sélectionner tous les liens du dropdown
   const dropdownItems = document.querySelectorAll('.dropdown-menu a');

   // Fermer le menu au clic sur mobile
   function handleDropdownClick() {
     if (window.innerWidth < 992) { // Seulement pour mobile
       const navbarCollapse = document.getElementById('navbarNavDropdown');
       const dropdownToggle = document.querySelector('.dropdown-toggle');

       // Fermer le dropdown
       if (dropdownToggle) {
         dropdownToggle.classList.remove('show');
         dropdownToggle.setAttribute('aria-expanded', 'false');
       }

       // Fermer le menu principal
       if (navbarCollapse) {
         navbarCollapse.classList.remove('show');
         navbarCollapse.style.display = 'none';
       }

       // Réinitialiser le toggler
       const toggler = document.querySelector('.navbar-toggler');
       if (toggler) {
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
   window.addEventListener('resize', function () {
     if (window.innerWidth >= 992) {
       const navbarCollapse = document.getElementById('navbarNavDropdown');
       if (navbarCollapse) navbarCollapse.style.display = '';
     }
   });
 });


 // pdf
 function downloadPDFs() {
   const files = [
     'download/Curriculum_vitae_Muriel_SEO.pdf',
     'download/Portfolio_Muriel_Free.pdf'
   ];

   files.forEach((file) => {
     const a = document.createElement('a');
     a.href = file;
     a.download = file.split('/').pop(); // nom du fichier à télécharger
     document.body.appendChild(a);
     a.click();
     document.body.removeChild(a);
   });
 }
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
   }, {
     threshold: 0.5
   });

   progressBars.forEach(bar => observer.observe(bar));
 }

 // Initialiser l'animation au chargement
 document.addEventListener('DOMContentLoaded', () => {
   animateProgressBars();
 });

 // carousel BLOG
 const articlesData = {
   1: [{
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
   2: [{
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
   3: [{
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
     card.addEventListener('mouseenter', function () {
       this.style.transform = 'translateY(-8px)';
     });

     card.addEventListener('mouseleave', function () {
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
 document.addEventListener('DOMContentLoaded', function () {
   // Afficher la première page d'articles
   renderArticles(1);

   // Gestion de la pagination
   const pageLinks = document.querySelectorAll('.page-link[data-page]');
   pageLinks.forEach(link => {
     link.addEventListener('click', function (e) {
       e.preventDefault();
       const page = parseInt(this.dataset.page);
       renderArticles(page);
       updatePagination(page);
     });
   });

   // Boutons précédent/suivant
   document.querySelector('.prev-page').addEventListener('click', function (e) {
     e.preventDefault();
     const activePage = document.querySelector('.page-link.active[data-page]');
     let page = parseInt(activePage.dataset.page);
     page = page > 1 ? page - 1 : 1;

     if (page !== parseInt(activePage.dataset.page)) {
       renderArticles(page);
       updatePagination(page);
     }
   });

   document.querySelector('.next-page').addEventListener('click', function (e) {
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
   carousel.addEventListener('slide.bs.carousel', function (e) {
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
     card.addEventListener('mouseenter', function () {
       this.style.transform = 'translateY(-8px)';
     });

     card.addEventListener('mouseleave', function () {
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
     window.scrollTo({
       top: 0,
       behavior: "smooth"
     });
   });
 });

 // #######
 // Sélectionne tous les liens ayant data-target
 document.querySelectorAll('a[data-target]').forEach(link => {
   link.addEventListener('click', e => {
     e.preventDefault();
     const selector = link.getAttribute('data-target');
     const targetEl = document.querySelector(selector);
     if (!targetEl) return;

     // Scroll fluide
     targetEl.scrollIntoView({
       behavior: 'smooth'
     });

     // Met à jour l’URL sans # (ex: /about)
     const sectionName = selector.slice(1);
     const newUrl = `${window.location.origin}${window.location.pathname}${sectionName}`;
     history.pushState(null, '', newUrl);
   });
 });

 // Gère le retour/arrière du navigateur
 window.addEventListener('popstate', () => {
   const sectionName = location.pathname.slice(1);
   const target = document.getElementById(sectionName) || document.getElementById('home');
   target.scrollIntoView({
     behavior: 'smooth'
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

  // Validation améliorée
  if (!name || !email || !subject || !message) {
    statusMessage.textContent = "Veuillez remplir tous les champs obligatoires.";
    statusMessage.className = "error";
    statusMessage.classList.remove("d-none");
    return;
  }

  submitBtn.disabled = true;
  spinner.classList.remove("d-none");
  buttonText.style.display = "none";

  // Paramètres mis à jour
  var params = {
    from_name: `${name} via Formulaire Contact`, 
    sender_name: name,
    sender_email: email,
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
      statusMessage.textContent = "Erreur lors de l'envoi du message. Veuillez réessayer.";
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
 // 
 // Fonctionnalité de la boîte de chat
 document.addEventListener('DOMContentLoaded', function () {
   const chatWidget = document.querySelector('.chat-widget');
   const chatToggle = document.querySelector('.chat-toggle');
   const chatContainer = document.querySelector('.chat-container');
   const chatMessages = document.querySelector('.chat-messages');
   const messageInput = document.querySelector('#messageInput');
   const sendButton = document.querySelector('#sendButton');
   const closeChat = document.querySelector('.close-chat');
   const profilePanel = document.querySelector('.profile-panel');
   const backButton = document.querySelector('.back-button');
   const attachFileButton = document.querySelector('#attachFile');
   const fileInput = document.querySelector('#fileInput');
   const filePreview = document.querySelector('#filePreview');
   const fileName = document.querySelector('#fileName');
   const fileSize = document.querySelector('#fileSize');
   const fileIcon = document.querySelector('#fileIcon');
   const removeFile = document.querySelector('#removeFile');
   const userInfo = document.querySelector('.user-info');

   // Ouvrir/fermer la boîte de chat
   chatToggle.addEventListener('click', function () {
     chatWidget.classList.toggle('active');

     // Faire défiler vers le bas quand le chat s'ouvre
     setTimeout(() => {
       chatMessages.scrollTop = chatMessages.scrollHeight;
     }, 300);
   });

   // Fermer la boîte de chat avec le bouton X
   closeChat.addEventListener('click', function () {
     chatWidget.classList.remove('active');
   });

   // Faire défiler vers le bas au chargement
   chatMessages.scrollTop = chatMessages.scrollHeight;

   // Ouvrir le panneau de profil
   userInfo.addEventListener('click', function () {
     profilePanel.classList.add('active');
   });

   // Fermer le panneau de profil
   backButton.addEventListener('click', function () {
     profilePanel.classList.remove('active');
   });

   // Ouvrir le sélecteur de fichier
   attachFileButton.addEventListener('click', function () {
     fileInput.click();
   });

   // Gérer la sélection de fichier
   fileInput.addEventListener('change', function () {
     if (fileInput.files.length > 0) {
       const file = fileInput.files[0];
       const fileSizeKB = Math.round(file.size / 1024);

       fileName.textContent = file.name;
       fileSize.textContent = fileSizeKB + ' KB';

       // Définir l'icône en fonction du type de fichier
       if (file.type.includes('image')) {
         fileIcon.innerHTML = '<i class="fas fa-file-image"></i>';
       } else if (file.type.includes('pdf')) {
         fileIcon.innerHTML = '<i class="fas fa-file-pdf"></i>';
       } else if (file.type.includes('word')) {
         fileIcon.innerHTML = '<i class="fas fa-file-word"></i>';
       } else if (file.type.includes('excel')) {
         fileIcon.innerHTML = '<i class="fas fa-file-excel"></i>';
       } else {
         fileIcon.innerHTML = '<i class="fas fa-file"></i>';
       }

       filePreview.style.display = 'block';
     }
   });

   // Supprimer le fichier sélectionné
   removeFile.addEventListener('click', function () {
     fileInput.value = '';
     filePreview.style.display = 'none';
   });

   // Envoyer un message
   function sendMessage() {
     const message = messageInput.value.trim();
     const file = fileInput.files[0];

     if (message || file) {
       const now = new Date();
       const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

       const messageElement = document.createElement('div');
       messageElement.className = 'message sent';

       const messageContent = document.createElement('div');
       messageContent.className = 'message-content';

       if (message) {
         messageContent.innerHTML = message;
       }

       if (file) {
         const fileSizeKB = Math.round(file.size / 1024);
         let fileTypeIcon = '<i class="fas fa-file"></i>';

         if (file.type.includes('image')) {
           fileTypeIcon = '<i class="fas fa-file-image"></i>';
         } else if (file.type.includes('pdf')) {
           fileTypeIcon = '<i class="fas fa-file-pdf"></i>';
         } else if (file.type.includes('word')) {
           fileTypeIcon = '<i class="fas fa-file-word"></i>';
         } else if (file.type.includes('excel')) {
           fileTypeIcon = '<i class="fas fa-file-excel"></i>';
         }

         const fileMessage = document.createElement('div');
         fileMessage.className = 'file-message mt-2';

         const filePreviewDiv = document.createElement('div');
         filePreviewDiv.className = 'file-preview';

         filePreviewDiv.innerHTML = `
                            <div class="file-icon">
                                ${fileTypeIcon}
                            </div>
                            <div class="file-info">
                                <div class="file-name">${file.name}</div>
                                <div class="file-size">${fileSizeKB} KB</div>
                            </div>
                        `;

         fileMessage.appendChild(filePreviewDiv);
         messageContent.appendChild(fileMessage);
       }

       const timeDiv = document.createElement('div');
       timeDiv.className = 'message-time';
       timeDiv.textContent = timeString;
       messageContent.appendChild(timeDiv);

       messageElement.appendChild(messageContent);
       chatMessages.appendChild(messageElement);

       messageInput.value = '';
       fileInput.value = '';
       filePreview.style.display = 'none';

       // Faire défiler vers le bas
       chatMessages.scrollTop = chatMessages.scrollHeight;

       // Simuler une réponse après un délai
       setTimeout(sendAutoReply, 1500);
     }
   }

   // Réponse automatique simulée
   function sendAutoReply() {
     const replies = [
       "Je peux vous aider à créer du contenu optimisé SEO pour votre site.",
       "Je propose des services de rédaction en français, anglais et malgache.",
       "Mes tarifs sont compétitifs et adaptés à vos besoins.",
       "J'ai plus de 11 ans d'expérience en rédaction web SEO.",
       "Puis-je vous envoyer des exemples de mes travaux précédents ?",
       "Je peux vous aider avec la rédaction d'articles, fiches produits et traductions.",
       "Quel type de contenu recherchez-vous exactement ?",
       "Je suis spécialisée en rédaction SEO pour les sites e-commerce.",
       "Pourriez-vous me donner plus de détails sur votre projet ?"
     ];

     const randomReply = replies[Math.floor(Math.random() * replies.length)];
     const now = new Date();
     const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

     const messageElement = document.createElement('div');
     messageElement.className = 'message received';

     const avatarDiv = document.createElement('div');
     avatarDiv.className = 'message-avatar';
     avatarDiv.innerHTML = '<img src="img/profil/PDP.jpg" width="20px" height="20px" alt="Avatar de Muriel">';
     messageElement.appendChild(avatarDiv);

     const messageContent = document.createElement('div');
     messageContent.className = 'message-content';

     messageContent.innerHTML = `
                    ${randomReply}
                    <div class="message-time">${timeString}</div>
                `;

     messageElement.appendChild(messageContent);
     chatMessages.appendChild(messageElement);

     // Faire défiler vers le bas
     chatMessages.scrollTop = chatMessages.scrollHeight;
   }

   // Événements
   sendButton.addEventListener('click', sendMessage);

   messageInput.addEventListener('keypress', function (e) {
     if (e.key === 'Enter') {
       sendMessage();
     }
   });
 });
//  pricing
document.querySelectorAll('.redirect-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      if (target) window.location.href = target;
    });
  });