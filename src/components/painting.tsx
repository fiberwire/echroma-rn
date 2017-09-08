import PaintingSpecimen from '../evolution/painting-specimen'
import { default as React, Component } from 'react'
import { View, Text } from 'react-native'

interface State {

}

interface Props {
    specimen: PaintingSpecimen
}

export default class PaintingComponent extends Component<Props, State> {

    render() {
        return <View>
            <Text>Hello Painting</Text>
        </View>
    }
}