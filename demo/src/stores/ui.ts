import { atom } from 'nanostores'

export const $dialogs = atom<string | false>(false)

export const open = (name: string) => {
  $dialogs.set(name)
}

export const close = () => {
  $dialogs.set(false)
}
