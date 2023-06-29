import React from 'react'
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import titleLogo from './assets/media/eldenring_title.png'
import Home from './components/Home'
import ArmorArchive from './components/armor/ArmorArchive'
import WeaponArchive from './components/weapons/WeaponArchive'
import ShieldArchive from './components/shields/ShieldArchive'
import TalismanArchive from './components/talismans/TalismanArchive'
import AshArchive from './components/ashes/AshArchive'
import NPCArchive from './components/npcs/NPCArchive'
import BossArchive from './components/bosses/BossArchive'

export default function App(props) {
  return (
    <div className="App">
      <div className='title-main-container'>
        <img className='title-main' src={titleLogo} alt="elden ring title logo" />
        <h1 className='font-face-ers subtitle-main'>archives</h1>
      </div>
      <div className='navbar font-face-cinzel'>
        <Link className='navlink' to='/'>Home</Link>
        <Link className='navlink' to='armor-archive'>Armor</Link>
        <Link className='navlink' to='weapon-archive'>Weapons</Link>
        <Link className='navlink' to='shield-archive'>Shields</Link>
        <Link className='navlink' to='talisman-archive'>Talismans</Link>
        <Link className='navlink' to='ash-archive'>Ashes of War</Link>
        <Link className='navlink' to='npc-archive'>NPCs</Link>
        <Link className='navlink' to='boss-archive'>Bosses</Link>
      </div>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='armor-archive' element={<ArmorArchive />} />
        <Route path='weapon-archive' element={<WeaponArchive />} />
        <Route path='shield-archive' element={<ShieldArchive />} />
        <Route path='talisman-archive' element={<TalismanArchive />} />
        <Route path='ash-archive' element={<AshArchive />} />
        <Route path='npc-archive' element={<NPCArchive />} />
        <Route path='boss-archive' element={<BossArchive />} />
      </Routes>
    </div>
  );
}
