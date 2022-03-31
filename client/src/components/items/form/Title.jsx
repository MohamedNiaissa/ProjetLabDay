const Title = ({name}) => {
    
    if(name == "Contact"){
        return(
            <div className="functionality-content__title">
                <h1>Formulaire {name}</h1>
                <p> Veuillez renseignez les champs du formulaire pour pouvoir nous contacter.</p>
            </div>
        )
    }else{
        return(
            <div className="functionality-content__title">
                <h1>Formulaire {name}</h1>
                <p> Veuillez renseignez les champs du formulaire pour accéder à votre requête</p>
            </div>
        )
    }
}

export default Title;