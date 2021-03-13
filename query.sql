SELECT p.id, p.name, p.url_image, p.price, p.discount, c.name AS category 
FROM product AS p 
INNER JOIN category AS c

SELECT p.id p.name, p.url_image, p.price, p.discount, c.name AS category,
FROM product AS p 
INNER JOIN category AS c
ON p.category = c.id
WHERE p.category = ?

SELECT * FROM product WHERE name LIKE '%?%'