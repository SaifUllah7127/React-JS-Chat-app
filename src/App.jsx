import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
      <ChatEngine
        height="100vh"
        projectID="693ad9fd-72e5-401f-8f07-7f493aeb6fcb"
        userName="saif"
        userSecret="123123"
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
      />
  );
};

export default App;
