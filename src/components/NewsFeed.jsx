import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Newspaper, ArrowLeft, BookmarkPlus, Share2, CheckCircle } from 'lucide-react';
import useNewsStore from "../store/newsStore";
import { newsData } from "../data/mockNews";

const NewsFeed = () => {
  const navigate = useNavigate();
  const { preferences, savedArticles, readArticles, saveArticle, markAsRead } = useNewsStore();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredNews = Object.entries(newsData)
    .filter(([category]) => preferences[category])
    .flatMap(([_, articles]) => articles);

  const handleSave = (article) => {
    saveArticle(article);
  };

  const handleShare = (article) => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href,
      });
    }
  };

  const isArticleSaved = (articleId) => {
    return savedArticles.some(article => article.id === articleId);
  };

  const isArticleRead = (articleId) => {
    return readArticles.has(articleId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-4 rounded-xl shadow-inner">
              <Newspaper className="h-7 w-7 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">News Feed</h2>
          </div>
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 btn-secondary hover:bg-white/80"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Dashboard
          </button>
        </div>

        {filteredNews.length === 0 ? (
          <div className="glass-effect p-8 rounded-2xl text-center">
            <p className="text-gray-600 text-lg">Please enable some news categories in your preferences to see news.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredNews.map((article) => (
              <div 
                key={article.id} 
                className={`glass-effect p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isArticleRead(article.id) ? 'opacity-75' : ''
                }`}
              >
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  <div className="w-2/3">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-800">{article.title}</h3>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleSave(article)}
                          className={`p-2 rounded-lg transition-colors ${
                            isArticleSaved(article.id)
                              ? 'bg-blue-100 text-blue-600'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          <BookmarkPlus className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleShare(article)}
                          className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
                        >
                          <Share2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{article.summary}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">{article.date}</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          article.sentiment === 'positive' ? 'bg-green-100 text-green-700' :
                          article.sentiment === 'negative' ? 'bg-red-100 text-red-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {article.sentiment}
                        </span>
                      </div>
                      <button
                        onClick={() => markAsRead(article.id)}
                        className={`flex items-center gap-2 text-sm ${
                          isArticleRead(article.id)
                            ? 'text-green-600'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        <CheckCircle className="h-4 w-4" />
                        {isArticleRead(article.id) ? 'Read' : 'Mark as read'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsFeed;