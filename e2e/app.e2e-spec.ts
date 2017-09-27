import { NgBookStorePage } from './app.po';

describe('ng-book-store App', function() {
  let page: NgBookStorePage;

  beforeEach(() => {
    page = new NgBookStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
