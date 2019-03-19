import { MyAbpTemplatePage } from './app.po';

describe('MyAbp App', function() {
  let page: MyAbpTemplatePage;

  beforeEach(() => {
    page = new MyAbpTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
