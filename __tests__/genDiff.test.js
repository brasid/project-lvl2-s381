import fs from 'fs';
import genDiff from '../src';

describe('GenDiff', () => {
  it('check json', () => {
    const expected = fs.readFileSync('./__tests__/__fixtures__/expected', 'utf-8');
    const processed = genDiff('./__tests__/__fixtures__/before.json', './__tests__/__fixtures__/after.json');
    expect(processed).toBe(expected);
  });
  it('check yml', () => {
    const expected = fs.readFileSync('./__tests__/__fixtures__/expected', 'utf-8');
    const processed = genDiff('./__tests__/__fixtures__/before.yml', './__tests__/__fixtures__/after.yml');
    expect(processed).toBe(expected);
  });
  it('check different formats', () => {
    const expected = fs.readFileSync('./__tests__/__fixtures__/expected', 'utf-8');
    const processed = genDiff('./__tests__/__fixtures__/before.json', './__tests__/__fixtures__/after.yml');
    expect(processed).toBe(expected);
  });
});
