import {
  applyMiddleware, compose, createStore, Middleware, Store,
  StoreEnhancer
} from 'redux';
import { createLogger } from 'redux-logger';
import { rootReducer } from './root.reducer';
import { AppState } from './store';
import { sagaMiddleware } from './sagas';

export default function initStore(initialState?: AppState) {
  const middleware: Array<Middleware> = [];
  const enhancers: Array<StoreEnhancer<AppState>> = [];

  middleware.push(sagaMiddleware);
  // tslint:disable:no-any
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
  // tslint:enable:no-any

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
      level: 'info',
      collapsed: true
    });
    middleware.push(logger);
  }

  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  return createStore(rootReducer, initialState, enhancer) as Store<AppState>;

}
