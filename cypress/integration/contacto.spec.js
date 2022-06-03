/// <reference types="cypress" />

describe('Prueba el Formulario de Contacto', () => {
    it('Prueba la página de contacto y el envio de emails', () => {
        cy.visit('/contacto');

        cy.get("[data-cy='heading-contacto']").should('exist');
        cy.get("[data-cy='heading-contacto']").invoke('text').should('equal', 'Contacto');
        cy.get("[data-cy='heading-contacto']").invoke('text').should('not.equal', 'Formulario de Contacto');

        cy.get("[data-cy='heading-formulario']").should('exist');
        cy.get("[data-cy='heading-formulario']").invoke('text').should('equal', 'Llene el Formulario de Contacto');
        cy.get("[data-cy='heading-formulario']").invoke('text').should('not.equal', 'Llena el Formulario');

        cy.get("[data-cy='formulario-contacto']").should('exist');
    });

    it('Llena los campos del formulario', () => {
        cy.get("[data-cy='input-nombre']").type('Angel');
        cy.get("[data-cy='input-mensaje']").type('Necesito Comprar una casa');
        cy.get("[data-cy='input-opciones']").select('Compra');
        cy.get("[data-cy='input-precio']").type('1000000');
        cy.get("[data-cy='forma-contacto']").eq(1).check();
        cy.get("[data-cy='input-email']").type('angel.compras@gmail.com');

        cy.wait(1500);

        cy.get("[data-cy='forma-contacto']").eq(0).check();
        cy.get("[data-cy='input-telefono']").type('04165667432');
        cy.get("[data-cy='input-fecha']").type('2022-05-23');
        cy.get("[data-cy='input-hora']").type('17:30');

        cy.get("[data-cy='formulario-contacto']").submit();

        cy.get("[data-cy='alerta-envio-formulario']").should('exist');
        cy.get("[data-cy='alerta-envio-formulario']").invoke('text').should('equal', 'Mensaje Enviado Correctamente');
        cy.get("[data-cy='alerta-envio-formulario']").should('have.class', 'alerta').and('have.class', 'exito').and('not.have.class', 'error');
    });
});