
// enum (exemple avec l'état d'une requete), chaque element de l'enum correspond a un index (number), sinon préciser les valeurs, permet d'avoir une meilleure lecture.
enum XhrReadyState {
    UNSENT = 1,
    OPENED = 2,
    HEADERS_RECEIVED,
    LOADING,
    DONE,
}

let readyState = 0;

if(readyState === XhrReadyState.UNSENT){} // 0
if(readyState === XhrReadyState.OPENED){} // 1
if(readyState === XhrReadyState.HEADERS_RECEIVED){} // 2
if(readyState === XhrReadyState.LOADING){} // 3
if(readyState === XhrReadyState.DONE){} // 4


console.groupCollapsed('Enum -> Etat requete :');
console.log('HEADERS_RECEIVED',XhrReadyState.HEADERS_RECEIVED);
console.log('OPENED',XhrReadyState.OPENED);
console.log('UNSET',XhrReadyState.UNSENT);
console.groupEnd();
