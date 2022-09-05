export type Die = 1 | 2 | 3 | 4 | 5 | 6

const fn = (input: unknown) => {
  const stringValue: string = input as string
}

export const throwDie = (): Die => {
  const min = 1
  const max = 6
  return Math.floor(Math.random() * (max - min + 1) + min) as Die
}

const setGrade = (
  studentId: number,
  grade: 'A' | 'B' | 'C' | 'D' | 'E' | 'F',
) => {}

setGrade(1, 'D')
