import React from 'react';
import ReactDOM from 'react-dom';

export default class Tooltip extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            opacity: false
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        const tooltipNode = ReactDOM.findDOMNode(this)
        this.setState({
            opacity: !this.state.opacity,
            top: tooltipNode.offsetTop,
            left: tooltipNode.offsetLeft
        })
    }

    render() {
        const style = {
            zIndex: (this.state.opacity) ? 1000 : -1000,
            opacity: +this.state.opacity,
            top: (this.state.top || 0) - 100,
            left: (this.state.left || 0) - 230,
            cursor: 'text'
        }
        
        return(
            <div style={{display: 'inline', cursor: 'pointer'}}>
                <span
                    onClick={this.toggle}
                >
                    {this.props.children} 
                </span>
                <div className="tooltip bottom"
                    style={style}
                    role="tooltip"
                >
                    <div className="tooltip-inner" style={{backgroundColor: '#7c60d5', opacity: '0.9', paddingTop: '20px'}}>
                        <div className="close-tooltip" 
                            onClick={() => this.setState({opacity: false})} 
                            style={
                                {
                                    cursor: 'pointer', 
                                    position: 'absolute', 
                                    left:'90%', 
                                    top: '0', 
                                    fontWeight: '600', 
                                    fontSize: '20px', 
                                    color: '#33e2a0'
                                }
                            }
                        >
                            x
                        </div>
                        {this.props.text}
                    </div>
                </div>
            </div>
        )
    }
}