menu fixed quand scroll touche div id exemple
=====
          <div id="nav" class="row">											
            <nav>															<!-- Div pour le nav -->
              <ul id="example" class="col-md-12">
                <li id="focusLI"><a href="index.php">Accueil</a></li>
                <li><a href="presentation.php">Présentation</a></li>
                <li><a href="galerie.php">Galerie</a></li>
                <li><a href="#partenaires">Partenaires</a></li>
                <li><a href="fabrik.php">La Fabrique</a></li>
                <li><a href="Contactfab.php">Contact</a></li>
              </ul>	
            </nav>
          </div>

          <script type="text/javascript">
              // listen for scroll
              var positionElementInPage = $('#example').offset().top;
              $(window).scroll(
                function() {
                  if ($(window).scrollTop() >= positionElementInPage) {
                    // fixed
                    $('#example').addClass("floatable containerreset");
                  } else {
                    // relative
                    $('#example').removeClass("floatable");
                  }
                }
              );
          </script>
