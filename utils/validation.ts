export const isUUID = (check: string): boolean =>
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89AB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/g.test(check);

export const isEmail = (check: string): boolean => /^$/.test(check);
