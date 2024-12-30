/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Développeur","Data science"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})



/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)

const projectBoxes = document.querySelectorAll('.project-box');
const modal = document.getElementById('project-modal');
const modalDetails = document.getElementById('modal-project-details');
const closeModal = document.querySelector('.close-modal');


const projectDetailsText = "I am well-versed in HTML, CSS and JavaScript, and other cutting-edge frameworks and libraries, which allows me to implement interactive features. Additionally, I have experience working with content management systems (CMS) like WordPress.";


const projectData = {
  completed: `<p>Details about completed projects go here.</p>`,
  academic: ` <h3>Projets Académiques</h3>

        <h4>Application Mobile de Don de Sang</h4>
        <p>Cette application mobile facilite la communication entre les donneurs de sang et les centres de collecte dans le but de simplifier et de promouvoir le don de sang. Elle permet aux utilisateurs de s'inscrire, de planifier des dons et de recevoir des notifications sur les campagnes de collecte, tout en offrant une interface conviviale pour les centres de collecte afin de mieux gérer les besoins et les dons.</p>
        <p><strong>Technologies :</strong> Android Studio, Firebase, Flutter, PHP.</p>

        <h4>Site E-commerce</h4>
        <p>Développement d'un site E-commerce pour la gestion et l'organisation des produits par catégories.</p>
        <p><strong>Technologies :</strong> PHP, JavaScript, HTML, CSS, MySQL, WampServer.</p>

        <h4>Site Web de Vote</h4>
        <p>Un site web de vote qui permet aux utilisateurs de participer à des sondages en ligne de manière sécurisée et transparente. Le site offre une interface simple pour créer, gérer et suivre les résultats des votes en temps réel, tout en assurant la confidentialité des participants.</p>
        <p><strong>Technologies :</strong> HTML, CSS, JavaScript, PHP, MySQL, XAMPP, Bootstrap.</p>
        `,
  experience: `
      <h3>Stage en Banque Nationale de Mauritanie (BNM)</h3>
      <p><strong>Nouakchott, Mauritanie</strong><br>
      Février 2024 – Mai 2024</p>

      <h4>Projet : Développement d’une application web de gestion des historiques de transactions bancaires.</h4>
      <p><strong>Objectif :</strong> Développer une application web permettant au personnel de la BNM de consulter, nettoyer et organiser efficacement les données des transactions bancaires.</p>

      <h4>Responsabilités :</h4>
      <ul>
          <li><strong>Nettoyage et prétraitement des données :</strong> Utilisation de Pandas pour nettoyer et transformer les données.</li>
          <li><strong>Développement Backend :</strong> Développement de la logique serveur avec Django et création d’APIs.</li>
          <li><strong>Développement Frontend :</strong> Conception de l’interface utilisateur avec HTML, CSS, JavaScript et Bootstrap.</li>
          <li><strong>Gestion de la base de données :</strong> Administration de PostgreSQL et rédaction de requêtes SQL.</li>
          <li><strong>Configuration du serveur web :</strong> Configuration de Nginx et mise en place de certificats SSL.</li>
      </ul>

      <h4>Réalisations :</h4>
      <ul>
          <li>Optimisation du processus de traitement des données.</li>
          <li>Conception d’une interface utilisateur intuitive.</li>
          <li>Création d’une application performante et évolutive.</li>
      </ul>
  `
};

projectBoxes.forEach(box => {
  box.addEventListener('click', () => {
      const projectId = box.dataset.projectId; // Get projectId directly from data attribute

      if (projectData.hasOwnProperty(projectId)) {
          modalDetails.innerHTML = projectData[projectId];
      } else {
          modalDetails.innerHTML = `<p>No details found for ${projectId}</p>`;
      }

      modal.classList.add("show");
      modal.style.display = "flex";
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.remove("show"); // Remove the "show" class
  setTimeout(() => { modal.style.display = "none"; }, 300); // Hide after transition
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.classList.remove("show"); // Remove the "show" class
      setTimeout(() => { modal.style.display = "none"; }, 300); // Hide after transition
    }
});

(function () {
  emailjs.init("pwG22emd9MGwVL_jQ"); // ضع هنا معرف المستخدم الخاص بك من EmailJS
})();

function sendEmail() {
  const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
  };

  emailjs.send("service_kmj30zm", "template_bqfnlwf", templateParams)
      .then((response) => {
          alert("تم إرسال الرسالة بنجاح!");
      })
      .catch((error) => {
          alert("فشل في إرسال الرسالة: " + error.text);
      });
}
