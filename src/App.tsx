import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import state from "./redux/state";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import { GridContainer } from "./components/GridContainer";
import { Container } from "./components/Container";
import { SidebarItemsType } from "./redux/state";


function App() {
  let message = state.profilePage.posts[0].message;
  let messages = state.dialogsPage.messages;
  let sidebarItems = state.sidebar.sidebarItems;
  let profilePage = state.profilePage
  console.log(profilePage)
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Container>
        <Header/>
        <GridContainer>
        <Sidebar collapsed={false} sidebarItems={sidebarItems}/>
        <Main data={profilePage}/>
        <Footer/>
        </GridContainer>
        </Container>
      </div>
    </BrowserRouter>
  );
}



type MessageType = {
  message: string;
};

const ByeMessage: React.FC<MessageType> = (props) => {
  // функциональная компонента новый синтаксис
  return <h1>{props.message}</h1>;
};

export default App;
