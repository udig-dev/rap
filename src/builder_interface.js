// @flow

/**
 * Interface for builder design pattern.
 */
export interface iBuilder<T> {

  /**
   * Build T object.
   */
  build(): T;
};