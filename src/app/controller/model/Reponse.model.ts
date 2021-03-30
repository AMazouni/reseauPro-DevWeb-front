import {QuestionVo} from './Question.model';
import {CommentaireVo} from "./Commentaire.model";

export class ReponseVo {
  public _reponse: string;
  public _ref: string;
  public _id: string;
      public _questionVo: QuestionVo = new QuestionVo();


    get reponse(): string {
        return this._reponse;
    }

    set reponse(value: string) {
        this._reponse = value;
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

    get questionVo(): QuestionVo {
        if (this._questionVo == null) { return new QuestionVo(); }
        return this._questionVo;
    }

    set questionVo(value: QuestionVo) {
        this._questionVo = value;
    }
}
