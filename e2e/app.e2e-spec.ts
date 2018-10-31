import { CrudAppPage } from './app.po';

describe('crud-app App', () => {
  let page: CrudAppPage;

  beforeEach(() => {
    page = new CrudAppPage();
  });

  it('should provide CRUD routes', () => {
    page.navigateToBookListing();
    expect(page.getHeaderText()).toContain(`Books`);

    page.clickLink(`New Book`);
    expect(page.getHeaderText()).toContain(`New Book`);

    page.clickLink(`Back`);
    expect(page.getHeaderText()).toContain(`Books`);
  });

});
