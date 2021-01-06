import * as React from 'react';

function NewLine(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}

export default function NewLineText({text,style}) {
    return(
        <div style={style}>
            <NewLine 
                text={text}
                style={style}
            />
        </div>
    )
}
