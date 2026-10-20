import type { LocaleText } from '@/types/i18n'

interface Project {
  name: LocaleText;
  description: LocaleText;
  time: string;
  link: string;
}

const projects: Project[] = []

export { projects, type Project }
