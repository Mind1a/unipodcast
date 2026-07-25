import { apiGet } from "@/lib/apiClient";
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
  category: string;
}

const fetchLatestVideos = () => apiGet<LatestVideo[]>("/api/latest_videos");

export const useLatestVideos = () => {
  return useQuery({
    queryKey: ["latest-videos"],
    queryFn: fetchLatestVideos,
    staleTime: 1000 * 60 * 5,
  });
};
