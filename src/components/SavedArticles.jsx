import { useNavigate } from 'react-router-dom';
import { BookMarked, ArrowLeft, Trash2, Share2 } from 'lucide-react';
import useNewsStore from "../store/newsStore";

const SavedArticles = () => {
  const navigate = useNavigate();
  const { savedArticles, removeSavedArticle } = useNewsStore();

  const handleShare = (article) => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-4 rounded-xl shadow-inner">
              <BookMarked className="h-7 w-7 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Saved Articles</h2>
          </div>
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 btn-secondary hover:bg-white/80"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Dashboard
          </button>
        </div>

        {savedArticles.length === 0 ? (
          <div className="glass-effect p-8 rounded-2xl text-center">
            <p className="text-gray-600 text-lg">No saved articles yet. Start saving articles from the news feed!</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {savedArticles.map((article) => (
              <div key={article.id} className="glass-effect p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
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
                          onClick={() => removeSavedArticle(article.id)}
                          className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200"
                        >
                          <Trash2 className="h-5 w-5" />
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

export default SavedArticles;