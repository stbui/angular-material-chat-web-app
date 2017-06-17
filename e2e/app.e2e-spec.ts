import { AngularMaterialChatWebAppPage } from './app.po';

describe('angular-material-chat-web-app App', () => {
  let page: AngularMaterialChatWebAppPage;

  beforeEach(() => {
    page = new AngularMaterialChatWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
