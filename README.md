
# Sistemas Embarcados - 2021.2

#### Monitoramento do de temperatura de humidade por meio de sensores

### 1 - Descrição do projeto:

A agricultura familiar representa um contingente de 77% dos estabelecimentos
agrícolas do país. Esse trabalho desempenhado por essas famílias necessita do uso
de água para irrigação, sendo cada vez mais dependente da chamada agricultura de
precisão, em que dispositivos analisam de maneira inteligente as condições da lavoura no 
que diz respeito a temperatura e humidade controlando o tempo e a quantidade de água necessária 
para o processo de irrigação. Pensando nisso, visamos desenvolver um sistema embarcado capaz de sanar 
essas necessidades.


### 2 - Objetivos

  Geral
  
Nosso objetivo é desenvolver uma infraestrutura focada na interface com o usuário,
facilitando o acompanhamento da lavoura, sendo utilizados dispositivos de baixo
custo, permitindo a utilização desde o agricultor mais simples até os grandes
produtores.
  
  Especificos
 
Em relação a interface com o usuário, pensamos em fazer uma aplicação web
utilizando JavaScript onde serão dispostos os dados que os dispositivos
irão capturar.

Falando um pouco mais a estrutura de Hardware, utilizaremos o Sensor DTH, para
capturar os dados que seriam enviados para o ESP8266 de posse desses dados o ESP enviaria essas informações 
para uma interface gráfica onde esses dados poderiam ser analisados, armazenados
ou processados de forma a resolver algum problema relacionado ao monitoramento da 
temperatura e e humidade na agricultura.

  
### 3 - Resumo das arquiteturas
  
  1.  Hardware

	- ESP8266 (Caso seja necessário enviar dados por internet)
	- Sensor de Temperatura e Humidade DHT11
	- Mini protoboard
	- Jumpers
  

  2.  Firmaware e/ou Software/App 
  
	- Utilizaremos um sistema de tempo real (RTOS) para implementar a logica do firmware
	
  
### 4 - Resumo dos Resultados

#### 4.1 Documentação e Diagrama de Blocos

##### Diagrama de Blocos do Hardware  
![Hardware blocks diagram](https://user-images.githubusercontent.com/34730673/159099091-e7b43c4e-7085-4290-95af-219675e2d9af.png)

##### Design do Sistema em Blocos
![Design do Sistema](https://user-images.githubusercontent.com/34730673/159099050-830811b8-282f-47d5-8c5b-43a0b3817582.png)

#### Diagrama de Blocos do Firmware

![Diagrama do firmware](https://user-images.githubusercontent.com/34730673/159177049-7a2b56b6-cdd0-4fdf-bdce-697229505b90.png)


#### Diagrama de Blocos da Aplicação Web

![Diagrama em branco](https://user-images.githubusercontent.com/34730673/159177013-56d4e1eb-f228-44d3-ab42-7f3c1d16926f.png)



> [Relatório Final](https://docs.google.com/document/d/1OH0ySzCCkVx8VMb1BBHpwzDGqj-EqATqLdINgi41xL8/edit?usp=sharing)

#### 4.2 Conceito parcial de Esquemático 

![Screenshot_1-removebg-preview](https://user-images.githubusercontent.com/34730673/159098691-9c1c4b6d-ab9e-4f59-8238-9109283b3a3d.png)

#### 4.3 Conceito parcial de Modelo 3D

![Prototipo_2__allOnTop_-removebg-preview](https://user-images.githubusercontent.com/34730673/159098294-498de5f5-1405-4e39-9b3a-aa3879113b5b.png)

#### Para o 3D e PCB foram criados dois modelos: 

1. Todos os fios na camada button porém o ESP8266 também ficou na parte de baixo da placa <br>
- [Fusion 360 Online 3D Protótipo 1](https://a360.co/3JpDviy)

2. Todos os componentes na camada superior porem um dos fios ficou fizemos ajustes na coneção com o ESP8266 <br>
- [Fusion 360 Online 3D Protótipo 2](https://a360.co/3q3f3vH)

#### Aplicação desenvolvida do zero independende do ESP8266

Conforme apresentado no design ou arquitetura do sistema foi planejado a criaçao de um sistema com interface Web para mostrar ao usuário os dados coletados pelo sensor, essa aplicação pode ser acessada por esse link: (https://embedded-dashboad.netlify.app/).

A aplicação faz um request no banco de dados a cada 5 segundos e atualiza a interface em tempo real, sem o usuário precisar pressionar f5 ou dar um refresh na pagina. Por questões de economia de banda o ESP-8266 não está ligado diariamente por isso os dados podem estar fixos. No entanto basta ligar o sensor, assim o que ESP8266 enviar os dados a aplicação é atualizada com as novas leituras. 

### 5 - Grupo

* João Carlos Guerra de Abreu
* Lucas Matheus Torres Costa
* Rafael Figueredo Guimarães

### 6 - Instituição

* Instituto Federal da Paraíba - IFPB
* Campus Campina Grande

### Docente responsável
* Alexandre Sales Vasconcelos
