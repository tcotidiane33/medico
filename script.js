<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Medical Insurance Cost Result</title>
</head>

<body>

    <div style="color:black;" class="container">
        <form action="{{ url_for('predict')}}" method="post">
            <h2 class='container-heading'><span class="heading_font">Medical Insurance Cost Predicter</span></h2>

        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

        <!-- Result -->
		<div style="color:black;" class="results">
			<h2> {{prediction_text}}</h2>
		</div>
        </form>

    </div>
    <div>
            <br><br> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

            <p class='footer-description'>©2021 Sagar Dhandare</p>

    </div>


<style>

/* Background Image */
body
{
background-image:url("https://www.acko.com/wp-content/uploads/2020/01/cashless-health-insurance.jpg.webp");
height: 100%;

/* Center and scale the image nicely */
background-position: center;
background-repeat: no-repeat;
background-size: 100% 100%;

}

/* Color */
body{
	font-family: Arial, Helvetica,sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
    width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}


/* Heading Font */
.container-heading{
    margin: 0;
}

.heading_font{
    color: #black;
	font-family: 'Pacifico', cursive;
	font-size: 50px;
	font-weight: normal;
}



<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</style>


</body>

</html>