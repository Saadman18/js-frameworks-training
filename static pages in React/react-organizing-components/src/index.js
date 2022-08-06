import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import styles from './styles.css';  

function Main(){
  return(
  <div>
      <Header/>
      <MainContent/>
      <Footer/>
  </div>

  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);

reportWebVitals();
