export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** 動画アップロード用 */
  Upload: any;
};

export type Movie = Node & {
   __typename?: 'Movie';
  /** UUID */
  id: Scalars['ID'];
  /** 名称 */
  name: Scalars['String'];
  /** 動画URL */
  movieUrl: Scalars['String'];
  /** 秒数 */
  scale: Scalars['Int'];
};

export type MovieInput = {
  /** 名称 */
  name: Scalars['String'];
  /** 動画URL */
  movieFile: Scalars['Upload'];
  /** 秒数 */
  scale: Scalars['Int'];
};

export type Mutation = {
   __typename?: 'Mutation';
  noop?: Maybe<NoopPayload>;
  /** 動画をアップロード */
  createMovie: Scalars['ID'];
};


export type MutationNoopArgs = {
  input?: Maybe<NoopInput>;
};


export type MutationCreateMovieArgs = {
  input: MovieInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type NoopInput = {
  clientMutationId?: Maybe<Scalars['String']>;
};

export type NoopPayload = {
   __typename?: 'NoopPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  node?: Maybe<Node>;
  movies: Array<Movie>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


