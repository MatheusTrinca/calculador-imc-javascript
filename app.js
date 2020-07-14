class Pessoa {
  constructor(peso, altura){
    this.peso = peso;
    this.altura = altura / 100;
  }

  calculoIMC(){
    return (this.peso / Math.pow(this.altura, 2)).toFixed(2);
  }
}

class UI {
  constructor(){
    this.message;
    this.color;
  }

  static showResult(resultado){
    const resultadoDiv = document.getElementById('resultado');
    const h3 = document.createElement('h3');
    while(resultadoDiv.firstChild){
      resultadoDiv.removeChild(resultadoDiv.firstChild);
    }
    if(resultado <= 18.5){
      this.message = `Seu IMC é ${resultado} (Abaixo do Normal)`
      this.color = 'red';
    }else if(resultado <= 24.9){
      this.message = `Seu IMC é ${resultado} (Peso Normal)`
      this.color = 'green';
    }else if(resultado <= 29.9){
      this.message = `Seu IMC é ${resultado} (Sobrepeso)`
      this.color = 'yellow';
    }else if(resultado <= 34.9){
      this.message = `Seu IMC é ${resultado} (Obesidade Grau 1)`
      this.color ='red';
    }
    else if(resultado <= 39.9){
      this.message = `Seu IMC é ${resultado} (Obesidade Grau 2)`
      this.color ='red';
    }else{
      this.message = `Seu IMC é ${resultado} (Obesidade Grau 3)`
      this.color ='red';
    }
    h3.textContent = this.message;
    h3.style.backgroundColor = this.color
    resultadoDiv.appendChild(h3);

  }
}

document.getElementById('enviar').addEventListener('click', (e) =>{
  const peso = document.getElementById('peso').value,
        altura = document.getElementById('altura').value;

  const pessoa = new Pessoa(peso, altura);
  const resultado = pessoa.calculoIMC();
  UI.showResult(resultado);
  e.preventDefault();
});


