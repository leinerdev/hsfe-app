export enum SourceOfTruthKeys {
  'USER' = 'user'
}

export const EmptyUserState = {
  name: '',
  age: 0
}

export enum UserStateProperties {
  'NAME' = 'name',
  'AGE' = 'age'

}

export const SourceOfTruth = [
  {
    key: SourceOfTruthKeys.USER,
    state: EmptyUserState
  }
];
