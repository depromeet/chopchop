import React, { Component }  from 'react'
import { Form } from 'semantic-ui-react'

class RoomMaker extends Component {
    handleChange(e,value,item){
        value[item] = e.target.value
    }
    render() {
        const { visible } = this.props;
        if(!visible) return null;
        let roomName = "";
        const userId = this.props.userId;
        return (  
            <Form>
                <Form.Field>
                <label>방 제목</label>
                <input 
                    placeholder='방제목' 
                    type='text'
                    onChange={e => roomName = e.target.value}
                    />
                </Form.Field>
                <h3 type='submit' onClick={e => this.props.onMakeNewRoom(roomName, userId)}>
                    Submit
                </h3>
            </Form>         
        );
    }
}
export default RoomMaker