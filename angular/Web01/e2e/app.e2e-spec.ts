import { Web01Page } from './app.po';

describe('web01 App', () => {
  let page: Web01Page;

  beforeEach(() => {
    page = new Web01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
