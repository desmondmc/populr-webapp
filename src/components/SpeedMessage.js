import React, { Component } from 'react'

class SpeedMessage extends Component {
    constructor(props) {
        super(props)

        const singleSpacedMessage = props.message.replace(/\s\s+/g, ' ')
        const words = singleSpacedMessage.split(' ')

        this.state = {
            word: "3"
        };
        
        this.playMessage(["3", "2", "1"], 1000, ()=> {
            this.playMessage(words, 260, () => {
                setTimeout(() => {
                    this.props.onDismissClick()
                }, 260 * 1.5)
            })
        })
    }

    render() {
        const message = this.props.message
        const words = message.split(' ')

        return (
            <div className="SpeedMessage" onClick={() => { this.props.onDismissClick() } }>
                <div>
                    { this.state.word }
                </div>
            </div>
        );
    }

    playCountDown() {
        this.state = {
            word: "3"
        };
    }

    playMessage(words, delay, completion) {
        for (const [index, word] of words.entries()) {
            console.log("Index:" + index)

            setTimeout(() => {
                this.setState({
                    word: word
                });
            }, delay * index)
        }

        setTimeout(() => {
            completion()
        }, delay * words.length)
    }
}

export default SpeedMessage