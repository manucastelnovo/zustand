import { create } from 'zustand'

interface BearStore {
    blackBears: number
    polarBears: number
    pandaBears: number

    incrementBlackBears: (by:number) => void
    incrementPolarBears: (by:number) => void
    incrementPandaBears: (by:number) => void
}

export const useBearStore = create<BearStore>()((set) => ({
    blackBears: 10,
    polarBears: 5,
    pandaBears: 1,
    bears: 0,
    
    incrementBlackBears: (by:number) => set((state) => ({ blackBears: state.blackBears + by })),
    incrementPolarBears: (by:number) => set((state) => ({ polarBears: state.polarBears + by })),
    incrementPandaBears: (by:number) => set((state) => ({ pandaBears: state.pandaBears + by })),
}))
