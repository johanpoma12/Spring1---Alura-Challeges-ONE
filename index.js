const text = document.querySelector('.texto')
const botonE = document.querySelector('.botonE')
const extra =document.querySelector('.extra')
const botonD = document.querySelector('.botonD')

//Modulo de encriptación
function encriptar(){

    extra.innerHTML='';  

    if(text.value == ""){

        const div = document.createElement('DIV');
        const textwarning = `<img src="img/warning.jpg" alt="" class="muneco" style="left= 4cm">`
        div.innerHTML= textwarning;
        extra.appendChild(div)   
    }


    if(text.value!= ""){

        var textoA = [];
        for(let i=0 ; i< text.value.length; i++ ){

            textoA[i] = text.value[i];
        //a
            if(text.value[i] == 'a'){
                textoA[i] = "ai";
            }
        //e   
            if(text.value[i] == 'e'){
                textoA[i] = "enter";
            }
        //i   
            if(text.value[i] == 'i'){
                textoA[i] = "imes";
            }
        //o   
            if(text.value[i] == 'o'){
                textoA[i] = "ober";
            }
        //u   
            if(text.value[i] == 'u'){
                textoA[i] = "ufat";
            }                
        }
        
    }

    let conversion = "";
    textoA.forEach(convertido=> {
        conversion = conversion + convertido

    });

    const div = document.createElement('DIV');
    const textwarning=`<div class="divArea">
    <textarea name="area_de_texto" rows="3" cols="50" class="textoconvert">${conversion}</textarea>
    <div class="divBoton">
    <button class="botonCopy">Copiar texto</button>
</div>
</div>

</div>`
    div.innerHTML=textwarning;
    extra.appendChild(div) 


    const textoconvert = document.querySelector('.textoconvert');
    const  botoncopy = document.querySelector('.botonCopy')
    botoncopy.addEventListener('click',()=>{
        textoconvert.select()
        let copia = document.execCommand('copy')
        div.innerHTML=`<div class="divArea">
        <textarea name="area_de_texto" rows="3" cols="50" class="textoconvert">Texto copiado</textarea>
        <div class="divBoton">
        <button class="botonCopy">Copiar texto</button>
    </div>
    </div>

</div>`;

    extra.appendChild(div)
    })
}

//---------------------------------------------------------------------------

function desincriptar(){
    extra.innerHTML='';  

        
    if(text.value == ""){
        const div = document.createElement('DIV');
        const textwarning = `<img src="img/warning.jpg" alt="" class="muneco" style="left= 4cm">`
        div.innerHTML= textwarning;
        extra.appendChild(div)   
    }
    if(text.value !=''){
        let tex=text.value;
        var textoE=tex.replace(/ai/img, "a");  //i mayus y minus //g toda la linea o la oracio //m tome en cuenta multiples lineas (enter)
        var textoE=textoE.replace(/enter/img, "e");
        var textoE=textoE.replace(/imes/img, "i");
        var textoE=textoE.replace(/ober/img, "o");
        var textoE=textoE.replace(/ufat/img, "u");

        const div = document.createElement('DIV')
        const textwarning = `<div class="divArea">
        <textarea name="area_de_texto" rows="3" cols="50" class="textoconvert">${textoE}</textarea>
        <div class="divBoton">
        <button class="botonCopy">Copiar texto</button>
        </div>
       </div>
       </div>`
        div.innerHTML = textwarning;
        extra.appendChild(div)


        const textoconvert = document.querySelector('.textoconvert');
        const  botoncopy = document.querySelector('.botonCopy')
        botoncopy.addEventListener('click',()=>{
            textoconvert.select()
            let copia = document.execCommand('copy')
            div.innerHTML=`<div class="divArea">
            <textarea name="area_de_texto" rows="3" cols="50" class="textoconvert">Texto copiado</textarea>
            <div class="divBoton">
            <button class="botonCopy">Copiar texto</button>
           </div>
           </div>
          </div>`;
    
        extra.appendChild(div)
        })
    }
}


botonE.addEventListener('click',encriptar)
botonD.addEventListener('click',desincriptar)