import React, {Component} from 'react';
import styles from './Decryption.module.css';

let re = new RegExp(/([a-z])\1/g);


class Decryption extends Component {

    state = {
        message: '',
        descryptResult: ''
    };

    onTextChange = (e) => {
        this.setState({
            message: e.currentTarget.value.toLowerCase()
        })
    };

    edwardDecrypt = (message) => {
        debugger
        if (re.test(message)) {
            const updateMessage = message.replace(re, "");
        	return this.edwardDecrypt(updateMessage);
        }
        return message;
    };

    onDecryptHandleClick = () => {
        debugger
        let result = this.edwardDecrypt(this.state.message);
        this.setState({message: '', descryptResult: result})
    };

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.decryption_container}>
                    <div className={styles.decryption_text}>
						<textarea placeholder={'Enter text to decrypt'}
                                  onChange={this.onTextChange} value={this.state.message}/>
                    </div>
                    <div className={styles.enigma_block}>
                        <button onClick={this.onDecryptHandleClick}>Descrypt</button>
                    </div>

                    <div className={styles.result_block}>
                        <div className={styles.result_block_text}>
                            <h3>Result message:</h3> {this.state.descryptResult}
                        </div>
                    </div>
                </div>
                <div className={styles.bg_wrapper}></div>
            </div>
        );
    }
}

export default Decryption;
