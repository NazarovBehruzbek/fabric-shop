// store.js
import {create} from 'zustand';
const useSharedStore = create((set) => ({
  id: null,
  setId: (newId) => set({ id: newId }),
  newsId: null,
  setnewsId: (newId) => set({ newsId: newId }),

}));

export default useSharedStore;
