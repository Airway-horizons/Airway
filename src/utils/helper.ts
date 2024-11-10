export const localStorageUtil = {
  setItem: function (key: string, value: string | object): boolean {
    try {
      if (!key || value === undefined) throw new Error('Invalid key or value');
      const valueToStore = typeof value === 'object' ? JSON.stringify(value) : value;
      localStorage.setItem(key, valueToStore);
      return true;
    } catch (error) {
      console.error('Error setting item in localStorage:', error);
      return false;
    }
  },

  getItem: function <T>(key: string): T | null {
    try {
      if (!key) throw new Error('Key must be provided');
      const value = localStorage.getItem(key);
      return value ? (JSON.parse(value) as T) : null;
    } catch (error) {
      console.error('Error getting item from localStorage:', error);
      return null;
    }
  },

  removeItem: function (key: string): boolean {
    try {
      if (!key) throw new Error('Key must be provided');
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing item from localStorage:', error);
      return false;
    }
  },

  clear: function (): boolean {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing localStorage:', error);
      return false;
    }
  },
};

export const role = {
  admin: 'admin',
  user: 'user',
};
