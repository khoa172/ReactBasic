import React from 'react';

class Mycomponents extends React.Component {

    state = {
        name: 'khoa',
        ho: 'nguyen'

    }


    render() {

        return (
            <React.Fragment>
                <div className='first'>
                    hello my Component,my name is {this.state.name}
                    <div></div>
                </div>
                <div className='second'>
                    Ho : {this.state.ho}


                </div>
            </React.Fragment>
        )
    }

}


export default Mycomponents;