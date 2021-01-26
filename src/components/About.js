import Header from './Header'
import Dummy from './Dummy'
const dummyArr = [
    { name: "Test 1", age: 28 },
    { name: "Test 2", age: 55 },
    { name: "Test 3", age: 22 },
    { name: "Test 4", age: 123 }
]

const About = () => {
    return (
        <div>
            <Header name="About" myColor='red' />
            <h1>About</h1>
            {/* {dummyArr.map((dummy, index) => <div key={index}>
                <h1>{dummy.name} </h1>
                <p> is {dummy.age} years old.</p>
            </div>)} */}
            {/* {dummyArr.map((dummy, index) => <Dummy key={index} 
            name={dummy.name} 
            age={dummy.age} />)} */}
            {dummyArr.map((dummy, index) => <Dummy key={index} all={dummy} />)}
        </div>
    );
}

export default About;