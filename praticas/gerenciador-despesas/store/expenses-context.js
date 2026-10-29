import { createContext, useContext, useReducer, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@expenses';

const ExpensesContext = createContext(null);

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [{ ...action.payload, id: Date.now().toString() }, ...state];
        case 'UPDATE':
            return state.map((item) =>
                item.id === action.payload.id
                    ? { ...item, ...action.payload.data }
                    : item
            );
        case 'DELETE':
            return state.filter((item) =>
                item.id !== action.payload
            );
        case 'SET':
            return action.payload;
        default:
            return state;
    }
}

export function ExpensesContextProvider({ children }) {
    const [expenses, dispatch] = useReducer(expensesReducer, []);
    const [isLoaded, setIsLoaded] = useState(false);

    // Carrega as despesas salvas ao abrir o app
    useEffect(() => {
        async function loadExpenses() {
            try {
                const json = await AsyncStorage.getItem(STORAGE_KEY);
                if (json) {
                    const saved = JSON.parse(json).map((item) => ({
                        ...item,
                        date: new Date(item.date), // texto -> Date
                    }));
                    dispatch({ type: 'SET', payload: saved });
                }
            } catch (error) {
                console.log('Erro ao carregar despesas', error);
            } finally {
                setIsLoaded(true);
            }
        }
        loadExpenses();
    }, []);

    // Salva sempre que as despesas mudarem
    useEffect(() => {
        // ainda carregando: não salva
        if (!isLoaded) return;
        AsyncStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(expenses)
        );
    }, [expenses, isLoaded]);

    const addExpense = (data) =>
        dispatch({ type: 'ADD', payload: data });
    const updateExpense = (id, data) =>
        dispatch({ type: 'UPDATE', payload: { id, data } });
    const deleteExpense = (id) =>
        dispatch({ type: 'DELETE', payload: id });

    const value = { expenses, addExpense, updateExpense, deleteExpense };

    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    );
}

export function useExpenses() {
    const context = useContext(ExpensesContext);
    if (!context) throw new Error('Faltou o ExpensesContextProvider');
    return context;
}