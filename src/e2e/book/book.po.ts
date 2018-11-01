import { browser, element, by } from 'protractor';
import {AbstractPage} from '../abstract.po';

export class BookPage extends AbstractPage {

  fillForm(name: string, author: string) {
    const nameField = element(by.id('book_name'));
    nameField.clear();
    nameField.sendKeys(name);

    const authorField = element(by.id('book_author'));
    authorField.clear();
    authorField.sendKeys(author);
  }

  getCellText(line: number, column: number) {
    return element(by.xpath('//tr[' + line + ']/td[' + column + ']')).getText();
  }

  checkLine(line: number, name: string, author: string) {
    expect(this.getCellText(line, 1)).toBe(name);
    expect(this.getCellText(line, 2)).toBe(author);
    expect(this.getCellText(line, 3)).toBe('Show');
    expect(this.getCellText(line, 4)).toBe('Edit');
    expect(this.getCellText(line, 5)).toBe('Destroy');
  }

  show(line: number) {
    this.action(line, 3);
  }

  edit(line: number) {
    this.action(line, 4);
  }

  destroy(line: number) {
    this.action(line, 5);
  }

  action(line: number, column: number) {
    element(by.xpath('//tr[' + line + ']/td[' + column + ']/a')).click();
  }

  checkShow(name: string, author: string) {
    this.checkShowLabelText(1, 'Name:');
    this.checkShowValueText(1, `Name: ${name}`);
    this.checkShowLabelText(2, 'Author:');
    this.checkShowValueText(2, `Author: ${author}`);
  }

  checkShowLabelText(line: number, label) {
    expect(this.getShowLabelText(line)).toBe(label, `Show label ${line} is not ${label}`);
  }

  checkShowValueText(line: number, value) {
    expect(this.getShowValueText(line)).toBe(value, `Show value ${line} is not ${value}`);
  }

  getShowLabelText(line: number) {
    return element(by.xpath('//div[@id="showPanel"]/p[' + line + ']/strong')).getText();
  }

  getShowValueText(line: number) {
    return element(by.xpath('//div[@id="showPanel"]/p[' + line + ']')).getText();
  }

  getMessageText() {
    return element(by.id('notificationMessage')).getText();
  }

}
