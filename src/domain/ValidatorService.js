// @flow
import type {Validators} from "./Validators";

const isObject = (toValidate: any) => !!(toValidate && typeof toValidate === 'object');

const isString = (toValidate: any) => typeof toValidate === 'string';

const isLengthGreaterThen = (toValidate: string, length: number) => toValidate.length > length;

export const ValidatorService = (): Validators => {
  return {
    isObject,
    isString,
    isLengthGreaterThen
  };
};
