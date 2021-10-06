export const setDataToLocalStorage = (field: string, data: any) => localStorage.setItem(field, JSON.stringify(data));
export const getDataFromLocalStorage = (field: string) => JSON.parse(localStorage.getItem(field) as any);
