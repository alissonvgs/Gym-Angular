///<reference path="../abstract.po.ts"/>
///<reference path="book.po.ts"/>
import { BookPage } from './book.po';

describe('Book', () => {
  let page: BookPage;

  beforeEach(() => {
    page = new BookPage();
  });

  it('empty book list', () => {
    page.navigateToBookListing();
  });

  it('create new book', () => {

    page.clickLink(`New Book`);
    page.fillForm('Book name 1', 'Author 1');
    page.clickButton(`Create Book`);
  });

  it('check created book in show page', () => {
    expect(page.getMessageText()).toBe('Book was successfully created.', 'Create message not found');
    page.checkShow('Book name 1', 'Author 1');
  });

  it('check created book in listing', () => {
    page.clickLink(`Back`);
    expect(page.getHeaderText()).toContain(`Books`);
    page.checkLine(1, 'Book name 1', 'Author 1');
  });

  it('show created book', () => {
    page.show(1);
    page.checkShow('Book name 1', 'Author 1');
    page.clickLink(`Back`);
  });

  it ('edit book ', () => {
    page.edit(1);
    page.fillForm('Book name 2', 'Author 2');
    page.clickButton(`Update Book`);
  });

  it ('check updated book in show page', () => {
    expect(page.getMessageText()).toBe('Book was successfully updated.', 'Update message not found');
    page.checkShow('Book name 2', 'Author 2');
  });

  it ('edit book ', () => {
    page.clickLink(`Back`);
    page.checkLine(1, 'Book name 2', 'Author 2');
  });

  it('show updated book', () => {
    page.show(1);
    page.checkShow('Book name 2', 'Author 2');
    page.clickLink(`Back`);
  });

  it ('should destroy a book ', () => {
    page.destroy(1);
    page.confirmDialog();
    expect(page.getMessageText()).toBe('Book was successfully destroyed.', 'Destroy message not found');
  });
});
