USE alumni_db;
INSERT INTO
	users (first_name, last_name, year, email, profile_pic, github_link, portfolio_link, languages, current_job, is_hiring, searching_for_work)
		VALUES
			("Rolando", "Delgado", 2018, "r.delgado1203@gmail.com", "someURL", "https://github.com/R-Delgado1203", "https://r-delgado1203.github.io", "JavaScript", "Cloud Infrastructure Engineer", FALSE, TRUE),
			("Charlie", "Erling", 2018, "charlie.erling@gmail.com", "https://imgur.com/K6lw33y.jpg", "https://github.com/chuckz0r", "https://chuckz0r.github.io", "C#", "Some Job", FALSE, TRUE),
			("Peyton", "Graham", 2018, "pxgraham@gmail.com", "someURL", "someURL", "someURL", "Java", "Host of Sunny in PHX", FALSE, TRUE),
			("Jacob", "Gallegos", 2018, "eggogallego@gmail.com", "someURL", "someURL", "someURL", "Java", "Some Job", FALSE, TRUE);
            