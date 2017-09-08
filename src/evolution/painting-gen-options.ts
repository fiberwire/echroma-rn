
import { IGenomeOptions } from 'enome';

export interface PaintingGenOptions extends IGenomeOptions {

    width: number;
    height: number;

    // min and max coordinates
    minX: number;
    maxX: number;

    minY: number;
    maxY: number;

    // number of paths
    minPaths: number;
    maxPaths: number;

    // number of segments in path
    minLength: number;
    maxLength: number;

    // arcs
    minXRadius: number;
    maxXRadius: number;

    minYRadius: number;
    maxYRadius: number;

    minRotation: number;
    maxRotation: number;

    minLarge: number;
    maxLarge: number;

    minSweep: number;
    maxSweep: number;

    // circles
    minRadius: number;
    maxRadius: number;
}
