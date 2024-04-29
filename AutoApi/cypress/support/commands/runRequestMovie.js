import { Rergister, Create, Read, Update, Delete } from '../../fixtures/data_movies_api';
import {PathURL} from '../../fixtures/util/path-url'
export function runRequestMovie() {

    cy.request(Rergister.Body).as('Rergister').then((resp) => {
        Create.Body.headers.authorization = `bearer ${resp.body.accessToken}`;
        Update.Body.headers.authorization = `bearer ${resp.body.accessToken}`;
        Delete.Body.headers.authorization = `bearer ${resp.body.accessToken}`;
    });

    cy.request(Create.Body).as('Create')

    cy.request(Read.Body).as('Read').then((resp) => {
        Update.Body.url = `${Cypress.env('URL')}${PathURL['movies']}/${resp.body[0].id}`;
        Delete.Body.url = `${Cypress.env('URL')}${PathURL['movies']}/${resp.body[0].id}`;
    });

    cy.request(Update.Body).as('Update')
    
    cy.request(Delete.Body).as('Delete')
}