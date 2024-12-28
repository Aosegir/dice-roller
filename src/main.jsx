import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Greet from './Greet.jsx';
import Dice from './Dice.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dice />
    <Dice />
    <Greet />
  </StrictMode>,
)
