import create, { SetState, GetState } from 'zustand'

type TSiteState = {
  title: string
  author: string
  description: string
  siteUrl: string
}

type TSiteStore = {
  setSiteData: (state: TSiteState) => void
} & TSiteState

export const useSiteStore = create<TSiteStore>((set: SetState<TSiteStore>, get: GetState<TSiteStore>) => ({
  title: '',
  author: '',
  description: '',
  siteUrl: '',
  setSiteData: (site: TSiteState) => {
    set(site)
  }
}))
