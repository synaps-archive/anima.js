export interface Owner {
  chain: string;
  wallet: string;
  public_address: string;
  public_key_encryption?: string;
}

export interface Issuer {
  id: string;
  public_address: string;
}
