import React, { useState } from 'react'
import InputEmoji from 'react-input-emoji'

export default function inputer () {
  const text  = '';

  function handleOnEnter (text) {
    console.log('enter', text)
  }

  return (
    <InputEmoji
      value={text}
      onChange={handleOnEnter}
      cleanOnEnter
      onEnter={handleOnEnter}
      placeholder="Type a message"
    />
  )
}