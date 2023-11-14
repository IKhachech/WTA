import { Stats } from "./stat.model";
    export class WtaTour {
        idTour!: number;
        courtSurface!: string;
        dotation!: number;
        dateTour!: Date;
        nameTour!: string;
        winner!: string;
        stats!: Stats ; // Permettre à stat d'être null
      }