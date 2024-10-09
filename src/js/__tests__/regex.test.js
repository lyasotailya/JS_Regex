import Validator from '../regex';
import { test } from "@jest/globals";


test('validateUsername is correct', () => {
  expect(new Validator('aBc123-456xYz').validateUsername()).toBeTruthy();
  expect(new Validator('gIj78_90uVw').validateUsername()).toBeTruthy();
  expect(new Validator('-name').validateUsername()).toBeFalsy();
  expect(new Validator('name-').validateUsername()).toBeFalsy();
  expect(new Validator('_name').validateUsername()).toBeFalsy();
  expect(new Validator('name_').validateUsername()).toBeFalsy();
  expect(new Validator('1name').validateUsername()).toBeFalsy();
  expect(new Validator('name1').validateUsername()).toBeFalsy();
  expect(new Validator('na1234me').validateUsername()).toBeFalsy();
  expect(new Validator('na.me').validateUsername()).toBeFalsy();
  expect(new Validator('na!me').validateUsername()).toBeFalsy();
  expect(new Validator('na[me').validateUsername()).toBeFalsy();
  expect(new Validator('na|me').validateUsername()).toBeFalsy();
})
