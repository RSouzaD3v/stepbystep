const submit = document.querySelector('#submit');
const input = document.querySelector('#codigo');
const main = document.querySelector('main');

const load = () => {
    try{
        fetch('alunos.json').then(res => res.json()).then(all => {
            const alunos = all.alunos;

            input.addEventListener('change', (e) => {
                const value = e.target.value;
                const filtered = alunos.filter((aluno) => aluno.id === value);

                if(!filtered[0]){
                    submit.addEventListener('click', (e) => {
                        e.preventDefault();
                        
                        main.innerHTML = `
                        <h1 class="not">Não encontramos um certificado!</h1>
                        <a class="tryAgain" href="https://rsouzad3v.github.io/stepbystep/">Tentar novamente</a>
                        `;
                    });
                }else{
                    submit.addEventListener('click', (e) => {
                        e.preventDefault();
                        
                        main.innerHTML = `
                    <div class="card">
                        <h1>${filtered[0].nome}</h1>
                        <h1 class="autentico">Certificado Autêntico</h1>
            
                        <div class="content">
                            <p>Certificamos que ${filtered[0].sexo === "m" ? "o" : "a"} alun${filtered[0].sexo === "m" ? "o" : "a"}</p>
                            <h2 class="nome">${filtered[0].nome}</h2>
                            <p>Concluiu com exito o curso de</p>
                            <h2 class="curso">${filtered[0].curso}</h2>
                            <p>Com a carga hóraria de: ${filtered[0].carga}</p>
                        </div>
            
                        <hr>
            
                        <p class="emissao">Data de emissão: ${filtered[0].emissao}</p>
                    </div>
                    <a href="https://rsouzad3v.github.io/stepbystep/" class="tryAgain">Tentar novamente</a>

                    <div class="logo">
                    <img src="./public/Logo.png" alt="logo">
                </div>
                        `;
                });
                }
                
            })

        });
    }catch(e){
        //
    }
}

load();