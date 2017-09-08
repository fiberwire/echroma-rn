import { Specimen, Genome } from 'enome';
import { Painting } from '../models/painting';

import * as _ from 'lodash';
import { PaintingGenOptions } from './painting-gen-options';
import { Path } from '../models/path';

export default class PaintingSpecimen extends Specimen<PaintingGenOptions, Painting> {

  public createPhenotype(genotype: Genome<PaintingGenOptions>): Painting {
    const g = genotype;
    const o = g.options;

    // use a gene to determine how many paths to make
    const paths = _.range(g.g.int(o.minPaths, o.maxPaths))
      .map(() => {
        return Path.geneticPath(this.genotype);
      });

    return new Painting(o.width, o.height, paths);
  }

}
