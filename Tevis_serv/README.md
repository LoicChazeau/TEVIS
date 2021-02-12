Database management using LARAVEL 8
============================

This project is an API that manages a Databases of all Pokémons from gen1, you can find: pokémons, Id, Types, Weaknesses, Evolutions etc....

----------


Getting started
----------------------------
You'll need some solid base on :
 - PHP
 - SQL
 - Laravel

---
Firstly you'll need Appache2 to be able to launch the project:

https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-20-04-fr

Laravel is a framework for php, it is using a lot of class, so we can call function pre-created: buying us a lot of time ! Of course those class are created automatically : at the creation of the project laravel create a lot of folders and files. >To install laravel on ubuntu simply follow this tutorial :
https://www.apprendre-laravel.fr/laraguide/2017-11-03-installation-d-un-projet-laravel-avec-ubuntu .

Then you'll have to get familiar with the laravel API and DB management

---

API Routes
---

Here's the routes of the API and the responses: 

GET /pokemons

Purpose :

Return an array containing all pokemons

Request header :

    {
    "Content -Type": "application/json"
    }
Response•Success200:

    {
        "pokemons ": [
            {
                "id": Number ,
                "name": String ,
                "types": [
                    "type1 ": String ,
                    "type2 ": String ,
                    ]
                ,"image": String ,
            },
        ]
    }

GET /pokemons/{id}

Purpose :

Return a pokemon’s data

Request header

    {
        "Content -Type": "application/json"
    }

Response :

Success200


    {
        "note": {
            "id": Number ,
            "name": String ,
            "types ": [
                "type1": String ,
                "type2": String ,
            ],
            "image ": String ,
            "description ": String ,
            "stats ": {
                "hp": Number ,
                "attack ": Number ,
                "defense ": Number ,
                "special_attack ": Number ,
                "special_defense ": Number ,
                "speed": Number ,
                }
            "weaknesses ": {
                "bug": Number ,
                "dark": Number ,
                "dragon ": Number ,
                "electric ": Number ,
                "fairy": Number ,
                "fight": Number ,
                "fire": Number ,
                "flying ": Number ,
                "ghost": Number ,
                "grass": Number ,
                "ground ": Number ,
                "ice": Number ,
                "normal ": Number ,
                "poison ": Number ,
                "psychic ": Number ,
                "rock": Number ,
                "steel": Number ,
                "water": Number ,
            },
            "evolutions ": {
                "evolution ": [
                    "base_id ": Number ,
                    "evolution_id ": Number ,
                    "required_lvl ": Number ,
                ],
            }
        }
    }


Error 400:

    {
        "error ": {
            "message ": "Invalid  query"
        }
    }

Error 404:

    {
        "error ": {
            "message ": "Ressource  not  found"
        }
    }

----------

Version:

 - Laravel Framework 8.20.1
 - npm: 6.14.9
 - php: 7.4.13

Author
----------------------------

Guillaume Ravan Nalbandian


