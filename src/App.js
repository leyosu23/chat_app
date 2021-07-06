import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/chatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = "8ad643fa-2e81-4d74-b438-ba185e144d24";

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;