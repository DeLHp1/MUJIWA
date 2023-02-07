import {v4 as uuidV4} from 'uuid'

export const initialValues = {
    toast: []
}

export const ENUM_ACTION  = {
    ADD_UPDATE_UI_START: 'ADD_UPDATE_UI_START',
    ADD_UPDATE_UI_WAITING: 'ADD_UPDATE_UI_WAITING',
    ADD_UPDATE_UI_SUCCESS: 'ADD_UPDATE_UI_SUCCESS',
    ADD_UPDATE_UI_FAILED: 'ADD_UPDATE_UI_FAILED',
    REMOVE_TOAST: 'REMOVE_TOAST',
}

export const ENUM_TYPE_TOAST = {
    MW_UPDATER_START: 'MW_UPDATER_START',
    MW_UPDATER_WAITING: 'MW_UPDATER_WAITING',
    MW_UPDATER_SUCCESS: 'MW_UPDATER_SUCCESS',
    MW_UPDATER_FAILED: 'MW_UPDATER_FAILED'
}

const getID = (type) => `${type}-${uuidV4()}`

export default function ToastReducer(state, action)
{
    switch (action.type)
    {
        case ENUM_ACTION.ADD_UPDATE_UI_START:
            return {
                toast: [...state.toast, {id: getID(ENUM_TYPE_TOAST.MW_UPDATER_START), type: ENUM_TYPE_TOAST.MW_UPDATER_START, title: action.title, message: action.message}]
            }
            break
        case ENUM_ACTION.ADD_UPDATE_UI_WAITING:
            return {
                toast: [...state.toast, {id: getID(ENUM_TYPE_TOAST.MW_UPDATER_WAITING), type: ENUM_TYPE_TOAST.MW_UPDATER_WAITING}]
            }
            break
        case ENUM_ACTION.ADD_UPDATE_UI_SUCCESS:
            return {
                toast: [...state.toast, {id: getID(ENUM_TYPE_TOAST.MW_UPDATER_SUCCESS), type: ENUM_TYPE_TOAST.MW_UPDATER_SUCCESS, title: action.title, message: action.message}]
            }
            break
        case ENUM_ACTION.ADD_UPDATE_UI_FAILED:
            return {
                toast: [...state.toast, {id: getID(ENUM_TYPE_TOAST.MW_UPDATER_FAILED), type: ENUM_TYPE_TOAST.MW_UPDATER_FAILED, title: action.title, message: action.message}]
            }
            break
        case ENUM_ACTION.REMOVE_TOAST:

            return {
                toast: state.toast.filter(e => {
                    return action.id ? e.id !== action.id : e.type !== action.toastType;
                })
            }
            break
        default:
            return state;
    }
}
