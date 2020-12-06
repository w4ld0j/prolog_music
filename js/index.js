function respuesta() {
  let edo = sessionStorage.getItem("p_estado"); //estado
  let p1 = sessionStorage.getItem("p_extrover"); //personalidad
  let p2 = sessionStorage.getItem("p_intuit");
  let p3 = sessionStorage.getItem("p_thinker");
  let p4 = sessionStorage.getItem("p_juzga");
  let pers = "" + p1 + p2 + p3 + p4;
  let gen = sessionStorage.getItem("p_musica"); //genero

  var session = pl.create(1000); //Creando la sesion Tau prolog

  // Clausulas prolog
  var code_pl = `
  % Recomendar una cancion
  % query -> cancion(S,Genero,Estado,Personalidad).

  % feliz
  cancion('https://www.youtube.com/watch?v=c8YIlU_30Kk',jazz,M,P):- M = feliz ,(P= (entj) ; P=(enfj) ; P=(enfp)),!.
  cancion('https://www.youtube.com/watch?v=SsZRci3sA4I',clasica,M,P):- M = feliz ,(P= (entj) ; P=(intj) ; P=(entp) ; P=(infj)),!.
  cancion('https://www.youtube.com/watch?v=XYk2kt8K6E0',electronica,M,P):- M = feliz ,(P= (entj) ; P=(estp) ; P=(enfp)),!.
  cancion('https://www.youtube.com/watch?v=VguED7BfpgU',metal,M,P):- M = feliz ,(P= (intj) ; P=(istp) ; P=(intp) ; P=(estp)),!.
  cancion('https://www.youtube.com/watch?v=5f-wQBh-zbQ',rock_alternativo,M,P):- M = feliz ,(P= (intj) ; P=(entp) ; P=(infj) ; P=(infp) ; P=(istj) ; P=(isfj) ; P=(istp)),!.
  cancion('https://www.youtube.com/watch?v=lPIiB02uqXM',rock,M,P):- M = feliz ,(P= (entp) ; P=(intp) ; P=(infp) ; P=(istj) ; P=(isfj)),!.
  cancion('https://www.youtube.com/watch?v=PIfJ7nYQFTM',punk,M,P):- M = feliz ,(P= (intp) ; P=(infp) ; P=(istp)),!.
  cancion('https://www.youtube.com/watch?v=eWyeAIlaYUY',musica_del_mundo,M,P):- M = feliz ,(P= (infj) ; P=(enfj)),!.
  cancion('https://www.youtube.com/watch?v=qAqKsw4GjB0',blues,M,P):- M = feliz ,(P= (enfj)),!.
  cancion('https://www.youtube.com/watch?v=w47D1Fqn_sA',ambient,M,P):- M = feliz ,(P= (enfp) ; P=(isfp) ; P=(esfp)),!.
  cancion('https://www.youtube.com/watch?v=HA06Rr3bRVc',pop_g,M,P):- M = feliz ,(P= (istj) ; P=(estj) ; P=(isfp) ; P=(esfp)),!.
  cancion('https://www.youtube.com/watch?v=qCZAynQU_-8',religiosa,M,P):- M = feliz ,(P= (isfj) ; P=(estj)),!.
  cancion('https://www.youtube.com/watch?v=hvVPMIqRulE',hip_hop,M,P):- M = feliz ,(P= (estj) ; P=(estp) ; P=(esfp)),!.
  cancion('https://www.youtube.com/watch?v=X7ses5rI5U4',soul,M,P):- M = feliz ,(P= (esfj)),!.
  cancion('https://www.youtube.com/watch?v=NKzyyxvNiFc',country,M,P):- M = feliz ,(P= (esfj)),!.
  cancion('https://www.youtube.com/watch?v=oWQpQW95Ru8',reggae,M,P):- M = feliz ,(P= (isfp)),!.
  % triste
  cancion('https://www.youtube.com/watch?v=McxPJ3RYY4Y',jazz,M,P):- M = triste ,(P= (entj) ; P=(enfj) ; P=(enfp)),!.
  cancion('https://www.youtube.com/watch?v=R6OElQVVlLo',clasica,M,P):- M = triste ,(P= (entj) ; P=(intj) ; P=(entp) ; P=(infj)),!.
  cancion('https://www.youtube.com/watch?v=ilTbMVG5t6M',electronica,M,P):- M = triste ,(P= (entj) ; P=(estp) ; P=(enfp)),!.
  cancion('https://www.youtube.com/watch?v=SWkKvDD-Gu4',metal,M,P):- M = triste ,(P= (intj) ; P=(istp) ; P=(intp) ; P=(estp)),!.
  cancion('https://www.youtube.com/watch?v=-fvBrKeobyA',rock_alternativo,M,P):- M = triste ,(P= (intj) ; P=(entp) ; P=(infj) ; P=(infp) ; P=(istj) ; P=(isfj) ; P=(istp)),!.
  cancion('https://www.youtube.com/watch?v=qGxO2YNFj1o',rock,M,P):- M = triste ,(P= (entp) ; P=(intp) ; P=(infp) ; P=(istj) ; P=(isfj)),!.
  cancion('https://www.youtube.com/watch?v=2MRdtXWcgIw',punk,M,P):- M = triste ,(P= (intp) ; P=(infp) ; P=(istp)),!.
  cancion('https://www.youtube.com/watch?v=F90ymkS2dt4',musica_del_mundo,M,P):- M = triste ,(P= (infj) ; P=(enfj)),!.
  cancion('https://www.youtube.com/watch?v=6R9nWRWgl90',blues,M,P):- M = triste ,(P= (enfj)),!.
  cancion('https://www.youtube.com/watch?v=sbX_aElB2dI',ambient,M,P):- M = triste ,(P= (enfp) ; P=(isfp) ; P=(esfp)),!.
  cancion('https://www.youtube.com/watch?v=T8-96tqFCFU&vl=en',pop_g,M,P):- M = triste ,(P= (istj) ; P=(estj) ; P=(isfp) ; P=(esfp)),!.
  cancion('https://www.youtube.com/watch?v=K_-e99oLp4Y',religiosa,M,P):- M = triste ,(P= (isfj) ; P=(estj)),!.
  cancion('https://www.youtube.com/watch?v=0pZmHnj3-jQ',hip_hop,M,P):- M = triste ,(P= (estj) ; P=(estp) ; P=(esfp)),!.
  cancion('https://www.youtube.com/watch?v=KVIwQFEyZQE',soul,M,P):- M = triste ,(P= (esfj)),!.
  cancion('https://www.youtube.com/watch?v=ygxmpkHgaC8',country,M,P):- M = triste ,(P= (esfj)),!.
  cancion('https://www.youtube.com/watch?v=FqQjAUB6DJY',reggae,M,P):- M = triste ,(P= (isfp)),!.
    `;
  var parsed = session.consult(code_pl);
  var query = session.query(`cancion(S,${gen},${edo},${pers}).`); //Consulta

  function inform(msg) {
    var msgcl = msg
      .replace("S = ", "")
      .slice(0, -2)
      .replace("watch?v=", "embed/"); //Limpiar url prolog a youtube embed
    show_result.innerHTML += `<iframe width="560" height="315" src="${msgcl}"> </iframe>`;
  }
  function nanswers(msg) {
    show_nanswers.innerHTML += `<div> ${msg} </div>`; //Imprimir numero de respuestas
  }

  var count_answers = 0; //Numemero de respuestas
  var callback = function (answer) {
    if (answer === false) {
      nanswers("#Respuestas: " + count_answers);
      if (count_answers === 0) {
        //Imprimir mensaje
        show_message.innerHTML += `<div> Lo sentimos, no se encontraron coicidencias :( </div>`;
      } else {
        show_message.innerHTML += `Esperamos que lo disfrutes :)`;
      }
      return;
    }
    if (answer === null) {
      //Tiempo excedido?
      nanswers("TIMEOUT, #Respuestas: " + count_answers);
      return;
    }
    // loop
    ++count_answers;
    inform(pl.format_answer(answer));
    session.answer(callback);
  };
  // start the query loop
  session.answer(callback);
}

function save() {
  if (typeof Storage !== "undefined") {
    //Working
    // Solo guarda 3 datos para hacer la consulta: estado(1), personalidad(4), genero(1)
    // - Estados -
    var estado = document.getElementsByName("p_estado");
    if (estado[0].checked) {
      sessionStorage.setItem("p_estado", "feliz");
    } else {
      sessionStorage.setItem("p_estado", "triste");
    }

    // - Personalidad -
    var extrover = document.getElementsByName("p_extrover"); //Intovertido
    if (extrover[0].checked) {
      sessionStorage.setItem("p_extrover", "i");
    } else {
      sessionStorage.setItem("p_extrover", "e");
    }
    var intuit = document.getElementsByName("p_intuit"); //Intuitivo
    if (intuit[0].checked) {
      sessionStorage.setItem("p_intuit", "n");
    } else {
      sessionStorage.setItem("p_intuit", "s");
    }
    var thinker = document.getElementsByName("p_thinker");
    if (thinker[0].checked) {
      sessionStorage.setItem("p_thinker", "t"); //Pensador
    } else {
      sessionStorage.setItem("p_thinker", "f");
    }
    var juzga = document.getElementsByName("p_juzga");
    if (juzga[0].checked) {
      sessionStorage.setItem("p_juzga", "j");
    } else {
      sessionStorage.setItem("p_juzga", "p");
    }

    // - Genero -
    var musica = document.getElementsByName("p_musica");
    if (musica[0].checked) {
      sessionStorage.setItem("p_musica", "jazz");
    } else if (musica[1].checked) {
      sessionStorage.setItem("p_musica", "clasica");
    } else if (musica[2].checked) {
      sessionStorage.setItem("p_musica", "electronica");
    } else if (musica[3].checked) {
      sessionStorage.setItem("p_musica", "metal");
    } else if (musica[4].checked) {
      sessionStorage.setItem("p_musica", "rock_alternativo");
    } else if (musica[5].checked) {
      sessionStorage.setItem("p_musica", "rock");
    } else if (musica[6].checked) {
      sessionStorage.setItem("p_musica", "punk");
    } else if (musica[7].checked) {
      sessionStorage.setItem("p_musica", "musica_del_mundo");
    } else if (musica[8].checked) {
      sessionStorage.setItem("p_musica", "blues");
    } else if (musica[9].checked) {
      sessionStorage.setItem("p_musica", "ambient");
    } else if (musica[10].checked) {
      sessionStorage.setItem("p_musica", "pop_g");
    } else if (musica[11].checked) {
      sessionStorage.setItem("p_musica", "religiosa");
    } else if (musica[12].checked) {
      sessionStorage.setItem("p_musica", "hip_hop");
    } else if (musica[13].checked) {
      sessionStorage.setItem("p_musica", "soul");
    } else if (musica[14].checked) {
      sessionStorage.setItem("p_musica", "country");
    } else if (musica[15].checked) {
      sessionStorage.setItem("p_musica", "reggae");
    }
  } else {
    //Not working
    alert("Tu navegador no soporta Webstorage :(");
  }
}

function about() {
  alert(`Equipo:
  - José Oswaldo Becerra Chávez
  - Jesus Enrique Gutierrez de la Torre
  - Jorge Rodriguez Ovando
  - Joel Guadalupe Zepeda Vazquez
  `);
}
