


export type UserLogin = {
  userEmail: string;
  loggedOut: boolean;
  loggedInAt: number;
  loggedOutAt: number;
  ipAddress: string;
  tokenId: string;
  tokenSecret?: string;  
  tokenDeleted: boolean;
  device?: string;  
}
