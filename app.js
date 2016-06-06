import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Button from 'react-native-button';

import {
    clear,
    writeTransactionCreateCar,
    writeTransactionUpdateCar,
    writeTransactionUpdateCarWithError,
    getCars,
    writeTransactionCreatePerson,
    getPersons,
    writeTransactionCreateCarAndPerson,
    writeTransactionCreateCarAndPerson2
} from './realm';

export default class ReactNativeRealmSandbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carText: 'null',
            personText: 'null',
        };
    }

    componentDidMount() {
        clear();
    }

    disp = () => {
        const myCars = getCars();
        if (myCars.length > 0) {
            this.setState({ carText: JSON.stringify(myCars[0], null, 2) });
        } else {
            this.setState({ carText: 'null' });
        }

        const persons = getPersons();
        if (persons.length > 0) {
            this.setState({ personText: JSON.stringify(persons[0], null, 2) });
        } else {
            this.setState({ personText: 'null' });
        }
    }

    onPressInitButton = () => {
        console.log('onPressInitButton');
        writeTransactionCreateCar();
        writeTransactionCreatePerson();
        this.disp();
    }

    onPressLoadButton = () => {
        console.log('onPressLoadButton');
        this.disp();
    }

    onPressUpdateCarButton = () => {
        console.log('onPressUpdateCarButton');
        writeTransactionUpdateCar();
        this.disp();
    }

    onPressUpdateCarWithErrorButton = () => {
        console.log('onPressUpdateCarWithErrorButton');
        writeTransactionUpdateCarWithError();
        this.disp();
    }

    onPressClearButton = () => {
        console.log('onPressClearButton');
        clear();
        this.setState({ carText: 'null', personText: 'null' });
    };
    
    onPressCreateCarAndPerson = () => {
        console.log('onPressCreateCarAndPerson');
        writeTransactionCreateCarAndPerson();
        this.disp();
    }
    
    onPressCreateCarAndPerson2 = () => {
        console.log('onPressCreateCarAndPerson2');
        writeTransactionCreateCarAndPerson2();
        this.disp();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Car: {this.state.carText}
                </Text>
                <Text>
                    Person: {this.state.personText}
                </Text>

                <Button
                    style={{ fontSize: 20, color: '#ff0000' }}
                    styleDisabled={{ color: 'gray' }}
                    onPress={this.onPressInitButton}
                    >
                    Init Data
                </Button>
                <Button
                    style={{ fontSize: 20, color: '#eba500' }}
                    styleDisabled={{ color: 'gray' }}
                    onPress={this.onPressLoadButton}
                    >
                    Load Data
                </Button>
                <Button
                    style={{ fontSize: 20, color: '#80d600' }}
                    styleDisabled={{ color: 'gray' }}
                    onPress={this.onPressClearButton}
                    >
                    Clear Data
                </Button>
                
                <Button
                    style={{ fontSize: 20, color: '#00c213' }}
                    styleDisabled={{ color: 'gray' }}
                    onPress={this.onPressUpdateCarButton}
                    >
                    Update Car
                </Button>
                <Button
                    style={{ fontSize: 20, color: '#00c288' }}
                    styleDisabled={{ color: 'gray' }}
                    onPress={this.onPressUpdateCarWithErrorButton}
                    >
                    Update Car With Error
                </Button>

                <Button
                    style={{ fontSize: 20, color: '#0088c2' }}
                    styleDisabled={{ color: 'gray' }}
                    onPress={this.onPressCreateCarAndPerson}
                    >
                    Create Car and Person
                </Button>
                
                <Button
                    style={{ fontSize: 20, color: '#0013c2' }}
                    styleDisabled={{ color: 'gray' }}
                    onPress={this.onPressCreateCarAndPerson2}
                    >
                    Create Car and Person 2
                </Button>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
