// @flow
import * as R from 'ramda';

import articleService from "./domain/ArticleService";
import {validate, validators} from "./domain/ValidationService";

const article1 = articleService.createArticle({
  title: 'a',
  author: 'daniel Dughy'
});
const article2 = articleService.createArticle({
  title: 'article two',
  author: 'daniel dughy'
});

const article3 = articleService.createArticle({
  title: 'article three',
  author: 'daniel dughila'
});

console.log('article1', article1);
console.log('article2', article2);
console.log('article3', article3);

if (article3) {
  console.log('incremented', articleService.incrementLikes(article3));
}

const toValidate = 'ad33';

const constraints = [
  validators.isString,
  validators.isLengthGreaterThen(3)
];

const isValid = validate(constraints, toValidate);

const isValid2 = R.allPass([validators.isString, validators.isLengthGreaterThen(3)])(toValidate);

console.log('VALID', isValid);
console.log('VALID', isValid2);
