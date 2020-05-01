export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Time: any
  /** 動画アップロード用 */
  Upload: any
}

export type Movie = Node & {
  __typename?: 'Movie'
  /** UUID */
  id: Scalars['ID']
  /** 名称 */
  name: Scalars['String']
  /** 動画URL */
  movieUrl: Scalars['String']
  /** 秒数 */
  scale: Scalars['Int']
  /** 視聴履歴 */
  viewingHistories?: Maybe<Array<ViewingHistory>>
}

export type MovieInput = {
  /** 名称 */
  name: Scalars['String']
  /** 動画URL */
  movieFile: Scalars['Upload']
  /** 秒数 */
  scale: Scalars['Int']
}

export type Mutation = {
  __typename?: 'Mutation'
  noop?: Maybe<NoopPayload>
  /** 動画をアップロード */
  createMovie?: Maybe<MutationResponse>
  /** 視聴履歴の記録 */
  recordViewingHistory?: Maybe<MutationResponse>
}

export type MutationNoopArgs = {
  input?: Maybe<NoopInput>
}

export type MutationCreateMovieArgs = {
  input: MovieInput
}

export type MutationRecordViewingHistoryArgs = {
  input: RecordViewingHistoryInput
}

export type MutationResponse = {
  __typename?: 'MutationResponse'
  id?: Maybe<Scalars['ID']>
}

export type Node = {
  id: Scalars['ID']
}

export type NoopInput = {
  clientMutationId?: Maybe<Scalars['String']>
}

export type NoopPayload = {
  __typename?: 'NoopPayload'
  clientMutationId?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  node?: Maybe<Node>
  movies: Array<Movie>
  viewer: Viewer
  viewers: Array<Viewer>
  /** 視聴履歴一覧 */
  viewingHistories: Array<ViewingHistory>
}

export type QueryNodeArgs = {
  id: Scalars['ID']
}

export type QueryViewerArgs = {
  id: Scalars['ID']
}

export type QueryViewingHistoriesArgs = {
  userId?: Maybe<Scalars['ID']>
  movieId?: Maybe<Scalars['ID']>
}

export type RecordViewingHistoryInput = {
  /** 視聴者ID */
  userId: Scalars['ID']
  /** 動画ID */
  movieId: Scalars['ID']
}

export type Viewer = Node & {
  __typename?: 'Viewer'
  /** UUID */
  id: Scalars['ID']
  /** 名前 */
  name: Scalars['String']
  /** ニックネーム */
  nickname?: Maybe<Scalars['String']>
}

export type ViewingHistory = Node & {
  __typename?: 'ViewingHistory'
  /** UUID */
  id: Scalars['ID']
  /** 視聴者 */
  viewer: Viewer
  /** 動画 */
  movie: Movie
  /** 視聴日時 */
  createdAt: Scalars['Time']
}
