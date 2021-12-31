export default interface Owner {
  chain: string;
  wallet: string;
  public_address: string;
  public_key_encryption?: string;
}

export default interface Issuer {
  id: string;
  public_address: string;
}

export default interface IssuingRequestField {
  name: string;
  type: string;
}
