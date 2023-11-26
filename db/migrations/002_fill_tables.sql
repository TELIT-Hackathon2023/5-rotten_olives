INSERT INTO sector(sector_id, sector_name) VALUES(1, 'BCT-EAST');
INSERT INTO sector(sector_id, sector_name) VALUES(2, 'BCT-WEST');

INSERT INTO spot(spot_id, spot_type, spot_state, spot_number, sector_id) VALUES(1, 0, 0, 1, 1);
INSERT INTO spot(spot_id, spot_type, spot_state, spot_number, sector_id) VALUES(2, 0, 0, 2, 1);
INSERT INTO spot(spot_id, spot_type, spot_state, spot_number, sector_id) VALUES(3, 0, 0, 3, 1);
INSERT INTO spot(spot_id, spot_type, spot_state, spot_number, sector_id) VALUES(4, 0, 0, 4, 1);
INSERT INTO spot(spot_id, spot_type, spot_state, spot_number, sector_id) VALUES(5, 0, 0, 5, 1);
INSERT INTO spot(spot_id, spot_type, spot_state, spot_number, sector_id) VALUES(6, 0, 0, 6, 1);
INSERT INTO spot(spot_id, spot_type, spot_state, spot_number, sector_id) VALUES(7, 0, 0, 7, 1);
INSERT INTO spot(spot_id, spot_type, spot_state, spot_number, sector_id) VALUES(8, 0, 0, 8, 1);
INSERT INTO spot(spot_id, spot_type, spot_state, spot_number, sector_id) VALUES(9, 0, 0, 9, 1);
INSERT INTO spot(spot_id, spot_type, spot_state, spot_number, sector_id) VALUES(10, 0, 0, 10, 1);
INSERT INTO spot(spot_id, spot_type, spot_state, spot_number, sector_id) VALUES(11, 0, 0, 11, 1);
INSERT INTO spot(spot_id, spot_type, spot_state, spot_number, sector_id) VALUES(12, 0, 0, 12, 1);
INSERT INTO spot(spot_id, spot_type, spot_state, spot_number, sector_id) VALUES(13, 0, 0, 13, 1);
INSERT INTO spot(spot_id, spot_type, spot_state, spot_number, sector_id) VALUES(14, 0, 0, 14, 1);
INSERT INTO spot(spot_id, spot_type, spot_state, spot_number, sector_id) VALUES(15, 0, 0, 15, 1);



INSERT INTO employee (employee_id, firstname, lastname, email, phone, car_licenses)
VALUES
  (1, 'John', 'Doe', 'john.doe@example.com', '+421 912 345 678', '{"car1": "BA123AB"}'),
  (2, 'Jane', 'Smith', 'jane.smith@example.com', '+421 915 678 901', '{"car1": "TN456CD", "car2": "BL789XY", "car3": "BL392JK"}'),
  (3, 'Bob', 'Johnson', 'bob.johnson@example.com', '+421 917 234 567', '{"car1": "NR012FG", "car2": "BB345LM"}'),
  (4, 'Alice', 'Williams', 'alice.williams@example.com', '+421 910 987 654', '{"car1": "CA678PQ", "car2": "VA901ST"}'),
  (5, 'Charlie', 'Brown', 'charlie.brown@example.com', '+421 914 567 890', '{"car1": "TM234WX", "car2": "TT567YZ"}'),
  (6, 'Eva', 'Davis', 'eva.davis@example.com', '+421 913 456 789', '{"car1": "PK890BC"}'),
  (7, 'Michael', 'Miller', 'michael.miller@example.com', '+421 918 901 234', '{"car1": "VV456HI"}'),
  (8, 'Olivia', 'Jones', 'olivia.jones@example.com', '+421 916 789 012', '{"car1": "TB012NO", "car2": "DT345RS"}'),
  (9, 'David', 'Garcia', 'david.garcia@example.com', '+421 919 012 345', '{"car1": "UC678TU"}'),
  (10, 'Sophia', 'Taylor', 'sophia.taylor@example.com', '+421 911 234 567', '{"car1": "BB234ZA", "car2": "CH567DE"}');



INSERT INTO reservation (reservation_id, start_time, end_time, created, employee_id, spot_id, vehicle_license)
VALUES
  (1, '2023-12-01 08:00:00', '2023-12-01 12:00:00', '2023-11-30 10:30:00', 1, 1, 'BA123AB'),
  (2, '2023-12-01 09:00:00', '2023-12-01 11:00:00', '2023-11-30 11:45:00', 5, 8, 'TM234WX'),
  (3, '2023-12-02 07:30:00', '2023-12-02 12:00:00', '2023-12-1 16:23:53', 3, 10, 'NR012FG');


