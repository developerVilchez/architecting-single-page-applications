import * as R from 'ramda';

const isString = (data) => typeof data === 'string';

const isLengthGreaterThen = R.curry((length, data) => {
  try {
    return data.length > length
  } catch (e) {
    return false;
  }
});

export const checkValidators = (acc, isValid) => {
  if (isValid === false) {
    acc = false;
    return acc;
  }
  return acc;
};

export const validators = {
  isString,
  isLengthGreaterThen
};

export const validate = (validators: any[], value): boolean =>
  R.juxt(validators)(value)
    .reduce(checkValidators, true);
