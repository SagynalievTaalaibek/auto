import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from '@/features/auth/authSlice';
import { drawerReducer } from '@/features/drawer/drawer-slice';
import { orderReducer } from '@/features/order/order.slice';

const usersPersistConfig = {
	key: 'auto-crm:users',
	storage: storage,
	whitelist: ['user'],
};

const rootReducer = combineReducers({
	auth: persistReducer(usersPersistConfig, authReducer),
	drawer: drawerReducer,
	orders: orderReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, PAUSE, PERSIST, REHYDRATE, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
