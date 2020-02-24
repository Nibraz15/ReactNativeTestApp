import React , {useState} from 'react';
import { StyleSheet, View, Button , FlatList, Modal } from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {


  const [courseGoal, setCourseGoals] = useState([]);

  const [isAddMode , setIsAddMode] = useState(false);

  const removeGoalHandler = goalId => {
    setCourseGoals(curretntGoals =>{
      return curretntGoals.filter((goal) => goal.id !== goalId );
    } );
  }
 
  const cancelGoalHandelr = () => {
      setIsAddMode(false);
  };

  const addGoalHandler = goalTitle => {
      setCourseGoals(curretntGoal => [...curretntGoal , {id: Math.random().toString() , value: goalTitle}]);
      setIsAddMode(false);
  };

  return (
   
    <View style={styles.screen}>
      <Button title="ADD NEW GOAL" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalHandelr}/>

      <FlatList 
      keyExtractor={(item , index) => item.id}
      style={{marginVertical: 10}} 
      data={courseGoal}  
      renderItem={itemData =>
        <GoalItem id={itemData.item.id} onDelete = {removeGoalHandler} 
        title={itemData.item.value}/>}/>
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50

  },


});
