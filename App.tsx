
import React, { useState, useEffect, useCallback } from 'react';
import { fetchPhilippineTiktokTrends } from './services/geminiService';
import { TrendData } from './types';
import BannerAd from './components/BannerAd';
import Header from './components/Header';
import TrendSection from './components/TrendSection';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorDisplay from './components/ErrorDisplay';

const App: React.FC = () => {
  const [trends, setTrends] = useState<TrendData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getTrends = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const trendData = await fetchPhilippineTiktokTrends();
      setTrends(trendData);
    } catch (err) {
      setError('Nagkaroon ng problema sa pagkuha ng trends. Pakisubukang muli mamaya.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTrends();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen font-sans text-white antialiased">
      <Header />
      <main className="container mx-auto p-4 md:p-6">
        <BannerAd />
        
        {loading && <LoadingSpinner />}
        {error && !loading && <ErrorDisplay message={error} onRetry={getTrends} />}
        
        {trends && !loading && !error && (
          <div className="space-y-8 mt-8">
            <TrendSection title="Mga Sikat na Hashtag" items={trends.hashtags} iconType="hashtag" />
            <TrendSection title="Mga Patok na Hamon" items={trends.challenges} iconType="challenge" />
            <TrendSection title="Mga Usong Tunog" items={trends.sounds} iconType="sound" />
          </div>
        )}
      </main>
      <footer className="text-center p-4 mt-8 text-xs text-gray-500">
        <p>&copy; 2024 TikTok Trends PH. Para sa layuning pang-aliw lamang.</p>
      </footer>
    </div>
  );
};

export default App;
