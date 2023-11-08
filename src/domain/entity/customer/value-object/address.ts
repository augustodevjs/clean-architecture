export class Address {
  _zip: string;
  _city: string;
  _street: string;
  _number: number;

  constructor(street: string, number: number, city: string, zip: string) {
    this._zip = zip;
    this._city = city;
    this._street = street;
    this._number = number;

    this.validate();
  }

  validate() {
    if (!this._street) {
      throw new Error("Street is required")
    }

    if (!this._number) {
      throw new Error("Number is required")
    }

    if (!this._city) {
      throw new Error("city is required")
    }

    if (!this._zip) {
      throw new Error("zip is required")
    }
  }

  get street(): string {
    return this._street;
  }

  get number(): number {
    return this._number;
  }

  get zip(): string {
    return this._zip;
  }

  get city(): string {
    return this._city;
  }

  toString() {
    return `${this._zip} ${this._city} ${this._street} ${this._number}`
  }
}