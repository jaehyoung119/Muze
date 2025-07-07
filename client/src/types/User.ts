export interface User {
  id: number;
  email: string;
  nickname: string;
  mbti_genre: string;
  profile_image: string;
  intro?: string;
  points: number;
  created_at: string;
}
