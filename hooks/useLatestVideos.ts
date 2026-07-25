import { useQuery } from "@tanstack/react-query";

export interface LatestVideo {
  id: number;
  title: string;
  img: string;
  description: string;
  guests: string;
  duration: string;
  uploaded_at: string;
  video_link: string;
  in_slider: number;
  category_id: number;
  category_name: string
}

const fetchLatestVideos = async (): Promise<LatestVideo[]> => {
  const response = await fetch(
    "https://unipodcast-final.onrender.com/api/latest_videos",
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch latest videos: ${response.status} ${response.statusText}`);
  }

  return response.json()
};

export const useLatestVideos = () => {
  return useQuery({
    queryKey: ["latest-videos"],
    queryFn: fetchLatestVideos,
    staleTime: 1000 * 60 * 5
  })
}
