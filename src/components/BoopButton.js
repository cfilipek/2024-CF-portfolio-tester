import useSound from 'use-sound';
import boopSfx from '../assets/jumping.wav';

export default function BoopButton ({ label, changeColor, color, audio }) {
  const [play] = useSound(boopSfx);
  return <button style={{
      backgroundColor: 'none', 
      color: color, border: '2px solid', 
      borderColor: color, 
      margin: '10px', 
      padding: '10px',
      cursor: 'pointer', 
      fontWeight: 'bold',
      borderRadius: '6px'}} onClick={() => {
      changeColor && changeColor()
      audio && play() 
    }}>{label}</button>;
};