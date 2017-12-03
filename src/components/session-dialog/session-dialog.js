import React from 'react';
import Modal from 'react-modal';

import seatsImg from './sample-seats.png';

import styles from './session-dialog.css';

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.75)',
    zIndex: 9999
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    maxWidth: '420px',
    padding: '0',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background                 : '#222',
    border: 'none'
  }
};

export default function SessionDialog({
  activeSession,
  set
}) {
  if(!activeSession) { return null; }
  const { movie, session } = activeSession;
  const {
    siteURL,
    theater,
    type,
    time
  } = session;
  const timeSplit = time.split(':');

  return (
    <Modal
      isOpen={ true }
      style={ customStyles }
      contentLabel="Example Modal"
    >
      <div>
        <header className={ styles.header }>
          <img
            className={ styles.banner }
            src={ movie.posterHorizontal }
            alt={ `Pôster do filme ${ movie.title }` }
          />
          <div className={ styles.headerInfoWrapper }>
            <h1 className={ styles.title }>{ movie.title }</h1>
            <p className={ styles.basicInfo }>
              <span>{ movie.genres.join(', ') }</span>
              <span>{ movie.duration }min</span>
              <span>{ movie.contentRating }</span>
            </p>
          </div>
          <button className={ styles.btnClose } onClick={ set.bind(this, null) }>
            <i className="material-icons">close</i>
          </button>
        </header>
        <div className={ styles.sessionWrapper }>
          <span className={ styles.time }>
            <span>{ timeSplit[0] }h</span>
            <span>{ timeSplit[1] }</span>
          </span>
          <div className={ styles.sessionInfo }>
            <h3 className={ styles.movieTheater }>{ theater }</h3>
            <p className={ styles.movieRoom }>{ 'Sala 2' }</p>
          </div>
          <ul className={ styles.tags }>
            { type.map((tag, i) => {
              return (
                <li key={ i }>{ tag }</li>
              );
            }) }
          </ul>
        </div>
        <div className={ styles.contentWrapper }>
          <h2>Preços</h2>
          <p><b>Inteira: </b> R$ 25,00</p>
          <p><b>Meia: </b> R$ 12,50</p>          
          <h2>Assentos</h2>
          <img src={ seatsImg } />
          <a href={ siteURL }>Comprar esta sessão</a>
        </div>
      </div>
    </Modal>
  );
}
