import { Audit } from '~'

interface AuditFileType<T = Record<string, string>> {
  id: string
  default: Audit.Audit
}

const auditPathToId = (path: string): string => {
  const name = path.split('/').pop() || ''
  return name.replace('.json', '')
}

export const getAuditIds = async (): Promise<string[]> => {
  const files: Record<string, AuditFileType> = import.meta.glob<AuditFileType>(
    '/src/data/audits/*.json',
    {
      eager: true
    }
  )
  return Object.keys(files).map(auditPathToId)
}

export const getAuditById = async (id: string): Promise<Audit.Audit> => {
  const files: Record<string, AuditFileType> = import.meta.glob<AuditFileType>(
    '/src/data/audits/*.json',
    {
      eager: true
    }
  )

  const file = Object.values(files).find(file => file.id === id)

  if (!file) {
    throw new Error(`Audit with ID ${id} not found`)
  }

  return file.default
}
