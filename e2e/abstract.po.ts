import { browser, element, by } from 'protractor';

export class AbstractPage {

  navigateToBookListing() {
    browser.get('/books');
    browser.waitForAngular('Waiting for Angular after opening Book listing.');

  }

  getHeaderText() {
    return element(by.css(`h1`)).getText();
  }

  clickLink(linkText: string) {
    element(by.linkText(linkText)).click();
    browser.waitForAngular('Waiting for Angular after clicking on Link: ' + linkText);
  }

  clickButton(buttonText: string) {
    element(by.buttonText(buttonText)).click();
    browser.waitForAngular('Waiting for Angular after clicking on Button: ' + buttonText);
  }

  confirmDialog() {
    browser.switchTo().alert().accept();
  }

}
