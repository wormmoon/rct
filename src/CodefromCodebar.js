    // constructor (props) {
    //     super(props); //calls the React.Component class and it means you can use 'this'

    //     this.state = {
    //         value: ''
    //     };
    // }

    // onChange = (event) => { //the = and arrow binds this to 'this'
    //     this.setState({
    //         value: event.target.value //allows you to type into field and text to show up
    //     });
    // }


    // onClick = () => {
    //     /*
    //     Use this.state.value to search therough your location table for a matching location

    //     You probably want to convert your location table into a lookup table with the format:

    //     {
    //         location: {
    //             lat: 0,
    //             lng: 0
    //         }
    //     }

    //     And then you can use "this.state.value in lookupTable"

    //     and make a request using axios

    //     You can then access the response from axios and setState with the parts you want, and display them in the render method
    //     */
    // }

    // // react can only return one element hence this being enclosed in a p tag
    // render() {
    //     return (
    //         <p> 
    //             Enter a place name:
    //             <input type="text" value={this.state.value} onChange={this.onChange} />
    //             <button onClick={this.onClick}>Go</button>
    //         </p>
    //     )
    // }