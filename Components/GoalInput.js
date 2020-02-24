import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput, Modal } from 'react-native';

const GoalInput = props => {
    const [enterdGoal, setEnterdeGoal] = useState('');

    const goalInputHandler = (enterdText) => {
        setEnterdeGoal(enterdText);
    };

    const addGoalHandler = () =>{
        props.onAddGoal(enterdGoal);
        setEnterdeGoal("");
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enterdGoal}
                />
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler}  />
                    </View>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel}/>
                    </View>
                
                </View>
              
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        marginBottom:10,
        width: '80%',
        borderColor: "black",
        borderWidth: 1,
        padding: 10
    },

    buttons: {
        width: "50%",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    button:{
        width: "40%"
    }
});


export default GoalInput;
