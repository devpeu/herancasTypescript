class Pessoa {
    constructor(public nome: string, public idade: number) {}

    mostrarDados(): void {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
}

class Empregado extends Pessoa {
    constructor(nome: string, idade: number, public salario: number) {
        super(nome, idade);
    }

    mostrarSalario(): void {
        console.log(`Salário: ${this.salario}`);
    }
}

const pessoa = new Pessoa("Pedro", 20);
pessoa.mostrarDados();

const empregado = new Empregado("Jhenify", 25, 3000);
empregado.mostrarDados(); 
empregado.mostrarSalario();
