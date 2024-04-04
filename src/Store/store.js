// store.js
import create from 'zustand';
const useSharedStore = create((set) => ({
  id: null, 
  setId: (newId) => set({ id: newId }),


}));

export default useSharedStore;
