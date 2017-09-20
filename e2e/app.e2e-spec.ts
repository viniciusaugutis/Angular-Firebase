import { WebchatUtfware2017Page } from './app.po';

describe('webchat-utfware2017 App', () => {
  let page: WebchatUtfware2017Page;

  beforeEach(() => {
    page = new WebchatUtfware2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
