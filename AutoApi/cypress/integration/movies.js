describe('Validate integration services for movie CRUD', () => {

    beforeEach(() => {
        cy.runRequestMovie();
    });

    context('Create: Add a new movie', () => {

        it('Validate status', () => {

            cy.get('@Create').then((resp) => {
                cy.log('Status 200 is validated');
                expect(resp.status).to.eq(201);

                cy.log('The text status Created is validated');
                expect(resp.statusText).to.eq('Created');

                cy.log('True Boolean status is validated');
                expect(resp.isOkStatusCode).to.eq(true);
            });
        });

        it('Validate message', () => {

            cy.get('@Create').then((resp) => {
                cy.log('The body message is validated');
                expect(resp.body.message).to.eq('A movie has been saved');
            });
        });
    });

    context('Read: List all movies', () => {

        it('Validate status', () => {
            cy.get('@Read').then((resp) => {
                cy.log('Status 200 is validated');
                expect(resp.status).to.eq(200);

                cy.log('The text status OK is validated');
                expect(resp.statusText).to.eq('OK');

                cy.log('True Boolean status is validated');
                expect(resp.isOkStatusCode).to.eq(true);

            });
        });

        it('Validate size of movie list', () => {
            cy.get('@Read').then((resp) => {
                cy.log('The body of 116 is validated');
                expect(resp.body.length).to.eq(116);
            })
        });
    });

    context('Update: Update a movie in the list', () => {
        it('Validate status', () => {
            cy.get('@Update').then((resp) => {
                cy.log('Status 204 is validated');
                expect(resp.status).to.eq(204);

                cy.log('The text status No Content is validated');
                expect(resp.statusText).to.eq('No Content');

                cy.log('True Boolean status is validated');
                expect(resp.isOkStatusCode).to.eq(true);

            });
        });
    });

    context('Delete: Remove a movie from the list', () => {
        it('Validate status', () => {
            cy.get('@Delete').then((resp) => {
                cy.log('Status 204 is validated');
                expect(resp.status).to.eq(204);

                cy.log('The text status No Content is validated');
                expect(resp.statusText).to.eq('No Content');

                cy.log('True Boolean status is validated');
                expect(resp.isOkStatusCode).to.eq(true);

            });
        });
    });
});