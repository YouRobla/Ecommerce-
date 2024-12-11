interface IMestricsPanel{
  datos: { title: string; description: string }[];
}
const MestricsPanel = ({datos}:IMestricsPanel)=>{
    return(
        <div className=" flex gap-5 ">
        {datos.map((elements, index) => (
          <div key={index} className={`${index !== datos.length - 1 ? 'border-r-2 b-gray-300' : ''} pr-6`}>
            <h4 className="font-satoshi-bold text-4xl">{elements.title}</h4>
            <p className="font-satoshi-light">{elements.description}</p>
          </div>
        ))}
      </div>
    );
}

export default MestricsPanel