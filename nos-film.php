<?php
  include_once __DIR__ ."/include/head.inc.php";
?>
<body>
  <header>
    <h1>Cinéma a volonté</h1>
  </header>
  <nav>
    <ul>
        <li><a href="index.php">Accueil</a></li>
        <li><a href="#">Nos films</a></li>
        <li><a href="identification.php">S'identifier</a></li>
        <li><a href="inscription.php">S'inscrire</a></li>
        <li><label class="switch">
          <input type="checkbox" id="darkModeSwitch">
          <span class="slider round"></span>
        </label></li>
    </ul>
  </nav>
  <main> 
    <section>
        <h2>
          <span class="logo-cine">
            <img src="./Favicon/android-chrome-192x192.png" alt="logo">
          </span>
          Retrouvez l'ensemble des films
        </h2>
        <h3>Films d'horreur et de thriller</h3>
        
    </section>
    <div class="grid-2" role="region" aria-labelledby="litte-cover">
      <ul id="litte-cover">
        <li>
          <p>Regardez en illimité sur votre TV, Smartphone et votre console de jeux</p>
          
        </li>
        <li><img src="asset/tv.jpg" alt="little cover"></li>
      </ul>
    </div>
      
    <div class="grid-12">
      <h4>Notre sélection pour vous : </h4>
      <ul>
        <li><img src="asset/7.jpg" alt="Le comptable"></li>
        <li><img src="asset/13.jpg" alt="Saw"></li>
        <li><img src="asset/16.jpg" alt="Vendredi 13"></li>
        <li><img src="asset/10.jpg" alt="Inception"></li>
        <li><img src="asset/12.jpg" alt="Les Infiltrés"></li>
        <li><img src="asset/14.jpg" alt="Scream"></li>
        <li><img src="asset/1.jpg" alt="Dabbe"></li>
        <li><img src="asset/3.jpg" alt="The Ring"></li>
        <li><img src="asset/2.jpg" alt="Veronica"></li>
        <li><img src="asset/4.jpg" alt="Case 39"></li>
        <li><img src="asset/6.jpg" alt="Chucky"></li>
        <li><img src="asset/5.jpg" alt="Bird Box"></li>
      </ul>
    </div>
</main>
<script script type="module" src="./js/app.js"></script>
<?php
       include_once __DIR__ ."/include/footer.inc.php";
  ?>
</body>
</html>