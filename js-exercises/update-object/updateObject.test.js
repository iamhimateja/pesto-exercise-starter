/* eslint-disable no-undef */
import { updateObject } from './updateObject';

describe('updateObject', () => {
  it('updateObject does this thing', () => {
    expect(updateObject(1, '_', ['a', 'b', 'c'])).toEqual(['a', '_', 'c']);
    expect(updateObject(-1, '_', ['a', 'b', 'c'])).toEqual(['a', 'b', '_']);
    expect(updateObject(-1, 'a', ['b', 'c'])).toEqual(['b', 'a']);
    expect(updateObject(0, 'a', ['b', 'c'])).toEqual(['a', 'c']);
    expect(updateObject(1, 'a', ['b', 'c'])).toEqual(['b', 'a']);
  });
});
