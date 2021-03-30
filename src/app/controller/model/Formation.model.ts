import {ProfesseurInfoVo} from './ProfesseurInfo.model';
import {EtudiantInfoVo} from './EtudiantInfo.model';
import {EtablissementVo} from './Etablissement.model';

export class FormationVo {
    public intitule: string;
    public ref: string;
    public id: string;
    public description: string;
    public etablissementVo: EtablissementVo ;
    public responsableVo: ProfesseurInfoVo ;
    public laureatsVo: Array<EtudiantInfoVo> ;
    public etudiantsActVo: Array<EtudiantInfoVo>;

    get __intitule(): string {
        return this.intitule;
    }

    set __intitule(value: string) {
        this.intitule = value;
    }

    get __ref(): string {
        return this.ref;
    }

    set __ref(value: string) {
        this.ref = value;
    }

    get __id(): string {
        return this.id;
    }

    set __id(value: string) {
        this.id = value;
    }

    get __description(): string {
        return this.description;
    }

    set __description(value: string) {
        this.description = value;
    }

    get __etablissementVo(): EtablissementVo {
        if (this.etablissementVo == null) { return new EtablissementVo(); }
        return this.etablissementVo;
    }

    set __etablissementVo(value: EtablissementVo) {
        this.etablissementVo = value;
    }

    get __responsableVo(): ProfesseurInfoVo {
        if (this.responsableVo == null) { return new ProfesseurInfoVo(); }
        return this.responsableVo;
    }

    set __responsableVo(value: ProfesseurInfoVo) {
        this.responsableVo = value;
    }

    get __laureatsVo(): Array<EtudiantInfoVo> {
        if (this.laureatsVo == null) { return new Array<EtudiantInfoVo>(); }
        return this.laureatsVo;
    }

    set __laureatsVo(value: Array<EtudiantInfoVo>) {
        this.laureatsVo = value;
    }

    get __etudiantsActVo(): Array<EtudiantInfoVo> {
        if (this.etudiantsActVo == null) { return new Array<EtudiantInfoVo>(); }
        return this.etudiantsActVo;
    }

    set __etudiantsActVo(value: Array<EtudiantInfoVo>) {
        this.etudiantsActVo = value;
    }

}
