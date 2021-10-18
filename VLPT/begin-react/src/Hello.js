import React from 'react'

function Hello({ color, name, isSpecial }) {
    return (
        // 자바스크립트의 값을 사용해도 중괄호, 변수 데이터 값을 사용해도 중괄호 사용.
        <div style={{ color }}>
            { isSpecial ? <b>*</b> : null }
            { isSpecial && <b>*</b>} 
            안녕하세요 {name}
        </div>
    )
}

Hello.defaultProps = {
    name: '이름 없음',
}

export default Hello
