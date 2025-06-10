ALTER USER 'ecommerceapp'@'%' IDENTIFIED WITH mysql_native_password BY 'ecommerceapp';
FLUSH PRIVILEGES;
SELECT 1;