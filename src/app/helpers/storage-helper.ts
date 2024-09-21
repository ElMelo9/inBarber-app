// helpers/storage-helper.ts
export function saveToLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  export function getFromLocalStorage(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  export function deleteFromLocalStorage(key: string): boolean {
    const value = localStorage.removeItem(key);
    const isKey =localStorage.getItem(key)
    if(isKey) return false;
    return true;
  }