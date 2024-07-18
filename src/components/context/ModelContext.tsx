import {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useReducer,
} from 'react'

const enum REDUCER_ACTION_TYPE {
  CHANGE_LIGHT,
  OPEN_LAPTOP,
  ChANGE_CAM,
}
type ReducerAction = {
  type: REDUCER_ACTION_TYPE
}
type StateType = {
  light: boolean
  open: boolean
  freeCam: boolean
}
export const initState: StateType = {
  light: false,
  open: false,
  freeCam: false,
}

const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.CHANGE_LIGHT:
      return { ...state, light: !state.light }
    case REDUCER_ACTION_TYPE.OPEN_LAPTOP:
      return { ...state, open: !state.open }
    case REDUCER_ACTION_TYPE.ChANGE_CAM:
      return { ...state, freeCam: !state.freeCam }
    default:
      throw new Error()
  }
}

const useModelContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initState)

  const changeLight = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.CHANGE_LIGHT }),
    []
  )

  const openLaptop = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.OPEN_LAPTOP }),
    []
  )
  const changeCam = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.ChANGE_CAM }),
    []
  )

  return { state, changeLight, openLaptop, changeCam }
}
type UseModelContexType = ReturnType<typeof useModelContext>

const initModelContextState: UseModelContexType = {
  state: initState,
  changeLight: () => {},
  openLaptop: () => {},
  changeCam: () => {},
}

export const ModelContext = createContext<UseModelContexType>(
  initModelContextState
)

type ChildrenType = {
  children?: ReactElement | undefined
}
export const ModelProvider = ({
  children,
  ...initState
}: ChildrenType & StateType): ReactElement => {
  return (
    <ModelContext.Provider value={useModelContext(initState)}>
      {children}
    </ModelContext.Provider>
  )
}

type UseModelHookType = {
  light: boolean
  open: boolean
  freeCam: boolean
  changeLight: () => void
  openLaptop: () => void
  changeCam: () => void
}

export const useModel = (): UseModelHookType => {
  const {
    state: { light, open, freeCam },
    changeLight,
    openLaptop,
    changeCam,
  } = useContext(ModelContext)
  return {
    light,
    open,
    freeCam,
    changeLight,
    openLaptop,
    changeCam,
  }
}
