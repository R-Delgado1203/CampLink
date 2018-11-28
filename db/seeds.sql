USE alumni_db;
SELECT * FROM users;
INSERT INTO
	profile_info (bootcamp_year, profile_pic, github, portfolio, favorite_language, current_job, hiring, job_searching)
		VALUES
			(2018, "someURL", "https://github.com/R-Delgado1203", "https://r-delgado1203.github.io", "JavaScript", "Cloud Infrastructure Engineer", false, true);
            
INSERT INTO
	signup_info (first_name, last_name, email, p_password) 
		VALUES 
			("Charlie", "Erling", "charlie.erling@gmail.com", "password");