# Project Overview

## Project Name

Standard Magic: The Gathering 

## Description

Search recent most Magic: The Gathering standard format set, Streets of New Capenna

## Card Information Endpoints

* [Show All Cards](docs/get.md#show-all-cards) : `GET /cards`
* [Show A Card](docs/get.md#show-a-card) : `GET /cards/:num`
* [Search for Cards](docs/get.md#search-for-text-on-card) : `GET /cards/o=:query`
* [Create A Card](docs/post.md) : `POST /cards`
* [Update A Card](docs/put.md) : `PUT /cards/:num`
* [Delete A Card](docs/delete.md) : `DELETE /cards/:num`

### Built With
Express<br>
Mongoose

## Roadmap
- [ ] Add data for Innistrad: Midnight Hunt,  Innistrad: Crimson Vow and  Kamigawa: Neon Dynasty
- [ ] Add Images for cards

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

## Acknowledgments

* [MTGJSON](https://mtgjson.com/)
