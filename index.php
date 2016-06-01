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
    <title>MetHotels</title>
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
                    <li class="active"><a href="index.php">Home</a></li>
                    <li><a href="rezervacija.php">Rezervišite sobu</a></li>
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
                <a class="btn btn-lg btn-primary" href="rezervacija.php" role="button" style="margin-top: 30px">Rezervišite sobu &raquo;</a>
            </p>
            <p>Iskoristite neverovatne first-minute popuste od čak 10%.</p>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h3>O nama</h3>
                <p>Hoteli sa 5 zvezdica (*****) sa sedištima u svim svetskim metropolama i popularnim turističkim destinacijama.</p>
                <p>Otkrijte zašto smo najbolji i zašto nas svi hvale.</p>
            </div>
            <div class="col-md-6">
                <h3>Kontakt</h3>
                <p>
                    Telefon: 063/123-456
                    <br>
                    Email: contact@methoteli.com
                </p>
            </div>
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