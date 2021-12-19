import React from 'react';
import { AddNewItem } from './components/AddNewItem';
import { Card } from './components/Card';
import { Column } from './components/Column';
import { AppContainer } from './styles';

export const App = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app aeiou" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn TypeScript" />
      </Column>
      <Column text="Done">
        <Card text="Using static typing" />
      </Column>
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => console.log(text)}
      />
    </AppContainer>
  )
}

export default App;
