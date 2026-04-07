function Arrow(){

    function callfun()
        {
            alert("Function call");
        }
 
    return(
        <>
        <h1>example of Arrow function</h1>
        <button onClick={callfun}>Click to call function</button>
        </>
    )
}

export default Arrow