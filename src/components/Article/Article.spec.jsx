import React from 'react';
import { mount } from '@cypress/react18';
import TestdArticle from './Article';

describe('Article component', () => {
  // Adicione props e children ao montar o componente
  const mockParagraphs = [
    <p key="1" className="article__paragraph">
      Paragraph 1
    </p>,
    <p key="2" className="article__paragraph">
      Paragraph 2
    </p>,
    <p key="3" className="article__paragraph">
      Paragraph 3
    </p>,
    <p key="4" className="article__paragraph">
      Paragraph 4
    </p>,
    <p key="5" className="article__paragraph">
      Paragraph 5
    </p>,
  ];

  beforeEach(() => {
    // Passe title e children como props
    mount(<TestdArticle title="Headline">{mockParagraphs}</TestdArticle>);
  });

  it('should contain Headline', () => {
    cy.get('h1.article__title').should('have.text', 'Headline'); // Adicione a classe
  });

  it('should contain 5 paragraphs', () => {
    cy.get('p.article__paragraph').should('have.length', 5);
  });

  it('should have correct styles', () => {
    cy.get('.article').should('have.css', 'max-width', '800px');
    cy.get('.article__paragraph')
      .first()
      .should('have.css', 'color', 'rgb(51, 51, 51)');
  });

  it('should have styles added with media', () => {
    // Defina o viewport para acionar a media query
    cy.viewport(800, 600);
    cy.get('.article')
      .should('have.css', 'padding-left', '32px') // Valor corrigido para 2em (1em = 16px)
      .and('have.css', 'margin-bottom', '56px'); // Valor corrigido para 3.5em (3.5 * 16 = 56px)
  });
});
