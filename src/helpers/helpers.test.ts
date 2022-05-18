import { capitalize, formatPhoneNumber } from './helpers';

test('Should be null when no phone number is provided', () => {
    expect(formatPhoneNumber('')).toBeNull();
});

test('Should separate first three numbers from the rest with a space', () => {
    expect(formatPhoneNumber('1234123123')?.split(' ')).toHaveLength(2);
});

test('Should be capitalized', () => {
    const result = capitalize('test')?.charAt(0) as string;
    const isUpperCase = (/[A-Z]/.test(result));
    expect(isUpperCase).toBeTruthy()
});
