import React from "react";
function Inputs(props) {

    function valueChanged(event) {
        const value = event.target.value;
        const name = event.target.name;
        const newInputs = [];
        props.inputs.map(singleInput => newInputs.push(singleInput));
        // console.log("name="+name);
        newInputs.filter((singleInput, index) => {
            if (name + "" === index + "") {
                newInputs[index] = value;
            }
        });

        newInputs.map(item => console.log(item));

        props.setInputs(newInputs);
    }

    return (
        <div className={"inputs-div"}>
            {
                props.inputs.map((singleInput, index) => {
                    return <div>
                    <input 
                            onChange={valueChanged} 
                            value={singleInput} key={index} 
                            name={index} 
                            className={"choice-input"} 
                            autoComplete={"off"} />
                            <br/>
                    </div>
                }
                )
            }
        </div>
    );
}

export default Inputs;