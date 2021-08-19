const WebNavigator = require('../WebNavigator');

describe('WebNavigator', () => {
  test('creates web navigator with current page', () => {
    const webNav = new WebNavigator('Start Page');

    expect(webNav.currentPage).toBe('Start Page');
    expect(webNav.prevPage).toBeNull();
    expect(webNav.nextPage).toBeNull();
  });

  test('adds new page when we have not revisited previous pages', () => {
    const webNav = new WebNavigator('Page 1');

    webNav.addNewPage('Page 2');

    expect(webNav.currentPage).toBe('Page 2');
    expect(webNav.prevPage).toBe('Page 1');
    expect(webNav.nextPage).toBeNull();

    // webNav.showStatus('NEW');
  });

  test('goes back to the previous pages', () => {
    const webNav = new WebNavigator('Page 1');

    webNav.addNewPage('Page 2');
    webNav.addNewPage('Page 3');

    webNav.goBack();

    expect(webNav.currentPage).toBe('Page 2');
    expect(webNav.prevPage).toBe('Page 1');
    expect(webNav.nextPage).toBe('Page 3');

    webNav.goBack();

    expect(webNav.currentPage).toBe('Page 1');
    expect(webNav.prevPage).toBeNull();
    expect(webNav.nextPage).toBe('Page 2');

    webNav.goBack();

    expect(webNav.currentPage).toBe('Page 1');
    expect(webNav.prevPage).toBeNull();
    expect(webNav.nextPage).toBe('Page 2');
  });

  test('goes forward to the next page', () => {
    const webNav = new WebNavigator('Page 1');

    webNav.addNewPage('Page 2');
    webNav.addNewPage('Page 3');

    webNav.goBack();
    webNav.goBack();
    webNav.goForward();

    expect(webNav.currentPage).toBe('Page 2');
    expect(webNav.prevPage).toBe('Page 1');
    expect(webNav.nextPage).toBe('Page 3');

    webNav.goForward();

    expect(webNav.currentPage).toBe('Page 3');
    expect(webNav.prevPage).toBe('Page 2');
    expect(webNav.nextPage).toBeNull();

    webNav.goForward();

    expect(webNav.currentPage).toBe('Page 3');
    expect(webNav.prevPage).toBe('Page 2');
    expect(webNav.nextPage).toBeNull();
  });

  test('adds new page when we have revisited previous pages', () => {
    const webNav = new WebNavigator('Page 1');

    webNav.addNewPage('Page 2');
    webNav.addNewPage('Page 3');

    webNav.goBack();
    webNav.addNewPage('Page 4');

    expect(webNav.currentPage).toBe('Page 4');
    expect(webNav.prevPage).toBe('Page 2');
    expect(webNav.nextPage).toBeNull();
  });
});
