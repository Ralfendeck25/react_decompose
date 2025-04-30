import React from 'react';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';
import './App.css';

function App() {
  const paragraphs = [
    'In elementum lorem eget est euismod ornare...',
    'In ac nisi lacus. Fusce est dolor...',
    'Donec arcu elit, euismod vel lobortis eu...',
    'Cras egestas tempor nibh, a fermentum...',
    'Pellentesque habitant morbi tristique senectus...',
  ];

  const navLinks = [
    { href: '#about', text: 'About' },
    { href: '#services', text: 'Services' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <main className="app">
      <Welcome text="Sticky Header!" />
      <Header title="Site Name" links={navLinks} />
      <Article title="Headline" paragraphs={paragraphs} />
    </main>
  );
}

export default App;
