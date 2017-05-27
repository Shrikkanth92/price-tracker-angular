import { PriceTrackerPage } from './app.po';

describe('price-tracker App', () => {
  let page: PriceTrackerPage;

  beforeEach(() => {
    page = new PriceTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
