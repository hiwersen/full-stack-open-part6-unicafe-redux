import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = deepFreeze({
    good: 0,
    ok: 0,
    bad: 0
  })

  test('should return a proper initial state when called with undefined state', () => {
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })

  test('ok is incremented', () => {
    const action = {
      type: 'OK'
    }
    const state = initialState

    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0
    })
  })

  test('bad is incremented', () => {
    const action = {
      type: 'BAD'
    }
    const state = initialState

    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1
    })
  })

  test('counterReducer is a pure function', () => {
    const action = {
      type: 'GOOD'
    }
    const inputState = initialState
    const inputStateCopy = { ...inputState }

    const outputState1 = counterReducer(inputState, action)
    const outputState2 = counterReducer(inputState, action)

    // If there is a change in the output state...
    expect(inputState).not.toEqual(outputState1)

    // ...the input state is not changed
    expect(inputState).toEqual(inputStateCopy)
    
    // Always returns the same response when called with the same parameter
    expect(outputState1).toEqual(outputState2)
  })
})