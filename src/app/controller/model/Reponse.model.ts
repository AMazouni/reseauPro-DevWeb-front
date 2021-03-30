import {QuestionVo} from './Question.model';

export class ReponseVo {
  public reponse: string;
  public ref: string;
  public id: string;
      public questionVo: QuestionVo = new QuestionVo();


    get __reponse(): string {
        return this.reponse;
    }

    set __reponse(value: string) {
        this.reponse = value;
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

    get __questionVo(): QuestionVo {
        if (this.questionVo == null) { return new QuestionVo(); }
        return this.questionVo;
    }

    set __questionVo(value: QuestionVo) {
        this.questionVo = value;
    }
}
