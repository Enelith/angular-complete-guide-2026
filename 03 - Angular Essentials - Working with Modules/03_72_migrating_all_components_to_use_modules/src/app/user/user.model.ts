/**
 * With interface, you can really only define object types.
 */
export interface UserAsInterface {
  id: string;
  avatar: string;
  name: string;
}

/**
 * With the type keyword, you can also define other types
 */
export type UserAsType = {
  id: string;
  name: string;
  avatar: string;
};
