var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.mostrarDados = function () {
        console.log("Nome: " + this.nome + ", Idade: " + this.idade);
    };
    return Pessoa;
}());
var Empregado = /** @class */ (function (_super) {
    __extends(Empregado, _super);
    function Empregado(nome, idade, salario) {
        var _this = _super.call(this, nome, idade) || this;
        _this.salario = salario;
        return _this;
    }
    Empregado.prototype.mostrarSalario = function () {
        console.log("Sal\u00E1rio: " + this.salario);
    };
    return Empregado;
}(Pessoa));
var pessoa = new Pessoa("Pedro", 20);
pessoa.mostrarDados();
var empregado = new Empregado("Jhenify", 19, 3000);
empregado.mostrarDados();
empregado.mostrarSalario();
