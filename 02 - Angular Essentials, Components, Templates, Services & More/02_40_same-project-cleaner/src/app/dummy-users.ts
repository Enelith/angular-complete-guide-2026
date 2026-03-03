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

export const DUMMY_USERS: UserAsInterface[] = [
  {
    id: 'u1',
    name: 'Jasmine Washington',
    avatar: 'user-1.jpg',
  },
  {
    id: 'u2',
    name: 'Emily Thompson',
    avatar: 'user-2.jpg',
  },
  {
    id: 'u3',
    name: 'Marcus Johnson',
    avatar: 'user-3.jpg',
  },
  {
    id: 'u4',
    name: 'David Miller',
    avatar: 'user-4.jpg',
  },
  {
    id: 'u5',
    name: 'Priya Patel',
    avatar: 'user-5.jpg',
  },
  {
    id: 'u6',
    name: 'Arjun Singh',
    avatar: 'user-6.jpg',
  },
];
