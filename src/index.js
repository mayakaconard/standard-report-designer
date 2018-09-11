import React from 'react';
import ReactDOM from 'react-dom';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import './index.css';
import Dashboard from './Dashboard';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';



 
// Or using the CommonJS version:
// const DecoupledEditor = require( '@ckeditor/ckeditor5-build-decoupled-document' );
//  console.log("INDEX JS REACHED")
// DecoupledEditor
//     .create( '<h2>Hello world!</h2>', {
//             toolbarContainer: document.querySelector( '.toolbar-container' ),
//             editableContainer: document.querySelector( '.editable-container' )
//         } )
//     .then( editor => {
//         console.log("THEN REACHED")
//         window.editor = editor;
//     } )
//     .catch( err => {
//         console.error( err.stack );
//     } );
ReactDOM.render(<Dashboard />, document.getElementById('root'));

registerServiceWorker();
