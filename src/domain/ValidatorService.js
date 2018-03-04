// @flow
import type {Validator} from "./Validator";

const isObject = (toValidate: any) => !!(toValidate && typeof toValidate === 'object');

const isString = (toValidate: any) => typeof toValidate === 'string';

const isLengthGreaterThen = (toValidate: string, length: number) => toValidate.length > length;

export const validatorService = (): Validator => {
  return {
    isObject,
    isString,
    isLengthGreaterThen
  };
};
