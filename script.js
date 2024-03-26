document.addEventListener("DOMContentLoaded", function() {
  var btnAdicionarBloco = document.getElementById('btn-adicionar-bloco');
  var containerBlocos = document.getElementById('blocos');
  var contadorBlocos = 1;

  btnAdicionarBloco.addEventListener('click', function() {
      var novoBloco = document.createElement('div');
      novoBloco.classList.add('bloco');
      novoBloco.innerHTML = '<h3>Bloco ' + contadorBlocos + '</h3>';
      
      // Botão para adicionar sala
      var btnAdicionarSala = document.createElement('button');
      btnAdicionarSala.textContent = 'Adicionar Sala';
      btnAdicionarSala.classList.add('btn-adicionar-sala'); // Adicionando a mesma classe dos outros botões
      novoBloco.appendChild(btnAdicionarSala);

      // Div para conter as salas
      var divSalas = document.createElement('div');
      divSalas.classList.add('salas');
      novoBloco.appendChild(divSalas);

      containerBlocos.appendChild(novoBloco);
      contadorBlocos++;

      btnAdicionarSala.addEventListener('click', function() {
          var novaSala = document.createElement('div');
          novaSala.classList.add('sala');

          // Cria três inputs para código, capacidade e info adicional
          var inputCodigo = document.createElement('input');
          inputCodigo.type = 'text';
          inputCodigo.placeholder = 'Código';
          inputCodigo.classList.add('input'); // Adicionando a classe para o estilo
          novaSala.appendChild(inputCodigo);

          var inputCapacidade = document.createElement('input');
          inputCapacidade.type = 'text';
          inputCapacidade.placeholder = 'Capacidade';
          inputCapacidade.classList.add('input'); // Adicionando a classe para o estilo
          novaSala.appendChild(inputCapacidade);

          var inputInfoAdicional = document.createElement('input');
          inputInfoAdicional.type = 'text';
          inputInfoAdicional.placeholder = 'Info. Adicional';
          inputInfoAdicional.classList.add('input'); // Adicionando a classe para o estilo
          novaSala.appendChild(inputInfoAdicional);

          divSalas.appendChild(novaSala);
      });
  });

  var btnAdicionarProfessores = document.getElementById('btn-adicionar-profs');
  btnAdicionarProfessores.addEventListener('click', function() {
      var divProfessores = document.createElement('div');
      divProfessores.classList.add('professores');

      // Cria quatro inputs para nome, hora de entrada, hora de saída e matéria
      var inputNome = document.createElement('input');
      inputNome.type = 'text';
      inputNome.placeholder = 'Nome';
      inputNome.classList.add('input'); // Adicionando a classe para o estilo
      divProfessores.appendChild(inputNome);

      var inputHoraEntrada = document.createElement('input');
      inputHoraEntrada.type = 'text';
      inputHoraEntrada.placeholder = 'Hora de Entrada';
      inputHoraEntrada.classList.add('input'); // Adicionando a classe para o estilo
      divProfessores.appendChild(inputHoraEntrada);

      var inputHoraSaida = document.createElement('input');
      inputHoraSaida.type = 'text';
      inputHoraSaida.placeholder = 'Hora de Saída';
      inputHoraSaida.classList.add('input'); // Adicionando a classe para o estilo
      divProfessores.appendChild(inputHoraSaida);

      document.getElementById('professores').appendChild(divProfessores);
  });

  var btnAdicionarDisciplinas = document.getElementById('btn-adicionar-disciplinas');
  btnAdicionarDisciplinas.addEventListener('click', function() {
      var divDisciplina = document.createElement('div');
      divDisciplina.classList.add('disciplina');

      // Cria cinco inputs para código, descrição, professor, hora inicial e hora final
      var inputCodigo = document.createElement('input');
      inputCodigo.type = 'text';
      inputCodigo.placeholder = 'Código';
      inputCodigo.classList.add('input'); // Adicionando a classe para o estilo
      divDisciplina.appendChild(inputCodigo);

      var inputDescricao = document.createElement('input');
      inputDescricao.type = 'text';
      inputDescricao.placeholder = 'Descrição';
      inputDescricao.classList.add('input'); // Adicionando a classe para o estilo
      divDisciplina.appendChild(inputDescricao);

      var inputProfessor = document.createElement('input');
      inputProfessor.type = 'text';
      inputProfessor.placeholder = 'Professor';
      inputProfessor.classList.add('input'); // Adicionando a classe para o estilo
      divDisciplina.appendChild(inputProfessor);

      var inputHoraInicial = document.createElement('input');
      inputHoraInicial.type = 'text';
      inputHoraInicial.placeholder = 'Hora Inicial';
      inputHoraInicial.classList.add('input'); // Adicionando a classe para o estilo
      divDisciplina.appendChild(inputHoraInicial);

      var inputHoraFinal = document.createElement('input');
      inputHoraFinal.type = 'text';
      inputHoraFinal.placeholder = 'Hora Final';
      inputHoraFinal.classList.add('input'); // Adicionando a classe para o estilo
      divDisciplina.appendChild(inputHoraFinal);

      document.getElementById('disciplinas').appendChild(divDisciplina);
  });
});


  