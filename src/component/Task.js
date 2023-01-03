import React, {useState} from 'react';

//CSS
import styles from "../App.module.scss";

//ICON
import {FaRegEdit, FaTrashAlt, FaRegCheckCircle} from "react-icons/fa";


const Task = (props) => {

    const [editing, setEditing] = useState(false);

    const editHandler = () => {
        setEditing(true);
    }

    let viewMode = {}
    let editMode = {}


    if (editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }

    const editChangeHandler = () => {

        if(props.data.length === 0) {
            alert("Write...")
        } else {
            setEditing(false)
        }
    }



    return (
        <div>
            {props.data !== "" ?
                <li>
                    <div className={styles.allNewTask}>
                        <span className={styles.taskID}>{props.number}</span>
                        <h3>{props.data}</h3>
                        <div className={styles.actionBTN} style={viewMode}>
                            <span onClick={editHandler} className={styles.edtBTN}><FaRegEdit/></span>
                            <span onClick={props.delete} className={styles.dltBTN}><FaTrashAlt/></span>
                        </div>
                    </div>
                    <div className={styles.editInput}>
                        <input
                            type="text"
                            placeholder="Change it?"
                            value={props.data}
                            onChange={(e) => props.edit(e.target.value)}
                            style={editMode}
                        />
                        <FaRegCheckCircle onClick={editChangeHandler} className={styles.editChange} style={editMode} />
                    </div>
                </li>
                : ""}
        </div>
    );
};

export default Task;