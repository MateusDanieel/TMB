(() => {

    const form = document.querySelector('.sec-main__content__form');
    const result = document.querySelector('.sec-main__content__result');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        result.classList.add('show');
        result.innerHTML = '';

        const peso = document.querySelector('.sec-main__content__form__input#peso').value;
        const altura = document.querySelector('.sec-main__content__form__input#altura').value;
        const idade = document.querySelector('.sec-main__content__form__input#idade').value;
        const radiobtns = document.querySelectorAll('.sec-main__content__form__radio input');

        const getTmbMasc = 66.47 + (13.75 * peso) + (5.003 * altura) - (6.775 * idade);
        const getTmbFem = 655.09 + (9.563 * peso) + (1.85 * altura) - (4.676 * idade);
        const getImc = (peso / altura / altura) * 10000;
        const getQtdAgua = 0.035 * peso;
        const getCreatina = 0.07 * peso;
        const getProtein = peso * 2.0;
        const getFreqCardMax = 220 - idade;
        const getCardio = getFreqCardMax * 0.75;

        let getGender = '';
        let getGC = '';

        if (getImc < 18.5) {
            result.innerHTML += `<p><b>Índice de Massa Corporal (IMC)</b> ${getImc.toFixed(2)} (abaixo do peso ideal)</p>`;
        } else if (getImc >= 18.5 && getImc < 25) {
            result.innerHTML += `<p><b>Índice de Massa Corporal (IMC)</b> ${getImc.toFixed(2)} (peso ideal)</p>`;
        } else if (getImc >= 25 && getImc < 30) {
            result.innerHTML += `<p><b>Índice de Massa Corporal (IMC)</b> ${getImc.toFixed(2)} (acima do peso)</p>`;
        } else if (getImc >= 30 && getImc < 35) {
            result.innerHTML += `<p><b>Índice de Massa Corporal (IMC)</b> ${getImc.toFixed(2)} (obesidade grau I)</p>`;
        } else if (getImc >= 35 && getImc < 40) {
            result.innerHTML += `<p><b>Índice de Massa Corporal (IMC)</b> ${getImc.toFixed(2)} (obesidade grau II)</p>`;
        } else {
            result.innerHTML += `<p><b>Índice de Massa Corporal (IMC)</b> ${getImc.toFixed(2)} (obesidade grau III - mórbida)</p>`;
        }

        radiobtns.forEach((el, i, arr) => {
            
            if (el.id === 'genderMasc' && el.checked) {

                getGC = (1.20 * getImc) + (0.23 * idade) - (10.8 * 1) - 5.4;

                if (getGC > 10 && getGC <= 20) {
                    result.innerHTML += `<p><b>% de Gordura Estimado (PCG)</b> ${getGC.toFixed(1)}% (adequado)</p>`;
                } else if (getGC > 20 && getGC <= 25) {
                    result.innerHTML += `<p><b>% de Gordura Estimado (PCG)</b> ${getGC.toFixed(1)}% (moderadamente alto)</p>`;
                } else if (getGC > 25 && getGC <= 31) {
                    result.innerHTML += `<p><b>% de Gordura Estimado (PCG)</b> ${getGC.toFixed(1)}% (alto)</p>`;
                } else if (getGC > 31) {
                    result.innerHTML += `<p><b>% de Gordura Estimado (PCG)</b> ${getGC.toFixed(1)}% (excessivamente alto)</p>`;
                } else {
                    result.innerHTML += `<p><b>% de Gordura Estimado (PCG)</b> ${getGC.toFixed(1)}% (baixo)</p>`;
                }

                result.innerHTML += `<p><b>Taxa Metabólica Basal (TMB)</b> ${getTmbMasc.toFixed(0)} calorias</p>`;

                getGender = 'M';

            } else if (el.id === 'genderFem' && el.checked) {

                getGC = (1.20 * getImc) + (0.23 * idade) - (10.8 * 0) - 5.4;

                if (getGC > 15 && getGC <= 25) {
                    result.innerHTML += `<p><b>% de Gordura Estimado (PCG)</b> ${getGC.toFixed(1)}% (adequado)</p>`;
                } else if (getGC > 25 && getGC <= 30) {
                    result.innerHTML += `<p><b>% de Gordura Estimado (PCG)</b> ${getGC.toFixed(1)}% (moderadamente alto)</p>`;
                } else if (getGC > 30 && getGC <= 36) {
                    result.innerHTML += `<p><b>% de Gordura Estimado (PCG)</b> ${getGC.toFixed(1)}% (alto)</p>`;
                } else if (getGC > 36) {
                    result.innerHTML += `<p><b>% de Gordura Estimado (PCG)</b> ${getGC.toFixed(1)}% (excessivamente alto)</p>`;
                } else {
                    result.innerHTML += `<p><b>% de Gordura Estimado (PCG)</b> ${getGC.toFixed(1)}% (baixo)</p>`;
                }

                result.innerHTML += `<p><b>Taxa Metabólica Basal (TMB)</b> ${getTmbFem.toFixed(0)} calorias</p>`;

                getGender = 'F';

            } else if (el.id === 'atvFisS' && el.checked) {

                arr.forEach((item) => {
                    if (item.id === 'objPeso' && item.checked) {

                        if (getGender === 'F') {
                            result.innerHTML += `<p><b>Dieta Recomendada</b> ${getTmbFem.toFixed(0)} calorias por dia</p>`;
                        } else if (getGender === 'M') {
                            result.innerHTML += `<p><b>Dieta Recomendada</b> ${getTmbMasc.toFixed(0)} calorias por dia</p>`;
                        }
                        
                    } else if (item.id === 'objHiper' && item.checked) {
                        if (getGender === 'F') {
                            result.innerHTML += `<p><b>Dieta Recomendada</b> ${(getTmbFem + (getTmbFem * 0.20)).toFixed(0)} calorias por dia</p>`;
                        } else if (getGender === 'M') {
                            result.innerHTML += `<p><b>Dieta Recomendada</b> ${(getTmbMasc + (getTmbMasc * 0.20)).toFixed(0)} calorias por dia</p>`;
                        }

                    }

                });

            } else if (el.id === 'atvFisN' && el.checked) {

                arr.forEach((item) => {
                    if (item.id === 'objPeso' && item.checked) {

                        if (getGender === 'F') {
                            result.innerHTML += `<p><b>Dieta Recomendada</b> ${(getTmbFem - (getTmbFem * 0.20)).toFixed(0)} calorias por dia</p>`;
                        } else if (getGender === 'M') {
                            result.innerHTML += `<p><b>Dieta Recomendada</b> ${(getTmbMasc - (getTmbMasc * 0.20)).toFixed(0)} calorias por dia</p>`;
                        }

                    } else if (item.id === 'objHiper' && item.checked) {
                        if (getGender === 'F') {
                            result.innerHTML += `<p><b>Dieta Recomendada</b> ${(getTmbFem + (getTmbFem * 0.20)).toFixed(0)} calorias por dia</p>`;
                        } else if (getGender === 'M') {
                            result.innerHTML += `<p><b>Dieta Recomendada</b> ${(getTmbMasc + (getTmbMasc * 0.20)).toFixed(0)} calorias por dia</p>`;
                        }

                        
                    } 
                });

            } 

            


        });

        result.innerHTML += `<p><b>QTD. de Proteína Recomendada</b> ${getProtein.toFixed(0)}g por dia</p>`;

        result.innerHTML += `<p><b>QTD. de Creatina Recomendada</b> ${getCreatina.toFixed(1)}g por dia</p>`;

        result.innerHTML += `<p><b>QTD. de Água Recomendada</b> ${getQtdAgua.toFixed(1)}L por dia</p>`;
        
        result.innerHTML += `<p><b>Frequência Cardíaca Máxima</b> ≈${getFreqCardMax.toFixed(1)}bpm</p>`;

        result.innerHTML += `<p><b>Freq. Cardíaca Recomendada durante exercícios aeróbicos</b> ≈${getCardio.toFixed(1)}bpm</p>`;
        
    });

})();