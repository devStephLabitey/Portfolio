/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


document.getElementById('downloadCvBtn').addEventListener('click', function() {
    try {
        // Crée un lien pour le téléchargement
        var link = document.createElement('a');
        link.href = '../cv/Mon_CV.pdf'; // Remplace 'cv.pdf' par le chemin de ton CV si différent
        link.download = 'Mon_CV.pdf'; // Le nom du fichier téléchargé

        // Simule un clic pour démarrer le téléchargement
        link.click();

        console.log('Téléchargement démarré');
    } catch (error) {
        console.error('Erreur lors du téléchargement du CV:', error);
    }
});
