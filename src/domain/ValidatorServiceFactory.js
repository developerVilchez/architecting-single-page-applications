// @flow
export type ValidatorService = {
  isObject(toValidate: any): boolean;
  isString(toValidate: any): boolean;
  isLengthGreaterThen(toValidate: string, length: number): boolean;
}

const isObject = (toValidate: any) => !!(toValidate && typeof toValidate === 'object');

const isString = (toValidate: any) => typeof toValidate === 'string';

const isLengthGreaterThen = (toValidate: string, length: number) => toValidate.length > length;

export const ValidatorServiceFactory = () => {
  return {
    isObject,
    isString,
    isLengthGreaterThen
  };
};
