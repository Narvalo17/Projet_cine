<?php
  include_once __DIR__ ."/template/head.inc.php";
?>

<body>
  <header>
    <h1>Cinéma a volanté</h1>
  </header>
  <nav>
    <ul>
        <li><a href="index.php">Accueil</a></li>
        <li><a href="nos-film.php">Nos films</a></li>
        <li><a href="identification.php">S'identifier</a></li>
        <li><a href="#">S'inscrire</a></li>
        <li><label class="switch">
          <input type="checkbox" id="darkModeSwitch">
          <span class="slider round"></span>
        </label></li>
    </ul>
  </nav>
 
    <script script type="module" src="./js/app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <?php
      
      include_once __DIR__ ."/template/mainins.inc.php";
    
       include_once __DIR__ ."/template/footer.inc.php";
  ?>
   

<body>
</html>