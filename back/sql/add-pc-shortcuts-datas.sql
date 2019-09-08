INSERT INTO category (label, value) VALUES ("pcShortcuts", "PC Shortcuts");

INSERT INTO first_option (label, value, hasSecondOption, categoryId) VALUES 
("copy", "copy", 0, 2),
("paste", "paste", 0, 2),
("create", "create", 1, 2);

INSERT INTO second_option (label, value, firstOptionId, categoryId) VALUES
("createFile", "a file", 7, 2),
("createDirectory", "a directory", 7, 2);

INSERT INTO cheat_sheet (label, value, details, firstOptionId, secondOptionId, categoryId) VALUES
("copy", "ctrl + c", "For Mac users, ctrl is command or cmd", 5, null, 2),
("paste", "ctrl + v", "For Mac users, ctrl is command or cmd", 6, null, 2),
("createFile", "ctrl + n", "For Mac users...", 7, 7, 2),
("createDirectory", "ctrl + maj + n", "For mac users", 7, 8, 2);




