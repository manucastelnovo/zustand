import { create } from 'zustand'

interface Bears {
    id: number
    name: string
}

interface BearStore {
    blackBears: number
    polarBears: number
    pandaBears: number

    bears: Bears[]

    incrementBlackBears: (by:number) => void
    incrementPolarBears: (by:number) => void
    incrementPandaBears: (by:number) => void

    doNothing: () => void
    addBear: () => void
    clearBears: () => void
}

export const useBearStore = create<BearStore>()((set) => ({
    blackBears: 10,
    polarBears: 5,
    pandaBears: 1,
    bears: [{ id: 1, name: 'Black Bear' }, { id: 2, name: 'Polar Bear' }, { id: 3, name: 'Panda Bear' }],
    
    incrementBlackBears: (by:number) => set((state) => ({ blackBears: state.blackBears + by })),
    incrementPolarBears: (by:number) => set((state) => ({ polarBears: state.polarBears + by })),
    incrementPandaBears: (by:number) => set((state) => ({ pandaBears: state.pandaBears + by })),
    
    doNothing: () => set( state => ({ bears : [...state.bears]}) ),
    addBear: () => set( state => ({ 
        bears : [...state.bears, {id: state.bears.length + 1, name: `Bear ${state.bears.length + 1}`}]
    }) ),
    clearBears: () => set( { bears : []} )

}))
