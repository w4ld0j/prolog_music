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
