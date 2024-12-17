import { configureStore } from '@reduxjs/toolkit';
import ingredientsReducer from '../slices/ingredients';
import modalReducer from '../slices/modal';
import feedReducer from '../slices/feed';
import authReducer from '../slices/auth';
import ordersReducer from '../slices/orders';
import { rootReducer } from '../store'; // импортируем rootReducer

describe('Инициализация rootReducer', () => {
  it('должен корректно инициализировать начальное состояние', () => {
    // Создаём тестовый store
    const testStore = configureStore({
      reducer: rootReducer
    });

    // Получаем текущее состояние store
    const state = testStore.getState();
    // Проверяем начальное состояние каждого слайса
    expect(state.ingredients).toEqual(
      ingredientsReducer(undefined, { type: '@@INIT' })
    );
    expect(state.modals).toEqual(modalReducer(undefined, { type: '@@INIT' }));
    expect(state.feed).toEqual(feedReducer(undefined, { type: '@@INIT' }));
    expect(state.auth).toEqual(authReducer(undefined, { type: '@@INIT' }));
    expect(state.orders).toEqual(ordersReducer(undefined, { type: '@@INIT' }));
  });
});

describe('rootReducer', () => {
  it('should initialize with the correct state', () => {
    const store = configureStore({ reducer: rootReducer });
    expect(store.getState()).toBeDefined();
  });
});
