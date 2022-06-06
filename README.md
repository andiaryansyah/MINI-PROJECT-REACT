# Merchant Service

An experiment of a merchant service

## Features

Expose several APIs that do these functions.

### Features of Merchant
```
post("http://localhost:5000/users")
```
for Merchant Register

```
delete("http://localhost:5000/users/:id")
```
for Delete a Merchant

```
post("http://localhost:5000/login")
```
for Merchant Login

```
get("http://localhost:5000/users")
```
for get all account in Dashboard after login

### Features of Product
```
get("http://localhost:5000/products")
```
for get all Products

```
get("http://localhost:5000/products/:id")
```
for get a Product

```
post("http://localhost:5000/products")
```
Add a new product

```
patch("http://localhost:5000/products/:id")
```
for Update a Product

```
delete("http://localhost:5000/products/:id")
```
for Delete a Product



### Merchant

1. Register and delete account
2. Login

### Product

1. Get list of products
2. Get a product
3. Add a new product
4. Update product
5. Delete product

## How to Install
```
npm install
```

## My Library Backend
```
bcrypt
cookie-parser
cors
dotenv
express
express-fileupload
gitignore
jsonwebtoken
mysql2
sequelize
```

## My Library Frontend
```
autoprefixer
axios
js-cookie
jwt-decode
node-sass
react-bootstrap
react-bootstrap-icons
react-loading
react-router-dom
react-split-pane
web-vitals
```

## How to Run

```
npm start
```

## Architecture

[here](ARCHITECTURE.md)
