import React from 'react'

function alert(props) {
  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toLowerCase() + lower.slice(1);
  }

  return (
    props.alert && <div className={`alert alert-${props.alert.type}`} role="Alert">
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
    </div>
  )
}

export default alert
