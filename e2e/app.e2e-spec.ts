import { Clitest3Page } from './app.po';

describe('clitest3 App', () => {
  let page: Clitest3Page;

  beforeEach(() => {
    page = new Clitest3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
