
export function array<T = number>(n: number, sample?: T): T[] {
  const a: (T | number)[] = []
  for (let i = 0; i < n; i++) {
    a.push(typeof sample === 'undefined' ? i : sample)
  }
  return a as T[]
}

export function asArray<T>(selectors: T | T[]): T[] {
  return Array.isArray(selectors) ? selectors : [selectors]
}

export function seq(start: number = 0, step: number = 1, max: number = 0): number[] {
  const result = []
  for (let i = start; i < max; i += step) {
    result.push(i)
  }
  return result
}