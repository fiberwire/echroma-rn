import PaintingComponent from './components/painting'
import { View, StyleSheet } from 'react-native'

import React from 'react'
import PaintingSpecimen from './evolution/painting-specimen'
import { Genome } from 'enome'

interface State {
    specimen: PaintingSpecimen
}

interface Props { }

export default class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
            specimen: new PaintingSpecimen(new Genome({
                genomeLength: 1000,
                geneLength: 3,
                width: 1920,
                height: 1080,
                minX: 0,
                maxX: 1920,
                minY: 0,
                maxY: 1080,
                minPaths: 10,
                maxPaths: 1000,
                minLength: 1,
                maxLength: 3,
                minXRadius: 5,
                maxXRadius: 50,
                minYRadius: 5,
                maxYRadius: 50,
                minRotation: 0,
                maxRotation: 360,
                minLarge: 0,
                maxLarge: 1,
                minSweep: 0,
                maxSweep: 1,
                minRadius: 5,
                maxRadius: 50
            }))
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <PaintingComponent specimen={this.state.specimen} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
