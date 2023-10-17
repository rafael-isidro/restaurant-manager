drop table if exists products;

drop table if exists restaurants;

create table if not exists restaurants(
  id serial primary key,
  restaurant_picture varchar(255) not null,
  restaurant_name varchar(255) not null,
  restaurant_adress varchar(255) not null,
  opening_hours varchar(255) not null
);

create table if not exists products(
  id serial primary key,
  restaurant_id integer references restaurants (id),
  product_picture varchar(255) not null,
  product_name varchar(255) not null,
  product_value integer not null check (product_value > 0),
  product_category varchar(255) not null,
  promo_description varchar(255),
  promo_value integer check (promo_value > 0),
  promo_period varchar(255)
);