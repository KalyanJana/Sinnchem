import { useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, AppStore, RootState } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()


// // When writing selector functions for use with useSelector
// interface RootState {
//     isOn: boolean
// }
// const isOn = useSelector((state: RootState) => state.isOn)

// //When writing dispatch functions for use with useDispatch
// // store.ts
// export type AppDispatch = typeof store.dispatch
// // MyComponent.tsx
// const dispatch: AppDispatch = useDispatch()