import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { CommentList } from './CommentList'; 

const App = () => (
    <main>
        <CommentList activeUsername={'juliusomo'}/>
   </main> 
) 



const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(<App />);
