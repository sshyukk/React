import React from 'react'

function Hello({ color, name }) {
    return (
        <div style={{ color }}>안녕하세요 {name}</div>
    )
}

Hello.defaultProps = {
    name: '이름 없음',
}

export default Hello
