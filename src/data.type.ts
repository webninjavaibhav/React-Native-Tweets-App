export type Ttweet = {
  id: string;
  createdAt: string;
  tweet: string;
  username: string;
  updatedAt: string;
};

export type TtweetApi = {
  id: string;
  createdAt: { seconds: number; nanoseconds: number };
  tweet: string;
  username: string;
  updatedAt: { seconds: number; nanoseconds: number };
};
