
# Sistemas Embarcados - 2021.2

#### Monitoramento do solo por meio de sensores

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

#### 4.1 Conceito parcial de Esquemático 

![esquematico-removebg-preview](https://user-images.githubusercontent.com/34730673/158072884-72e2ccae-2250-4c82-8893-2eb0fb6ea141.png)


#### 4.2 Conceito parcial de Modelo 3D

![3D_packages-removebg-preview (1)](https://user-images.githubusercontent.com/34730673/158072890-0fe0b156-544c-40ac-a68f-f3b6983547e6.png)


[Fusion 360 Online 3D](https://a360.co/3q3f3vH)

### 5 - Grupo

* João Carlos Guerra de Abreu
* Lucas Matheus Torres Costa
* Rafael Figueredo Guimarães

### 6 - Instituição

* Instituto Federal da Paraíba - IFPB
* Campus Campina Grande

### Docente responsável
* Alexandre Sales Vasconcelos
