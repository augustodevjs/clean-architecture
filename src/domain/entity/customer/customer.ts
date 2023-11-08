import { Address } from "./value-object";

export class Customer {
  private readonly _id: string;
  private _name: string;
  private _address!: Address;
  private _active: boolean = false;
  private _rewardsPoints: number = 0;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  get id(): string {
    return this._id
  }

  get name(): string {
    return this._name;
  }

  get address(): Address | null {
    return this._address ?? null;
  }

  get rewardsPoints(): number {
    return this._rewardsPoints;
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }

    if (this._name.length === 0) {
      throw new Error("Name is required")
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  isActive(): boolean {
    return this._active
  }

  changeAddress(address: Address) {
    this._address = address;
  }

  activate() {
    if (!this._address) {
      throw new Error("Address is mandatory to activate a customer")
    }

    this._active = true;
  }

  desactivate() {
    this._active = false;
  }

  addRewardPoints(points: number) {
    this._rewardsPoints += points;
  }
}