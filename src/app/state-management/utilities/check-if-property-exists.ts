export const checkIfPropertyExists = (state: any, property: string, errorMessage: string) => {
  const condition = state.hasOwnProperty(property);
  return checkIfConditionMet(condition, errorMessage);
}

export const checkIfConditionMet = (condition: { met: boolean, value: any }, errorMessage: string) => {
  if (condition.met) return condition.value;
  console.error(errorMessage);
  throw new Error(errorMessage);
}
