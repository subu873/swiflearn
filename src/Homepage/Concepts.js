import React from 'react'
import { ActionButtonGroup, ActionButton } from 'common/style'
import Loader from 'common/Loader'

export default function Concepts(props) {
  return (
    <>
      <Loader visible={props.loader} />
      <ActionButtonGroup>
        {props.concepts.map(concept => (
          <button
            key={concept.id}
            onClick={() => {
              /** fetch question list action here */
            }}
          >
            {concept.subject}
          </button>
        ))}
      </ActionButtonGroup>
    </>
  )
}
