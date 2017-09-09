
import { Path } from '../../src/models/path'
import { Genome } from 'enome'
import PaintingSpecimen from '../../src/evolution/painting-specimen'
import * as _ from 'lodash'

const move = Path.moveTo(10, 10)

describe('geneticPath', () => {
    it('should create a path based on a genome', () => {
        const specimen = new PaintingSpecimen(new Genome({
            genomeLength: 100,
            geneLength: 1,
            width: 100,
            height: 100,
            minX: 0,
            maxX: this.width,
            minY: 0,
            maxY: this.height,
            minPaths: 10,
            maxPaths: 10,
            minLength: 1,
            maxLength: 1,
            minXRadius: 1,
            maxXRadius: 10,
            minYRadius: 1,
            maxYRadius: 10,
            minRotation: 0,
            maxRotation: 0,
            minLarge: 0,
            maxLarge: 1,
            minSweep: 0,
            maxSweep: 1,
            minRadius: 1,
            maxRadius: 10
        },
        _.range(100).map(() => 0.1)
    ))

        const path = Path.geneticPath(specimen.genotype)

        expect(path.d).toBe('M 10 10')
    })
})

describe('moveTo', () => {
    it('should create a path with M 10 10 as the d property', () => {
        expect(move.d).toBe('M 10 10')
    })
})

describe('curveTo', () => {
    it('should add C 10 10 10 10 10 10', () => {
        const curve = move.curveTo(10, 10, 10, 10, 10, 10)
        expect(curve.d).toBe('M 10 10 C 10 10 10 10 10 10')
    })
})

describe('shortCurve', () => {
    it('should add S 10 10 10 10', () => {
        const short = move.shortCurve(10, 10, 10, 10)
        expect(short.d).toBe('M 10 10 S 10 10 10 10')
    })
})

describe('quadraticCurve', () => {
    it('should add Q 10 10 10 10', () => {
        const quad = move.quadraticCurve(10, 10, 10, 10)
        expect(quad.d).toBe('M 10 10 Q 10 10 10 10')
    })
})

describe('shortQuadratic', () => {
    it('should add T 10 10', () => {
        const short = move.shortQuadratic(10, 10)
        expect(short.d).toBe('M 10 10 T 10 10')
    })
})

describe('arc', () => {
    it('should add A 10 10 10 10 10 10 10', () => {
        const arc = move.arc(10, 10, 10, 10, 10, 10, 10)
        expect(arc.d).toBe('M 10 10 A 10 10 10 10 10 10 10')
    })
})

describe('circle', () => {
    it('should add two arcs to form a circle', () => {
        const arc = move.circle(10, 10, 10)
        expect(arc.d).toBe('M 10 10 M 0, 10 A 10, 10 0 1, 0 20, 0 A 10, 10 0 1, 0 -20, 0')
    })
})

describe('close', () => {
    it('should add Z', () => {
        const short = move.close()
        expect(short.d).toBe('M 10 10 Z')
    })
})