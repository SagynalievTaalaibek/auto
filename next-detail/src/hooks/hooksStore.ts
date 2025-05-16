import {
	type TypedUseSelectorHook,
	useDispatch,
	useSelector,
} from 'react-redux';

import { AppDispatch, RootState } from '@/config/store/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
