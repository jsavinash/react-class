import ReactDOM from 'react-dom';

const Content = () => (<div>Port</div>);

export const Port = () => (ReactDOM.createPortal(<Content />, document.body));
