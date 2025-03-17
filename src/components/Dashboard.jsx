import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api/auth";
import { Newspaper, LogOut, Layout, Settings, ChevronRight, BookMarked } from 'lucide-react';
import useNewsStore from "../store/newsStore";

const Dashboard = () => {
  const navigate = useNavigate();
  const { preferences, setPreferences } = useNewsStore();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  const handlePreferenceChange = (category) => {
    setPreferences({
      ...preferences,
      [category]: !preferences[category],
    });
  };

  const categories = [
    { id: 'technology', label: 'Technology', icon: '💻' },
    { id: 'business', label: 'Business', icon: '💼' },
    { id: 'sports', label: 'Sports', icon: '⚽' },
    { id: 'entertainment', label: 'Entertainment', icon: '🎬' },
    { id: 'health', label: 'Health', icon: '🏥' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-4 rounded-xl shadow-inner">
              <Layout className="h-7 w-7 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 btn-secondary hover:bg-white/80"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-effect p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-4 rounded-xl shadow-inner">
                <Newspaper className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">News Feed</h3>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Stay updated with the latest news and insights from around the world.
            </p>
            <button
              onClick={() => navigate("/news")}
              className="btn-primary w-full flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300"
            >
              <span>View News</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="glass-effect p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-4 rounded-xl shadow-inner">
                <Settings className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">News Preferences</h3>
            </div>
            <div className="space-y-4">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center justify-between">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <span className="text-2xl">{category.icon}</span>
                    <span className="text-gray-700">{category.label}</span>
                  </label>
                  <button
                    onClick={() => handlePreferenceChange(category.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                      preferences[category.id]
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {preferences[category.id] ? 'Enabled' : 'Disabled'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-effect p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-4 rounded-xl shadow-inner">
                <BookMarked className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Saved Articles</h3>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Access your bookmarked articles and saved content.
            </p>
            <button
              onClick={() => navigate("/saved")}
              className="btn-primary w-full flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300"
            >
              <span>View Saved</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;