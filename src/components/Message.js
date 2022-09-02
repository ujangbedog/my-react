import { Component } from "react";
class Message extends Component
{
    render()
    {
        //using 'this' bcs not func but class
        //return <h1>Message: { this.props.messagecontent }</h1>;
        return <h1>Message: { this.props.messagecode }</h1>;
    }
}

export default Message;