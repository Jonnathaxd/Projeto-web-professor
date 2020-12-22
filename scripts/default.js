var ligado = false;
            function ativar_menu(){
                if(!ligado){
                    ligado = true;
                    document.getElementById('navega').style.display = 'block'
                }
                else {
                    ligado = false;
                    document.getElementById('navega').style.display = 'none'
                }

            }