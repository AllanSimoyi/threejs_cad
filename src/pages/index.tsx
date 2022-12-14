import BoxComponent from '@/components/canvas/Box'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})

// dom components goes here
const Page = (props) => {
  return (
    <>
      <div className="flex-col items-center justify-center p-8">
        <h1>Metallica - Blackened</h1>
      </div>
    </>
  )
}

// canvas components goes here
// It will receive same props as Page component (from getStaticProps, etc.)
Page.r3f = (props) => (
  <>
    {/* <ambientLight />
    <pointLight position={[10, 10, 10]} /> */}
    {/* <Shader /> */}
    <BoxComponent route="/" />
  </>
)

export default Page

export async function getStaticProps () {
  return {
    props: {
      title: 'Index',
    },
  }
}
