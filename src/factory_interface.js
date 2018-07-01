// @flow

/**
 * Factory interface definition.
 */
export interface iFactory<InputType, OutputType> {

  /**
   * Takes in item to generate an OutputType.
   * 
   * @param {InputType} item Item that decides which type of object will be built.
   * @return {OutputType}
   */
  build(item: InputType): OutputType; 
};