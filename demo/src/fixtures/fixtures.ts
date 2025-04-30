import { Audit } from 'dpe-audit'
import fixture from './fixture.json'
import { $audit, setAudit } from '../stores/user'

export const useFixtures = () => {
  if (null === $audit.get()) {
    setAudit(fixture as Audit.AuditWithData)
  }
}
