ALTER TABLE first_option
ADD COLUMN categoryId INT AFTER hasSecondOption;

ALTER TABLE second_option
ADD COLUMN categoryId INT AFTER firstOptionId;

