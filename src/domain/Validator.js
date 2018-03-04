// @flow
export type Validator = {
  isObject(toValidate: any): boolean;
  isString(toValidate: any): boolean;
  isLengthGreaterThen(toValidate: string, length: number): boolean;
}
