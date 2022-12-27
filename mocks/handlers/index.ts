import * as auth from "./auth";
import * as meme from "./meme";
import * as post from "./post";
import * as search from "./search";
import * as tags from "./tags";

export const handlers = [
  ...Object.values(auth),
  ...Object.values(post),
  ...Object.values(search),
  ...Object.values(tags),
  ...Object.values(meme),
  ...Object.values(search),
];
