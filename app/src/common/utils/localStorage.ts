export const setData = (field: string, data: any) => localStorage.setItem(field, JSON.stringify(data));
export const getData = (field: string) => JSON.parse(localStorage.getItem(field) as any);
