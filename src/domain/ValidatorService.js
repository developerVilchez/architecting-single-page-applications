// @flow
import type {Validators} from "./Validators";

const isObject = (toValidate: any) => !!(toValidate && typeof toValidate === 'object');

const isString = (toValidate: any) => typeof toValidate === 'string';

const isLengthGreaterThen = (toValidate: string, length: number) => toValidate.length > length;

// Todo rename into validatorService and return an object called get validators.
export const getValidators = (): Validators => {
  return {
    isObject,
    isString,
    isLengthGreaterThen
  };
};
