// @flow
export type Validators = {
  isObject(toValidate: any): boolean;
  isString(toValidate: any): boolean;
  isLengthGreaterThen(toValidate: string, length: number): boolean;
}
