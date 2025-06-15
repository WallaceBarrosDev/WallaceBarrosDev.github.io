import sanitaze from '@/helpers/sanitize_srt'

describe('sanitize_srt helper : [unit]', () => {

  it('should return an empty string when input is undefined', () => {
    // @ts-expect-error text is void
    expect(sanitaze()).toBe('')
  })

  it('should return an empty string when input is not a string (e.g., array of numbers)', () => {
    // @ts-expect-error text is arrayOfNumbers
    expect(sanitaze([1,2,3])).toBe('')
  })

  it('should trim excessive whitespace from string', () => {
    const text = '  a           '
    expect(sanitaze(text)).toBe('a')
  })

  it('should sanitize special characters (e.g., "ó" to Unicode escape)', () => {
    expect(sanitaze('ó')).toBe('\u00F3')
  })
})