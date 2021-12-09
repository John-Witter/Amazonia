# Amazonia

![Amazonia](https://user-images.githubusercontent.com/74742629/140455008-b307ea27-ee7b-4d4c-a392-c69d6c15e805.png)


## Summary

<!-- [GoodMovies](https://good-movies-js.herokuapp.com/) is a single-page web application based on Good Reads using Javascript, Express, and PostgresSQL. Good Movies allows users to:

* Create an account
* Log in / Log out
* Create custom movie lists
* Edit movie list names
* Delete movie lists
* Rate movies
* Leave reviews for movies
* Search for movies based on a keyword
* See a paginated view of each of the 900+ movies in the database -->

## Overall Structure

### Database Schema
![DatabaseSchema](https://user-images.githubusercontent.com/74742629/140444328-a4d2ad97-2907-4c01-a2a0-afcc5e1ed9c9.png)
### Back end
The application was built using Javascript with a postgreSQL database and PUG templating. Backend structure is RESTful and all data requests use AJAX and are fullfilled with a mixture of a JSON API and PUG rendering.

### Front end 
The front end is built using PUG templates, CSS, and DOM maninuplation. Vanilla JS was used where possible to minimize page reloading.


### Libraries

Good Reads uses:
- express
  - express session
  - express validator
- sequelize
- bcrypt
- pug

## Primary Components

### User Authorization
User authorization is handled in JavaScript using BCrypt for password hashing. These hashed passwords are saved to the database instead of the plain-text passwords. Upon login, the password that a user enters is rehashed and checked against the hashed password in the database to verify credentials.



### CsrfAuth
GoodMovies uses Csrf Authentication to allow users to sign in. 

### User 

The users accounts have a right side full of movie lists, 2 of which are permanent. These lists can be created as well as edited, and are used to store any movies you want. 



### Home Page

The homepage Highlights 20 movies, which are laid out in a row of recently added and highest rated.

### Movies

The movies page, allows users to browse through a wide selection of over 900 movies, arranged by sets of 50.
The search feature allows users to look up certain movies based on keywords and lists them all out.





