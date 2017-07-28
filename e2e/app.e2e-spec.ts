import { HospitalPage } from './app.po';

describe('hospital App', () => {
  let page: HospitalPage;

  beforeEach(() => {
    page = new HospitalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
