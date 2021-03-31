import React from 'react'
import Head from 'next/head'
import tw, { styled, theme } from 'twin.macro'
import { HiChevronRight } from 'react-icons/hi'
import { keyframes } from 'styled-components'

import MossoLogo from '../components/MossoLogo'
import SignupForm from '../components/SignupForm'
import Modal from '../components/Modal'

export default function Home() {
  const [showVideo, setShowVideo] = React.useState(false)

  return (
    <>
      <Head>
        <title>Mosso</title>
        <meta
          name="description"
          content="A brand new, climate-controlled, all-in-one growing appliance that can grow produce from anywhere in the world."
        />
      </Head>
      <main tw="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-800 px-8 py-20 lg:py-32">
        <article tw="text-white text-center">
          <Title>
            <LeftTitle>m</LeftTitle>
            <StyledLogo />
            <RightTitle tw="-ml-2">sso</RightTitle>
          </Title>
          <div tw="space-y-20 flex flex-col items-center">
            <Text style={{ '--delay': '0.4s' }}>
              A brand new, climate-controlled, all-in-one growing appliance that
              can grow produce from anywhere in the world. Bring your childhood
              garden to your home kitchen, today.
            </Text>
            <Links style={{ '--delay': '0.5s' }}>
              <WatchFilmButton onClick={() => setShowVideo(true)}>
                Watch the film{' '}
                <span tw="ml-2">
                  <HiChevronRight />
                </span>
              </WatchFilmButton>
              <a
                tw="flex items-center hover:underline"
                href="./infographic.pdf"
                target="_blank"
              >
                Get the infographic
                <span tw="ml-2">
                  <HiChevronRight />
                </span>
              </a>
            </Links>
            <SignupForm style={{ opacity: 0, '--delay': '0.6s' }} />
          </div>
        </article>
        {showVideo && (
          <Modal onClose={() => setShowVideo(false)}>
            <VideoContainer>
              <iframe
                src="https://www.youtube.com/embed/ubdWSn14sXM"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </VideoContainer>
          </Modal>
        )}
      </main>
    </>
  )
}

// -- Keyframes --

const fadeLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const fadeRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

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

// -- Styling --

const Title = styled.h1`
  ${tw`flex items-center justify-center`}

  font-family: MuseoModerno, sans-serif;
  font-size: clamp(6rem, 15vw, 12rem);
  line-height: 1;
  margin-bottom: 0.5em;
`

const VideoContainer = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  width: min(calc(100vw - 2rem), 1200px);
  border-radius: 1rem;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`

const TitleText = styled.span`
  ${tw`bg-gradient-to-b from-white to-gray-600`}
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation-fill-mode: forwards;
`

const LeftTitle = styled(TitleText)`
  animation: ${fadeLeft} 0.8s ease-out;
`

const RightTitle = styled(TitleText)`
  animation: ${fadeRight} 0.8s ease-out;
`

const Links = styled.ul`
  ${tw`space-x-8`}

  opacity: 0;
  animation: ${fadeUp} 0.8s ease-out;
  animation-fill-mode: forwards;
  animation-delay: var(--delay, 0s);
  display: flex;
  align-items: center;
`

const WatchFilmButton = styled.button`
  ${tw`flex text-base items-center md:text-xl border-2 border-gray-300 hover:(bg-gray-300 text-gray-800)`}

  padding: 1rem;
  border-radius: 1rem;
  transition: all 0.2s ease;
`

const StyledLogo = styled(MossoLogo)`
  --size: clamp(8rem, 20vw, 16rem);
  width: var(--size);
  height: var(--size);
  transform: translateY(1rem);
`

const Text = styled.p`
  ${tw`bg-gradient-to-b from-white to-gray-600`}
  line-height: 1.4;

  @media screen and (min-width: ${theme`screens.md`}) {
    font-size: clamp(1.25rem, 5vw, 2.5rem);
    line-height: 1.1;
  }

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 36ch;

  animation: ${fadeUp} 0.8s ease-out;
  animation-fill-mode: forwards;
  animation-delay: var(--delay, 0s);
  opacity: 0;
`
