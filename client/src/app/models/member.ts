import { Photo } from './photo';

export interface Member {
  id: number;
  userName: string;
  age: number;
  photoUrl: string;
  city: string;
  country: string;
  alias: string;
  memberSince: string;
  lastActive: string;
  gender: string;
  introduction: string;
  lookingFor: string;
  interests: string;
  photos: Photo[];
}