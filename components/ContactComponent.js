import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Card>
                    <Text>
                    1 Nucamp Way
                    </Text>
                <Text>
                    Seattle, WA 98001
                </Text>
                <Text>
                    U.S.A.
                </Text>
                <Text>
                    Phone: 1-206-555-1234
                </Text>
                <Text>
                    Email: campsites@nucamp.co
                </Text>
                    </Card>
                    </Animatable.View >
                </ScrollView >
        )
    }
}

export default Contact;