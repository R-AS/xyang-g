import create from 'zustand'

type TSite = {
  title: string
  author: string
  description: string
}

const useSiteStore = create<TSite>(set => ({
  title: '',
  author: '',
  description: '',
  setSiteData: (site: TSite) => set(() => ({
    title: site.title,
    author: site.author,
    description: site.description,
  }))
}))

export default useSiteStore