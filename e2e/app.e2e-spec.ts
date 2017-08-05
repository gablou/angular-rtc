import { AngularRtcPage } from './app.po';

describe('angular-rtc App', () => {
  let page: AngularRtcPage;

  beforeEach(() => {
    page = new AngularRtcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
