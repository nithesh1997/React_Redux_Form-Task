import { Card } from 'antd';
import React from 'react';
import { connect } from 'react-redux'

class ViewCard extends React.Component {
    render() {
        const { viewDetail } = this.props.login
        if (viewDetail.title == false) {
            return
        }
        return (
            <div className="site-card-border-less-wrapper">
                <Card  headless 
                    // title="Card title"
                    // bordered={false}
                    // style={{
                    //     width: 300,
                    // }}
                >
                    <h5><b className='dark red-text'>Title</b> : {viewDetail.title}</h5>
                    <h6><b className='dark red-text'>Date</b> : {viewDetail.date}</h6>
                    <h6><b className='dark red-text'>Description</b>: {viewDetail.description}</h6>

                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(ViewCard);