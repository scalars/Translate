export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** ISO-8601 encoded UTC date string */
  DateTime: any;
  /** Email format */
  Email: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Json` scalar type represents Json values. */
  Json: any;
  /** Formats from Phone number or mobile number. This data type accept digits with a standard, 7 digits for phone and 11 - 13 digits for mobile number. */
  Phone: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** Url format */
  Url: any;
};


export enum Actiontype {
  Create = 'CREATE',
  Read = 'READ',
  Update = 'UPDATE',
  Delete = 'DELETE'
}

export type Appclient = {
  __typename?: 'Appclient';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  client_id: Scalars['String'];
  client_secret?: Maybe<Scalars['String']>;
  client_type?: Maybe<Clienttype>;
  datapermissions?: Maybe<Array<Datapermission>>;
  domains?: Maybe<Array<Scalars['String']>>;
  grant_type?: Maybe<Granttype>;
  name: Scalars['String'];
  permissions?: Maybe<Scalars['Json']>;
  providers?: Maybe<Scalars['Json']>;
  redirect_uri?: Maybe<Array<Scalars['String']>>;
  scopes?: Maybe<Array<Clientscope>>;
  userPool?: Maybe<Scalars['Json']>;
};

export type AppclientConnection = {
  __typename?: 'AppclientConnection';
  totalCount: Scalars['Int'];
};

export type AppclientCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  client_id?: Maybe<Scalars['String']>;
  client_secret?: Maybe<Scalars['String']>;
  client_type?: Maybe<Clienttype>;
  datapermissions?: Maybe<DatapermissionCreateManyInput>;
  domains?: Maybe<AppclientDomainsCreateInput>;
  grant_type?: Maybe<Granttype>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['Json']>;
  providers?: Maybe<Scalars['Json']>;
  redirect_uri?: Maybe<AppclientRedirect_UriCreateInput>;
  scopes?: Maybe<AppclientScopesCreateInput>;
  userPool?: Maybe<Scalars['Json']>;
};

export type AppclientCreateOneInput = {
  create?: Maybe<AppclientCreateInput>;
  connect?: Maybe<AppclientWhereUniqueInput>;
};

export type AppclientDomainsCreateInput = {
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AppclientDomainsUpdateInput = {
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AppclientOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  client_id?: Maybe<OrderByEnum>;
  client_secret?: Maybe<OrderByEnum>;
  client_type?: Maybe<OrderByEnum>;
  domains?: Maybe<OrderByEnum>;
  grant_type?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
  permissions?: Maybe<OrderByEnum>;
  providers?: Maybe<OrderByEnum>;
  redirect_uri?: Maybe<OrderByEnum>;
  scopes?: Maybe<OrderByEnum>;
  userPool?: Maybe<OrderByEnum>;
};

export type AppclientRedirect_UriCreateInput = {
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AppclientRedirect_UriUpdateInput = {
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AppclientScopesCreateInput = {
  set?: Maybe<Array<Maybe<Clientscope>>>;
};

export type AppclientScopesUpdateInput = {
  set?: Maybe<Array<Maybe<Clientscope>>>;
};

export type AppclientUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  client_id?: Maybe<Scalars['String']>;
  client_secret?: Maybe<Scalars['String']>;
  client_type?: Maybe<Clienttype>;
  datapermissions?: Maybe<DatapermissionUpdateManyInput>;
  domains?: Maybe<AppclientDomainsUpdateInput>;
  grant_type?: Maybe<Granttype>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['Json']>;
  providers?: Maybe<Scalars['Json']>;
  redirect_uri?: Maybe<AppclientRedirect_UriUpdateInput>;
  scopes?: Maybe<AppclientScopesUpdateInput>;
  userPool?: Maybe<Scalars['Json']>;
};

export type AppclientUpdateOneInput = {
  create?: Maybe<AppclientCreateInput>;
  connect?: Maybe<AppclientWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type AppclientWhereInput = {
  OR?: Maybe<Array<AppclientWhereInput>>;
  AND?: Maybe<Array<AppclientWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  client_id?: Maybe<Scalars['String']>;
  client_id_eq?: Maybe<Scalars['String']>;
  client_id_neq?: Maybe<Scalars['String']>;
  client_id_contains?: Maybe<Scalars['String']>;
  client_id_notcontains?: Maybe<Scalars['String']>;
  client_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  client_secret?: Maybe<Scalars['String']>;
  client_secret_eq?: Maybe<Scalars['String']>;
  client_secret_neq?: Maybe<Scalars['String']>;
  client_secret_contains?: Maybe<Scalars['String']>;
  client_secret_notcontains?: Maybe<Scalars['String']>;
  client_secret_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  client_type?: Maybe<Clienttype>;
  client_type_eq?: Maybe<Clienttype>;
  client_type_neq?: Maybe<Clienttype>;
  client_type_contains?: Maybe<Scalars['String']>;
  client_type_notcontains?: Maybe<Scalars['String']>;
  datapermissions?: Maybe<DatapermissionWhereInput>;
  domains?: Maybe<Scalars['String']>;
  domains_eq?: Maybe<Scalars['String']>;
  domains_neq?: Maybe<Scalars['String']>;
  domains_contains?: Maybe<Scalars['String']>;
  domains_notcontains?: Maybe<Scalars['String']>;
  domains_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  grant_type?: Maybe<Granttype>;
  grant_type_eq?: Maybe<Granttype>;
  grant_type_neq?: Maybe<Granttype>;
  grant_type_contains?: Maybe<Scalars['String']>;
  grant_type_notcontains?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  redirect_uri?: Maybe<Scalars['String']>;
  redirect_uri_eq?: Maybe<Scalars['String']>;
  redirect_uri_neq?: Maybe<Scalars['String']>;
  redirect_uri_contains?: Maybe<Scalars['String']>;
  redirect_uri_notcontains?: Maybe<Scalars['String']>;
  redirect_uri_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  scopes?: Maybe<Clientscope>;
  scopes_eq?: Maybe<Clientscope>;
  scopes_neq?: Maybe<Clientscope>;
  scopes_contains?: Maybe<Scalars['String']>;
  scopes_notcontains?: Maybe<Scalars['String']>;
};

export type AppclientWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  client_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Application = {
  __typename?: 'Application';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  application_ApplicationsFromLanguageFk?: Maybe<Array<Language>>;
  name?: Maybe<Scalars['String']>;
  root?: Maybe<Schema>;
  languages?: Maybe<Array<Language>>;
  defaultLanguage?: Maybe<Language>;
};

export type ApplicationConnection = {
  __typename?: 'ApplicationConnection';
  totalCount: Scalars['Int'];
};

export type ApplicationCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  application_ApplicationsFromLanguageFk?: Maybe<LanguageCreateManyInput>;
  name?: Maybe<Scalars['String']>;
  root?: Maybe<SchemaCreateOneInput>;
  languages?: Maybe<LanguageCreateManyInput>;
  defaultLanguage?: Maybe<LanguageCreateOneInput>;
};

export type ApplicationCreateManyInput = {
  create?: Maybe<Array<Maybe<ApplicationCreateInput>>>;
  connect?: Maybe<Array<Maybe<ApplicationWhereUniqueInput>>>;
};

export type ApplicationOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
};

export type ApplicationUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  application_ApplicationsFromLanguageFk?: Maybe<LanguageUpdateManyInput>;
  name?: Maybe<Scalars['String']>;
  root?: Maybe<SchemaUpdateOneInput>;
  languages?: Maybe<LanguageUpdateManyInput>;
  defaultLanguage?: Maybe<LanguageUpdateOneInput>;
};

export type ApplicationUpdateManyInput = {
  create?: Maybe<Array<Maybe<ApplicationCreateInput>>>;
  connect?: Maybe<Array<Maybe<ApplicationWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ApplicationWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<ApplicationWhereUniqueInput>>>;
};

export type ApplicationWhereInput = {
  OR?: Maybe<Array<ApplicationWhereInput>>;
  AND?: Maybe<Array<ApplicationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  application_ApplicationsFromLanguageFk?: Maybe<LanguageWhereInput>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  root?: Maybe<SchemaWhereInput>;
  languages?: Maybe<LanguageWhereInput>;
  defaultLanguage?: Maybe<LanguageWhereInput>;
};

export type ApplicationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Assetsconfig = {
  __typename?: 'Assetsconfig';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  compatibleMimes?: Maybe<Array<Mimetype>>;
  compress?: Maybe<Scalars['Boolean']>;
  compressPercentage?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  mimeTypes?: Maybe<Array<Mimetype>>;
  name?: Maybe<Scalars['String']>;
};

export type AssetsconfigConnection = {
  __typename?: 'AssetsconfigConnection';
  totalCount: Scalars['Int'];
};

export type AssetsconfigCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  compatibleMimes?: Maybe<MimetypeCreateManyInput>;
  compress?: Maybe<Scalars['Boolean']>;
  compressPercentage?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  mimeTypes?: Maybe<MimetypeCreateManyInput>;
  name?: Maybe<Scalars['String']>;
};

export type AssetsconfigCreateOneInput = {
  create?: Maybe<AssetsconfigCreateInput>;
  connect?: Maybe<AssetsconfigWhereUniqueInput>;
};

export type AssetsconfigOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  compress?: Maybe<OrderByEnum>;
  compressPercentage?: Maybe<OrderByEnum>;
  description?: Maybe<OrderByEnum>;
  label?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
};

export type AssetsconfigUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  compatibleMimes?: Maybe<MimetypeUpdateManyInput>;
  compress?: Maybe<Scalars['Boolean']>;
  compressPercentage?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  mimeTypes?: Maybe<MimetypeUpdateManyInput>;
  name?: Maybe<Scalars['String']>;
};

export type AssetsconfigUpdateOneInput = {
  create?: Maybe<AssetsconfigCreateInput>;
  connect?: Maybe<AssetsconfigWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type AssetsconfigWhereInput = {
  OR?: Maybe<Array<AssetsconfigWhereInput>>;
  AND?: Maybe<Array<AssetsconfigWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  compatibleMimes?: Maybe<MimetypeWhereInput>;
  compress?: Maybe<Scalars['Boolean']>;
  compress_eq?: Maybe<Scalars['Boolean']>;
  compress_neq?: Maybe<Scalars['Boolean']>;
  compressPercentage?: Maybe<Scalars['Float']>;
  compressPercentage_eq?: Maybe<Scalars['Float']>;
  compressPercentage_neq?: Maybe<Scalars['Float']>;
  compressPercentage_gt?: Maybe<Scalars['Float']>;
  compressPercentage_gte?: Maybe<Scalars['Float']>;
  compressPercentage_lt?: Maybe<Scalars['Float']>;
  compressPercentage_lte?: Maybe<Scalars['Float']>;
  compressPercentage_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  compressPercentage_between?: Maybe<BetweenFilterFloat>;
  description?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_notcontains?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  label?: Maybe<Scalars['String']>;
  label_eq?: Maybe<Scalars['String']>;
  label_neq?: Maybe<Scalars['String']>;
  label_contains?: Maybe<Scalars['String']>;
  label_notcontains?: Maybe<Scalars['String']>;
  label_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  mimeTypes?: Maybe<MimetypeWhereInput>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AssetsconfigWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Authcodegrant = {
  __typename?: 'Authcodegrant';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  client?: Maybe<Appclient>;
  code: Scalars['String'];
  cognitoIdToken?: Maybe<Scalars['String']>;
  redirectUri?: Maybe<Scalars['String']>;
  user?: Maybe<Authuser>;
};

export type AuthcodegrantConnection = {
  __typename?: 'AuthcodegrantConnection';
  totalCount: Scalars['Int'];
};

export type AuthcodegrantCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  client?: Maybe<AppclientCreateOneInput>;
  code?: Maybe<Scalars['String']>;
  cognitoIdToken?: Maybe<Scalars['String']>;
  redirectUri?: Maybe<Scalars['String']>;
  user?: Maybe<AuthuserCreateOneInput>;
};

export type AuthcodegrantOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  code?: Maybe<OrderByEnum>;
  cognitoIdToken?: Maybe<OrderByEnum>;
  redirectUri?: Maybe<OrderByEnum>;
};

export type AuthcodegrantUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  client?: Maybe<AppclientUpdateOneInput>;
  code?: Maybe<Scalars['String']>;
  cognitoIdToken?: Maybe<Scalars['String']>;
  redirectUri?: Maybe<Scalars['String']>;
  user?: Maybe<AuthuserUpdateOneInput>;
};

export type AuthcodegrantWhereInput = {
  OR?: Maybe<Array<AuthcodegrantWhereInput>>;
  AND?: Maybe<Array<AuthcodegrantWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  client?: Maybe<AppclientWhereInput>;
  code?: Maybe<Scalars['String']>;
  code_eq?: Maybe<Scalars['String']>;
  code_neq?: Maybe<Scalars['String']>;
  code_contains?: Maybe<Scalars['String']>;
  code_notcontains?: Maybe<Scalars['String']>;
  code_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  cognitoIdToken?: Maybe<Scalars['String']>;
  cognitoIdToken_eq?: Maybe<Scalars['String']>;
  cognitoIdToken_neq?: Maybe<Scalars['String']>;
  cognitoIdToken_contains?: Maybe<Scalars['String']>;
  cognitoIdToken_notcontains?: Maybe<Scalars['String']>;
  cognitoIdToken_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  redirectUri?: Maybe<Scalars['String']>;
  redirectUri_eq?: Maybe<Scalars['String']>;
  redirectUri_neq?: Maybe<Scalars['String']>;
  redirectUri_contains?: Maybe<Scalars['String']>;
  redirectUri_notcontains?: Maybe<Scalars['String']>;
  redirectUri_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  user?: Maybe<AuthuserWhereInput>;
};

export type AuthcodegrantWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
};

export type Authrole = {
  __typename?: 'Authrole';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authusers?: Maybe<Array<Authuser>>;
  createAt?: Maybe<Scalars['DateTime']>;
  datapermissions?: Maybe<Array<Datapermission>>;
  default?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<Scalars['Json']>;
  updateAt?: Maybe<Scalars['DateTime']>;
};

export type AuthroleConnection = {
  __typename?: 'AuthroleConnection';
  totalCount: Scalars['Int'];
};

export type AuthroleCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authusers?: Maybe<AuthuserCreateManyInput>;
  createAt?: Maybe<Scalars['DateTime']>;
  datapermissions?: Maybe<DatapermissionCreateManyInput>;
  default?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['Json']>;
  updateAt?: Maybe<Scalars['DateTime']>;
};

export type AuthroleCreateOneInput = {
  create?: Maybe<AuthroleCreateInput>;
  connect?: Maybe<AuthroleWhereUniqueInput>;
};

export type AuthroleOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  createAt?: Maybe<OrderByEnum>;
  default?: Maybe<OrderByEnum>;
  description?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
  permissions?: Maybe<OrderByEnum>;
  updateAt?: Maybe<OrderByEnum>;
};

export type AuthroleUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authusers?: Maybe<AuthuserUpdateManyInput>;
  createAt?: Maybe<Scalars['DateTime']>;
  datapermissions?: Maybe<DatapermissionUpdateManyInput>;
  default?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['Json']>;
  updateAt?: Maybe<Scalars['DateTime']>;
};

export type AuthroleUpdateOneInput = {
  create?: Maybe<AuthroleCreateInput>;
  connect?: Maybe<AuthroleWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type AuthroleWhereInput = {
  OR?: Maybe<Array<AuthroleWhereInput>>;
  AND?: Maybe<Array<AuthroleWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  authusers?: Maybe<AuthuserWhereInput>;
  createAt?: Maybe<Scalars['DateTime']>;
  createAt_eq?: Maybe<Scalars['DateTime']>;
  createAt_neq?: Maybe<Scalars['DateTime']>;
  createAt_gt?: Maybe<Scalars['DateTime']>;
  createAt_gte?: Maybe<Scalars['DateTime']>;
  createAt_lt?: Maybe<Scalars['DateTime']>;
  createAt_lte?: Maybe<Scalars['DateTime']>;
  createAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createAt_between?: Maybe<BetweenFilterDateTime>;
  datapermissions?: Maybe<DatapermissionWhereInput>;
  default?: Maybe<Scalars['Boolean']>;
  default_eq?: Maybe<Scalars['Boolean']>;
  default_neq?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_notcontains?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updateAt?: Maybe<Scalars['DateTime']>;
  updateAt_eq?: Maybe<Scalars['DateTime']>;
  updateAt_neq?: Maybe<Scalars['DateTime']>;
  updateAt_gt?: Maybe<Scalars['DateTime']>;
  updateAt_gte?: Maybe<Scalars['DateTime']>;
  updateAt_lt?: Maybe<Scalars['DateTime']>;
  updateAt_lte?: Maybe<Scalars['DateTime']>;
  updateAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updateAt_between?: Maybe<BetweenFilterDateTime>;
};

export type AuthroleWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Authsession = {
  __typename?: 'Authsession';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authuser: Authuser;
  cognitoIdToken: Scalars['String'];
  expiresIn?: Maybe<Scalars['DateTime']>;
  fromUrl?: Maybe<Scalars['String']>;
  interchanges?: Maybe<Scalars['String']>;
  ipAgent?: Maybe<Scalars['String']>;
  sessionId: Scalars['String'];
  userAgent?: Maybe<Scalars['String']>;
};

export type AuthsessionConnection = {
  __typename?: 'AuthsessionConnection';
  totalCount: Scalars['Int'];
};

export type AuthsessionCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authuser?: Maybe<AuthuserCreateOneInput>;
  cognitoIdToken?: Maybe<Scalars['String']>;
  expiresIn?: Maybe<Scalars['DateTime']>;
  fromUrl?: Maybe<Scalars['String']>;
  interchanges?: Maybe<Scalars['String']>;
  ipAgent?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
};

export type AuthsessionCreateManyInput = {
  create?: Maybe<Array<Maybe<AuthsessionCreateInput>>>;
  connect?: Maybe<Array<Maybe<AuthsessionWhereUniqueInput>>>;
};

export type AuthsessionOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  cognitoIdToken?: Maybe<OrderByEnum>;
  expiresIn?: Maybe<OrderByEnum>;
  fromUrl?: Maybe<OrderByEnum>;
  interchanges?: Maybe<OrderByEnum>;
  ipAgent?: Maybe<OrderByEnum>;
  sessionId?: Maybe<OrderByEnum>;
  userAgent?: Maybe<OrderByEnum>;
};

export type AuthsessionUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authuser?: Maybe<AuthuserUpdateOneInput>;
  cognitoIdToken?: Maybe<Scalars['String']>;
  expiresIn?: Maybe<Scalars['DateTime']>;
  fromUrl?: Maybe<Scalars['String']>;
  interchanges?: Maybe<Scalars['String']>;
  ipAgent?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
};

export type AuthsessionUpdateManyInput = {
  create?: Maybe<Array<Maybe<AuthsessionCreateInput>>>;
  connect?: Maybe<Array<Maybe<AuthsessionWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<AuthsessionWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<AuthsessionWhereUniqueInput>>>;
};

export type AuthsessionWhereInput = {
  OR?: Maybe<Array<AuthsessionWhereInput>>;
  AND?: Maybe<Array<AuthsessionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  authuser?: Maybe<AuthuserWhereInput>;
  cognitoIdToken?: Maybe<Scalars['String']>;
  cognitoIdToken_eq?: Maybe<Scalars['String']>;
  cognitoIdToken_neq?: Maybe<Scalars['String']>;
  cognitoIdToken_contains?: Maybe<Scalars['String']>;
  cognitoIdToken_notcontains?: Maybe<Scalars['String']>;
  cognitoIdToken_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  expiresIn?: Maybe<Scalars['DateTime']>;
  expiresIn_eq?: Maybe<Scalars['DateTime']>;
  expiresIn_neq?: Maybe<Scalars['DateTime']>;
  expiresIn_gt?: Maybe<Scalars['DateTime']>;
  expiresIn_gte?: Maybe<Scalars['DateTime']>;
  expiresIn_lt?: Maybe<Scalars['DateTime']>;
  expiresIn_lte?: Maybe<Scalars['DateTime']>;
  expiresIn_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  expiresIn_between?: Maybe<BetweenFilterDateTime>;
  fromUrl?: Maybe<Scalars['String']>;
  fromUrl_eq?: Maybe<Scalars['String']>;
  fromUrl_neq?: Maybe<Scalars['String']>;
  fromUrl_contains?: Maybe<Scalars['String']>;
  fromUrl_notcontains?: Maybe<Scalars['String']>;
  fromUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  interchanges?: Maybe<Scalars['String']>;
  interchanges_eq?: Maybe<Scalars['String']>;
  interchanges_neq?: Maybe<Scalars['String']>;
  interchanges_contains?: Maybe<Scalars['String']>;
  interchanges_notcontains?: Maybe<Scalars['String']>;
  interchanges_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  ipAgent?: Maybe<Scalars['String']>;
  ipAgent_eq?: Maybe<Scalars['String']>;
  ipAgent_neq?: Maybe<Scalars['String']>;
  ipAgent_contains?: Maybe<Scalars['String']>;
  ipAgent_notcontains?: Maybe<Scalars['String']>;
  ipAgent_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sessionId?: Maybe<Scalars['String']>;
  sessionId_eq?: Maybe<Scalars['String']>;
  sessionId_neq?: Maybe<Scalars['String']>;
  sessionId_contains?: Maybe<Scalars['String']>;
  sessionId_notcontains?: Maybe<Scalars['String']>;
  sessionId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  userAgent?: Maybe<Scalars['String']>;
  userAgent_eq?: Maybe<Scalars['String']>;
  userAgent_neq?: Maybe<Scalars['String']>;
  userAgent_contains?: Maybe<Scalars['String']>;
  userAgent_notcontains?: Maybe<Scalars['String']>;
  userAgent_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AuthsessionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  sessionId?: Maybe<Scalars['String']>;
};

export type Authuser = {
  __typename?: 'Authuser';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authrole?: Maybe<Authrole>;
  email: Scalars['Email'];
  isRoot?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  sessions?: Maybe<Array<Authsession>>;
  sub: Scalars['String'];
  username: Scalars['String'];
  notificationConfig?: Maybe<Scalars['Json']>;
  subscriptionConfig?: Maybe<Scalars['Json']>;
};

export type AuthuserConnection = {
  __typename?: 'AuthuserConnection';
  totalCount: Scalars['Int'];
};

export type AuthuserCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authrole?: Maybe<AuthroleCreateOneInput>;
  email?: Maybe<Scalars['Email']>;
  isRoot?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  sessions?: Maybe<AuthsessionCreateManyInput>;
  sub?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  notificationConfig?: Maybe<Scalars['Json']>;
  subscriptionConfig?: Maybe<Scalars['Json']>;
};

export type AuthuserCreateManyInput = {
  create?: Maybe<Array<Maybe<AuthuserCreateInput>>>;
  connect?: Maybe<Array<Maybe<AuthuserWhereUniqueInput>>>;
};

export type AuthuserCreateOneInput = {
  create?: Maybe<AuthuserCreateInput>;
  connect?: Maybe<AuthuserWhereUniqueInput>;
};

export type AuthuserOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  email?: Maybe<OrderByEnum>;
  isRoot?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
  sub?: Maybe<OrderByEnum>;
  username?: Maybe<OrderByEnum>;
  notificationConfig?: Maybe<OrderByEnum>;
  subscriptionConfig?: Maybe<OrderByEnum>;
};

export type AuthuserUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authrole?: Maybe<AuthroleUpdateOneInput>;
  email?: Maybe<Scalars['Email']>;
  isRoot?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  sessions?: Maybe<AuthsessionUpdateManyInput>;
  sub?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  notificationConfig?: Maybe<Scalars['Json']>;
  subscriptionConfig?: Maybe<Scalars['Json']>;
};

export type AuthuserUpdateManyInput = {
  create?: Maybe<Array<Maybe<AuthuserCreateInput>>>;
  connect?: Maybe<Array<Maybe<AuthuserWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<AuthuserWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<AuthuserWhereUniqueInput>>>;
};

export type AuthuserUpdateOneInput = {
  create?: Maybe<AuthuserCreateInput>;
  connect?: Maybe<AuthuserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type AuthuserWhereInput = {
  OR?: Maybe<Array<AuthuserWhereInput>>;
  AND?: Maybe<Array<AuthuserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  authrole?: Maybe<AuthroleWhereInput>;
  email?: Maybe<Scalars['Email']>;
  email_eq?: Maybe<Scalars['Email']>;
  email_neq?: Maybe<Scalars['Email']>;
  email_contains?: Maybe<Scalars['Email']>;
  email_notcontains?: Maybe<Scalars['Email']>;
  isRoot?: Maybe<Scalars['Boolean']>;
  isRoot_eq?: Maybe<Scalars['Boolean']>;
  isRoot_neq?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sessions?: Maybe<AuthsessionWhereInput>;
  sub?: Maybe<Scalars['String']>;
  sub_eq?: Maybe<Scalars['String']>;
  sub_neq?: Maybe<Scalars['String']>;
  sub_contains?: Maybe<Scalars['String']>;
  sub_notcontains?: Maybe<Scalars['String']>;
  sub_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  username?: Maybe<Scalars['String']>;
  username_eq?: Maybe<Scalars['String']>;
  username_neq?: Maybe<Scalars['String']>;
  username_contains?: Maybe<Scalars['String']>;
  username_notcontains?: Maybe<Scalars['String']>;
  username_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AuthuserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['Email']>;
  name?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type BetweenFilterDateTime = {
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
};

export type BetweenFilterFloat = {
  from?: Maybe<Scalars['Float']>;
  to?: Maybe<Scalars['Float']>;
};

export type BetweenFilterInt = {
  from?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export enum Clientscope {
  Registration = 'REGISTRATION',
  Login = 'LOGIN',
  Upload = 'UPLOAD'
}

export enum Clienttype {
  Public = 'PUBLIC',
  Confidential = 'CONFIDENTIAL'
}

export type Datapermission = {
  __typename?: 'Datapermission';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  action: Actiontype;
  appclient?: Maybe<Appclient>;
  attributes?: Maybe<Array<Scalars['Json']>>;
  authrole?: Maybe<Authrole>;
  entity?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Json']>;
  str?: Maybe<Scalars['String']>;
};

export type DatapermissionAttributesCreateInput = {
  set?: Maybe<Array<Maybe<Scalars['Json']>>>;
};

export type DatapermissionAttributesUpdateInput = {
  set?: Maybe<Array<Maybe<Scalars['Json']>>>;
};

export type DatapermissionConnection = {
  __typename?: 'DatapermissionConnection';
  totalCount: Scalars['Int'];
};

export type DatapermissionCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  action?: Maybe<Actiontype>;
  appclient?: Maybe<AppclientCreateOneInput>;
  attributes?: Maybe<DatapermissionAttributesCreateInput>;
  authrole?: Maybe<AuthroleCreateOneInput>;
  entity?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Json']>;
  str?: Maybe<Scalars['String']>;
};

export type DatapermissionCreateManyInput = {
  create?: Maybe<Array<Maybe<DatapermissionCreateInput>>>;
  connect?: Maybe<Array<Maybe<DatapermissionWhereUniqueInput>>>;
};

export type DatapermissionOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  action?: Maybe<OrderByEnum>;
  attributes?: Maybe<OrderByEnum>;
  entity?: Maybe<OrderByEnum>;
  private?: Maybe<OrderByEnum>;
  str?: Maybe<OrderByEnum>;
};

export type DatapermissionUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  action?: Maybe<Actiontype>;
  appclient?: Maybe<AppclientUpdateOneInput>;
  attributes?: Maybe<DatapermissionAttributesUpdateInput>;
  authrole?: Maybe<AuthroleUpdateOneInput>;
  entity?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Json']>;
  str?: Maybe<Scalars['String']>;
};

export type DatapermissionUpdateManyInput = {
  create?: Maybe<Array<Maybe<DatapermissionCreateInput>>>;
  connect?: Maybe<Array<Maybe<DatapermissionWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<DatapermissionWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<DatapermissionWhereUniqueInput>>>;
};

export type DatapermissionWhereInput = {
  OR?: Maybe<Array<DatapermissionWhereInput>>;
  AND?: Maybe<Array<DatapermissionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  action?: Maybe<Actiontype>;
  action_eq?: Maybe<Actiontype>;
  action_neq?: Maybe<Actiontype>;
  action_contains?: Maybe<Scalars['String']>;
  action_notcontains?: Maybe<Scalars['String']>;
  appclient?: Maybe<AppclientWhereInput>;
  authrole?: Maybe<AuthroleWhereInput>;
  entity?: Maybe<Scalars['String']>;
  entity_eq?: Maybe<Scalars['String']>;
  entity_neq?: Maybe<Scalars['String']>;
  entity_contains?: Maybe<Scalars['String']>;
  entity_notcontains?: Maybe<Scalars['String']>;
  entity_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  str?: Maybe<Scalars['String']>;
  str_eq?: Maybe<Scalars['String']>;
  str_neq?: Maybe<Scalars['String']>;
  str_contains?: Maybe<Scalars['String']>;
  str_notcontains?: Maybe<Scalars['String']>;
  str_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DatapermissionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};


export type Documentfile = {
  __typename?: 'Documentfile';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<Assetsconfig>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<Mimetype>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type DocumentfileConnection = {
  __typename?: 'DocumentfileConnection';
  totalCount: Scalars['Int'];
};

export type DocumentfileCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<AssetsconfigCreateOneInput>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<MimetypeCreateOneInput>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type DocumentfileOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  description?: Maybe<OrderByEnum>;
  metainfo?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
  url?: Maybe<OrderByEnum>;
};

export type DocumentfileUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<AssetsconfigUpdateOneInput>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<MimetypeUpdateOneInput>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type DocumentfileWhereInput = {
  OR?: Maybe<Array<DocumentfileWhereInput>>;
  AND?: Maybe<Array<DocumentfileWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  assetsConfig?: Maybe<AssetsconfigWhereInput>;
  description?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_notcontains?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  mimeType?: Maybe<MimetypeWhereInput>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['Url']>;
  url_eq?: Maybe<Scalars['Url']>;
  url_neq?: Maybe<Scalars['Url']>;
  url_contains?: Maybe<Scalars['Url']>;
  url_notcontains?: Maybe<Scalars['Url']>;
};

export type DocumentfileWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};


export enum Granttype {
  Implicit = 'IMPLICIT',
  Code = 'CODE',
  Credentials = 'CREDENTIALS'
}

export type Imagefile = {
  __typename?: 'Imagefile';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<Assetsconfig>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<Mimetype>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type ImagefileConnection = {
  __typename?: 'ImagefileConnection';
  totalCount: Scalars['Int'];
};

export type ImagefileCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<AssetsconfigCreateOneInput>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<MimetypeCreateOneInput>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type ImagefileOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  description?: Maybe<OrderByEnum>;
  metainfo?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
  url?: Maybe<OrderByEnum>;
};

export type ImagefileUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<AssetsconfigUpdateOneInput>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<MimetypeUpdateOneInput>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type ImagefileWhereInput = {
  OR?: Maybe<Array<ImagefileWhereInput>>;
  AND?: Maybe<Array<ImagefileWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  assetsConfig?: Maybe<AssetsconfigWhereInput>;
  description?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_notcontains?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  mimeType?: Maybe<MimetypeWhereInput>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['Url']>;
  url_eq?: Maybe<Scalars['Url']>;
  url_neq?: Maybe<Scalars['Url']>;
  url_contains?: Maybe<Scalars['Url']>;
  url_notcontains?: Maybe<Scalars['Url']>;
};

export type ImagefileWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};



export type Language = {
  __typename?: 'Language';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  namelanguage?: Maybe<Scalars['String']>;
  isolanguage?: Maybe<Scalars['String']>;
  nativename?: Maybe<Scalars['String']>;
  flag?: Maybe<Scalars['Url']>;
  applications?: Maybe<Array<Application>>;
  language_DefaultLanguageFromApplicationFk?: Maybe<Array<Application>>;
  language_LanguagesFromApplicationFk?: Maybe<Array<Application>>;
};

export type LanguageConnection = {
  __typename?: 'LanguageConnection';
  totalCount: Scalars['Int'];
};

export type LanguageCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  namelanguage?: Maybe<Scalars['String']>;
  isolanguage?: Maybe<Scalars['String']>;
  nativename?: Maybe<Scalars['String']>;
  flag?: Maybe<Scalars['Url']>;
  applications?: Maybe<ApplicationCreateManyInput>;
  language_DefaultLanguageFromApplicationFk?: Maybe<ApplicationCreateManyInput>;
  language_LanguagesFromApplicationFk?: Maybe<ApplicationCreateManyInput>;
};

export type LanguageCreateManyInput = {
  create?: Maybe<Array<Maybe<LanguageCreateInput>>>;
  connect?: Maybe<Array<Maybe<LanguageWhereUniqueInput>>>;
};

export type LanguageCreateOneInput = {
  create?: Maybe<LanguageCreateInput>;
  connect?: Maybe<LanguageWhereUniqueInput>;
};

export type LanguageOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  namelanguage?: Maybe<OrderByEnum>;
  isolanguage?: Maybe<OrderByEnum>;
  nativename?: Maybe<OrderByEnum>;
  flag?: Maybe<OrderByEnum>;
};

export type LanguageUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  namelanguage?: Maybe<Scalars['String']>;
  isolanguage?: Maybe<Scalars['String']>;
  nativename?: Maybe<Scalars['String']>;
  flag?: Maybe<Scalars['Url']>;
  applications?: Maybe<ApplicationUpdateManyInput>;
  language_DefaultLanguageFromApplicationFk?: Maybe<ApplicationUpdateManyInput>;
  language_LanguagesFromApplicationFk?: Maybe<ApplicationUpdateManyInput>;
};

export type LanguageUpdateManyInput = {
  create?: Maybe<Array<Maybe<LanguageCreateInput>>>;
  connect?: Maybe<Array<Maybe<LanguageWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<LanguageWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<LanguageWhereUniqueInput>>>;
};

export type LanguageUpdateOneInput = {
  create?: Maybe<LanguageCreateInput>;
  connect?: Maybe<LanguageWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type LanguageWhereInput = {
  OR?: Maybe<Array<LanguageWhereInput>>;
  AND?: Maybe<Array<LanguageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  namelanguage?: Maybe<Scalars['String']>;
  namelanguage_eq?: Maybe<Scalars['String']>;
  namelanguage_neq?: Maybe<Scalars['String']>;
  namelanguage_contains?: Maybe<Scalars['String']>;
  namelanguage_notcontains?: Maybe<Scalars['String']>;
  namelanguage_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  isolanguage?: Maybe<Scalars['String']>;
  isolanguage_eq?: Maybe<Scalars['String']>;
  isolanguage_neq?: Maybe<Scalars['String']>;
  isolanguage_contains?: Maybe<Scalars['String']>;
  isolanguage_notcontains?: Maybe<Scalars['String']>;
  isolanguage_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nativename?: Maybe<Scalars['String']>;
  nativename_eq?: Maybe<Scalars['String']>;
  nativename_neq?: Maybe<Scalars['String']>;
  nativename_contains?: Maybe<Scalars['String']>;
  nativename_notcontains?: Maybe<Scalars['String']>;
  nativename_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  flag?: Maybe<Scalars['Url']>;
  flag_eq?: Maybe<Scalars['Url']>;
  flag_neq?: Maybe<Scalars['Url']>;
  flag_contains?: Maybe<Scalars['Url']>;
  flag_notcontains?: Maybe<Scalars['Url']>;
  applications?: Maybe<ApplicationWhereInput>;
  language_DefaultLanguageFromApplicationFk?: Maybe<ApplicationWhereInput>;
  language_LanguagesFromApplicationFk?: Maybe<ApplicationWhereInput>;
};

export type LanguageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Mimetype = {
  __typename?: 'Mimetype';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  compresible?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  extensions?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
};

export type MimetypeConnection = {
  __typename?: 'MimetypeConnection';
  totalCount: Scalars['Int'];
};

export type MimetypeCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  compresible?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  extensions?: Maybe<MimetypeExtensionsCreateInput>;
  name?: Maybe<Scalars['String']>;
};

export type MimetypeCreateManyInput = {
  create?: Maybe<Array<Maybe<MimetypeCreateInput>>>;
  connect?: Maybe<Array<Maybe<MimetypeWhereUniqueInput>>>;
};

export type MimetypeCreateOneInput = {
  create?: Maybe<MimetypeCreateInput>;
  connect?: Maybe<MimetypeWhereUniqueInput>;
};

export type MimetypeExtensionsCreateInput = {
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MimetypeExtensionsUpdateInput = {
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MimetypeOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  compresible?: Maybe<OrderByEnum>;
  description?: Maybe<OrderByEnum>;
  extensions?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
};

export type MimetypeUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  compresible?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  extensions?: Maybe<MimetypeExtensionsUpdateInput>;
  name?: Maybe<Scalars['String']>;
};

export type MimetypeUpdateManyInput = {
  create?: Maybe<Array<Maybe<MimetypeCreateInput>>>;
  connect?: Maybe<Array<Maybe<MimetypeWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<MimetypeWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<MimetypeWhereUniqueInput>>>;
};

export type MimetypeUpdateOneInput = {
  create?: Maybe<MimetypeCreateInput>;
  connect?: Maybe<MimetypeWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type MimetypeWhereInput = {
  OR?: Maybe<Array<MimetypeWhereInput>>;
  AND?: Maybe<Array<MimetypeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  compresible?: Maybe<Scalars['Boolean']>;
  compresible_eq?: Maybe<Scalars['Boolean']>;
  compresible_neq?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_notcontains?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  extensions?: Maybe<Scalars['String']>;
  extensions_eq?: Maybe<Scalars['String']>;
  extensions_neq?: Maybe<Scalars['String']>;
  extensions_contains?: Maybe<Scalars['String']>;
  extensions_notcontains?: Maybe<Scalars['String']>;
  extensions_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MimetypeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createLanguage: Language;
  updateLanguage: Language;
  deleteLanguage: Language;
  createSchema: Schema;
  updateSchema: Schema;
  deleteSchema: Schema;
  createApplication: Application;
  updateApplication: Application;
  deleteApplication: Application;
  createTranslation: Translation;
  updateTranslation: Translation;
  deleteTranslation: Translation;
  createAppclient: Appclient;
  updateAppclient: Appclient;
  deleteAppclient: Appclient;
  createAuthcodegrant: Authcodegrant;
  updateAuthcodegrant: Authcodegrant;
  deleteAuthcodegrant: Authcodegrant;
  createAuthrole: Authrole;
  updateAuthrole: Authrole;
  deleteAuthrole: Authrole;
  createAuthsession: Authsession;
  updateAuthsession: Authsession;
  deleteAuthsession: Authsession;
  createAuthuser: Authuser;
  updateAuthuser: Authuser;
  deleteAuthuser: Authuser;
  createDatapermission: Datapermission;
  updateDatapermission: Datapermission;
  deleteDatapermission: Datapermission;
  createAssetsconfig: Assetsconfig;
  updateAssetsconfig: Assetsconfig;
  deleteAssetsconfig: Assetsconfig;
  createDocumentfile: Documentfile;
  updateDocumentfile: Documentfile;
  deleteDocumentfile: Documentfile;
  createImagefile: Imagefile;
  updateImagefile: Imagefile;
  deleteImagefile: Imagefile;
  createMimetype: Mimetype;
  updateMimetype: Mimetype;
  deleteMimetype: Mimetype;
  createSoundfile: Soundfile;
  updateSoundfile: Soundfile;
  deleteSoundfile: Soundfile;
  createVideofile: Videofile;
  updateVideofile: Videofile;
  deleteVideofile: Videofile;
};


export type MutationCreateLanguageArgs = {
  data: LanguageCreateInput;
};


export type MutationUpdateLanguageArgs = {
  where: LanguageWhereUniqueInput;
  data: LanguageUpdateInput;
};


export type MutationDeleteLanguageArgs = {
  where: LanguageWhereUniqueInput;
};


export type MutationCreateSchemaArgs = {
  data: SchemaCreateInput;
};


export type MutationUpdateSchemaArgs = {
  where: SchemaWhereUniqueInput;
  data: SchemaUpdateInput;
};


export type MutationDeleteSchemaArgs = {
  where: SchemaWhereUniqueInput;
};


export type MutationCreateApplicationArgs = {
  data: ApplicationCreateInput;
};


export type MutationUpdateApplicationArgs = {
  where: ApplicationWhereUniqueInput;
  data: ApplicationUpdateInput;
};


export type MutationDeleteApplicationArgs = {
  where: ApplicationWhereUniqueInput;
};


export type MutationCreateTranslationArgs = {
  data: TranslationCreateInput;
};


export type MutationUpdateTranslationArgs = {
  where: TranslationWhereUniqueInput;
  data: TranslationUpdateInput;
};


export type MutationDeleteTranslationArgs = {
  where: TranslationWhereUniqueInput;
};


export type MutationCreateAppclientArgs = {
  data: AppclientCreateInput;
};


export type MutationUpdateAppclientArgs = {
  where: AppclientWhereUniqueInput;
  data: AppclientUpdateInput;
};


export type MutationDeleteAppclientArgs = {
  where: AppclientWhereUniqueInput;
};


export type MutationCreateAuthcodegrantArgs = {
  data: AuthcodegrantCreateInput;
};


export type MutationUpdateAuthcodegrantArgs = {
  where: AuthcodegrantWhereUniqueInput;
  data: AuthcodegrantUpdateInput;
};


export type MutationDeleteAuthcodegrantArgs = {
  where: AuthcodegrantWhereUniqueInput;
};


export type MutationCreateAuthroleArgs = {
  data: AuthroleCreateInput;
};


export type MutationUpdateAuthroleArgs = {
  where: AuthroleWhereUniqueInput;
  data: AuthroleUpdateInput;
};


export type MutationDeleteAuthroleArgs = {
  where: AuthroleWhereUniqueInput;
};


export type MutationCreateAuthsessionArgs = {
  data: AuthsessionCreateInput;
};


export type MutationUpdateAuthsessionArgs = {
  where: AuthsessionWhereUniqueInput;
  data: AuthsessionUpdateInput;
};


export type MutationDeleteAuthsessionArgs = {
  where: AuthsessionWhereUniqueInput;
};


export type MutationCreateAuthuserArgs = {
  data: AuthuserCreateInput;
};


export type MutationUpdateAuthuserArgs = {
  where: AuthuserWhereUniqueInput;
  data: AuthuserUpdateInput;
};


export type MutationDeleteAuthuserArgs = {
  where: AuthuserWhereUniqueInput;
};


export type MutationCreateDatapermissionArgs = {
  data: DatapermissionCreateInput;
};


export type MutationUpdateDatapermissionArgs = {
  where: DatapermissionWhereUniqueInput;
  data: DatapermissionUpdateInput;
};


export type MutationDeleteDatapermissionArgs = {
  where: DatapermissionWhereUniqueInput;
};


export type MutationCreateAssetsconfigArgs = {
  data: AssetsconfigCreateInput;
};


export type MutationUpdateAssetsconfigArgs = {
  where: AssetsconfigWhereUniqueInput;
  data: AssetsconfigUpdateInput;
};


export type MutationDeleteAssetsconfigArgs = {
  where: AssetsconfigWhereUniqueInput;
};


export type MutationCreateDocumentfileArgs = {
  data: DocumentfileCreateInput;
};


export type MutationUpdateDocumentfileArgs = {
  where: DocumentfileWhereUniqueInput;
  data: DocumentfileUpdateInput;
};


export type MutationDeleteDocumentfileArgs = {
  where: DocumentfileWhereUniqueInput;
};


export type MutationCreateImagefileArgs = {
  data: ImagefileCreateInput;
};


export type MutationUpdateImagefileArgs = {
  where: ImagefileWhereUniqueInput;
  data: ImagefileUpdateInput;
};


export type MutationDeleteImagefileArgs = {
  where: ImagefileWhereUniqueInput;
};


export type MutationCreateMimetypeArgs = {
  data: MimetypeCreateInput;
};


export type MutationUpdateMimetypeArgs = {
  where: MimetypeWhereUniqueInput;
  data: MimetypeUpdateInput;
};


export type MutationDeleteMimetypeArgs = {
  where: MimetypeWhereUniqueInput;
};


export type MutationCreateSoundfileArgs = {
  data: SoundfileCreateInput;
};


export type MutationUpdateSoundfileArgs = {
  where: SoundfileWhereUniqueInput;
  data: SoundfileUpdateInput;
};


export type MutationDeleteSoundfileArgs = {
  where: SoundfileWhereUniqueInput;
};


export type MutationCreateVideofileArgs = {
  data: VideofileCreateInput;
};


export type MutationUpdateVideofileArgs = {
  where: VideofileWhereUniqueInput;
  data: VideofileUpdateInput;
};


export type MutationDeleteVideofileArgs = {
  where: VideofileWhereUniqueInput;
};

export enum OrderByEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}


export type Query = {
  __typename?: 'Query';
  language: Language;
  languages: Array<Language>;
  languagesConnection: LanguageConnection;
  schema: Schema;
  schemata: Array<Schema>;
  schemataConnection: SchemaConnection;
  application: Application;
  applications: Array<Application>;
  applicationsConnection: ApplicationConnection;
  translation: Translation;
  translations: Array<Translation>;
  translationsConnection: TranslationConnection;
  appclient: Appclient;
  appclients: Array<Appclient>;
  appclientsConnection: AppclientConnection;
  authcodegrant: Authcodegrant;
  authcodegrants: Array<Authcodegrant>;
  authcodegrantsConnection: AuthcodegrantConnection;
  authrole: Authrole;
  authroles: Array<Authrole>;
  authrolesConnection: AuthroleConnection;
  authsession: Authsession;
  authsessions: Array<Authsession>;
  authsessionsConnection: AuthsessionConnection;
  authuser: Authuser;
  authusers: Array<Authuser>;
  authusersConnection: AuthuserConnection;
  datapermission: Datapermission;
  datapermissions: Array<Datapermission>;
  datapermissionsConnection: DatapermissionConnection;
  assetsconfig: Assetsconfig;
  assetsconfigs: Array<Assetsconfig>;
  assetsconfigsConnection: AssetsconfigConnection;
  documentfile: Documentfile;
  documentfiles: Array<Documentfile>;
  documentfilesConnection: DocumentfileConnection;
  imagefile: Imagefile;
  imagefiles: Array<Imagefile>;
  imagefilesConnection: ImagefileConnection;
  mimetype: Mimetype;
  mimetypes: Array<Mimetype>;
  mimetypesConnection: MimetypeConnection;
  soundfile: Soundfile;
  soundfiles: Array<Soundfile>;
  soundfilesConnection: SoundfileConnection;
  videofile: Videofile;
  videofiles: Array<Videofile>;
  videofilesConnection: VideofileConnection;
};


export type QueryLanguageArgs = {
  where: LanguageWhereUniqueInput;
};


export type QueryLanguagesArgs = {
  where?: Maybe<LanguageWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<LanguageOrderInput>;
};


export type QueryLanguagesConnectionArgs = {
  where?: Maybe<LanguageWhereInput>;
};


export type QuerySchemaArgs = {
  where: SchemaWhereUniqueInput;
};


export type QuerySchemataArgs = {
  where?: Maybe<SchemaWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<SchemaOrderInput>;
};


export type QuerySchemataConnectionArgs = {
  where?: Maybe<SchemaWhereInput>;
};


export type QueryApplicationArgs = {
  where: ApplicationWhereUniqueInput;
};


export type QueryApplicationsArgs = {
  where?: Maybe<ApplicationWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<ApplicationOrderInput>;
};


export type QueryApplicationsConnectionArgs = {
  where?: Maybe<ApplicationWhereInput>;
};


export type QueryTranslationArgs = {
  where: TranslationWhereUniqueInput;
};


export type QueryTranslationsArgs = {
  where?: Maybe<TranslationWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<TranslationOrderInput>;
};


export type QueryTranslationsConnectionArgs = {
  where?: Maybe<TranslationWhereInput>;
};


export type QueryAppclientArgs = {
  where: AppclientWhereUniqueInput;
};


export type QueryAppclientsArgs = {
  where?: Maybe<AppclientWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<AppclientOrderInput>;
};


export type QueryAppclientsConnectionArgs = {
  where?: Maybe<AppclientWhereInput>;
};


export type QueryAuthcodegrantArgs = {
  where: AuthcodegrantWhereUniqueInput;
};


export type QueryAuthcodegrantsArgs = {
  where?: Maybe<AuthcodegrantWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<AuthcodegrantOrderInput>;
};


export type QueryAuthcodegrantsConnectionArgs = {
  where?: Maybe<AuthcodegrantWhereInput>;
};


export type QueryAuthroleArgs = {
  where: AuthroleWhereUniqueInput;
};


export type QueryAuthrolesArgs = {
  where?: Maybe<AuthroleWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<AuthroleOrderInput>;
};


export type QueryAuthrolesConnectionArgs = {
  where?: Maybe<AuthroleWhereInput>;
};


export type QueryAuthsessionArgs = {
  where: AuthsessionWhereUniqueInput;
};


export type QueryAuthsessionsArgs = {
  where?: Maybe<AuthsessionWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<AuthsessionOrderInput>;
};


export type QueryAuthsessionsConnectionArgs = {
  where?: Maybe<AuthsessionWhereInput>;
};


export type QueryAuthuserArgs = {
  where: AuthuserWhereUniqueInput;
};


export type QueryAuthusersArgs = {
  where?: Maybe<AuthuserWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<AuthuserOrderInput>;
};


export type QueryAuthusersConnectionArgs = {
  where?: Maybe<AuthuserWhereInput>;
};


export type QueryDatapermissionArgs = {
  where: DatapermissionWhereUniqueInput;
};


export type QueryDatapermissionsArgs = {
  where?: Maybe<DatapermissionWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<DatapermissionOrderInput>;
};


export type QueryDatapermissionsConnectionArgs = {
  where?: Maybe<DatapermissionWhereInput>;
};


export type QueryAssetsconfigArgs = {
  where: AssetsconfigWhereUniqueInput;
};


export type QueryAssetsconfigsArgs = {
  where?: Maybe<AssetsconfigWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<AssetsconfigOrderInput>;
};


export type QueryAssetsconfigsConnectionArgs = {
  where?: Maybe<AssetsconfigWhereInput>;
};


export type QueryDocumentfileArgs = {
  where: DocumentfileWhereUniqueInput;
};


export type QueryDocumentfilesArgs = {
  where?: Maybe<DocumentfileWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<DocumentfileOrderInput>;
};


export type QueryDocumentfilesConnectionArgs = {
  where?: Maybe<DocumentfileWhereInput>;
};


export type QueryImagefileArgs = {
  where: ImagefileWhereUniqueInput;
};


export type QueryImagefilesArgs = {
  where?: Maybe<ImagefileWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<ImagefileOrderInput>;
};


export type QueryImagefilesConnectionArgs = {
  where?: Maybe<ImagefileWhereInput>;
};


export type QueryMimetypeArgs = {
  where: MimetypeWhereUniqueInput;
};


export type QueryMimetypesArgs = {
  where?: Maybe<MimetypeWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<MimetypeOrderInput>;
};


export type QueryMimetypesConnectionArgs = {
  where?: Maybe<MimetypeWhereInput>;
};


export type QuerySoundfileArgs = {
  where: SoundfileWhereUniqueInput;
};


export type QuerySoundfilesArgs = {
  where?: Maybe<SoundfileWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<SoundfileOrderInput>;
};


export type QuerySoundfilesConnectionArgs = {
  where?: Maybe<SoundfileWhereInput>;
};


export type QueryVideofileArgs = {
  where: VideofileWhereUniqueInput;
};


export type QueryVideofilesArgs = {
  where?: Maybe<VideofileWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<VideofileOrderInput>;
};


export type QueryVideofilesConnectionArgs = {
  where?: Maybe<VideofileWhereInput>;
};

export type Schema = {
  __typename?: 'Schema';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  sectionName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sectionValues?: Maybe<Scalars['Json']>;
  subsections?: Maybe<Array<Schema>>;
  translations?: Maybe<Array<Translation>>;
};

export type SchemaConnection = {
  __typename?: 'SchemaConnection';
  totalCount: Scalars['Int'];
};

export type SchemaCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  sectionName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sectionValues?: Maybe<Scalars['Json']>;
  subsections?: Maybe<SchemaCreateManyInput>;
  translations?: Maybe<TranslationCreateManyInput>;
};

export type SchemaCreateManyInput = {
  create?: Maybe<Array<Maybe<SchemaCreateInput>>>;
  connect?: Maybe<Array<Maybe<SchemaWhereUniqueInput>>>;
};

export type SchemaCreateOneInput = {
  create?: Maybe<SchemaCreateInput>;
  connect?: Maybe<SchemaWhereUniqueInput>;
};

export type SchemaOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  sectionName?: Maybe<OrderByEnum>;
  description?: Maybe<OrderByEnum>;
  sectionValues?: Maybe<OrderByEnum>;
};

export type SchemaUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  sectionName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sectionValues?: Maybe<Scalars['Json']>;
  subsections?: Maybe<SchemaUpdateManyInput>;
  translations?: Maybe<TranslationUpdateManyInput>;
};

export type SchemaUpdateManyInput = {
  create?: Maybe<Array<Maybe<SchemaCreateInput>>>;
  connect?: Maybe<Array<Maybe<SchemaWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<SchemaWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<SchemaWhereUniqueInput>>>;
};

export type SchemaUpdateOneInput = {
  create?: Maybe<SchemaCreateInput>;
  connect?: Maybe<SchemaWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type SchemaWhereInput = {
  OR?: Maybe<Array<SchemaWhereInput>>;
  AND?: Maybe<Array<SchemaWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  sectionName?: Maybe<Scalars['String']>;
  sectionName_eq?: Maybe<Scalars['String']>;
  sectionName_neq?: Maybe<Scalars['String']>;
  sectionName_contains?: Maybe<Scalars['String']>;
  sectionName_notcontains?: Maybe<Scalars['String']>;
  sectionName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_notcontains?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  subsections?: Maybe<SchemaWhereInput>;
  translations?: Maybe<TranslationWhereInput>;
};

export type SchemaWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Soundfile = {
  __typename?: 'Soundfile';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<Assetsconfig>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<Mimetype>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type SoundfileConnection = {
  __typename?: 'SoundfileConnection';
  totalCount: Scalars['Int'];
};

export type SoundfileCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<AssetsconfigCreateOneInput>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<MimetypeCreateOneInput>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type SoundfileOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  description?: Maybe<OrderByEnum>;
  metainfo?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
  url?: Maybe<OrderByEnum>;
};

export type SoundfileUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<AssetsconfigUpdateOneInput>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<MimetypeUpdateOneInput>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type SoundfileWhereInput = {
  OR?: Maybe<Array<SoundfileWhereInput>>;
  AND?: Maybe<Array<SoundfileWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  assetsConfig?: Maybe<AssetsconfigWhereInput>;
  description?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_notcontains?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  mimeType?: Maybe<MimetypeWhereInput>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['Url']>;
  url_eq?: Maybe<Scalars['Url']>;
  url_neq?: Maybe<Scalars['Url']>;
  url_contains?: Maybe<Scalars['Url']>;
  url_notcontains?: Maybe<Scalars['Url']>;
};

export type SoundfileWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Translation = {
  __typename?: 'Translation';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  translationValues?: Maybe<Scalars['Json']>;
  language?: Maybe<Language>;
  istranslated?: Maybe<Scalars['Boolean']>;
  schema?: Maybe<Schema>;
};

export type TranslationConnection = {
  __typename?: 'TranslationConnection';
  totalCount: Scalars['Int'];
};

export type TranslationCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  translationValues?: Maybe<Scalars['Json']>;
  language?: Maybe<LanguageCreateOneInput>;
  istranslated?: Maybe<Scalars['Boolean']>;
  schema?: Maybe<SchemaCreateOneInput>;
};

export type TranslationCreateManyInput = {
  create?: Maybe<Array<Maybe<TranslationCreateInput>>>;
  connect?: Maybe<Array<Maybe<TranslationWhereUniqueInput>>>;
};

export type TranslationOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  translationValues?: Maybe<OrderByEnum>;
  istranslated?: Maybe<OrderByEnum>;
};

export type TranslationUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  translationValues?: Maybe<Scalars['Json']>;
  language?: Maybe<LanguageUpdateOneInput>;
  istranslated?: Maybe<Scalars['Boolean']>;
  schema?: Maybe<SchemaUpdateOneInput>;
};

export type TranslationUpdateManyInput = {
  create?: Maybe<Array<Maybe<TranslationCreateInput>>>;
  connect?: Maybe<Array<Maybe<TranslationWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<TranslationWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<TranslationWhereUniqueInput>>>;
};

export type TranslationWhereInput = {
  OR?: Maybe<Array<TranslationWhereInput>>;
  AND?: Maybe<Array<TranslationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  language?: Maybe<LanguageWhereInput>;
  istranslated?: Maybe<Scalars['Boolean']>;
  istranslated_eq?: Maybe<Scalars['Boolean']>;
  istranslated_neq?: Maybe<Scalars['Boolean']>;
  schema?: Maybe<SchemaWhereInput>;
};

export type TranslationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};



export type Videofile = {
  __typename?: 'Videofile';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<Assetsconfig>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<Mimetype>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type VideofileConnection = {
  __typename?: 'VideofileConnection';
  totalCount: Scalars['Int'];
};

export type VideofileCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<AssetsconfigCreateOneInput>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<MimetypeCreateOneInput>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type VideofileOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  description?: Maybe<OrderByEnum>;
  metainfo?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
  url?: Maybe<OrderByEnum>;
};

export type VideofileUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<AssetsconfigUpdateOneInput>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<MimetypeUpdateOneInput>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type VideofileWhereInput = {
  OR?: Maybe<Array<VideofileWhereInput>>;
  AND?: Maybe<Array<VideofileWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  assetsConfig?: Maybe<AssetsconfigWhereInput>;
  description?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_notcontains?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  mimeType?: Maybe<MimetypeWhereInput>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['Url']>;
  url_eq?: Maybe<Scalars['Url']>;
  url_neq?: Maybe<Scalars['Url']>;
  url_contains?: Maybe<Scalars['Url']>;
  url_notcontains?: Maybe<Scalars['Url']>;
};

export type VideofileWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type AuthuserQueryVariables = Exact<{
  where: AuthuserWhereUniqueInput;
}>;


export type AuthuserQuery = (
  { __typename?: 'Query' }
  & { authuser: (
    { __typename?: 'Authuser' }
    & Pick<Authuser, 'id'>
  ) }
);

export type CreateAuthuserMutationVariables = Exact<{
  data: AuthuserCreateInput;
}>;


export type CreateAuthuserMutation = (
  { __typename?: 'Mutation' }
  & { createAuthuser: (
    { __typename?: 'Authuser' }
    & Pick<Authuser, 'id'>
  ) }
);

export type ApplicationsQueryVariables = Exact<{
  where?: Maybe<ApplicationWhereInput>;
}>;


export type ApplicationsQuery = (
  { __typename?: 'Query' }
  & { applications: Array<(
    { __typename?: 'Application' }
    & Pick<Application, 'id' | 'name'>
    & { root?: Maybe<(
      { __typename?: 'Schema' }
      & Pick<Schema, 'id'>
      & { subsections?: Maybe<Array<(
        { __typename?: 'Schema' }
        & Pick<Schema, 'id' | 'sectionName' | 'description' | 'sectionValues'>
        & { translations?: Maybe<Array<(
          { __typename?: 'Translation' }
          & Pick<Translation, 'id' | 'istranslated'>
          & { language?: Maybe<(
            { __typename?: 'Language' }
            & Pick<Language, 'isolanguage'>
          )> }
        )>>, subsections?: Maybe<Array<(
          { __typename?: 'Schema' }
          & Pick<Schema, 'id'>
        )>> }
      )>> }
    )>, defaultLanguage?: Maybe<(
      { __typename?: 'Language' }
      & Pick<Language, 'id' | 'namelanguage' | 'isolanguage'>
    )>, languages?: Maybe<Array<(
      { __typename?: 'Language' }
      & Pick<Language, 'id' | 'namelanguage' | 'isolanguage'>
    )>> }
  )> }
);

export type ApplicationQueryVariables = Exact<{
  where: ApplicationWhereUniqueInput;
}>;


export type ApplicationQuery = (
  { __typename?: 'Query' }
  & { application: (
    { __typename?: 'Application' }
    & Pick<Application, 'id' | 'name'>
    & { root?: Maybe<(
      { __typename?: 'Schema' }
      & Pick<Schema, 'id'>
    )>, defaultLanguage?: Maybe<(
      { __typename?: 'Language' }
      & Pick<Language, 'id' | 'namelanguage' | 'isolanguage' | 'nativename' | 'flag'>
    )>, languages?: Maybe<Array<(
      { __typename?: 'Language' }
      & Pick<Language, 'id' | 'namelanguage' | 'isolanguage' | 'nativename' | 'flag'>
    )>> }
  ) }
);

export type SchemaQueryVariables = Exact<{
  where: SchemaWhereUniqueInput;
}>;


export type SchemaQuery = (
  { __typename?: 'Query' }
  & { schema: (
    { __typename?: 'Schema' }
    & Pick<Schema, 'id' | 'sectionName' | 'description' | 'sectionValues'>
    & { translations?: Maybe<Array<(
      { __typename?: 'Translation' }
      & Pick<Translation, 'id' | 'istranslated'>
      & { language?: Maybe<(
        { __typename?: 'Language' }
        & Pick<Language, 'isolanguage'>
      )> }
    )>>, subsections?: Maybe<Array<(
      { __typename?: 'Schema' }
      & Pick<Schema, 'id'>
    )>> }
  ) }
);

export type LanguagesQueryVariables = Exact<{
  where?: Maybe<LanguageWhereInput>;
}>;


export type LanguagesQuery = (
  { __typename?: 'Query' }
  & { languages: Array<(
    { __typename?: 'Language' }
    & Pick<Language, 'id' | 'namelanguage' | 'isolanguage' | 'nativename' | 'flag'>
  )> }
);
