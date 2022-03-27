    const pokeType = document.getElementById("pokeType");
    const pokeHp = document.getElementById("pokeHp");
    const pokeAttack = document.getElementById("pokeAttack");
    const pokeDefense = document.getElementById("pokeDefense");
    const pokeMoves = document.getElementById("pokeMoves");

const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");    
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res)=>{
        if(res.status != "200") {
            console.log(res);
            pokeImage("./sadpikachu.gif");
        }
        else{
            return res.json();
        }
        
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default; 
        console.log(pokeImg);
        let pokeType = data.types[0].type.name;
        console.log(pokeType);
        let pokeHp = data.stats[0].base_stat;
        console.log(pokeHp);
        let pokeAttack = data.stats[1].stat.base_stat;
        console.log(pokeAttack);
        let pokeDefense = data.stats[2].base_stat;
        console.log(pokeDefense);
        let pokeMoves = data.moves;
        console.log(pokeMoves);
        
        pokeImage(pokeImg);
        print_pokeMoves(data);
        print_pokeType(data);
        print_pokeStats(data);
        
    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const print_pokeType = (data) => {
    pokeType.innerText = "";

    pokeType.innerText = data.types[0].type.name;
}

const print_pokeMoves = (data) => {
    let moves = data.moves;
    pokeMoves.innerHTML = "";

    for (let i = 0; i < moves.length; i++) {
        const move = document.createElement("li");
        pokeMoves.appendChild(move);

        move.innerText = moves[i].move.name;
    }
}

const print_pokeStats = (data) => {
    pokeHp.innerText = data.stats[0].base_stat;
    pokeAttack.innerText = data.stats[1].base_stat;
    pokeDefense.innerText = data.stats[2].base_stat;
}