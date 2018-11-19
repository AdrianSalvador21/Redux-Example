

//Acciones
interface Action {
    type:string;
    payload?: any;
}

// const incrementadorAction: Action =  {
//     type: 'INCREMENTAR'
// };

function reducer(state = 10, action:Action){    
    switch (action.type){
        case 'INCREMENTAR':
            return state +=1;

        case 'DECREMENTAR':
            return state -=1;

        case 'MULTIPLICAR':
            return state * action.payload;

        case 'DIVIDIR':
            return state / action.payload;

        default: 
            return state;
    }
}

//Usar el reducer

const incrementadorAction: Action =  {
    type: 'INCREMENTAR'
};

const decrementadorAction: Action =  {
    type: 'DECREMENTAR'
};

const multiplicarAction: Action =  {
    type: 'MULTIPLICAR',
    payload: 2
};

const dividirAction: Action =  {
    type: 'DIVIDIR',
    payload: 2
};

reducer(10, incrementadorAction);
console.log(reducer(10, incrementadorAction)); //11
console.log(reducer(10, decrementadorAction)); //9
console.log(reducer(10, multiplicarAction)); //20
console.log(reducer(10, dividirAction)); //5
