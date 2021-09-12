import React from 'react';

const FrameworkList = (props) => {
    // 記事が渡されてない時または記事が1記事も存在しない時
    if (!props.frameworks || !props.frameworks.length) {
        return <h1>No data!</h1>
    }
    return (
        <div>
            <ul>
                 {/*li要素にはkeyが必要*/}
                {props.frameworks.map(({id, item}) => (
                    <li key={id}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default FrameworkList;