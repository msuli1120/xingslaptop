import { PcsPage } from './app.po';

describe('pcs App', () => {
  let page: PcsPage;

  beforeEach(() => {
    page = new PcsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
