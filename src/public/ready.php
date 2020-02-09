<?php
	$sourcePage = file_get_contents('http://fmi-plovdiv.org/news.jsp');

	$matches = [];
	preg_match_all('~<tr class="news">.*<a href=".*newsId=(.*)&.*">.*<\/tr>~sU', $sourcePage, $matches);


	$newsIDs = [];
	for ($i=0; $i<=2; $i++) {
		$newsIDs[] = $matches[1][$i];
	}

	$news = [];
	foreach ($newsIDs as $id) {
		$newsPage = file_get_contents('http://fmi-plovdiv.org/news.jsp?newsId='.$id);
		$newsMatches = [];
		preg_match_all('~<td class="pagetitle">(.*)<\/td>.*<td colspan="2" align="left" style="padding-bottom: 10px; font-size: 12px; ">(.*)<\/td>~sU', $newsPage, $newsMatches);
		$news[] = [
			'title' => trim($newsMatches[1][0]),
			'content' => trim(htmlspecialchars($newsMatches[2][0]))
		];
	}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Ready</title>
	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="css/ready.css">
	<link href="https://fonts.googleapis.com/css?family=Quicksand:600&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet">
</head>
<body>
	<nav class="nav">
		<a href="#">GAME ZONE</a>
		<a href="#">SALE YOUR SOUL</a>
		<a href="#">PERSONAL CABINET</a>
	</nav>
	<div class="container">
		<div class="main">
			<div class="content">
				<div class="description">
					<img src="css/img/logo_r2.png" alt="" id="logo">

				</div>
			</div>

			<? foreach ($news as $one): ?>
				<div class="news-title"><?= trim($one['title']); ?></div>
				<div class="news-content"><?= trim($one['content']); ?></div>					

			<? endforeach ?>


			<div class="parser">
				<script>
					var request = require('request');

					var URL = 'https://www.plovdiv24.bg/novini';

					request(URL, function (err, res, body) {
						if (err) throw err;
						console.log(body);
						console.log(res.statusCode);
					});


				</script>
			</div>
		</div>
		
	</div>
<p aria-valuetext="Hello">Hello a</p>




<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-firestore.js"></script>

<script>
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyD59NnsR_vKkM-_Dc7wa_3hpQWpCuI1fWw",
        authDomain: "simu1acroom.firebaseapp.com",
        databaseURL: "https://simu1acroom.firebaseio.com",
        projectId: "simu1acroom",
        storageBucket: "simu1acroom.appspot.com",
        appId: "1:50125508646:web:c0da23830e8d6fc71556e7",
        measurementId: "G-1BE43LETNS"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.firestore();
</script>

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.8.0/firebase-app.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
<script src="js/checkAuth.js"></script>
<script src="js/news.js"></script>
</body>
</html>