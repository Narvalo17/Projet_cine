<?php
  include_once __DIR__ ."/template/head.inc.php";
?>
<body>
  <header>
    <h1>Cinéma a volonté</h1>
  </header>
  <nav>
    <ul>
        <li><a href="index.php">Accueil</a></li>
        <li><a href="nos-film.php">Nos films</a></li>
        <li><a href="#">S'identifier</a></li>
        <li><a href="inscription.php">S'inscrire</a></li>
        <li><label class="switch">
          <input type="checkbox" id="darkModeSwitch">
          <span class="slider round"></span>
        </label></li>
    </ul>
  </nav>
  <?php
  include_once __DIR__ ."/template/mainid.inc.php";
  include_once __DIR__ ."/template/footer.inc.php";
?>
</body>
</html>
