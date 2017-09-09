import { reproduceManyToOne } from 'enome/lib/operators/reproduction/many-to-one/reproduce-many-to-one'
import { ArtificialSelection, Specimen, Genome, IArtificialOptions } from 'enome'
import { PaintingGenOptions } from './painting-gen-options'
import { Painting } from '../models/painting'
import PaintingSpecimen from './painting-specimen'

export class PaintingEnvironment extends ArtificialSelection<PaintingGenOptions, Painting> {

    constructor(public options: IArtificialOptions, public genOptions: PaintingGenOptions) {
        super(options)
    }

    createSpecimen(): PaintingSpecimen {
        return new PaintingSpecimen(new Genome(this.genOptions))
    }

    reproduceSpecimen(parents: Specimen<PaintingGenOptions, Painting>[]): PaintingSpecimen {
        const genotypes = parents.map(p => p.genotype)

        return new PaintingSpecimen(reproduceManyToOne(genotypes))
    }

}
