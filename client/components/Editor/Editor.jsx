import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import RichTextEditor from 'react-rte'

function Editor({ initialState, onChange }) {
  const [editorState, setEditorState] = useState(
    RichTextEditor.createValueFromString(initialState, 'markdown')
  )

  useEffect(() => {
    setEditorState(
      RichTextEditor.createValueFromString(initialState, 'markdown')
    )
  }, [initialState])

  return (
    <RichTextEditor
      value={editorState}
      onChange={value => {
        setEditorState(value)
        onChange(value.toString('markdown'))
      }}
    />
  )
}

Editor.propTypes = {
  initialState: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Editor
