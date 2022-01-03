interface Owner {
  chain: string;
  wallet: string;
  public_address: string;
  public_key_encryption?: string;
}

interface Issuer {
  id: string;
  public_address: string;
}

interface Verifier {
  id: string;
  public_address: string;
}

interface IssuingRequestField {
  name: string;
  type: string;
}

export { IssuingRequestField, Issuer, Owner, Verifier };
