export interface Bookmarks {
  loading: boolean;
  groups: {
    [key in Bookmark['group']]: Bookmark[]
  };
}

export interface Bookmark {
  id: number;
  name: string;
  url: string;
  group: string;
}
