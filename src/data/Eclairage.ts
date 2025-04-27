import type { Consommation, Emission } from './Common'

export interface Eclairage {
  data: EclairageData
}

export interface EclairageData {
  consommations: Consommation[]
  emissions: Emission[]
}
