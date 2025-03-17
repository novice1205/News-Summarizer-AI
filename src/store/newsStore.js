import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useNewsStore = create(
  persist(
    (set) => ({
      preferences: {
        technology: true,
        business: false,
        sports: false,
        entertainment: false,
        health: false,
      },
      savedArticles: [],
      readArticles: new Set(),
      setPreferences: (newPreferences) => set({ preferences: newPreferences }),
      saveArticle: (article) =>
        set((state) => ({
          savedArticles: [...state.savedArticles, article],
        })),
      markAsRead: (articleId) =>
        set((state) => ({
          readArticles: new Set([...state.readArticles, articleId]),
        })),
      removeSavedArticle: (articleId) =>
        set((state) => ({
          savedArticles: state.savedArticles.filter((article) => article.id !== articleId),
        })),
    }),
    {
      name: 'news-preferences',
    }
  )
);

export default useNewsStore;