
export interface TrendItem {
  title: string;
  description: string;
}

export interface TrendData {
  hashtags: TrendItem[];
  challenges: TrendItem[];
  sounds: TrendItem[];
}
