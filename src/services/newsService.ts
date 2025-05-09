
import { parseStringPromise } from 'xml2js';

export interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  source: 'Google News' | 'Times of India';
  imageUrl?: string;
}

// Using RSS feeds for demonstration - in production, proper CORS-enabled API endpoints or a backend proxy would be needed
const CORS_PROXY = 'https://corsproxy.io/?';

const GOOGLE_NEWS_RSS = `${CORS_PROXY}https://news.google.com/rss`;
const TOI_RSS = `${CORS_PROXY}https://timesofindia.indiatimes.com/rssfeedstopstories.cms`;

export async function fetchGoogleNews(): Promise<NewsItem[]> {
  try {
    const response = await fetch(GOOGLE_NEWS_RSS);
    const xmlData = await response.text();
    const result = await parseStringPromise(xmlData);
    
    return result.rss.channel[0].item.slice(0, 10).map((item: any) => ({
      title: item.title[0],
      link: item.link[0],
      pubDate: item.pubDate[0],
      description: item.description[0],
      source: 'Google News' as const,
    }));
  } catch (error) {
    console.error('Error fetching Google News:', error);
    return [];
  }
}

export async function fetchTimesOfIndia(): Promise<NewsItem[]> {
  try {
    const response = await fetch(TOI_RSS);
    const xmlData = await response.text();
    const result = await parseStringPromise(xmlData);
    
    return result.rss.channel[0].item.slice(0, 10).map((item: any) => ({
      title: item.title[0],
      link: item.link[0],
      pubDate: item.pubDate[0],
      description: item.description[0],
      source: 'Times of India' as const,
      imageUrl: item.enclosure?.[0]?.$.url,
    }));
  } catch (error) {
    console.error('Error fetching Times of India:', error);
    return [];
  }
}

export async function fetchAllNews(): Promise<NewsItem[]> {
  try {
    const [googleNews, toiNews] = await Promise.all([
      fetchGoogleNews(),
      fetchTimesOfIndia()
    ]);
    
    // Combine and sort by publication date (newest first)
    return [...googleNews, ...toiNews]
      .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  
  if (diffDays > 0) {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  } else if (diffHours > 0) {
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  } else if (diffMins > 0) {
    return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
  } else {
    return 'Just now';
  }
}
