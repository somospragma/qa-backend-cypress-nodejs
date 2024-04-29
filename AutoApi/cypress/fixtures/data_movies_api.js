import {PathURL} from '../fixtures/util/path-url';

export const Rergister = {
    Body: {
        "method": "POST",
        "url": `${Cypress.env('URL')}${PathURL['register']}`,
        "body": {
            "email": Cypress.env('USER'),
            "password": Cypress.env('PASSWORD')
        }
    }
}

export const Create = {
    Body: {
        "url": `${Cypress.env('URL')}${PathURL['movies']}`,
        "method": "POST",
        "body": {
            "title": "Pelicula de drama 5",
            "year": 2009,
            "genre": "Drama",
            "director": "Prueba",
            "rate": 1
        },
        "headers": {
            "authorization": null
        }
    }
}

export const Read = {
    Body: {
        "method": "GET",
        "url": `${Cypress.env('URL')}${PathURL['movies']}`
    }
}

export const Update = {
    Body: {
        "url": null,
        "method": "PUT",
        "body": {
            "title": "Pelicula Modificada",
            "year": 2009,
            "genre": "Drama",
            "director": "Prueba",
            "rate": 1
        },
        "headers": {
            "authorization": null
        }
    }
}

export const Delete = {
    Body: {
        "url": null,
        "method": "DELETE",
        "headers": {
            "authorization": null
        }
    }
}