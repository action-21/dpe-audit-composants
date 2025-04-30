import { atom } from 'nanostores'
import { Audit } from 'dpe-audit'

export const $audit = atom<Audit.AuditWithData | null>(null)
export const setAudit = (audit: Audit.AuditWithData) => $audit.set(audit)
export const clearAudit = () => $audit.set(null)

export const $scenario = atom<Audit.Audit | null>(null)
export const setScenario = (scenario: Audit.Audit) => $scenario.set(scenario)
export const clearScenario = () => $scenario.set(null)
