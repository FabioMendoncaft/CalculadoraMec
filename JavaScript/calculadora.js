var total  = [] 
var hora   = [] 
var minuto = [] 

var cont = 0
var resultadoFinal
var verifica1 
var verifica2 
var verifica3 
var verifica4 
var verifica5 
var verifica6

function somar(){
  
    var start          = document.getElementById("hora11");
    var end            = document.getElementById("hora22");
    var resultado      = document.getElementById("resultado");
    var horas          = document.getElementById("horas");
    var minutos        = document.getElementById("minutos");
    var restTot        = document.getElementById("restTot");
    var de1            = document.getElementById("de1");
    var de2            = document.getElementById("de2");
    var de3            = document.getElementById("de3");
    var de4            = document.getElementById("de4");
    var de5            = document.getElementById("de5");
    var de6            = document.getElementById("de6");
    var ate1           = document.getElementById("ate1");
    var ate2           = document.getElementById("ate2");
    var ate3           = document.getElementById("ate3");
    var ate4           = document.getElementById("ate4");
    var ate5           = document.getElementById("ate5");
    var ate6           = document.getElementById("ate6");
    var igual1         = document.getElementById("igual1");
    var igual2         = document.getElementById("igual2");
    var igual3         = document.getElementById("igual3");
    var igual4         = document.getElementById("igual4");
    var igual5         = document.getElementById("igual5");
    var igual6         = document.getElementById("igual6");
    var totalll        = document.getElementById("totalll");

    if((hora11.value != "" && hora22.value != "") && (hora11.value != '00:00' || hora22.value != '00:00')){

        let [hora1, minuto1] = start.value.split(':').map(v => parseInt(v));
        let [hora2, minuto2] = end.value.split(':').map(v => parseInt(v));

        console.log(hora1 +  ' - ' + minuto1)

        console.log(hora2 +  ' - ' + minuto2)

        if (hora1 > hora2){

            var inicio     = new Date('2022-02-20T' + start.value + ':00')
            var fim        = new Date("2022-02-20T23:59:59") 
            var diferenca  = new Date( fim - inicio );
            var resultadoH =  diferenca.getUTCHours();hora1
            var resultadoM = diferenca.getUTCMinutes();
            console.log('testttt: ' + resultadoH + ' - ' + resultadoM);

            var inicio2     = new Date("2022-02-20T00:00:00")
            var fim2        = new Date('2022-02-20T' + end.value + ':00') 
            var diferenca2  = new Date( fim2 - inicio2 );
            var resultadoH2 =  diferenca2.getUTCHours();
            var resultadoM2 = diferenca2.getUTCMinutes();
            console.log('testttt: ' + resultadoH2 + ' - ' + resultadoM2);

            totalH = resultadoH + resultadoH2;
            totalM = resultadoM + resultadoM2 + 1;

            if((totalM>= 60) && (totalM < 120)){
                totalM = totalM - 60
                totalH = totalH + 1
            }else if((totalM >= 120) && (totalM < 180)){
                totalM = totalM - 120
                totalH = totalH + 2
            }else if((totalM >= 180) && (totalM < 240)){
                totalM = totalM - 180
                totalH = totalH + 3
            }else if((totalM >= 240) && (totalM < 300)){
                totalM = totalM - 240
                totalH = totalH + 4
            }else if((totalM >= 300) && (totalM < 360)){
                totalM = totalM - 300
                totalH = totalH + 5
            }

            if((totalH <= 9) && (totalM <= 9 )){
                diff  = "0" + totalH + ":" +  "0" + totalM ;
                hour2 = "0" + totalH;
                min2  = "0" + totalM;
            }    
            else if(totalH <= 9){
                diff  = "0" + totalH + ":" + totalM;
                hour2 = "0" + totalH;
                min2  = totalM;
            }    
            else if(totalM <= 9){
                diff  = totalH + ":" + "0" + totalM;
                min2  = "0" + totalM;
                hour2 = totalH
            }else{
                diff = totalH + ":" + totalM;  
                hour2 = totalH;
                min2  = totalM;
            }

            horas.value     = hour2
            minutos.value   = min2
            resultado.value = 'A diferença de horas entre ' + hora11.value + ' e ' + hora22.value + ' é: ' + diff;

            hora[cont]   = totalH
            minuto[cont] = totalM
            
            total[cont] = diff
            
        }else{

            s = start.value.split(':');
            e = end.value.split(':');

            min = e[1]-s[1];

            hour_carry = 0;
            if(min < 0){
                min += 60;
                hour_carry += 1;
            }
            hour = e[0]-s[0]-hour_carry;
            
            if((hour <= 9) && (min <= 9 )){
                diff  = "0" + hour + ":" +  "0" + min ;
                hour2 = "0" + hour;
                min2  = "0" + min;
            }    
            else if(hour <= 9){
                diff  = "0" + hour + ":" + min;
                hour2 = "0" + hour;
                min2  = min;
            }    
            else if(min <= 9){
                diff  = hour + ":" + "0" + min;
                min2  = "0" + min;
                hour2 = hour
            }else{
                diff = hour + ":" + min;  
                hour2 = hour;
                min2  = min;
            }   

            horas.value     = hour2
            minutos.value   = min2
            resultado.value = 'A diferença de horas entre ' + hora11.value + ' e ' + hora22.value + ' é: ' + diff;

            hora[cont]   = hour
            minuto[cont] = min 
            
            total[cont] = diff

        }

        console.log(total)

        var totalHora = 0
        var totalMin  = 0

        for(var i = 0; i <= cont; i++){
            totalHora = totalHora + hora[i]
        }

        for(var i = 0; i <= cont; i++){
            totalMin = totalMin + minuto[i]
        }

        if((totalMin >= 60) && (totalMin < 120)){
            totalMin  = totalMin - 60
            totalHora = totalHora + 1
        }else if((totalMin >= 120) && (totalMin < 180)){
            totalMin  = totalMin - 120
            totalHora = totalHora + 2
        }else if((totalMin >= 180) && (totalMin < 240)){
            totalMin  = totalMin - 180
            totalHora = totalHora + 3
        }else if((totalMin >= 240) && (totalMin < 300)){
            totalMin  = totalMin - 240
            totalHora = totalHora + 4
        }

        if((totalHora <= 9) && (totalMin <= 9 )){
                resultadoFinal  = "0" + totalHora + ":" +  "0" + totalMin;
            }    
            else if(totalHora <= 9){
                resultadoFinal  = "0" + totalHora + ":" + totalMin;
            }    
            else if(totalMin <= 9){
                resultadoFinal  = totalHora + ":" + "0" + totalMin;
            }else{
                resultadoFinal = totalHora + ":" + totalMin; 
            }  

        console.log('Total de horas: ' + resultadoFinal)
        
        cont = cont + 1
        
        if(cont == 1 || cont == 7){
            de1.value      = hora11.value;
            ate1.value     = hora22.value;
            igual1.value   = diff;  
            if(cont == 7){
                verifica1 = "X";
            } 
        }else if(cont == 2 || cont == 8){
            de2.value      = hora11.value;
            ate2.value     = hora22.value;
            igual2.value   = diff;
            if(cont == 8){
                verifica2 = "X";
            } 
        }else if(cont == 3 || cont == 9){
            de3.value      = hora11.value;
            ate3.value     = hora22.value;
            igual3.value   = diff;
        }else if(cont == 4 || cont == 10){
            de4.value      = hora11.value;
            ate4.value     = hora22.value;
            igual4.value   = diff;
        }else if(cont == 5 || cont == 11){
            de5.value      = hora11.value;
            ate5.value     = hora22.value;
            igual5.value   = diff;
        }else if(cont == 6 || cont == 12){
            de6.value      = hora11.value;
            ate6.value     = hora22.value;
            igual6.value   = diff;
        }
    
        totalll.value = resultadoFinal;
        hora11.value  = "";
        hora22.value  = "";
        
    }else{
        horas.value     = "";
        minutos.value   = "";
        resultado.value = "";
        hora11.value    = "";
        hora22.value    = "";
    }

}

var btn = document.querySelector("#refresh");
btn.addEventListener("click", function() {
    location.reload();
});

function subtrair(ordem){

    var de            = document.getElementById("de" + ordem);
    var ate           = document.getElementById("ate" + ordem);
    var igual         = document.getElementById("igual" + ordem);
    var totalll       = document.getElementById("totalll");

    var horaTotal = resultadoFinal.substring(0, 2);
    var minTotal  = resultadoFinal.substring(3, 5);

    var horaSub   = igual.value.substring(0, 2);
    var minSunb   = igual.value.substring(3, 5);


    if (horaTotal >= horaSub){
        horaTotal -= horaSub;
        if (horaTotal <= 9){
            horaTotal = "0" + horaTotal;
        }
    }else{

    }

    if (minTotal >= minSunb){

        minTotal -= minSunb;
        if (minTotal <= 9){
            minTotal = "0" + minTotal;
        }

    }else if(minTotal < minSunb){

        minSunb -= minTotal
        minTotal = 60 - minSunb
        if (minTotal <= 9){
            minTotal = "0" + minTotal;
        }

        horaTotal -= 1;
        if (horaTotal <= 9){
            horaTotal = "0" + horaTotal;
        }
    }

    de.value    = "";
    ate.value   = ""; 
    igual.value = "";

    resultadoFinal = horaTotal + ":" + minTotal;
    totalll.value  = resultadoFinal;
    if (ordem == 1){
        if( verifica1 == "X"){
            hora[6]   = null
            minuto[6] = null
        }else{
            hora[0]   = null
            minuto[0] = null
        } 
    }else if(ordem == 2){
        if(verifica2 == "X"){
            hora[7]   = null
            minuto[7] = null
        }else{
            hora[1]   = null
            minuto[1] = null
        } 
    }else if(ordem == 3){
        if( verifica3 == "X"){
            hora[8]   = null
            minuto[8] = null
        }else{
            hora[2]   = null
            minuto[2] = null
        }
    }else if(ordem == 4){
        if( verifica4 == "X"){
            hora[9]   = null
            minuto[9] = null
        }else{
            hora[3]   = null
            minuto[3] = null
        }
    }else if(ordem == 5){
        if( verifica5 == "X"){
            hora[10]   = null
            minuto[10] = null
        }else{
            hora[4]   = null
            minuto[4] = null
        }  
    }else if(ordem == 6){
        if( verifica6 == "X"){
            hora[11]   = null
            minuto[11] = null
        }else{
            hora[5]   = null
            minuto[5] = null
        }
    }
}