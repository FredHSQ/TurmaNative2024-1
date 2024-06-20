import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/Routes';
import { CartProvider } from './src/context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <StatusBar
        style='light'
        translucent={true}
      />
      <Routes />
    </CartProvider>
  );
};
