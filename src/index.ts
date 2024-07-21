import $ from 'jquery';

import { add2 } from './chapter-6/add';

console.log(add2(1,2))
declare const Swal: any;

// type de base
// import './chapter-1/types';

// type enum 
// import './chapter-1/enum';

// function
// import './chapter-2/function';

// classes
// import './chapter-2/classes';

// interface
// import './chapter-3/interface';
// import './chapter-3/interface-avancee';
// import './chapter-4/operators';

// types generiques
// import './chapter-5/types-generique';
// import './chapter-5/class-generique';
// import './chapter-5/contrainte-generique';
// import './chapter-5/collection-type-generique';


// namespace

const myH1 = $('h1'); 

setTimeout(() => {

    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
},3000)