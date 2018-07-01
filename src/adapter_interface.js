// @flow

/**
 * Interface for adapting adaptee to adapted type.
 */
interface iAdapter<Adaptee, Adapted> {

  /**
   * Adapt item to type Adapted.
   *  
   * @param {Adaptee} item Adaptee to be adapted to Adapted.
   */
  adapt(item: Adaptee) : Adapted
};