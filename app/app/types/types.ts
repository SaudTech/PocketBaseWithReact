export interface Blog {
    id: number;
    title: string;
    content: string;
    likes: number;
    comments: Comment[];
}
  