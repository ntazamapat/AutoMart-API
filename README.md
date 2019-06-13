# AutoMart API

Restful Node Car Selling Application

## Table of Contents 


- [Installation](#installation)
- [Features](#features)
- [Contributing](#contributing)
- [Usage](#usage)
- [Author](#author)
- [Support](#support)
- [License](#license)


---


## Installation
   
   1. Setup a Node Project

### Clone

- Clone this repo to your local machine using `https://github.com/ntazamapat/AutoMart-API.git`

### Setup


> now install npm dependecies packages

$ npm install

- You can use nodemon  to run the code

### Features

Below the functional endpoints API

```



 URL | METHOD | DESCRIPTION |
| ------ | ------ | ---------- |
| /api/v1/auth/signup | POST | Get the user to signup |
| /api/v1/auth/signin | POST | Get the user into the system |
| /api/v1/car | POST | Post a new car |
| /api/v1/order | POST | User can make an order |
| /api/v1/car/:id/price | PATCH | User update the price of posted car |
| /api/v1/order/:id/price | PATCH | User update the price of pendig order |
| /api/v1/car/:id/status | PATCH | User mark the car as sold |
| /api/v1/car/:id | GET | User view the specific car |
| /api/v1/car/available | GET | User view the available cars |
| /api/v1/car?status=available&min_price=&max_price= | GET | User view the available cars with price range|
| /api/v1/car | GET | User view all cars whether sold or unsold |	
| /api/v1/car/:id | DELETE | Admin can delete a specific car |

```
## Languages & tools

### HTML
- [express-edge](https://github.com/ecrmnn/module-boilerplate) for some templating.

### JavaScript

### CSS

.



### Usage 

You can test the differents endpoints by clicking on the link of the UI or you can use POSTMAN


### Author

* **Patrick Ntazama** - *Initial work* - [AutoMart](https://github.com/ntazamapat/AutoMart-API)



### License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2019 © <a href="http://fvcproductions.com" target="_blank">FVCproductions</a>.
