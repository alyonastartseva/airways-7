export type JwtPayload = {
  preferred_username: string;
  realm_access?: {
    roles: string[];
  };
};

export type DecodedUser = {
  username: string;
  roles: string[];
};