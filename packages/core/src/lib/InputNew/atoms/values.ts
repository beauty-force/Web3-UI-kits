import { IInputBaseProps, TValidateInput } from './types';

export const inputBaseTestValidation: TValidateInput = {
    characterMaxLength: 10,
    characterMinLength: 10,
    numberMax: 10,
    numberMin: 0,
    required: true,
} as const;

export const inputBaseTestValues: IInputBaseProps = {
    autoComplete: true,
    autoFocus: true,
    defaultValue: 'default value',
    disabled: true,
    id: 'input-base',
    name: 'input base',
    placeholder: 'placeholder text',
    regExp: '[A-Za-z]',
    required: true,
    testId: 'test-input-base',
    type: 'email',
} as const;
