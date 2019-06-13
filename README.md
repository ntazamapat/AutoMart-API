# AutoMart API

Restful Node Car sell Application

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

- All the `code` required to get started
   
   1. Setup a Node Project
   
   
- Images of what it should look like

### Clone

- Clone this repo to your local machine using `https://github.com/ntazamapat/AutoMart-API.git`

### Setup

- You can use nodemon  to run the code




> now install npm dependecies packages


$ npm install

```

## Features

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
| /api/v1/car/available/range | GET | User view the available cars with price range|
| /api/v1/car/all | GET | User view all cars whether sold or unsold |	
| /api/v1/car/:id | DELETE | Admin can delete a specific car |

## Usage 

You can test the differents endpoints by clicking on the link of the UI
You might also use PostMan


## Authors

* **Patrick Ntazama** - *Initial work* - [AutoMart](https://github.com/ntazamapat/AutoMart-API)



## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2019 © <a href="http://fvcproductions.com" target="_blank">FVCproductions</a>.
