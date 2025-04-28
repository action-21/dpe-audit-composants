import { Audit } from '~'
import fixture from './fixture.json'

export const useFixture = (): Audit.Audit => {
  return fixture as Audit.Audit
}
