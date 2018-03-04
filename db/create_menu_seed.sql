-- 67C, 69F, 69G (69G all I would need to do is change decimal to float)
CREATE TABLE IF NOT EXISTS Menu (
    id SERIAL PRIMARY KEY,
    menu_name VARCHAR(50),
    menu_desc VARCHAR(180),
    menu_price DECIMAL(10,2)
)
