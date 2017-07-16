import { SolsticeChallengePage } from './app.po';

describe('solstice-challenge App', () => {
  let page: SolsticeChallengePage;

  beforeEach(() => {
    page = new SolsticeChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
