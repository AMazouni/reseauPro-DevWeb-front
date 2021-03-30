import {ProfesseurInfoVo} from './ProfesseurInfo.model';
import {EtudiantInfoVo} from './EtudiantInfo.model';
import {EtablissementVo} from './Etablissement.model';

export class FormationVo {
    get intitule(): string {
        return this._intitule;
    }

    set intitule(value: string) {
        this._intitule = value;
    }

    get ref(): string {
        return this._ref;
    }

    set ref(value: string) {
        this._ref = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get etablissementVo(): EtablissementVo {
        if (this._etablissementVo == null) return new EtablissementVo()
        return this._etablissementVo;
    }

    set etablissementVo(value: EtablissementVo) {
        this._etablissementVo = value;
    }

    get responsableVo(): ProfesseurInfoVo {
        return this._responsableVo;
    }

    set responsableVo(value: ProfesseurInfoVo) {
        this._responsableVo = value;
    }

    get laureatsVo(): Array<EtudiantInfoVo> {
        return this._laureatsVo;
    }

    set laureatsVo(value: Array<EtudiantInfoVo>) {
        this._laureatsVo = value;
    }

    get etudiantsActVo(): Array<EtudiantInfoVo> {
        return this._etudiantsActVo;
    }

    set etudiantsActVo(value: Array<EtudiantInfoVo>) {
        this._etudiantsActVo = value;
    }
  public _intitule: string;
    public _ref: string;
    public _id: string;
    public _description: string;
    public _etablissementVo: EtablissementVo ;
    public _responsableVo: ProfesseurInfoVo ;
    public _laureatsVo: Array<EtudiantInfoVo> ;
    public _etudiantsActVo: Array<EtudiantInfoVo>;


}
