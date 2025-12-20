function  Colleagues(){
    const  names={
        Teja:'AP',
        Sumanth:'TS',
        Ujjwal:'MH',
        Sahil:'MP',
        Sahil:'MP'
    }

    return (
        <>
        {
        Object.entries(names).map(([name,state],index)=>(
            // key attribute is used to print only unique keys in the object
            <ul key={index}>
            <p > 
                <li ><b>{name}</b>-{state}</li>
            </p>
            </ul>
        ))}
        </>
    );
}
export default  Colleagues;