import { runRequestMovie } from './commands/runRequestMovie'

Cypress.Commands.add('runRequestMovie', () => {
    runRequestMovie();
});