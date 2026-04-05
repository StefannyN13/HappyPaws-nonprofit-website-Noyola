<!DOCTYPE html>
<html>
    <head>
        <title>PHP Greeting</title>
        <style>
            body{
                font-family: Arial, Helvetica, sans-serif;        
                margin: 3em;
            }
            h1{
                color: #5763BC;
            }
            p{
                color: black;
            }
        </style>
    </head>
    
    <body>
        <?php
            $name="Stefanny";
            echo "<h1>Hello from $name!<h1><br>";
            echo "<p>Today's date is: ".date("F j, Y")."</p>";
            
        ?>
    </body>
</html>

