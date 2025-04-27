import type { Energie } from './Common'

export interface Chauffage {}

export interface Generateur {
  description: string
  energie: string
  signaletique: {
    pn: number | null
  }
}
