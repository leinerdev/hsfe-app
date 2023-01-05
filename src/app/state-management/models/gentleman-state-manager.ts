import { checkIfConditionMet } from '../utilities/check-if-property-exists';
import { GentlemanObject } from './gentleman-object';
import { SourceOfTruth, SourceOfTruthState } from './source-of-truth';

export class GentlemanState {
  private observerArray: SourceOfTruth = new Map();

  constructor(sourceOfTruth: SourceOfTruthState[]) {
    sourceOfTruth.forEach((surceOfTruthState) => {
      const { key, state } = surceOfTruthState;
      this.createObservable(key, state);
    });
  }

  private createObservable(key: string, state: any) {
    const found = this.observerArray.has(key);
    if (found) {
      console.log(
        `The key ${key} already exists in the source of truth. The action will be ignore.`
      );
    } else {
      const gentlemanObject = new GentlemanObject(state);
      this.observerArray.set(key, gentlemanObject);
    }
  }

  getEntity(key: string): GentlemanObject {
    const found = checkIfConditionMet(
      { met: this.observerArray.has(key), value: this.observerArray.get(key) },
      `The key ${key} does not exist in the source of truth.`
    );

    return found;
  }
}
