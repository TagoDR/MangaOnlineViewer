/**
 * Defines the structure for a bookmark object, used to save a user's reading progress for a specific chapter.
 */
export type IBookmark = {
  /** The title of the manga or chapter. */
  name: string;
  /** The URL of the chapter that was bookmarked. */
  url: string;
  /** The page number the user was on when the bookmark was created. */
  page: number;
  /** The ISO date string representing when the bookmark was created. */
  date: string;
};
