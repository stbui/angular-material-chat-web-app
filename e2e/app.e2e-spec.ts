import { Angular2Material2ChatWebAppPage } from './app.po';

describe('angular2-material2-chat-web-app App', () => {
  let page: Angular2Material2ChatWebAppPage;

  beforeEach(() => {
    page = new Angular2Material2ChatWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
