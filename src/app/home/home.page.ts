import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public resultado: String = "Resultado"
  public precoAlcool: string = ""
  public precoGasolina: string = ""

  calcular(){
    //validar se os campos foram preenchidos
    if(this.precoAlcool && this.precoGasolina){
      var pAlcool = parseFloat(this.precoAlcool)
      var pGasolina = parseFloat(this.precoGasolina)

      //realizado cálculo hipotético
      //se (precoAlcool / precoGasolina) >= 0.7 então é melhor usar Álcool
      var res = pAlcool / pGasolina

      if(res>= 0.7){
        this.resultado = "Melhor utilizar Álcool"

      } else {
        this.resultado = "Melhor utilizar Gasolina"

      }


    } else {
      this.resultado = "campos não preenchidos"
    }
  }

}
