class Adm {
    constructor(id_adm, nome_adm, email_adm, senha_adm, cpf_adm) {
        this.id_adm = id_adm;
        this.nome_adm = nome_adm;
        this.email_adm = email_adm;
        this.senha_adm = senha_adm;
        this.cpf_adm = cpf_adm;
    }

     logar(email_adm, senha_adm) {
        if (email_adm === this.email_adm & senha_adm === this.senha_adm) {
            console.log (`você é o administrador ${this.id_adm}`);
        } else {
            console.log ('você não é um adm')
        }

    } 
}

const adm1 = new Adm (1, 'italo', 'italo@gmail.com', '12345678', '400.555.117-22')

adm1.logar('gabriel@gmail.com', adm1.senha_adm);