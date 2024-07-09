quiz.js
Variáveis:
resultado: referência ao elemento HTML que exibirá a pontuação do usuário.
select1, select2, select3: referências aos elementos de seleção das 3 perguntas.
Função MostrarResultado():
Verifica se alguma das respostas selecionadas é o valor 10 (que indica uma resposta incorreta).
Se alguma resposta estiver incorreta, exibe um alerta pedindo para selecionar todas as respostas.
Caso contrário, calcula a pontuação somando os valores selecionados nas 3 perguntas.
Exibe um alerta informando que o quiz foi finalizado e mostra a pontuação.
Se a pontuação for 3 (todas as respostas corretas), exibe um alerta de parabéns.
quiz.css
Estrutura da página:
Define a altura da página para ocupar 100% da tela.
Usa um fundo preto para o body.
Divide a página em seções usando divs com IDs específicos.
Seções da página:
#topoTitulo: seção do topo com um título e uma imagem de fundo.
#meioPerguntas: seção do meio com as 3 perguntas.
#meioLabels: seção do meio com os rótulos das perguntas.
#meioSelects: seção do meio com os seletores de respostas.
#baixoResultado: seção inferior com o campo de resultado.
Estilos das perguntas e seletores:
As perguntas são exibidas usando divs com classes específicas (pergunta1, pergunta2, pergunta3).
Os seletores de respostas (select) têm estilos personalizados, como cor de fundo, cor do texto e tamanho.
Outros estilos:
Uso de flexbox para organizar os elementos.
Estilos específicos para o campo de resultado, botão e rótulos.
Posicionamento e dimensionamento dos elementos usando margens e tamanhos.
Em resumo, o arquivo quiz.js contém a lógica do quiz, enquanto o quiz.css define o layout visual e a aparência dos elementos da página. Juntos, eles implementam um quiz interativo com perguntas, respostas e exibição de resultados.
