import React from 'react';

class NotificationToast extends React.Component {
    dismiss = () => {
        this.props.dismissToast();
    } 

    render() {
        const styles = {
            backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : "grey",
            color: this.props.color ? this.props.backgroundColor : "white"
          };

        return (
            <div style={styles} className={"toast-container" + (!this.props.showToast ? " hidden" : "") }
                role="alert"
                aria-live="assertive"
                aria-atomic="true">
                <button type="button btn-close"
                    onClick={this.dismiss}
                    className="toast-close"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="toast-text">
                    {this.props.message}
                </div>
            </div>
        )
    }
}

export default NotificationToast;