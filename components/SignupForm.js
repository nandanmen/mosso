import React from 'react'
import tw, { styled, theme } from 'twin.macro'
import { HiChevronRight } from 'react-icons/hi'
import { FaSpinner } from 'react-icons/fa'
import { keyframes } from 'styled-components'

const State = {
  Idle: 'idle',
  Loading: 'loading',
  Done: 'done',
}

export default function SignupForm(props) {
  const [formState, setState] = React.useState(State.Idle)
  const inputRef = React.useRef()

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    setState(State.Loading)
    await fetch(
      `https://api.convertkit.com/v3/forms/${process.env.NEXT_PUBLIC_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: process.env.NEXT_PUBLIC_FORM_API_KEY,
          email: inputRef.current.value,
        }),
      }
    )
    setState(State.Done)
  }

  return (
    <>
      <Form
        tw="flex flex-wrap justify-center relative"
        onSubmit={handleSubmit}
        {...props}
      >
        <Label tw="mb-6 text-center md:(mb-0 border-r-2 border-current text-left)">
          Be in the know — sign up now to receive updates.
        </Label>
        <Input
          disabled={formState === State.Loading}
          ref={inputRef}
          type="email"
          placeholder="john@example.com"
          onChange={() => setState(State.Idle)}
        />
        <Arrow disabled={formState === State.Loading}>
          {formState !== State.Loading ? (
            <HiChevronRight />
          ) : (
            <span tw="block animate-spin">
              <FaSpinner />
            </span>
          )}
        </Arrow>
        {formState === State.Done && (
          <p tw="absolute -bottom-12">
            We've sent you a confirmation email — thanks for signing up!
          </p>
        )}
      </Form>
    </>
  )
}

// -- Keyframes --

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

// -- Styled --

const Form = styled.form`
  animation: ${fadeUp} 0.8s ease-out;
  animation-fill-mode: forwards;
  animation-delay: var(--delay, 0s);
`

const Label = styled.label`
  max-width: 20rem;
  padding: 0 2rem;
`

const Input = styled.input`
  ${tw`border-b-2`}

  --border-color: ${theme`colors.gray.500`};

  margin: 0 2rem;
  padding: 0.5rem 0;
  background: none;
  border-color: var(--border-color);

  &:focus {
    outline: none;
    --border-color: ${theme`colors.blue.300`};
  }
`

const Arrow = styled.button`
  ${tw`text-gray-500`}

  font-size: 1.5rem;
  align-self: center;
`
