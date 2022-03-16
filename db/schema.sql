create table products (
    product_id int auto_increment primary key,
    product_no varchar(20) not null,
    product_name varchar(100) not null,
    unit_price decimal(10,2) not null,
    unique key (product_no)
);

insert into products values (null, 12345, 'Pessi', 1.2);
insert into products values (null, 54321, 'Coca Cola', 1.4);