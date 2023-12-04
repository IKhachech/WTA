import { Stats } from "./stat.model";
import { Image } from "./image.model";
    export class WtaTour {
        idTour!: number;
        courtSurface!: string;
        dotation!: number;
        dateTour!: Date;
        nameTour!: string;
        winner!: string;
        stats!: Stats ; 
        image! : Image ;
        imageStr!:string;
        images!:Image[];
        imagePath!: string;
      }