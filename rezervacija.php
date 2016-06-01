<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="Met Hoteli, srećni i veseli">
    <meta name="author" content="Velibor Bacujkov 2493">
    <link rel="icon" href="favicon.ico">
    <title>MetHotels - Rezervacija sobe</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/ie10-viewport-bug-workaround.css" rel="stylesheet">
    <link href="css/jumbotron-narrow.css" rel="stylesheet">
</head>
<body>
<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.php">MetHotels</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a href="index.php">Home</a></li>
                <li class="active"><a href="rezervacija.php">Rezervišite sobu</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <?php
                session_start();
                if(isset($_SESSION['username'])){
                    echo "<li><a href='#'>" . $_SESSION['username'] . "</a></li>
                          <li><a href='php/logout_script.php'>Izlogujte se</a></li>";
                }
                else {
                    echo "<li><a href='register.php'>Registracija</a></li>
                          <li><a href='login.php'>Ulogujte se</a></li>";
                }
                ?>
            </ul>
        </div>
    </div>
</nav>
<div class="container">
    <div class="jumbotron">
        <h1>MetHotels</h1>
        <h2>Obiđite svet uz hotele Met!</h2>
        <p>
            <a class="btn btn-lg btn-primary" href="#" role="button" style="margin-top: 30px">Rezervišite sobu</a>
        </p>
        <p>Iskoristite neverovatne first-minute popuste od čak 10%.</p>
    </div>
    <div class="row">
        <h2>Rezervacija sobe</h2>
        <form role="form">
            <h3>Lični podaci:</h3>
            <div class="form-group">
                <label for="name">Ime i prezime:</label>
                <input type="text" class="form-control" id="name" placeholder="Unesite ime i prezime">
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" placeholder="Unesite email">
            </div>
            <div class="form-group">
                <label for="contact">Kontakt telefon:</label>
                <input type="text" class="form-control" id="contact" placeholder="Unesite kontakt telefon">
            </div>
            <h3>Rezervacija:</h3>
            <div class="form-group">
                <label for="no_people">Broj osoba:</label>
                <input type="number" class="form-control" id="no_people" placeholder="Broj osoba">
            </div>
            <div class="checkbox">
                <label><input type="checkbox">Prihvatam uslove kupovine.</label>
            </div>
            <button type="submit" class="btn btn-default">Rezerviši</button>
        </form>
    </div>
</div>
<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="js/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/jquery.min.js"><\/script>')</script>
<script src="js/bootstrap.min.js"></script>
<script src="js/ie10-viewport-bug-workaround.js"></script>
</body>
</html>