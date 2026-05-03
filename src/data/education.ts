export type EducationEntry = {
  type: 'degree' | 'certification'
  title: string
  institution: string
  year: string
  grade?: string
}

export const educationEntries: EducationEntry[] = [
  {
    type: 'degree',
    title: 'Bachelor of Information Technology',
    institution: 'Institut Teknologi Garut',
    year: '2016',
    grade: 'GPA: 3.4',
  },
  {
    type: 'certification',
    title: 'Oracle Certified Professional, Java SE 8 Programmer',
    institution: 'Oracle',
    year: '2021',
  },
  {
    type: 'certification',
    title: 'Oracle Certified Associate, Java SE 8 Programmer',
    institution: 'Oracle',
    year: '2020',
  },
]
