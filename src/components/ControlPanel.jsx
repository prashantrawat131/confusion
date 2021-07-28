function ControlPanel(props) {
    return (
        <div className={"center-everything control-panel"}>
            
            <img 
            alt={"minus-button"} 
            className="sameLine control-panel-elements control-buttons" 
            onClick={props.decreaseInputs} 
            src={"/minus.svg"}/>
            
            <p className="sameLine control-panel-elements input-count">{props.numberOfInputs}</p>
            
            <img 
            className="sameLine control-panel-elements control-buttons" 
            onClick={props.increaseInputs}
            src={"/plus.svg"}
            alt={"plus-button"}
            />
        
        </div>
    );
}

export default ControlPanel;
