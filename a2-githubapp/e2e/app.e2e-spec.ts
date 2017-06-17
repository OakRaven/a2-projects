import { A2GithubAppPage } from './app.po';

describe('a2-test App', () => {
  let page: A2GithubAppPage;

  beforeEach(() => {
    page = new A2GithubAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
