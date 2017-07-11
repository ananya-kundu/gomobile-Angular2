import { AnanyaAngular2Page } from './app.po';

describe('ananya-angular2 App', function() {
  let page: AnanyaAngular2Page;

  beforeEach(() => {
    page = new AnanyaAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
