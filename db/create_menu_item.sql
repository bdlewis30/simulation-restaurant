INSERT INTO Menu (menu_name, menu_desc, menu_price)
VALUES ($1, $2, $3)
RETURNING *;