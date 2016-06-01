<!DOCTYPE html>
<?php
session_start();
if(isset($_SESSION['username'])){
    echo "ALREADY LOGGED IN";
    header("Location: index.php");
    die();
}
?>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="Met Hoteli, srećni i veseli">
    <meta name="author" content="Velibor Bacujkov 2493">
    <link rel="icon" href="favicon.ico">
    <title>MetHotels - Registracija</title>
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
                <li><a href="rezervacija.php">Rezervišite sobu</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li class="active"><a href="register.php">Registracija</a></li>
                <li><a href="login.php">Ulogujte se</a></li>
            </ul>
        </div>
    </div>
</nav>
<div class="container">
    <div class="jumbotron">
        <h1>MetHotels</h1>
        <h2>Obiđite svet uz hotele Met!</h2>
        <p>
            <a class="btn btn-lg btn-primary" href="rezervacija.php" role="button" style="margin-top: 30px">Rezervišite sobu &raquo;</a>
        </p>
        <p>Iskoristite neverovatne first-minute popuste od čak 10%.</p>
    </div>
    <div class="row">
        <h2>Registracija naloga</h2>
        <form action="php/register_script.php" method="post" role="form">
            <div class="form-group">
                <label for="username">Korisničko ime:</label>
                <input type="text" class="form-control" id="username" name="username" placeholder="Unesite korisničko ime">
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Unesite email">
            </div>
            <div class="form-group">
                <label for="password">Šifra:</label>
                <input type="password" class="form-control" id="password" name="password" placeholder="Unesite šifru">
            </div>
            <button type="submit" class="btn btn-default">Registruj se</button>
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