import React, {useState} from 'react';
import axios from "axios";

function MockServerTest(props) {
    const [clicked, setClicked] = useState(false)
    const [username, setUsername] = useState("")
    const [error, setError] = useState("")

    const fetchUser = async () => {
        axios.get("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => {
                const {username} = res.data
                setUsername(username)
                setClicked(true)
            }).catch(() => {
            setError("fetchが失敗しました。")
        })
    }
    const buttonText = clicked ? "Loaded" : "start Fetch"


    return (
        <div>
            {/*disableでfetchが終わるまで押せなくなる。*/}
            <button onClick={fetchUser} disabled={clicked}>
                {buttonText}
            </button>
            {username && <h3>{username}</h3>}


            {/*idで探索できるようにtestidをつけておく*/}
            {error && <p data-testid="error">{error}</p>}


        </div>
    );
}

export default MockServerTest;