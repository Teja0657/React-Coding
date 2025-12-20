function List(){
    const fruits=['kiwi','cucumber','carrot','watermelon'];
    fruits.sort();

    const bikes=[
        {id:1,brand:'platina'},
        {id:2,brand:'splender+'},
        {id:3,brand:'xl-heavy duty'},
        {id:4,brand:'kawasaki'},
    ]
    const listItems=fruits.map((fruit,index) =>
        <li key={index}>{fruit}</li>
    );
    const listBikes=bikes.map(bike=>
        <li key={bike.id}>{bike.brand}</li>
    );
    return(
        <>
        <h1>Fruits</h1>
        <ol>{listItems}</ol>
        <h1>Bikes</h1>
        <ol>{listBikes}</ol>
        </>
    );
}
export default List; 