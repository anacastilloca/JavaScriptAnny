import { ReplicaPagWebPage } from './app.po';

describe('replica-pag-web App', () => {
  let page: ReplicaPagWebPage;

  beforeEach(() => {
    page = new ReplicaPagWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
