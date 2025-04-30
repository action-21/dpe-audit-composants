import { Audit } from 'dpe-audit'
import fixture from './fixture.json'

export const useFixture = (): Audit.AuditWithData => {
  return fixture as Audit.AuditWithData
}
