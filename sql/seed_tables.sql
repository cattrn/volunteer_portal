INSERT INTO teams(team_name)
VALUES
('Legal'), ('Administrative'), ('Business and Finance'), ('Marketing'), ('Technology'), ('Operations'), ('Information'), ('Policy'), ('Music and Arts'), ('Human Resources'), ('Risk Management'), ('Crisis Response'), ('Work Health and Safety');

INSERT INTO users(firstname, lastname, contact_number, email, password, primary_team, position, employee_status, city, commencement_date, active, user_role)
VALUES
('Caterina', 'Turntest', '0400 000 000', 'test@email.com', crypt('Hello1', gen_salt('bf')), 'Technology', 'Chief Technological Officer', 'volunteer', 'Melbourne, Australia', '2019-11-11 00:00:00', true, 'admin'),
('Some', 'Volunteer', '0400 000 001', 'test2@email.com', crypt('Hello1', gen_salt('bf')), 'Business and Finance', 'Team member', 'volunteer', 'Sydney, Australia', '2019-11-11 00:00:00', true, 'member');