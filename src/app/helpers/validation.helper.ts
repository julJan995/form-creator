export class ValidationHelper {

    static isEmptyValue(value: unknown): boolean {
      if (value === null || value === undefined) {
        return true;
      }
      
      if (typeof value === 'string') {
        return value.trim() === '';
      }
      
      return false;
    }
  }