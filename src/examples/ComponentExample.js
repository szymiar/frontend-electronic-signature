export function Car() {
    return <h2>Hi, I am a Car!</h2>;
}
// root.render(<Car />);

export function Car2(props) {
    return <h2>I am a {props.color} Car!</h2>;
}
// root.render(<Car2 color="red"/>);


export function Garage() {
    return (
        <>
            <h1>Who lives in my Garage?</h1>
            <Car />
        </>
    );
}


function Car3(props) {
    return <h2>I am a { props.brand.model }!</h2>;
}

export function Garage2() {
    const carInfo = { name: "Ford", model: "Mustang" };
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <Car3 brand={ carInfo } />
        </>
    );
}

function MissedGoal() {
    return <h1>MISSED!</h1>;
}

function MadeGoal() {
    return <h1>Goal!</h1>;
}

export function Goal(props) {
    const isGoal = props.isGoal;
    return (
        <>
            { isGoal ? <MadeGoal/> : <MissedGoal/> }
        </>
    );
}
// root.render(<Goal isGoal={false} />);
