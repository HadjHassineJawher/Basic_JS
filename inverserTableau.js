const inverserTableau =(tableau) =>{
    for (let i = 0, j = tableau.length - 1; i < j; i++, j--) {
        [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
    }
}

let Tableau = [1, 1, 2, 3, 4];
inverserTableau(Tableau);
console.table(Tableau);
