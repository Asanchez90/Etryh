const anchor = document.getElementById('myAnchor');

const TEAMS = [
    // {
  //   team_name: '',
  //   tank: '',
  //   tankRio: '',
  //   heal: '',
  //   healRio: '',
  //   dps1: '',
  //   dps1Rio: '',
  //   dps2: '',
  //   dps2Rio: '',
  //   dps3: '',
  //   dps3Rio: '',
  //   image: '',
  //   twitch: '',
  //   twitchLink:
  //     '',
  // },
  {
    team_name: 'Policía del Deplete',
    tank: 'Alfirex',
    tankRio: 'https://raider.io/characters/eu/uldum/Alfirex',
    heal: 'Weirddisc',
    healRio: 'https://raider.io/characters/eu/shendralar/Weirddisc',
    dps1: 'Finghin',
    dps1Rio: 'https://raider.io/characters/eu/zuljin/Finghin',
    dps2: 'Deikonen',
    dps2Rio: 'https://raider.io/characters/eu/uldum/Deikonen',
    dps3: 'Rummy',
    dps3Rio: 'https://raider.io/characters/eu/sanguino/Rummy',
    image: 'https://res.cloudinary.com/dcs7ntcz7/image/upload/v1682689022/Finghin_wcdofw.jpg',
    twitch: 'Finghin',
    twitchLink:
      'https://www.twitch.tv/finghin26',
  },
  {
    team_name: 'Los Elegidos de Baine',
    tank: 'Nyalich',
    tankRio: 'https://raider.io/characters/eu/zuljin/Nyalich',
    heal: 'Mossh',
    healRio: 'https://raider.io/characters/eu/sanguino/Mossh',
    dps1: 'Alyssïa',
    dps1Rio: 'https://raider.io/characters/eu/zuljin/Alyss%C3%AFa',
    dps2: 'Zukidh',
    dps2Rio: 'https://raider.io/characters/eu/zuljin/Zukidh',
    dps3: 'Hellsoldier',
    dps3Rio: 'https://raider.io/characters/us/uldum/H%C3%ABllsoldier',
    image: 'https://res.cloudinary.com/dcs7ntcz7/image/upload/v1682689023/Etryh/Nyalich_zy3rgt.png',
    twitch: 'Alyssïa',
    twitchLink:
    'https://www.twitch.tv/pxdragonair',
  },
  {
    team_name: 'Glory Never Dies',
    tank: 'Minithanatos',
    tankRio: 'https://raider.io/characters/eu/sanguino/Minithanatos',
    heal: 'Ölwen',
    healRio: 'https://raider.io/characters/eu/sanguino/%C3%96lwen',
    dps1: 'Toritoelpala',
    dps1Rio: 'https://raider.io/characters/eu/sanguino/Toritoelpala',
    dps2: 'Wypë',
    dps2Rio: 'https://raider.io/characters/eu/dun-modr/Wyp%C3%AB',
    dps3: 'Kröppâ',
    dps3Rio: 'https://raider.io/characters/eu/sanguino/Kr%C3%B6pp%C3%A2',
    image: 'https://res.cloudinary.com/dcs7ntcz7/image/upload/v1682689023/Etryh/sniperofangel-profile_image-b6431933a60e7ee5-70x70_q1ear0.png',
    twitch: 'Minithanatos',
    twitchLink:
      'https://www.twitch.tv/sniperofangel',
  },
  {
    team_name: 'Que Empape',
    tank: 'Skarw',
    tankRio: 'https://raider.io/characters/eu/tarren-mill/Skarw',
    heal: 'Beyaquita',
    healRio: 'https://raider.io/characters/eu/sanguino/Beyaquita',
    dps1: 'Daylox',
    dps1Rio: 'https://raider.io/characters/eu/sanguino/Daylox',
    dps2: 'Galiozx',
    dps2Rio: 'https://raider.io/characters/eu/sanguino/Galiozx',
    dps3: 'Perfectenemy',
    dps3Rio: 'https://raider.io/characters/eu/dun-modr/Perfectenemy',
    image: 'https://res.cloudinary.com/dcs7ntcz7/image/upload/v1682700341/Etryh/gines_que_empape_v9rgq2.png',
    twitch: 'Beyaquita',
    twitchLink:
      'https://www.twitch.tv/Herculotex',
  },
  {
    team_name: 'Depleted',
    tank: 'Warliss',
    tankRio: 'https://raider.io/characters/eu/sanguino/Warliss',
    heal: 'Ryöta',
    healRio: 'https://raider.io/characters/eu/zuljin/Ry%C3%B6ta',
    dps1: 'Lørbus',
    dps1Rio: 'https://raider.io/characters/eu/sanguino/L%C3%B8rbus',
    dps2: 'Sephíroth',
    dps2Rio: 'https://raider.io/characters/eu/sanguino/Seph%C3%ADroth',
    dps3: 'Ktecazo',
    dps3Rio: 'https://raider.io/characters/eu/sanguino/Ktecazo',
    image: 'https://res.cloudinary.com/dcs7ntcz7/image/upload/v1682853350/Etryh/lissmonk_bpclm2.jpg',
    twitch: 'lissmonk',
    twitchLink:
      'https://www.twitch.tv/lissmonk',
  },
    // {
  //   team_name: '',
  //   tank: '',
  //   tankRio: '',
  //   heal: '',
  //   healRio: '',
  //   dps1: '',
  //   dps1Rio: '',
  //   dps2: '',
  //   dps2Rio: '',
  //   dps3: '',
  //   dps3Rio: '',
  //   image: '',
  //   twitch: '',
  //   twitchLink:
  //     '',
  // },

 
];

const pintarEquipos = (equipos) => {
  console.log(TEAMS);
  const equipos$$ = document.querySelector('#equipo-js');
  equipos$$.innerHTML = '';

  for (let i = 0; i < equipos.length; i++) {
    const equipo = equipos[i];
    // aqui pongo las variables y creo el elemento que quiero

    const divimg$$ = document.createElement('div');
    const img$$ = document.createElement('img');
    const team_name$$ = document.createElement('h3');
    // tank rio
    // const tank$$ = document.createElement('h4');
    const divtanktankRio$$ = document.createElement('div')
    const tankRio$$ = document.createElement('a');
    tankRio$$.href = '';
    // heal rio
    const divheal$$ = document.createElement('div')
    const heal$$ = document.createElement('a');
    heal$$.href = '';
    // dps rio
    const divdps1$$ = document.createElement('div')
    const dps1$$ = document.createElement('a');
    dps1$$.href = '';
    // dps rio
    const divdps2$$ = document.createElement('div')
    const dps2$$ = document.createElement('a');
    dps2$$.href = '';
    // dps rio
    const divdps3$$ = document.createElement('div')
    const dps3$$ = document.createElement('a');
    dps3$$.href = '';
    
    // twitch
    const divtwitch$$ = document.createElement('div');
    const twitch$$ = document.createElement('a');
    twitch$$.href = '';
    //  aqui iria el iframe de twitch
    // const iframe$$ = document.createElement('iframe');
    // iframe$$.href = '';

    const div$$ = document.createElement('div');

    divimg$$.classList.add('img-wrapper');
    divtanktankRio$$.classList.add('tank-wrapper');
    divheal$$.classList.add('heal-wrapper');
    divdps1$$.classList.add('dps1-wrapper');
    divdps2$$.classList.add('dps2-wrapper');
    divdps3$$.classList.add('dps3-wrapper');
    divtwitch$$.classList.add('twitch-wrapper');
    

    team_name$$.textContent = equipo.team_name;
    // tank$$.textContent = equipo.tank;
    tankRio$$.textContent = equipo.tank;
    heal$$.textContent = equipo.heal;
    dps1$$.textContent = equipo.dps1;
    dps2$$.textContent = equipo.dps2;
    dps3$$.textContent = equipo.dps3;
    twitch$$.textContent = "streaming ---> POV " + equipo.twitch;
    // iframe$$.textContent = equipo.iframe;

    // aqui pongo lo que quiero que me salga en el elemento "p,h4,img...."
    img$$.src = equipo.image;
    img$$.classList.add('image-equipo');
    
    
    div$$.classList.add('equipo');

    twitch$$.href = equipo.twitchLink;
    twitch$$.target = '_blank';
    twitch$$.rel = 'noopener noreferrer';

    tankRio$$.href = equipo.tankRio;
    tankRio$$.target = '_blank';
    tankRio$$.rel = 'noopener noreferrer';

    heal$$.href = equipo.healRio;
    heal$$.target = '_blank';
    heal$$.rel = 'noopener noreferrer';
    
    dps1$$.href = equipo.dps1Rio;
    dps1$$.target = '_blank';
    dps1$$.rel = 'noopener noreferrer';
    
    dps2$$.href = equipo.dps2Rio;
    dps2$$.target = '_blank';
    dps2$$.rel = 'noopener noreferrer';
    
    dps3$$.href = equipo.dps3Rio;
    dps3$$.target = '_blank';
    dps3$$.rel = 'noopener noreferrer';

    // iframe$$.src = equipo.twitch;
    // iframe$$.src = equipo.iframe;
    // iframe$$.allow =
    //   'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    // iframe$$.target="_parent"

    // aqui le digo donde quiero que me lo ponga y y entre "()" pongo mi variable del elemento

    div$$.appendChild(team_name$$);
    divimg$$.appendChild(img$$);
    div$$.appendChild(divimg$$);
    // div$$.appendChild(tank$$);
    divtanktankRio$$.appendChild(tankRio$$);
    div$$.appendChild(divtanktankRio$$);

    divheal$$.appendChild(heal$$);
    div$$.appendChild(divheal$$);
    // div$$.appendChild(heal$$);

    divdps1$$.appendChild(dps1$$);
    div$$.appendChild(divdps1$$);
    // div$$.appendChild(dps1$$);

    divdps2$$.appendChild(dps2$$);
    div$$.appendChild(divdps2$$);
    // div$$.appendChild(dps2$$);

    divdps3$$.appendChild(dps3$$);
    div$$.appendChild(divdps3$$);
    // div$$.appendChild(dps3$$);
    
    divtwitch$$.appendChild(twitch$$);
    div$$.appendChild(divtwitch$$);
    // div$$.appendChild(iframe$$);
    equipos$$.appendChild(div$$);
  }
};

// ejecucion de la funcion ---> recojo parametros
pintarEquipos(TEAMS);

// pintar flecha ir arriba

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 20) {
    document.getElementById("btn-scroll-up").style.display = "block";
  } else {
    document.getElementById("btn-scroll-up").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

document.getElementById("btn-scroll-up").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});




