# Cluster Music App

O teste consiste em criar uma aplicação web com navegação simples (com base em aplicações do Spotify), sem consumir APIs.

Comportamento esperado:
- Ao carregar a página pela primeira vez, irá para a aba "Browse";
- Ao clicar em 'Your Music', irá para uma segunda página 'Your Music';
- O search deverá funcionar para que sejam filtrados os 'cards' conforme digitado;
- Ao carregar a página com algum 'caminho' definido, deverá ir para a página correta;

### Metodologia 
> **Padrão:** Angular

> **Frameworks:** Angular, Angular Material

> **Instalação de pacotes:** npm install

> **Desenvolvedor:** Ana Camila Santos Sousa

>  **Método de Desenvolvimento:**  A estrutura do projeto foi criada com a ferramenta [angular-cli](https://github.com/angular/angular-cli). Para o front end foi utilizado o framework [Angular Material](https://material.angular.io/). Foi utilizada também a biblioteca [jQuery](https://jquery.com/) para aplicação de efeitos. Para hospedar a página na web foi usado o [Firebase](https://firebase.google.com/?hl=pt-br).
 
### Link do projeto
O projeto também foi hospedado na web usando o Firebase para uma visualização mais rápida. 
>> https://cluster-music-app.firebaseapp.com/

### Deploy do projeto
O projeto também pode ser clonado através do seu repositório e assim ser visualizado localmente.

**Requisitos:** A ferramenta Node deve estar instalada

##### Passos

Através do terminal clone o projeto
>> git clone https://github.com/acamilass/cluster-app.git

Na pasta cluster-app baixe os pacotes
>> npm install

Agora execute o comando, para efetuar o deploy de produção
>>  ng build

Para executar localmente e testar a build de produção, use o seguinte comando
>> ng serve

Agora você pode testar a sua aplicação através do endereço [http://localhost:4200](http://localhost:4200)
